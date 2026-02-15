import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { ALL_NODES } from '../data/skillTreeData';
import { SKILL_TOPIC_COLORS, type Topic } from '../types';
import type { UserProgress } from '../lib/progress';
import { computeNodeStatus } from '../lib/progress';

interface Props {
  progress: UserProgress;
  onSelectNode: (nodeId: string) => void;
  onViewportChange?: (vp: { x: number; y: number; w: number; h: number; scale: number }) => void;
}

export interface CivTreeViewRef {
  navigateTo: (x: number, y: number) => void;
}

const TIER_LABELS = ['Year 8', 'Year 9', 'Year 10 / 10A', 'Year 11 (U1&2)', 'Year 12 (U3&4)', 'VCE Exam'];
const TIER_COLORS = ['#6366F1', '#8B5CF6', '#A855F7', '#3B82F6', '#0EA5E9', '#F59E0B'];

const NODE_ICONS: Record<string, string> = {
  'y8-number': '🔢', 'y8-algebra': '✖️', 'y8-statistics': '📊', 'y8-probability': '🎲',
  'y9-number': '🔬', 'y9-algebra': '📈', 'y9-statistics': '📉', 'y9-probability': '🎯',
  'y10-number': '💰', 'y10-algebra': '📐', 'y10-statistics': '🔍', 'y10-probability': '🧩',
  'y10a-algebra': '🔗', 'y10a-probability': '🎰',
  'y11-a1-linear': '📏', 'y11-a2-quadratics': '〰️', 'y11-a3-domain-range': '🗺️',
  'y11-a4-transformations': '🔄', 'y11-a5-trigonometry': '📐', 'y11-a6-logs-indices': '📊',
  'y11-a7-differentiation': '📉', 'y11-a8-integration': '∫', 'y11-a9-combinatorics': '🎲',
  'y12-a1-algebra-functions': '⚡', 'y12-a2-differentiation': '🏔️', 'y12-a3-integration': '🌊',
  'y12-a4-discrete-prob': '🎰', 'y12-a5-continuous-prob': '🔔', 'y12-a6-pseudocode': '💻',
  'vce-exam1': '✏️', 'vce-exam2': '🖥️',
};

const TOPIC_ICONS: Record<string, string> = {
  FUNCTIONS: '📐', CALCULUS: '∫', PROBABILITY: '🎲',
};

function getNodesByTier() {
  const tiers: Record<number, typeof ALL_NODES> = {};
  ALL_NODES.forEach(n => {
    if (!tiers[n.tier]) tiers[n.tier] = [];
    tiers[n.tier].push(n);
  });
  return tiers;
}

interface LayoutResult {
  positions: Record<string, { x: number; y: number; tier: number }>;
  totalHeight: number;
  totalWidth: number;
}

function computePathLayout(isMobile: boolean): LayoutResult {
  const tiers = getNodesByTier();
  const positions: Record<string, { x: number; y: number; tier: number }> = {};

  const V_SPACING = isMobile ? 110 : 130;
  const TIER_GAP = isMobile ? 60 : 80;
  const CENTER_X = isMobile ? 180 : 400;
  const SWING = isMobile ? 80 : 140;

  let currentY = 80;
  let globalNodeIdx = 0;

  Object.entries(tiers).forEach(([tierStr, nodes]) => {
    const tier = Number(tierStr);
    currentY += TIER_GAP;

    nodes.forEach((node) => {
      const phase = globalNodeIdx * 0.8;
      const xOffset = Math.sin(phase) * SWING;
      positions[node.id] = { x: CENTER_X + xOffset, y: currentY, tier };
      currentY += V_SPACING;
      globalNodeIdx++;
    });

    currentY += 30;
  });

  return { positions, totalHeight: currentY + 100, totalWidth: isMobile ? 360 : 800 };
}

function findCurrentNode(progress: UserProgress): string | null {
  for (const node of ALL_NODES) {
    const status = computeNodeStatus(node.id, node.prerequisites, progress);
    if (status === 'unlocked' || status === 'in-progress') return node.id;
  }
  return null;
}

export default function CivTreeView({ progress, onSelectNode }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);
  const [isMobile, setIsMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 640);

  useEffect(() => {
    const handler = () => setIsMobile(window.innerWidth < 640);
    window.addEventListener('resize', handler);
    return () => window.removeEventListener('resize', handler);
  }, []);

  const layout = useMemo(() => computePathLayout(isMobile), [isMobile]);
  const { positions: nodePositions, totalHeight, totalWidth } = layout;
  const nodeSize = isMobile ? 64 : 80;

  const tierLabels = useMemo(() => {
    const labels: { label: string; y: number; color: string }[] = [];
    const tiers = getNodesByTier();
    Object.entries(tiers).forEach(([tierStr]) => {
      const tier = Number(tierStr);
      const tierNodes = ALL_NODES.filter(n => n.tier === tier);
      if (tierNodes.length === 0) return;
      const minY = Math.min(...tierNodes.map(n => nodePositions[n.id]?.y ?? 0));
      labels.push({
        label: TIER_LABELS[tier] ?? `Tier ${tier}`,
        y: minY - 45,
        color: TIER_COLORS[tier] ?? '#6B7280',
      });
    });
    return labels;
  }, [nodePositions]);

  // Tier background sections
  const tierSections = useMemo(() => {
    const tiers = getNodesByTier();
    return Object.entries(tiers).map(([tierStr]) => {
      const tier = Number(tierStr);
      const tierNodes = ALL_NODES.filter(n => n.tier === tier);
      const ys = tierNodes.map(n => nodePositions[n.id]?.y ?? 0);
      return { tier, startY: Math.min(...ys) - 80, endY: Math.max(...ys) + 80 };
    });
  }, [nodePositions]);

  // Auto-scroll to current node
  useEffect(() => {
    const currentId = findCurrentNode(progress);
    if (currentId && nodePositions[currentId] && scrollRef.current) {
      const pos = nodePositions[currentId];
      const containerHeight = scrollRef.current.clientHeight;
      scrollRef.current.scrollTo({
        top: Math.max(0, pos.y - containerHeight / 3),
        behavior: 'smooth',
      });
    }
  }, [isMobile, nodePositions, progress]);

  const getStatus = useCallback((node: typeof ALL_NODES[0]) => {
    return computeNodeStatus(node.id, node.prerequisites, progress);
  }, [progress]);

  const getScore = useCallback((nodeId: string) => {
    return progress.nodes[nodeId]?.score ?? 0;
  }, [progress]);

  const getLevelsCompleted = useCallback((nodeId: string) => {
    return progress.nodes[nodeId]?.levelsCompleted?.length ?? 0;
  }, [progress]);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
      style={{ background: '#0B0F1A' }}
    >
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) translateX(0); }
          25% { transform: translateY(-20px) translateX(10px); }
          50% { transform: translateY(-10px) translateX(-10px); }
          75% { transform: translateY(-30px) translateX(5px); }
        }
        @keyframes pulseGlow {
          0%, 100% { box-shadow: 0 0 20px rgba(59, 130, 246, 0.3), 0 0 40px rgba(59, 130, 246, 0.1); }
          50% { box-shadow: 0 0 30px rgba(59, 130, 246, 0.5), 0 0 60px rgba(59, 130, 246, 0.2); }
        }
        @keyframes completedShine {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        @keyframes dashFlow {
          to { stroke-dashoffset: -20; }
        }
        @keyframes nodeAppear {
          from { transform: scale(0.8); opacity: 0; }
          to { transform: scale(1); opacity: 1; }
        }
        @keyframes bounceHover {
          0%, 100% { transform: scale(1.08) translateY(0); }
          50% { transform: scale(1.08) translateY(-4px); }
        }
        @keyframes beacon {
          0% { transform: scale(1); opacity: 0.5; }
          100% { transform: scale(2.5); opacity: 0; }
        }
        @keyframes arrowBounce {
          0%, 100% { transform: translateY(0); opacity: 1; }
          50% { transform: translateY(-6px); opacity: 0.7; }
        }
        .node-enter { animation: nodeAppear 0.3s ease-out both; }
        .node-bounce:hover { animation: bounceHover 0.4s ease-in-out; }
        .progress-ring { transition: stroke-dasharray 0.8s ease-out; }
      `}</style>

      <div className="relative mx-auto" style={{ width: totalWidth, minHeight: totalHeight }}>
        {/* Tier background gradients */}
        {tierSections.map(({ tier, startY, endY }) => {
          const colors = [
            'rgba(99,102,241,0.08)', // Year 8 - indigo
            'rgba(139,92,246,0.07)', // Year 9 - purple
            'rgba(168,85,247,0.06)', // Year 10 - violet
            'rgba(59,130,246,0.08)', // Year 11 - blue
            'rgba(14,165,233,0.07)', // Year 12 - cyan
            'rgba(245,158,11,0.08)', // VCE - amber
          ];
          return (
            <div
              key={`tier-bg-${tier}`}
              className="absolute left-0 right-0 pointer-events-none"
              style={{
                top: startY,
                height: endY - startY,
                background: `linear-gradient(180deg, transparent, ${colors[tier] ?? 'transparent'} 30%, ${colors[tier] ?? 'transparent'} 70%, transparent)`,
              }}
            />
          );
        })}

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${Math.random() * 3 + 1}px`,
                height: `${Math.random() * 3 + 1}px`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                background: TIER_COLORS[Math.floor(Math.random() * TIER_COLORS.length)],
                opacity: 0.12,
                animation: `float ${8 + Math.random() * 12}s ease-in-out infinite`,
                animationDelay: `${Math.random() * 5}s`,
              }}
            />
          ))}
        </div>

        {/* SVG connections */}
        <svg
          className="absolute inset-0 pointer-events-none"
          width={totalWidth}
          height={totalHeight}
          style={{ zIndex: 0 }}
        >
          <defs>
            {TIER_COLORS.map((color, i) => (
              <linearGradient key={`grad-${i}`} id={`tierGrad-${i}`} x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor={color} stopOpacity={0.6} />
                <stop offset="100%" stopColor={TIER_COLORS[Math.min(i + 1, TIER_COLORS.length - 1)]} stopOpacity={0.6} />
              </linearGradient>
            ))}
          </defs>
          {ALL_NODES.map(node =>
            node.prerequisites.map(preId => {
              const from = nodePositions[preId];
              const to = nodePositions[node.id];
              if (!from || !to) return null;

              const preNode = ALL_NODES.find(n => n.id === preId);
              const fromStatus = computeNodeStatus(preId, preNode?.prerequisites ?? [], progress);
              const isActive = fromStatus === 'completed' || fromStatus === 'mastered';
              const fromTier = from.tier;

              const halfNode = nodeSize / 2 - 4;
              const midY = (from.y + halfNode + to.y - halfNode) / 2;
              const dx = to.x - from.x;
              const controlOffset = Math.abs(dx) < 10 ? 40 : 0;

              return (
                <g key={`${preId}-${node.id}`}>
                  <path
                    d={`M ${from.x} ${from.y + halfNode} C ${from.x + controlOffset} ${midY}, ${to.x - controlOffset} ${midY}, ${to.x} ${to.y - halfNode}`}
                    fill="none"
                    stroke={isActive ? `url(#tierGrad-${fromTier})` : '#1E293B'}
                    strokeWidth={isActive ? 3 : 2}
                    strokeDasharray={isActive ? 'none' : '8 6'}
                    opacity={isActive ? 0.9 : 0.35}
                    style={isActive ? {} : { animation: 'dashFlow 1.5s linear infinite' }}
                  />
                  {isActive && (
                    <path
                      d={`M ${from.x} ${from.y + halfNode} C ${from.x + controlOffset} ${midY}, ${to.x - controlOffset} ${midY}, ${to.x} ${to.y - halfNode}`}
                      fill="none"
                      stroke={TIER_COLORS[fromTier] ?? '#60A5FA'}
                      strokeWidth={1.5}
                      opacity={0.15}
                      filter="blur(4px)"
                    />
                  )}
                </g>
              );
            })
          )}
        </svg>

        {/* Tier labels */}
        {tierLabels.map(({ label, y, color }) => (
          <div
            key={label}
            className="absolute left-0 right-0 flex items-center justify-center"
            style={{ top: y, zIndex: 5 }}
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-10 sm:w-16 opacity-30" style={{ background: `linear-gradient(to right, transparent, ${color})` }} />
              <span
                className="text-[10px] sm:text-sm font-bold tracking-wider uppercase px-3 sm:px-4 py-1 sm:py-1.5 rounded-full"
                style={{
                  color,
                  background: `${color}15`,
                  border: `1px solid ${color}30`,
                }}
              >
                {label}
              </span>
              <div className="h-px w-10 sm:w-16 opacity-30" style={{ background: `linear-gradient(to left, transparent, ${color})` }} />
            </div>
          </div>
        ))}

        {/* Nodes */}
        {ALL_NODES.map((node, i) => {
          const pos = nodePositions[node.id];
          if (!pos) return null;

          const status = getStatus(node);
          const score = getScore(node.id);
          const levelsCompleted = getLevelsCompleted(node.id);
          const isLocked = status === 'locked';
          const isCompleted = status === 'completed' || status === 'mastered';
          const isInProgress = status === 'in-progress';
          const isHovered = hoveredNode === node.id;
          const isCurrent = findCurrentNode(progress) === node.id;
          const topicColor = SKILL_TOPIC_COLORS[node.topic as Topic];
          const icon = NODE_ICONS[node.id] ?? TOPIC_ICONS[node.topic] ?? '📐';

          const progressPct = levelsCompleted / 4;
          const circumference = 2 * Math.PI * (nodeSize / 2 + 4);

          return (
            <div
              key={node.id}
              className="absolute node-enter"
              style={{
                left: pos.x - nodeSize / 2,
                top: pos.y - nodeSize / 2,
                width: nodeSize,
                zIndex: isHovered ? 20 : 10,
                animationDelay: `${i * 0.03}s`,
              }}
            >
              {/* Current node beacon */}
              {isCurrent && !isLocked && (
                <>
                  <div
                    className="absolute rounded-full"
                    style={{ inset: -6, animation: 'pulseGlow 2s ease-in-out infinite' }}
                  />
                  <div
                    className="absolute rounded-full border-2 border-blue-400"
                    style={{ inset: -8, animation: 'beacon 2s ease-out infinite' }}
                  />
                  <div
                    className="absolute left-1/2 -translate-x-1/2 text-blue-400 text-sm sm:text-lg"
                    style={{
                      top: -(isMobile ? 16 : 22),
                      animation: 'arrowBounce 1.2s ease-in-out infinite',
                    }}
                  >
                    ▼
                  </div>
                </>
              )}

              <button
                className={`relative w-full group ${!isLocked ? 'node-bounce' : ''}`}
                style={{ height: nodeSize }}
                onClick={() => !isLocked && onSelectNode(node.id)}
                onMouseEnter={() => setHoveredNode(node.id)}
                onMouseLeave={() => setHoveredNode(null)}
                disabled={isLocked}
              >
                {/* Progress ring */}
                <svg
                  className="absolute -inset-2 progress-ring"
                  width={nodeSize + 16}
                  height={nodeSize + 16}
                  viewBox={`0 0 ${nodeSize + 16} ${nodeSize + 16}`}
                >
                  <circle
                    cx={(nodeSize + 16) / 2}
                    cy={(nodeSize + 16) / 2}
                    r={nodeSize / 2 + 4}
                    fill="none"
                    stroke={isLocked ? '#111827' : '#1E293B'}
                    strokeWidth={3}
                  />
                  {(isInProgress || isCompleted) && (
                    <circle
                      cx={(nodeSize + 16) / 2}
                      cy={(nodeSize + 16) / 2}
                      r={nodeSize / 2 + 4}
                      fill="none"
                      stroke={isCompleted ? '#22C55E' : '#3B82F6'}
                      strokeWidth={3}
                      strokeLinecap="round"
                      strokeDasharray={`${circumference * progressPct} ${circumference}`}
                      transform={`rotate(-90 ${(nodeSize + 16) / 2} ${(nodeSize + 16) / 2})`}
                    />
                  )}
                  {status === 'mastered' && (
                    <circle
                      cx={(nodeSize + 16) / 2}
                      cy={(nodeSize + 16) / 2}
                      r={nodeSize / 2 + 4}
                      fill="none"
                      stroke="#F59E0B"
                      strokeWidth={3}
                    />
                  )}
                </svg>

                {/* Main circle */}
                <div
                  className={`
                    w-full h-full rounded-full flex items-center justify-center
                    transition-all duration-300 relative overflow-hidden
                    ${isLocked ? 'cursor-not-allowed' : 'cursor-pointer'}
                  `}
                  style={{
                    background: isLocked
                      ? '#111827'
                      : isCompleted
                        ? `linear-gradient(135deg, ${topicColor?.primary ?? '#22C55E'}, ${topicColor?.bg ?? '#16A34A'})`
                        : isInProgress
                          ? 'linear-gradient(135deg, #1E40AF, #3B82F6)'
                          : 'linear-gradient(135deg, #1E293B, #334155)',
                    border: isLocked
                      ? '2px solid #1F2937'
                      : isCompleted
                        ? `2px solid ${topicColor?.primary ?? '#22C55E'}`
                        : isInProgress
                          ? '2px solid #3B82F6'
                          : '2px solid #374151',
                    boxShadow: isHovered && !isLocked
                      ? `0 0 24px ${topicColor?.glow ?? '#3B82F640'}, 0 8px 32px rgba(0,0,0,0.4)`
                      : isCompleted
                        ? `0 0 16px ${topicColor?.glow ?? '#22C55E30'}`
                        : isCurrent && !isLocked
                          ? '0 0 20px rgba(59,130,246,0.3)'
                          : 'none',
                    opacity: isLocked ? 0.45 : 1,
                    filter: isLocked ? 'saturate(0.3)' : 'none',
                  }}
                >
                  {isCompleted && (
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        background: 'linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.12) 50%, transparent 100%)',
                        backgroundSize: '200% 100%',
                        animation: 'completedShine 3s ease-in-out infinite',
                      }}
                    />
                  )}
                  <span
                    className={`${isMobile ? 'text-xl' : 'text-3xl'} relative z-10`}
                    style={{ filter: isLocked ? 'grayscale(1) brightness(0.4)' : 'none' }}
                  >
                    {isLocked ? '🔒' : icon}
                  </span>
                </div>
              </button>

              {/* Title */}
              <div className="mt-1.5 text-center">
                <span
                  className={`${isMobile ? 'text-[9px]' : 'text-xs'} font-semibold leading-tight block ${
                    isLocked ? 'text-gray-700' : isCompleted ? 'text-gray-200' : 'text-gray-400'
                  }`}
                  style={{
                    maxWidth: nodeSize + 16,
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                  }}
                >
                  {node.title}
                </span>
              </div>

              {/* Stars */}
              {isCompleted && (
                <div className="flex justify-center mt-0.5 gap-0.5">
                  {[1, 2, 3].map(star => (
                    <span
                      key={star}
                      className={isMobile ? 'text-[8px]' : 'text-[10px]'}
                      style={{
                        opacity: score >= (star === 1 ? 1 : star === 2 ? 70 : 90) ? 1 : 0.2,
                        filter: score >= (star === 1 ? 1 : star === 2 ? 70 : 90) ? 'none' : 'grayscale(1)',
                      }}
                    >
                      ⭐
                    </span>
                  ))}
                </div>
              )}

              {/* Level dots */}
              {!isLocked && !isCompleted && isInProgress && (
                <div className="flex justify-center mt-1 gap-1">
                  {[0, 1, 2, 3].map(lvl => (
                    <div
                      key={lvl}
                      className="w-1.5 h-1.5 rounded-full"
                      style={{
                        background: (progress.nodes[node.id]?.levelsCompleted ?? []).includes(lvl)
                          ? '#3B82F6' : '#1E293B',
                      }}
                    />
                  ))}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

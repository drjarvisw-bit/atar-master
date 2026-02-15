import { useRef, useState, useCallback, useEffect, useImperativeHandle, forwardRef, type MouseEvent, type WheelEvent, type TouchEvent } from 'react';
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

// Layout constants
const NODE_RADIUS = 32;
const TIER_WIDTH = 240;
const NODE_SPACING_Y = 90;
const PADDING_X = 100;
const PADDING_Y = 70;
const LABEL_HEIGHT = 40;

// Zoom bounds
const MIN_SCALE = 0.4;
const MAX_SCALE = 1.6;

const TIER_LABELS = ['Year 8', 'Year 9', 'Year 10 / 10A', 'Year 11 (U1&2)', 'Year 12 (U3&4)', 'VCE Exam'];

const STATUS_COLORS: Record<string, string> = {
  locked: '#374151',
  unlocked: '#4B5563',
  'in-progress': '#3B82F6',
  completed: '#22C55E',
  mastered: '#F59E0B',
};

const STATUS_BORDER: Record<string, string> = {
  locked: '#1F2937',
  unlocked: '#6B7280',
  'in-progress': '#60A5FA',
  completed: '#4ADE80',
  mastered: '#FBBF24',
};

// Top-aligned layout: every column starts at the same Y
function computeLayout() {
  const tiers: Record<number, typeof ALL_NODES> = {};
  ALL_NODES.forEach(n => {
    if (!tiers[n.tier]) tiers[n.tier] = [];
    tiers[n.tier].push(n);
  });

  const positions: Record<string, { x: number; y: number }> = {};
  let maxY = 0;
  const startY = PADDING_Y + LABEL_HEIGHT;

  Object.entries(tiers).forEach(([tierStr, nodes]) => {
    const tier = Number(tierStr);
    const cx = PADDING_X + tier * TIER_WIDTH;
    nodes.forEach((n, i) => {
      const y = startY + i * NODE_SPACING_Y;
      positions[n.id] = { x: cx, y };
      if (y > maxY) maxY = y;
    });
  });

  const tierCount = Object.keys(tiers).length;
  const totalWidth = PADDING_X * 2 + (tierCount - 1) * TIER_WIDTH;
  const totalHeight = maxY + NODE_RADIUS + 60;

  return { positions, totalWidth, totalHeight };
}

const { positions, totalWidth, totalHeight } = computeLayout();

const CivTreeView = forwardRef<CivTreeViewRef, Props>(function CivTreeView({ progress, onSelectNode, onViewportChange }, ref) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [pan, setPan] = useState({ x: 0, y: 0 });
  const [scale, setScale] = useState(0.85);
  const [dragging, setDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [hoveredNode, setHoveredNode] = useState<string | null>(null);

  // Clamp pan so the tree can't be dragged too far off-screen
  const clampPan = useCallback((px: number, py: number, s: number) => {
    if (!containerRef.current) return { x: px, y: py };
    const rect = containerRef.current.getBoundingClientRect();
    const margin = 100;
    const minX = -(totalWidth * s - margin);
    const maxX = rect.width - margin;
    const minY = -(totalHeight * s - margin);
    const maxY = rect.height - margin;
    return {
      x: Math.min(maxX, Math.max(minX, px)),
      y: Math.min(maxY, Math.max(minY, py)),
    };
  }, []);

  // Report viewport
  useEffect(() => {
    if (!onViewportChange || !containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    onViewportChange({
      x: -pan.x / scale,
      y: -pan.y / scale,
      w: rect.width / scale,
      h: rect.height / scale,
      scale,
    });
  }, [pan, scale, onViewportChange]);

  const handleWheel = useCallback((e: WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? 0.92 : 1.08;
    setScale(s => {
      const ns = Math.min(MAX_SCALE, Math.max(MIN_SCALE, s * delta));
      // Re-clamp pan after zoom
      setPan(p => clampPan(p.x, p.y, ns));
      return ns;
    });
  }, [clampPan]);

  const handleMouseDown = useCallback((e: MouseEvent) => {
    if (e.button !== 0) return;
    setDragging(true);
    setDragStart({ x: e.clientX - pan.x, y: e.clientY - pan.y });
  }, [pan]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!dragging) return;
    const nx = e.clientX - dragStart.x;
    const ny = e.clientY - dragStart.y;
    setPan(clampPan(nx, ny, scale));
  }, [dragging, dragStart, scale, clampPan]);

  const handleMouseUp = useCallback(() => setDragging(false), []);

  // Touch support
  const touchRef = useRef<{ x: number; y: number } | null>(null);
  const handleTouchStart = useCallback((e: TouchEvent) => {
    if (e.touches.length === 1) {
      const t = e.touches[0];
      touchRef.current = { x: t.clientX - pan.x, y: t.clientY - pan.y };
    }
  }, [pan]);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (e.touches.length === 1 && touchRef.current) {
      const t = e.touches[0];
      const nx = t.clientX - touchRef.current.x;
      const ny = t.clientY - touchRef.current.y;
      setPan(clampPan(nx, ny, scale));
    }
  }, [scale, clampPan]);

  // Navigate to position (called from minimap)
  const navigateTo = useCallback((x: number, y: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const np = clampPan(
      -x * scale + rect.width / 2,
      -y * scale + rect.height / 2,
      scale,
    );
    setPan(np);
  }, [scale, clampPan]);

  // Expose navigateTo through ref
  useImperativeHandle(ref, () => ({
    navigateTo,
  }), [navigateTo]);

  return (
    <div
      ref={containerRef}
      className="w-full h-full overflow-hidden cursor-grab active:cursor-grabbing relative select-none"
      onWheel={handleWheel}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={() => { touchRef.current = null; }}
      style={{ touchAction: 'none' }}
    >
      <svg
        width={totalWidth}
        height={totalHeight}
        style={{
          transform: `translate(${pan.x}px, ${pan.y}px) scale(${scale})`,
          transformOrigin: '0 0',
        }}
      >
        {/* Tier column labels — top-aligned */}
        {TIER_LABELS.map((label, i) => (
          <text
            key={i}
            x={PADDING_X + i * TIER_WIDTH}
            y={PADDING_Y - 10}
            textAnchor="middle"
            fill="#6B7280"
            fontSize={13}
            fontFamily="system-ui, sans-serif"
            fontWeight="700"
            letterSpacing="0.5"
          >
            {label}
          </text>
        ))}

        {/* Subtle vertical separator lines for each tier */}
        {TIER_LABELS.map((_, i) => (
          <line
            key={`sep-${i}`}
            x1={PADDING_X + i * TIER_WIDTH}
            y1={PADDING_Y + 5}
            x2={PADDING_X + i * TIER_WIDTH}
            y2={totalHeight - 20}
            stroke="#1F2937"
            strokeWidth={1}
            opacity={0.4}
          />
        ))}

        {/* Dependency lines — straight */}
        {ALL_NODES.map(node =>
          node.prerequisites.map(preId => {
            const from = positions[preId];
            const to = positions[node.id];
            if (!from || !to) return null;
            const fromStatus = computeNodeStatus(preId, ALL_NODES.find(n => n.id === preId)?.prerequisites ?? [], progress);
            const isActive = fromStatus === 'completed' || fromStatus === 'mastered';
            return (
              <line
                key={`${preId}-${node.id}`}
                x1={from.x + NODE_RADIUS}
                y1={from.y}
                x2={to.x - NODE_RADIUS}
                y2={to.y}
                stroke={isActive ? '#4B5563' : '#1F2937'}
                strokeWidth={1.5}
                strokeDasharray={isActive ? 'none' : '6 4'}
                opacity={0.5}
              />
            );
          })
        )}

        {/* Nodes */}
        {ALL_NODES.map(node => {
          const pos = positions[node.id];
          if (!pos) return null;
          const status = computeNodeStatus(node.id, node.prerequisites, progress);
          const np = progress.nodes[node.id];
          const score = np?.score ?? 0;
          const topicColor = SKILL_TOPIC_COLORS[node.topic as Topic];
          const isHovered = hoveredNode === node.id;
          const isLocked = status === 'locked';

          return (
            <g
              key={node.id}
              transform={`translate(${pos.x}, ${pos.y})`}
              onClick={() => !isLocked && onSelectNode(node.id)}
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
              style={{ cursor: isLocked ? 'not-allowed' : 'pointer' }}
            >
              {/* Glow for active/hovered */}
              {(status === 'in-progress' || isHovered) && !isLocked && (
                <circle
                  r={NODE_RADIUS + 6}
                  fill="none"
                  stroke={topicColor?.glow ?? '#60A5FA'}
                  strokeWidth={2}
                  opacity={0.4}
                >
                  <animate attributeName="r" values={`${NODE_RADIUS + 4};${NODE_RADIUS + 8};${NODE_RADIUS + 4}`} dur="2s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.4;0.2;0.4" dur="2s" repeatCount="indefinite" />
                </circle>
              )}

              {/* Progress ring */}
              {(status === 'completed' || status === 'mastered' || status === 'in-progress') && (
                <circle
                  r={NODE_RADIUS + 2}
                  fill="none"
                  stroke={STATUS_BORDER[status]}
                  strokeWidth={3}
                  strokeDasharray={`${(2 * Math.PI * (NODE_RADIUS + 2) * score) / 100} ${2 * Math.PI * (NODE_RADIUS + 2)}`}
                  strokeLinecap="round"
                  transform="rotate(-90)"
                  opacity={0.8}
                />
              )}

              {/* Main circle */}
              <circle
                r={NODE_RADIUS}
                fill={isLocked ? '#111827' : (topicColor?.bg ?? STATUS_COLORS[status])}
                stroke={isLocked ? '#374151' : (topicColor?.primary ?? STATUS_BORDER[status])}
                strokeWidth={isHovered ? 3 : 2}
                opacity={isLocked ? 0.5 : 1}
              />

              {/* Icon */}
              <text
                textAnchor="middle"
                dominantBaseline="central"
                fontSize={isLocked ? 16 : 13}
                fill={isLocked ? '#4B5563' : '#E5E7EB'}
                fontFamily="monospace"
                fontWeight="bold"
              >
                {isLocked ? '🔒' : ''}
              </text>

              {/* Title inside node (when unlocked) */}
              {!isLocked && (
                <text
                  textAnchor="middle"
                  dominantBaseline="central"
                  fontSize={9}
                  fill="#E5E7EB"
                  fontFamily="system-ui, sans-serif"
                  fontWeight="600"
                >
                  {node.title.length > 12 ? node.title.slice(0, 11) + '…' : node.title}
                </text>
              )}

              {/* Title below node */}
              <text
                y={NODE_RADIUS + 16}
                textAnchor="middle"
                fontSize={10}
                fill={isLocked ? '#4B5563' : '#9CA3AF'}
                fontFamily="system-ui, sans-serif"
              >
                {node.title.length > 20 ? node.title.slice(0, 19) + '…' : node.title}
              </text>

              {/* Stars for completed */}
              {(status === 'completed' || status === 'mastered') && (
                <text
                  y={NODE_RADIUS + 28}
                  textAnchor="middle"
                  fontSize={10}
                >
                  {score >= 90 ? '⭐⭐⭐' : score >= 70 ? '⭐⭐' : '⭐'}
                </text>
              )}
            </g>
          );
        })}
      </svg>
    </div>
  );
});

export default CivTreeView;

export { positions, totalWidth, totalHeight };

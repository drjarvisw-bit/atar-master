import { useRef, useState, useCallback, useEffect, useMemo } from 'react';
import { ChevronRight, Lock, Star, Zap, Crown, Play } from 'lucide-react';
import { ALL_NODES } from '../data/skillTreeData';
import { SKILL_TOPIC_COLORS, type Topic } from '../types';
import { getNodeQuestionCounts } from '../data/questionMatcher';
import { getTrainingForNode } from '../data/training';
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
const TIER_SUBTITLES = [
  'Build your foundations',
  'Strengthen core skills',
  'Advanced fundamentals',
  'Units 1 & 2 — 9 chapters',
  'Units 3 & 4 — 6 chapters',
  'The real deal',
];
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

function getNodesByTier() {
  const tiers: Record<number, typeof ALL_NODES> = {};
  ALL_NODES.forEach(n => {
    if (!tiers[n.tier]) tiers[n.tier] = [];
    tiers[n.tier].push(n);
  });
  return tiers;
}

function findCurrentNode(progress: UserProgress): string | null {
  for (const node of ALL_NODES) {
    const status = computeNodeStatus(node.id, node.prerequisites, progress);
    if (status === 'unlocked' || status === 'in-progress') return node.id;
  }
  return null;
}

/* ─── Single Node Card ─── */

function NodeCard({
  node,
  status,
  progress,
  isCurrent,
  icon,
  onSelect,
}: {
  node: typeof ALL_NODES[0];
  status: string;
  progress: UserProgress;
  isCurrent: boolean;
  icon: string;
  onSelect: () => void;
}) {
  const isLocked = status === 'locked';
  const isCompleted = status === 'completed' || status === 'mastered';
  const isInProgress = status === 'in-progress';
  const np = progress.nodes[node.id];
  const levelsCompleted = np?.levelsCompleted?.length ?? 0;
  const score = np?.score ?? 0;
  const topicColor = SKILL_TOPIC_COLORS[node.topic as Topic];

  const examCount = useMemo(() => getNodeQuestionCounts()[node.id] ?? 0, [node.id]);
  const trainingCount = useMemo(() => getTrainingForNode(node.id).length, [node.id]);
  const totalQ = examCount + trainingCount;

  return (
    <button
      onClick={() => !isLocked && onSelect()}
      disabled={isLocked}
      className={`
        group relative w-full text-left rounded-2xl border transition-all duration-300
        ${isLocked
          ? 'opacity-50 cursor-not-allowed border-gray-800/50 bg-gray-900/30'
          : isCurrent
            ? 'border-blue-500/50 bg-blue-500/[0.07] shadow-[0_0_30px_rgba(59,130,246,0.12)] hover:shadow-[0_0_40px_rgba(59,130,246,0.2)]'
            : isCompleted
              ? 'border-green-500/30 bg-green-500/[0.04] hover:border-green-500/50 hover:bg-green-500/[0.07]'
              : isInProgress
                ? 'border-blue-500/30 bg-blue-500/[0.04] hover:border-blue-500/50'
                : 'border-gray-700/50 bg-gray-800/30 hover:border-gray-600/50 hover:bg-gray-800/50'
        }
      `}
    >
      {/* Current indicator */}
      {isCurrent && (
        <div className="absolute -top-2 left-4 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider bg-blue-600 text-white rounded-full">
          Start here
        </div>
      )}

      <div className="p-4 sm:p-5 flex items-start gap-4">
        {/* Icon circle */}
        <div
          className={`
            shrink-0 w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-2xl sm:text-3xl
            transition-all duration-300
            ${isLocked
              ? 'bg-gray-800/50'
              : isCompleted
                ? 'bg-gradient-to-br shadow-lg'
                : isCurrent
                  ? 'bg-blue-600/20 border border-blue-500/30'
                  : 'bg-gray-800/80 border border-gray-700/50 group-hover:border-gray-600/50'
            }
          `}
          style={isCompleted ? {
            background: `linear-gradient(135deg, ${topicColor?.primary ?? '#22C55E'}25, ${topicColor?.bg ?? '#16A34A'})`,
            boxShadow: `0 4px 12px ${topicColor?.glow ?? '#22C55E'}20`,
          } : undefined}
        >
          {isLocked ? (
            <Lock size={24} className="text-gray-600" />
          ) : (
            <span style={{ filter: isCompleted ? 'drop-shadow(0 0 4px rgba(255,255,255,0.2))' : 'none' }}>
              {icon}
            </span>
          )}
        </div>

        {/* Content */}
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2 mb-0.5">
            <h3 className={`font-semibold text-sm sm:text-base truncate ${
              isLocked ? 'text-gray-600' : 'text-white'
            }`}>
              {node.title}
            </h3>
            {isCompleted && (
              <Crown size={14} className="text-amber-400 shrink-0" />
            )}
          </div>

          <p className={`text-xs leading-relaxed line-clamp-2 mb-2.5 ${
            isLocked ? 'text-gray-700' : 'text-gray-400'
          }`}>
            {node.description}
          </p>

          {/* Bottom row: progress + stats */}
          {!isLocked && (
            <div className="flex items-center gap-3">
              {/* Level progress */}
              <div className="flex items-center gap-1">
                {[0, 1, 2, 3].map(lvl => (
                  <div
                    key={lvl}
                    className="w-5 sm:w-6 h-1.5 rounded-full transition-all"
                    style={{
                      background: (np?.levelsCompleted ?? []).includes(lvl + 1)
                        ? isCompleted
                          ? topicColor?.primary ?? '#22C55E'
                          : '#3B82F6'
                        : 'rgba(255,255,255,0.06)',
                    }}
                  />
                ))}
              </div>

              <span className="text-[10px] text-gray-500 font-mono">
                {levelsCompleted}/4
              </span>

              <div className="w-px h-3 bg-gray-700/50" />

              <span className="text-[10px] text-gray-500">
                {totalQ} Q{totalQ !== 1 ? 's' : ''}
              </span>

              {score > 0 && (
                <>
                  <div className="w-px h-3 bg-gray-700/50" />
                  <div className="flex items-center gap-0.5">
                    <Star size={10} className={score >= 90 ? 'text-amber-400' : score >= 70 ? 'text-blue-400' : 'text-gray-500'} fill="currentColor" />
                    <span className="text-[10px] font-mono text-gray-400">{score}%</span>
                  </div>
                </>
              )}
            </div>
          )}
        </div>

        {/* Right: action hint */}
        <div className="shrink-0 self-center">
          {isLocked ? (
            <div className="w-8 h-8 rounded-full bg-gray-800/50 flex items-center justify-center">
              <Lock size={14} className="text-gray-600" />
            </div>
          ) : isCurrent ? (
            <div className="w-10 h-10 rounded-full bg-blue-600 flex items-center justify-center shadow-lg shadow-blue-600/30 group-hover:shadow-blue-600/50 transition-shadow">
              <Play size={16} className="text-white ml-0.5" fill="white" />
            </div>
          ) : isCompleted ? (
            <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
              <Star size={14} className="text-green-400" fill="currentColor" />
            </div>
          ) : (
            <ChevronRight size={18} className="text-gray-600 group-hover:text-gray-400 transition-colors" />
          )}
        </div>
      </div>

      {/* Full-width progress bar for in-progress */}
      {isInProgress && levelsCompleted > 0 && (
        <div className="h-0.5 bg-gray-800 rounded-b-2xl overflow-hidden">
          <div
            className="h-full rounded-full transition-all duration-700"
            style={{
              width: `${(levelsCompleted / 4) * 100}%`,
              background: 'linear-gradient(90deg, #3B82F6, #60A5FA)',
            }}
          />
        </div>
      )}
    </button>
  );
}

/* ─── Tier Section ─── */

function TierSection({
  tier,
  nodes,
  progress,
  currentNodeId,
  onSelectNode,
  isExpanded,
  onToggle,
}: {
  tier: number;
  nodes: typeof ALL_NODES;
  progress: UserProgress;
  currentNodeId: string | null;
  onSelectNode: (nodeId: string) => void;
  isExpanded: boolean;
  onToggle: () => void;
}) {
  const color = TIER_COLORS[tier] ?? '#6B7280';
  const isVCE = tier === 5;

  const completedCount = nodes.filter(n => {
    const s = computeNodeStatus(n.id, n.prerequisites, progress);
    return s === 'completed' || s === 'mastered';
  }).length;

  const hasCurrentNode = nodes.some(n => n.id === currentNodeId);
  const allCompleted = completedCount === nodes.length;
  const progressPct = Math.round((completedCount / nodes.length) * 100);

  return (
    <div className="relative">
      {/* Tier Header — always visible */}
      <button
        onClick={onToggle}
        className={`
          w-full sticky top-0 z-20 backdrop-blur-xl transition-all duration-300
          ${isExpanded
            ? 'bg-gray-900/90 border-b border-gray-800/50'
            : 'bg-gray-900/70 hover:bg-gray-900/90'
          }
        `}
      >
        <div className="max-w-2xl mx-auto px-4 sm:px-6 py-3.5 flex items-center gap-4">
          {/* Tier indicator */}
          <div
            className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl flex items-center justify-center shrink-0 text-xl sm:text-2xl"
            style={{
              background: `${color}15`,
              border: `1px solid ${color}30`,
            }}
          >
            {isVCE ? '🏆' : allCompleted ? '✅' : `${tier + 8 > 12 ? '' : tier + 8}`}
            {!isVCE && !allCompleted && tier + 8 <= 12 && (
              <span className="sr-only">Year {tier + 8}</span>
            )}
          </div>

          <div className="flex-1 min-w-0 text-left">
            <div className="flex items-center gap-2">
              <h2 className="font-bold text-sm sm:text-base text-white truncate">
                {TIER_LABELS[tier]}
              </h2>
              {hasCurrentNode && !allCompleted && (
                <span className="px-1.5 py-0.5 text-[9px] font-bold uppercase bg-blue-600 text-white rounded-full">
                  Current
                </span>
              )}
            </div>
            <p className="text-[11px] text-gray-500 mt-0.5">
              {TIER_SUBTITLES[tier]} · {nodes.length} topic{nodes.length > 1 ? 's' : ''}
            </p>
          </div>

          {/* Progress */}
          <div className="shrink-0 flex items-center gap-3">
            <div className="text-right hidden sm:block">
              <div className="text-xs font-mono text-gray-400">
                {completedCount}/{nodes.length}
              </div>
            </div>
            <div className="w-12 sm:w-16 h-1.5 rounded-full bg-gray-800 overflow-hidden">
              <div
                className="h-full rounded-full transition-all duration-700"
                style={{
                  width: `${progressPct}%`,
                  background: allCompleted
                    ? 'linear-gradient(90deg, #22C55E, #10B981)'
                    : `linear-gradient(90deg, ${color}, ${color}AA)`,
                }}
              />
            </div>
            <ChevronRight
              size={16}
              className={`text-gray-500 transition-transform duration-300 ${isExpanded ? 'rotate-90' : ''}`}
            />
          </div>
        </div>
      </button>

      {/* Tier content — expandable */}
      <div
        className="overflow-hidden transition-all duration-400"
        style={{
          maxHeight: isExpanded ? `${nodes.length * 140 + 40}px` : '0',
          opacity: isExpanded ? 1 : 0,
        }}
      >
        <div className="max-w-2xl mx-auto px-3 sm:px-5 py-3 space-y-2.5">
          {nodes.map(node => {
            const status = computeNodeStatus(node.id, node.prerequisites, progress);
            const icon = NODE_ICONS[node.id] ?? '📐';
            const isCurrent = node.id === currentNodeId;

            return (
              <NodeCard
                key={node.id}
                node={node}
                status={status}
                progress={progress}
                isCurrent={isCurrent}
                icon={icon}
                onSelect={() => onSelectNode(node.id)}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════ */

export default function CivTreeView({ progress, onSelectNode }: Props) {
  const scrollRef = useRef<HTMLDivElement>(null);
  const tiers = useMemo(() => getNodesByTier(), []);
  const currentNodeId = useMemo(() => findCurrentNode(progress), [progress]);

  // Auto-expand the tier containing the current node (and Year 8 if no progress)
  const currentTier = currentNodeId
    ? ALL_NODES.find(n => n.id === currentNodeId)?.tier ?? 0
    : 0;

  const [expandedTiers, setExpandedTiers] = useState<Set<number>>(() => {
    return new Set([currentTier]);
  });

  // When current tier changes, expand it
  useEffect(() => {
    setExpandedTiers(prev => {
      const next = new Set(prev);
      next.add(currentTier);
      return next;
    });
  }, [currentTier]);

  const toggleTier = useCallback((tier: number) => {
    setExpandedTiers(prev => {
      const next = new Set(prev);
      if (next.has(tier)) next.delete(tier);
      else next.add(tier);
      return next;
    });
  }, []);

  return (
    <div
      ref={scrollRef}
      className="w-full h-full overflow-y-auto overflow-x-hidden scroll-smooth"
      style={{ background: '#0B0F1A' }}
    >
      <div className="min-h-full pb-20">
        {/* Header */}
        <div className="max-w-2xl mx-auto px-4 sm:px-6 pt-6 pb-2">
          <div className="flex items-center gap-3 mb-1">
            <Zap size={18} className="text-blue-400" />
            <h1 className="text-lg sm:text-xl font-bold text-white">Skill Tree</h1>
          </div>
          <p className="text-xs text-gray-500">
            {ALL_NODES.length} topics · {
              Object.values(progress.nodes).filter(n => n.status === 'completed' || n.status === 'mastered').length
            } completed
          </p>
        </div>

        {/* Tier sections */}
        <div className="mt-2">
          {Object.entries(tiers)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([tierStr, nodes]) => {
              const tier = Number(tierStr);
              return (
                <TierSection
                  key={tier}
                  tier={tier}
                  nodes={nodes}
                  progress={progress}
                  currentNodeId={currentNodeId}
                  onSelectNode={onSelectNode}
                  isExpanded={expandedTiers.has(tier)}
                  onToggle={() => toggleTier(tier)}
                />
              );
            })}
        </div>
      </div>
    </div>
  );
}

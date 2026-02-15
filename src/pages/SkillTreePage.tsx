import { useState, useMemo } from 'react';
import { sampleSkillTree } from '../data/sampleTree';
import { type SkillTreeNode, SkillNodeStatus, SKILL_TOPIC_COLORS, Difficulty } from '../types';
import SkillNodePanel from '../components/SkillNodePanel';

// Simulated progress — in real app this comes from backend/localStorage
function getNodeStatus(node: SkillTreeNode, completedIds: Set<string>): SkillNodeStatus {
  if (completedIds.has(node.id)) return SkillNodeStatus.COMPLETED;
  const prereqsMet = node.prerequisites.every((p) => completedIds.has(p));
  return prereqsMet ? SkillNodeStatus.UNLOCKED : SkillNodeStatus.LOCKED;
}

const starLabel = (d: Difficulty) => '★'.repeat(d) + '☆'.repeat(5 - d);

export default function SkillTreePage() {
  const tree = sampleSkillTree;
  const [completedIds, setCompletedIds] = useState<Set<string>>(new Set(['limits']));
  const [selectedNode, setSelectedNode] = useState<SkillTreeNode | null>(null);

  const nodeStatuses = useMemo(() => {
    const m = new Map<string, SkillNodeStatus>();
    tree.nodes.forEach((n) => m.set(n.id, getNodeStatus(n, completedIds)));
    return m;
  }, [tree.nodes, completedIds]);

  // Compute SVG viewBox
  const padding = 80;
  const maxX = Math.max(...tree.nodes.map((n) => n.position.x)) + padding * 2;
  const maxY = Math.max(...tree.nodes.map((n) => n.position.y)) + padding * 2;

  const completeNode = (id: string) => {
    setCompletedIds((prev) => new Set([...prev, id]));
  };

  return (
    <div className="mx-auto max-w-6xl px-6 py-8">
      <div className="mb-6">
        <h1 className="text-2xl font-bold">{tree.title}</h1>
        <p className="text-gh-text-secondary text-sm">{tree.description}</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-6">
        {/* Tree canvas */}
        <div className="flex-1 border border-gh-border rounded-xl bg-gh-inset overflow-auto">
          <svg viewBox={`0 0 ${maxX} ${maxY}`} className="w-full" style={{ minHeight: 500 }}>
            {/* Edges */}
            {tree.nodes.flatMap((node) =>
              node.prerequisites.map((preId) => {
                const pre = tree.nodes.find((n) => n.id === preId);
                if (!pre) return null;
                const completed =
                  nodeStatuses.get(preId) === SkillNodeStatus.COMPLETED &&
                  nodeStatuses.get(node.id) !== SkillNodeStatus.LOCKED;
                return (
                  <line
                    key={`${preId}-${node.id}`}
                    x1={pre.position.x + padding}
                    y1={pre.position.y + padding + 20}
                    x2={node.position.x + padding}
                    y2={node.position.y + padding - 20}
                    className={`skill-edge ${completed ? 'completed' : ''}`}
                  />
                );
              }),
            )}

            {/* Nodes */}
            {tree.nodes.map((node) => {
              const status = nodeStatuses.get(node.id)!;
              const colors = SKILL_TOPIC_COLORS[node.topic] ?? { primary: '#8b949e', glow: '#8b949e', bg: 'rgba(139,148,158,0.15)' };
              const isLocked = status === SkillNodeStatus.LOCKED;
              const isCompleted = status === SkillNodeStatus.COMPLETED;
              const cx = node.position.x + padding;
              const cy = node.position.y + padding;

              return (
                <g
                  key={node.id}
                  onClick={() => !isLocked && setSelectedNode(node)}
                  className={isLocked ? 'opacity-40' : 'cursor-pointer'}
                >
                  {/* Glow for completed */}
                  {isCompleted && (
                    <circle cx={cx} cy={cy} r={32} fill="none" stroke={colors.glow} strokeWidth={2} opacity={0.5}>
                      <animate attributeName="r" values="30;36;30" dur="2s" repeatCount="indefinite" />
                      <animate attributeName="opacity" values="0.5;0.2;0.5" dur="2s" repeatCount="indefinite" />
                    </circle>
                  )}
                  <circle
                    cx={cx}
                    cy={cy}
                    r={28}
                    fill={isCompleted ? colors.bg : '#0d1117'}
                    stroke={isCompleted ? colors.primary : isLocked ? '#30363d' : colors.primary}
                    strokeWidth={isCompleted ? 3 : 2}
                    strokeDasharray={isLocked ? '4 4' : undefined}
                  />
                  {/* Exam badge */}
                  {node.isExamQuestion && (
                    <text x={cx} y={cy - 12} textAnchor="middle" fontSize={12}>📝</text>
                  )}
                  <text
                    x={cx}
                    y={cy + (node.isExamQuestion ? 4 : 0)}
                    textAnchor="middle"
                    dominantBaseline="middle"
                    fontSize={10}
                    fontWeight={600}
                    fill={isLocked ? '#484f58' : colors.primary}
                  >
                    {node.title.length > 12 ? node.title.slice(0, 11) + '…' : node.title}
                  </text>
                  <text
                    x={cx}
                    y={cy + 44}
                    textAnchor="middle"
                    fontSize={9}
                    fill="#8b949e"
                  >
                    {node.title}
                  </text>
                  <text x={cx} y={cy + 56} textAnchor="middle" fontSize={8} fill="#484f58">
                    {starLabel(node.difficulty)}
                  </text>
                </g>
              );
            })}
          </svg>
        </div>

        {/* Side panel */}
        <div className="w-full lg:w-80 shrink-0">
          {selectedNode ? (
            <SkillNodePanel
              node={selectedNode}
              status={nodeStatuses.get(selectedNode.id)!}
              onComplete={() => {
                completeNode(selectedNode.id);
                setSelectedNode(null);
              }}
              onClose={() => setSelectedNode(null)}
            />
          ) : (
            <div className="border border-gh-border rounded-xl bg-gh-surface p-6 text-center text-gh-text-muted">
              <p className="text-sm">Click a node to view details</p>
            </div>
          )}
        </div>
      </div>

      {/* Legend */}
      <div className="mt-6 flex flex-wrap gap-4 sm:gap-6 text-xs text-gh-text-muted">
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full border-2 border-gh-border bg-gh-canvas inline-block" /> Locked</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full border-2 border-gh-accent-blue bg-gh-canvas inline-block" /> Unlocked</span>
        <span className="flex items-center gap-1"><span className="w-3 h-3 rounded-full border-2 border-gh-success-fg bg-green-900/30 inline-block" /> Completed</span>
        <span className="flex items-center gap-1">📝 Exam Question</span>
      </div>
    </div>
  );
}

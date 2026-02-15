import { useState, useCallback, useEffect, useMemo } from 'react';
import { TreePine, RotateCcw } from 'lucide-react';
import type { SkillNodeStatus } from '../types';
import { SkillNodeStatus as SNS, Topic, SKILL_TOPIC_COLORS } from '../types';
import { UNIFIED_SKILL_TREE } from '../data/skillTreeData';
import { getNodeQuestionCounts } from '../data/questionMatcher';
import SkillTreeView from '../components/SkillTreeView';

const STORAGE_KEY = 'atar-unified-skill-tree-progress';

interface NodeProgress {
  status: SkillNodeStatus;
  attempts: number;
}

export default function SkillTreePage() {
  const tree = UNIFIED_SKILL_TREE;

  // Load progress from localStorage
  const [progress, setProgress] = useState<Record<string, NodeProgress>>(() => {
    try {
      const raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    } catch {
      return {};
    }
  });

  // Persist progress
  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }, [progress]);

  const handleComplete = useCallback((nodeId: string) => {
    setProgress(prev => ({
      ...prev,
      [nodeId]: {
        status: SNS.COMPLETED,
        attempts: (prev[nodeId]?.attempts || 0) + 1,
      },
    }));
  }, []);

  const handleReset = useCallback(() => {
    if (confirm('Reset all progress? This cannot be undone.')) {
      setProgress({});
      localStorage.removeItem(STORAGE_KEY);
    }
  }, []);

  // Stats
  const questionCounts = useMemo(() => getNodeQuestionCounts(), []);
  const totalQuestions = useMemo(() => Object.values(questionCounts).reduce((s, c) => s + c, 0), [questionCounts]);
  const completedNodes = useMemo(() =>
    Object.values(progress).filter(p => p.status === SNS.COMPLETED || p.status === SNS.MASTERED).length,
    [progress]
  );

  // Per-topic stats
  const topicStats = useMemo(() => {
    const stats: Record<string, { total: number; completed: number; label: string }> = {};
    tree.nodes.forEach(n => {
      if (!stats[n.topic]) stats[n.topic] = { total: 0, completed: 0, label: n.topic };
      stats[n.topic].total++;
      const p = progress[n.id];
      if (p && (p.status === SNS.COMPLETED || p.status === SNS.MASTERED)) {
        stats[n.topic].completed++;
      }
    });
    return stats;
  }, [tree.nodes, progress]);

  return (
    <div className="min-h-screen bg-gh-canvas flex flex-col">
      {/* Header bar */}
      <div className="border-b border-gh-border bg-gh-surface px-4 sm:px-6 h-14 flex items-center justify-between flex-shrink-0">
        <div className="flex items-center gap-3">
          <TreePine size={16} className="text-gh-accent-blue" />
          <span className="text-gh-text-primary font-bold font-mono text-sm">VCE Methods Skill Tree</span>
          <span className="text-gh-border">|</span>
          <span className="text-xs text-gh-text-muted font-mono">
            {tree.nodes.length} skills • {totalQuestions} questions
          </span>
        </div>
        <div className="flex items-center gap-3">
          {/* Mini stats */}
          <div className="hidden sm:flex items-center gap-3">
            {Object.entries(topicStats).map(([topic, stat]) => {
              const color = SKILL_TOPIC_COLORS[topic as Topic];
              if (!color) return null;
              return (
                <div key={topic} className="flex items-center gap-1">
                  <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: color.primary }} />
                  <span className="text-[10px] text-gh-text-muted font-mono">
                    {stat.completed}/{stat.total}
                  </span>
                </div>
              );
            })}
          </div>
          <button
            onClick={handleReset}
            className="flex items-center gap-1 px-2 py-1 text-xs text-gh-text-muted hover:text-gh-dangerFg font-mono rounded border border-gh-border hover:border-gh-dangerFg/30 transition-colors"
            title="Reset progress"
          >
            <RotateCcw size={12} />
            <span className="hidden sm:inline">Reset</span>
          </button>
        </div>
      </div>

      {/* Overall progress bar */}
      <div className="bg-gh-surface/50 border-b border-gh-border px-4 sm:px-6 py-2">
        <div className="flex items-center gap-3">
          <span className="text-xs text-gh-text-muted font-mono w-20">Overall</span>
          <div className="flex-1 h-2 rounded-full bg-gh-border overflow-hidden">
            <div
              className="h-full rounded-full bg-gh-accent-blue transition-all duration-700"
              style={{ width: `${tree.nodes.length ? (completedNodes / tree.nodes.length) * 100 : 0}%` }}
            />
          </div>
          <span className="text-xs text-gh-text-secondary font-mono w-16 text-right">
            {completedNodes}/{tree.nodes.length}
          </span>
          <span className="text-xs text-gh-text-muted font-mono">
            ({tree.nodes.length ? Math.round((completedNodes / tree.nodes.length) * 100) : 0}%)
          </span>
        </div>
      </div>

      {/* Tree content */}
      <div className="flex-1 p-4 sm:p-6 overflow-hidden flex flex-col max-w-full">
        <SkillTreeView
          progress={progress}
          onCompleteNode={handleComplete}
        />
      </div>
    </div>
  );
}

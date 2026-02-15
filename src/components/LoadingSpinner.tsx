export default function LoadingSpinner({ size = 40, label = 'Loading…' }: { size?: number; label?: string }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-[60vh] gap-4">
      <svg className="spinner-svg" width={size} height={size} viewBox="0 0 50 50">
        <circle
          className="spinner-circle"
          cx="25"
          cy="25"
          r="20"
          fill="none"
          stroke="var(--color-gh-accent-blue)"
          strokeWidth="4"
        />
      </svg>
      <p className="text-sm text-gh-text-secondary animate-pulse">{label}</p>
    </div>
  );
}

import { CheckCircle, XCircle, Info, X } from 'lucide-react';
import { useToast } from '../hooks/useToast';

const icons = {
  success: <CheckCircle size={18} className="text-gh-success-fg shrink-0" />,
  error: <XCircle size={18} className="text-gh-danger-fg shrink-0" />,
  info: <Info size={18} className="text-gh-accent-blue shrink-0" />,
};

const borders = {
  success: 'border-gh-success-fg/30',
  error: 'border-gh-danger-fg/30',
  info: 'border-gh-accent-blue/30',
};

export default function ToastContainer() {
  const { toasts, removeToast } = useToast();

  if (toasts.length === 0) return null;

  return (
    <div className="fixed top-4 right-4 z-[100] flex flex-col gap-2 max-w-sm w-full pointer-events-none">
      {toasts.map(toast => (
        <div
          key={toast.id}
          className={`pointer-events-auto flex items-center gap-3 px-4 py-3 rounded-xl bg-gh-surface/95 backdrop-blur border ${borders[toast.type]} shadow-lg ${toast.exiting ? 'toast-exit' : 'toast-enter'}`}
        >
          {icons[toast.type]}
          <span className="text-sm text-gh-text-primary flex-1">{toast.message}</span>
          <button
            onClick={() => removeToast(toast.id)}
            className="text-gh-text-secondary hover:text-gh-text-primary transition shrink-0"
          >
            <X size={14} />
          </button>
        </div>
      ))}
    </div>
  );
}

import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-black/8 bg-white">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-black/45">
        <span>&copy; 2026 ATAR Master. All rights reserved.</span>
        <div className="flex items-center gap-4">
          <Link to="/pricing" className="hover:text-black transition">Pricing</Link>
          <Link to="/privacy" className="hover:text-black transition">Privacy</Link>
          <Link to="/terms" className="hover:text-black transition">Terms</Link>
          <a href="mailto:drjarvisw@gmail.com" className="hover:text-black transition">Contact</a>
        </div>
      </div>
    </footer>
  );
}

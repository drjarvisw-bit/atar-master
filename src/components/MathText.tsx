import 'katex/dist/katex.min.css';
import katex from 'katex';
import DOMPurify from 'dompurify';

interface MathTextProps {
  text: string;
  className?: string;
}

/**
 * Renders text with inline ($...$) and block ($$...$$) LaTeX via KaTeX.
 * Falls back to raw text on render failure.
 */
export default function MathText({ text, className }: MathTextProps) {
  const html = parseMath(text);
  const sanitizedHtml = DOMPurify.sanitize(html);
  return (
    <span
      className={className}
      dangerouslySetInnerHTML={{ __html: sanitizedHtml }}
    />
  );
}

function parseMath(input: string): string {
  // Split on $$...$$ (block) and $...$ (inline)
  // Process block first, then inline within remaining segments
  const parts: string[] = [];
  let remaining = input;

  // Regex: match $$...$$ or $...$  (non-greedy)
  const regex = /(\$\$[\s\S]+?\$\$|\$(?!\$)[\s\S]+?\$)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = regex.exec(remaining)) !== null) {
    // Add text before match
    if (match.index > lastIndex) {
      parts.push(escapeHtml(remaining.slice(lastIndex, match.index)));
    }

    const raw = match[0];
    const isBlock = raw.startsWith('$$');
    const latex = isBlock ? raw.slice(2, -2) : raw.slice(1, -1);

    try {
      const rendered = katex.renderToString(latex, {
        throwOnError: true,
        displayMode: isBlock,
      });
      // Wrap with color inherit so dark theme works
      parts.push(
        isBlock
          ? `<div class="katex-block" style="color:inherit;text-align:center;margin:0.5em 0">${rendered}</div>`
          : `<span style="color:inherit">${rendered}</span>`
      );
    } catch {
      // Fallback to raw text
      parts.push(escapeHtml(raw));
    }

    lastIndex = match.index + raw.length;
  }

  if (lastIndex < remaining.length) {
    parts.push(escapeHtml(remaining.slice(lastIndex)));
  }

  return parts.join('');
}

function escapeHtml(s: string): string {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;');
}

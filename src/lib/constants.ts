/**
 * Application constants
 */

import type { User } from '@supabase/supabase-js';

export const ADMIN_EMAILS = ['wangmengjames@gmail.com', 'drjarvisw@gmail.com'] as const;

export function isAdminEmail(email?: string | null): boolean {
  if (!email) return false;
  return ADMIN_EMAILS.includes(email as (typeof ADMIN_EMAILS)[number]);
}

/**
 * Prefer server-issued role claim; keep email fallback for backward compatibility.
 */
export function isAdminUser(user?: User | null): boolean {
  if (!user) return false;
  const appRole = (user.app_metadata as Record<string, unknown> | undefined)?.role;
  if (appRole === 'admin') return true;
  return isAdminEmail(user.email);
}

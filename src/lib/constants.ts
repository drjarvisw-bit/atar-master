/**
 * Application constants
 */

import type { User } from '@supabase/supabase-js';

/** Years available on the free tier (older, less exam-relevant papers). */
export const FREE_YEARS = new Set([2018, 2019, 2020]);

/** Check whether an exam paper ID (e.g. "mm-2019-exam1") belongs to the free tier. */
export function isFreePaper(paperId: string): boolean {
  const match = paperId.match(/^mm-(\d{4})/);
  if (!match) return false;
  return FREE_YEARS.has(Number(match[1]));
}

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

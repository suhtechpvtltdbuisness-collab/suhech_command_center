import { z } from 'zod';
export const GetDashboardInput = z.object({});
export type GetDashboardOutput = any;
export async function getDashboard(): Promise<GetDashboardOutput> {
  const r = await fetch('/_api/dashboard');
  if (!r.ok) throw new Error('Unable to load company dashboard');
  return r.json();
}
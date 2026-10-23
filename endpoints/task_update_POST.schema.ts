import { z } from 'zod';
export const PostTaskUpdateInput=z.object({id:z.number(),status:z.enum(['not_started','in_progress','at_risk','blocked','completed']),progress:z.number().min(0).max(100).optional(),completionEvidence:z.string().optional()});
export type PostTaskUpdateOutput={task:any};
export async function postTaskUpdate(input:z.infer<typeof PostTaskUpdateInput>):Promise<PostTaskUpdateOutput>{const r=await fetch('/_api/task_update',{method:'POST',headers:{'content-type':'application/json'},body:JSON.stringify(input)});if(!r.ok)throw new Error('Unable to update task');return r.json();}
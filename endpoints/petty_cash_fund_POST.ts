import { db } from '../helpers/db';
import { getEmployeeAccess } from '../helpers/getEmployeeAccess';

const allowed = ['mani mayank', 'soumya sindhu', 'deepti yadav'];
export async function handle(request: Request) {
  let access;try{access=await getEmployeeAccess(request)}catch{return Response.json({error:'Authentication required'},{status:401})}
  if (!access.employee || !allowed.includes(access.employee.name.trim().toLowerCase())) {
    return Response.json({error:'Only Mani Mayank, Soumya Sindhu or Deepti Yadav may add petty cash funds'}, {status:403});
  }
  let body: any;
  try { body = await request.json(); } catch { return Response.json({error:'Invalid request'}, {status:400}); }
  const amount = Number(body.amount);
  const date = String(body.transactionDate || '').trim();
  const details = String(body.transactionDetails || '').trim();
  const source = String(body.sourceOfFunds || '').trim();
  const handed = String(body.handedOverTo || '').trim();
  const mode = String(body.transferMode || 'bank_transfer');
  const reference = String(body.referenceNo || '').trim();
  const utr = String(body.utrNo || '').trim();
  if (!Number.isFinite(amount) || amount <= 0 || amount > 1000000000) return Response.json({error:'Enter a valid positive amount'}, {status:400});
  if (!/^\d{4}-\d{2}-\d{2}$/.test(date) || Number.isNaN(Date.parse(date)) || new Date(date).toISOString().slice(0,10) !== date) return Response.json({error:'Enter a valid transaction date'}, {status:400});
  if (!details || !source || !handed) return Response.json({error:'Transaction details, source of funds and handed over to are required'}, {status:400});
  if (!['bank_transfer','upi','cash','other'].includes(mode)) return Response.json({error:'Invalid transfer mode'}, {status:400});
  if (mode !== 'cash' && !reference && !utr) return Response.json({error:'Enter reference number or UTR for electronic transfers'}, {status:400});
  if ([details,source,handed,reference,utr].some(v=>v.length>500)) return Response.json({error:'One or more fields are too long'}, {status:400});
  try {
    const row = await db.insertInto('pettyCashFunds').values({
      amount, transactionDate:date, transactionDetails:details, sourceOfFunds:source,
      handedOverTo:handed, transferMode:mode, referenceNo:reference||null,
      utrNo:utr||null, notes:String(body.notes||'').slice(0,1000)||null,
      createdByEmployeeId:access.employee.id
    }).returningAll().executeTakeFirstOrThrow();
    return Response.json({row});
  } catch (e:any) {
    if (e?.code === '23505') return Response.json({error:'This UTR number has already been recorded'}, {status:409});
    throw e;
  }
}
import { db } from '../helpers/db';
import { getEmployeeAccess } from '../helpers/getEmployeeAccess';
const allowed=['mani mayank','soumya sindhu','deepti yadav'];
export async function handle(request:Request) {
 let access;try{access=await getEmployeeAccess(request)}catch{return Response.json({error:'Authentication required'},{status:401})}
 if(!access.employee || !allowed.includes(access.employee.name.trim().toLowerCase()))
   return Response.json({error:'Petty cash access restricted'}, {status:403});
 const [rows,funds]=await Promise.all([
  db.selectFrom('expenses').selectAll().where('category','=','Petty Cash').orderBy('expenseDate','desc').orderBy('id','desc').execute(),
  db.selectFrom('pettyCashFunds').selectAll().orderBy('transactionDate','desc').orderBy('id','desc').execute()
 ]);
 const total=rows.filter(x=>x.status!=='rejected').reduce((s,x)=>s+Number(x.amount)+Number(x.gstAmount),0);
 const fundTotal=funds.reduce((s,x)=>s+Number(x.amount),0);
 return Response.json({rows,total,funds,fundTotal,balance:fundTotal-total});
}
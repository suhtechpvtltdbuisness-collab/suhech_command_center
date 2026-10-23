import{db}from'./db';
export const ONBOARDING_DEFAULTS=[
['documents','Verify joining documents'],
['agreement','Offer / appointment acceptance'],
['agreement','NDA & confidentiality acceptance'],
['access','Create company system account'],
['induction','Company & policy induction'],
['department','Assign department and reporting manager'],
['kpi','Assign first KPI / target'],
['work','Assign first work / deliverable'],
['payroll','Verify bank & payroll information']
] as const;
export async function ensureOnboardingChecklist(employeeId:number,baseDate:Date,executor:any=db){
 const existing=await executor.selectFrom('onboardingItems').selectAll().where('employeeId','=',employeeId).execute();
 const keys=new Set(existing.map((x:any)=>x.category+'|'+x.title.toLowerCase()));
 let created=0;
 for(let i=0;i<ONBOARDING_DEFAULTS.length;i++){
  const[category,title]=ONBOARDING_DEFAULTS[i],key=category+'|'+title.toLowerCase();
  if(keys.has(key))continue;
  const due=new Date(baseDate);due.setDate(due.getDate()+Math.min(i,4));
  await executor.insertInto('onboardingItems').values({employeeId,title,category,dueDate:due,notes:null}).execute();created++;
 }
 return created;
}
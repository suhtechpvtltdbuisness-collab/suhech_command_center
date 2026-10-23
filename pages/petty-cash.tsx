import React, {useEffect, useState} from 'react';
import {getPettyCash} from '../endpoints/petty_cash_GET.schema';
import {postPettyCash} from '../endpoints/petty_cash_POST.schema';
import {postPettyCashFund} from '../endpoints/petty_cash_fund_POST.schema';

const today=()=>new Date().toLocaleDateString('en-CA',{timeZone:'Asia/Kolkata'});
const money=(v:any)=>'₹'+Number(v||0).toLocaleString('en-IN',{maximumFractionDigits:2});
const inputStyle:React.CSSProperties={display:'block',width:'100%',padding:'10px',border:'1px solid #c7c8da',borderRadius:8,marginTop:5,boxSizing:'border-box'};
const card:React.CSSProperties={padding:18,border:'1px solid #ddddec',borderRadius:12,background:'#fff'};
const field=(label:string,key:string,type:string,form:any,set:(v:any)=>void,required=false)=><label key={key} style={{fontSize:13,fontWeight:600}}>{label}<input style={inputStyle} type={type} required={required} min={type==='number'?'0.01':undefined} step={type==='number'?'0.01':undefined} value={form[key]||''} onChange={e=>set({...form,[key]:e.target.value})}/></label>;
export default function PettyCash(){
 const [data,setData]=useState<any>({rows:[],funds:[],total:0,fundTotal:0,balance:0});
 const [expense,setExpense]=useState<any>({expenseDate:today(),title:'',amount:'',vendor:'',notes:''});
 const [fund,setFund]=useState<any>({transactionDate:today(),amount:'',transactionDetails:'',referenceNo:'',utrNo:'',sourceOfFunds:'',transferMode:'bank_transfer',handedOverTo:'',notes:''});
 const [tab,setTab]=useState<'fund'|'expense'>('fund');
 const [error,setError]=useState('');const [success,setSuccess]=useState('');const [busy,setBusy]=useState(false);
 const load=async()=>{const d=await getPettyCash();setData(d)};
 useEffect(()=>{load().catch(e=>setError(e.message))},[]);
 const save=async(e:React.FormEvent)=>{e.preventDefault();setError('');setSuccess('');if(tab==='fund'&&fund.transferMode!=='cash'&&!String(fund.referenceNo||'').trim()&&!String(fund.utrNo||'').trim()){setError('For UPI, bank transfer or other electronic transfers, enter a Reference Number or UTR Number before saving.');return;}setBusy(true);try{
  if(tab==='fund'){await postPettyCashFund(fund);setFund({...fund,amount:'',transactionDetails:'',referenceNo:'',utrNo:'',sourceOfFunds:'',handedOverTo:'',notes:''});setSuccess('Fund addition recorded successfully')}
  else{await postPettyCash(expense);setExpense({...expense,title:'',amount:'',vendor:'',notes:''});setSuccess('Expense recorded successfully')}
  await load();
 }catch(err:any){setError(err.message||'Unable to save')}finally{setBusy(false)}};
 return <main style={{padding:24,maxWidth:1200,margin:'auto',color:'#17152f'}}>
  <a href="/workspace">← My Workspace</a>
  <h1>Petty Cash & Fund Register</h1>
  <p>Record funds received or handed over and daily expenses. Fund transfers are not treated as revenue or expenses.</p>
  <section style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(180px,1fr))',gap:12,marginBottom:24}}>
   <div style={card}><small>Total Funds Added</small><h2>{money(data.fundTotal)}</h2></div>
   <div style={card}><small>Total Expenses</small><h2>{money(data.total)}</h2></div>
   <div style={card}><small>Petty Cash Balance</small><h2>{money(data.balance)}</h2></div>
  </section>
  <section style={card}>
   <div style={{display:'flex',gap:8,flexWrap:'wrap',marginBottom:16}}>
    <button type="button" onClick={()=>{setTab('fund');setError('');setSuccess('')}} style={{padding:'10px 18px',borderRadius:8,background:tab==='fund'?'#5b45e8':'#efedff',color:tab==='fund'?'white':'#342b83',border:0}}>+ Add Funds</button>
    <button type="button" onClick={()=>{setTab('expense');setError('');setSuccess('')}} style={{padding:'10px 18px',borderRadius:8,background:tab==='expense'?'#5b45e8':'#efedff',color:tab==='expense'?'white':'#342b83',border:0}}>+ Add Expense</button>
   </div>
   <h2>{tab==='fund'?'Add Funds to Petty Cash':'Daily Expense Entry'}</h2>
   {error&&<p role="alert" style={{color:'#b42318'}}>{error}</p>}{success&&<p role="status" style={{color:'#087a4b'}}>{success}</p>}
   <form onSubmit={save} style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(220px,1fr))',gap:14}}>
    {tab==='fund'?<>
      {field('Transaction date *','transactionDate','date',fund,setFund,true)}
      {field('Amount received (₹) *','amount','number',fund,setFund,true)}
      {field('Transaction details *','transactionDetails','text',fund,setFund,true)}
      {field(fund.transferMode==='cash'?'Reference number':'Reference number (or UTR required)','referenceNo','text',fund,setFund)}
      {field(fund.transferMode==='cash'?'UTR number':'UTR number (or reference required)','utrNo','text',fund,setFund)}
      {field('Source of money transfer *','sourceOfFunds','text',fund,setFund,true)}
      <label style={{fontSize:13,fontWeight:600}}>Transfer mode<select style={inputStyle} value={fund.transferMode} onChange={e=>setFund({...fund,transferMode:e.target.value})}><option value="bank_transfer">Bank Transfer</option><option value="upi">UPI</option><option value="cash">Cash</option><option value="other">Other</option></select></label>
      {field('Handed over to *','handedOverTo','text',fund,setFund,true)}
      {field('Notes','notes','text',fund,setFund)}
     </>:<>
      {field('Date *','expenseDate','date',expense,setExpense,true)}
      {field('Expense description *','title','text',expense,setExpense,true)}
      {field('Amount (₹) *','amount','number',expense,setExpense,true)}
      {field('Paid to / vendor','vendor','text',expense,setExpense)}
      {field('Notes','notes','text',expense,setExpense)}
     </>}
    <button disabled={busy} type="submit" style={{padding:12,alignSelf:'end',background:'#5b45e8',color:'white',border:0,borderRadius:8,cursor:'pointer'}}>{busy?'Saving…':tab==='fund'?'Save Fund Entry':'Save Expense'}</button>
   </form>
   {tab==='fund'&&<p style={{fontSize:13,color:fund.transferMode==='cash'?'#5c5a72':'#9a3412',fontWeight:fund.transferMode==='cash'?400:600}}>{fund.transferMode==='cash'?'Cash transfers do not require a reference or UTR.':'Required for UPI / electronic transfers: fill in either Reference Number or UTR Number. Duplicate UTR numbers are blocked.'}</p>}
  </section>
  <section style={{...card,marginTop:20,overflowX:'auto'}}><h2>Funds Received / Handed Over</h2><table style={{width:'100%',textAlign:'left',minWidth:950}}><thead><tr>{['Date','Amount','Transaction details','Reference No.','UTR No.','Source of funds','Mode','Handed over to'].map(x=><th key={x} style={{padding:9}}>{x}</th>)}</tr></thead><tbody>{data.funds?.length?data.funds.map((x:any)=><tr key={x.id}>{[String(x.transactionDate).slice(0,10),money(x.amount),x.transactionDetails,x.referenceNo||'—',x.utrNo||'—',x.sourceOfFunds,x.transferMode,x.handedOverTo].map((v:any,i)=><td key={i} style={{padding:9,borderTop:'1px solid #eee'}}>{v}</td>)}</tr>):<tr><td colSpan={8} style={{padding:12}}>No funds added yet.</td></tr>}</tbody></table></section>
  <section style={{...card,marginTop:20,overflowX:'auto'}}><h2>Daily Expense History</h2><table style={{width:'100%',textAlign:'left',minWidth:600}}><thead><tr><th>Date</th><th>Description</th><th>Paid to</th><th>Amount</th><th>Entry details</th></tr></thead><tbody>{data.rows?.length?data.rows.map((x:any)=><tr key={x.id}><td>{new Date(x.expenseDate).toLocaleDateString('en-IN')}</td><td>{x.title}</td><td>{x.vendor||'—'}</td><td>{money(Number(x.amount)+Number(x.gstAmount))}</td><td>{x.notes||'—'}</td></tr>):<tr><td colSpan={5}>No expenses yet.</td></tr>}</tbody></table></section>
 </main>;
}
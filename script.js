const billamount=document.querySelector("#bill-amount");
const cashgiven=document.querySelector("#cash-given");
const message=document.querySelector("#message");
const checkbutton=document.querySelector("#check-button")
var denominations=[2000,500,100,50,20,10,5,2,1]
const notes=document.querySelectorAll(".notes-count")
var clickhandler=()=>{
  const billamnt=parseInt(billamount.value);
  const cashamnt=parseInt(cashgiven.value);
  if(billamount.value===''||cashgiven.value==='')
  {
    showmessage("Enter all the fields Please!!");
  }
  else
  {
    message.style.display="none";
    if(billamnt<=0)
    {
      showmessage("Enter a valid Bill Amount!!")
    }
    else
    {
      if(cashamnt < billamnt)
      {
        showmessage("Do you want to wash Dishes !!! ?")
      }
      else{
        message.style.display="none";
        setAmount(cashamnt-billamnt)
      }
    }
  }
}
var setAmount=(amount)=>{
  for(let i=0;i<9;i++)
  {
    var curamount=Math.trunc(amount/denominations[i]);
    notes[i].innerText=(curamount!="Nan") ? Math.trunc(curamount) : 0;
    amount=amount%denominations[i];
  }
}
var showmessage=(msg)=>{
  message.style.display="block";
  message.innerText=msg;
}
checkbutton.addEventListener("click",clickhandler);
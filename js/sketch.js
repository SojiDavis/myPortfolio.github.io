
let rate1=document.querySelector(".rate1");
let catch_err=document.querySelector(".catch");
let error = document.getElementById("error");
let trerr = document.getElementById("targeterr");
let resultbtn=document.querySelector(".result");
let selects = document.querySelectorAll(".options select");
let sel1=selects[0];
let sel2=selects[1];
let inputs=document.querySelectorAll(".input input")
let inpt1=inputs[0];
let inpt2=inputs[1];

let rates={};


let requestURL ="http://www.floatrates.com/daily/usd.json";
populateOptions();
function populateOptions(){    
    let val='<option > USD </option>';
    fetch(requestURL).then(res => res.json()).then(data =>{
    Object.keys(data).forEach((code) =>  {  
      
        let str ='<option >${code}$</option>';
        val +=str;          
  })
  selects.forEach((s) =>(s.innerHTML=val.toUpperCase()));
});
}
function convert(val, fromcurr, tocurre){
    let url = 'http://www.floatrates.com/daily/${fromcurr}$.json';
    fetch(url)
    .then(res => 
     res.json()).then(data => {        
    let todetails = data[tocurre]; 
    let v = val* (todetails.rate); 
    v1=v.toFixed(3);     
    inpt2.value = v1 == 0.0 ? v.toFixed(5) : v1;   
    let d = new Date();
    
    // rate1.innerHTML = 'Current Exchange Rate : 1 $(fromcurr.toUpperCase() )$ = $(1* (todetails.rate).toFixed(03) )$tocurre.toUpperCase()'
    // +"<br> Last exchange rate updated: " + (todetails.date) + '<br>Calculation Timestamp: ' + d ;
    rate1.innerHTML = 'Current Exchange Rate : 1 ${fromcurr.toUpperCase()}$  = ${ 1* (todetails.rate).toFixed(03)}$ ${tocurre.toUpperCase()}$ <br> Last exchange rate updated: ${todetails.date}$ <br>Calculation Timestamp: ${d}$';


   catch_err.innerHTML ="";

 }) .catch(() => {
    catch_err.innerHTML = "Please select different currency";
    rate1.innerHTML = "";
    error.textContent = "";
 });
}
resultbtn.addEventListener("click",() =>{
    
    const  fromcurr = sel1.value.toLowerCase();    
    let fromVal= parseFloat(inpt1.value);    
    let tocurr= sel2.value.toLowerCase();
         
    if(isNaN(fromVal)){
        rate1.innerHTML = "";           
        catch_err.innerHTML ="";
        error.textContent = "Please enter a valid number";
        error.style.color = "red" ;
           
    }else if(fromVal <= 0) {
        rate1.innerHTML = "";
        inpt2.value ="";
        catch_err.innerHTML ="";
        error.textContent = "Please enter a valid number";
        error.style.color = "red";
            
           
    }else if(fromVal > 9999999999) {
        error.textContent = "Number Exceed the Max limit";
        error.style.color = "red";
        rate1.innerHTML = "";
        inpt2.value ="";
        catch_err.innerHTML ="";
           
    }else{
         convert( fromVal ,fromcurr,tocurr);
         error.textContent = "";
         error.style.color = "none";
    }
    
});

document.querySelector(".swap").addEventListener("click",() => {

    let op1 =sel1.value;
    let op2=sel2.value;

    sel2.value = op1;
    sel1.value = op2;

    convert(inpt1.value,op2.toLowerCase(),op1.toLowerCase());
})
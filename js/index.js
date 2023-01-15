let selects = document.querySelector(".options select");
let resultbtn=document.querySelector(".result");
let years = document.querySelectorAll(".year select");
let months = document.querySelectorAll(".month select");
let year_sel = document.querySelector(".year select");
let month_sel = document.querySelector(".month select");
let gobtn=document.querySelector(".go");
let box = document.getElementById('.his_mode');
let error = document.getElementById("error");

fetch('files/forcasting_value_table.csv')
   .then(function (response) {
      return response.text();
   })
   .then(function (text) {

        year_sel.style.display ="none"
        month_sel.style.display="none"
        gobtn.style.display="none"

        let dataAsJson = JSC.csv2Json(text);
        let arrayLength = dataAsJson.length-13;        
        csvToSeries(arrayLength,dataAsJson);
     
    resultbtn.addEventListener("click",() =>{   
        error.textContent = ""
        error.style.color = "none"  
       
        let dataAsJson = JSC.csv2Json(text);    
      if(selects.value == 'Forecast'){  
        year_sel.style.display ="none"
        month_sel.style.display="none"
        gobtn.style.display="none"
        
        let arrayLength = dataAsJson.length-1;
          
        csvToSeries(arrayLength,dataAsJson);    
        
}else if(selects.value =='Historical'){

        year_sel.style.display ="block"
        month_sel.style.display="block"
        gobtn.style.display="block"
   
    let year_val="";
    let month_val ="";
    let dataAsJson = JSC.csv2Json(text);
    dataAsJson.forEach(element => {
        if (element.Unique_Year != null){
        let str ='<option >'+ element.Unique_Year +'</option>';
        year_val +=str;  
        }
         });
         years.forEach((s) =>(s.innerHTML=year_val));    
    dataAsJson.forEach(element => {
            if (element.Unique_Month != ''){
            let str ='<option >'+ element.Unique_Month +'</option>';
            month_val +=str;  
            }
             });
             months.forEach((s) =>(s.innerHTML=month_val)); 
    gobtn.addEventListener("click",() =>{  
        error.textContent = ""
         error.style.color = "none"
        let j;
        let x = 0;
        
            if (dataAsJson[0].Year == year_sel.value && dataAsJson[0].Month == month_sel.value ){
                error.textContent = "You are not able to see the historical details before 1996 ";
                error.style.color = "red" ;
                
            } 
            else {
                
                for (j=0;j <dataAsJson.length;j++ ){                   
                    if ((dataAsJson[j].Year == year_sel.value) && (dataAsJson[j].Month == month_sel.value)){
                        
                        x=j;
                        j=dataAsJson.length;               
                     }    
                }            
        }  

        if(x<11){
            error.textContent = "You are not able to see the historical details before 1996 ";
                // error.style.color = "red" ;
                // error.background.color="white";

        }else if (x >= (dataAsJson.length-12)){
            error.textContent ="You are not able to see the historical details after 2022 August";
            // error.style.color = "white" ;
            // error.background.color="white";
           
                  
        } else if ( x >0 ){
        let arrayLength = x;
               
        csvToSeries(arrayLength,dataAsJson);
        }
});      
}
    }); 
     
    })

   .catch(function (error) {
    error.textContent = "Something Went Worng";
    error.style.color = "red" ;
   });

   function csvToSeries(arrayLength,dataAsJson) {   
    let arrayLimit = arrayLength-11;  

    let solid_fuels = [], gas = [],electricity = [],liquid_fuels =[];
    
       for(let i =arrayLimit;i<=arrayLength;i++){
      
        const elements = [dataAsJson[i].Month,dataAsJson[i].Year];
        solid_fuels.push({ x: elements.join(),y:dataAsJson[i].Solid_fuels});
        gas.push({ x: elements.join(),y:dataAsJson[i].Gas});
        electricity.push({ x: elements.join(),y:dataAsJson[i].Electricity});
        liquid_fuels.push({ x: elements.join(),y:dataAsJson[i].Liquid_fuels});
     
       }
    

   series =  [
    {name: 'Solid fuels', points: solid_fuels},
    {name: 'Gas', points: gas},
    {name: 'Electricity', points: electricity},
    {name: 'Liquid fuels', points: liquid_fuels}
   ];
   renderChart(series);
}

function renderChart(series){
   JSC.Chart('chartDiv', {
      series: series
   });
   
}

    

 




const splash= document.querySelector(".splash");

document.addEventListener("DOMContentLoaded", (e)=>{
  console.log("inside");

  setTimeout(()=>{
    console.log("insidetime");
    splash.classList.add('display-none');
  },1500);
})

const msg = document.getElementById('msg');
const cnt = document.getElementById('cnt');

msg.addEventListener('input', function (e) {
 
    const target = e.target;

    const maxLen = target.getAttribute('maxlength');
    
    const length = target.value.length;

    cnt.innerHTML = length +'/'+ maxLen;
    
});

function myFunction() {
  
  document.getElementById("myForm").reset();
  cnt.innerHTML = " ";
}

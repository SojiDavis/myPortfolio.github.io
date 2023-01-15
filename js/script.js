const msg = document.getElementById('msg');
const cnt = document.getElementById('cnt');

msg.addEventListener('input', function (e) {
 
    const target = e.target;

    // Get the `maxlength` attribute
    const maxLen = target.getAttribute('maxlength');
    

    // Count the current number of characters
    const length = target.value.length;

    // cnt.innerHTML = length +'/'+ maxLen;
    cnt.innerHTML = '${length}$ / ${maxLen}$';
    

    
});

function myFunction() {
  
  document.getElementById("myForm").reset();
  cnt.innerHTML = " ";
}

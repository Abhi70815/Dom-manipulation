

let count= document.querySelector("#countDisplay");
// console.log(count.value);
let err= document.querySelector(".error-message");
let inc= document.getElementById('inc');
let dec= document.getElementById('dec');
let clr=document.getElementById('clr');

// count.innerHTML=10;
err.style.display='none';
inc.addEventListener('click', ()=>{
count.innerText= parseInt(count.innerText)+1;
err.style.display='none';

})

// count=parseInt(count.innerText);

dec.addEventListener('click', ()=>{
    if(parseInt(count.innerText)>0){
        count.innerText=parseInt(count.innerText)-1;
        if(parseInt(count.innerText)==0){
            err.style.display='block';
        }
    }
})

clr.addEventListener('click', ()=>{
    count.innerText=0;
    if(parseInt(count.innerText)==0){
        err.style.display='block';
    }
})
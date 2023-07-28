
let c;
let i=10;
console.log(c);

function calculate(){
    c=document.getElementById("computers").value;
    let i=20;
    debugger
    let p=document.getElementById("Physics").value;
    let ch=document.getElementById("Chemistry").value;
    let m=document.getElementById("maths").value;
    let total=parseFloat(c)+parseFloat(p)+parseFloat(ch)+parseFloat(m);
    let per=(total/400)*100;
    let total_marks=document.getElementById("show-data");
    //total_marks.textContent='total marks are' +total;
    total_marks.innerHTML=`${per}`;
    
}
document.getElementById("percentage").addEventListener("click",calculate);
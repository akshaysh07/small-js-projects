// let count=0;

let count=0 
const savedEl=document.getElementById("saved-data")
const countEl=document.getElementById("counter");



 function incrementData(){
    count+=1;
     countEl.textContent=count;
}


function saveData(){
     let countStr=count + "-";

     savedEl.textContent+=countStr;
     countEl.textContent=0;
     count=0
}

function cancelData() {
     count-=1;
     countEl.textContent=count;
}





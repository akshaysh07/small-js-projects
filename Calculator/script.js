const screen=document.getElementById('screen');
const btn=document.querySelectorAll('button');
screenValue=" ";
for (item of btn) {
    item.addEventListener('click',(e) =>{
       btnText=e.target.innerText;
       if(btnText=='X'){
           btnText='*';
           screenValue+=btnText;
           screen.value=screenValue;
        }else if(btnText=='C'){
            screenValue=" ";
            screen.value=screenValue;
        }else if(btnText=== '='){
            screen.value=eval(screenValue);
        }else{
            screenValue+=btnText;
            screen.value=screenValue;
        }
            

    });
}
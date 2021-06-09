const count=document.getElementById('counter');

visitCounter();
function visitCounter(){
    fetch('https://api.countapi.xyz/hit/:HOST:/:PATHNAME:')
    .then(res => res.json())
    .then(res => {
        count.innerHTML=res.value;
    })
}
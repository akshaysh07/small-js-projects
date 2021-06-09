const circles =document.querySelectorAll('.circle')

let currentLight=0;

setInterval(changeLight,1000);

function changeLight(){
    circles[currentLight].className='circle';
    currentLight++;

    if(currentLight > 2) {
        currentLight=0;
    }

    const lights=circles[currentLight];

    lights.classList.add(lights.getAttribute('color'))
}

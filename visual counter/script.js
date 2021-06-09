const counterEl = document.querySelectorAll(".counter");

counterEl.forEach((counter) => {
  counter.innerText = "0";

  const updateCounter = () =>  {
    const target = +counter.getAttribute("data-target");

    const update = +counter.innerText;

    const increment=Math.random()*100;

    if (update < target) {
      counter.innerText = Math.ceil( update + increment) ;
      setTimeout(updateCounter, 10);
      
    }else{
      counter.innerText=target;
    }
  };

  updateCounter();
});

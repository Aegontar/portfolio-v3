function changeNavHeight() {
document.querySelector('ul.dropdown-content').classList.toggle("on");
};


window.onscroll = function changeNavBarColor() { 

    if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
        document.querySelector(".desktop-nav").style.backgroundColor  = "rgba(0,0,0, .7)";
      } else {
        document.querySelector(".desktop-nav").style.backgroundColor  = "transparent";
      }
}


// home page text animations

function worldOn() {
  document.querySelector('.exposure').classList.toggle("on");
  };
  
  function worldOff() {
  document.querySelector('.exposure').classList.toggle("on");
  };
  
  function treeOn() {
  document.querySelector('.brand').classList.toggle("on");
  };
  
  function treeOff() {
  document.querySelector('.brand').classList.toggle("on");
  };
  
  function mountainOn() {
  document.querySelector('.sales').classList.toggle("on");
  };
  
  function mountainOff() {
  document.querySelector('.sales').classList.toggle("on");
  };
  
  function loop() {
  setTimeout(worldOn, 00)
  setTimeout(worldOff, 4000)
  setTimeout(treeOn, 4000)
  setTimeout(treeOff, 8000)
  setTimeout(mountainOn, 8000)  
  setTimeout(mountainOff, 12000)  
  }
  
   loop();
  
  setInterval(loop, 13000);
  
 
  let accordionBtn = document.querySelectorAll('.accordion-btn');
  let singleAccordionBtn = document.querySelector('.accordion-btn');

  for (let i = 0; i < accordionBtn.length; i++) {
    accordionBtn[i].addEventListener('click', function(){      
      this.classList.toggle('isOpen');
      let accordionContent = this.nextElementSibling;
      if (accordionContent.style.maxHeight) {
    accordionContent.style.maxHeight = null;
      } else {
        accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
        console.log(accordionContent.scrollHeight)
      }
    });
  }
  

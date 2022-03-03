const setDisplay=document.getElementsByClassName('bottomNavListDropDownHider');

function hover(){
  setDisplay[0].style.display='block'
}
function removeHover(){
  setDisplay[0].style.display='none'
}

const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimenstions = item.getBoundingClientRect();
    let containerWidth = containerDimenstions.width;
    nxtBtn[i].addEventListener('click', () => {
      const vw = document.documentElement.clientWidth;
        item.scrollLeft += containerWidth+20;
    })

    preBtn[i].addEventListener('click', () => {
      const vw = document.documentElement.clientWidth;
        item.scrollLeft -= containerWidth+30;
    })
})

const productContainersLikes = [...document.querySelectorAll('#heart')];
productContainersLikes.forEach((item, i) => {
  item.addEventListener('click',()=>{
    if(item.style.color=='rgb(224, 255, 4)')
      item.style.color='black'
    else item.style.color='rgb(224, 255, 4)'
  })

})

var mybutton = document.getElementById("myBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


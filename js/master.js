//this is for the beginning loop of words in the introduction

let counter = 1;
let titleCards = document.querySelectorAll('.title')
setInterval(() => {
    let index = counter % titleCards.length ;
    let prevIndex = index - 1;
    if (prevIndex < 0) {
        prevIndex = titleCards.length - 1
    } //resets the loop
    titleCards[prevIndex].classList.add('hidden');
    titleCards[index].classList.remove('hidden');
    ++counter;
}, 4000 );//4seconds

//attempt at parallaxed text and movement
//below are all of the elements being transformed later
let header = document.querySelector('#header'),
    mainImg = document.querySelector('#mainImg'),
    box = document.querySelector('#box'),
    aboutText = document.querySelector('#aboutText')

//calculating the width and height of the users window
let width = window.innerWidth || document.documentElement.clientWidth,
    height = window.innerHeight || document.documentElement.clientHeight;

//when you mouse moves, you start the event which translates the position of the given elements
document.addEventListener("mousemove", moveMe);

//these are the elements turned into objects, so we can loop through them
let transformLayers = [ 
    {
        el: mainImg,
        parallax: 12
    },{
        el: header,
        parallax: 30
    },{
        el: box,
        parallax: 19
    },{
        el: aboutText,
        parallax: 0
    }
]

function moveMe(e) {
    // .pageX and .pageY get the horizontal and vertical coordinates of your mouse
    let cursorX = e.pageX / width,
      offsetX = 0.5 - Math.pow(cursorX, 2); //cursor position X

    let cursorY = e.pageY / height,
      offsetY = 0.5 - Math.pow(cursorY, 2); //cursor position Y

    //start our loop of transformations
    for (let i = 0; i < transformLayers.length; i++) {
      //the value we are giving the element to move
      let parallax = transformLayers[i].parallax;  
  
      //transform will vary based off of the trannsformed layer we are looping through
      let transform;
      if (transformLayers[i].moveMe){
        transform = `rotateX(${-offsetY * parallax * 2})deg 
        rotateY(${-offsetX * parallax * 2})deg`;
      }else{
         transform = `translate3d(${offsetX * parallax}px, 
            ${offsetY * parallax}px, 20px)`;
      }
      transformLayers[i].el.style.transform = transform;
    }}
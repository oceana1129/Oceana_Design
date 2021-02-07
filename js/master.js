let counter = 0;
let titleCards = document.querySelectorAll('.title')
setInterval(() => {
    // console.log('Inside cycleThrough function ' + counter);
    let index = counter % titleCards.length ;
    let prevIndex = index - 1;
    if (prevIndex < 0) {
        prevIndex = titleCards.length - 1
    }
    titleCards[prevIndex].classList.add('hidden');
    titleCards[prevIndex].classList.add('hidden');
    titleCards[index].classList.remove('hidden');
    ++counter;
    // console.log(counter);
}, 4000);

  
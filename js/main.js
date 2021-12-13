let currentFloor = 2;
const thisFloor = document.querySelector('.counter-group span');
let floors = document.querySelectorAll(".house path");
const buttonUp = document.querySelector('.up');
const buttonDown = document.querySelector('.down');

function deleteActive() {
    const floor = document.querySelector('.active_floor');
    if(floor) floor.classList.remove('active_floor');
}

function returnFloor(currFloor) {
    currFloor = currFloor.toString();
    if(currFloor.length === 1) {
        currFloor = "0"+currFloor;
    }
    return currFloor;
}

floors.forEach(floor => {
    floor.addEventListener('mouseover',(event => {
        deleteActive();
        //console.log(event.target);
        event.target.classList.add('active_floor');
        thisFloor.textContent = returnFloor(event.target.dataset.floor);
    }))
})

buttonUp.addEventListener('click',() => {
    if(thisFloor.textContent < 18){
    deleteActive();
    let floor = parseInt(thisFloor.textContent)+1;
    floor = returnFloor(floor);
    thisFloor.textContent = floor;
    const setActiveFloor = document.querySelector('[data-floor="'+floor+'"]');
    setActiveFloor.classList.add('active_floor');
   // console.log(floor);
    }
})

buttonDown.addEventListener('click',() => {
    if(thisFloor.textContent > 2){
        deleteActive();
        let floor = parseInt(thisFloor.textContent)-1;
        floor = returnFloor(floor);
        thisFloor.textContent = floor;
        const setActiveFloor = document.querySelector('[data-floor="'+floor+'"]');
        setActiveFloor.classList.add('active_floor');
        // console.log(floor);
    }
})
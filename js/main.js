var currentFloor = 2;
const thisFloor = document.querySelector('.counter-group span');
let floors = document.querySelectorAll(".house path");
const buttonUp = document.querySelector('.up');
const buttonDown = document.querySelector('.down');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal_close');
const seeFlats = document.querySelector('.button-primary');
const modalFloorNumber = document.querySelector('.modal_title span');
let flats = document.querySelectorAll('.modal_svg path');
const modalFlats = document.querySelectorAll('.modal_flat');
const burger = document.querySelector('.menu-burger');
const navbar = document.querySelector('.navbar');

burger.addEventListener('click', (event => {
    burger.classList.toggle('open-menu');
    navbar.classList.toggle('open-menu')
}))


function deleteActiveFloor() {
    const floor = document.querySelector('.active_floor');
    if(floor) floor.classList.remove('active_floor');
}

function deleteActiveFlat() {
    const flat = document.querySelector('.active_flat');
    const activeFlat = document.querySelector('.modal_flat_active');
    if(flat) flat.classList.remove('active_flat');
    if(activeFlat) activeFlat.classList.remove('modal_flat_active');
}

function toggleModal() {
    //window.scrollTo(0,0);
    document.body.classList.toggle('lock');
    modal.classList.toggle('modal_active');
    flats.forEach(flat => {
    let flatNumber = modalFlats[flat.dataset.flat-1].querySelector('.flat_number');
    let flatSquare = modalFlats[flat.dataset.flat-1].querySelector('.flat_square');
    let flatCount = modalFlats[flat.dataset.flat-1].querySelector('.flat_count');
    flatNumber.textContent = parseInt(flat.dataset.flat) + (currentFloor-2)*10;
    flatSquare.textContent = flat.dataset.square;
    flatCount.textContent = flat.dataset.count;
    })
}

seeFlats.addEventListener('click', () => {
    toggleModal();
})

modalClose.addEventListener('click', () => {
    toggleModal();
})

modal.addEventListener('click',(event) => {
    if(!event.target.closest('.modal_body')) {
        toggleModal();
    }
})

function returnFloor(currFloor) {
    currentFloor = currFloor;
    currFloor = currFloor.toString();
    if(currFloor.length === 1) {
        currFloor = "0"+currFloor;
    }
    return currFloor;
}

floors.forEach(floor => {
    floor.addEventListener('mouseover',(event => {
        deleteActiveFloor();
        event.target.classList.add('active_floor');
        thisFloor.textContent = returnFloor(event.target.dataset.floor);
        modalFloorNumber.textContent = returnFloor(event.target.dataset.floor);
    }))
    floor.addEventListener('click',() => {
        toggleModal();
    })
})

buttonUp.addEventListener('click',() => {
    if(thisFloor.textContent < 18){
    deleteActiveFloor();
    let floor = parseInt(thisFloor.textContent)+1;
    floor = returnFloor(floor);
    thisFloor.textContent = floor;
    modalFloorNumber.textContent = floor;
    const setActiveFloor = document.querySelector('[data-floor="'+floor+'"]');
    setActiveFloor.classList.add('active_floor');

    }
})

buttonDown.addEventListener('click',() => {
    if(thisFloor.textContent > 2){
        deleteActiveFloor();
        let floor = parseInt(thisFloor.textContent)-1;
        floor = returnFloor(floor);
        thisFloor.textContent = floor;
        modalFloorNumber.textContent = floor;
        const setActiveFloor = document.querySelector('[data-floor="'+floor+'"]');
        setActiveFloor.classList.add('active_floor');

    }
})

flats.forEach(flat => {


    flat.addEventListener('mouseover', (event => {
        deleteActiveFlat();
        event.target.classList.add('active_flat');
        modalFlats[flat.dataset.flat-1].classList.add('modal_flat_active');
    }))
    modalFlats[flat.dataset.flat-1].addEventListener('mouseover', () => {
        // console.log(count);
        deleteActiveFlat();
        modalFlats[flat.dataset.flat-1].classList.add('modal_flat_active');
        flat.classList.add('active_flat');
    })
})





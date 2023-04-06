// finding overlay
let overlayElem = document.querySelector('.comparison__overlay');

// finding slider
let slider = document.querySelector('.comparison__slider');

// finding img width
let width = overlayElem.offsetWidth;


slider.onmousedown = function (event) {
    console.log(width)

    // completing only our tasks
    event.preventDefault();
    
    
    if (event.pageX > overlayElem.getBoundingClientRect().x && event.pageX < overlayElem.getBoundingClientRect().x + width) {

        // setting position absolute and moving to same cords
        slider.style.position = 'absolute';
        moveAt(slider,event);
    }

    // moving on image
    document.onmousemove = (e) => {

        // move if cursor in img
        if (e.pageX > overlayElem.getBoundingClientRect().x && e.pageX < overlayElem.getBoundingClientRect().x + width) {
            moveAt(slider,e);
        }
        // setting img addiction from slider
        overlayElem.style.width = (e.pageX - overlayElem.getBoundingClientRect().x) + 'px';
            
    }   
    
    // catching mouse up
    slider.onmouseup = () => {
        document.onmousemove = null;
        slider.onmouseup = null;
        }
}


function moveAt (block, event) {
    block.style.left = event.pageX - block.offsetWidth / 2 + "px";
}




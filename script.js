// finding overlay
let overlayElem = document.querySelector('.comparison__overlay');

// finding slider
let slider = document.querySelector('.comparison__slider');

// finding img width
let width = overlayElem.getBoundingClientRect().width;


slider.onmousedown = function (event) {
    
    
    // completing only our tasks
    event.preventDefault();
    
    
    if (event.pageX > overlayElem.getBoundingClientRect().x && event.pageX < overlayElem.getBoundingClientRect().x + width) {

        // setting position absolute and moving to same cords
        slider.style.position = 'absolute';
        moveAt(slider,event);
    }

    // moving on image
    document.onmousemove = (e) => {
        
        if (e.pageX > overlayElem.getBoundingClientRect().x && e.pageX < overlayElem.getBoundingClientRect().x + width) {
            
            // move if cursor in img
            moveAt(slider,e);
            
            // setting img addiction from slider
            overlayElem.style.width = (e.pageX - overlayElem.getBoundingClientRect().x) + 'px';
        
            // setting background(main image)
            document.querySelector('.comparison__container').style.background = 'url("img/image1.jpg")';
        }
        
        // turning off browser drag n drop
        slider.ondragstart = function() {
            return false;
          };
        
            
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

// setting start position to slider (on the half of image)
slider.style.position = 'absolute';
slider.style.left = (overlayElem.getBoundingClientRect().x + (overlayElem.getBoundingClientRect().width / 2) - slider.getBoundingClientRect().width ) + 'px';
overlayElem.style.width = (overlayElem.getBoundingClientRect().x + (overlayElem.getBoundingClientRect().width / 2)) + 'px';
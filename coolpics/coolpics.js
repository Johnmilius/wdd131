let dropDownButton = document.querySelector('.dropdown-btn');
let dropDownMenu = document.querySelector('.nav-links-dropdown-menu');
dropDownButton.addEventListener('click', function(){
    dropDownMenu.classList.toggle('hide');
})

function handleResize(){
    const menu = document.querySelector('.nav-links-dropdown-menu')
    if (window.innerWidth > 1000) {
        dropDownMenu.classList.remove('hide');
    }
    else {
        dropDownMenu.classList.add('hide');
    }
}

handleResize();
window.addEventListener('resize', handleResize);

function viewerTemplate(pic, alt) {
    return `<div class="viewer">
      <button id="close-viewer">X</button>
      <img src="${pic}" alt="${alt}">
      </div>`;
}

function closeViewer(){
    let viewer = document.querySelector('.viewer'); 
    if (viewer){
        viewer.remove();
    }
}

function viewHandler(event) {

	// create a variable to hold the element that was clicked on from event.target
    let clickedElement = event.target;

	// get the src attribute from that element and 'split' it on the "-"
    let imgSrc = clickedElement.src;

	// construct the new image file name by adding "-full.jpeg" to the first part of the array from the previous step
    let imgParts = imgSrc.split('-');
    let newImgSrc = imgParts[0] + "-full.jpeg"; 

	// insert the viewerTemplate into the top of the body element
	// (element.insertAdjacentHTML("afterbegin", htmltoinsert))
    document.body.insertAdjacentHTML("afterbegin", viewerTemplate(newImgSrc, "Full-size image"));

	// add a listener to the close button (X) that calls a function called closeViewer when clicked
    let closeButton = document.getElementById('close-viewer');
    closeButton.addEventListener('click', closeViewer);
}

let images = document.querySelectorAll("main section img");
images.forEach(img => {
    img.addEventListener("click", viewHandler);
});
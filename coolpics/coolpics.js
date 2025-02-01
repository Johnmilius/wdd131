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
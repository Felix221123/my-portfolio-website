//getting the variables from the html tempalate

let listOfNavs = document.querySelector('#my-list-of-headers');
let anchorTagsElements = document.querySelectorAll('#my-list-of-headers li a');
let portFolio = document.querySelector('.profile-name')
let homeSection = document.querySelector('section#Home')
let closeBtn = document.querySelector('#close-tbn');
let navBar = document.querySelector('#navbar');
let listItems = document.querySelectorAll('#my-list-of-headers li')
let menuBar = document.querySelector('.fa-bars')

listOfNavs.addEventListener('click', function (e) {
    const target = e.target
    console.log(target + ' is clicked');

    if (target.matches('a')) {

        for (const anchortags of anchorTagsElements) {
            //we reset the color when they are not pressed
            anchortags.style.color = '';
        }
        target.style.color = '#0079FF'
        target.style.opacity = "0.75"
    }
});


portFolio.addEventListener('click', function (e) {
    //we set the portfolio in case where, its clicked
    //it gets scrolled into the home sectimn view, we use the scrollIntoView() method
    homeSection.scrollIntoView({behavior : 'smooth'})
    
})

//close button for menu to disappear
closeBtn.addEventListener('click', function () {
    navBar.style.animation = 'menu-close ease-in-out 0.5s';
    navBar.style.opacity = '0'
})

navBar.addEventListener('animationend', function (event) {
    if (event.animationName === 'menu-close') {
        // Reset animation and hide the menu container after closing animation ends
        navBar.style.animation = 'none';
        navBar.style.display = 'none';
        navBar.style.opacity = '1';
    }
});



menuBar.addEventListener('click', function () {
    navBar.style.animation = 'menu-open ease-in-out 0.5s'
    navBar.style.display = 'block';

})

listItems.forEach((element) => {
    element.addEventListener('click', function (e) {
        
        //this only applys for when the screen size is less than 768px
        if (window.innerWidth <= 768) {
            navBar.style.animation = 'menu-close ease-in-out 0.5s';
            navBar.style.opacity = '0'
        }
    })
})



// Event listener for window click to hide navbar
window.addEventListener('click', function (e) {
    if (!navBar.contains(e.target) && e.target !== menuBar && !menuBar.contains(e.target)) {
        navBar.style.display = 'none';
    }
});




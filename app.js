//getting the variables from the html tempalate

let listOfNavs = document.querySelector('#my-list-of-headers');
let anchorTagsElements = document.querySelectorAll('#my-list-of-headers li a');
let portFolio = document.querySelector('.profile-name')
let homeSection = document.querySelector('section#Home')
let siteBtn = document.querySelector('.site-button-style');
let codeBtn = document.querySelector('.code-button-style')


listOfNavs.addEventListener('click', function (e) {
    const target = e.target
    console.log(target + ' is clicked');

    if (target.matches('a')){

        for (const anchortags of anchorTagsElements) {
            //we reset the color when they are not pressed
            anchortags.style.color = ''; 
        }

        target.style.color = 'white'
    }
      
})


portFolio.addEventListener('click', function (e) {
    //we set the portfolio in case where, its clicked
    //it gets scrolled into the home sectimn view, we use the scrollIntoView() method
    homeSection.scrollIntoView({behavior : 'smooth'})
    
})



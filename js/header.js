burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.navlist')



burger.addEventListener('click',()=>{

    
    navbar.classList.toggle('h-nav');
    navList.classList.toggle('v-class');

});

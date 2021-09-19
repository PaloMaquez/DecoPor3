const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector ('.nav-links');
    const navLinks = document.querySelectorAll ('.nav-links li');
    //Toggle Nav
    burger.addEventListener('click' , () => 
    {
        nav.classList.toggle('nav-active');

    //Animtate Links
    navLinks.forEach((link,index) => 
    {
            if(link.style.animation)
            {
                link.style.animation = '';
            }else
            {
                link.style.animation = `navLinksFade 0.5s ease forwards ${index / 7 + 1.5}s`;
            }
        })
        //Burger Animation
        burger.classList.toggle ('toggle');
    })
}
navSlide ();



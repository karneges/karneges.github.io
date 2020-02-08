// let btn = document.querySelectorAll('button')
// let deg = 150

// setInterval(()=>{
//     btn.forEach((i)=>{
//         i.style.transform = `rotate(${deg}deg)`
//     })
//     // btn.style.transform = `rotate(${deg}deg)`
//     deg+=1

// },1)

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu'),
    menuItem = document.querySelectorAll('.menu_item'),
    hamburger = document.querySelector('.hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('hamburger_active');
        menu.classList.toggle('menu_active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('hamburger_active');
            menu.classList.toggle('menu_active');
        })
    })
})
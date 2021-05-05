let btn = document.querySelector('#menu-btn')
let menu = document.getElementById('menu')

btn.addEventListener('click',()=> {
    btn.classList.toggle('close')
    if (menu.className === 'nav__links') {
        menu.className += ' show'
    }
    else {
        menu.className= 'nav__links'
    }

    console.log('ok')
})


// window.addEventListener('scroll', () => {
//     // var x = document.getElementById("menu");
//     btn.classList.remove('close');
//     if (document.body.scrollTop > 70 || document.documentElement.scrollTop > 70) {
        
//         if (menu.className === "nav__links show") {
//             menu.className += " ";
//         } else {
//             menu.className = "nav__links ";
//         }
//     }
// })
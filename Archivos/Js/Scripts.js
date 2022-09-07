// Inicializa el AOS //
AOS.init();

let menu = document.getElementById('menu')

let menu_bar = document.getElementById('menu-bar')

menu_bar.addEventListener('click', function () {

    menu.classList.toggle('menu-toggle')

})

// Ir arriba botón //

window.onscroll = function(){
    if(document.documentElement.scrollTop > 100) {
        document.querySelector('.go-top-container')
        .classList.add('show')
    }else{
        document.querySelector('.go-top-container')
        .classList.remove('show')  
    }
}

document.querySelector('.go-top-container').addEventListener('click', () =>{
    window.scrollTo({
        top: 0,
        behavior:'smooth'
    });
});
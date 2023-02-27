const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(event){
    if (event.type === "touchstart") event.preventDefault();
    const nav = document.getElementById('nav');
    nav.classList.toggle("active")
    const active = nav.classList.contains('active')
    event.currentTarget.setAttribute('aria-expand', active);
    if(active){
        event.currentTarget.setAttribute('arial-label', 'Fechar menu');
    } else {
        event.currentTarget.setAttribute('arial-label', 'Abrir menu');
    }
}
btnMobile.addEventListener('click', toggleMenu);
btnMobile.addEventListener('click', toggleMenu);
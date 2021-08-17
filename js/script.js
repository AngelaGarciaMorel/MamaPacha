const cargaWeb = document.querySelector('.carga_web')
const contenido = document.querySelector('#contenido')
const body = document.querySelector('body')
let objetoAnimado = document.querySelectorAll('.animado')

setTimeout(inicio, 4000);

function inicio(){
    cargaWeb.classList.add('d-none')
    contenido.classList.remove('d-none')
    body.classList.add('bkg-imagen')
}

function scrollAlto(){
    let scrollTop = document.documentElement.scrollTop;
    for ( let i = 0; i < objetoAnimado.length; i++){
        let alturaObjeto = objetoAnimado[i].offsetTop;
        console.log(scrollTop)
        if(alturaObjeto - 500 < scrollTop){
            objetoAnimado[i].style.opacity = 1;
            objetoAnimado[i].classList.add('hacia-arriba')
        }
    }
}
window.addEventListener('scroll', scrollAlto);
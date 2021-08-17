const cargaWeb = document.querySelector('.carga_web')
const contenido = document.querySelector('#contenido')
const body = document.querySelector('body')
let objetoAnimado = document.querySelectorAll('.animado')
const objetoAnimado2 = document.querySelector('.animado-2')
const objetoAnimado3 = document.querySelector('.animado-3')
let botonesAnimados = document.querySelectorAll('.boton-animado')



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
        if(alturaObjeto - 500 < scrollTop){
            objetoAnimado[i].style.opacity = 1;
            objetoAnimado[i].classList.add('hacia-arriba')
        }
    }
}
function scrollAlto2(){
    let alturaObjeto2 = objetoAnimado2.offsetTop
    let scrollTop = document.documentElement.scrollTop;
    if(alturaObjeto2 - 500 < scrollTop){
        objetoAnimado2.style.opacity = 1;
        objetoAnimado2.classList.add('izquierda-derecha')
    }
}
function scrollAlto3(){
    let alturaObjeto3 = objetoAnimado3.offsetTop
    let scrollTop = document.documentElement.scrollTop;
    if(alturaObjeto3 - 500  < scrollTop){
        objetoAnimado3.style.opacity = 1;
        objetoAnimado3.classList.add('derecha-izquierda')
    }
}
function scrollAlto4(){
    let scrollTop = document.documentElement.scrollTop;
    for ( let i = 0; i < botonesAnimados.length; i++){
        let alturaObjeto = botonesAnimados[i].offsetTop;
        if(alturaObjeto - 800 < scrollTop){
            botonesAnimados[i].style.opacity = 1;
            botonesAnimados[i].classList.add('escala')
        }
    }
}
window.addEventListener('scroll', scrollAlto);
window.addEventListener('scroll', scrollAlto2);
window.addEventListener('scroll', scrollAlto3);
window.addEventListener('scroll', scrollAlto4);
const cargaWeb = document.querySelector('.carga_web')
const contenido = document.querySelector('#contenido')
const body = document.querySelector('body')

setTimeout(inicio, 4000);

function inicio(){
    cargaWeb.classList.add('d-none')
    contenido.classList.remove('d-none')
    body.classList.add('bkg-imagen')
}

const dado = document.getElementById('valor');
const botton = document.getElementById('botton');

const lanzarDado = (min, max) => min + Math.floor(Math.random() * max);
const colores = ['red', 'blue', 'yellow' ,'green', 'white', 'brown'];

/* const lanzar = () => dado.innerHTML = lanzarDado(1, 6); */
function lanzar(){
  let numero = lanzarDado(1, 6);
  dado.innerHTML = numero;
  pepito(numero);
}
function pepito(numero){
  dado.style.backgroundColor = colores[numero -1];
}

botton.addEventListener('click', lanzar);




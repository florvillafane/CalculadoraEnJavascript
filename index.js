//Defino las variables que voy a trabajar

const displayValorAnterior = document.getElementById('valor_anterior');
const displayValorActual = document.getElementById('valor_actual');
const botonesNum = document.querySelectorAll('.numero');
const botonesOp = document.querySelectorAll('.operador');

//llamamos a display y le pasamos los valores para que ejecute
const display = new Display(displayValorAnterior,displayValorActual);

//botonesNum son los numeros de la calculadora, por cada numero que se toque
//se genera una iteracion dando la funcion click y dando el valor a la funcion agregarNum
botonesNum.forEach(boton=>{
    boton.addEventListener('click', ()=>display.agregarNum(boton.innerHTML));
});


botonesOp.forEach(boton => {
    boton.addEventListener('click', ()=> display.computar(boton.value))
});
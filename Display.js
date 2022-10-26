//acciones de la calculadora
class Display{
    constructor(displayValorAnterior,displayValorActual){
        this.displayValorActual = displayValorActual;
        this.displayValorAnterior = displayValorAnterior;
        this.calculador = new Calculadora();
        this.tipoOperacion = undefined;
        this.valorActual = '';
        this.valorAnterior = '';
        this.signos = {
            suma:'+',
            resta:'-',
            divide:'%',
            multiplica:'X',
        }

    }
    //borra solo de a un valor
    borrar(){
        this.valorActual = this.valorActual.toString().slice(0,-1);//slice elimina el ultimo valor del string
        this.mostrarValor();
    }
    //borra completo los valores, anterior y actual
    borrarTodo(){
        this.valorActual = '';
        this.valorAnterior = '';
        this.tipoOperacion = undefined;
        this.mostrarValor();
    }

    computar(tipo){
        this.tipoOperacion !== 'igual' && this.calcular();
        this.tipoOperacion = tipo;
        this.valorAnterior = this.valorActual || this.valorAnterior;
        this.valorActual ='';
        this.mostrarValor();
    }

    //recibe un valor y lo guarda en la variable valor actual y luego llama a la funcion mostrar
    agregarNum(numero){
        if(numero === '.' && this.valorActual.includes('.')){
            return
        }
        this.valorActual = this.valorActual.toString() + numero.toString(); //se va sumando para mostrar como string uno al lado de otro
        this.mostrarValor();
        
    }
    //toma el valor de html y lo ingresa al valor actual/anterior
    mostrarValor(){
        this.displayValorActual.textContent = this.valorActual;
        this.displayValorAnterior.textContent = `${this.valorAnterior} ${this.signos[this.tipoOperacion] || ''}`;
    }
    
    //tomar valores del display y enviarlo a calculadora para que calcule los valores
    calcular(){
     const valorAnterior = parseFloat(this.valorAnterior);//parseFloat analiza un argumento (si es necesario, lo convierte en una cadena) y devuelve un número de coma flotante.
     const valorActual = parseFloat(this.valorActual);

     if( isNaN(valorActual) || isNaN(valorAnterior)){//isNan funcion que indica si es not number
        return
     }
     this.valorActual = this.calculador[this.tipoOperacion](valorAnterior, valorActual);
    }
    
    
}
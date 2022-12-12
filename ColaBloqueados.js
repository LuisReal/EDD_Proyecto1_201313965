class NodoCola{
    constructor(valor){
        this.valor = valor;
        this.siguiente = null;
    }
}

class Cola{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(nuevoNodo){
        
        if(this.primero.valor == null){
            this.primero = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
        else if (this.primero.siguiente == null){
            this.primero.siguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
        else{
            this.ultimo.siguiente = nuevoNodo;
            this.ultimo = nuevoNodo;
        }
    }
}
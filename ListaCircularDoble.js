/*
class Cancion{
    constructor(artist, name, duration, gender){
        this.artist = artist;
        this.name = name;
        this.duration = duration;
        this.gender = gender;
    }
}*/


class NodoCircular{
    constructor(cancion){
        this.cancion = cancion;
        this.siguente = null;
        this.anterior = null;
    }
}

class ListaCircularDoble{
    constructor(){
        this.primero = null;
        this.ultimo = null;

    }
    insertar(cancion){
        var nuevo_nodo = new NodoCircular(cancion);
        
        if(this.primero == NULL){
        
            this.primero = this.ultimo = nuevo_nodo;
        }
        else{
            var aux = nuevo_nodo;
            aux.siguiente = primero;
            this.primero.anterior = aux;
            this.primero = aux;
        }

        this.primero.anterior = this.ultimo;
        this.ultimo.siguiente = this.primero;
        
    }
}
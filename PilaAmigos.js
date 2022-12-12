class Usuario{
    constructor(dpi, name, username, password, phone, admin){
        this.dpi = dpi;
        this.name = name;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.admin = admin;
    }
}

class NodoPila{
    constructor(amigo){
        this.amigo = amigo;
        this.siguiente=null;
        this.anterior = null;
    }

}

class Pila{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    apilar(nuevoNodo){
        var new_nodo = new NodoPila(nuevoNodo);
        if(this.primero.amigo == null){
            this.primero = new_nodo;
            this.ultimo = new_nodo;
        }
        else if(this.primero.siguiente == null){
            this.primero.siguiente = new_nodo;
            this.ultimo = new_nodo;
        }
        else{
            this.ultimo.siguiente = new_nodo;
            this.ultimo = new_nodo;
        }
    }

    desapilar(){
        
        if(this.primero.siguiente == null){
            this.primero = null;
        }
        else{
            var nodoaux = this.primero;
            var nodoPenultimo = nodoaux;
            
            while(nodoaux.siguiente != null){
                nodoPenultimo = nodoaux;
                nodoaux = nodoaux.siguiente;
            }
            this.ultimo = nodoPenultimo;
            nodoPenultimo.siguiente = null;
        }
    }

    recorrerPila(){
        var nodoAux = this.primero;
        
        var cadena = '';
        while(True){
            if(nodoAux != null){
                cadena += '(' + nodoAux.amigo.name + ') -> ';
                if(nodoAux.siguiente != null){
                    nodoAux = nodoAux.siguiente;
                }
                else{
                    break;
                }
            }
            else{
                break;
            }
        }
        console.log(cadena);
    }
        
}
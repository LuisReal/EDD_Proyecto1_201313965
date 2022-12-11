class NodoEncabezado{
    constructor(id){
        this.id = id; // id = nodoinerno.x   , x = fila
        this.siguiente = null;
        this.anterior = null;
        this.acceso = null;  //APUNTADOR A NODOS INTERNOS
    }
}

class ListaEncabezado{
    constructor(tipo){
        this.tipo = tipo;
        this.primero = null;
        this.ultimo = null;
        this.size = 0;
    }

    insertarEncabezado(nuevo){
        this.size += 1;

        if(this.primero == null){
            this.primero = nuevo;
            this.ultimo = nuevo;
        }
        else{

            //INSERTAR EN ORDEN (IMPORTANTE)
            if(nuevo.id < this.primero.id){
                nuevo.siguiente = this.primero;
                this.primero.anterior = nuevo;
                this.primero = nuevo;
            }
            else if(nuevo.id > this.ultimo.id){
                this.ultimo.siguiente = nuevo;
                nuevo.anterior = this.ultimo;
                this.ultimo = nuevo;
            }
            else{
                var aux = this.primero;

                while(aux != null){
                    if(nuevo.id < aux.id){
                        nuevo.siguiente = aux;
                        nuevo.anterior = aux.anterior;
                        aux.anterior.siguiente = nuevo;
                        aux.anterior = nuevo;
                        break;
                    }
                    else if(nuevo.id > aux.id){
                        aux = aux.siguiente;
                    }
                    else{
                        break;
                    }
                }
            }
        }
    }

    mostrarEncabezado(){
        var aux = self.primero;
        while(aux != null){
            console.log("Encabezado ", this.tipo, aux.id)
            aux = aux.siguiente;
        }
    }
    
    getEncabezado(id){
        aux = this.primero;
        while(aux != null){
            if(id == aux.id){
                return aux;
            }
            
            aux = aux.siguiente;
        }
        return null;
    }
}
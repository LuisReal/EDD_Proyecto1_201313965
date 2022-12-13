/*class Usuario{
    constructor(dpi, name, username, password, phone, admin){
        this.dpi = dpi;
        this.name = name;
        this.username = username;
        this.password = password;
        this.phone = phone;
        this.admin = admin;
    }
}*/

class NodoCola{
    constructor(usuario){
        this.usuario = usuario;
        this.siguiente = null;
    }
}

class Cola{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(nuevoNodo){
        var new_nodo = new NodoCola(nuevoNodo);
        if(this.primero == null){
            this.primero = new_nodo;
            this.ultimo = new_nodo;
        }
        else if (this.primero.siguiente == null){
            this.primero.siguiente = new_nodo;
            this.ultimo = new_nodo;
        }
        else{
            this.ultimo.siguiente = new_nodo;
            this.ultimo = new_nodo;
        }
    }

    desencolar(){
        var aux = this.primero;

        if(aux != null){
            var nodo = this.primero;
            this.primero = aux.siguiente;
            nodo = null;

        }
        else{
            console.log("La cola esta vacia");
        }
    }
    
    recorrerCola(){
        var nodoAux = this.primero;
        
        var cadena = '';
        while(true){
            if(nodoAux != null){
                cadena += "( name: " + nodoAux.usuario.name + ") -> ";
                if(nodoAux.siguiente != null){
                    nodoAux = nodoAux.siguiente;
                }
                else{
                    break;
                }
            }
            else{
                console.log("No hay mas elementos en la cola");
                break;
            }
        }
        console.log(cadena);
    }
}

/*dpi, name, username, password, phone, admin*/
/*
var cola = new Cola();

cola.insertar(new Usuario(2418456782101, "LuisReal","luis526",123,57594210, false));
cola.insertar(new Usuario(555164870132, "karla", "karla123",124, 544567891, false));
cola.insertar(new Usuario(487135791000, "chelsea", "chelsea123",125, 487956511, false));

cola.recorrerCola();
cola.desencolar();
cola.recorrerCola();*/
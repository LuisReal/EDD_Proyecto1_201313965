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

class NodoLista{
    constructor(usuario){
        this.usuario = usuario;
        this.siguiente = null;
    }

    
}

class Lista{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertar(nodo_usuario){
        var new_nodo = new NodoLista(nodo_usuario);
        if(this.primero == null){
            this.primero = new_nodo;
            this.ultimo = new_nodo;
        }else{
            this.ultimo.siguiente = new_nodo;
            this.ultimo = new_nodo;
        }
    }

    print(){
        var temp = this.primero;
        console.log("imprimiendo lista de usuarios")
        while(temp != null){
            console.log("nombre: "+temp.usuario.name, " dpi: "+temp.usuario.dpi);
            temp = temp.siguiente;
        }
    }
}

/*
var lista = new Lista();

lista.insertar(new Usuario("241597864321", "luis", "luis123",123, 78812219, false));
lista.insertar(new Usuario("555164870132", "karla", "karla123",124, 4567891, false));
lista.insertar(new Usuario("487135791000", "chelsea", "chelsea123",125, 487956511, false));
lista.print();*/
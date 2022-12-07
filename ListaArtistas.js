//LISTA DE LISTAS 

class Artista{
    constructor(name, age, country){
        this.name = name;
        this.age = age;
        this.country = country;

    }
}

class Cancion{
    constructor(artist, name, duration, gender){
        this.artist = artist;
        this.name = name;
        this.duration = duration;
        this.gender = gender;
    }
}

class NodoArtista{
    constructor(artista){
        this.artista = artista;
        this.acceso = null;
        this.abajo = null;
    }
}

class NodoCancion{
    constructor(cancion){
        this.cancion = cancion;
        this.head = null;
        this.siguiente = null;

    }
}

class ListaArtista{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertarArtista(artista){
        var nuevo_nodo = new NodoArtista(artista);
        if(this.primero == null){
            this.primero = nuevo_nodo;
            this.ultimo = nuevo_nodo;
        }else{
            this.ultimo.abajo = nuevo_nodo;
            this.ultimo = nuevo_nodo;
        }

    }

    getEncabezado(artista){
        var aux = this.primero;
        while(aux != null){
            if(artista == aux.artista.name ){
                return aux;
            }
            aux = aux.abajo;
        }
        return null;
    }

    printLista(){
        var temp = this.primero;
        while(temp != null){
            console.log(temp.artista.name);
            temp = temp.abajo;
        } 
    }

    mostrarTodo(){
        var temp1 = this.primero;
        var lista = "";

        while(temp1 != null){
            lista += "artista: "+temp1.artista.name+"->";
            
            if(temp1.acceso != null){
                var temp2 = temp1.acceso;
                while(temp2 != null){
                    
                    lista +="artista: "+temp2.cancion.artist+" cancion: "+temp2.cancion.name+"->";
                    temp2 = temp2.siguiente;
                }
            }
           
            
            temp1 = temp1.abajo;
            console.log(lista);
            lista = "";
        }
        
    }
}

class ListaCancion{
    constructor(){
        this.primero = null;
        this.ultimo = null;
    }

    insertarCancion(cancion){
        var nuevo_nodo = new NodoCancion(cancion);
        if(this.primero == null){
            this.primero = nuevo_nodo;
            this.ultimo = nuevo_nodo;
        }else{
            this.ultimo.siguiente = nuevo_nodo;
            this.ultimo = nuevo_nodo;
        }

    }

    print(){
        var temp = this.primero;
        while(temp != null){
            console.log(temp.cancion.name);
            temp = temp.siguiente;
        }
    }
}

var lista_artista = new ListaArtista();
lista_artista.insertarArtista(new Artista("Boy George", 30, "England"));
lista_artista.insertarArtista(new Artista("Armin Van Buuren", 29, "Holanda"));
lista_artista.insertarArtista(new Artista("Ricardo Arjona", 45, "Guatemala"));


var lista_cancion = new ListaCancion();
//artist, name, duration, gender
//lista_cancion.insertarCancion(new Cancion("Ricardo Arjona", "Mujeres", 5, "pop"));


var artista = "Ricardo Arjona";

var encabezado =lista_artista.getEncabezado(artista);

if(encabezado == null){
    console.log("No existe el artista");
}else{
    if(encabezado.acceso == null){
        
        lista_cancion.insertarCancion(new Cancion("Ricardo Arjona", "Mujeres", 5, "pop"));
        encabezado.acceso = lista_cancion.primero;
        
    }else{
        console.log("insertando cancion seguidas")
        lista_cancion.insertarCancion(new Cancion("Ricardo Arjona", "Mujeres", 5, "pop"));
    }
    

}

lista_artista.mostrarTodo();

/*
lista_cancion.insertarCancion(new Cancion("Ricardo Arjona", "Fuiste tu", 3, "pop"));
lista_cancion.insertarCancion(new Cancion("Boy George", "chamaleon", 3, "romantica"));
lista_cancion.insertarCancion(new Cancion("Boy George", "Do you really want to hurt me", 3, "romantica"));
lista_cancion.insertarCancion(new Cancion("Armin Van Buuren", "sail", 4, "electronica"));
lista_cancion.insertarCancion(new Cancion("Armin Van Buuren", "in and out of love", 3, "electronica"));
lista_cancion.insertarCancion(new Cancion("Armin Van Buuren", "Blah Blah Blah", 4, "electronica"));*/



//************************************LISTA DE USUARIOS*************************************

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
////dpi, name, username, password, phone, admin
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

    buscar(username, password){
        var temp = this.primero;

        while(temp != null){
            if(temp.usuario.username == username && temp.usuario.password == password){
                return temp; // encuentra el usuario
            }
            temp = temp.siguiente;
        }

        return null; // no encuentra el usuario
    }

    getUsuario(usuario){
        var temp = this.primero;

        while(temp != null){
            if(temp.usuario.name == usuario){
                return temp; // encuentra el usuario
            }
            temp = temp.siguiente;
        }

        return null; // no encuentra el usuario
    }

    print(){
        var temp = this.primero;
        console.log("imprimiendo lista de usuarios")
        while(temp != null){
            console.log("nombre: "+temp.usuario.name, " dpi: "+temp.usuario.dpi);
            temp = temp.siguiente;
        }
    }

    graficar(){
        var codigodot = "digraph G{\nlabel=\" Lista Simple \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.primero;
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
    
        // grafo += '{rank=same;root;'
        while (temporal != null) {
            
            nodos+=  "N"+numnodo + "[label=\"" + temporal.usuario.name + "\"];\n";
            
            temporal = temporal.siguiente;
            numnodo++;  
                      
        }
        

        temporal = this.primero;
        numnodo = 0;
        while (temporal != null) {
            
            if(temporal.siguiente != null){
                conexiones += "N"+numnodo+ " -> N" +(numnodo+1)+ ";\n";
            }
            
            numnodo++; 
            temporal = temporal.siguiente;

        }
       

        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(300)
            .renderDot(codigodot)
    }
}

//************************************LISTA DE LISTAS (ARTISTAS Y CANCIONES)*************************************

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
        this.lista_canciones = new ListaCancion();
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
            
            if(temp1.lista_canciones.primero != null){
                var temp2 = temp1.lista_canciones.primero;
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

    ascendenteBubbleSort(){
        var aux2 = this.primero;

        while(aux2 !=null){
            var aux1 = aux2.abajo;
            while(aux1 != null){
                if(aux1.artista.name < aux2.artista.name){
                    var temp = aux2.artista.name;

                    aux2.artista.name = aux1.artista.name;
                    aux1.artista.name = temp;

                    aux2.siguiente = aux1.siguiente;
                    aux1.siguiente = aux2.siguiente;

                    
                }
                aux1 = aux1.abajo;
            }
            aux2 = aux2.abajo;
        }   
    }

    descendente(){
        console.log("descendente")
    }

    graficar(){
        var codigodot = "digraph G{\nlabel=\" Lista de Listas \";\nnode [shape=box];\n";
        var temp1 = this.primero;
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
        var contador2 = 0;
        // grafo += '{rank=same;root;'
        while (temp1 != null) {
            
            nodos+=  "NE"+numnodo + "[label=\"" + temp1.artista.name + "\", group=\""+numnodo+"\"];\n";
            
            if(temp1.lista_canciones.primero != null){
                var temp2 = temp1.lista_canciones.primero;
                
                while(temp2 != null){
                    nodos+=  "NL"+numnodo+""+contador2 + "[label=\"" + temp2.cancion.name + "\", group=\""+numnodo+"\" ];\n";
                    contador2 += 1;
                    temp2 = temp2.siguiente;
                }
                
                contador2 = 0;
            }
            numnodo += 1;
            temp1 = temp1.abajo;  
              
        }

        var tempo = this.primero;
        numnodo = 0;
        nodos += "{rank=same;";
        while(tempo != null){
            nodos += "NE"+numnodo+";";
            numnodo += 1;
            tempo = tempo.abajo;
        }
        nodos+= "}\n";

        temp1 = this.primero;
        numnodo = 0;
        contador2 = 0;
        var auxnum2 = 0;

        while (temp1 != null) {
            
            if(temp1.abajo != null){
                conexiones += "NE"+numnodo+ " -> NE" +(numnodo+1)+ ";\n";
            }
            
            
            if(temp1.lista_canciones.primero != null){
                var temp2 = temp1.lista_canciones.primero;
                
                conexiones += "NE"+numnodo+ " -> NL" +numnodo+""+auxnum2+ ";\n";
                
                while(temp2 != null){
                    if(temp2.siguiente != null){
                        conexiones += "NL"+numnodo+""+auxnum2+ " -> NL" +numnodo+""+(auxnum2+1)+ ";\n";
                    }
                    
                    auxnum2 += 1;
                    temp2 = temp2.siguiente;
                }
                auxnum2 = 0;
            }
            numnodo += 1;
            
            temp1 = temp1.abajo;

        }
       

        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzo-artistas").graphviz()
            .width(900)
            .height(300)
            .renderDot(codigodot)
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


//************************************(MATRIZ DISPERZA)*************************************

class NodoEncabezado{
    constructor(id, mes){
        this.mes = mes;
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
            if(nuevo.id < this.primero.id){ // id = x (fila)
                nuevo.siguiente = this.primero;
                this.primero.anterior = nuevo;
                this.primero = nuevo;
            }
            else if(nuevo.id > this.ultimo.id){ // id = x (fila)
                this.ultimo.siguiente = nuevo;
                nuevo.anterior = this.ultimo;
                this.ultimo = nuevo;
            }
            else{
                var aux = this.primero;

                while(aux != null){
                    if(nuevo.id < aux.id){ // id = x (fila)
                        nuevo.siguiente = aux;
                        nuevo.anterior = aux.anterior;
                        aux.anterior.siguiente = nuevo;
                        aux.anterior = nuevo;
                        break;
                    }
                    else if(nuevo.id > aux.id){ // id = x (fila)
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
        var aux = this.primero;
        while(aux != null){
            if(id == aux.id){
                return aux;
            }
            
            aux = aux.siguiente;
        }
        return null;
    }
}



class NodoInterno{
    constructor(x , y, valor, mes ){ // valor = new Cancion (artist, name, duration, gender)
        this.valor = valor; // contiene un objeto cancion
        this.mes = mes; // contiene el mes en letras
        this.x = x;
        this.y = y;
        this.arriba = null;
        this.abajo = null;
        this.derecha = null;
        this.izquierda = null;
    }

}
class Matriz{
    constructor(capa){
        this.capa = capa;
        this.filas = new ListaEncabezado("LISTAS");
        this.columnas = new ListaEncabezado("COLUMNAS");
    }

    insertar(nodoInterno){
        // x = mes     y= dia
        var encabezadoX = this.filas.getEncabezado(nodoInterno.x);
        var encabezadoY = this.columnas.getEncabezado(nodoInterno.y);

        if(encabezadoX == null){
            encabezadoX = new NodoEncabezado(nodoInterno.x, nodoInterno.mes);
            this.filas.insertarEncabezado(encabezadoX);
        }
        if(encabezadoY == null){
            encabezadoY = new NodoEncabezado(nodoInterno.y, nodoInterno.mes);
            this.columnas.insertarEncabezado(encabezadoY);
        }
        // x = mes     y= dia
        if(encabezadoX.acceso == null){
            encabezadoX.acceso = nodoInterno;
        }
        else{
            //INSERTAR NODO INTERNO EN FILA
            if(nodoInterno.y < encabezadoX.acceso.y){
                nodoInterno.derecha = encabezadoX.acceso;
                encabezadoX.acceso.izquierda = nodoInterno;
                encabezadoX.acceso = nodoInterno;
            }
            else{// x = mes     y= dia
                var aux = encabezadoX.acceso;
                while(aux != null){
                    if(nodoInterno.y < aux.y){
                        nodoInterno.derecha = aux;
                        nodoInterno.izquierda = aux.izquierda;
                        aux.izquierda.derecha = nodoInterno;
                        aux.izquierda = nodoInterno;
                        break;
                    }
                    else{
                        if(aux.derecha == null){
                            aux.derecha = nodoInterno;
                            nodoInterno.izquierda = aux;
                            break;
                        }
                        else{
                            aux = aux.derecha;
                        }
                    }
                }
            }    

        }
        // x = mes     y= dia
        if(encabezadoY.acceso == null){
            encabezadoY.acceso = nodoInterno;
        }
        else{
             //INSERTAR NODO INTERNO EN COLUMNA
            if(nodoInterno.x < encabezadoY.acceso.x){
                nodoInterno.abajo = encabezadoY.acceso;
                encabezadoY.acceso.arriba = nodoInterno;
                encabezadoY.acceso = nodoInterno;
            }
            else{// x = mes     y= dia
                var aux2 = encabezadoY.acceso;
                while(aux2 != null){
                    if(nodoInterno.x < aux2.x){
                        nodoInterno.abajo = aux2;
                        nodoInterno.arriba = aux2.arriba;
                        aux2.arriba.abajo = nodoInterno;
                        aux2.arriba = nodoInterno;
                        break;
                    }
                    else{
                        if(aux2.abajo == null){
                            aux2.abajo = nodoInterno;
                            nodoInterno.arriba = aux2;
                            break;
                        }
                        else{
                            aux2 = aux2.abajo;
                        }
                    }    
                }
            }
        }
    }

    getNodo(mes, dia){// x = mes     y= dia
        var aux = this.filas.primero;
        var aux2 = aux.acceso;
        while(aux != null){
            
            while(aux2.x != mes  || aux2.y != dia){
                if(aux2.derecha != null){
                    aux2 = aux2.derecha;
                }
                else{
                    break;
                }
            }
            if(aux2.x == mes && aux2.y == dia){
                return aux2;
            }
            else{     
                var aux = aux.siguiente;
                if(aux != null){
                    aux2 = aux.acceso;
                }
            }
                    
        }
    }

    graficar(){
        var grafo = "digraph T{ \nnode[shape=box fontname=\"Arial\" fillcolor=\"white\" style=filled ]";
        grafo += "\nroot[label = \""+ this.capa +"\", group=1]\n";
        grafo += "label = \"MATRIZ DISPERZA\" \nfontname=\"Arial Black\" \nfontsize=\"15pt\" \n\n";

        // --- lo siguiente es escribir los nodos encabezados, empezamos con las filas, los nodos tendran el foramto Fn
        var x_fila = this.filas.primero
        while(x_fila != null){
            grafo += "F"+x_fila.id+"[label=\""+x_fila.mes+"\",fillcolor=\"plum\",group=1];\n";
            x_fila = x_fila.siguiente;
        }
        // --- apuntamos los nodos F entre ellos
        var x_fila = this.filas.primero;
        while (x_fila != null){
            if (x_fila.siguiente != null){
                grafo += "F"+x_fila.id+"->F"+x_fila.siguiente.id+";\n";
                grafo += "F"+x_fila.siguiente.id+"->F"+x_fila.id+";\n";
            }
            x_fila = x_fila.siguiente;
        }
        // --- Luego de los nodos encabezados fila, seguimos con las columnas, los nodos tendran el foramto Cn
        var y_columna = this.columnas.primero;
        while(y_columna != null){
            var group = y_columna.id+1 ;
            grafo += "C"+y_columna.id+"[label=\"C"+y_columna.id+"\",fillcolor=\"powderblue\",group="+group+"];\n";
            y_columna = y_columna.siguiente
        }
        // --- apuntamos los nodos C entre ellos
        var cont = 0
        y_columna = this.columnas.primero;
        while(y_columna != null){
            if(y_columna.siguiente != null){
                grafo += "C"+y_columna.id+"->C"+y_columna.siguiente.id+"\n";
                grafo += "C"+y_columna.siguiente.id+"->C"+y_columna.id+"\n";
            }
            cont += 1;
            y_columna = y_columna.siguiente;
        }
        // --- luego que hemos escrito todos los nodos encabezado, apuntamos el nodo root hacua ellos 
        
        y_columna = this.columnas.primero;
        x_fila = this.filas.primero ;
        grafo += "root->F"+x_fila.id+";\n root->C"+y_columna.id+";\n";
        
        grafo += "{rank=same;root;";
        cont = 0;

        y_columna = this.columnas.primero;
        while(y_columna != null){
            grafo += "C"+y_columna.id+";";
            cont += 1;
            y_columna = y_columna.siguiente;
        }
        grafo += '}\n';
        
        var aux = this.filas.primero;
        var aux2 = aux.acceso;
        cont = 0;
        while(aux != null){
            cont += 1;
            while(aux2 != null){
                
                grafo += "N"+aux2.x+"_"+aux2.y+"[label=\""+aux2.valor.name+"\",group="+(aux2.y+1)+", fontcolor=\"white\", fillcolor=\"green\"];\n"
                //grafo += 'N{}_{}[label="{}",group="{}", fillcolor="dodgerblue"];\n'.format(aux2.x, aux2.y, aux2.caracter, int(aux2.y)+1)
                
                aux2 = aux2.derecha;
            }
            aux = aux.siguiente;
            if(aux != null){
                aux2 = aux.acceso;
            }
        }

        aux = this.filas.primero;
        aux2 = aux.acceso;
        cont = 0;
        while(aux != null){
            var rank = "{rank = same;F"+aux.id+";";
            cont = 0;
            while(aux2 != null){
                if(cont == 0){
                    grafo += "F"+aux.id+"->N"+aux2.x+"_"+aux2.y+";\n";
                    grafo += "N"+aux2.x+"_"+aux2.y+"->F"+aux.id+";\n";
                    cont += 1;
                }
                /*
                if aux2.derecha != None:
                    grafo += 'N{}_{}->N{}_{};\n'.format(aux2.x, aux2.y, aux2.derecha.x, aux2.derecha.y)
                    grafo += 'N{}_{}->N{}_{};\n'.format(aux2.derecha.x, aux2.derecha.y, aux2.x, aux2.y)
                */
                rank += "N"+aux2.x+"_"+aux2.y+";";
                aux2 = aux2.derecha;
            }
            aux = aux.siguiente;
            if(aux != null){
                aux2 = aux.acceso;
            }
            grafo += rank+'}\n';
        }

        aux = this.columnas.primero;
        aux2 = aux.acceso;
        cont = 0;
        while(aux != null){
            cont = 0;
            grafo += '';
            while(aux2 != null){
                if(cont == 0){
                    grafo += "C"+aux.id+"->N"+aux2.x+"_"+aux2.y+";\n";
                    grafo += "N"+aux2.x+"_"+aux2.y+"->C"+aux.id+";\n";
                    cont += 1;
                }
                /*
                if aux2.abajo != None:
                    grafo += 'N{}_{}->N{}_{};\n'.format(aux2.abajo.x, aux2.abajo.y, aux2.x, aux2.y)
                    grafo += 'N{}_{}->N{}_{};\n'.format( aux2.x, aux2.y,aux2.abajo.x, aux2.abajo.y)
                */
                aux2 = aux2.abajo;
            }
            aux = aux.siguiente;

            if(aux != null){
                aux2 = aux.acceso;
            }
        }
        grafo += '}';

        grafo += "//agregando nodos\n";
        
        grafo += "//agregando conexiones o flechas\n";
        
        console.log(grafo)
        d3.select("#lienzo-matriz").graphviz()
            .width(900)
            .height(300)
            .renderDot(grafo)
    }
    
}


//************************************(LISTA CIRCULAR DOBLE (PLAYLIST))*************************************

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
        this.siguiente = null;
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
        
        if(this.primero == null){
        
            this.primero = this.ultimo = nuevo_nodo;
        }
        else{
            var aux = nuevo_nodo;
            aux.siguiente = this.primero;
            this.primero.anterior = aux;
            this.primero = aux;
        }

        this.primero.anterior = this.ultimo;
        this.ultimo.siguiente = this.primero;
        
    }

    mostrarLista(){
        var temp = this.primero;
        while(temp != null){
            console.log("artista: "+temp.cancion.artist+" cancion: "+temp.cancion.name);
            
            temp = temp.siguiente;
            if(temp == this.primero){
                break;
            }
        }
    }

    getCancion(cancion){
        var temp = this.primero;
        
        while(temp != null){
            if(temp.cancion.name == cancion){
                return temp;
            }
            
            temp = temp.siguiente;
            if(temp == this.primero){
                break;
            }
        }

        return null; // si no existe la cancion
    }

    graficar(){
        var codigodot = "digraph G{\nlabel=\" Lista Circular Doble \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.primero;
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
    
        // grafo += '{rank=same;root;'
        while (temporal != null) {
            
            nodos+=  "N"+numnodo + "[label=\"" + temporal.cancion.name + "\"];\n";
            
            temporal = temporal.siguiente;
            numnodo++;  
            if(temporal == this.primero){
                break;
            }
                      
        }
        

        temporal = this.primero;
        numnodo = 0;
        while (temporal != null) {
            var auxnum = numnodo+1;
            if(temporal.siguiente != this.primero){
                conexiones += "N"+numnodo+ " -> N" +auxnum+ ";\n";
                conexiones += "N"+auxnum+ " -> N" +numnodo+ ";\n";
            }else{
                
                conexiones += "N"+numnodo+ " -> N0;\n";
                conexiones += "N0 -> N"+numnodo+";\n";
            }
            
            //conexiones += temporal.siguiente.cancion.name+ " -> " +temporal.cancion.name+ ";\n";
            numnodo++; 
            temporal = temporal.siguiente;

            if(temporal == this.primero){
                break;
            }
        }
       

        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzo").graphviz()
            .width(900)
            .height(300)
            .renderDot(codigodot)
    }
}


//************************************PILA (AMIGOS)*************************************
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
        if(this.primero == null){
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
        while(true){
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

    getNodoPila(usuario){
        var temp = this.primero;
        
        while(temp!= null){
            if(temp.amigo.name == usuario){
                return temp;
            }
            temp = temp.siguiente;
        }

        return null;
    }

    graficar(){
        var codigodot = "digraph G{\nlabel=\" Pila de Amigos \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.primero;
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
    
        // grafo += '{rank=same;root;'
        while (temporal != null) {
            
            nodos+=  "N"+numnodo + "[label=\"" + temporal.amigo.name + "\"];\n";
            
            temporal = temporal.siguiente;
            numnodo++;  
                      
        }
        

        temporal = this.primero;
        numnodo = 0;
        while (temporal != null) {
            
            if(temporal.siguiente != null){
                conexiones += "N"+numnodo+ " -> N" +(numnodo+1)+ ";\n";
            }
            
            numnodo++; 
            temporal = temporal.siguiente;

        }
       

        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzo-pila").graphviz()
            .width(900)
            .height(300)
            .renderDot(codigodot)
    }
        
}


//************************************COLA (BLOQUEADOS)*************************************

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

    graficar(){
        var codigodot = "digraph G{\nlabel=\" Pila de Amigos \";\nnode [shape=box];\n graph [rankdir = LR];";
        var temporal = this.primero;
        var conexiones ="";
        var nodos ="";
        var numnodo= 0;
    
        // grafo += '{rank=same;root;'
        while (temporal != null) {
            
            nodos+=  "N"+numnodo + "[label=\"" + temporal.usuario.name + "\"];\n";
            
            temporal = temporal.siguiente;
            numnodo++;  
                      
        }
        

        temporal = this.primero;
        numnodo = 0;
        while (temporal != null) {
            
            if(temporal.siguiente != null){
                conexiones += "N"+numnodo+ " -> N" +(numnodo+1)+ ";\n";
            }
            
            numnodo++; 
            temporal = temporal.siguiente;

        }
       

        codigodot += "//agregando nodos\n"
        codigodot += nodos+"\n"
        codigodot += "//agregando conexiones o flechas\n"
        codigodot += "{\n"+conexiones+"\n}\n}"
        console.log(codigodot)
        d3.select("#lienzo-cola").graphviz()
            .width(900)
            .height(300)
            .renderDot(codigodot)
    }
}

/*dpi, name, username, password, phone, admin*/
/*
var cola = new Cola();

cola.insertar(new Usuario(2418456782101, "LuisReal","luis526",123,57594210, false));
cola.insertar(new Usuario(555164870132, "karla", "karla123",124, 544567891, false));
cola.insertar(new Usuario(487135791000, "chelsea", "chelsea123",125, 487956511, false));*/

//**********************************************ARBOL BINARIO (PODCAST)************************************** */
class podcast{
    constructor(name, topic, duration, guests){
        this.name = name;
        this.topic = topic;
        this.duration = duration;
        this.guests = guests;
    }
}

class NodoArbol{
    constructor(_valor){
        this.valor=_valor;
        this.izquierda = null;
        this.derecha = null;
    }
}

class ABB{
    constructor(){
        this.raiz = null;
        this.codigodot;
        this.group = 0;
    }
    //metodo insertar
    insertar(_valor){
        this.raiz = this.agregar(_valor, this.raiz);
    }
    //metodo insertar recursivo
    agregar(_valor, nodo){
        if(nodo == null){
            return new NodoArbol(_valor);
        }else{
            
            if(_valor.name > nodo.valor.name){
                nodo.derecha = this.agregar(_valor, nodo.derecha);
            }else{
                nodo.izquierda = this.agregar(_valor, nodo.izquierda);
            }
        }
        return nodo;
    }
    
    //preorden
    preorden(){
        this.pre_orden(this.raiz);
    }

    pre_orden(nodo){
        if(nodo!=null){
            console.log("Valor:",nodo.valor.name);
            this.pre_orden(nodo.izquierda);
            this.pre_orden(nodo.derecha);
        }
    }
    //inorden
    inorden(){
        this.in_orden(this.raiz);
    }
    
    in_orden(nodo){
        if(nodo!=null){
            this.in_orden(nodo.izquierda);
            console.log("Valor:",nodo.valor.name);
            this.in_orden(nodo.derecha);
        }
    }

    //postorden
    posorden(){
        this.pos_orden(this.raiz);
    }
    
    pos_orden(nodo){
        if(nodo!=null){
            this.pos_orden(nodo.izquierda);
            this.pos_orden(nodo.derecha);
            console.log("Valor:",nodo.valor.name);           
        }
    }

    graficar(){
        this.codigodot = "digraph G{\nlabel=\" Arbol Podcast \";\nnode [shape=circle];\n";
    
        // grafo += '{rank=same;root;'

        this.recorridoGrafica(this.raiz);
        this.apuntandoGrafica(this.raiz);
        
        this.codigodot += "}";

        console.log(this.codigodot);
        
        d3.select("#lienzo-arbol").graphviz()
            .width(900)
            .height(500)
            .renderDot(this.codigodot)
    }
    
    recorridoGrafica(pivote){
        
        if(pivote!= null){
            this.recorridoGrafica(pivote.izquierda);
            this.codigodot += pivote.valor.name.split(" ")[0] +"[label=\"name: "+pivote.valor.name+"\", group ="+this.group+", fillcolor=\"green\"];\n";
            this.group += 1;
            //console.log(this.codigodot);
            this.recorridoGrafica(pivote.derecha);
        }
        return;
    }

    apuntandoGrafica(pivote){
        if(pivote!=null){
            this.apuntandoGrafica(pivote.izquierda);
            
            
            if(pivote.izquierda != null){
                this.codigodot += pivote.valor.name.split(" ")[0]+"->"+pivote.izquierda.valor.name.split(" ")[0]+";\n";
                //console.log(this.codigodot);
            }
            
            if(pivote.derecha != null){
                this.codigodot += pivote.valor.name.split(" ")[0]+"->"+pivote.derecha.valor.name.split(" ")[0]+";\n";
                //console.log(this.codigodot);
            }
            
            //cout<< pivote->dato<< " ";
            this.apuntandoGrafica(pivote.derecha);
        }
        return;
    }
}
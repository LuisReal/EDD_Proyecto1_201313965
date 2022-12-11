class Matriz{
    constructor(capa){
        this.capa = capa;
        this.filas = new ListaEncabezado("LISTAS");
        this.columnas = new ListaEncabezado("COLUMNAS");
    }
    
    insertar(nodoInterno){
        var encabezadoX = this.filas.getEncabezado(nodoInterno.x);
        var encabezadoY = this.columnas.getEncabezado(nodoInterno.y);

        if(encabezadoX == null){
            encabezadoX = new NodoEncabezado(nodoInterno.x);
            this.filas.insertarEncabezado(encabezadoX);
        }
        if(encabezadoY == null){
            encabezadoY = NodoEncabezado(nodoInterno.y);
            this.columnas.insertarEncabezado(encabezadoY);
        }
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
            else{
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
            else{
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
}
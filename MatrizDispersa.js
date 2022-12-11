class NodoInterno{
    constructor(x , y ){
        
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
            encabezadoX = new NodoEncabezado(nodoInterno.x);
            this.filas.insertarEncabezado(encabezadoX);
        }
        if(encabezadoY == null){
            encabezadoY = NodoEncabezado(nodoInterno.y);
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
}
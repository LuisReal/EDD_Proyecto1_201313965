class Archivo{
    

    constructor(){
        this.lista_usuarios = new Lista();
        this.lista_artista = new ListaArtista();
        
    }
    
    cargarUsuarios(){
        
        fetch('usuarios.json')
            
            .then(respuesta => respuesta.json())
            .then(usuarios =>{
                usuarios.forEach(usuario=>{
                    
                    this.lista_usuarios.insertar(new Usuario(usuario.dpi, usuario.name, usuario.username, usuario.password, usuario.phone, usuario.admin));
                    
                });
                //lista_usuarios.print();
            });
        
            
    }

    cargarArtistas(){
        
        fetch('artistas.json')
            
            .then(respuesta => respuesta.json())
            .then(artistas =>{
                artistas.forEach(artista=>{
                    
                    this.lista_artista.insertarArtista(new Artista(artista.name, artista.age, artista.country));
                    
                });
                //lista_artista.printLista();
            });
    }

    cargarCanciones(){ // esto crea la lista de listas, que usa a los artistas como cabecera y como lista a las canciones
        
        fetch('canciones.json')
            
            .then(respuesta => respuesta.json())
            .then(canciones =>{
                canciones.forEach(cancion=>{
                    var artista = cancion.artist;

                    var encabezado =this.lista_artista.getEncabezado(artista);
                    //console.log("el nombre del artista es: "+encabezado.artista.name)
                    if(encabezado == null){
                        console.log("No existe el artista");
                    }else{             
                        encabezado.lista_canciones.insertarCancion(new Cancion(cancion.artist, cancion.name , cancion.duration, cancion.gender)); 
                    }
                     
                });
                this.lista_artista.mostrarTodo();
                //lista_artista.printLista();
            });
    }

    
}

var archivo = new Archivo();
/*
archivo.cargarUsuarios();
archivo.cargarArtistas();
archivo.cargarCanciones();*/

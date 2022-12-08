class Archivo{
    cargarUsuarios(){
        var lista = new Lista();
        fetch('usuarios.json')
            
            .then(respuesta => respuesta.json())
            .then(usuarios =>{
                usuarios.forEach(usuario=>{
                    
                    lista.insertar(new Usuario(usuario.dpi, usuario.name, usuario.username, usuario.password, usuario.phone, usuario.admin));
                    
                });
                lista.print();
            });
        
            
    }
}

var archivo = new Archivo();

archivo.cargarUsuarios();
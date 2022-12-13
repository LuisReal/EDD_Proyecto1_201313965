
lista_usuarios = new Lista();
lista_artista = new ListaArtista();

/*
function readFileUsers(e) { 
    var file = e.target.files[0];
    var nombre = file.name;
    console.log("nombre del archivo: "+nombre);
    if (!file) { return; } 
    var reader = new FileReader(); 
    reader.onload = function(e) {
         
        var contents = e.target.result; // guarda un string
        
        var obj = JSON.parse(contents);
        //dpi, name, username, password, phone, admin
        if(nombre =="users.json"){
            for(a in obj){
                lista_usuarios.insertar(new Usuario(obj[a].dpi, obj[a].name, obj[a].username, obj[a].password, obj[a].admin) );
            }
    
            lista_usuarios.print();
        }
        

    }; 
    reader.readAsText(file);
    
} 
document.getElementById('file-input').addEventListener('change', readFileUsers, false);*/


function Users(){
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    console.log("username: "+username + " password: "+password);
}

//var formulario = document.getElementById('form');

document.getElementById('enviar').addEventListener('click', Users, false);
//document.getElementById('enviar').addEventListener('click', Users, false);




var lista_usuarios = new Lista();
var lista_artista = new ListaArtista();
var lista_cancion = new ListaCancion();


var div_login = document.getElementById('div-login');
var div_register= document.getElementById('div-registrar');
var div_administrador = document.getElementById('div-administrador');
var div_navbar = document.getElementById('navbar-inicio');

function showLogin(){
    
    div_login.style.display="block";

    if(div_register.style.display == "block"){
        div_register.style.display = "none";
    }

}


document.getElementById('login').addEventListener('click', showLogin, false);

function showRegister(){
   
    

    if(div_login.style.display == "block"){
        div_login.style.display = "none";
    }
        
    div_register.style.display="block";
    
}


document.getElementById('registrar').addEventListener('click', showRegister, false);


function showAdministrator(){
   
    if(div_login.style.display == "block"){
        div_login.style.display = "none";
    }else if(div_register.style.display =="block"){
        div_register.style.display ="none";
    }

    //div_navbar.style.display = "none";
    div_administrador.style.display="block";
    
}


document.getElementById('administrador').addEventListener('click', showAdministrator, false);

function Users(){
    
    var name = document.getElementById('name-registrar').value;
    var username = document.getElementById('username-registrar').value;
    var dpi = document.getElementById('dpi-registrar').value;
    var phone = document.getElementById('phone-registrar').value;
    var password = document.getElementById('password-registrar').value;
    var admin = false;
    //var admin = document.getElementById('admin').value;
    
    ////dpi, name, username, password, phone, admin
    
    lista_usuarios.insertar(new Usuario(dpi, name, username, password, phone, admin));
    lista_usuarios.print();

    document.getElementById('name-registrar').value = "";
    document.getElementById('username-registrar').value = "";
    document.getElementById('dpi-registrar').value = "";
    document.getElementById('phone-registrar').value = "";
    document.getElementById('password-registrar').value ="";
    
    
    
}

//var formulario = document.getElementById('form');

document.getElementById('btn-registrar').addEventListener('click', Users, false);

function readFile(e) { 
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
        }else if(nombre == "artist.json"){
            for(a in obj){
                
                lista_artista.insertarArtista(new Artista(obj[a].name, obj[a].age, obj[a].country));
            }
        }else if(nombre == "music.json"){
            //artist, name, duration, gender
            for(a in obj){
                var nodo = lista_artista.getEncabezado(obj[a].artist);
                if(nodo == null){
                    console.log("No existe el artista");
                }else{
                    nodo.lista_canciones.insertarCancion(new Cancion(obj[a].artist, obj[a].name, obj[a].duration, obj[a].gender));
                }
               
                
            }

            lista_artista.mostrarTodo();
        }
        

    }; 
    reader.readAsText(file);
    
} 
document.getElementById('carga').addEventListener('change', readFile, false);

//dpi, name, username, password, phone, admin (USUARIOS)
var lista_usuarios = new Lista();
var lista_artista = new ListaArtista();
var lista_cancion = new ListaCancion();
var matriz = new Matriz("Raiz");
lista_usuarios.insertar(new Usuario(2654568452521, "Oscar Armin", "EDD", 123, 502123123-4567, true));

var div_login = document.getElementById('div-login');
var div_register= document.getElementById('div-registrar');
var div_administrador = document.getElementById('div-administrador');
var div_navbar = document.getElementById('navbar-inicio');
var div_usuario = document.getElementById('div-usuario');

function showLogin(){
    
    div_login.style.display="block";

    if(div_register.style.display == "block"){
        div_register.style.display = "none";
    }else if(div_administrador.style.display == "block"){
        div_administrador.style.display = "none";
    }else if(div_usuario.style.display == "block"){
        div_usuario.style.display = "none";
    }   

}


document.getElementById('login').addEventListener('click', showLogin, false);

function showRegister(){
   
    

    if(div_login.style.display == "block"){
        div_login.style.display = "none";
    }else if(div_administrador.style.display == "block"){
        div_administrador.style.display = "none";
    }else if(div_usuario.style.display == "block"){
        div_usuario.style.display = "none";
    }
        
    div_register.style.display="block";
    
}

document.getElementById('btn-registrarse').addEventListener('click', showRegister, false);


function showAdministrator(){
   
    if(div_login.style.display == "block"){
        div_login.style.display = "none";
    }else if(div_register.style.display =="block"){
        div_register.style.display ="none";
    }else if(div_usuario.style.display == "block"){
        div_usuario.style.display = "none";
    }

    //div_navbar.style.display = "none";
    div_administrador.style.display="block";
    
}

//document.getElementById('administrador').addEventListener('click', showAdministrator, false);

function showUser(){
    if(div_login.style.display == "block"){
        div_login.style.display = "none";
    }else if(div_register.style.display =="block"){
        div_register.style.display ="none";
    }else if(div_administrador.style.display == "block"){
        div_administrador.style.display = "none";
    }

    //div_navbar.style.display = "none";
    div_usuario.style.display="block";
}


function login(){
    var username = document.getElementById('username-login');
    var password = document.getElementById('password-login');
    var boton_radio = document.getElementById('boton-radio');

    var nodo = lista_usuarios.buscar(username.value, password.value);

    if(nodo != null){
        if(boton_radio.checked){
            username.value = "";
            password.value = "";
            boton_radio.checked = false;
            console.log("Bienvenido administrador");
            showAdministrator();
        }else{
            console.log("Bienvenido usuario");
            username.value = "";
            password.value = "";
            boton_radio.checked = false;
            showUser();
        }
        

    }else{
        console.log("usuario o contrasena son incorrectos")
    }


}
document.getElementById('enviar-login').addEventListener('click', login, false);


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


function programarCancion(){
    var nombre_cancion = document.getElementById('nombre-cancion');
    var album_cancion = document.getElementById('album-cancion');

    var fecha = document.getElementById('fecha').value;
    
    //let dato = "2022-06-15";
    let date = new Date(fecha);
    
    console.log("mes: "+date.getMonth() + " dia: "+date.getDate());
    matriz.insertar(new NodoInterno(date.getMonth(), date.getDate(), "cancion1" ));
    
    var nodo = matriz.getNodo(date.getMonth(), date.getDate());
    console.log("mes: "+nodo.x);
    
    if(date1.getMonth() < date2.getMonth()){
        let mes1 = date1.toLocaleString('default', {month:'long'});
        console.log("fecha1 es menor "+ mes1);
    }else{
        let mes2 = date2.toLocaleString('default', {month:'long'});
        console.log("fecha2 es menor "+ mes2);
    }
}
document.getElementById('btn-programar').addEventListener('click', programarCancion, false);

//dpi, name, username, password, phone, admin (USUARIOS)
var lista_usuarios = new Lista();
var lista_artista = new ListaArtista();
var lista_cancion = new ListaCancion();
var matriz = new Matriz("Raiz");
var lista_circular = new ListaCircularDoble();

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

    var tabla = document.getElementById('tabla');
    var tbody = document.createElement('tbody');
    var artista ="Luis Gonzalez";
    
    var contador =0;
    var fila = document.createElement('tr');

    var temp1 = lista_artista.primero;
    while(temp1 != null){
        if(temp1.lista_canciones.primero != null){
            var temp2 = temp1.lista_canciones.primero;
            while(temp2 != null){
                if(contador < 3){
                    var td = document.createElement('td');
                    
                    td.innerHTML =`<img src="musica.png" width=100 height=100 class="img-thumbnail" alt="...">
                    <p >Cancion: `+temp2.cancion.name+`</p>
                    <p>Artista: `+temp2.cancion.artist+`</p>
                    <button class="btn btn-danger botones" id="`+temp2.cancion.name+`" value="`+temp2.cancion.name+`">Agregar</button>`;
                    
                    fila.appendChild(td);

                    contador += 1;
                }else{
                    tbody.appendChild(fila);
                    fila = document.createElement('tr');
                    contador = 0;
                }
                temp2 = temp2.siguiente;
            }
        }
        temp1 = temp1.abajo;
    }

    tabla.appendChild(tbody);

    const botones = document.querySelectorAll(".botones");

    botones.forEach(function(e) {
	
        e.addEventListener("click", function(){
            getCancion(e.id);
        });
    });
 
}


function getCancion (id) {
	
	var atributo = id;
    var cancion = document.getElementById(atributo).value;
    //artist, name, duration, gender
    
    var temp1 = lista_artista.primero;
    while(temp1 != null){
        if(temp1.lista_canciones.primero != null){
            var temp2 = temp1.lista_canciones.primero;
            while(temp2 != null){
                if(temp2.cancion.name == cancion){
                    lista_circular.insertar(new Cancion(temp2.cancion.artist, temp2.cancion.name, temp2.cancion.duration, temp2.cancion.gender));
                    break;
                }
                temp2 = temp2.siguiente;
            }  
        }
        temp1 = temp1.abajo;
    }
    console.log();
    console.log("Imprimiendo lista circular doble");
    lista_circular.mostrarLista();

    console.log("El valor del atributo es: "+document.getElementById(atributo).value);
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


//*****************************LECTURA DE ARCHIVO********************************* */
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

            //lista_artista.mostrarTodo();
        }
        

    }; 
    reader.readAsText(file);
    
} 
document.getElementById('carga').addEventListener('change', readFile, false);

//*****************************PROGRAMAR CANCION (MATRIZ DISPERZA)********************************* */

function programarCancion(){
    var nombre_cancion = document.getElementById('nombre-cancion');
    var artista_cancion = document.getElementById('artista-cancion');
    var duracion_cancion = document.getElementById('duracion-cancion');
    var genero_cancion = document.getElementById('genero-cancion');
    var cancion = new Cancion(artista_cancion.value, nombre_cancion.value, duracion_cancion.value, genero_cancion.value);//artist, name, duration, gender

    var fecha = document.getElementById('fecha').value;
    
    //let dato = "2022-06-15";
    let date = new Date(fecha);
    
    console.log("mes: "+date.getMonth() + " dia: "+date.getDate());
    matriz.insertar(new NodoInterno(date.getMonth(), date.getDate(), cancion ));
    
    var nodo = matriz.getNodo(date.getMonth(), date.getDate());
    console.log("mes: "+nodo.x);
    /*
    if(date1.getMonth() < date2.getMonth()){
        let mes1 = date1.toLocaleString('default', {month:'long'});
        console.log("fecha1 es menor "+ mes1);
    }else{
        let mes2 = date2.toLocaleString('default', {month:'long'});
        console.log("fecha2 es menor "+ mes2);
    }*/
}
document.getElementById('btn-programar').addEventListener('click', programarCancion, false);

//*****************************PUBLICAR CANCION (LISTA DE LISTAS)********************************* */

function publicarCancion(){
    var nombre_cancion = document.getElementById('nombre-cancion');
    var artista_cancion = document.getElementById('artista-cancion');
    var duracion_cancion = document.getElementById('duracion-cancion');
    var genero_cancion = document.getElementById('genero-cancion');

    var nodo = lista_artista.getEncabezado(artista_cancion.value);

    if(nodo == null){
        console.log("No existe el artista");
    }else{
        nodo.lista_canciones.insertarCancion(new Cancion(artista_cancion.value, nombre_cancion.value, duracion_cancion.value, genero_cancion.value));
    }

    lista_artista.mostrarTodo();
}   

document.getElementById('btn-publicar').addEventListener('click', publicarCancion, false);


//*****************************INTERFAZ DE USUARIO********************************* */

var div_musica = document.getElementById('div-musica');
var div_playlist = document.getElementById('div-playlist');

function showMusica(){

    if(div_playlist.style.display == "block"){
        div_playlist.style.display = "none";
    }

    div_musica.style.display = "block";
}

document.getElementById('usuario-musica').addEventListener('click', showMusica, false);



function showPlaylist(){

    if(div_musica.style.display == "block"){
        div_musica.style.display = "none";
    }

    div_playlist.style.display = "block";

    lista_circular.graficar();
    var carrusel = document.getElementById('carrusel');
    var botones = document.getElementById('botones-carrusel');
    var temporal = lista_circular.primero;

    /*<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>*/
    var contador = 0;
    var cadena = "";

    while (temporal != null) {
        
        if(temporal == lista_circular.primero){
            var div = document.createElement('div');
            div.setAttribute('class','carousel-item active');
            div.innerHTML=`
                       
                <img src="fondo.jpeg"  class="d-block w-100" alt="...">

                <div class="carousel-caption d-none d-md-block">
                    <img src="cancion.jpg" width="350" height="300" alt="...">
                    <h5>Cancion: `+temporal.cancion.name+`</h5>
                    <p>Artista: `+temporal.cancion.artist+`</p>
                </div>
            `;
            
            cadena += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="`+contador+`" class="active" aria-current="true" aria-label="Slide `+contador+1+`"></button>`;
            contador += 1;
            carrusel.appendChild(div);
            

        }else{
            var div = document.createElement('div');
            div.setAttribute('class','carousel-item');
            div.innerHTML=`              
                <img src="fondo.jpeg"  class="d-block w-100" alt="...">
                <div class="carousel-caption d-none d-md-block">
                    <img src="cancion.jpg" width="350" height="300" alt="...">
                    <h5>Cancion: `+temporal.cancion.name+`</h5>
                    <p>Artista: `+temporal.cancion.artist+`</p>
                </div>
            `;
            cadena += `<button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="`+contador+`" aria-label="Slide `+contador+1+`"></button>`
            contador += 1;
            carrusel.appendChild(div);
        }

        temporal = temporal.siguiente;
        
        if(temporal == lista_circular.primero){
            break;
        }
                  
    }

    botones.innerHTML = cadena;

    /*  <img src="fondo.jpeg"  class="d-block w-100" alt="...">
                        
        <div class="carousel-caption d-none d-md-block">
            <img src="cancion.jpg" width="350" height="300" alt="...">
            <h5>Cancion: Do you really want to hurt me</h5>
            <p>Artista: Culture Club</p>
        </div>*/

    
}

document.getElementById('usuario-playlist').addEventListener('click', showPlaylist, false);
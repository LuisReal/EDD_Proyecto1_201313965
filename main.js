
var lista_usuarios = new Lista();

var div_login = document.getElementById('div-login');;
var div_register= document.getElementById('div-registrar');;

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

function Users(){
    
    var name = document.getElementById('name').value;
    var username = document.getElementById('username').value;
    var dpi = document.getElementById('dpi').value;
    var phone = document.getElementById('phone').value;
    var password = document.getElementById('password').value;
    var admin = false;
    //var admin = document.getElementById('admin').value;
    
    ////dpi, name, username, password, phone, admin
    
    lista_usuarios.insertar(new Usuario(dpi, name, username, password, phone, admin));
    lista_usuarios.print();

    document.getElementById('name').value = "";
    document.getElementById('username').value = "";
    document.getElementById('dpi').value = "";
    document.getElementById('phone').value = "";
    document.getElementById('password').value ="";
    
    
    
}

//var formulario = document.getElementById('form');

document.getElementById('btn-registrar').addEventListener('click', Users, false);

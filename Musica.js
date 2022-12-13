/*
var btn = document.getElementById('btn');


function getFecha(){
    let fecha1 = document.getElementById('Fecha1').value;
    let fecha2 = document.getElementById('Fecha2').value;
    //let dato = "2022-06-15";
    let date1 = new Date(fecha1);
    let date2 = new Date(fecha2);
    
    var matriz = new Matriz("Raiz");
    console.log("mes: "+date1.getMonth() + " dia: "+date1.getDate());
    matriz.insertar(new NodoInterno(date1.getMonth(), date1.getDate(), "cancion1" ));
    var nodo = matriz.getNodo(date1.getMonth(), date1.getDate());
    console.log("mes: "+nodo.x);
    
    if(date1.getMonth() < date2.getMonth()){
        let mes1 = date1.toLocaleString('default', {month:'long'});
        console.log("fecha1 es menor "+ mes1);
    }else{
        let mes2 = date2.toLocaleString('default', {month:'long'});
        console.log("fecha2 es menor "+ mes2);
    }
    
}

btn.addEventListener('click', getFecha);*/

/*
function readFile(e) { 
    var file = e.target.files[0]; 
    if (!file) { return; } 
    var reader = new FileReader(); 
    reader.onload = function(e) {
         
        var contents = e.target.result;
        
        var obj = JSON.parse(contents);
    
        for(a in obj){
            console.log(obj[a].name);
        }

    }; 
    reader.readAsText(file);
    
} 
document.getElementById('file-input').addEventListener('change', readFile, false);*/
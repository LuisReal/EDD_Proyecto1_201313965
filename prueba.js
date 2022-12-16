var p = document.getElementById('prueba');
var name1 ="Luis Gonzalez";
var name2 ="Chelsea Gonzalez";
var name3 ="Amanda Gonzalez";

p.innerHTML=`<button class="botones" id=`+name1+` value=`+name1+`>Agregar</button>`;
p.innerHTML=`<button class="botones" id=`+name2+` value=`+name2+`>Agregar</button>`;
p.innerHTML=`<button class="botones" id=`+name3+` value=`+name3+`>Agregar</button>`;

var a = document.querySelectorAll(".botones")
  a.forEach(function(e){
    e.addEventListener('click', function(){
      checkAnswer(e.id)
    })
  })
function checkAnswer(id){
  idB= id;
  alert(document.getElementById(idB).value)
}
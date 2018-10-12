//Usando "document.getElementById"

var container = document.getElementById("c1");//1 y 2
//¿Qué es lo que contiene la variable container?
//Contiene al elemento que se le ha enviado, en este caso el elemento del container con id= c1

container.innerText='¡Hola Mundo!';//3
//¿Qué visualiza en el navegador?
//Se coloca sobre el elemento #c1 el texto: '¡Hola Mundo!'

container.style.backgroundColor= '#000000';//4

container.style.color = '#1cb723'//5

container.style.width= '200px';//6.1
container.style.height= '200px';//6.2

container.innerHTML= "<input type='text' placeholder='Escriba su texto'>"//7
//¿Qué es lo que se muestra en pantalla?
//Se muestra como el elemento #c1 es mas grande que los demas elementos, conteniendo una caja de texto dentro de el
//¿Cuál es la diferencia entre las propiedades innerHtml e innerText?
//Innerhtml es el contenido que agregado lo obtiene en el formato de html, y el innertext lo ingresado se muestra como se escribio

//Usando "document.getElementsByClassName"

var containers=document.querySelectorAll(".c2");//1
//¿Qué almacena containers?
//Contiene a todos los elementos de clase .c2

containers.forEach(element => {
    element.style.backgroundColor= '#009999';
    element.innerHTML="<input type='text' placeholder='Escriba su texto'>"
});
//¿Qué se mostrará en pantalla?
//Los elementos que tinen clase c2 son afectados y cambian su coplor de fondo 
//¿Qué se mostrará en pantalla?
//Los elementos anteriormente modificados en su color de fondo ahora contienen una caja de texto

//Eventos
var boton = document.getElementById('btn-click');//1

boton.onclick = (e)=>
{
    alert('Hola mundo');
}//2

var btnCopy = document.getElementById('btnCopy');//3

btnCopy.onclick = (e)=>
{
    let msj = document.getElementById('textMsj').value;
    document.getElementById('showMsj').innerText = msj;
}//4


//Seleccionar multimples elementos NODELIST
document.getElementsByClassName("success");//Recibe como parámetro el nombre de la case css de los elementos que se desean capturar. 
document.getElementsByTagName("li")//Recibe como parámetro el nombre de la etiqueta HTML y retorna todos los elementos que cumplan la condición
document.querySelector("li.item-nav")//Recibe como parámetro el selector CSS, retorna todos los elementos que cumplan con la condición

//Seleccionar un elemento individualmente
document.getElementById("nav-brand")//Recibe como parámetro el nombre que se le ha asignado al atributo id del elemento







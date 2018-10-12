var container = document.getElementById("c1");
container.innerText='Hola Mundo';
container.style.backgroundColor= '#000000';
container.style.color = '#1cb723'

container.style.width= '200px';
container.style.height= '200px';

container.innerHTML= "<input type='text' placeholder='EScriba sdu texto'>"

var containers=document.querySelectorAll(".c2");

containers.forEach(element => {
    element.style.backgroundColor= '#009999';
    element.innerHTML="<input type='text' placeholder='EScriba sdu texto'>"
});

//Seleccionar multimples elementos NODELIST
document.getElementsByClassName("success");//Recibe como parámetro el nombre de la case css de los elementos que se desean capturar. 
document.getElementsByTagName("li")//Recibe como parámetro el nombre de la etiqueta HTML y retorna todos los elementos que cumplan la condición
document.querySelector("li.item-nav")//Recibe como parámetro el selector CSS, retorna todos los elementos que cumplan con la condición

//Seleccionar un elemento individualmente
document.getElementById("nav-brand")//Recibe como parámetro el nombre que se le ha asignado al atributo id del elemento





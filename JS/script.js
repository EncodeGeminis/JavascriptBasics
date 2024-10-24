console.log("js funciona");
let nombre = "Geminis"; // se define como string
const valor = 500; //se define como constante
var esProgramador = true; //se define como boolean

//funcion tradicional
function sumar(numero, numero2){
    return numero+numero2;
}
//Arrow funcion
const restar = (numero, numero2) =>
     numero-numero2;
//Parametro por defecto y rest parameter
const multiplicar = (a, b = 1, ...extras) => {
    return a*b * extras.reduce((acc, num) => acc * num,1);
}

//operador terneario
const numero =18;
const mensaje = (numero>=18) ? "Es mayor" : "Es menor";
console.log(mensaje);

//sentensia if-else
if(numero<10){
    console.log("el numero es menor a 10");
}else{
    console.log("el numero es mayor a 10");
}

//Switch Case
var condicion = 2;
switch(condicion){
    case 1:
        console.log("condicion 1");
    break;
    case 2:
        console.log("condicion 2");
    break;
}
//Bucle For
for (let i = 0; i <5 ;i++){
    console.log(i);
}
//metodos modernos 
const numeros =[1,2,3,4,5];
//ciclo for each
numeros.forEach(num => console.log(num));
//uso de map 
const dobles =numeros.map(num => num*2);
//uso de filter
const pares = numeros.filter(num => num %2 ===0);
//uso de reduce 
const suma = numeros.reduce ((acc, num) => acc+num, 0);

//creacion de un objeto
const persona = {
    nombre: "diana",
    edad: 30,
    saludar(){
        console.log(`Hola, soy ${this.nombre}`);
    },
};
//Desestructuracion 
const { nombre, edad } = persona;
persona.saludar();

//arreglos
const frutas = ["Manzana", "Pera", "Banana"];
//agregar un valor al arreglo 
frutas.push("Naranja");
//eliminar el valor de un arreglo
frutas.splice(1,1);
//buscar un valor en un arreglo 
const indicePera = frutas.indexOf("Pera");

//Asincronia 
const promesa = new Promise((resolve, reject) => {
    setTimeout(() => resolve("¡Éxito!"), 1000);
  });
  
  promesa.then((resultado) => console.log(resultado));
  
  // Async/Await
  const obtenerDatos = async () => {
    const resultado = await promesa;
    console.log(resultado);
  };
  
  obtenerDatos();
  //manipulacion del DOM
  const boton = document.querySelector("#miBoton");
  boton.addEventListener("click", () =>{
    document.body.style.backgroundColor = "lightblue";
  });
  //Peticiones HTTP
  fetch("https://jsonplaceholder.typicode.com/posts")
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error(error));

// Con async/await
const obtenerPosts = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.error(error);
  }
};

obtenerPosts();

//manejo de clases
class Animal {
    constructor(nombre) {
      this.nombre = nombre;
    }
    hablar() {
      console.log(`${this.nombre} está haciendo un ruido`);
    }
  }
  class Perro extends Animal {
    hablar() {
      console.log(`${this.nombre} está ladrando`);
    }
  }
  const perro = new Perro("Rex");
  perro.hablar();

  //uso de modulos en javascript
// archivo modulo.js
export const saludo = "¡Hola Mundo!";
export function sumar(a, b) {
  return a + b;
}
// archivo principal.js
import { saludo, sumar } from "./modulo.js";
console.log(saludo);
console.log(sumar(2, 3));

//Manejo de errores Try-catch
try {
    throw new Error("Ocurrió un error");
  } catch (error) {
    console.error(error.message);
  }
  
//json y local storage 
const usuario = { nombre: "Luis", edad: 28 };
localStorage.setItem("usuario", JSON.stringify(usuario));

const usuarioRecuperado = JSON.parse(localStorage.getItem("usuario"));
console.log(usuarioRecuperado);
//Callbacks y manejo de eventos 
const ejecutar = (callback) => {
    console.log("Ejecutando tarea...");
    callback();
  };  
ejecutar(() => console.log("Tarea completada"));

//Spread operators y rest parameters
const numeros = [1, 2, 3];
const masNumeros = [...numeros, 4, 5]; // Spread

const sumarTodos = (...args) => args.reduce((a, b) => a + b, 0); // Rest
console.log(sumarTodos(1, 2, 3, 4));

//botones
const cifrar = document.getElementById('cifrar');
const descifrar = document.getElementById('descifrar');
const password = document.getElementById("password");
const login = document.getElementById("login");
const inicio = document.getElementById('inicio');

//pantallas
const primerapantalla = document.getElementById('primerapantalla');
const segundapantalla = document.getElementById('segundapantalla');
const tercerapantalla = document.getElementById('tercerapantalla');

//ocultando pantallas
segundapantalla.classList.add("hide");
tercerapantalla.classList.add("hide");

//boton cifrar
cifrar.addEventListener("click", () => {
  primerapantalla.classList.add("hide");
  segundapantalla.classList.remove("hide");
})

//boton descifrar
descifrar.addEventListener("click", () => {
  primerapantalla.classList.add("hide");
  segundapantalla.classList.remove("hide");
})

let contador=0;

//boton login
login.addEventListener ("click", () => {
const password = document.getElementById("password");
const clave = password.value;
 if (clave === "LABORATORIA"){
  segundapantalla.classList.add("hide");
  tercerapantalla.classList.remove("hide");}
 else if (contador<3) {
  contador++;
  document.getElementById("mensaje").innerHTML =("CLAVE ERRADA");
}
 else {
  document.getElementById("mensaje").innerHTML =("Ya utilizaste todos tus intentos, en este momento no podrás ingresar");
}
}
)

//boton regresar a inicio
inicio.addEventListener("click", () => {
  primerapantalla.classList.remove("hide");
  tercerapantalla.classList.add("hide");
}
)

//jalar datos a codificar o decodificar de acuerdo a los botones
codificar.addEventListener ("click",() => {
  let string = document.getElementById('texto').value;
  let offset = document.getElementById("offset").value;
  const parse = parseInt(offset);
  let respuesta = document.getElementById("respuesta");
  respuesta.value = window.cipher.encode(parse, string);
  
} )

decodificar.addEventListener ("click",() => {
  let string = document.getElementById('texto').value;
  let offset = document.getElementById("offset").value;
  const parse = parseInt(offset);
  let respuesta = document.getElementById("respuesta");
  respuesta.value = window.cipher.decode(parse, string);
 
} )

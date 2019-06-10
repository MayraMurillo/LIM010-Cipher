window.cipher = {
  encode: (offset, string) => {
  let respuesta = "";
  let asciiNum = "";
  let nuevoValorAscii = "";
      
  for (let i = 0; i < string.length; i++) {
    asciiNum = string.charCodeAt([i]);
    if(asciiNum >= 65 && asciiNum <= 90 ) {
    nuevoValorAscii = (asciiNum-65+offset)%26+65;
    respuesta += String.fromCharCode(nuevoValorAscii);
  } else if (asciiNum >= 97 && asciiNum <= 122) {
    nuevoValorAscii = (asciiNum-97+offset)%26+97;
    respuesta += String.fromCharCode(nuevoValorAscii);
    respuesta += ' ';
}
}
 return respuesta;
  },
  decode: (offset, string) => {
    let respuesta = '';
    let asciiNum = 0;
    let nuevoValorAscii = 0;
  
    for (let i = 0; i < string.length; i++) {
      asciiNum = string.charCodeAt([i]);
      if (asciiNum >= 65 && asciiNum <= 90) {
      nuevoValorAscii = (asciiNum-65-25-offset)%26+90;
      respuesta += String.fromCharCode(nuevoValorAscii);
    } else if (asciiNum >= 97 && asciiNum <= 122) {
      nuevoValorAscii = (asciiNum-97-25-offset)%26+122;
      respuesta += String.fromCharCode(nuevoValorAscii);
      respuesta += ' ';
    }
  }
    return respuesta;
  }
};
// No cambies los nombres de las funciones.

function deObjetoAmatriz(objeto){
  // Escribe una función que convierta un objeto en una matriz, donde cada elemento representa 
  // un par clave-valor en forma de matriz.
  //Ejemplo: 
  /*objeto({
      D: 1,
      B: 2,
      C: 3
    }) ➞ [["D", 1], ["B", 2], ["C", 3]]*/
  //Escribe tu código aquí
  return Object.entries(objeto);
}


function numberOfCharacters(string) {
  //La función recibe un string. Recorre el srting y devuelve el caracter con el número de veces que aparece 
  //en formato par clave-valor.
  //Ej: Recibe ---> "adsjfdsfsfjsdjfhacabcsbajda" || Devuelve ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 } 
  //Escribe tu código aqui
  //string va a tener tantos elementos, algunos repetidos. 
  //tengo q asignar a un objeto una propiedad = un elemento del string
  //luego a esa propiedad ir sumandole la cantidad de veces q aparece el elemento en el string.
  //hago un bucle for que recorra cada elemento del string.
  //tengo un objeto vacio de comienzo
  //si el elemento del string no esta en el objeto como propiedad, se crea la propiedad, si esta, se le suma uno
  // a esa propiedad.
  //Object.hasOwnProperty(prop) me devuelve true o false si el object tiene la prop.
  var objeto= {};
  for (let i=0; i<string.length; i++){
    if (objeto.hasOwnProperty(string[i])){
      objeto[string[i]]= objeto[string[i]]+1;
    } else {objeto[string[i]]=1;};
  }
  return objeto;

}


function capToFront(s) {
  //Realiza una función que reciba como parámetro un string y mueva todas las letras mayúsculas
  //al principio de la palabra.
  //Ejemplo: soyHENRY -> HENRYsoy
  //Escribe tu código aquí 
  let Mayus = /[A-Z]/g;   //regular expresion que abarca ABCD....Z, con la flag g (global). 
  let Minus = /[a-z]/g;   //g hara que con match, la regexp se evalue en toda la string, y devuelva todos los valores coincidentes.

  return s.match(Mayus).join('') + s.match(Minus).join('');
}

function asAmirror(str) {
  //La función recibe una frase. 
  //Escribe una función que tome la frase recibida y la devuelva de modo tal que se pueda leer de izquierda a derecha 
  //pero con cada una de sus palabras invertidas, como si fuera un espejo.
  //Ej: Recibe ---> "The Henry Challenge is close!" || Devuelve ---> "ehT yrneH egnellahC si !esolc"
  //Escribe tu código aquí
  //split con " " para separar los elementos de la cadena
  //los doy vuelta
  // join para unirlos con (" ") entre los elementos
  var ArregloFrase= str.split(' ');
  var ArregloFraseAlRevez=[];
  var i=0;
  ArregloFrase.forEach(function(elemento){
    ArregloFraseAlRevez[i]= elemento.split('').reverse().join('');
    i=i+1
  })
  return ArregloFraseAlRevez.join(' ');
} 


function capicua(numero){
  //Escribe una función, la cual recibe un número y determina si es o no capicúa.
  //La misma debe retornar: "Es capicua" si el número se número que se lee igual de 
  //izquierda a derecha que de derecha a izquierda. Caso contrario retorna "No es capicua"
  //Escribe tu código aquí
  let str = numero.toString();
  let str2 = str.split('').reverse().join('');

  if (str===str2){
    return "Es capicua";
  }
  return "No es capicua";
}


function deleteAbc(cadena){
  //Define una función que elimine las letras "a", "b" y "c" de la cadena dada 
  //y devuelva la versión modificada o la misma cadena, en caso de contener dichas letras.
  //Escribe tu código aquí
  aux1= cadena.replaceAll('a', '');
  aux2= aux1.replaceAll('b', '');
  aux3= aux2.replaceAll('c', '');
  return aux3;
}


function sortArray(arr) {
  //La función recibe una matriz de strings. Ordena la matriz en orden creciente de longitudes de cadena
  //Ej: Recibe ---> ["You", "are", "beautiful", "looking"] || Devuelve ---> [“You", "are", "looking", "beautiful"]
  //Escribe tu código aquí
  arr.sort(function(a,b){
    if (a.length<b.length){
      return -1;
    }
    if (a.length>b.length){
      return 1;
    }
    return 0;
  })

  return arr;

}


function buscoInterseccion(arreglo1, arreglo2){
  //Existen dos arrays, cada uno con 5 números. A partir de ello, escribir una función que permita 
  //retornar un nuevo array con la intersección de ambos elementos. (Ej: [4,2,3] unión [1,3,4] = [3,4].
  //Si no tienen elementos en común, retornar un arreglo vacío.
  //Aclaración: los arreglos no necesariamente tienen la misma longitud
  //Escribe tu código aquí  
  let array= arreglo1.filter(element=> arreglo2.includes(element))

  return array;



}



// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
   deObjetoAmatriz,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};


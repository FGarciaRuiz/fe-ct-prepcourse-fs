/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function devolverPrimerElemento(array) {
   // Retornar el primer elemento del arreglo recibido por parámetro.
   // Tu código:
   return array[0];
}

function devolverUltimoElemento(array) {
   // Retornar el último elemento del arreglo recibido por parámetro.
   // Tu código:
   return array.pop();
}

function obtenerLargoDelArray(array) {
   // Retornar la longitud del arreglo recibido por parámetro.
   // Tu código:
   var length = array.push(".")-1;
   array.pop();
   return length;
}

function incrementarPorUno(array) {
   // El arreglo recibido por parámetro contiene números.
   // Retornar un arreglo con los elementos incrementados en +1.
   // Tu código:
   var length = array.push(".")-1;
   array.pop();
   for(var i=0;i<length;i++)
      array[i]+=1;
   return array;
}

function agregarItemAlFinalDelArray(array, elemento) {
   // Agrega el "elemento" al final del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.push(elemento);
   return array;
}

function agregarItemAlComienzoDelArray(array, elemento) {
   // Agrega el "elemento" al comienzo del arreglo recibido.
   // Retorna el arreglo.
   // Tu código:
   array.unshift(elemento);
   return array;
}

function dePalabrasAFrase(palabras) {
   // El argumento "palabras" es un arreglo de strings.
   // Retornar un string donde todas las palabras estén concatenadas
   // con un espacio entre cada palabra.
   // Ejemplo: ['Hello', 'world!'] -> 'Hello world!'.
   // Tu código:
   var frase, length = palabras.push(".")-1;
   palabras.pop();
   frase=palabras[0];
   for(var i=1;i<length;i++){
      frase=frase+" ";
      frase=frase+palabras[i];
   }
   return frase;
}

function arrayContiene(array, elemento) {
   // Verifica si el elemento existe dentro del arreglo recibido.
   // Retornar true si está, o false si no está.
   // Tu código:
   var length = array.push(".")-1;
   array.pop();
   for(var i=0;i<length;i++)
      if(array[i] === elemento)
         return true;
   return false;
}

function agregarNumeros(arrayOfNums) {
   // El parámetro "arrayOfNums" debe ser un arreglo de números.
   // Suma todos los elementos y retorna el resultado.
   // Tu código:
   var  result=0,length = arrayOfNums.push(".")-1;
   arrayOfNums.pop();
   for(var i=0;i<length;i++)
      result+=arrayOfNums[i];
   return result;
}

function promedioResultadosTest(resultadosTest) {
   // El parámetro "resultadosTest" es un arreglo de números.
   // Itera (en un bucle) los elementos del arreglo y devuelve el promedio de las notas.
   // Tu código:
   var  res=0, length = resultadosTest.push(".")-1;
   resultadosTest.pop();
   for(var i=0;i<length;i++)
      res+=resultadosTest[i];
   return res/length;
}

function numeroMasGrande(arrayOfNums) {
   // El parámetro "arrayOfNums" es un arreglo de números.
   // Retornar el número más grande.
   // Tu código:
   var  max = arrayOfNums[0] ,length = arrayOfNums.push(".")-1;
   arrayOfNums.pop();
   for(var i=1;i<length;i++)
      if(arrayOfNums[i] > max)
         max = arrayOfNums[i];
   return max;
}

function multiplicarArgumentos() {
   // Usa la palabra clave `arguments` para multiplicar todos los argumentos y devolver el producto.
   // Si no se pasan argumentos retorna 0. Si se pasa un argumento, simplemente retórnalo.
   // [PISTA]: "arguments" es un arreglo.
   // Tu código:
   
}

function cuentoElementos(array) {
   // Desarrolla una función que retorne la cantidad de elementos del arreglo cuyo valor sea mayor que 18.
   // Tu código:
   var cant=0 , length = array.push(".")-1;
   array.pop();
   for(var i=0;i<length;i++)
      if(array[i]>18)
         cant++;
   return cant;
}

function diaDeLaSemana(numeroDeDia) {
   // Supongamos que los días de la semana se codifican como 1 = Domingo, 2 = Lunes y así sucesivamente.
   // Realiza una función que, dado el número del día de la semana, retorne: "Es fin de semana"
   // si el día corresponde a "Sábado" o "Domingo", y "Es dia laboral" en caso contrario.
   // Tu código:
   if(numeroDeDia === 1 || numeroDeDia === 7)
      return "Es fin de semana";
   else
      return "Es dia laboral";
}

function empiezaConNueve(num) {
   // Esta función recibe por parámetro un número.
   // Debe retornar true si el entero inicia con 9 y false en otro caso.
   // Tu código:
   var comp=10;
   while((num/comp)>1)
      comp*=10;
   comp=(comp/10)*9;
   if((num/comp)>=1 && (num/comp)<1.1)
      return true;
   if((num/comp)<1 || (num/comp)>=1.1)
      return false;
}

function todosIguales(array) {
   // Si todos los elementos del arreglo son iguales, retornar true.
   // Caso contrario retornar false.
   // Tu código:
   var status=true, length = array.push(".")-1;
   array.pop();
   for(var i=1;i<length;i++)
      if(array[i] != array[i-1])
         status = false;
   return status;
}

function mesesDelAño(array) {
   // El arreglo contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
   // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
   // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
   // Tu código:
   var length = array.push(".")-1, narray=[], flags=0;
   array.pop();
   for(var i=0;i<length;i++){
      if(array[i]=="Enero"){
         narray.push("Enero");
         if((flags%2)==0)
            flags++;
      }
      if(array[i]=="Marzo"){
         narray.push("Marzo");
         if(flags<2 || flags==4 || flags==5)
            flags+=2;
      }
      if(array[i]=="Noviembre"){
         narray.push("Noviembre");
         if(flags<4)
            flags+=4;
      }
   }
   if(flags==7)
      return narray;
   else
      return "No se encontraron los meses pedidos";

}

function tablaDelSeis() {
   // Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
   // La función devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
   // Tu código:
   var array=[];
   for(var i=0;i<=10;i++)
      array.push(6*i);
   return array;
}

function mayorACien(array) {
   // La función recibe un arreglo con enteros entre 0 y 200.
   // Recorrerlo y retornar un arreglo con todos los valores mayores a 100 (no incluye el 100).
   // Tu código:
   var length = array.push(".")-1, narray=[];
   array.pop();
   for(var i=0;i<length;i++)
      if(array[i]>100)
         narray.push(array[i]);
   return narray;
}

/* ----------------------------------------------------------------------------------
💪 EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT EXTRA CREDIT  EXTRA CREDIT 💪
-------------------------------------------------------------------------------------*/

function breakStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un arreglo y retornarlo.
   // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
   // la ejecución y retornar el string: "Se interrumpió la ejecución".
   // [PISTA]: utiliza el statement 'break'.
   // Tu código:
   var array=[];
   for(var i=1;i<11;i++){
      array.push(num+(2*i));
      if(array[i-1]==i)
         break;
   }
   if(array[i-1]==i)
      return "Se interrumpió la ejecución";
   else
      return array;
}

function continueStatement(num) {
   // Iterar en un bucle aumentando en 2 el número recibido hasta un límite de 10 veces.
   // Guardar cada nuevo valor en un array y retornarlo.
   // Cuando el número de iteraciones alcance el valor 5, no se suma ese caso y
   // se continua con la siguiente iteración.
   // [PISTA]: utiliza el statement 'continue'.
   // Tu código:
   var array=[];
   for(var i=1;i<11;i++){
      if(i==5)
         continue;
      else
         array.push(num+(2*i));
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   devolverPrimerElemento,
   devolverUltimoElemento,
   obtenerLargoDelArray,
   incrementarPorUno,
   agregarItemAlFinalDelArray,
   agregarItemAlComienzoDelArray,
   dePalabrasAFrase,
   arrayContiene,
   agregarNumeros,
   promedioResultadosTest,
   numeroMasGrande,
   multiplicarArgumentos,
   cuentoElementos,
   diaDeLaSemana,
   empiezaConNueve,
   todosIguales,
   mesesDelAño,
   tablaDelSeis,
   mayorACien,
   breakStatement,
   continueStatement,
};

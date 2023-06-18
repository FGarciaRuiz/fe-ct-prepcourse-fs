/*⚠️ NO MODIFIQUES EL NOMBRE DE LAS DECLARACIONES ⚠️*/

function deObjetoAarray(objeto) {
   // Recibes un objeto. Tendrás que crear un arreglo de arreglos.
   // Cada elemento del arreglo padre será un nuevo arreglo que contendrá dos elementos.
   // Estos elementos debe ser cada par clave:valor del objeto recibido.
   // [EJEMPLO]: {D: 1, B: 2, C: 3} ---> [['D', 1], ['B', 2], ['C', 3]].
   // Tu código:
   var array=[];
   for(var prop in objeto){
      array.push([prop,objeto[prop]]);
   }
   return array
}

function numberOfCharacters(string) {
   // La función recibe un string. Debes recorrerlo y retornar un objeto donde cada propiedad es una de las
   // letras del string, y su valor es la cantidad de veces que se repite en el string.
   // Las letras deben estar en orden alfabético.
   // [EJEMPLO]: "adsjfdsfsfjsdjfhacabcsbajda" ---> { a: 5, b: 2, c: 2, d: 4, f: 4, h:1, j: 4, s: 5 }
   // Tu código:
   var j=0,objeto={},flag=false;
   for(var i=97;i<=122;i++){
      for(j=0;j<string.length;j++){
         if(string[j]===String.fromCharCode(i) && flag==true)
            objeto[String.fromCharCode(i)]++;
         if(string[j]===String.fromCharCode(i) && flag==false){
            objeto[String.fromCharCode(i)]=1;
            flag=true;
         }
      }
      flag=false;
   }
   return objeto;
}

function capToFront(string) {
   // Recibes un string con algunas letras en mayúscula y otras en minúscula.
   // Debes enviar todas las letras en mayúscula al comienzo del string.
   // Retornar el string.
   // [EJEMPLO]: soyHENRY ---> HENRYsoy
   // Tu código:
   var strmin="",strmay="";
   for(var i=0;i<string.length;i++){
      if(string[i]>=String.fromCharCode(97) && string[i]<=String.fromCharCode(122)){
         strmin+=string[i];
      }
      if(string[i]>=String.fromCharCode(65) && string[i]<=String.fromCharCode(90)){
         strmay+=string[i];
      }
   }
   string="";
   string= strmay+strmin;
   return string;
}

function asAmirror(frase) {
   // Recibes una frase. Tu tarea es retornar un nuevo string en el que el orden de las palabras sea el mismo.
   // La diferencia es que cada palabra estará escrita al inverso.
   // [EJEMPLO]: "The Henry Challenge is close!"  ---> "ehT yrneH egnellahC si !esolc"
   // Tu código:
   var nstr="",aux="",j,k=0;
   for(var i=0;i<=frase.length;i++){
         if(frase[i]==" " || frase[i]==null){
            aux=frase.slice(k,i);
            for(j=aux.length-1;j>=0;j--)
               nstr+=aux[j];
            if(frase[i]!=null)   
               nstr+=" ";
            k=i+1;
            flag=true;
         }
   }
   return nstr;
}

function capicua(numero) {
   // Si el número que recibes es capicúa debes retornar el string: "Es capicua".
   // Caso contrario: "No es capicua".
   // Tu código:
   var str=numero.toString();
   for(var i=0;i<(str.length/2);i++)
      if(str[i]!=str[str.length-1-i])
         return "No es capicua";
   return "Es capicua";
}

function deleteAbc(string) {
   // Tu tarea es eliminar las letras "a", "b" y "c" del string recibido.
   // Retorna el string sin estas letras.
   // Tu código:
   var aux="",flag=false;
   for(var i=0;i<string.length;i++){
      do{
      flag=false;
      if(string[i]=="a" || string[i]=="b" || string[i]=="c"){
         aux=string.slice(i+1);
         string=string.slice(0,i);
         string+=aux;
         flag=true;
      }
   }while(flag)
   }
   return string;
}

function sortArray(arrayOfStrings) {
   // Recibes un arreglo de strings.
   // Debe retornar un nuevo arreglo, pero con las palabras ordenadas en orden creciente a partir
   // de la longitud de cada string.
   // [EJEMPLO]: ["You", "are", "beautiful", "looking"]  ---> [“You", "are", "looking", "beautiful"]
   // Tu código:
   var change,i,aux="",arrayOfStrings2=arrayOfStrings;
   do{
      change=false;
      console.log("Buenas");
      for(i=0;i<arrayOfStrings2.length-1;i++){
         if(arrayOfStrings2[i].length>arrayOfStrings2[i+1].length){
            aux=arrayOfStrings2[i+1];
            arrayOfStrings2[i+1]=arrayOfStrings2[i];
            arrayOfStrings2[i]=aux;
            change=true;
            console.log("dias");
         }
         if(arrayOfStrings2[i].length==arrayOfStrings2[i+1].length && arrayOfStrings2[i].localeCompare(arrayOfStrings2[i+1])==-1){
            aux=arrayOfStrings2[i+1];
            arrayOfStrings2[i+1]=arrayOfStrings2[i];
            arrayOfStrings2[i]=aux;
            change=true;
            console.log("tardes");
         }
      }
   }while(change==true)
   return arrayOfStrings2;
}

function buscoInterseccion(array1, array2) {
   // Recibes dos arreglos de números.
   // Debes retornar un nuevo arreglo en el que se guarden los elementos en común entre ambos arreglos.
   // [EJEMPLO]: [4,2,3] U [1,3,4] = [3,4].
   // Si no tienen elementos en común, retornar un arreglo vacío.
   // [PISTA]: los arreglos no necesariamente tienen la misma longitud.
   // Tu código:
   var j,flag=true,array=[];
   for(var i=0;i<array1.length;i++){
      for(j=0;j<array.length;j++)
         if(array1[i]==array[j])
            flag=false;
      if(flag)   
         for(j=0;j<array2.length;j++)
            if(array1[i]==array2[j]){
               array.push(array2[j]);
               j=array2.length;
            }
      flag=true;
   }
   return array;
}

/*⚠️ NO MODIFIQUES NADA DEBAJO DE ESTO ⚠️*/
module.exports = {
   deObjetoAarray,
   numberOfCharacters,
   capToFront,
   asAmirror,
   capicua,
   deleteAbc,
   sortArray,
   buscoInterseccion,
};

/*No se puede:
Usar el método .forEach , .map , .reduce, filter
*/
//1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:

function miForEach(arreglo, callback){
		// cpompleta aqui
		for (var i = 0; i<arreglo.length; i ++){// se va recorriendo el arreglo
			callback(arreglo[i]);
		}
	}
	miForEach([1,2,3], function(item){
		console.log(item);
	});

//2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
var numeros = [5,6,7,8,9,10,11]
var nuevaLista = []

for (var i = 0; i < numeros.length; i ++){
  nuevaLista[i] = numeros[i] * numeros[i]
}
console.log(nuevaLista);
// como lo resuelven en clase
function map (arreglo, callback){
	var newArray = [];
	for(var i = 0; i<arreglo.length; i++){
		newArray.push(callback(arreglo[i]));
	}
	return newArray;
}
map([1,2,3],function(item){
	return +2;
});

//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:

function miFilter(arreglo, callback){// tiene un arreglo para meter los datos  y callbackes la funcion que puede variar
   var newArray = [];
	 for (var i = 0; i<arreglo.length; i++){//esto hace un recorrido
		 if(callback(arreglo[i])== true) {
			 newArray.push(arreglo[i]);
		 }
	 }
	 return newArray;
	}

miFilter([1,2,3,4], function(item){
	return item <= 2 ;
})

//4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
//function miReduce(arreglo, reduce){}
var numeros = [1,2,3]
var total = 0
for(var i = 0; i < numeros.length; i ++){
  total += numeros[i]
}
console.log(total);

/* resuelto en clase
function miReduce(arreglo, callback, inicializador){
	var acumulador = inicializador;
	for (var i = 0; i < arreglo.length; i ++){
		acumulador = callback(arreglo[i],acumulador);
	}
	return acumulador;

}
miReduce([1,2,3], function(item, acumulador){
	return acumulador + item;
},0); */

/*Bonus:
1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:*/
function miSort(arreglo, callback){

}

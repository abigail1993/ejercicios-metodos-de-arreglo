/*No se puede:
Usar el método .forEach , .map , .reduce, filter
*/
//1 ) Crea tu propia función forEach que funcione igual a Array.forEach. Algo asi:
function miForEach(arreglo, callback){
		// cpompleta aqui
	}

	miForEach([1,2,3], function(){})

//2 ) Crea tu propia función map que funcione igual a Array.map. Algo asi:
var numeros = [5,6,7,8,9,10,11]
var nuevaLista = []

for (var i = 0; i < numeros.length; i ++){
  nuevaLista[i] = numeros[i] * numeros[i]
}
console.log(nuevaLista);

//3 ) Crea tu propia función filter que funcione igual a Array.filter. Algo asi:

function miFilter(arreglo, filter){

	}


//4 ) Crea tu propia función reduce que funcione igual a Array.reduce. Algo asi:
//function miReduce(arreglo, reduce){}
var numeros = [1,2,3]
var total = 0
for(var i = 0; i < numeros.length; i ++){
  total += numeros[i]
}
console.log(total);
/*Bonus:
1 ) Crea tu propia función sort que funcione igual a Array.sort. Algo asi:*/
function miSort(arreglo, callback){

}

var minhaVar = 'minha variavel'

function minhaFunc(x, y) {
	return x + y;
}

let num = 2;
const PI = 3.14;
// es6-features.org

var numeros = [1, 2, 3];
numeros.map(function(valor){
	return valor * 2;
});

//Sem corpo
numeros.map(valor => valor * 2);

//Com corpo
numeros.map(valor => {
	return valor * 2;
});

//Babel -> Transpilador TS


class Matematica {
	soma(x, y) {
		return x + y;
	}
}

var n1: any = 'abc';
n1 = 4;
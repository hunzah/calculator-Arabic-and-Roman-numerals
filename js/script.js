const digits ={
	I:1,
	IV:4,
	V:5,
	IX:9,
	X:10,
	XL:40,
	L:50,
	XC:90,
	C:100
};
function romanToArab (string){
	return string.toUpperCase().split('')
		.reduce((acc,curr,i,arr) =>{
			const [a,b] = [
				digits[arr[i]],
				digits[arr[i+1]]
			];
			if (b>a){
				return acc = acc - a;
			}
			else {
				return acc = acc + a;
			}
		}, 0);
}

function arabToRoman (string) {
	if (string < 1) return '';
	let result = '';
	const keys = Object.keys(digits).reverse();
	for (let item of keys)    //C,XC,L,XL,X,IX,V,IV,I
		while (string >= digits[item]) {  //34
			result += item;           //C,XC,L,XL,X,IX,V,IV,I  
			string -= digits[item];    //34-10-10-10-4
		}
	return result;
}




function calculator(string) {
	let letter = [];
	string = string.replace(/[^IVXLC\d-+*\/]/gi, (ch) => { debugger;
		if (ch !== ' ') letter.push(ch); debugger;
		return ''; debugger;
	});
	if (letter.length > 0)
		throw Error('Недопустимые символы, введено это:' + letter);debugger;


	let vars = string.split(/[+\-*\/]/g);
	if (vars.length !== 2) throw Error('Должно быть два операнда');debugger;


	const isRome = /[IVXLCDMZ]/i;
	const r = vars.reduce((s, v) => s + isRome.test(v), 0);
	if (r === 1) throw Error('должны быть арабские или римские цифры');
	else if (r === 2)
  
		vars = vars.map((v) => romanToArab(v));debugger;
	if (vars.some((v) => v < 1 || v > 10)) throw Error('Только числа от 1 до 10');debugger;
	let acr = string.match(/[+\-*\/]/)[0];
	let result = Math.floor(eval(vars.join(acr)));debugger;
	console.log(result);
	return r === 0 ? result.toLocaleString() : arabToRoman(result);debugger;
}







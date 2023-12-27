// "use strict"
// let num1 = 1; 
// let num2 = 2; 
// console.log(num1 + num2);

// let a = 1; 
// let b = 2; 
// console.log(a + b);

// let num = '123';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]); 
// console.log(sum);

// let num = 123; 
// let newNum = String(num);
// console.log(newNum[0]);

// let a = 0; 
// console.log(++a);

// let num = 123; 
// let newNum = String(num);
// console.log(newNum.length);

// let hour = 60 * 60; 
// let day = 24 * minute;
// console.log(day);

// let num = 123;
//  let str = String(num); 
// console.log(str.length);

// let num = 123; 
// let last = num % 10; 
// console.log(last);

// let num = 123; 
// let str = String(num); 
// console.log(str.length);

// let a = '123'; 
// let b = '456'; 
// let s = Number(a) + Number(b); 
// console.log(s);

// let aaa = 1; 
// let bbb = 2; 
// let ccc = 3; 
// console.log(aaa + bbb + ccc);

// let num = 675843; 
// let str = String(num); 
// let newStr = str.length;
// console.log(newStr);
// console.log(str[newStr-1]);

// let hour = 60 * 60;
// let day = 24 * hour;
// let month = day * 30;
// console.log(month);

// let hour = 60 * 60;
// let day = 24 * hour;
// let month = day * 30;
// let year = month * 12;
// console.log(year);

// let bite = 1;
// let kB = bite * 1024;
// let mB = kB * 1024;
// let gB = (mB * 1024) * 10;
// console.log(gB);

// let r = 10;
// const pi = 3.14;
// let s = pi * r ** 2;
// console.log(s);

// let tc = prompt("Write cl meaning...");
// const fr = (tc * 9/5) + 32;
// document.write(`<h1> Meaning on FR ${fr} </h1>`); 

// let fR = prompt("Write FR meaning...");
//  const cl = (fR - 32) * 5/9;
// document.write(`<h1> Meaning on cl ${cl} </h1>`); 

// let arr = [
// function() {return 1},
// function() {return 2},
// function() {return 3},
// ];
// let first = arr[0]();
// let second = arr[1]();
// let third = arr[2]();
// console.log(first + second + third);

// let arr = [
// function() {return 1},
// function() {return 2},
// function() {return 3},
// ];

// for(let func of arr) {
// console.log(func())
// }

// let obj = {
// 	func1: function() {console.log(1)},
// 	func2: function() {console.log(2)},
// 	func3: function() {console.log(3)},
// }
// obj.func1();

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// }
// console.log(obj.func1() + obj.func2() + obj.func3());

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// }
// for (let elem in obj) {
// 	console.log(obj[elem]());
// }

// let math = {
// 	square: function(num) {return num * num},
// 	cube: function(num) {return num * num * num},
// };
// console.log(math.square(2));
// console.log(math.cube(2));

// let math = {
// 	sum(arr){
// 		return arr.reduce((sum,elem) => sum +elem,0);
// 	},
// 	square(arr){
// 		return arr.reduce((sum, elem) => sum + elem**2,0);
// 	},
// 	cube(arr){
// 		return arr.reduce((sum, elem) => sum + elem **3,0);
// 	}

// }

// console.log(math.sum([1,2,3,4,5]));
// console.log(math.square([1,2,3,4,5]));
// console.log(math.cube([1,2,3,4,5]));

/* Example for method reduce which use for array
let arr = [1, 2, 3, 4, 5, 6];

let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);

*/

//test(1,2);//first version of write

// test(						//second version of write
// 	function(){
// 	return 1;
// },
// 	function(){
// 	return 2;
// });

// function test(func1,func2){
// 	console.log(func1()+func2());

// }

// function test(parm1, parm2, parm3){
// 	console.log(parm1() + parm2() + parm3());
// }

// test(
// 	function() {return 1;},
// 	function() {return 2;},
// 	function() {return 3;}
// 	);

// let get1 =function() {
// 	return 1;
// }
// let get2 =function() {
// 	return 2;
// }

// test(get1, get2);

// function test(func1, func2) {
// 	console.log(func1() + func2());
// }

// function parm1() {return 1};
// function parm2() {return 2};
// function parm3() {return 3};

// test(parm1, parm2, parm3);

// function test(parm1, parm2, parm3) {
// 	console.log(parm1() + parm2() + parm3());
// }

// let parm1 = function() {return 1};
// let parm2 = function() {return 2};
// let parm3 = function() {return 3};

// test(parm1, parm2, parm3);

// function test(parm1, parm2, parm3) {
// 	console.log(parm1() + parm2() + parm3());
// }

// function test(func) {
// 	console.log(func(3));
// }
// test (
// 	function(num) {
// 		return num * num;
// 	}
// 	);


// let test = function(func) {
// 	console.log(func(3));
// }
// test (
// 	function(num) {
// 		return num ** 3;
// 	}
// 	);

// function test (func) {
// 	console.log(func(3));
// }

// let func = function(func) {
// 		return func ** 3;
// 	}

// 	test(func);

// function newOne (parm1, parm2) {
// 	alert(parm1(3) + parm2(2))
// }
// newOne(parm1, parm2);

// function parm1(num){
// 	return num;
// }
// function parm2(num){
// 	return num;
// }


// function test(num, func) {
// 	console.log(func(num));
// }
// test(2, function(num) {
// 	return num * num;
// });

// function test(num, func) {
// 	console.log(func(num));
// }

// test(2, function(num) {
// 	return num * num;
// })

// test(2, function(num) {
// 	return num * num * num;
// });

// function test(num, func1, func2){
// 	return func1(num) + func2(num);
// }

// console.log(test(3,
// function (num){
// 	return num ** 2;
// 	},

// function (num){
// 	return num ** 3;
// }
// ));

// function test(arr, func) {
// 	for(let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test(
// 	[1,2,3],
// 	function(num) {return num * num;}
// 	);
// 	console.log(result);

// function test(arr){
// 	for(let i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i] ** 3;
// 	}
// 	return arr;
// }
// let result = test(
// 	[2, 3, 4],
// 	);
// console.log(result);

// let test = function() {
// 	console.log('!');
// };
// test();


// let test = function func() {
// 	console.log('!');
// };
// test();

// let test = function func() {
// 	console.log('!');
// };
// test();
// func();

// let test = function func() {
// 	console.log(func);
// };
// test();

// let test = function func() {
// 	console.log('!');
// 	func();
// };
// test();

// let test = function func() {
// 	console.log('!');
// 	test();
// };
// test();

// function func(num1, num2){
// 	return num1 * num2 + num1 + num2;
// }
// console.log(func(2, 4))

// function square(num) {
// 	return num * num;
// }
// function func(num1, num2) {
// 	return square(num1) + square(num2);
// }
// console.log(func(2,3));

// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
// 	return square(num1) + square(num2);
// }
// console.log(func(2, 3));

// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
// 	return square(num1) + square(num2);
// 	console.log(square(2));
// }
// console.log(func(3, 6));

// function func(num1, num2){
// 	function square(num1){ return num1 ** 2; }
// 	function cube(num2){ return num2 ** 3; }
// 	return square(num1) + cube(num2);
// }
// console.log(func(2, 4));

/*
let str = 'Happy new Year!';
let str2='';
for(let i=str.length-1; i>=0; i--){
	if(str[i]==str[4] || str[i] ==str[13]){
		str2+=str[i].toUpperCase();
	} else if(str[i]==str[i].toUpperCase()){
		str2+=str[i].toLowerCase();
	}else{
		str2+= str[i];
	}

}
console.log(str2);
*/

// let arr = ['Jhon', 'Smit', 'development', 'programmer', 2000];

// let [name, lastName, title, occupation, year] = arr;

// console.log(lastName);
// console.log(name);
// console.log(year);

// let arr = ['Jhon', 'Smit', 'development', 'programmer', 2000];
// let [name, lastName, title, occupation, year] = arr;
// console.log(occupation)


// let arr = [2025, 12];
// let [year, month, day] = arr;
// console.log(year);
// console.log(month);
// console.log(day);

// let arr = [2025, 12, 31, 23, 59, 59];
// let [year, month, day, ...time] = arr;

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(time);

// let arr = ['Jhon', 'Smit', 'development', 'programmer', 2000];

// let [name, lastName, ...info] = arr;
// console.log(name);
// console.log(info);

// let arr = [2025, 12];
// let [year, month, day = 1] = arr;

// console.log(year);
// console.log(month);
// console.log(day);

// let arr = ['Jhon', 'Smit', 'development', 'programmer'];
// let [name, lastName, department, position = 'trainee'] = arr;
// console.log(lastName);
// console.log(position);

// function func() {
// 	return (new Date).getDate();
// }
// let arr = [];
// let [year = 2022, month = 11, day = func()] = arr;

// console.log(year);
// console.log(month);
// console.log(day);

// let arr = [2025, 12, 31];
// let year;
// let month;
// let day;

// [year, month, day] = arr;


// let arr = [2025, 12, 31];
// let year;
// let [year, month, day] = arr;
// console.log(arr);

// let obj = {
// 	year: 2025,
// 	month: 12,
// 	day: 31,
// };
// let {year, month, day} = obj;
// console.log(year);
// console.log(month);
// console.log(day);

// let options = {
// 	color: 'red',
// 	width: 400,
// 	heigth: 500,
// };

// let {color, width, heigth} = options;
// console.log(color);
// console.log(width);
// console.log(heigth);

// let obj = {
// 	year: 2025,
// 	month: 12,
// 	day: 31,
// };

// let {year: y, month: m, day: d} = obj;
// console.log(y);
// console.log(m);
// console.log(d);

// let options = {
// 	color: 'red',
// 	width: 400,
// 	height: 500,
// };
//  let {color: c, width: w, height: h} = options;

// console.log(c);
// console.log(w);
// console.log(h);

// let obj = {
// 	month: 12,
// 	day: 31
// };
// let {year = 2025, month, day} = obj;

// console.log(year);
// console.log(month);
// console.log(day);

// let options = {
// 	width: 400,
// 	heigth: 500,
// };
// let {width, heigth, color = 'black'} = options;
// console.log(width);
// console.log(heigth);
// console.log(color);

// let obj = {
// 	month: 12,
// 	day: 31,
// };
// let {year: y = 2025, month, day} = obj;

// console.log(y);
// console.log(month);
// console.log(day);

// let options = {
// 	width: 400,
// 	height: 500,
// };

// let {width, height, color = 'black'} = options;
// console.log(color);
// console.log(height);
// console.log(width);

// let obj = {
// 	year: 2025,
// 	month: 12,
// 	day: 31,
// };
// let year, month, day;
// console.log(obj)

// func ('str1', [2025, 12, 31], 'str2');
// function func(param1, [year, month, day], param2) {
// 	console.log(param1);
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// 	console.log(param2);
// }

// func ([2025, 12, 31], [2026, 11, 30]);
// function func([year1, month1, day1], [year2, month2, day2]) {
// 	console.log(year1);
// 	console.log(month1);
// 	console.log(day1);

// 	console.log(year2);
// 	console.log(month2);
// 	console.log(day2);
// }

// func (['Jhon', 'Smit', 'development', 'programmer', 2000]);
// function func([name, surname, department, position, salary]) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// 	console.log(salary);
// }

// function square(num) {
// 	return num ** 2;
// }
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// let res = sum(square(2), square(3));
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// console.log(round(sqrt(2)));

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// // let res = sqrt(sum(2, 3, 4));
// // console.log(res);

// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(sqrt(sum(2, 3, 4)));
// console.log(res);

// function func(num) {
// 	return num ** 2;
// 	console.log('!');
// }
// let res = func(3);

// function func(num) {
// 	if (num >= 0) {
// 		return '+';
// 	} else {
// 		return'-';
// 	}
// }
// console.log(func(3));
// console.log(func(-3));

// function func(num) {
// 	return num;
// 	let res = num ** 2;
// 	return res;
// }
// console.log(func(3));

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
// 	return num ** 2;
// }
// console.log(func(10));
// console.log(func(-5));

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
// let res = func();
// console.log(res);

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// let res = func();
// console.log(res);

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// let res = func();
// console.log(res);

// function func(num) {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;

// 	}
// 	return sum;
// }
// console.log(func(5));

// function func(arr) {
// 	let sum = 0;
// 	for(let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		if(sum >= 10) {
// 			return i + 1;
// 		}
// 	}
// }
// let res = func([1,2,3,4,5]);
// console.log(res);

// function func() {
// 	let sum = 0;
// 	let i = 1;
// 	while(true) {
// 		sum += i;
// 		if (sum >= 100) {
// 			return i;
// 		}
// 		i++;
// 	}
// }
// console.log(func());

// function func(num) {
// 	let result = 0;
// 	let i = 1;
// 	while(true) {
// 		result = num / 2;
// 		if (result < 10) {
// 			return i;
// 		}
// 		i++;
// 	}

// }
// console.log(func(9));


// function func(num) {
// 	let res;
// 	if(num >= 0) {
// 		res = Math.sqrt(num);
// 	} else {
// 		res = 0;
// 	}
// 	return res;
// }
// console.log(func(3));

// function func(num) {
// 	if (num >= 0) {
// 		return Math.sqrt(num);
// 	} else {
// 		return 0;
// 	}
// }
// console.log(func(3));

// function func(num1, num2) {
// 	if(num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }
// console.log(func(3, 4));

// function isPositive(arr) {
// 	let flag = true;
// 	for(let elem of arr) {
// 		if (elem < 0) {
// 			flag = false;		}
// 	}
// 	return flag;
// }
// console.log(isPositive([2, 4, -5, 7, 9]));

// function isPositive(arr) {
// 	for (let elem of arr) {
// 		if (elem < 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(isPositive([2, 5, 6, 8, 1]));

// function isEven(arr) {
// for (let elem of arr) {
// 	if (elem % 2 === 0) {
// 		return 'Even';
// 	}
// 	return 'Odd';
// }
// }
// console.log(isEven([3, 5, 6, 7, 1, 3, 0]));

// function isOdd(arr) {
// 	for (let elem of arr) {
// 		if (elem % 2 != 0) {
// 			return 'Odd'
// 		}
// 		return 'Even'
// 	}
// }
// console.log(isOdd([3, 5, 7, 2, 0]));

// function func(arr) {
// 	let res;

// 	for(let i = 0; i < arr.length; i++) {

// 		if (arr[i] == arr[i+1]) {
// 			return 'Yes it is'
// 		} else {
// 			res = 'No it is not'
// 		}
// 	} return res;
// }
// console.log(func([6, 3, 6, 8, 3, 5, 3,4,  4, 9, 8]))

// function func(a, b) {
// 	if (a > b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(func(7, 6));

// function func(a, b) {
// 	return a > b;
// }
// console.log(func(0, 1));

// function func(a,b) {
// 	return a == b;
// }
// console.log(func(3, 3));

// function func(num) {
// 	return num >= 0;
// } console.log(func(7));

// function func1(num) {
// 	return num;
// }
// function func2(num1) {
// 	return num1;
// }

// console.log(func1(3) + func2(5));

// function func(a, b) {
// 	return a == b;
// }
// console.log(func(3, 4));

// function func(a, b) {
// 	return (a != b)
// 	}
// 	console.log(func(3, 5));

// function func(a, b) {
// 	return (a + b >= 10);
// }
// console.log(func(6, 9));

// function func(num) {
// 	return (num >= 0);
// }
// console.log(func(6));

// function Mid(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res / arr.length;
// }
// console.log(Mid([1, 4, 7, 9, 56]));









// let num = +prompt('enter numbers beetween 0 - 999');
// if (num > 0 && num <= 999) {
// 	let a = StringNum(num);
// 	console.log('your number: ' + num + ' - ' + a);
// } else {
// 	console.log('wrong number');
// };
// function StringNum(num) {
// 		 let once = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];
// 		 let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fithteen', 'sixteen', 'seventeen', 'eigthteen', 'nineteen'];
// 		 let hundreds = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eigthy', 'ninety'];
// 		 let thousand = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eigth hundred', 'nine hundred']
// 		let first = Math.trunc(num / 100);
// 		let second = Math.trunc(num / 10 % 10);
// 		let third = Math.trunc(num % 10);

// 		if(num > 10 && num < 20) {
// 			return tens[num - 11];
// 		}
// 		if(first == 0 && second == 0) {
// 			return once[third -1];
// 		}
// 		if(first == 0 && third == 0) {
// 			return hundreds[second -1];
// 		}
// 		if(second == 0 && third == 0) {

// 			return thousand[first -1];
// 		}

// 		if(second == 0) {
// 			return thousand[first -1] + ' ' + once[third -1] ;
// 		}
// 		if(first == 0) {
// 			return hundreds[second -1] + ' ' + once[third - 1] ;
// 		}
// 		if(third == 0) {
// 			return thousand[first -1] + ' ' + hundreds[second -1];
// 		}

// 			return thousand[first -1] + ' ' + hundreds[second -1] + ' ' + once[third -1];
// };


// function translate(str) {
// 	let result = '';
// 	let converter = {
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
// 		'э': 'e',    'ю': 'yu',   'я': 'ya',

// 		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
// 		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
// 		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
// 		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
// 		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
// 		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
// 		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// 	};
// 	for (let i = 0; i < str.length; i++) {
// 		if (converter[str[i]] == undefined) {
// 			result += str[i];
// 		} else {
// 			result += converter[str[i]];
// 		}
// 	} return result;
// }
// console.log(translate('Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит'));
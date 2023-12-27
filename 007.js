// "use strict"
// let arr = [12, 13, 4, 5, 6, 7];
// alert(arr); 

// let arr = ['papa', 'mama', 'deti'];
// alert(arr);
// console.log(arr);

// let arr = [1, 2, 3];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = [1, 2, 3];
// alert(arr[0] + arr[1] + arr[2]); 

// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + arr[1] + arr[2] + arr[3]);

// let arr = [1, 3, 5, 7, 9, 'aga'];
// alert(arr.length);

// let arr = [1, 3, 5, 7, 9, 'aga'];
// alert(arr[arr.length-1]);

// let arr = ['hi', 'world'];
// alert(arr[0] + ' ' + arr[1]);

// let arr = ['hi', 'world', '!'];
// let text = arr[0] + ', ' + arr[1] +  arr[2];
// alert(text)

// let arr = ['hi', 'world', '!'];
// arr[0] = 'bye';
// alert(arr[0] + ' ' + arr[1] + arr[2]);

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [];
// arr1[0] = 1;
// arr1[1] = 2;
// arr1[2] = 3;
// arr1[3] = 4;
// arr1[4] = 5;
// alert(arr);
// alert('------');
// alert(arr1);

// let arr = ['a', 'b', 'c'];
// alert(arr);

// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = ['a', 'b', 'c', 'd']
// alert(arr[0] + arr[1]);
// alert(arr[2] + arr[3]);

// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1];
// let result1 = arr[2] * arr[3];
// let result2 = result + result1;
// alert(result2);

// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

// let arr = [1, 2, 3];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// alert(arr);

// let arr = [1, 2, 3];
// ++arr[0];
// ++arr[1];
// ++arr[2];
// alert(arr);

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// alert(arr);

// let arr = ['hi', 2, 'bye', 7];
// alert(arr.length);

// let arr = ['hi', 2, 'bye', 7];
// alert(arr[arr.length-1]);

// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

// let arr = ['new', 'arr', 'is', 'ready'];
// arr[arr.length] = 3;
// alert(arr); //to add new 

// let arr = [2, 4, 6, 8, 10];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// arr[3] = arr[3] + 3;
// arr[4] += 3;
// alert(arr);

// let arr = [2, 3, 4, 5];
// ++arr[0];
// ++arr[1];
// ++arr[2];
// ++arr[3];
// alert(arr);

// let arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr[2] = 'c';
// alert(arr);

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// alert(arr);

// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// alert(arr.length);

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// alert(arr);

// let arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);

// let arr = ['a', 'b', 'c'];
// let key = 2;
// alert(arr[key]);

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// let newKey = arr[key1] + arr[key2];
// alert(newKey);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[0];
// delete arr[3];
// alert(arr);

// let arr = [1, 2, 3, 4, 5]; 
// console.log(arr[arr.length -1]);

// let arr = [1, 2, 3, 4, 5]; 
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

// let arr = [1, 2, 3, 4, 5];
//  console.log(arr.length);

// let arr = [1, 2, 3, 4, 5, 6]; 
// console.log(arr.length);

// function func(){
// 	let num = 0;
// 	return function(){
// 		console.log(num);
// 		num++;
// 	};
// };
// func()();
// func()();
// func()();

// function func(){
// 	let num = 0;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// let test = func;
// console.log(test);
// console.log(func);
// test()();
// test()();
// test()();

// let counter = 0;
// function test(){
// 	return function (){
// 		console.log(counter);
// 		counter++;
// 	};
// };
// let func = test;
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// function test(){
// 	let counter = 0;
// 	return function(){
// 		return function(){
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test()();
// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();

// function test(){
// 	let counter = 0;
// 	return function (){
// 		return function (){
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test();

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// !function(){
// 	console.log('!');
// }();

// let result = function() {
// 	return '!';
// }();
// console.log(result);

// let result = function() {
// 	return '!';
// };
// console.log(result());

// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result);

// let result = (function() {
// 	return '!';
// }());
// console.log(result);

// (function(str) {
// 	console.log(str);
// })('!!!');

// (function (num1, num2) {
// 	console.log(num1 + num2);
// }) (1 ,2);

// (function(){
// return function(){
// alert('!');
// };
// })()();

// (function(num1){
// return function (num2) {
// 	return console.log(num1 + num2);
// };
// })(1)(2);

// (function(num1){
// 	return function (num2){
// 		return function (num3){
// 			return console.log(num1 + num2 + num3);
// 		};
// 	};
// })(1)(2)(3);

// let result = 1
// +function() {
// 	return 2;
// }();
// console.log(result);

// let result = 1;
// + function(){
// 	return 2;
// }();
// console.log(result);

// let str = 'str';
// (function() {
// 	console.log(1);
// })();

// let func = (function (){
// 	let num = 1;
// 	return function(){
// 		console.log(num);
// 		num++
// 	}
// })();
// func();
// func();


// let func = (function (){
// 	let num = 1;
// 	return function(){
// 		console.log(num);
// 		if(num >= 5){
// 			num = 0;
// 		} else {
// 			num++
// 		}
// 	}
// })();
// func();
// func();
// func();
// func();
// func();
// func();

// function test() {
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// let func1 = test();
// func1();
// func1();

// let func2 = test();
// func2();
// func2();


// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 2;
// });
// console.log(result);

// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 3;
// });
// console.log(result);

// let result = each([1, 3, 5, 6, 4, 3], function(num) {
// 	return num * 2;
// 	});
// 	console.log(result);

// let result1 = each(['are', 'not', 'nice'], function(str) {
// 	return str.split('').reverse().join('');
// });
// console.log(result1);

// let result1 = each(['it', 'is', 'so', 'good'], function (str) {
// 	return str[0].toUpperCase() + str.slice(1);
// })
// console.log(result1);

// function square(num) {
// 	return num * num;
// }

// let result = each([1, 2, 3, 4, 5], square);
// console.log(result);

// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }

// let result = each([2, 4, 6, 8, 5, 6, 45, 87], cube)

// function cube(num) {
// 	return num ** 3;
// }
// console.log(result);

// let func1 = function(num1, num2) {
// 	let result = num1 * num2;
// 	return result;
// }

// let func2 = (num1, num2) => {
// 	let result = num1 * num2;
// 	return result;
// }

// let func1 = function (num1, num2) {
// 	return num1 * num2
// }

// let func2 = (num1, num2) => num1 * num2;

// let func1 = function(num) {
// 	return num * num;
// }

// let func2 = num => num * num;

// let func1 = function() {
// 	console.log('!!!');
// }

// let func2 = () => console.log('!!!');
// func2();

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if(elem % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	return elem % 2 == 0;
// });

// let result = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0);

// function func(arr) {
// 	console.log(arr.shift());
// 	console.log(arr);
// 	console.log(arr.shift());
// 	console.log(arr);
// 	console.log(arr.shift());
// 	console.log(arr);
// }
// func([1, 2, 3]);

// function func(arr) {
// 	console.log(arr.shift(), arr);
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// func([1, 2, 3]);

// let arr = [1, 2, 3, 4, 5];
// function func() {
// 	console.log(arr.shift());
// 	if (arr.length != 0) {
// 		func();
// 	}
// }
// func()

// function getSum(arr) {
// 	let sum = arr.shift();
// 	if(arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
// 	return sum;
// }
// console.log(getSum([1, 2, 3]))
// ;

// let arr = [1, 2, 3, 4, 5];
// function getSum() {
// let sum = arr.shift();
// if(arr.length !== 0){
// 	sum += getSum();
// }
// return sum;
// }
// console.log(getSum());


// let arr = [
// 	1,
// 	[
// 		2, 7, 8
// 	],
// 	[
// 		3, 4, [5, [6, 7]]
// 	]
// 	];
// function func(arr) {
// 	for (let elem of arr) {
// 		console.log(elem);
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

//1
//[]
//[]

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {1: 7, m: {n: 8, o: 9}}}};
// function allOne(obj) {
// 	for (let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			allOne(obj[elem]);
// 		} else {
// 			console.log(obj[elem]);
// 		}
// 	}
// }
// allOne({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {1: 7, m: {n: 8, o: 9}}}});

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let sum = [];
// function allOne (arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			allOne(elem);
// 		} else {
// 			sum.push(elem);
// 		}
// 	}
// }
// allOne(arr);
// console.log(sum);

// function func(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += func(elem);
// 		} else {
// 			sum += elem;
// 		}
// 	}
// 	return sum;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// function allOne(obj) {
// 	let sum = 0;
// 	for(let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			sum += allOne(obj[elem])
// 		} else {
// 			sum += obj[elem];
// 		}
// 	}
// 	return sum;
// }
// console.log(allOne(obj));

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// function allOne(arr) {
// 	let str = '';
// 	for (let elem of arr) {
// 		if (typeof arr == 'object') {
// 			str += allOne(elem);
// 		} else {
// 			str += elem;
// 		}
// 	}
// 	return str;
// }
// console.log(allOne(arr));

// function func (arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i] + '!'
// 		}
// 	}
// 	return arr;
// }
// console.log([1, [2, 7, 8], [3, 4, [5, 6]]]);

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
// function Cube(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			Cube(elem)
// 		} else {
// 			console.log(elem);
// 			arr[elem] = elem ** 2
// 		}
// 	}
// }
// Cube(arr);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(elem) {
// 	console.log(elem);
// });

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(elem) {
// 	return elem * elem;
// });
// console.log(result);

// let arr = [3, 4, 5, 6, 7, 8];
// let result = arr.map(function(elem) {
// 	return Math.sqrt(elem);
// });
// console.log(result);

// let arr = ['Akiljan', 'Sabak', 'Uiretip', 'Jatyr'];
// let result = arr.map(function(elem) {
// 	return elem + '!'
// })
// console.log(result);

// let arr = ['Igor', 'Sabak', 'Uirenip', 'Jatyr'];
// let result = arr.map(function(elem) {
// 	return elem.split('').reverse().join('');
// })
// console.log(result);

// let arr = ['123', '456', '789'];
// let result = arr.map(function(elem) {
// 	return elem.split('').map(function(elem) {
// 		return Number(elem);
// 	})
// });
// console.log(result);


// let arr = ['123', '456', '789'];
// let result = arr.map(elem => elem.split('').map(Number));
// console.log(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = arr.map(function(elem, index) {
// 	return elem + index;
// });
// console.log(result);

// let arr = [2, 3, 4, 5, 6];
// let result = arr.map(function(elem, index) {
// 	return elem * index;
// })
// console.log(result);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });
// console.log(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem) {
// 	document.write(elem + '<br>');
// });

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem, index) {
// 	document.write(index + '.' + elem + '<br>');
// });

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem;
// });
// console.log(sum);

// let arr = [4, 5, 6, 7, 8];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem ** 2;
// });
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(elem => elem % 2 == 0);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.filter(elem => elem % 2 == 0));

// let arr = [-23, 45 ,67, -98, 2, 4];
// let result = arr.filter(function(elem) {
// 	if (elem > 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [1, -6, -7, -9, 0, 5, 8];
// let result = arr.filter(function(elem) {
// 	if (elem < 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [2, 4, 5, 78, 565, 34, 234, -98, -45, -4, 23];
// let result = arr.filter(function(elem) {
// 	if (elem > 0 && elem < 10) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = ['Akiljan', 'aga', 'magan', 'kunde', 'sabak', 'beredi'];
// let result = arr.filter(function(elem) {
// 	if (elem.length >= 5) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [4, 7, 43, 56, 987, -9, -1, 6];
// let result = arr.filter(function(elem, index) {
// 	if (elem * index < 30) {
// 		return elem;
// 	}
// });
// console.log(result);
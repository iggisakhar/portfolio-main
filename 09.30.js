"use strict"

// console.log(Math.pow(2, 10));

// console.log(Math.sqrt(245));

// let sum = 0;
// let arr = [4, 2, 5, 19, 13, 0, 10];
// for(let i = 0; i < arr.length; i++) {
// 	sum += Math.pow(arr[i],2)
// }
// console.log(Math.sqrt(sum));

// let sum = 379; 
// sum = Math.sqrt(sum);
// let doSot = sum.toFixed(2);
// let doDes = sum.toFixed(1);
// let doSel = sum.toFixed();
// console.log(sum);
// console.log(doSot);
// console.log(doDes);
// console.log(doSel);

// let sum = 587;
// sum = Math.sqrt(sum);
// let obj = {
// 	ceil: Math.ceil(sum),
// 	floor: Math.floor(sum)

// }
// console.log(obj);

// console.log(Math.max(1, 5, 10, 34, 100));
// console.log(Math.max(-1, 0, -20, -56, -100));
// console.log(Math.max());
// let arr = [1, 5, 10, 34, 100];
// let max = Math.max.apply(null, arr);
// console.log(max);

// console.log(Math.min(40, 20, 42, 100, 76));
// console.log(Math.min(-1, -100, -30, -25, 40));
// console.log(Math.min());

// let arr = [40, 20, 42, 100, 67];
// let min = Math.min.apply(null, arr);
// console.log(min);

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// function getRandomArbitary(min, max) {
// 	return Math.random() * (max - min) + min;
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(Math.random());

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(10, 100));

// console.log(Math.floor(Math.random()*100+1));

// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push(Math.floor(Math.random()*10+1));
// }
// console.log(arr);

// console.log(Math.abs(-3));
// console.log(Math.abs(3));

// let a = 9;
// let b = 8;
// console.log(Math.abs(b - a));

// let str = 'js';
// console.log(str.toUpperCase());

// let str = 'JS';
// console.log(str.toLowerCase());

// let str = 'Yazyk JavaScript';
// console.log(str.toUpperCase());

// let str = "YAZYK JAVASCRIPT";
// console.log(str.toLowerCase());

// let str = 'abcde';
// let sub = str.substr(0,3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(2);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(-3, 2);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(-3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(-1);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substring(1, 3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substring(1);
// console.log(sub);

// let str = 'abcbe';
// let sub = str.slice(1,3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.slice(1);
// console.log(sub);

// let str = 'abcde';
// let sub = str.slice(1, -2);
// console.log(sub);

// let str = 'Y uchu uchu JavaScript';
// console.log(str.indexOf('uchu'));

// let str = 'Y uchu uchu JavaScript';
// console.log(str.indexOf('uchu', 5));

// let str = 'Ya uchu uchu JavaScript';
// console.log(str.indexOf('uchu', 5));

// let str = 'Ya uchu JavaScript';
// console.log(str.indexOf('PHP', 5));

// let str = 'abcde';
// console.log(str.indexOf('c', 2));

// let str = 'apple';
// console.log(str.indexOf('l', 3));

// let name = 'Akiljan';
// console.log(name.indexOf('a', 0));

// let str = 'Camel';
// console.log(str.indexOf('http://', 0));

// let str = 'Hazelnut';
// console.log(str.indexOf('html', 0));

// let str = 'b..b..b';
// console.log(str.lastIndexOf('b', 1))

// let str = 'b..b..b';
// console.log(str.lastIndexOf('b', 5));

// let str = 'b..b..b';
// console.log(str.lastIndexOf('B'));

// let poem = 'be or not to be';
// console.log(poem.startsWith('b', 0))

// let poem = 'be or not to be';
// console.log(poem.endsWith('e'));

// let str = 'html-css-javascript';
// let arr = str.split('-');
// console.log(arr);

// let str = 'html-css-javascript';
// let arr = str.split('-', 2);
// console.log(arr);

// let str = 'abcde';
// let arr = str.split('');
// console.log(arr);

// let str = 'abcde';
// let arr = str.split('', 3);
// console.log(arr);

// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// let str = '123456789';
// let arr1 = str.split('');
// let arr2 = arr1.reverse();
// let result = arr2.join('');
// console.log(result);

// let str = '123456789';
// let result = str.split('').reverse().join('');
// console.log(result);

// let str = '12345';
// let arr = str.split('');
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
// 	sum += Number(arr[i]);
// };
// console.log(sum);

// let num = 12345;
// let str = String(num);
// let arr = str.split('');
// console.log(arr);

// let num = '1-2-3-4-5';
// let arr = num.split('-');
// console.log(arr);

// let num = '12345';
// let arr = num.split('');
// console.log(arr);

// let arr = [1, 2, 3];
// let str = arr.join('-');
// console.log(str);

// let arr = [1, 2, 3];
// let str = arr.join();
// console.log(str);

// let arr = [1, 2, 3];
// let str = arr.join('');
// console.log(str);

// let str = '123456789';
// let arr1 = str.split('');
// let arr2 = arr1.reverse();
// let result = arr2.join('');
// console.log(result);

// let str = '123456789';
// let result = str.split('').reverse().join('');
// console.log(result);

// let date = '2025-12-31';
// let result = date.split('-').reverse().join('.');
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.join('-');
// console.log(result);

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// let arr = [];
// for(let i = 1; i <= 9; i++) {
// 	arr.push(i)
// }
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let elem = arr.shift();
// console.log(elem);

// let arr = ['1', '2', '3', '4', '5', '6'];
// let result = [];
// while (arr.length > 0) {
// 	let first = arr.shift();
// 	let last = arr.pop();
// 	let str = first + last;
// 	result.push(str);
// }
// result = result.join('-');
// console.log(result);

// let arr = [1, 2, 3];
// let elem = arr.shift();
// console.log(elem);

// let arr = [1, 2, 3];
// let elem = arr.pop();
// console.log(elem);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(0, 2);
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1);
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1);
// console.log(sub);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(0, 3);
// console.log(sub);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(3);
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 3);
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 1, '1', '2', '3');
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(-2, 1);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));

// let arr = [1, 2, 3, 4, 5];
// let result = arr.includes(1);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.includes(6);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.includes(3);
// console.log(result);

// let str = 'london';
// let result = str.slice(0,1).toUpperCase() + str.slice(1);
// console.log(result);

// let capital = 'roma';
// let result = capital.slice(0, 3) + capital.slice(3).toUpperCase();
// console.log(result);

// let capital = 'Brazil';
// let result = capital.slice(0, 2).toUpperCase() + capital.slice(2);
// console.log(result);

// let capital = 'London';
// let result = capital.slice(0, 2).toLowerCase() + capital.slice(2);
// console.log(result);

// let str = 'word1 word2 word3';
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
// }
// let result = words.join(' ');
// console.log(result);

// let str = 'var_test_text';
// let word=str.split('_');
// for(let i=0;i<word.length;i++){
// 	word[i] = word[i].slice(0,1).toUpperCase() + word[i].slice(1);		
// }
// let result = word.join('');
// console.log(result);

// let str = 'VarTestText'; 
// let newStr = str.split('');
// for(let i = 0; i < newStr.length; i++) {
// 	newStr[i] = newStr[i].slice(0,1).toLowerCase() + newStr[i].slice(1);
// }
// let result = newStr.join('');
// console.log(result);

// let str = '12345';
// let result = str.split('').reverse().join('');
// console.log(result);

// let name = 'Adele';
// let result = name.split('').reverse().join('');
// console.log(result);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for(let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let prod = 1;
// for (let digit of arr) {
// 	prod *= Number(digit);
// }
// console.log(prod);

// function name() {
// 	console.log('Igor');
// }
// name();

// function number () {
// 	for (let i = 1; i <= 100; i++) {
// 		console.log(i);
// 	}
// }
// number();

// function func(num) {
// 	console.log(num ** 2);
// }
// func(2);
// func(3);

// function func(num) {
// 	console.log(num ** 3)
// }
// func(5);

// function func(num) {
// 	if (num >= 0) {
// 		console.log('+');
// 	} else {
// 		console.log('-');
// 	}
// }
// func(0);

// function func(num1, num2) {
// 	console.log(num1 + num2);
// }
// func(1, 2);

// function sum(num1, num2, num3) {
// 	console.log(num1 + num2 + num3);
// }
// sum(1, 3, 6);

// function func(num) {
// 	console.log(num ** 2);
// }
// let param = 2;
// func(param);

// function func(num1, num2, num3) {
// 	console.log(num1 + num2 + num3)
// }
// let param1 = 1;
// let param2 = 2; 
// let param3 = 3;
// func(param1, param2, param3);

// function func (num = 0) { 
// console.log(num * 2);
// }
// func(2);

// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3);
// func(3);
// func();

// function func(num) {
// 	console.log(num ** 2);
// }
// let res = func(3);

// function func(num) {
// 	return num ** 2;
// }
// let res = func(3);
// res = res + 1;
// console.log(res);

// function func(num) {
// 	return num ** 3;
// }
// let res = func(3)
// console.log(res);

// function func(num) {
// 	return Math.sqrt(num);
// }
// console.log(func(3) + func(4));

// function func(num) {
// 	return num ** 2;
// }
// let res = func(func(2));
// console.log(res);

// function square(num) {
// 	return num ** 2;
// }
// function cube(num) {
// 	return num ** 3;
// }
// let res = cube(square(2));
// console.log(res);

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

// function relationOfArr(arr1, arr2) {
// 	let res1 = 0;
// 	for (let elem of arr1) {
// 		res1 += elem;
// 	}
// 	let res2 = 0;
// 	for (let elem of arr2) {
// 		res2 += elem;
//  	}
//  	return res1 / res2;
// }
// console.log(relationOfArr([2, 4, 6, 8, 10], [3, 5, 7, 11]));

// function getMultiple(arr) {
// 	let res = 1;
// 	for (let elem of arr) {
// 		res *= elem;
// 	}
// 	return res;
// }
// console.log(getMultiple([2, 4, 6, 8, 12, 14]));

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	} return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	} return res;

// } console.log(func(arr));

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log(func1() + func2());


// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }
// let sum1 = sum([1, 2, 3, 4, 5]);
// console.log(sum1);


// function sum(arr) {
// 	let sum = 0;
// 	for(let elem of arr) {
// 		sum += elem;
// 	} return sum;
// }
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);


// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// } console.log(add(6))

// function sum(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }
// let arr = [1, 2, 3, 4, 5];
// let sum1 = sum(arr);
// console.log(sum1);

// let num = 12345;


// function getDigitsSum(num) {
// 	let arr = String(num).split('');
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	return sum;
// }

// let res = getDigitsSum(num);
// console.log(res);


// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// } console.log(isPrime(13));


// let sum = 0;
// function plus(arr) {
// 	for (let elem of arr) {
// 		sum += elem;
// 	} return sum;
// } 
// console.log(plus([1, 3, 54, 6, 8]));

// function divide(num) {
// 	let arr = [];
// 	for (let i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i);
// 		}
// 	}	
// 	return arr;	
// }
// console.log(divide(9));

// function func(str) {
// 	let arr = [];
// 	for (let i = 0; i < str.length; i++) {
// 	arr.push(str[i]);
// 	} return arr;
// }
// console.log(func('Akiljan'));

// function func(str) {
// 	let arr = [];
// 	for (let i = 0; i < str.length; i ++) {
// 		arr.push(str[i]);
// 	} return arr.reverse();
// }
// console.log(func('Akiljan'));

// function func(str) {
// 	let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// 	return result;
// } 
// console.log(func('nelly ville'));

// function func(str) {
// 	let words = str.split(' ');
// 	for (let i = 0; i < words.length; i++) {
// 		words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// 	}
// 	let result = words.join(' ');
// 	return result;
// } 
// console.log(func('nelly ville'));

// function numbers(num) {
// 	let arr = [];
// 	for (let i = 1; i <= num; i++) {
// 		arr.push(i)
// 	} return arr;
// }
// console.log(numbers(9));

// function func() {
// 	let arr = [2, 4, 6, 7, 8, 1, 4, 0];
// 	return arr[Math.round(Math.random() * (arr.length -1))];
// }
// console.log(func());

// function simplenum(num) {
// 	if (num > 1) {
// 		let sum = 0;
	
// 		for (let i = 1; i <= num; i++) {
// 			if (num % i == 0) {
// 				sum++;
// 			}
// 		}
// 		if (sum > 2) {
// 			return 'not a simple';
// 		} else {
// 			return 'simple';
// 		}	
// 	} else {
// 		return 'not a correct number';
// 	}
// } 
// let number = (Math.round(Math.random() * 100 + 1));
// console.log(number + ' - ' + simplenum(number));

// function isFriendly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1))
// 	let sum2 = getSum(getOwnDivisors(num2))
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isFriendly(220, 284));

// function getOwnDivisors(num) {
// 	let result = [];
// for (let i = 1; i < num; i++) {
// 	if (num % i == 0) {
// 		result.push(i);
// 	} 
// } return result;
// }

// function getSum(num) {
// 	let sum = 0; 
// 	for (let elem of num) {
// 		sum += elem;
// 	} return sum;
// }


// function isFriendly(num1, num2) {
// let sum1 = getSum(getOwnDivisors(num1))
// let sum2 = getSum(getOwnDivisors(num2))

// if (sum1 == num2 && sum2 == num1) {
// return true
// } else {
// return false
// }
// }

// function getOwnDivisors(num) {
// let arr = []
// for (let i = 1; i < num ; i++) {
// if (num % i == 0) {
// arr.push(i)
// }
// }
// return arr
// }

// function getSum(arr) {
// let sum = 0
// for (let arrElement of arr) {
// sum += arrElement
// }
// return sum
// }

// function getFriendly(numb1, numb2) {
// let arr = []
// for (let i = numb1; i < numb2; i++) {
// for (let j = i + 1 ; j < numb2; j++) {
// if (isFriendly(i, j)) {
// arr.push([i,j])
// }
// }
// }
// return arr
// }

// console.log(getFriendly(1, 3000))

// function isPerfect (num) {
// 	let arr = [];
// 	for (let i = 0; i < num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i);
// 		}
// 	} return arr;
// }
// console.log(isPerfect(28));

// function lucky () {
// 	let sum = 0; 
// 	for (let i = 1; i <= 999999; i++) {
// 		let number1 = Math.trunc(i / 100000);
// 		let number2 = Math.trunc((i / 10000) % 10);
// 		let number3 = Math.trunc((i / 1000) % 10 % 10);
// 		let number4 = Math.trunc((i / 100) % 10 % 10 % 10);
// 		let number5 = Math.trunc((i / 10) % 10 % 10 % 10 % 10);
// 		let number6 = Math.trunc((i / 1) % 10 % 10 % 10 % 10 % 10);
// 		if (number1 + number2 + number3 == number4 + number5 + number6) {
// 			sum++
// 			console.log(i)
// 		} 
// 	} return sum;
// }
// console.log(lucky());

// function getOwnDivisors(num) {
// 	let arr = []
// 	for (let i = 1; i < num ; i++) {
// 		if (num % i == 0) {
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// }
// function commonDivisors(num1, num2) {
// 	let arr = [];
// 	let arr1 = getOwnDivisors(num1);
// 	let arr2 = getOwnDivisors(num2);
// 	for (let elem of arr1) {
// 		for (let elem1 of arr2) {
// 			if (elem == elem1) {
// 				arr.push(elem);
// 			}
// 		}
// 	}
// 	return arr;
// } 
// console.log(commonDivisors(28, 24));

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



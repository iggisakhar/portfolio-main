// "use strict"
// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj[3]);

// let week = {1: 'Monday', 
//             2: 'Tuesday',
//             3: 'Wednesday',
//             4: 'Thursday',
//             5: 'Friday',
//             6: 'Saturday',
//             7: 'Sunday'}
// console.log(week);

// let year = {1: 'January',
//             2: 'February',
//             3: 'March',
//             4: 'April',
//             5: 'May',
//             6: 'June',
//             7: 'July',
//             8: 'August',
//             9: 'September',
//             10: 'October',
//             11: 'November',
//             12: 'December'}
// console.log(year);

// let obj = {'a': 1, 'b': 2, 'c': 3};

// let obj1 = {a: 1, b: 2, c: 3};
// console.log(obj1['a']);
// console.log(obj['a']);

// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.a); 

// let user = {name: 'Iggi', surname: 'Pop', patronymic: 'Music'}
// console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

// let date = {year: 2022, month: 8, day: 18}
// console.log(date['year'] + '-' + date['month'] + '-' + date['day']);

// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	e5: 5
// }
// console.log(obj);

// let obj = {
// '1a': 1,
// b2: 2,
// 'c-c': 3,
// 'd 4': 4,
// e5: 5
// }

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj['e5']);

// let obj = {x: 1, y: 2, z: 3};
// obj['x'] = obj['x'] ** 2;
// obj['y'] = obj['y'] ** 2;
// obj['z'] = obj['z'] ** 2;
// console.log(obj);

// let obj = {K: 1000, V: 500, P: 200};
// console.log(obj.K);
// console.log(obj.P);

// let obj = {a: 1, b: 2, c: 150};
// console.log(obj.c);

// let obj = {};
// obj.a = 1;
// obj.b = 2;
// obj.c = 134;
// console.log(obj);

// let obj = {7: 'a', 8: 'g', 9: 'p'};
// console.log(obj);
// obj = {9: 'g', 8: 'a', 7: 'p'};
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3};
// let keys = Object.keys(obj);
// console.log(keys);

// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj);
// console.log(keys);

// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj).length);

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// let obj = {a: 1, b: 2, c: 3};
// let key = 'a';

// console.log(obj[key]); // выведет 1

// let obj = {x: 1, y: 2, z: 3};
// let key = 'y';
// console.log(obj[key]);

// let obj = {x: 1, y: 2, z: 3}; 
// console.log(obj['x']);

// let obj = {x: 1, y: 2, z: 3}; 
// let key = 'x'; 
// console.log(obj[key]);

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

/*
 let str='Happy new Year!';
 // Yppah wen Raey!
 function rev(str){
 	let sent =[];
 	let word ='';
 	for(let i =0; i< str.length; i++){
 		if(str[i] === ' ' || i=== str.length-1){
 			sent[i]=word
 		}else{
 			word+=str[i];
 		}
 	}
 	return sent;

 }

 console.log(rev(str));


*/

// let str='Happy new Year!';
// let arr=[];
// let first= '';

// for(let i=0; i< str.length; i++){
// 	if(str[i]!= ' ' && i != str.length-1){
// 		first+= str[i];

// 	} else{
// 		arr.push(first);
// 		first="";
// 	}

// }
// console.log(arr);
// let word=arr[0];

// let newStr= word[0].toLowerCase(0)+ word.slice(1, word.length-1)+ String(word[word.length-1]).toUpperCase();


// let str2='';
// for(let i=newStr.length-1; i>=0; i--){
// 	if(newStr[i]==newStr[4] || newStr[i] ==newStr[13]){
// 		str2+=newStr[i].toUpperCase();
// 	} else if(newStr[i]==newStr[i].toUpperCase()){
// 		str2+=newStr[i].toLowerCase();
// 	}else{
// 		str2+= newStr[i];
// 	}

// }
// console.log(str2);



// console.log(newStr);

// function test() {
// 	let num = 1;

// 	function func() {
// 		console.log(num);
// 	}
// 	func();
// }
// test();

// function test() {
// 	let num;

// 	function func(){
// 		console.log(num);
// 	}
// 	num = 1;
// 	func();
// 	num = 2;
// 	func();
// }
// test();

// function test(num1, num2) {
// 	function func(){
// 		console.log(num1 + num2);
// 	}
// 	num1 = 2;
// 	func();
// }
// test(1,2);

// function test(num){//num=1

// 	function func(localNum) {//localNum=1
// 		//let localNum=1
// 		console.log(localNum);
// 	}
// 	func(num);//1
// }
// test(1);//func(num)

// function test(num) {//1
// 	function func(localNum) {//2
// 		console.log(num);//1
// 	}
// 	func(num + 1);//2
// }
// test(1);//1

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(localNum);
// }
// test(1);

// function test(num) {
// 	function func(num){
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

// function func1() {
// 	return function() {
// 		return 1
// 	}
// }
// function func2() {
// 	return function(){
// 		return 2
// 	}
// }
// console.log(func1()());
// console.log(func2()());
// console.log(func1()() + func2()());

// function func() {
// 	return function() {
// 		return function(){
// 			return'!';
// 		};
// 	};
// }
// console.log(func()()());

// function func() {
// 	return function(){
// 		return function(){
// 			return function(){
// 				return function(){
// 					return '???';
// 				};
// 			};
// 		};
// 	};
// }
// console.log(func()()()()());

// function func(num1) {
// 	return function(num2){
// 		return function(num3){
// 		return num1 + num2 + num3;
// 		}
// 	}
// }
// console.log(func(2)(3)(4));

// function func(num1){
// 	return function(num2){
// 		return function(num3){
// 			return function(num4){
// 				return function(){
// 					return num1 + num2 + num3 + num4;
// 				};

// 			};
// 		};
// 	};
// }
// console.log(func(2)(3)(4)(5)());

// let num = 1;
// function func() {
// 	console.log(num);
// }
// func();

// function func() {
// 	console.log(num);
// }
// let num = 1;
// func();


// let num = 1;
// function func() {
// 	console.log(num);
// }
// num = 2;
// func();

// let num1 = 1;
// let num2 = 2;

// num1 = 123;
// function func() {
// console.log(func(num1));
// }
// func();

// function test() {
// 	let num = 1;
// return function() {

// }
// }

// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 	}
// }
// test()();

// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 	}
// }
// let func = test();
// func();

// function test() {
// 	return function() {
// 		console.log(num);
// 	}
// }
// let num = 1;
// let func = test();
// func();

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;

// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// console.log(func());

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// console.log(test()());

// function test () {
// 	let num1 = 1;
// 	return function (){
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
// 	return function() {
// 		return num;
// 	}
// }
// let num = 2;
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
// 	return function () {
// 		console.log(num);
// 	}
// }
// let func = test();
// func();

// function test() {
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	}
// }
// let func = test();
// func();
// func();
// func();

// function test() {
// 	let num = 1;
// 	return function () {
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

// function test(){
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	}
// }
// let func = test();
// func();

// function test(){
// 	let num = 10;
// 	return function (){
// 		console.log(num);
// 		num--
// 	}
// }
// let func = test();
// func();
// func();
// func();

// function test(){
// 	let num = 10;
// 	return function(){
// 		if (num > 0) {
// 			console.log(num);
// 		} else {
// 			console.log('over');

// 		}
// 		num--;
// 	}
// }
// let func = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();


// function test(){
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// test()();//1
// test()();//1

// function test(){
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// let func1 = test();
// func1();//1
// let func2 = test();
// func2();//1

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

// "use strict"

// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b)); // выведет '23'

// let a = Number('10');
// let b = Number('20');
// alert(a + b);

// let a = +'2';
// let b = +'3';
// alert(a + b);

// let a = parseInt('5px');
// let b = parseInt('6px');
// alert(a + b);

// let a = parseFloat('5.5px');
// let b = parseFloat('6.25px');
// alert(a + b);

// let a = 11.75 + 'px';
// alert(a);

// let a = parseFloat('5.5px');
// let b = parseFloat('6.25px');
// alert(a + b + 'px');

// let a = String(123);
// let b = String(321);
// alert(a + b);

// let sum = String(1234567);
// alert(sum.length);

// let a = String(7);
// let b = String(9);
// alert(a.length);
// alert(b.length);
// alert(a + b);

// "use strict"

// let str = 'abcde';
// alert(str[0]); // выведет 'a'
// alert(str[1]); // выведет 'b'
// alert(str[2]); // выведет 'c'

// let str = 'abcde';
// let num = 3; // номер символа в переменной
// alert(str[num]); // выведет 'd'

// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);

// let str = 'abcde';
// let newStr = str[4] + str[3] + str[2] + str[1] + str[0];
// alert(newStr);

// let str = 'abcde';
// let num = 4;
// alert(str[num]);

// let str = 'abcde'; str[0] = '!';
// alert(str);

// let str = 'abcde';
// let last = str.length - 1;
// alert(str[last]);

// let name = 'Iggi';
// let last = name.length - 1;
// alert(name[last]);

// let city = 'Samei';
// let lastBefore = city.length - 2;
// alert(city[lastBefore]);

// let city = 'Aktau';
// let middle = city.length - 3;
// alert(city[middle]);

// let test = '12345';
// alert(test[0] + test[1]); // выведет '12' - суммирует как строки

// let test = '12345'; // строка
// alert(Number(test[0]) + Number(test[1])); // выведет 3

// let sum = '12345';
// alert(Number(sum[0]) + Number(sum[1]) + Number(sum[2]) + Number(sum[3]) + Number(sum[4]));

// let num = 12345;
// let newNum = String(num);
// let sum = Number(newNum[0]) + Number(newNum[1]) + Number(newNum[2]) + Number(newNum[3]) + Number(newNum[4]);
// alert(sum);

// let num = 12345;
// let newNum = String(num);
// let sum = Number(newNum[0]) * Number(newNum[1]) * Number(newNum[2]) * Number(newNum[3]) * Number(newNum[4]);
// alert(sum);

// let num = 12345;
// let NewOne = String(num);
// let reverse = NewOne[4] + NewOne[3] + NewOne[2] + NewOne[1] + NewOne[0];
// alert(Number(reverse));
// "use strict"

// for (let i = 0; i <= 100; i++) {
//     console.log (i);
// }
 

// for ( let i = 11; i <= 33; i++) {
//     console.log (i);
// }

// for (let i = 0; i <= 100; i+= 2) {
// console.log (i);
// }

// for (let i = 1; i <= 99; i += 2) {
//     console.log (i);
// }

// for (let i = 100; i >= 0; i--) {
//     console.log (i);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i of arr) {
//     console.log(i);
// }

// let obj = {z: 1, y: 2, x: 3};
// for (let i in obj) {
//     console.log(obj[i]);
// }

// let obj = {x: 1, y: 2, z: 3}; 
// for (let i in obj) {
//     console.log(i);
// } 

// let num = 1;
// while (num <= 100) {
//     console.log(num)
//     num++
// }

// let num = 11;
// while (num <= 33) {
//     console.log(num)
//     num++
// }

// let num = 5;
// while (num <= 1000) {
//     console.log(num);
//     num *= 3;
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 1; i < arr.length - 1; i++) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// } 

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }

// let arr = [2, 5, 9, 15, 1, 4];
// for (let elem of arr) {
//     if (elem > 3 && elem <10) {
//         console.log(elem);
//     }
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// for (let elem in obj) {
//     if (obj[elem] % 2 != 0){
//         console.log(obj[elem]);
//     }
// }

// let res = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         res = res + i;
//     }
// }   
//     console.log(res);

// let res = 0; 
// for (let i = 1; i <= 99; i++) {
//         if (i % 2 != 0) {
//             res = res + i;
//         }
// }
//     console.log(res);

// let res = 1;
// for (let i = 1; i <= 20; i++) {
// res = res * i;
// console.log(res);
// }

// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let elem of arr) {
//     res += elem;
// }
//  console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
//     res += elem;
// }
// console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
//     if (elem % 2 == 0) {
// res += elem
//     }
// }
//  console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
//     res += elem ** 2;
// }
// console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
// for (let elem of arr) {
//     res *= elem; 
// }
// console.log(res);

// let str = '';
// for (let i = 0; i < 5; i++) {
//     str += ' -';
// }
//  console.log(str);

// let str = '';
// for (let i = 1; i < 10; i++) {
//     str += i
// }
// console.log(str);

// let str = '';
// for (let i = 9; i > 0; i--) {
//     str += i
// }
// console.log(str);

// let str = '-';
// for (let i = 1; i < 10; i++) {
//     str += i + '-';
// }
// console.log(str);

// for (let i = 10; i < 1000; i++) {
//     let str = String(i);
//     console.log(str[0]);
// }

// for (let i = 10; i < 1000; i++) {
//     let str = String(i);
//     let sum = Number(str[0]) + Number(str[1]);
//     console.log(sum);
// }

// for (let i = 10; i < 1000; i++) {
//     let firstNumber = String(i);
//     if (firstNumber[0] === '1') {
//         console.log(firstNumber);
//     }

// }

// for (let i = 10; i < 1000; i++) {
//     let sum = String(i);
//     if (Number(sum[0]) + Number(sum[1]) === 5) {
//         console.log(sum);
//     } 
// }

// let arr = [2, 3, 4, 0, 6, 8, 8, 0];
// for (let elem of arr) {
//     if (elem == 0) {
//         break;
//     } console.log(elem);
// } 

// let sum = 0;
// let arr = [2, 5, 6, 7, 8, 9, -1];
// for (let elem of arr) {
//     if (elem < 0) {
//      break;
     
//     } 
//     sum += elem;
// } 
// console.log(sum);

// let arr = [5, 7, 9, 2, 1, 8, 6, 4, 3];
// for (let elem of arr) {
//     if (elem == 3) {
//         console.log(arr.indexOf(elem));
//         break;
//     }
   
// }

// let arr = [5, 7, 3, 9, 2, 1, 3, 8, 6, 4, 3];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//         console.log(i);
//         break;
//     }
// }

// let i;
// let sum = 0;
// for (i = 1; i < 20; i++) {
//     sum += i;
//     if (sum > 100) {
//         break;
//     }
// }
// console.log(i);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
//     let result;

//     if (elem % 2 === 0) {
//         result = elem * elem;

//     } else if (elem % 3 === 0) {
//         result = elem * elem * elem;
        
//     } else { 
//         continue;

//     }console.log(result);
// } 

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i);
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i + '' + j + ' ');
//     }
// }

// for (let i = 0; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {
//         let num = 3;
//    console.log(num);  } 
    
// }

// let arr = [];
// for (let i = 1; i <=10; i++) {
//     arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push('x');
// }
// console.log(arr);

// let arr = [1, 5, 6, 8, -1, -5, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         newArr.push (arr[i]);
//     }
    
// }
// console.log(newArr)


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i ++) {
//     arr[i] = arr[i] ** 2;
// }
//  console.log(arr);

// let arr = [1, 2, 3, 4, 5];
//  for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
//  }
//  console.log(arr);

// let arr = [1, 2, 3, 4, 6, 7, 8, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] ** 2;
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 9];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] - 1
// } 
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9] 
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 10;        
// }
// console.log(arr);

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5]; 
// let obj = {};
// for (let i = 0; i <= 4; i++) {
//     // let key = keys[i];
//     // let value = values[i];
//     // obj[key] = value;
//     obj[keys[i]] = values[i];
// }
// console.log(obj);

// let arr1 = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr2[i]] = arr1[i];
// }
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
// for (let elem in obj) {
//     if (obj[elem] % 2 == 0) {
//         newObj[elem] = obj[elem];
//     }
// }  
// console.log(newObj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5}; 
// let newObj = {};
// for (let elem in obj) {
//     newObj[obj[elem]] = elem;

// }
// console.log(newObj);

// let obj = {a: 1, b: 2, c :3};
// for (let key in obj) {
//     obj[key] = obj[key] * 2;
// }
// console.log(obj);


// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//     obj[key] = obj[key] * 2;
// }
// console.log(obj);

// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//     obj[key] = obj[key] + 1
// } console.log(obj);

// let arr = [1, 2, 3, 4, 5, 3];
// let flag = false;
// for (let elem of arr) {
//     if (elem == 3) {
//         flag = true;
//         // console.log('+');
//         break;
//     // } else {
//     //     console.log('-');
//     }
// }
// if (flag === true) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
//     if (elem == 'c') {
//         console.log ('+');
//         break
//     }
// }

// let arr = [2, 4, 25, 6, 8, 7, 12, 5, 1, 79, 65, 23, 17, 13, 37, 41, 43];
// for(let i = 0; i < arr.length; i++) {
// 	if(arr[i]  == 3 || arr[i]  == 2 || arr[i]  == 5){
// 		console.log(arr[i] + " prostoe");
// 	}else if(arr[i] % 3 == 0 || arr[i] % 2 == 0 || arr[i] % 5 == 0) {
// 		console.log(arr[i] + ' slojnoe');
// 	} else {
// 		console.log(arr[i] + " prostoe")
// 	}
// }

// "use strict"

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
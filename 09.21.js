"use strict"
 // let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
 // let counter = 0;
 // for (let elem of arr) {
 // 	if (elem == 'a') {
 // 		counter++;
 // 	}
 // } 
 // console.log(counter);

 // let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
 // let counter = 0; 
 // for (let elem of arr) {
 // 	if (elem == 3) {
 // 		counter++;
 // 	}
 // }
 // console.log(counter);

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
//  let counter2 = 0; 
//  let counter3 = 0;

//  for (let elem of arr) {
//  	if (elem == 3) {
//  		counter2++;
//  	} else if (elem == 2) {
// 		counter3++;
//  	}
//  }
//  console.log(counter2);
//  console.log(counter3);

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {a: 0, b: 0, c: 0};//count[a]=0
// for (let elem of arr) {
// 	count[elem]++;
// }
// console.log(count);

// let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'd', 'e', 'z', 'x'];
// let count = {};
// for (let elem of arr) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);

// let str = 'Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов';
// let count = {};
// for (let elem of str) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i -1] + arr[i]);
// }

// let arr = [2, 3, 4, 5, 6, 7, 9, 9, 5, 0];
// for (let i = 0; i < arr.length -1; i++) {
// 	console.log(arr[i + 1]);
// }

// let arr = [2, 3, 4, 6, 67, 8];
// for (let i = 0; i < arr.length -1; i++) {
// 	console.log(arr[i] + arr[i +1]);
// }

// let arr = [3, 4, 5, 65, 7, 8, 9];
// for (let i = 2; i <= arr.length; i++) {
// 	console.log(arr[i - 1] + arr[i - 2])
// }

// let arr = [2, 3, 5, 6, 7, 9, 2, 78];
// for (let i = 2; i <= arr.length -1; i++) {
// 	console.log(arr[i -1] + arr[i -2] + arr[i]);
// }

// let arr = [2, 5, 7, 8, 4, 2, 1, 9];
// for ( let i = 1; i < arr.length -1; i++) {
// 	console.log(arr[i -1] + arr[i] + arr[i +1]);
// }

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let count = 0;
// for (let elem of arr) {
// 	if (String(elem)[0] == 1 || String(elem)[0] == 2) {
// 		count += elem;
		
// 	}

// }
// console.log(count);

// let obj = {a: 10, b: 20, c: 60, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
// 	if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
// 		sum += obj[elem];
// 	} 
// }
// console.log(sum);

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);

// let res = 1;
// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }
//  console.log(res);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += Number(elem);
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem
// } 
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length -1; i++) {
// 	sum += +arr[i];
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
// 	sum += +i;
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
	
// 	elem = elem**2;
// 	console.log(elem);

// }

// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += obj[elem];
// }
// console.log(sum);

// let obj = {a: 1, b: 2, c: 3}; 
// let sum = 0;
// for (let key in obj) {
// 	sum += obj[key];

// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let res;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+';
// 		break
// 	} else {
// 		res = '-';
// 	}
// }
// console.log(res);


// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = true;
// 		break;
// 	}
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];
// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		newArr.push(elem);
// 	}
// }
// console.log(newArr);

// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
// 	console.log(i);
// }

// for (let i = 1; i < 100; i++) {
// if (i % 2 === 0)

// 	console.log (i)
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
// 		// arr[i] = 'x';
// 		arr.push('x');
// 	}
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [1, 2, 4, 67, 7, 889, 90, 3, 4, 5, 9];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] < 10) {
// 		console.log(arr[i]);
// 	}
// }

// let arr = [2, 3, 4, 5, 8, 9, 1, 5, 7, 8, 8, 0];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 5) {
// 		console.log(arr[i])
// 	}
// }

// let sum = 0;
// let arr = [2, 3, 4, 5, 6, 7, 7, 8, 8, 9];
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// console.log(sum);

// let sum = 1;
// let arr = [2, 3, 6, 7, 9, 7, 1, 7, 9];
// for (let i = 1; i < arr.length; i++) {
// 	sum += arr[i] ** 2;
// }
// console.log(sum);


// let sum = 0; 
// let arr = [2 ,3, 6, 7, 8, 9, 4, 7];
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i]
// }
// console.log(sum / arr.length);

// let sum = 1;
// for (let i = 5; i > 0; i--) {
// 	sum *= i;

// }
// console.log(sum);

// let sum = 1; 
// for (let i = 567; i > 0; i--) {
// 	sum *= i;
// } 
// console.log(sum);

// let arr = [];
// for (let i = 10; i > 0; i--) {
// 	arr.push(i);
// }
// console.log(arr);

// let sum = 0;
// let arr = [2, 4, -1, -5, -79, 78, 56, 3];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) {
// 		sum += arr[i]
// 	}
// }
// console.log(sum);

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {

// 	if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {
// 			console.log(arr[i]);
// 	}
// }

// let arr = [2, 4, 5, 6, 8, 9, 0];
// for (let i = arr.length -1; i >= 0; i--) {
// 		console.log(arr[i]);
// }

// let arr = [2, 3, 2, 5, 7, 8, 9, 1, 67];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == i) {
// 		console.log(arr[i]);
// 	}
// }

// let arr = [2, 3, 5, 67, 7, 9];
// for (let i = 0; i < arr.length; i++) {
// 	document.write(arr[i] + '<br>');
// }

// let arr = [3, 5, 7, 89, 45, 1];
// for (let i = 0; i < arr.length; i++) {
// 	document.write('<p>' + arr[i] + '</p>')
// }

// let arr = ['MO', 'TU', "WE", 'TH', 'FR', 'ST', 'SU'];
// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i] == 'ST' || arr[i] == 'SU') {
// 		document.write('<p><b>' + arr[i] + '</b></p>')
// 	} else {
// 		document.write('<p>' + arr[i] + '</p>');
// 	}
	
// }

// let arr = ['SU', 'MO', 'TU', "WE", 'TH', 'FR', 'ST'];
// let date =new Date();
// let day = arr[date.getDay()];
// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i] == day) {
// 		document.write('<p><i>' + arr[i] + '</i></p>');
// 	} else {
// 		document.write('<p>' + arr[i] + '</p>');
// 	}
// }

// let obj = {
// 	employee1: 100, 
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let elem in obj) {
// 	obj[elem] += obj[elem] * 0.1;
// }
// console.log(obj);

// let obj = {
// 	employee1: 100, 
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let elem in obj) {
// 	if (obj[elem] <= 400) {
// 		obj[elem] += obj[elem] * 0.1;
// 	}
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
// 	obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// let sum = 0;
// let sum2 = 0;
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10}; 
// for (let elem in obj) {
// 	sum += +elem;
// 	sum2 += obj[elem];
// } console.log(sum2);
// console.log(sum);
// console.log(sum / sum2);

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr = [];
// let arr1 = [];
// for (let elem in obj) {
// 	arr.push(elem);
// 	arr1.push(obj[elem]);
// }
// console.log(arr);
// console.log(arr1);

// let arr = [];
// let obj = {
// 	1: 125, 
// 	2: 225, 
// 	3: 128,
// 	4: 356, 
// 	5: 145, 
// 	6: 281, 
// 	7: 452, 
// }; 
// for (let elem in obj) {
// 	if (String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2) {
// 		arr.push(obj[elem]);
// 	}
// } 
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
// 	obj[arr[i]] = i + 1;
// }
// console.log(obj);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
// 	obj[i + 1] = arr[i];
// }
// console.log(obj);






















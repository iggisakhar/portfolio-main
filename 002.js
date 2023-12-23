// "use strict"

// let key = 'x';
// let obj = {
//  	[key]: 1, 
//  	y: 2,
//  	z: 3
//  };
//  console.log(Object.keys(obj))

// let key1 = 'x';
// let key2 = 'y';
// let key3 = 'z';

// let obj = {
// 	[key1]: 1,
// 	[key2]: 2,
// 	[key3]: 3
// };

// console.log(obj);

// let obj = {x: 1, y: 2, z: 3};
// console.log('x' in obj);
// console.log('w' in obj);

// let obj = {x: 1, y: 2, z: 3};
// delete obj.x;
// console.log('x' in obj);

// let obj = {x : 1, y: 2, z: 3};
// console.log( typeof obj);

// let obj = {x : 1, y: 2, z: 3};
// console.log( typeof obj['x']);

// console.log( typeof [1, 2, 3]);

// let arr = [1, 2, 3];
// console.log(typeof arr);

// let arr = ['1', '2', '3']; 
// console.log( typeof arr[0] );

// "use strict"

// console.log( typeof {x: 1, y: 2, z: 3} );

// let arr = [1, 2, 3];
// console.log( typeof arr[0] );

// console.log( Array.isArray([1, 2, 3]) );

// console.log( Array.isArray({x: 1, y: 2, z: 3}) );

// let test = {x: 1, y: 2, z: 3};
// console.log(test);

// let test = {x: 1, y: 2, z: 3};
// console.log(test.x);

// let test = [1, 2, 3];
// console.log(typeof (test));

// let test = [1, 2, 3];
// console.log(typeof (test[1]));

// let test1 = [1, 2, 3];
//  let test2 = 1;
// console.log(typeof (test1));

// let test1 = [1, 2, 3];
// let test2 = 1;
// console.log(typeof (test1[test2])); //test1[1]

// let obj1 = {a: 1, b: 2, c: 3};
// let obj2 = obj1;
// obj2.a = '!';
// console.log(obj1); // {a: '!', b: 2, c: 3}

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// console.log(arr2);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[1] = 'b';

// console.log(arr1);

// let arr1 = [1, 2, 3];
// let arr2 = arr1;

// arr1[0] = 'a';
// arr2[0] = 'b';

// console.log(arr2);

// const arr = ['a', 'b', 'c'];
// arr[1] = '!';
// console.log(arr);

// const a = 1;
// const b = 2;
// const c = a + b;

// console.log(c);

// let arr = [1, 2, 3, 4, 5];
// let res = arr[1] + arr[2];

// console.log(res);

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

// let obj = {x: 1, y: 2, z: 3};
// let sum = obj['x'] + obj['y'] + obj['z'];
// console.log(sum);

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// let test = 1;
//  if (test > 0) {
//  	console.log('+++');
//  } else {
//  	console.log ('---');
//  }

// let test = -1;
// if (test > 0) {
// 	console.log('+++');

// } else {
// 	console.log('---');
// }

// let test = 0;
// if (test > 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = 0;
// if (test >= 0) {
// 	console.log('+++');

// } else {
// 	console.log('---');
// }

// let test = 0;
// if (test < 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = 0;
// if (test <= 0) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test = 8;
// if (test > 10) {
// 	console.log('+');

//  } else {
//  	console.log('-');
//  }

// let test = 8;
// if (test <= 10) {
// 	console.log('+');

//  } else {
//  	console.log('-');
//  }

// let test = 10;
// if (test == 10) {
// 	console.log('yes');
// } else {
// 	console.log('no');
// }

// let test = 9;
// if (test != 10) {
// 	console.log('yes');

// } else {
// 	console.log('no');
// }

// let test = 5;
// let test2 = 7;
// if (test > test2) {
// 	console,log('bigger');
// } else {
// 	console.log('smaller');
// }

// let test = 15;
// let test2 = 67;
// if (test == test2) {
// 	console,log('bigger');
// } else {
// 	console.log('smaller');
// }

// let test1 = 'abc';
// let test2 = 'cbd'

// if (test1 == test2) {
// 	console.log('no');

// } else {
// 	console.log('yes');
// }

// let test1 = '123';
// let test2 = 123;
// if (test1 == test2){
// 	console.log('yes');
// } else {
// 	console.log('no');
// }

// if (3 !== 3){
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let test1 = 3;
// let test2 = 2;
// if (test1 !== test2) {
// 	console.log('+++');
// } else {
// 	console.log('---');
// }

// let num = 2;
// if (num > 0 && num < 5){
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let num = 45;
// if (num >= 10 && num <= 20) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let num1 = 4;
// let num2 = 78;
// if (num1 <= 1 && num2 >= 3){
// 	console.log('+');
// } else {
// 	console.log('-');
// }

"use strict"
// let num = 1;
// num = num + 1;
// num = num + 1;
// alert(num);

// let num = 1;
// num = num + 2;
// num = num + 3;
//  alert(num);

// let num = 47;
// num = num + 7; // num += 7
// num = num – 18; // num -= 18
//  num = num * 10; // num *= 10
// num = num / 15; // num /= 15
// alert(num);

// let num = 10;
// num = num + 1; // num++
//  num = num + 1; // num += 1
// num = num - 1; // num --
// alert(num);

// let num = 0;
// alert(num++); // выведет 0
// alert(num); // выведет 1

// let num = 0;
// alert(++num); // выведет 1 - переменная увеличилась сразу

// let num1 = 3;
// let num2 = num1++;
// alert(num1);
// alert(num2);

// let num1 = 3;
// num1++;
// let num2 = num1--;
// alert(num1++);
// alert(--num2);

// let num = 1;
// num += 12;
// num -= 14;
// num *= 5;
// num /= 7;
// num++;
// num--;
// alert(num);

// let num = 47;
// num += 7;
// num -= 18;
// num *= 10;
// num /= 15;
// alert(num);

// let num = 10;
// num++;
// ++num;
// num--;
// alert(num);

// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str.length[-1]);
//
// let num = '12345'
// alert(Number(num[0]) * Number(num[1]) * Number(num[2]) * Number(num[3]) * Number(num[4]));

// "use strict"

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 31);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 25);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// console.log(date.getDate());

// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 0, 21);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 31);
// console.log(date.getDay());

// let now = new Date;
// let date = new Date(now.getFullYear() + 1, now.getMonth(), 6);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear() - 1, now.getMonth(), 6);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 1, 1);
// console.log(date.getDay());

// let date1 = new Date();
// let date2 = new Date(2015, 4, 25, 12, 59, 59);

// console.log(date1 - date2);

// let date1 = new Date(2022, 8, 10, 12, 59, 59);
// let date2 = new Date(2022, 0, 1, 12, 59, 59);
// console.log(date1 - date2);

// let date1 = new Date(2022, 11, 20, 12, 59, 59);
// let date2 = new Date(2023, 0, 10, 12, 59, 59);
// console.log((date1 - date2) / 1000 / 60 / 60 / 24);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 12);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 12);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() - 1, 12, 59, 59);
// console.log((date - now) / 1000 / 60 / 60);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0);
// console.log((date - now) / 1000 / 60 / 60);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1, 0, 0, 0);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 24, 0, 0);
// console.log((date - now) / 1000 / 60 /60);

// let now = new Date();
// let year = now.getFullYear();
// for (let month = 0; month <= 11; month ++) {
// 	let date = new Date(year, month, 1);
// 	if  (date.getDay() == 0) {
// 		console.log(year + '-' + month + '-1');
// 	}
// }

// let now = new Date();
// let year1 = now.getFullYear();
// for (let year = 2000; year <= year1; year ++) {
// 	let date = new Date(year, 0, 1);
// 	if (date.getDay() == 0 || date.getDay() == 1) {
// 		console.log('January' + ' First ' + year)

// 	}
// }

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate());
// console.log(now - date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);
// console.log((now - date) / 1000 / 60 / 60);

// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31);
// console.log((date - now) / 1000 / 60 / 60 / 24);

// let now = new Date();
// for (let month = 0; month < 12; month++) {
// 	let date = new Date(now.getFullYear(), month, 13);
// 	if(date.getDay() == 5){
// 		console.log("2022-" + month + "-13");
// 	}
// }

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() - 3, now.getDate());
// console.log(date.getFullYear());

// let now = new Date();
// let date = new Date(now.getFullYear(), 11, 31);
// console.log(date.getDay());

// function getPrevLeap(year){
// 	while(true){
// 		let date = new Date(year--, 2,0);
// 		if(date.getDate()== 29){
// 			return date.getFullYear();
// 		}
// 	}
// }
// console.log(getPrevLeap(2022));

// function getNextLeap(year) {
// 	while(true) {
// 		let date = new Date(year++, 2, 0);
// 		if(date.getDate() == 29) {
// 			return date.getFullYear();
// 		}
// 	}
// }
// console.log(getNextLeap(2022));

// let date1 = '2020 - 11 - 31';
// let date2 = '2020 - 12 - 01';
// console.log(date1 < date2);

// let date1 = '2020 - 11 - 31';
// let date2 = '2020 - 12 - 01';
// if (date1 > date2) {
// 	console.log('Date1 is Bigger');
// } else {
// 	console.log('Date2 is Bigger');
// };

// let date1 = '09-21';
// let date2 = '09-23';
// console.log(date1 > date2);

// let date = '08-20';
// if(date >= '01-01' && date <= '03-08') {
// 	console.log('1 promejutok');
// }
// if (date >= '03-09' && date <= '06-17') {
// 	console.log('2 promejutok');
// }
// if (date >= '06-18' && date <= '12-31') {
// 	console.log('3 promejutok');
// }

// function iHoroscopej(d, m) {
//         let zod = [
//         	[19, 'Козерог (22.12–19.1)'],//0
//         	[18, 'Водолей (20.1–18.2)'],//1
//         	[20, 'Рыбы (19.2–20.3)'],
//         	[19, 'Овен (21.3–19.4)'],
//         	[20, 'Телец (20.4–20.5)'],
//         	[21, 'Близнецы (21.5–21.6)'],
//         	[22, 'Рак (22.6–22.7)'],
//         	[22, 'Лев (23.7–22.8)'],
//         	[22, 'Дева (23.8–22.9)'],
//         	[22, 'Весы (23.9–22.10)'],
//         	[22, 'Скорпион (23.10–22.11)'],
//         	[21, 'Стрелец (23.11–21.12)']];

//         if(zod[m][0] < d){
//             m=m+1;
//         }
//         if (m>12){m=1;}

//         return zod[m][1];
//     }
// let date = new Date();

// console.log(iHoroscopej(date.getDate(), date.getMonth()))

// let date1 = new Date(2020, 1, 1);
// let date2 = new Date(2019, 1, 1);
// console.log(date1 > date2);

// let date1 = new Date();
// let date2 = new Date(date1.getFullYear(), date1.getMonth(), date1.getDate(), 12, 0, 0)
// console.log(date1 > date2);

// let date1 = new Date();
// let date2 = new Date(date1.getFullYear(), date1.getMonth(), 15);
// console.log(date1 > date2);

// let button = document.querySelector('#button');
// console.log(button);

// let elem1 = document.querySelector('#elem1');
// console.log(elem1);

// let elem2 = document.querySelector('#elem2');
// console.log(elem2);

// let elem3 = document.querySelector('#elem3');
// console.log(elem3);

// let elem = document.querySelector('#parent input');
// console.log(elem);

// let elem = document.querySelector('.elem');
// console.log(elem);

// let id = document.querySelector('#block p');
// console.log(id);

// let block = document.querySelector('.block p');
// console.log(block);

// let text = document.querySelector('.www');
// console.log(text);

// let button = document.querySelector('#button1');
// button.addEventListener('click', function() {
// 	console.log('!!!');
// })

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', function() {
// 	console.log('1');
// })

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', function() {
// 	console.log('2');
// })

// let button3 = document.querySelector('#button3');
// button3.addEventListener('click', function() {
// 	console.log('3');
// })

// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// }

// let button1 = document.querySelector('#button1');
// button1.addEventListener('click', func1);

// function func1 () {
// 	console.log(1);
// }

// let button2 = document.querySelector('#button2');
// button2.addEventListener('click', func2);

// function func2 () {
// 	console.log(2);
// }

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');

// button1.addEventListener('click', func);
// button2.addEventListener('click', func);

// function func() {
// 	console.log("Molodes'");
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let elem5 = document.querySelector('#elem5');

// elem1.addEventListener('click', func);
// elem2.addEventListener('click', func);
// elem3.addEventListener('click', func);
// elem4.addEventListener('click', func);
// elem5.addEventListener('click', func);

// function func() {
// 	console.log('Vrode poluchlos');
// }

// let button = document.querySelector('#button');

// button.addEventListener('click', func1);
// button.addEventListener('click', func2);

// function func1() {
// 	console.log('1');
// }

// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz');

// let elem = document.querySelector('#elem');
// console.log(elem.classList.toggle('www'));

// let elem = document.querySelector('#elem');
// elem.style.color = 'red';

// let box = document.querySelector('#box');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	box.style.width = '300px';
// 	box.style.height = '100px';
// 	box.style.border= '1px solid red';
// 	box.style.color = 'red';
// })

// let elem = document.querySelector('#elem');
// elem.style.color = 'red'

// let box = document.querySelector('#box');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	box.style.width = '400px';
// 	box.style.height = '200px';
// 	box.style.border = '5px solid green';
// })

// let box = document.querySelector('#box');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	box.style.fontSize = '20px';
// 	box.style.borderTop = '4px solid green';
// 	box.style.backgroundColor = 'blue';
// })

// let button = document.querySelector('#button');
// let list = document.querySelectorAll('#list');
// button.addEventListener('click', function() {
// 	for(let elem of list) {
// 	elem.style.listStyleType= "none";
// 	elem.style.cssFloat = 'left';
// 	elem.style.width="20%";
// 	elem.style.border="3px solid black";
// 	elem.style.backgroundColor="grey";
// 	}
// })

// let elems = document.querySelectorAll('p');
// for(let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.add('colored');
// 	})
// }

// let obzas = document.querySelector('#obzas');
// let button1 = document.querySelector('#button1')
// 	button1.addEventListener('click', function() {
// 		obzas.style.textDecoration = 'line-through'
// 	})
// let button2 = document.querySelector('#button2');
// 	button2.addEventListener('click', function() {
// 		obzas.style.fontWeight = 'bold'
// 	})
// let button3 = document.querySelector('#button3');
// 	button3.addEventListener('click', function() {
// 		obzas.style.color = 'red'
// 	})

// let elems = document.querySelectorAll('p')
// for(let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.toggle('colored');
// 	})
// }
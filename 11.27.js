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

// function func2() {
// 	console.log('2');
// }

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', func1);
// elem.addEventListener('click', func2);
// elem.addEventListener('click', func3);

// function func1 (){
// 	console.log(1)
// }

// function func2 (){
// 	console.log(2)
// }

// function func3 (){
// 	console.log(3)
// }

// button.addEventListener('mouseover', function() {
// 	console.log('1');
// }) 
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// })

// button.addEventListener('dblclick', function() {
// 	console.log('Some Text As You Requested');
// })

// button.addEventListener('mouseover', function() {
// 	console.log('21-st');
// })

// button.addEventListener('mouseout', function() {
// 	console.log('22-nd');
// })

// button.addEventListener('mouseover', function() {
// 	console.log('1');
// })
// button.addEventListener('mouseout', function() {
// 	console.log('2');
// })

// let text = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	console.log(text.textContent);
// })

// let text = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	text.textContent = '!!!';
// })

// let text = document.querySelector('#elem');
// let text1 = document.querySelector('#elem1');
// let button = document.querySelector('#button')
// button.addEventListener('click', function() {
// 	let sum = +text.textContent + +text1.textContent;
// 	console.log(sum);
// })

// let text = document.querySelector('#elem');
// let text1 = document.querySelector('#elem1');
// let text2 = document.querySelector('#elem2');
// let button = document.querySelector('#button');
// let div = document.querySelector('#div');
// button.addEventListener('click', function() {
// 	let sum = +text.textContent + +text1.textContent + +text2.textContent;
// 	div.textContent = sum;
// })

// let text = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	let sum = +text.textContent + 1;
// 	console.log(text.textContent = sum);
// })

// let text = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	text.textContent = +text.textContent + '!';
	
// })

// let elem = document.querySelector('#elem');
// console.log(elem.innerHTML);
// elem.textContent = '<i>!!!</i>';

// let button = document.querySelector('#button');
// let text = document.querySelector('#elem');
// button.addEventListener('click', function() {
// 	text.innerHTML = '<b>' + text.textContent + '</b>';
// })

// let button = document.querySelector('#button');
// let text = document.querySelector('#elem');
// button.addEventListener('click', function() {
// 	text.innerHTML += '<p id=\'elem\'><b>text</b>'
// })

// let elem = document.querySelector('#elem');
// console.log(elem.id);
// console.log(elem.type);
// elem.type = 'submit';

// let email = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let text = document.querySelector('#text');
// button.addEventListener('click', function() {
// 	text.innerHTML = email.type;
// })

// let email = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	email.type = 'submit'; 
// })

// let button = document.querySelector('#button');
// let text = document.querySelector('#text');
// let web = document.querySelector('#web');
// button.addEventListener('click', function() {
// 	text.innerHTML = web.href;
// })

// let button = document.querySelector('#button');
// let web = document.querySelector('#web');
// button.addEventListener('click', function() {
// 	web.textContent = web.textContent + '(' + web.href + ')';
// })

// let button = document.querySelector('#button');
// let text = document.querySelector('#text');
// let image = document.querySelector('#photo');
// button.addEventListener('click', function() {
// 	text.innerHTML = image.src
// })

// let button = document.querySelector('#button');
// let image = document.querySelector('#photo');
// button.addEventListener('click', function() {
// 	image.width = 300;
// })

// let button = document.querySelector('#button');
// let image = document.querySelector('#photo');
// button.addEventListener('click', function() {
// 	image.width *= 2
// })

// let button = document.querySelector('#button');
// let button1 = document.querySelector('#button1');
// let image = document.querySelector('#photo');
// button.addEventListener('click', function() {
// 	console.log(image.src = '1.jpeg')
// })
// button1.addEventListener('click', function() {
// 	console.log(image.src = '1.jpg')
// })

// let elem = document.querySelector('#elem');
// console.log(elem.value);
// elem.value ='new text';

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
// 	elem.value = 'NewButton'
// })

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem.value = 'Al kalai?'
// })

// let elem = document.querySelector('#elem');
// let paragraff = document.querySelector('#abzas');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	paragraff.textContent = elem.value
// })

// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	console.log(elem1.value = elem.value ** 2)	
// })

// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	let newElem1 = elem1.value
// 	let newElem = elem.value
// 	elem1.value = newElem
// 	elem.value = newElem1
// })

// let elem = document.querySelector('#elem');
// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// let elem4 = document.querySelector('#elem4');
// let button = document.querySelector('#button');
// let abzas = document.querySelector('#parag');
// button.addEventListener('click', function() {
// 	let newElem = (+elem.value + +elem1.value + +elem2.value + +elem3.value + +elem4.value) / 5;
// 	abzas.textContent = newElem;
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	console.log(elem.value);
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = 1 
// })
// elem.addEventListener('blur', function() {
// 	elem.value = 2
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
// 	elem.value = elem.value ** 2
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', function() {
// 	elem.value = ' '
// })

// let elem = document.querySelector('#elem');
// console.log(elem.className);

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	console.log(elem.className)
// })

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem.className = 'Yuppi'
// })

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	let arr = elem.className.split(" ");
// 	console.log(arr);
// })

// let elem = document.querySelector('#elem');
// console.log(elem.value);

// console.log(document.querySelector('#elem').value);

// document.querySelector('#elem').value = 'www';

// console.log(document.querySelector('#image').src;

// let elem = document.querySelector('#elem');
// elem.value = 'www';
// elem.type = 'submit';

// let image = document.querySelector('#image');
// console.log(image.src)
// console.log(image.width)
// console.log(image.heigth)


// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
//  	console.log(this.value)
//  }
// function func() {
// 	console.log(this.value)
// }
// function func() {
// 	this.value = '!!!'
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', func);
// function func() {
// 	elem.value = 1;
// }
// elem.addEventListener('blur', func1);
// function func1() {
// 	elem.value = 2;
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);
// function func() {
// 	console.log(this);
// }
// function func() {
// 	console.log(this.value);
// }
// function func() {
// 	this.value = '!!!';
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('focus', func);
// function func() {
// 	console.log(this.value = 1 );
// }
// elem.addEventListener('blur', func1);
// function func1() {
// 	console.log(this.value = 2)
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	+this.value++;
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func);
// function func() {
// 	console.log(elem === this);
// }

// let button1 = document.querySelector('#button1');
// let button2 = document.querySelector('#button2');
// let button3 = document.querySelector('#button3');
// button1.addEventListener('click', func);
// button2.addEventListener('click', func);
// button3.addEventListener('click', func);
// function func() {
// 	console.log(this.value);
// }

// let parag1 = document.querySelector('#parag1');
// let parag2 = document.querySelector('#parag2');
// let parag3 = document.querySelector('#parag3');
// let parag4 = document.querySelector('#parag4');
// let parag5 = document.querySelector('#parag5');
// parag1.addEventListener('click', func);
// parag2.addEventListener('click', func);
// parag3.addEventListener('click', func);
// parag4.addEventListener('click', func);
// parag5.addEventListener('click', func);
// function func() {
// 	console.log(this.value = '!')
// }

// let elems = document.querySelectorAll('.www');
// for (let elem of elems) {
// 	console.log(elem.textContent);
// }
// let elems = document.querySelectorAll('.www');
// for(let elem of elems) {
// 	elem.textContent = elem.textContent + '!';
// }

// let button = document.querySelector('#button');
// let parags = document.querySelectorAll('.www');
// button.addEventListener('click', function() {
// for (let parag of parags){
// 	parag.textContent = parag.textContent + 'text'
// }
// })

// let button = document.querySelector('#button');
// let parags = document.querySelectorAll('.www');
// button.addEventListener('click', function() {
// 	for (let i = 0; i < parags.length; i++){
// 		parags[i].textContent = parags[i].textContent + (i + 1)
// 		console.log(parags[i]);
// 	}
// })

// let id = document.querySelector('#www');
// let button = document.querySelector('#button');
// let jais = document.querySelectorAll('.jai');
// let sum = 0;
// button.addEventListener('click', function() {
// 	for (let jai of jais) {
// 		sum = sum + +jai.value
// 	}
// 	id.textContent = sum;
// })

// function func() {
// 	console.log('!');
// }
// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }
// function func() {
// 	console.log(this.textContent);
// }

// let jais = document.querySelectorAll('.jai'); 
// for (let jai of jais) {
// 	jai.addEventListener('blur', func);
// }
// function func() {
// 	this.value = Number(this.value) + 1;
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function(){
// 		this.textContent = Number(this.textContent) ** 2;
// 	}) 
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	})
// }

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', func);
// }
// function func() {
// 	this.textContent++;
// }

// let divs = document.querySelectorAll('div');
// for (let div of divs) {
// 	div.addEventListener('click', function () {
// 		this.textContent++;
// 	})
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', func);

// function func() {
// 	console.log('!!!');
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', func);
// function func() {
// 	console.log('!!!');
// 	this.removeEventListener('click', func);
// }

// let web = document.querySelector('#web');
// web.addEventListener('click', func);
// function func() {
// 	this.textContent = this.textContent + "("+web.href+")";
// 	this.removeEventListener('click', func);
// }

// let button = document.querySelector('#button');
// button.addEventListener('click', func) 
// function func() {
// 	if (button.value < 10) {
// 		button.value++
// 	}
// }

// let elems = document.querySelectorAll('p')
// for (let elem of elems) {
// 	elem.addEventListener('click', func)
// }
// function func() {
// 	console.log(this.textContent);
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', func);
// }
// function func() {
// 	console.log(this.textContent);
// 	this.removeEventListener('click', func);
// }

// let elems = document.querySelectorAll('p')
// for(let elem of elems) {
// 	elem.addEventListener('click', func);
// 	function func() {
// 		this.textContent += '!'
// 		this.removeEventListener('click', func);
// 	}
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(this.textContent);
// 	});
// }

// let elems = document.querySelectorAll('p');
// for (let elem of elems) {
// 	elem.addEventListener('click', function func() {
// 		console.log(this.textContent);
// 		this.removeEventListener('click', func);
// 	});
// }

// let numbers = document.querySelectorAll('li');
// for(let elem of numbers) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = Number(this.textContent) + 1
// 	})
// }

// let numbers = document.querySelectorAll('li');
// function func(){
// 	this.textContent = +this.textContent + 1;
// 	this.removeEventListener('click', func);
// }
// for(let elem of numbers) {
// 	elem.addEventListener('click', func);
	
// }

// let numbers = document.querySelectorAll('li');
// function func(){
// 	if(this.textContent < 10){
// 		this.textContent = +this.textContent + 1;
// 		this.removeEventListener('click', func);
// 	}
// }
// for(let elem of numbers) {
// 	elem.addEventListener('click', func);
// }

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

// let elem = document.querySelector('#elem');
// let value = elem.getAttribute('value');
// console.log(value);

// let elem = document.querySelector('#elem');
// let classy = elem.getAttribute('class');
// console.log(classy);

// let elem = document.querySelector('#elem');
// elem.setAttribute('value', '!!!');

// let elem = document.querySelector('#elem');
// elem.setAttribute('value', 'text');


// let elem = document.querySelector('#elem');
// elem.setAttribute('class', 'valid');

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

// let elem = document.querySelector('#elem');
// elem.removeAttribute('value');

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// let elem = document.querySelector('#elem');
// console.log(elem.hasAttribute('value'));

// let elem = document.querySelector('#elem');
// let length = elem.classList.length;
// console.log(length);

// let elem = document.querySelector('#elem');
// let classNames = elem.classList;
// for(let className of classNames) {
// 	document.write(className + '<br>');
// }

// let elem = document.querySelector('#elem');
// let list = elem.classList.length;
// console.log(list);

// let elem = document.querySelector('#elem');
// let lists = elem.classList;
// for(let list of lists) {
// 	document.write(lists + '<br>');
// }

// let elem = document.querySelector('#elem');
// elem.classList.add('kkk');

// let elem = document.querySelector('#elem');
// elem.classList.add('zzz');

// let elem = document.querySelector('#elem');
// elem.classList.add('xxx');
// console.log(elem);

// let elem = document.querySelector('#elem');
// elem.classList.remove('ggg');

// let elem = document.querySelector('#elem');
// let contains = elem.classList.contains('ggg');
// console.log(contains);

// let elem = document.querySelector('#elem');
// elem.classList.remove('zzz')
// elem.classList.remove('www')
// console.log(elem);

// let elem = document.querySelector('#elem');
// console.log(elem.classList.contains('ggg'));

// let elem = document.querySelector('#elem');
// elem.classList.toggle('zzz');

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

// let elems = document.querySelectorAll('p')
// for(let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.classList.add('colored');
// 	})
// }

// let obzas = document.querySelector('#obzas');
// let button1 = document.querySelector('#button1') 
// 	button1.addEventListener('click', function() {
// 		obzas.classList.toggle('through')
// 	})
// let button2 = document.querySelector('#button2');
// 	button2.addEventListener('click', function() {
// 		obzas.classList.toggle('bold') 
// 	})
// let button3 = document.querySelector('#button3');
// 	button3.addEventListener('click', function() {
// 		obzas.classList.toggle('colored1')
// 	})

// let button = document.querySelector('#button');
// let elem = document.querySelector('#elem');
// button.addEventListener('click', function() {
// 	elem.classList.toggle('active');
// })

// let parent = document.querySelector('#parent');
// let text = parent.firstElementChild.innerHTML;
// console.log(text);

// let parent = document.querySelector('#parent');
// console.log(parent.firstElementChild)

// let parent = document.querySelector('#parent');
// let elems = parent.children;
// for(let elem of elems) {
// 	console.log(elem.innerHTML);
// }

// let elem1 = document.querySelector('#elem');
// let elems = elem1.firstElementChild.innerHTML;
// elem1.firstElementChild.style.color = 'red';
// console.log(elem1.firstElementChild)

// let elem = document.querySelector('#elem');
// elem.lastElementChild.style.color = 'red';
// console.log(elem.lastElementChild);

// let elems = document.querySelector('#elem');
// let elem = elems.children;
// for(let e of elem) {
// 	e.textContent += '!'
// }

// let elem = document.querySelector('#elem');
// let id = elem.parentElement.id;
// console.log(id);

// let elems = document.querySelector('#elem');
// let elem = elems.parentElement
// elem.style.borderBottom = '1px solid red'

// let elems = document.querySelector('#elem');	
// let elem = elems.parentElement.parentElement
// elem.style.borderBottom = '1px solid red'

// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
// console.log(parent.id);

// let elem = document.querySelector('#child');
// let parent = elem.closest('.www');
// console.log(parent.id)

// let elem = document.querySelector('#elem');
// let parent = elem.closest('.www');
// console.log(parent)

// let elem = document.querySelector('#elem');
// let text = elem.previousElementSibiling.innerHTML;
// console.log(text);

// let elem = document.querySelector('#elem');
// console.log(elem.previousElementSibling);

// let text = elem.nextElementSibling.innerHTML;
// console.log(text);

// let elem = document.querySelector('#elem');
// console.log(elem.nextElementSibling);

// let elem = document.querySelector('#elem');
// let a = elem.previousElementSibling.innerHTML + '!'
// console.log(a)

// let elems = document.querySelectorAll('#elem');
// for(let elem of elems) {
// 	console.log(elem.previousElementSibling.innerHTML + '!')
// }

// let elem = document.querySelector('#elem');
// let a = elem.nextElementSibling.innerHTML + '!'
// console.log(a);

// let elems = document.querySelectorAll('#elem');
// for(let elem of elems) {
// 	console.log(elem.nextElementSibling.innerHTML + '!!');
// }

// let elems = document.querySelector('#elem');
// let a = elems.nextElementSibling.innerHTML;//a=text4
// let b = elems.previousElementSibling.innerHTML;//b=text2

//  elems.nextElementSibling.innerHTML = b;
//  elems.previousElementSibling.innerHTML = a;

// let elem = document.getElementById('elem');
// elem.value = '!!!';

// let elem = document.getElementById('elem');
// elem.textContent = 'sometext';

// let elems = document.getElementsByTagName('p');
// for(let elem of elems) {
// 	elem.innerHTML = '!!!'
// }

// let elems = document.getElementsByTagName('ul');
// for(let elem of elems) {
// 	elem.style.color = 'red';
// }

// let elems = document.getElementsByClassName('www');
// for(let elem of elems) {
// 	elem.innerHTML = '!!!';
// }

// let elems = document.getElementsByClassName('www');
// for(let elem of elems) {
// 	elem.style.color = 'red';
// }

// let parent = document.querySelector('#parent');
// let elems = parent.querySelectorAll('.child');

// let parent = document.querySelector('#parent');
// let elems1 = parent.querySelectorAll('.www');
// let elems2 = parent.querySelectorAll('.ggg');
// console.log(elems1)
// console.log(elems2)

// let elem = document.querySelector('#elem');
// console.log(elem.dataset.num);

// let elem = document.querySelector('#elem');
// console.log(elem.dataset.num = 123);

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	elem.innerHTML += elem.dataset.text
// })

// let elems = document.querySelectorAll('div');
// for (let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		console.log(elem.innerHTML += elem.dataset.num)
// })
// }

// let counter = 0;
// let button = document.querySelector('#button');
// let div= document.querySelector('div');

// button.addEventListener('dblclick', function() {
// 	console.log(counter);
// })

// button.addEventListener('click', function() {
// 	div.dataset.num= counter;
// 	counter++
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function(){
// 	if(elem.dataset.length == elem.value.length)
// 		console.log('+')
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', function() {
// 	if(elem.dataset.min < +elem.value &&  +elem.value < elem.dataset.max)
// 		console.log('!');
// })

// let elem = document.querySelector('#elem');
// console.log(elem.dataset.myTest);

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	elem.innerHTML += elem.dataset.productPrice * elem.dataset.productAmount
// })

// let elem = document.querySelector('#elem');
// console.log(elem.getAttribute('data-num'));
// console.log(elem.getAttribute('data-my-num'));

// let obzas = document.querySelectorAll('p');
// for(let i = 0; i < obzas.length; i++) {
// 	obzas[i].setAttribute ('dataset.num', i) 
// }

// let elem = document.querySelector('#elem');
// console.log(elem.firstChild);
// console.log(elem.firstElementChild);

// let elem = document.querySelector('#elem');
// console.log(elem.firstChild);
// console.log(elem.firstElementChild);

// let elem = document.querySelector('#elem');
// console.log(elem.nextSibling);
// console.log(elem.nextElementSibling);

// let elem = document.querySelector('#elem');
// console.log(elem.previousSibling);
// console.log(elem.previousElementSibling);

// let elem = document.querySelector('#elem');
// console.log(elem.childNodes[0]);
// console.log(elem.childNodes[1]);
// console.log(elem.childNodes[2]);
// for (let node of elem.childNodes) {
// 	console.log(node);
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	console.log(node)
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	console.log(node)
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	if(node.nodeType == 1 || node.nodeType == 3) {
// 		console.log(node.nodeType);
// 	}
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	console.log(node.textContent);
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	if(node.nodeType == 3 || node.nodeType == 8) {
// 		console.log(node.textContent);
// 	}
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	if(node.nodeType == 1 || node.nodeType == 3) {
// 		console.log(node.textContent);	
// 	}
// }

// let elem = document.querySelector('#elem');
// for(let node of elem.childNodes) {
// 	if(node.nodeType == 1 || node.nodeType == 3 || node.nodeType == 8) {
// 		console.log(node.textContent + node.nodeType)
// 	}
// }

// let arr = [];
// let sum = 0;
// let elems = document.querySelectorAll('p');
// for(let elem of elems) {
// 	let text = +elem.textContent;
// 	if(text % 3 === 0) {
// 		sum += text;
// 	}
// }
// console.log(sum);


// let sum = 0;
// let text = [];
// let sum2 = 0
// let elems = document.querySelectorAll('li');
// for(let j = 0; j < elems.length; j++) {
// 		let l = elems[j].textContent
// 		l = String(l);
// 		for(let i = 0; i < l.length; i++) {
// 			sum = sum+ +l[i];
// 		}
// 		text[j] = sum;
// 		sum = 0;
// 		if(text[j] === 6) {
// 			sum2 += +elems[j].textContent;
// 		}
// }
// console.log(sum2);

// let elems = document.querySelectorAll('p');
// for(let elem of elems) {
// 	console.log(elem.textContent += '!');
// }

// let elems = document.querySelectorAll('p');
// for(let elem of elems) {
// 	elem.addEventListener('click', function() {
// 		this.textContent = +this.textContent + 1;
// 	})
// }

// let button = document.querySelector('button');
// let elem = document.querySelector('p');
// button.addEventListener('click', function() {
// 	elem.innerHTML = '<b>' + elem.innerHTML + '</b>'
// })

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// 	button.addEventListener('click', function() {
// 		let sum = 0;
// 		for(let elem of elems) {
// 			sum += Number(elem.textContent);
// }
// console.log(sum);
// });

// let elems = document.querySelectorAll('p');
// for(let elem of elems) {
// 	elem.addEventListener('click', function()  {
// 		this.textContent = this.textContent + '!';
// 	})
// }

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// button.addEventListener('click', function() {
// 	for(let elem of elems) {
// 		elem.innerHTML = '<b>' + elem.innerHTML + '</b>';
// 	}
// });

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('p');
// let sum = 0;
// 	button.addEventListener('click', function() {
// 		for(let elem of elems) {
// 	sum = sum + +elem.textContent;
// 	}
// 	console.log(sum)
// })

// let button = document.querySelector('button');
// let elems = document.querySelectorAll('input');
// let sum = 0;
// button.addEventListener('click', function() {
// 	for(let elem of elems) {
// 	sum += +elem.value;
// } 
// console.log(sum);
// });

// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function() {
// 	inp3.value = +inp1.value + +inp2.value
// })

// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// btn.addEventListener('click', function() {
// 	res.textContent = +inp1.value + +inp2.value;
// })

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
//  btn.addEventListener('click', function() {
// 	for(let input of inputs) {
// 		if(input.value === input.dataset.text) {
// 			input.classList.add('ok')
// 		} else {
// 			input.classList.add('notOk')
// 		}
// 	}
// })

// let btn = document.querySelector('#btn');
// let elems = document.querySelectorAll('input');
// let sum = 0;
// btn.addEventListener('click', function() {
// 	for(let elem of elems) {
// 		sum += +elem.value;
		
// 	}
// 	console.log(sum)
// })

// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function() {
// 	console.log(inp3.value = +inp1.value + +inp2.value);
// })

// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// btn.addEventListener('click', function() {
// 	console.log(res.textContent = +inp1.value + +inp2.value);
// })

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function () {
// 	for(let input of inputs) {
// 		if(input.value === input.dataset.text) {
// 			input.classList.add('ok')
// 		} else {
// 			input.classList.add('notOk')
// 		}
// 	}
// })

// let inputs = document.querySelectorAll('input')
// let button = document.querySelector('#btn')
//     let texts = [
//                 'text1',
//                 'text2',
//                 'text3',
//             ];

//             button.addEventListener('click', function() {
//             for (let input of inputs) {
//                 let matched = false;
//                 for (let text of texts) {
//                     if (input.value === text) {
//                         matched = true;
//                         break;
//                     }
//                 }
//                 if (matched) {
//                     input.classList.add('ok');
//                 } else {
//                     input.classList.add('notOK');
//                 }
//             }
//         });

// let inputs = document.querySelectorAll('input');
// let btn = document.querySelector('#btn');
// let sum = 0;
// btn.addEventListener('click', function() {
// 	for(let input of inputs) {
// 		sum += Number(input.value);
// 	}
// 	console.log(sum);
// })

// let btn = document.querySelector('#btn');
// let inp1 = document.querySelector('#inp1');
// let inp2 = document. querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// btn.addEventListener('click', function() {
// 	let sum = +inp1.value + +inp2.value;
// 	inp3.value = sum;
// });

// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let digits = inp.value.split('');
// 	let sum = 0;
// 	for(let digit of digits) {
// 		sum += +digit
// 	}
// 	console.log(sum);
// })

// let inp = document.querySelector('#inp');
// let res = document.querySelector('#res');
// inp.addEventListener('blur', function(){
//  	res.textContent += inp.value;
// })

// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// let res = document.querySelector('#res');
// let btn = document.querySelector('#btn');
// btn.addEventListener('focus', function() {
// 	let sum = +inp1.value + +inp2.value + +inp3.value;
// 	res.textContent = sum;
// })

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.split('');
// 	let sum = 0;
// 	for(let digit of digits) {
// 		sum += +digit
// 	}
// 	console.log(sum);
// })

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.split(',');
// 	let sum = 0;
// 	for(let digit of digits) {
// 		sum += +digit
// 	}
// 	let avg = sum / digits.length;
// 	console.log(avg);
// })

// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let inp3 = document.querySelector('#inp3');
// let inp4 = document.querySelector('#inp4');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.split(' ');
// 	inp2.value = digits[0];
// 	inp3.value = digits[1];
// 	inp4.value = digits[2];
// })

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.split(' ');
// 	digits = digits.map(function(name) {
// 		return name.charAt(0).toUpperCase() + name.slice(1)
// 	})
// 	inp1.value = digits.join(" ");
// })

// let inp1 = document.querySelector('#inp1');
// let res = document.querySelector('#res');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.trim();
// 	if(digits == ""){
// 		res.textContent = 0;
// 	}else{
// 		let digits1 = digits.split(' ');	
// 		res.textContent = digits1.length;
// 	}
// })

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.split('.')
// 	inp1.value = digits[2] + '-' + digits[1] + '-' + digits[0];
// })

// let inp1 = document.querySelector('#inp1');
// let btn = document.querySelector('#btn')
// btn.addEventListener('click', function() {
// 	let yes = true
// 	let word = inp1.value
// 	for(let i = 0; i < word.length / 2; i++) {
// 		if(word[i] != word[word.length - i - 1]) {
// 			yes = false;
// 			break
// 		}
// 	} if (yes) {
// 		alert('it is a polindrom')
// 	} else {
// 		alert('it is not a polindrom')
// 	}
// })

// let inp1 = document.querySelector('#inp1');
// inp1.addEventListener('blur', function() {
// 	let digits = inp1.value.split('');
// 	for(let digit of digits) {
// 		if(digit == 3) {
// 			console.log(digit);
// 		}
// 	}
// })

// let paragraphs = document.querySelectorAll('p');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	for(let i = 0; i < paragraphs.length; i++) {
// 		paragraphs[i].innerHTML += ' ' + (i + 1); 
// 	}
// })

// let href = document.querySelectorAll('a');
// for(let i = 0; i < href.length; i++) {
// 	href[i].innerHTML += '(' + href[i].href +')'
// }

// let href = document.querySelectorAll('a');
// 	for(let i = 0; i < href.length; i++) {
// 		if(href[i].href.startsWith('http://')) {
// 			href[i].innerHTML += '&rarr;'
// 			console.log(href[i]);
// 		}
// 	}

// let paragraphs = document.querySelectorAll('p');
// 	for(let i = 0; i < paragraphs.length; i++) {
// 		paragraphs[i].addEventListener('click', function() {
// 			let number = Number(paragraphs[i].innerHTML)
// 			paragraphs[i].innerHTML *= number
// 		}) 
// 	}

// let input = document.querySelector('#input');
// 	input.addEventListener('blur', function() {
// 		let date = new Date(input.value.split('.').reverse().join('-'));
// 		let days = ['Sunday',
// 					'Monday',
// 					'Tuesday',
// 					'Wednesday',
// 					'Thursday',
// 					'Friday',
// 					'Saturday'];
// 		let dayy = days[date.getUTCDay()]
// 		alert(dayy)
// })

// let input = document.querySelector('#input');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', function() {
// 	input.value = Math.max(0, Number(input.value) + 1) 
// })
// btn2.addEventListener('click', function() {
// 	input.value = Math.max(0, Number(input.value) - 1) 
// })

// let input = document.querySelector('#inp');
// let ress = document.querySelectorAll('p');
// input.value = 0;
// 	 ress.forEach(function(res) {
// 	 	res.addEventListener('click', function() {
// 			input.value++
// 		})
// 	})

// let div = document.querySelectorAll('div');
// div.forEach(function(text) {
// 	let content = text.textContent
// 	if(content.length > 10) {
// 		text.textContent = content.slice(0, 10) + '...';
// 	}
// }) 

// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let vr = Number(inp.value)
// 	if(vr >= 1 && vr <= 100) {
// 		inp.style.backgroundColor = 'green'
// 	} else {
// 		inp.style.backgroundColor = 'red'
// 	}
// })

// let inp = document.querySelector('#inp');
// inp.addEventListener('blur', function() {
// 	let vr = Number(inp.value)
// 	if(vr >= 1 && vr <= 100) {
// 		inp.classList.add('ok')
// 	} else {
// 		inp.classList.add('notOk')
// 	}
// })

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	let chars = 'QWERTYUIOPASDFGHJKLZXCVBNMqwertyuiopasdfghjklzxcvbnm';
// 	let str = '';
// 	for(let i = 0; i <= 8; i++) {
// 		str += chars.charAt(Math.floor(Math.random() * chars.length));
// 	}
// 	inp.value = str;
// })

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	let str1 = inp.value;
// 	let str2 = str1.split('').sort(() => Math.random() - 0.5).join('');
// 	inp.value = str2;
// })

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// btn.addEventListener('click', function() {
// 	let f = Number(inp.value);
// 	let c = (f - 32) * (5/9); 
// 	res.textContent = c.toFixed(2) + 'C';
// })

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// btn.addEventListener('click', function() {
// 	let num = Number(inp.value)
// 	let fac = 1;
// 	for(let i = 1; i <= num; i++) {
// 		fac *= i
// 	}
// 	res.textContent = fac;
// })

	// let btn = document.getElementById("btn");
	// let res = document.getElementById("res");
	// btn.addEventListener('click', function(){
	// 	let a = Number(document.querySelector('#inp1').value);
	// 	let b = Number(document.querySelector('#inp2').value);
	// 	let c = Number(document.querySelector('#inp3').value);
	// 	console.log(a)
	// 	let disc= b*b - 4*a*c;
	//
	// 	if(disc<0){
	// 		res.textContent= "No real root"
	// 	} else if(disc ==0){
	// 		let root = -b/2*a;
	// 		res.textContent="One root"+root;
	// 	}else{
	// 		let x1=(-b+Math.sqrt(disc))/(2*a);
	// 		let x2=(-b-Math.sqrt(disc))/(2*a);
	// 		res.textContent="two root"+x1+"and"+x2;
	// 	}
	// })
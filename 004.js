//'use strict'
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


// func (['Jhon', 'Smit', 'development', 'programmer', 2000]);
// function func ([name, surname, info]){
// 	console.log(name);
// 	console.log(surname);
// 	console.log(info);
// }

// func(['Jhon', 'Smit', 'development'])
// function func([name, surname, department, position = 'junior']) {
// 	console.log(name);
// 	console.log(position);
// }

// func (['Jhon', 'Smit', 'development', 12, 31, 2022]);
// function func([name, surname, department, ...hired]) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(hired);
// }

// function func({year, month, day}) {
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// }
// func({year: 2025, month: 12, day: 31});

// func({color: 'Red', width: 400, heigth: 500})
// function func({color, width, heigth}) {
// 	console.log(color);
// 	console.log(width);
// }

// func({width: 400, heigth: 500})
// function func({color = 'black', width, hiegth}) {
// 	console.log(color);
// 	console.log(width);
// }

// let date = new Date();
// console.log(date);

// let date = new Date();
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDate());
// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());


// let date = new Date();
// console.log(date.getMonth());

// let date = new Date();
// console.log(date.getFullYear());

// let date = new Date();
// console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

// let date = new Date();
// console.log(date.getFullYear() + '-' + (date.getMonth() + 1) + '-' + date.getDate());

// function addZero (num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }
// console.log(addZero());

// let date = new Date();
// console.log(
// 	addZero(date.getFullYear()) + '-' +
// 	addZero(date.getMonth() + 1) + '-' +
// 	addZero(date.getDate())
// 	);


// function addZero (num) {
// 	if (num >= 0 && num <= 9) {
// 		return '0' + num;
// 	} else {
// 		return num;
// 	}
// }

// let date = new Date();
// console.log(

// 	addZero(date.getHours()) + ':' +
// 	addZero(date.getMinutes()) + ':' +
// 	addZero(date.getSeconds()) + ' ' +

// 	addZero(date.getDate()) + '.' +
// 	addZero(date.getMonth() + 1) + '.' +
// 	addZero(date.getFullYear())
// );

// let str = '2025-12-31';
// let arr = str.split('-');
// let res = arr[2] + '/' + arr[1] + '/' + arr[0];
// console.log(res);

// let str = '2025-12-31';
// let res = str.split('-').reverse().join('/');
// console.log(res);

// let str = '2022-11-29';
// let res = str.split('-').reverse().join('/');
// console.log(res);

// let date = new Date();
// let d=date.getDay();

// if(d >= 1 || d < 6) {
// 	console.log('work days');
// } else {
// 	console.log('weekend');
// }
// console.log(date.getDay());

// let today = 7 - date.getDay();
// console.log(today);

// let date = new Date();
// let day = date.getDay();
// let days = ['vs', 'pn', 'vt', 'sr', 'ch', 'pt', 'su'];
// console.log(days[day]);
// console.log(day);

// let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
// let date = new Date();
// let month = date.getMonth();
// console.log(months[month]);

// let date = new Date(2025, 10, 5);
// let day = date.getDay();
// let days = ['vs', 'pn', 'vt', 'sr', 'chet', 'pya', 'sub'];
// console.log(days[day]);

// let date = new Date(1987, 0, 21);
// let bday = date.getDay();
// let days = ['vs', 'pn', 'vt', 'sr', 'chet', 'pya', 'sub'];
// console.log(days[bday]);

// let date = new Date();
// console.log(date.getTime());

// let date1 = new Date(2015, 11, 4, 23, 59, 59);
// console.log(date1.getTime());

// let now = new Date();
// let date = new Date(2015, 11, 4, 23, 59, 59);
// let diff = now.getTime() - date.getTime();
// console.log(diff / 1000 * 60 * 60);

// let date = new Date(2000, 1, 10, 23, 59, 59);
// let date1 = new Date(1988, 3, 1, 23, 59, 59);
// let newDate = date - date1;
// console.log(newDate);

// let date = new Date();
// let me = new Date(1987, 1, 21, 23, 59, 59);
// let diff = date - me;
// console.log(diff);

// let n2 = new Date(2000, 9, 1);
// let n1 = new Date(2010, 2, 15);
// let diff = n1 - n2;
// console.log(diff / (1000 * 60 * 60 * 24 * 30 * 12));

// let date = new Date(2018, 0, 35);
// console.log(date);

// let date = new Date(2018, 1, -1);
// console.log(date);

// let date = new Date(2018, -1, 1);
// console.log(date);

// let date = new Date(2018, 0, 1, 25, 0, 0)
// console.log(date);

// let date = new Date(2018, 1, 35);
// console.log(date);

// let date = new Date(2018, 15, 1);
// console.log(date);

// let date = new Date (2018, 3, 31);
// console.log(date);

// let date = new Date(2018, 1, 31);
// console.log(date);

// let date = new Date(2018, 12, 33);
// console.log(date);

// let date = new Date (2018, 33, 33);
// console.log(date);

// let date = new Date(2018, 5, 0);
// console.log(date);

// let date = new Date(2018, 0, 0);
// console.log(date);

// let date = new Date(2018, -12, -33);
// console.log(date);

// let date = new Date(2018, 0, 1, 23, 0, 60);
// console.log(date);

// let date = new Date(2018, 0, 1, 23, 60, 0);
// console.log(date);

// let date = new Date(2018, 0, 1, 100, 100, 100);
// console.log(date);

// let date = new Date(2020, 3, 0);
// console.log(date.getDate());

// let date = new Date(2022, 11, 1);
// console.log(date);

// let date = new Date(2025, 4, 0);
// console.log(date);

// let date = new Date(2020, 2, 0);
// console.log(date.getDate());

// let date = new Date(2020, 2, 0);
// if (date.getDate() == 29) {
// 	console.log('vis');
// } else {
// 	console.log('obi');
// }

// let isLeap = new Date(2020, 2, 0);
// if (isLeap.getDate() == 29) {
// 	console.log(true)
// } else {
// 	console.log(false);
// }

// let year = 2025;
// let month = 0;
// let day = 32;

// let date = new Date(year, month, day);

// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	console.log('corr')
// } else {
// 	console.log('not corr');
// }
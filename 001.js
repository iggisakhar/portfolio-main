// "Use strict"

// let res = document.querySelector('#res');
// let textarea = document.querySelector('#textarea');
// textarea.addEventListener('blur', function() {
// 	res.textContent = textarea.value;
// })

// let elem = document.querySelector('#elem');
// console.log(elem.disabled);

// let elem = document.querySelector('#elem');
// elem.disabled = false;

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	elem.disabled = true;
// })

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', function() {
// 	elem.disabled = true;
// })
// btn2.addEventListener('click', function() {
// 	elem.disabled = false;
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	console.log(elem.disabled);
// })

// let elem = document.querySelector('#elem');
// console.log(elem.checked);

//#1 

// let elem = document.querySelector('#elem');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// btn1.addEventListener('click', function (){
// 	elem.checked = true;
// })
// btn2.addEventListener('click', function (){
// 	elem.checked = false;
// })

//2

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// btn.addEventListener('click', function (){
// 	if(elem.checked) {
// 		res.textContent = 'Hello';
// 	} else {
// 		res.textContent = 'Good Bye';
// 	}
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	if (elem.disabled) {
// 		elem.disabled = false;
// 	} else {
// 		elem.disabled = true;
// 	}
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function() {
// 	elem.disabled = !elem.disabled;
// })

// let elem = document.querySelector('#elem');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	elem.disabled = !elem.disabled
// })

// let btn = document.querySelector('#btn');
// let radios = document.querySelectorAll('input[type="radio"]');
// btn.addEventListener('click', function() {
// 	for(let radio of radios) {
// 		if(radio.checked) {
// 			console.log(radio.value);
// 		}
// 	}
// });

// let btn = document.querySelector('#btn');
// let res = document.querySelector('#res');
// let radios = document.querySelectorAll('input[type="radio"]')
// btn.addEventListener('click', function() {
// 	for(let radio of radios) {
// 		if(radio.checked) {
// 			console.log(radio.value)
// 		}
// 	}
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function(){
// 	console.log(this.value);
// })

// let elem = document.querySelector('#elem');
// let res = document.querySelector('#res');
// elem.addEventListener('change', function(){
// 	res.textContent = this.value;
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('change', function(){
// 	console.log(this.value);
// });

/*let elem = document.querySelector('#elem');
elem.addEventListener('change', function(){
	if(elem.value.length < 5) {
		elem.classList.add('colored');
		//elem.style.color="green";
	} else {
		elem.classList.add('colored1')
		//elem.style.color="red";
	}
*/

// let elem = document.querySelector('#elem');
// 	elem.addEventListener('input', function() {
// 		console.log(this.value);
// 	})

// let elem = document.querySelector('#elem');
// elem.addEventListener('input', function() {
// 	if(this.value.length >= 5)
// 		console.log('5 symbols');
// })

// let elem = document.querySelector('#elem');
// let res = document.querySelector('#res');
// elem.addEventListener('input', function() {
// 	let sum = 5 - elem.value.length;
// 	if(sum >= 0) {
// 		res.innerHTML = 'you can add ' + sum
// 	} else {
// 		res.innerHTML = 'delete ' + Math.abs(sum) + ' symbols'
// 	}
// })

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	elem.focus()
// })

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// elem1.addEventListener('input', function() {
// 	if(elem1.value.length === 2) {
// 		elem2.focus()
// 	}
// 	})
// elem2.addEventListener('input', function() {
// 	if(elem2.value.length === 2) {
// 		elem2.blur()
// 	}
// })

// let select = document.querySelector('#select');
// select.addEventListener('change', function() {
// 	console.log(this.value);
// })

// let res = document.querySelector('#res');
// let select = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let opt = select.options[select.selectedIndex].text;
// 	res.innerHTML = opt;
// })

// let select = document.querySelector('#select');
// let res = document.querySelector('#res');
// select.addEventListener('change', function(){
// 	let year = this.value;
// 	if(year % 4 === 0 && (year % 100 != 0 || year % 400 === 0)) {
// 		res.innerHTML = 'year vis'
// 	} else {
// 		res.innerHTML = 'year not vis'
// 	}
// })

// select.addEventListener('change', function(){
// 	console.log(this.value)
// })

// let select = document.querySelector('#select');
// select.addEventListener('change', function(){
// 	let weekDay = this.value;
// 	if(weekDay == 6 || weekDay == 7) {
// 		console.log('dayOff')
// 	} else {
// 		console.log('work bitch')
// 	}
// })

// let select = document.querySelector('select');
// let button = document.querySelector('#button');
// button.addEventListener('click', function() {
// 	select.value = 'one';
// })

// let select = document.querySelector('#select');
// let month = new Date().getMonth() + 1;
// select.value = month;

// let select = document.querySelector('#select');
// console.log(select.selectedIndex);

// let vselect = document.querySelector('#select');
// select.selectedIndex = 2;

// let input = document.querySelector('#inp');
// let select = document.querySelector('#select');
// inp.addEventListener('blur', function(){
// 	select.selectedIndex = this.value
// })

// let select = document.querySelector('#select');
// let dayOfWeek = [
// 	'Sunday', 
// 	'Monday',
// 	'Tuesday',
// 	'Wednesday',
// 	'Thursday',
// 	'Friday',
// 	'Satuday'
// ]
// for(let i = 0; i < dayOfWeek.length; i++) {
// 	let option = document.createElement('option');
// 	option.value = i;
// 	option.textContent = dayOfWeek[i];
// 	select.appendChild(option);
// }
// let today = new Date().getDay();
// select.selectedIndex = today;

// console.log(document.querySelectorAll('#select option'));

// let select = document.querySelector('#select');
// console.log(select.querySelectorAll('option'));

// let select = document.querySelector('#select');
// for(let option of select) {
// 	console.log(option);
// }

// let select = document.querySelector('#select');
// console.log(select[1])

// let select = document.querySelector('#select');
// let option = select.querySelectorAll('option');
// for(let i = 0; i < option.length; i++) {
// 	option[i].textContent = option[i].textContent + ' ' + option[i].value
// }

// let select = document.querySelector('#select');
// let option = select[0];
// console.log(option.text);
// console.log(option.value);
// console.log(option.selected);

// let select = document.querySelector('#select');
// let option = select.querySelectorAll('option');
// for(let i = 0; i < option.length; i++){
// 	if(option[i].selected) {
// 		option[i].textContent += '!'
// 	} else {
// 		option[i].textContent += '?'
// 	}
// }

// let select = document.querySelector('#select');
// let option = select[2];
// option.selected = true;

// let btn = document.querySelector('#btn');
// let select = document.querySelector('#select');
// btn.addEventListener('click', function(){
// 	select.selectedIndex = select.options.length -1;
// })

// let btn = document.querySelector('#btn');
// let select = document.querySelector('#select');
// btn.addEventListener('click', function(){
// 	let option = select[2];
// 	option.selected = true;
// })

// let select = document.querySelector('#select');
// console.log(select[select.selectedIndex]);

// let select = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let option = select[2];
// 	option.selected = true;
// 	console.log(option.textContent)
// })

// let select = document.querySelector('#select');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let option = select[2];
// 	option.selected = true;
// 	console.log(option.textContent + '!')
// })

// let textarea = document.querySelector('#textarea');
// let div = document.querySelector('#div');
// textarea.addEventListener('blur', function(){
// 	div.innerHTML = textarea.value;
// })

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn');
// let div = document.querySelector('#div');
// btn.addEventListener('click', function(){
// 	if(inp.checked) {
// 		div.innerHTML = '111';
// 	} else {
// 		div.innerHTML = '222';
// 	}
// });

// let inp = document.querySelector('[type="checkbox"]');
// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	if(inp.checked){
// 		console.log('Yes')
// 	} else {
// 		console.log('No')
// 	}
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	console.log(event);
// })

// let inp = document.querySelector('#inp');
// let btn = document.querySelector('#btn');
// let div = document.querySelector('#div');
// btn.addEventListener('click', function(event) {
// 	console.log(event);
// })

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY
// })

// let elem = document.getElementById('elem');
// document.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.pageX + ' : ' + event.pageY
// });

// let elem = document.getElementById('elem');
// elem.addEventListener('mousemove', function(event) {
// 	elem.innerHTML = event.clientX + ' : ' + event.clientY
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', func) 
// elem.addEventListener('dblclick', func1);
// function func(){
// elem.style.color = 'green'
// }
// function func1(){
// 	elem.style.color = 'red'
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event) {
// 	console.log(event.target);
// 	console.log(this);
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
// 	if(event.target.tagName === 'LI') {
// 		event.target.textContent += '!';
// 	} else if(event.target.tagName === 'UL') {
// 		let li = document.createElement('li');
// 		li.textContent = 'text';
// 		event.target.appendChild(li); 
// 	}
// })

// let elem = document.querySelector('input');
// elem.addEventListener('keypress', function(event){
// 		console.log(event.key);
// 	})

// let inp = document.querySelector('#inp');
// let elem = document.querySelector('#elem');
// inp.addEventListener('keydown', function(event){
// 	if(event.key === 'Enter'){
// 		event.preventDefault()
// 		let text = inp.value.trim();
// 		if(text){
// 			elem.textContent = text;
// 			inp.value = '';
// 		}
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
// 	if(event.ctrlKey){
// 		console.log('press Ctrl')
// 	}
// 	if(event.altKey){
// 		console.log('press Alt')
// 	}
// 	if(event.shiftKey){
// 		console.log('press Shfit')
// 	}
// })

// let div = document.querySelector('#div');
// div.addEventListener('click', function(event){
// 	if(event.altKey){
// 		div.style.color = 'red';
// 	}
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
// 	if(event.target.tagName === 'LI'){
// 		let li = event.target;
// 		if(event.altKey){
// 			li.textContent += ' 1';
// 		} else if(event.shiftKey) {
// 			li.textContent += ' 2'
// 		}
// 	}
// })

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
// 	if(event.ctrlKey){
// 		console.log('Ctrl pressed')
// 	}
// 	if(event.altKey){
// 		console.log('Alt pressed')
// 	}
// 	if(event.shiftKey){
// 		console.log('Shift pressed')
// 	}
// })

// let elem = document.querySelector('#elem');
// let parag = document.querySelector('#parag');
// parag.addEventListener('click', function(event){
// 	if(event.altKey){
// 		parag.style.backgroundColor = 'red'
// 	}
// })

// let elem = document.querySelector('#elem');
// let items = elem.getElementsByTagName('li');
// for(let i = 0; i < items.length; i++){
// 	items[i].addEventListener('click', function(event){
// 		let number = '';
// 		if(event.altKey) {
// 			number = '1';
// 		} else if(event.shiftKey){
// 			number = '2';
// 		}
// 		this.textContent += number;
// 	})
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(event){
// 	event.preventDefault();
// 	console.log('you can move to another website');
// });

// let links = document.getElementsByTagName('a');
// for(let i = 0; i < links.length; i++){
// 	links[i].addEventListener('click', function(event){
// 		event.preventDefault();
// 		this.textContent += this.getAttribute('href')
// 	})
// }

// let inp1 = document.querySelector('#inp1');
// let inp2 = document.querySelector('#inp2');
// let parag = document.querySelector('#parag');
// let link = document.querySelector('#link');
// link.addEventListener('click', function(event){
// 	let result = +inp1.value + +inp2.value;
// 	parag.textContent = result;
// })

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem3 = document.querySelector('#elem3');
// elem1.addEventListener('click', function(){
// 	console.log('green');
// });
// elem2.addEventListener('click', function(){
// 	console.log('blue');
// });
// elem3.addEventListener('click', function(){
// 	console.log('red');
// });

// let div1 = document.querySelector('#div1');
// let div2 = document.querySelector('#div2');
// let div3= document.querySelector('#div3');
// div1.addEventListener('click', function(){
// 	console.log('black');
// })
// div2.addEventListener('click', function(){
// 	console.log('brown');
// })
// div3.addEventListener('click', function(){
// 	console.log('white');
// })

// let div = document.querySelector('div');
// div.addEventListener('click', function(event){
// 	if(event.target.tagName = 'DIV') {
// 		console.log('you clicked on div');
// 	} 
// 	if(event.target.tagName === 'P') {
// 		console.log('you clicked on p')
// 	}
// });

// let div = document.querySelector('div');
// div.addEventListener('click', function(event){
// 	if(event.target.matches('div')){
// 		console.log('clicked on div')
// 	} else if (event.target.matches('p')){
// 		console.log('clicked on p')
// 	}
// });

// function parent() {
// 	let str = 'abcde';
// 	function child() {
// 		console.log(str);
// 	}
// 	child();
// }
// parent();

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent(){
// 	console.log(this.value)
// 	let self = this;
// 	function child(){
// 		console.log(self.value)
// 	}
// 	child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', func);

// function func(){
// 	alert(square());
// 	function square() {
// 		return Number(elem.value) * Number(elem.value);
// 	}
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent(){
// 	child(this);
// 	function child(param) {
// 		console.log(param.value);
// 	}
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent(){
// 	console.log(child(this))
// 	function child(param){
// 		return Number(param.value) * Number(param.value);
// 	}
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent(){
// 	console.log(this.value);
// 	let child = () => {
// 		console.log(this.value);
// 	}
// 	child();
// }

// let elem = document.querySelector('#elem');
// elem.addEventListener('blur', parent);
// function parent(){
// 	console.log(this.value * this.value)
// 	let child = () => {
// 		console.log(this.value);
// 	}
// 	child();
// 	};

// let elem = document.querySelector('#elem');
// function func(){
// 	console.log(this.value);
// }
// func.call(elem);

// let elem = document.querySelectorAll('#elem');
// function func(){
// 	for(let elems of elem) {
// 		console.log(elems.value);
// 	}	
// }
// func.call(elem)

// let elem = document.querySelector('#elem');
// let param1 = 1;
// let param2 = 2;
// function func(param1, param2) {
// 	console.log(this.value + param1 + param2);
// }
// func.call(elem, param1, param2);

// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// func.call(elem, 'Smit', 'John');

// let elem = document.querySelector('#elem');
// function func(surname, name) {
// 	console.log(this.value + ', ' + surname + ' ' + name);
// }
// func.apply(elem, ['John', 'Smit']);

// let elem = document.querySelector('#elem');
// let newFunc = func.bind(elem);
// function func(param1, param2) {
// 	console.log(this.value + param1 + param2);
// }
// newFunc('1', '2');

// let elem = document.getElementById('elem');
// let newFunc = func.bind(elem);
// function func(name, surname) {
// 	console.log(this.value + ', ' + name + ' ' + surname);
// }
// newFunc('John', 'Smit');
// newFunc('Eric', 'Luis');

// setInterval(timer, 1000);
// function timer(){
// 	console.log('!');
// }

// setInterval(function(){
// 	console.log('Akiljan AGAI');
// }, 1000);

// let i = 0;
// setInterval(function(){
// 	i++;
// 	console.log(i);
// }, 1000);

// let i = 0;
// setInterval(() => console.log(++i), 1000);

// let i = 100;
// setInterval(() => console.log(--i), 1000);

// let start = document.querySelector('#start');
// start.addEventListener('click', function(){
// 	let i = 0;
// 	setInterval(function() {
// 		console.log(++i);
// 	}, 1000);
// })

// let start = document.querySelector('#start');
// start.addEventListener('click', function(){
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// })

// let start = document.querySelector('#start');
// start.addEventListener('click', function func(){
// 	let i = 0;
// 	setInterval(function(){
// 		console.log(++i);
// 	}, 1000);
// 	this.removeEventListener('click', func);
// });


// let start = document.querySelector('#start');
// start.addEventListener('click', function func(){
// 	let i = 100;
// 	setInterval(function() {
// 		console.log(--i);
// 	}, 1000);
// 	this.removeEventListener('click', func)
// })

// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// start.addEventListener('click', function(){
// 	let i = 0;
// 	timerId = setInterval(function(){
// 		console.log('!');
// 	}, 1000);
// });
// stop.addEventListener('click', function(){
// 	clearInterval(timerId)
// });

// let num = 10;
// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// start.addEventListener('click', startTimer);
// stop.addEventListener('click', stopTimer);
// function startTimer() {
// 	timerId = setInterval(decNum, 1000);
	
// 			// function decNum(){
// console.log(num --)
// if(num === 0){
// 	clearInterval(timerId)
// }
// }
// function stopTimer(){
// 	if(timerId){
// 		clearInterval(timerId)
// 	}
// }

// let num = 10;
// let timerId;
// document.querySelector('#start').addEventListener('click', function() {
// 	timerId = setInterval(function(){
// 		console.log(num --)
// 		if(num === 0){
// 			clearInterval(timerId)
// 		}
// 	},1000);
	
// });

// document.querySelector('#stop').addEventListener('click', function(){
// 	if(timerId){
// 		clearInterval(timerId)
// 	}
// });

// let timerId;
// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// start.addEventListener('click', function(){
// 	 timerId = setInterval(function(){
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function(){
// 	clearInterval(timerId);
// });

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function(){
// 	timerId = setInterval(function(){
// 		let date = new Date;

// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function(){
// 	clearInterval(timerId);
// })

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', function(){
// 	timerId = setInterval(function(){
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + date.getSeconds());
// 	}, 1000);
// });
// stop.addEventListener('click', function(){
// 	clearInterval(timerId);
// })

// let start = document.querySelector('#start');
// let stop = document.querySelector('#stop');
// let timerId;
// start.addEventListener('click', startCounter);
// stop.addEventListener('click', stopCounter);


// function startCounter(){
// 	start.removeEventListener('click', startCounter);
// 	timerId = setInterval(function(){
// 		let date = new Date;
// 		console.log(date.getMinutes() + ' ' + 
// 			date.getSeconds());
// 	}, 1000);
// }
// function stopCounter(){
// 	start.addEventListener('click', startCounter);
// 	clearInterval(timerId);
// }

// let timerId;
// let elem = document.querySelector('#elem');
// timerId = setInterval(function(){
// 	elem.value = Number(elem.value) - 1;
// 	if(elem.value == 0) {
// 		clearInterval(timerId);
// 	}
// }, 1000);

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function (){
// 	let self = this;

// 	setInterval(function(){
// 		console.log(self.value);
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');
// let self = Number(elem.value);
// elem.addEventListener('click', function(){
// 	setInterval(function(){
// 		self++
// 		elem.value = self;
// 	}, 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	setInterval(() => console.log(this.value), 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	function func(self){
// 		return function(){
// 			console.log(self.value);
// 		}
// 	}
// 	setInterval(func(this), 1000);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	setInterval((function(self) {
// 		return function(){
// 			console.log(self.value);
// 		}
// 	})(this), 1000);
// });

// setInterval(func, 1000, 'a', 'b');
// function func(str1, str2){
// 	console.log(str1, str2);
// }

// setInterval(function(str1, str2){
// 	console.log(str1, str2);
// }, 1000, 'a', 'b');

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	setInterval(func, 1000, this);
// 	function func(self){
// 		console.log(self.value);
// 	}
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	setInterval(function(self) {
// 		console.log(self.value);
// 	}, 1000, this);
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	setInterval(() => {elem.value--}, 1000);
// });

// let btn = document.querySelector('#btn');
// let parag = document.querySelector('#parag');
// let timerId;
// btn.addEventListener('click', function(){
// 	timerId = setInterval(function(){
// 	parag.textContent++
// }, 1000)
// })

// let btn = document.querySelector('#btn');
// let parag = document.querySelector('#parag');
// let timerId;
// btn.addEventListener('click', function(){
// 	timerId = setInterval(function(){
// 		parag.textContent--
// 		if(parag.textContent == 0){
// 			clearInterval(timerId)
// 		}
// 	}, 1000)
// })

// let elem = document.querySelector('#elem');
// setInterval(function(){
// 	let counter = Number(elem.value);
// 	let square = counter * counter;
// 	elem.value = square;
// }, 1000)

// let elem = document.querySelector('#elem');
// let parag = document.querySelector('#parag');
// let timerId;
// let counter;
// elem.addEventListener('blur', function() {
// 	counter = Number(elem.value);
// 	parag.textContent = counter.toString();
// 	timerId = setInterval(function(){
// 		counter--
// 		parag.textContent = counter.toString();
// 		if(counter == 0){
// 			clearInterval(timerId)
// 		}
// 	}, 1000);
// });

// let parag = document.querySelector('#parag');
// let btn = document.querySelector('#btn');
// let elem = document.querySelector('#elem');
// let timerId;
// let counter;
// btn.addEventListener('click', function(){
// 	counter = Number(elem.value);
// 	parag.textContent = counter.toString();
// 	timerId = setInterval(function(){
// 		counter--
// 		parag.textContent = counter.toString();
// 		if(counter == 0){
// 			clearInterval(timerId);
// 		}
// 	}, 1000)
// })

// let abzas = document.querySelector('#abzas');
// let btn1 = document.querySelector('#btn1');
// let btn2 = document.querySelector('#btn2');
// let timerId = null;
// let counter = 0;
// function func(){
// 	counter++
// 	abzas.textContent = counter;
// };
// btn1.addEventListener('click', function(){
// 	if(!timerId){
// 		timerId = setInterval(func, 1000)
// 	}
// })
// btn2.addEventListener('click', function(){
// 	clearInterval(timerId)
// 	timerId = null;
// })

// let abzas = document.querySelector('#abzas');
// let isRed = true;
// function func(){
// 	if(isRed){
// 		abzas.style.backgroundColor = 'green';
// 		isRed = false;
// 	} else {
// 		abzas.style.backgroundColor = 'red'
// 		isRed = true;
// 	}
// }
// setInterval(func, 1000);

// let abzas = document.querySelector('#abzas');
// function func(){
// 	let time = new Date();
// 	let hour = time.getHours().toString().padStart(2, '0');
// 	let minute = time.getMinutes().toString().padStart(2, '0');
// 	let second = time.getSeconds().toString().padStart(2, '0');
// 	abzas.textContent = `${hour}: ${minute}: ${second}`;
// }
// setInterval(func, 1000);

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	setTimeout(function(){
// 		alert('!');
// 	}, 3000);
// })

// let abzas = document.querySelector('#abzas');
// function func(){
// 	abzas.textContent = 'proshlo 10 sec'
// }
// setTimeout(func, 10000);

// let i = 0;
// function timer(){
// 	setTimeout(function(){
// 		console.log(++i);
// 		timer();
// 	}, 1000);
// }
// timer();

// let i = 0;
// function timer(){
// 	setTimeout(function(){
// 		console.log(++i);
// 		if(i < 10){
// 			timer();
// 		}
// 	}, 1000);
// }
// timer();

// let i = 0;
// function timer(){
// 	console.log(i);
// 		i++
// 	setTimeout(timer, i * 1000);
// }
// timer();

// let parent = document.querySelector('#parent');
// let p = document.createElement('p')
// p.textContent = '!';
// parent.appendChild(p);

// let ol = document.querySelector('#elem');
// let newP = document.createElement('li');
// newP.textContent = 'item';
// ol.appendChild(newP);

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let newE = document.createElement('li');
// 	newE.textContent = 'item';
// 	elem.appendChild(newE)
// })

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.textContent = '!';
// p.addEventListener('click', function(){
// 	console.log(this.textContent);
// });
// parent.appendChild(p);

// let ol = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let newP = document.createElement('li');
// 	newP.textContent = '!'
// 	ol.appendChild(newP);
// 	newP.addEventListener('click', function(){
// 		this.textContent += '!'
// 	})
// })

// let parent = document.querySelector('#parent');
// for(let i = 0; i <= 9; i++){
// 	let p = document.createElement('p');
// 	p.textContent = '!'
// 	parent.appendChild(p)
// }

// let elem = document.querySelector('#elem');
// for(let i = 1; i <= 10; i++){
// 	let li = document.createElement('li');
// 	li.textContent = i;
// 	elem.appendChild(li);
// }

// let parent = document.querySelector('#parent');
// for(let i = 1; i <= 9; i++){
// 	let p = document.createElement('p');
// 	p.textContent = '!'
// p.addEventListener('click', function(){
// 	console.log(this.textContent);
// });
// parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// for(let i = 1; i <= 5; i++){
// 	let input = document.createElement('input');
// 	input.addEventListener('blur', function(){
// 		elem.textContent += this.value + ' ';
// 		this.value = '' 
// 	})
// 	parent.appendChild(input);
// }

// let elems = document.querySelectorAll('p');
// for(let elem of elems){
// 	elem.addEventListener('click', function(){
// 		elem.remove();
// 	});
// }

// let elems = document.querySelectorAll('li');
// for(let elem of elems){
// 	elem.addEventListener('click', function(){
// 		elem.remove();
// 	});
// }

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';
// let d = document.createElement('p');
// d.innerHTML = '?';
// parent.append(p, d);

// let parent = document.querySelector('#parent');
// parent.append('!');

// let parent = document.querySelector('#parent');
// for(let i = 1; i <= 9; i++){
// 	let li = document.createElement('li');
// 	li.innerHTML = i;
// 	parent.append(li);
// }

// let parent = document.querySelector('#parent');
// for(let i = 0; i <= 3; i++){
// 	let tr = document.createElement('tr');
// 	for(let j = 0; j <= 3; j++){
// 		let td = document.createElement('td')
// 		td.innerHTML = j;
// 		tr.append(td);
// 	}
// 	table.append(tr);
// }

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';
// parent.prepend(p);

// let parent = document.querySelector('#parent');
// let p1 = document.createElement('p');
// p1.innerHTML = 'a';
// let p2 = document.createElement('p');
// p2.innerHTML = 'b';
// parent.prepend(p1, p2);

// let parent = document.querySelector('#parent');
// parent.prepend('!');

// let elem = document.querySelector('#elem');
// let start = document.createElement('li');
// start.textContent = 'start';
// elem.prepend(start);

// let finish = document.createElement('li');
// finish.textContent = 'finish';
// elem.append(finish)

// let parent = document.querySelector('#parent');
// let before = document.querySelector('#before');
// let p = document.createElement('p');
// p.innerHTML = '!';
// parent.insertBefore(p, before);

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';
// parent.insertBefore(p, parent.firstElementChild);

// let parent = document.querySelector('#parent');
// let p = document.createElement('p');
// p.innerHTML = '!';
// parent.insertBefore(p, parent.firstChild);

// let parent = document.querySelector('#parent');
// let elem = document.querySelector('#elem');
// let newE = document.createElement('li');
// newE.innerHTML = 'new' + '!';
// parent.insertBefore(newE, elem);

// let p = document.createElement('p');
// p.innerHTML = '!';
// let target = document.querySelector('#target');
// target.insertAdjacentElement('beforeBegin', p)

// let p = document.createElement('p');
// p.innerHTML = '!';
// let target = document.querySelector('#target');
// target.insertAdjacentElement('afterEnd', p);

// let p = document.createElement('p');
// p.innerHTML = '!';
// let target = document.querySelector('#target');
// target.insertAdjacentElement('afterBegin', p)

// let p = document.createElement('p');
// p.innerHTML = '!';
// let target = document.querySelector('#target');
// target.insertAdjacentElement('beforeEnd', p)

// let elem = document.querySelector('#elem');
// let newE = document.createElement('p');
// newE.innerHTML = '!!!';
// elem.insertAdjacentElement('beforeBegin', newE);

// let elem = document.querySelector('#elem');
// let newE = document.createElement('p');
// newE.innerHTML = '!!!';
// elem.insertAdjacentElement('afterEnd', newE)

// let elem = document.querySelector('#elem');
// let newE = document.createElement('p');
// newE.innerHTML = '!!!';
// elem.insertAdjacentElement('afterBegin', newE);

// let elem = document.querySelector('#elem');
// let newE = document.createElement('p');
// newE.innerHTML = '!!!';
// elem.insertAdjacentElement('beforeEnd', newE);

// let target = document.querySelector('#target');
// target.insertAdjacentHTML('beforeBegin', '<p>!</p>');

// let target = document.querySelector('#target');
// target.insertAdjacentHTML('afterEnd', '<p>!</p>');

// let target = document.querySelector('#target');
// target.insertAdjacentHTML('afterBegin', '<p>!</p>');

// let target = document.querySelector('#target');
// target.insertAdjacentHTML('beforeEnd', '<p>!</p>');

// let elem = document.querySelector('#elem');
// elem.insertAdjacentHTML('beforeBegin', '<div calss="www"><p>text</p><p>text</p><input></div>');

// let parent = document.querySelector('#parent');
// let elem = parent.querySelector('.elem');
// let clone = elem.cloneNode(true);
// parent.appendChild(clone);

// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let clone = elem.cloneNode(true);
// 	// elem.parentNode.insertBefore(clone, elem.nextSibling);
// 	elem.insertAdjacentElement('afterEnd', clone)
// })

// let elem = document.querySelector('#elem');
// console.log(elem.matches('p.www'));

// let elem = document.querySelector('#elem');
// console.log(elem.matches('div.www'));

// let elem = document.querySelector('#elem');
// console.log(elem.matches('p.www'))

// let parent = document.querySelector('#parent');
// let child = document.querySelector('#child');
// let contains = parent.contains(child);
// console.log(contains);

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let contains = elem1.contains(elem2);
// console.log(contains);

// let parent = document.querySelector('#parent');
// let arr = [1, 2, 3, 4, 5];
// for(let elem of arr){
// 	let p = document.createElement('p');
// 	p.textContent = elem;
// 	p.addEventListener('click', function(){
// 		p.textContent = Number(p.textContent) + 1;
// 	})
// 	parent.appendChild(p);
// }

// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for(let e of arr){
// 	let li = document.createElement('li');
// 	li.textContent = e;
// 	elem.appendChild(li);
// }

// let elem = document.querySelector('#elem');
// let arr = [1, 2, 3, 4, 5];
// for(let e of arr){
// 	let li = document.createElement('li');
// 	li.textContent = e;
// 		li.addEventListener('click', function(){
// 			if(!li.textContent.endsWith('!')){ 
// 				li.textContent += '!'
// 			}	
// 	})
// 	elem.appendChild(li);
// }

// let table = document.querySelector('#table');
// for(let i = 0; i < 3; i++){
// 	let tr = document.createElement('tr');

// 		for(let i = 0; i < 3; i++){
// 			let td = document.createElement('td');
// 			tr.appendChild(td)
// 		}
// 		table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// for(let i = 0; i < 5; i++){
// 	let tr = document.createElement('tr');
// 		for(let j = 0; j < 5; j++){
// 			let td = document.createElement('td');
// 			tr.appendChild(td)
// 		}
// 		table.appendChild(tr);
// }


// let table = document.querySelector('#table');
// for(let i = 0; i < 10; i++){
// 	let tr = document.createElement('tr');
// 		for(let j = 0; j < 5; j++){
// 			let td = document.createElement('td');
// 			td.textContent += 'x';
// 			tr.appendChild(td)
// 		}
// 		table.appendChild(tr);
// }

// let elem1 = document.querySelector('#elem1');
// let elem2 = document.querySelector('#elem2');
// let elem = document.querySelector('#elem');
// let button = document.querySelector('#button');
// let table = document.createElement('table');

// button.addEventListener('click', function(){
// 	let a = parseInt(elem1.value);
// 	let b = parseInt(elem2.value);
// 		for(let i = 0; i < a; i++){
// 	let tr = document.createElement('tr');
// 	 	for(let j = 0; j < b; j++){
// 	 		let td = document.createElement('td');
// 	 		tr.appendChild(td)
// 	 	}
// 	 	table.appendChild(tr); 
// }
// elem.appendChild(table);
// })

// let table = document.querySelector('#table');
// let k = 1;
// for(let i = 0; i < 3; i++){
// 	let tr = document.createElement('tr');

// 	for(let i = 0; i < 3; i++){
// 		let td = document.createElement('td');
// 		td.textContent = k;
// 		k++
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let elem = document.querySelector('#elem');
// for(let i = 0; i < 5; i++){
// 	let tr = document.createElement('tr');
// 	for(let j = 0; j < 5; j++){
// 		let td = document.createElement('td')
// 		td.textContent = i * 5 + j + 1
// 		tr.appendChild(td);
// 	}
// 	elem.appendChild(tr);
// }

// let elem = document.querySelector('#elem');
// let tr;
// for(let i = 1; i <= 25; i++){
// 	if(i % 5 == 1){
// 		tr = document.createElement('tr');
// 		elem.appendChild(tr);
// 	}
// 		let td = document.createElement('td')
// 		td.textContent = i * 2 
// 		tr.appendChild(td);
// }

// let arr = [[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12]];
// let table = document.querySelector('#table');

// for(let subArr of arr){
// 	let tr = document.createElement('tr');

// 	for(let elem of subArr){
// 		let td = document.createElement('td');
// 		td.textContent = elem;
// 		tr.appendChild(td);
// 	}
// 	table.appendChild(tr);
// }

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// 	for(let subArr of arr){
// 		let tr = document.createElement('tr');

// 		for(let elem of subArr){
// 			let td = document.createElement('td');
// 			td.textContent = elem;
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]];
// let table = document.querySelector('#table');

// 	for(let subArr of arr){
// 		let tr = document.createElement('tr');

// 		for(let elem of subArr){
// 			let td = document.createElement('td');
// 			td.textContent = elem ** 2;
// 			tr.appendChild(td);
// 		}
// 		table.appendChild(tr);
// 	}

// let users = [
// {
// 	name: 'name1',
// 	surname: 'surname1',
// 	patronymic: 'patronymic1'
// },
// {
// 	name: 'name2',
// 	surname: 'surname2',
// 	patronymic: 'patronymic2'
// },
// {
// 	name: 'name3',
// 	surname: 'surname3',
// 	patronymic: 'patronymic3'
// },
// ];
// let table = document.getElementById('table');
// for(let user of users){
// 	let tr = document.createElement('tr');

// 	let td1 = document.createElement('td');
// 	td1.textContent = user.name;
// 	tr.appendChild(td1);

// 	let td2 = document.createElement('td');
// 	td2.textContent = user.surname;
// 	tr.appendChild(td2);

// 	let td3 = document.createElement('td');
// 	td3.textContent = user.patronymic;
// 	tr.appendChild(td3);

// 	table.appendChild(tr);
// }

// let employees = [
// {name: 'employee1', age: 30, salary: 400},
// {name: 'employee2', age: 31, salary: 500},
// {name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.getElementById('table');
// for(let employee of employees){
// 	let tr = document.createElement('tr');

// let td1 = document.createElement('td');
// td1.textContent = employee.name;
// tr.appendChild(td1);

// let td2 = document.createElement('td');
// td2.textContent = employee.age;
// tr.appendChild(td2);

// let td3 = document.createElement('td');
// td3.textContent = employee.salary;
// tr.appendChild(td3);

// table.appendChild(tr);
// }


// let employees = [
// {name: 'employee1', age: 30, salary: 400},
// {name: 'employee2', age: 31, salary: 500},
// {name: 'employee3', age: 32, salary: 600},
// ];

// let table = document.getElementById('table');
// for(let employee of employees){
// 	let tr = document.createElement('tr');

// let td1 = document.createElement('td');
// td1.textContent = employee.name;
// tr.appendChild(td1);

// let td2 = document.createElement('td');
// td2.addEventListener('click', function(){
// 	employee.age += 1;
// 	td2.textContent = employee.age;
	
// })
// td2.textContent = employee.age;
// tr.appendChild(td2);


// let td3 = document.createElement('td');
// td3.addEventListener('click', function(){
// 	employee.salary += employee.salary * 0.1;
// 	td3.textContent = employee.salary;
// })
// td3.textContent = employee.salary;
// tr.appendChild(td3);

// table.appendChild(tr);
// }

// let table = document.querySelector('#table');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let tr = document.createElement('tr');
// for(let i = 1; i <= 3; i++){
// 	let td = document.createElement('td');
// 	tr.appendChild(td);
// }
// table.appendChild(tr);
// })

// let trs = document.querySelectorAll('#table tr');
// for(let tr of trs){
// 	let td = document.createElement('td');
// 	tr.appendChild(td);
// }


// let button = document.querySelector('#button');

// button.addEventListener('click', function(){
// 	let table = document.querySelector('#table');
// 	let tr = document.createElement('tr');
// 	let td = document.createElement('td');
// 	let td1 = document.createElement('td');
// 	tr.appendChild(td);

// 	tr.appendChild(td1);
// 	table.appendChild(tr);
// })

// let tds = document.querySelectorAll('#table td');

// for(let td of tds){
// 	td.textContent = '!';
// }

// let btn = document.querySelector('#btn');
// btn.addEventListener('click', function(){
// 	let tds = document.querySelectorAll('#table td')
// 	for(let td of tds){
// 		console.log(td.textContent *= 2);
// 	}
// })

// let parent = document.querySelector('#parent');
// for(let i = 1; i <= 9; i++){
// 	let p = document.createElement('p');
// 	p.textContent = i;
// 	p.addEventListener('click', function(){
// 		this.remove();
// 	});
// 	parent.appendChild(p);
// }

// let parent = document.querySelector('#parent');
// let button = document.querySelector('#button');
// button.addEventListener('click', function(){
// 	let li = document.createElement('li');
// 	li.textContent = 'newItem'
// 	parent.appendChild(li);
// })

// parent.addEventListener('click', function(event){
// 	let target = event.target;
// 	if(target.tagName == 'LI'){
// 		target.parentNode.removeChild(target);
// 	}
// })

// let elem = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(){
// 	elem.remove();
// });

// let elem = document.querySelector('#elem');
// let remove = document.querySelector('#remove');
// remove.addEventListener('click', function(){
// 	elem.remove();
// 	event.preventDefault();
// });

// let elems = document.querySelectorAll('#parent p');
// for(let elem of elems){
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);

// 	remove.addEventListener('click', function(event){
// 		elem.remove();
// 		event.preventDefault();
// 	})
// }

// let elems = document.querySelectorAll('#parent li');
// for(let elem of elems){
// 	let remove = document.createElement('a');
// 	remove.href = '';
// 	remove.textContent = 'remove';
// 	elem.appendChild(remove);

// 	remove.addEventListener('click', function(event){
// 		elem.remove();
// 		event.preventDefault();
// 	})
// }

// let elems = document.querySelectorAll('.delete');
// for(let elem of elems){
// 	elem.addEventListener('click', function(event){
// 		let row = event.target.closest('tr');
// 		row.remove();
// 		event.preventDefault();
// 	})
// }

// let elems = document.querySelectorAll('.delete');
// for(let elem of elems){
// 	elem.addEventListener('click', function(event){
// 		event.preventDefault();
// 		let row = this.closest('tr');
// 		row.remove();
// 	})
// }

// let elem = document.querySelector('#elem');
// let input = document.querySelector('#input');
// input.value = elem.textContent;
// input.addEventListener('input', function(){
// 	elem.textContent = this.value;
// });

// let elem = document.querySelector('#elem');
// elem.addEventListener('click', function(){
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;

// 	input.addEventListener('blur', function(){
// 		elem.textContent = this.value;
// 		this.remove();
// 	})
// 	elem.parentElement.appendChild(input);
// })

// let elem = document.querySelector('#elem');

// elem.addEventListener('click', function func(){
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;

// 	elem.textContent = '';
// 	elem.appendChild(input);

// 	input.addEventListener('blur', function(){
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func)
// 	})

// 	elem.removeEventListener('click', func);
// })

// let elems = document.querySelectorAll('p');
// for(let elem of elems){
// 	elem.addEventListener('click', function func(){
// 	let input = document.createElement('input');
// 	input.value = elem.textContent;

// 	elem.textContent = '';
// 	elem.appendChild(input);

// 	input.addEventListener('blur', function(){
// 		elem.textContent = this.value;
// 		elem.addEventListener('click', func)
// 	})

// 	elem.removeEventListener('click', func);
// })
// }

// let elems = document.querySelectorAll('li');
// for(let elem of elems){
// 	elem.addEventListener('click', function(){
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);

// 		input.addEventListener('blur', function(){
// 			elem.textContent = this.value;
// 		})
// 		input.focus();
// 	})
// 	}

// let elems = document.querySelectorAll('td');
// for(let elem of elems){
// 	elem.addEventListener('click', function(){
// 		let input = document.createElement('input');
// 		input.value = elem.textContent;
// 		elem.textContent = '';
// 		elem.appendChild(input);

// 		input.addEventListener('blur', function(){
// 			elem.textContent = this.value;
// 		})
// 		input.focus();
// 	})
// }

// let parent = document.querySelectorAll('#parent p');
// parent.forEach(function(p){
// 	let a = document.createElement('a');
// 	a.href = '#';
// 	a.textContent = 'remove';
// 	a.addEventListener('click', function(event){
// 		event.preventDefault();
// 		p.remove();
// 	})
// 	p.appendChild(a);
// })

// let spans = document.querySelectorAll('#parent span');
// spans.forEach(function(span){
// 	span.addEventListener('click', function(event){
// 		event.preventDefault();
// 		let input = document.createElement('input');
// 		input.type = 'text';
// 		input.value = span.textContent;
// 		input.addEventListener('blur', function(event){
// 			event.preventDefault();
// 			span.textContent = input.value;
// 			span.style.display = 'inline-block';
// 			input.style.display = 'none';
// 		})
// 		span.style.display = 'none';
// 		span.parentNode.insertBefore(input, span.nextSibling);
// 		input.focus();
// 	})
// })

// let parent = document.querySelector('#parent');
// let p = parent.querySelectorAll('p');
// for(let i = 0; i < p.length; i++){
// 	let spanE = document.createElement('span');
// 	spanE.textContent = p[i].textContent; 
// 	parent.replaceChild(spanE, p[i]);
// 	let removeLink = document.createElement('a');
// 	removeLink.href = '#';
// 	removeLink.textContent = 'remove';
// 	spanE.appendChild(removeLink);
// 	spanE.addEventListener('click', function(){
// 		let input = document.createElement('input');
// 		input.value = this.textContent;
// 		this.parentNode.replaceChild(input, this);
// 		input.focus();
// 		input.addEventListener('blur', function(){
// 			let spanN = document.createElement('span');
// 			spanN.textContent = this.value;
// 			this.parentNode.replaceChild(spanN, this);
// 		})
// 	})
// 	removeLink.addEventListener('click', function(){
// 		let parentSpan = this.parentNode;
// 		let parentDiv = parentSpan.parentNode;
// 		parentDiv.removeChild(parentSpan)
// 	})
// }


    // let paragraphs = document.getElementsByTagName('p');

    // for (let i = 0; i < paragraphs.length; i++) {
    //   let paragraph = paragraphs[i];

    //   let span =  document.createElement('span');
    //   span.textContent = paragraph.textContent;
    //   paragraph.appendChild(span);

    //   let link = document.createElement('a');
    //   link.href = '#';
    //   link.innerText = 'link';

    //   (function(paragraph, span) {
    //     link.addEventListener('click', function(event) {
    //       event.preventDefault();
    //       span.classList.toggle('line');
    //     });
    //   })(paragraph, span);

    //   paragraph.appendChild(link);
    // }

//let str = 'Akiljan agai';
//console.log(str.indexOf('l'))

// function search(str1, str2){
// return str1.indexOf(str2);
// }
// let probel = search('Akiljan agai', ' ');
// console.log('Akiljan agai'.indexOf('g', probel))


// function search(str1, str2){
// 	let probel = str1.indexOf(' ');
// 	if(probel === -1){
// 		return -1;
// 	}
// 	let probel2 = str1.indexOf(' ', probel+1);
// 	if(probel2 == -1){
// 		return -1;
// 	}

// 	let search = probel2+1;
// 	let result = str1.substring(search);
// 	let result2 = result.indexOf(str2,result)
// 	if(result2 == -1){
// 		return -1;
// 	} 
// 	return probel2+result2;

// }
// console.log(search("Hello wonderful world", 'o'))

// function bankPercent(p){
// let money = 1000;
// let year = 0;
// do{
// money += 1000 * (p / 100)
// year++
// } while(money < 1500)
// return year;
// }
// console.log(bankPercent(16));

// function array_diff(a, b) {
//   return a.filter(e => !b.includes(e));
// }

// function arrayDiff(a, b){
// a.filter(elem)
// }

// function elem(e){
// return !b.includes(e)
// }

// function cocktailRecipe(ingredients){
// let obj = {};
// for(let i in ingredients){
//   if(i.startsWith('name')){
//     let a = ingredients[i];
   
//     for(let j in obj){
//       if(obj[j]=== a){
//           delete obj[j];
//           break;
//       }
//     }
    
//   } 
// }
// obj['mix'] = ingredients['mix'];

// return obj;
// }

// console.log(cocktailRecipe(
//   {name1: "orange juice", 
//   name2: "coca-cola", 
//   name3: "apple juice", 
//   name4: "sparkling water", 
//   mix: "Mix all ingredients"}));

// console.log(cocktailRecipe(
//   {name1: "milk", 
//   name2: "milk", 
//   name3: "milk", 
//   name4: "milk", 
//   mix: "Mix all ingredients"}) );
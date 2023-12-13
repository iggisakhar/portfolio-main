// function getStrings(city){
//   city = city.toLowerCase();
//   let count = {};
//   let res = '';
//   for(let i of city){
//     if(/[a-z]/.test(i)){
//       if(count[i]){
//         count[i]++
//       } else {
//         count[i] = 1;
//       }
//     }
//   }
//   for(let i of city){
//     if(/[a-z]/.test(i) && count[i]){
//       res += i + ':' + '*'.repeat(count[i]) + ',';
//       count[i] = 0;
//     }
//   }
//   res = res.slice(0, -1);
//   return res;
//
// }
// console.log(getStrings('Astana'));

// function myLanguages(results) {
//   let arr = [];
//   for(let i in results){
//     if(results[i] >= 60){
//       arr.push(i);
//     }
//   }
//   arr.sort((a, b) => results[b] - results[a]);
//   return arr;
// }

// function replaceCommon(string, letter) {
//   let obj = {};
//   let arr = [];
//   let arrSort = [];
//   string.split('').filter(el => el !== ' ').forEach(el => {
//     obj[el] = obj[el] ? obj[el] + 1 : 1;
//   })
//   for(let i in obj){
//     if(obj[i] >= 2){
//       arr.push(obj[i]);
//     }
//   }
//   let max = Math.max(...arr);
//   for(let i in obj){
//     if(obj[i] == max){
//       arrSort.push(i);
//     }
//   }
//   let change = arrSort[0];
//   return string.split('').map(el => el.replace(change, letter)).join('');
// }

// function Counter() {
//   this.value = 0;
// }
//
// Counter.prototype.increase = function() {
//   this.value++;
// };
//
// Counter.prototype.getValue = function() {
//   return this.value;
// };
//
// Counter.prototype.reset = function() {
//   this.value = 0;
// };

// Array.prototype.reverse = function() {
//   for(let i = 0; i < Math.floor(this.length / 2); i++){
//     let temp = this[i];
//     this[i] = this[this.length -1 -i];
//     this[this.length -1 -i] = temp;
//   }
//   return this;
// };

// let Ball = function(ballType) {
//   this.ballType = ballType || 'regular';
// };

// let Ghost = function() {
//   let colors = ['white', 'yellow', 'purple', 'red'];
//   let random = Math.floor(Math.random() * colors.length);
//   this.color = colors[random];
// };

// function NameMe(first, last) {
//   this.firstName = first;
//   this.lastName  = last;
//   this.name = first + ' ' + last;
// }

// String.prototype.digit = function() {
//   return /^\d$/.test(this);
// };

// String.prototype.isUpperCase = function() {
//   return this == this.toUpperCase();
// }

// String.prototype.toAlternatingCase = function () {
//   return this.split('').map(el => {
//     if(el == el.toUpperCase()){
//       return el.toLowerCase();
//     } else if(el == el.toLowerCase()){
//       return el.toUpperCase()
//     }
//     return el;
//   }).join('');
// }

// Array.prototype.only = function(keys){
//   keys = keys.sort((a,b) => a-b)
//   let arr= [];
//   for(let i = 0; i < keys.length; i ++){
//     arr.push(this[keys[i]])
//   }
//   return arr;
// }

// String.prototype.camelCase = function(){
//   let arg = this.toString().trim().split(' ');
//   let arr = arg.map((v, i, arr) => v ? v.slice(0,1).toUpperCase() + v.slice(1) : v);
//   return arr.join('');
// };

// class Dinglemouse{
//
//   constructor(firstName, lastName){
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }
//   getFullName(){
//     if(this.firstName == '' && this.lastName == ''){
//       return '';
//     } else if(this.firstName == ''){
//       return this.lastName;
//     } else if(this.lastName == ''){
//       return this.firstName;
//     } else{
//       return this.firstName + " " + this.lastName
//     }
//   }
// }

// function numbers(...nums){
//   let bool = true;
//   for(let i of nums){
//     if(typeof i !== 'number'){
//       bool = false;
//     }
//   }
//   return bool;
// }

// var Calculator = {
//   average: function(...arg) {
//     return arg.length == 0 ? 0 : arg.reduce((a,b) => b + a) / arg.length
//   }
// };

// function last(list){
//   var a = arguments[arguments.length -1];
//   return a[a.length -1] || a;
// }

// function add(...num) {
//   return num.reduce((sum, val, index) => sum + val * (index + 1), 0);
// }

// function isDivisible(n, ...divisors){
//   if(divisors.length == 0){
//     return true;
//   }
//   return divisors.every(el => n % el == 0);
// }

// function onlyFruits(arr){
//   let index = arr.indexOf('cucumber');
//   arr[index] = 'kiwi';
//   return arr;
// }

// function addLetter(arr){
//   arr[0] += arr[3][0].toUpperCase();
//   arr[1] += arr[3][1].toUpperCase();
//   arr[2] += arr[3][2].toUpperCase();
//   return arr;
// }

// function changeColor(arr){
//   let index = arr[1].lastIndexOf('green');
//   if(index !== -1){
//     arr[1][index] = 'yellow'
//   }
//   return arr;
// }

// function reverseArrElement(arr, index){
//   let newNum = arr[index];
//   newNum = newNum.toString();
//   let newStr = '';
//   for(let i = newNum.length - 1; i >= 0; i--){
//     newStr += newNum[i];
//   }
//   arr[index] = Number(newStr);
//   return arr;
// }

// function repeatOrChange(arr, elem){
//   let i = arr.indexOf(elem);
//   if(arr[i] == elem){
//     arr[i] = elem.repeat(5)
//   } else {
//     arr[0] = elem;
//   }
//   return arr;
// }

// function changeElement(arr, num){
//   let i = arr.indexOf(num);
//   if(i !== -1){
//     arr[i] = -num;
//   } else {
//     arr[arr.length -1] = num;
//   }
//   return arr;
// }

// function switchElem (arr, num){
//   let temp = arr[num -1];
//   arr[num -1] = arr[0];
//   arr[0] = temp;
//   return arr;
// }

// function addElement(array, endElement){
//   array.push(endElement);
//   return array;
// }

// function addTwoStudents(names, name1, name2){
//   names.push(name1.trim());
//   names.push(name2.trim());
//   return names;
// }

// function addFirstZero(array){
//   if(array[0] != 0){
//     array.unshift(0);
//   } else {
//     return 'Zero value already exists'
//   }
//   return array;
// }

// function addNewElements(array, elm1, elm2){
//   array.unshift(elm1, elm2, elm1 + elm2);
//   return array;
// }

// function addLengthAndProduct(numbers){
//   let length = numbers.length;
//   let product = numbers[0] * numbers[numbers.length -1];
//   if(numbers.lengths == 0 || numbers.length < 2){
//     return 'Invalid input';
//   }
//   numbers.unshift(length);
//   numbers.push(product);
//
//   return numbers;
// }

// function addArray(arr1, arr2){
//   arr1.push(arr2);
//   return arr1;
// }
//
// function addTitleString(names){
//   if(names.length != 3){
//     return 'Invalid input'
//   }
//   let titleString = [names[0].trim(), names[1].trim(), names[2].trim()];
//   let str = `${titleString[0]} ${titleString[1]} ${titleString[2]}`
//   titleString.push(str);
//   return titleString;
// }

// function addObject(array){
//   let obj = {elm1: array[0],
//     elm2: array[1],
//     elm3: array[2]}
//   array.push(obj);
//   return array;
// }

// function addObjectCombined(arr) {
//   const newObj = {};
//   newObj[arr[0].subjectName] = arr[0].averageScore;
//   newObj[arr[1].subjectName] = arr[1].averageScore;
//   newObj[arr[2].subjectName] = arr[2].averageScore;
//   arr.unshift(newObj);
//   return arr;
// }

// function objectToArray(obj){
//   let arr = [];
//   arr.push(obj.property1, obj.property2, obj.property3, obj.property4);
//   return arr;
// }

// function splitArray(arr){
//   let half = arr.splice(0, arr.length/2);
//   return [half, arr]
// }

// function names(arr){
//   let index = arr.indexOf('Alice');
//   if(index > -1){
//     arr.splice(index +1)
//   } else {
//     arr.push('Alice')
//   }
//   return arr;
// }
//
// function switchFirstAndLast(array){
//   let temp = array[0];
//   array[0] = array[array.length -1];
//   array[array.length -1] = temp;
//   return array;
// }

// function addStr(array, str, n){
//   if(n >= array.length){
//     array.push(str)
//   } else {
//     array.splice(n, 0, str);
//     return array;
//   }
// }

// function addStr(array, str, n){
//   if(n > array.length){
//     array.push(str);
//   } else {
//     array.splice(n -1, 0, str)
//   }
//   return array;
// }

// function modifyArray(arr){
//   let reminder = arr.length % 3;
//   if(reminder == 0){
//     return arr.slice(0, arr.length -3)
//   } else {
//     return arr.slice(0, arr.length - reminder)
//   }
// }

// function addOrDelete(arr, str, num){
//   str = str.trim().toLowerCase();
//   if(str == ''){
//     return arr;
//   }
//   let index = arr.indexOf(str);
//   if(index != -1){
//     arr.splice(index, 1);
//   } else{
//     arr.splice(num, 0, str);
//   }
//   return arr;
// }

// function doubleArray(arr, num){
//   return arr.map(subArray => subArray.slice(num));
// }

// function changeElement(arr, str){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].includes(' ')){
//       arr.splice(i, 1, str)
//     }
//   }
//   return arr;
// }
//
// function findAndDouble(arr1, arr2, arr3, number){
//   let arr = [arr1, arr2, arr3];
//   arr.forEach(el => {
//     let index = el.indexOf(number);
//     if(index != -1){
//       el[index] *= 2;
//     } else{
//       el.push(number * 2);
//     }
//   })
//   return arr;
// }

// function shallowCopy(arr){
//   return arr.slice();
// }

// function stringify(arr){
//   return JSON.stringify(arr);
// }

// function copyElements(arrFrom, arrTo){
//   arrTo.push(arrFrom[0]);
//   arrTo.push(arrFrom[arrFrom.length -1]);
//   return arrTo;
// }

// function deepCopy(arr){
//   let arr1 = JSON.stringify(arr);
//   JSON.parse(arr1);
//   return arr;
// }

// function spread(arr1, arr2){
//   let arr3 = [...arr1, ...arr2];
//   return arr3;
// }

// function twoArrays(arr){
//   let arr1 = arr.slice();
//   arr[0] = undefined;
//   return [arr, arr1];
// }

// function toString(arr1, arr2, str){
//   return arr1 + ' ' + arr2 + ' ' + str;
// }

// function waysToCopy(arr){
//   if(typeof(arr[0]) == 'number' || typeof(arr[0]) == 'string' || typeof(arr[0]) == 'boolean'){
//     let arr1 = arr.slice();
//     return arr1;
//   } else{
//     let arr2 = JSON.stringify(arr);
//     let arr3 = JSON.parse(arr2);
//     return arr3;
//   }
// }

// function copyDifference(arr){
//   let arr1 = arr.slice();
//   let arr2 = JSON.stringify(arr1);
//   let arr3 = JSON.parse(arr2);
//   return [arr1, arr3];
// }

// function deepCopyOfArray(arr){
//   return JSON.parse(JSON.stringify(arr));
// }

// function getQuantity(aisles, section){
//   let sectionKey = section.toUpperCase();
//   if(aisles.hasOwnProperty(sectionKey)){
//     return aisles[sectionKey].length;
//   } else {
//     return 'No such section';
//   }
// }

// function getMiddleElement(object, property){
//   let array = object[property];
//   property = property.toLowerCase();
//   if(!(property in object)){
//     return `No such property: ${property}`;
//   }
//   if(!Array.isArray(array)){
//     return `${property} is not an array`
//   }
//   let middle = Math.floor(array.length / 2);
//   return array.length % 2 == 0 ? array[middle -1] : array[middle];
// }

// function arrayJoiner(array1, array2, array3, array4){
//   let array = array1.concat(array2, array3, array4);
//   return array;
// }

// function arrayModifier(array1, array2){
//   let first = array1[0];
//   let last = array1[array1.length -1];
//   let removed = array1.slice(1, -1);
//   return removed.concat(first, array2, last);
// }

// function codeMorse(str){
//   str.toLowerCase().trim();
//   const morse = {
//     A: '.-',
//     B: '-...',
//     C: '-.-.',
//     D: '-..',
//     E: '.',
//     F: '..-.',
//     G: '--.',
//     H: '....',
//     I: '..',
//     J: '.---',
//     K: '-.-',
//     L: '.-..',
//     M: '--',
//     N: '-.',
//     O: '---',
//     P: '.--.',
//     Q: '--.-',
//     R: '.-.',
//     S: '...',
//     T: '-',
//     U: '..-',
//     V: '...-',
//     W: '.--',
//     X: '-..-',
//     Y: '-.--',
//     Z: '--..',
//   };
//   let encodeChar = (char) => {
//     let UpperCaseChar = char.toUpperCase();
//     if(morse.hasOwnProperty(UpperCaseChar)){
//       return morse[UpperCaseChar];
//     } else if(char.match(/[0-9]/)){
//       return char;
//     }
//     return '';
//   }
//   let encodedStr = str.split(' ').map(el => el.split('').map(encodeChar).join(' ')).filter(Boolean).join(' ');
//   return encodedStr;
// }

// function makeTripleArray(array1, array2, array3){
//   array1.push(array2);
//   array2.push(array3);
//   return array1;
// }

// function arrayModify(array, str){
//   let n = array.findIndex(el => el === str);
//   if(n !== -1){
//     let repeatedStr = str.repeat(n)
//     array.push(repeatedStr);
//   }
//   return array;
// }

// function bugFixer(array){
//   let count = 0;
//   if(array.includes('bug')){
//     return array.map(el => {
//       if(el === 'bug' && count < 3){
//         count++
//         return 'FIX'
//       }
//       return el;
//     })
//   } else {
//     return array;
//   }
// }

// just for test


























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

// function dogResponse(array){
//   let repeat = array[0].length - array[1];
//   if(repeat <= 0){
//     return `${array[0]}: hello!`;
//   } else {
//     let str = 'bark! '.repeat(repeat)
//     return `${array[0]}: ${str.trim()}`
//   }
// }
//
// function mainTasks(tasks, toDoFirst, toDoList){
//   let indexFirst = tasks.indexOf(toDoFirst);
//   let indexLast = tasks.indexOf(toDoList);
//   return {
//     [toDoFirst]: `Before ${tasks[indexFirst + 1]}`,
//     [toDoList]: `After ${tasks[indexLast -1]}`
//   }
// }
//
// function consecutiveNumbers(n){
//   let arr = [];
//   if(n < 0){
//     return arr;
//   }
//   for(let i = 0; i <= n; i ++){
//     arr.push(i);
//   }
//   return arr;
// }

// function fillArray(n, m){
//   let arr= [];
//   for(let i = n; i <= m; i++){
//     arr.push(i);
//   }
//   return arr;
// }

// function oddFromRange(m, n){
//   let arr = [];
//   for(let i = m; i <= n; i++){
//     if(i % 2 !== 0){
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// function squaresOfEven(n) {
//   let arr = [];
//   if(n <= 0){
//     return 'Error: n must be a positive number'
//   }
//   for(let i = n; i <= n*3; i++){
//     if(i % 2 == 0){
//       arr.push(Math.pow(i, 2))
//     }
//   }
//   return arr;
// }
//
// function multiplesOf5(n){
//   let arr = [];
//   for(let i = 0; i <= n; i++){
//     if(i % 5 === 0){
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// function fillArray(n, m) {
//   const result = [];
//   for (let i = 0; i <= n; i++) {
//     if (i % 3 == 0) {
//       result.push(Math.pow(i, m))
//     }
//   }
//   return result;
// }

// function negativeArray(n){
//   let arr = [];
//   for(let i = n; i > 0; i--){
//     arr.push(-i);
//   }
//   return arr;
// }

// function fillArray(n, m){
//   let result = [];
//   let start = n;
//   let end = m;
//   if(n > m){
//     start = m;
//     end = n;
//   }
//   for(let i = start; i <= end; i++){
//     result.push(i);
//   }
//   return result;
// }
//
// function fillProgression(a1, d, n) {
//   let progression =[];
//   let currentTerm = a1;
//   for(let i=0; i<n; i++){
//     progression.push(currentTerm);
//     currentTerm +=d;
//   }
//   return progression;
// }

// function progressionMembers(firstMember, denominator, n){
//   let list = [];
//   let current = firstMember;
//   for(let i = 1; i <= n; i++){
//     list.push(current);
//     current *= denominator;
//   }
//   return list;
// }

// function isNegative(arr){
//   let flag = false;
//   for(let i of arr){
//     if(i < 0){
//       flag = true;
//       break;
//     }
//   }
//   return flag;
// }

// function isString(arr){
//   let flag = false;
//   for(let i of arr){
//     if(typeof i === 'string'){
//       flag = true;
//     }
//   }
//   return flag;
// }

// function numbersAndStrings(arr){
//   let number = [];
//   let string = [];
//   for(let i of arr){
//     if(typeof i === 'number'){
//       number.push(i);
//     } else if(typeof i === 'string'){
//       string.push(i)
//     }
//   }
//   return [number, string];
// }

// function positiveAndNegative(arr){
//   let pos = [];
//   let neg = [];
//   for(let i of arr){
//     if(i > 0){
//       pos.push(i)
//     }else if(i < 0){
//       neg.push(i)
//     }
//   }
//   return [pos, neg];
// }

// function findEvenAndPositive(arr){
//   for(let i = arr.length -1; i >= 0; i--){
//     if(arr[i] > 0 && arr[i] % 2 === 0){
//       return arr[i];
//     }
//   }
//   return 'No even and positive numbers found'
// }

// function findStringOrBoolean(arr){
//   for(let i = arr.length -1; i >= 0; i--){
//     if(typeof arr[i] === 'string' || typeof arr[i] === 'boolean'){
//       return i;
//     }
//   }
//   return 'No string or boolean found';
// }

// function getAllStr(arr){
//   let str = ''
//   for(let i of arr){
//     if(typeof i === 'string'){
//       str += ' ' + i;
//     }
//   }
//   return str.trim();
// }

// function sum(arr){
//   let sum = 0;
//   for(let i of arr){
//     if(i % 2 !== 0 && i > 0){
//       sum += i;
//     }
//   }
//   return sum;
// }

// function findNull(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === null){
//       return i;
//     }
//   }
//   return 'null not found';
// }
//
// function quantityOfNumbers(array) {
//   let result = 0;
//   for(let i = 0; i < array.length; i++) {
//     if(typeof array[i] === 'number') {
//       result++;
//     }
//   }
//   return result;
// }
//
// function noSpaces(str){
//   let newStr = str.split(' ').join('');
//   return newStr;
// }

// function lettersDivider(str){
//   let lower = '';
//   let upper = '';
//   for(let i = 0; i < str.length; i++){
//     if(str[i] == str[i].toUpperCase()){
//       upper += (str[i]);
//     } else if(str[i] == str[i].toLowerCase()){
//       lower += (str[i]);
//     }
//   }
//   return [lower, upper]
// }

// function reversedString(string, reversedString){
//   return string.split('').reverse().join('') === reversedString ? true : false;
// }

// function numOfSpaces(str1, str2){
//   let total = str1 + str2
//   let space = 0;
//   for(let i = 0; i < total.length; i++){
//     if(total[i] == ' '){
//       space++
//     }
//   }
//   return space;
// }

// function stringAndArray(str, arr){
//   if(str.length !== arr.length){
//     return 'Elements are not equal'
//   }
//   for(let i = 0; i < str.length; i++){
//     if(str[i] !== arr[i]){
//       return 'Elements are not equal'
//     }
//   }
//   return 'Elements are equal'
// }

// function oddAndEven(str){
//   let even = '';
//   let odd = '';
//   for(let i = 0; i < str.length; i++){
//     if(i % 2 === 0){
//       even += str[i];
//     } else{
//       odd += str[i];
//     }
//   }
//   return [odd, even]
// }

// function limitedLength(string, num){
//   let newStr= '';
//   for(let i = 0; i < num; i++){
//     newStr += string[i]
//   }
//   return newStr;
// }

// function everySecond(str){
//   let newStr = '';
//   for(let i = 0; i < str.length; i++){
//     if(i % 2 === 0) {
//       newStr += str[i].toUpperCase();
//     } else {
//       newStr += str[i].toLowerCase();
//     }
//   }
//   return newStr;
// }

// function stringOfNumbers(min, max) {
//   let result = '';
//   for (let i = min; i <= max; i++) {
//     result += i + ' ';
//   }
//   return result.trim();
// }

// function palindrome(str){
//   for(let i = 0; i < str.length / 2; i++){
//     if(str[i] !== str[str.length -1 - i]){
//       return false;
//     }
//   }
//   return true;
// }

// function palindrome(str){
//   let reversed = str.split('').reverse().join('');
//   return str == reversed;
// }

// function stopAtTwenty(arr, first, last){
//   for(let i = first; i <= last; i++){
//     arr.push(i);
//     if(i == 20){
//       break;
//     }
//   }
//   return arr;
// }

// function stopAt7(arr){
//   let arr2 = [];
//   for(let i = arr[0]; i <= arr[arr.length - 1]; i++) {
//     arr2.push(i)
//     if(i == 7) {
//       break
//     }
//   }
//   return arr2;
// }

// function stopAt8Element(arr, first, last){
//   let index = 1;
//   for(let i = first; i <= last; i++){
//     arr.push(i)
//     if(index == 8){
//       break
//     }
//     index ++
//   }
//   return arr;
// }

// function stopAt10Element(arr, num1, num2) {
//   let index = 1;
//   for(let i = num1; i <= num2; i++) {
//     arr.push(i)
//     if(index == 10) {
//       break
//     }
//     index++
//   }
//   return arr;
// }

// function noMoreThan3Char(arr, str){
//   let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] === str){
//       break
//     }
//     if(arr[i].length === 3){
//       count++
//     }
//   }
//   return count;
// }

// function stopAtR(str){
//   let count = 0;
//   for(let i = 0; i < str.length; i++){
//     if(str[i] == 'R'){
//       break;
//     }
//     count++
//   }
//   return count;
// }

// function stopCountAtEl(str, el) {
// //   let count = 0;
// //   for(let i = 0; i < str.length; i++) {
// //     if(str[i] == el.toUpperCase() || str[i] == el.toLowerCase()) {
// //       break;
// //     }
// //     count++
// //   }
// //   return count;
// // }

// function stopAt3DigitNum(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].toString().length === 3){
//       break
//     }
//     sum += arr[i];
//   }
//   return sum;
// }
//
// function stopAt2DigitNum(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] >= 9 && arr[i] <= 100 || arr[i] <= -9 && arr[i] >= -100) {
//       break;
//     }
//     sum += arr[i]
//   }
//   return sum;
// }

// function stopAtStringOrBoolean(arr){
//   let div = 1;
//   for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] == 'boolean' || typeof arr[i] == 'string'){
//       break
//     }
//     div *= arr[i]
//   }
//   return div;
// }

// function oddSum(arr) {
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if (arr[i] % 2 === 0) {
//       continue
//     }
//     sum += arr[i]
//   }
//   return sum
// }

// function evenSum(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       continue
//     }
//     sum += arr[i]
//   }
//   return sum;
// }

// function evenAvr(arr){
//   let sum = 0;
//   let count = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       continue
//     }
//     count++
//     sum += arr[i]
//   }
//   if(count == 0){
//     return 0;
//   }
//   return sum / count;
// }

// function onlyNegative(arr) {
//   let onlyNegative = [];
//   for (let i = 0; i < arr.length; i++) {
//     if(arr[i] > 0) {
//       continue;
//     }
//     onlyNegative.push(arr[i]);
//   }
//   return onlyNegative;
// }
//
// function cleanFromBoolean(arr){
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] == 'boolean'){
//       continue
//     }
//     newArr.push(arr[i]);
//   }
//   return newArr;
// }

// function deleteString(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== 'number'){
//       arr.splice(i, 1);
//       i--
//       continue;
//     }
//   }
//   return arr;
// }

// function onlyPhoneNumbers(arr){
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     let str = arr[i];
//     if(/^\d{10}$/.test(str) && str.indexOf('.') === -1 && str.split(' ').length === 1){
//       newArr.push(str);
//     }}
//   return newArr;
// }

// function twiceExceptOne(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == 1){
//       continue;
//     }
//     arr[i] *= 2;
//   }
//   return arr;
// }

// function divideOn10(arr){
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] < 10){
//       continue;
//     }
//     arr[i] = arr[i] / 10;
//   }
//   return arr;
// }

// function powerOfTwo(arr){
//   let newArr = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % Math.sqrt(arr[i]) == 0){
//       newArr.push(arr[i]);
//     }
//   }
//   return newArr;
// }

// function fromZeroToN(n){
//   let str = '';
//   for(let i = 0; i <= n; i++){
//     str += i;
//   }
//   return str;
// }

// function sumFromN1ToN2(num1, num2){
//   let sum = 0;
//   for(let i = num1; i <= num2; i++){
//     sum += i
//   }
//   return sum;
// }

// function multiplication(n){
//   let mul = 1;
//   for(let i = 1; i <= n; i += 2){
//     mul *= i;
//   }
//   return mul;
// }

// function subtraction(amount, num1, num2, step){
//   for(let i = num1; i <= num2; i += step){
//     amount -= i;
//   }
//   return amount;
// }

// function sumOfEvenNumbers(n1, n2){
//   let sum = 0;
//   for(let i = n1; i <= n2; i++){
//     if(i % 2 === 0){
//       sum += i;
//     }
//   }
//   return sum;
// }

// function evenVsOdd(num1, num2){
//   let sumOfOdd = 0;
//   let sumOfEven = 0;
//   for(let i = num1; i <= num2; i++){
//     if(i % 2 === 0){
//       sumOfEven += i;
//     } else {
//       sumOfOdd += i;
//     }
//   }
//   if(sumOfOdd > sumOfEven){
//     return 'Sum of odd win'
//   } else if(sumOfOdd < sumOfEven){
//     return 'Sum of even win'
//   } else {
//     return 'Draw'
//   }
// }

// function addToArray(n1, n2){
//   let arr = [];
//   if(n1 < n2){
//     for(let i = n1; i <= n2; i++){
//       arr.push(i)
//     }
//   }
//   else if(n1 > n2){
//     for(let i = n2; i <= n1; i++){
//       arr.push(i)
//     }
//   } else{
//     arr = [];
//   }
//   return arr;
// }

// function powerOfTwo(n){
//   let temp = 1;
//   for(let i = 1; i <= n; i++){
//     temp *= 2
//   }
//   return temp;
// }

// function positiveAndNegative(n1, n2){
//   let positive = 0;
//   let negative = 0;
//   for (let i = n1; i <= n2; i++){
//     if (i == 0) {
//       continue
//     } else if(i > 0){
//       positive++;
//     } else{
//       negative++;
//     }
//   }
//   return [positive, negative];
// }
//
// function stringOfNumbers(str) {
//   sum = 0;
//   for(let i = 0; i < str.length; i++) {
//     sum += Number(str[i]);
//   }
//   return sum;
// }

// function fromNumberToZero(num){
//   let arr = [];
//   if(num < 0){
//     return [];
//   }
//   for(let i = num; i >= 0; i--){
//     arr.push(i)
//   }
//   return arr;
// }

// function decreaseArray(num1, num2){
//   let arr = [];
//   if(num1 >= num2){
//     for(let i = num1; i >= num2; i--){
//       arr.push(i)
//     }
//   }
//   if(num1 < num2){
//     for(let i = num2; i >= num1; i--){
//       arr.push(i)
//     }
//   }
//   return arr;
// }
//
// function decreaseEven(num1, num2){
//   let arr = [];
//   for(let i = num1; i >= num2; i--){
//     if(i % 2 == 0){
//       arr.push(i);
//     }
//   }
//   return arr;
// }

// function arrayOdd(num1, num2){
//   let arr = [];
//   if(num1 > num2){
//     for(let i=num1; i >= num2; i--){
//       if(i % 2 !== 0){
//         arr.push(i)
//       }
//     }
//   } else {
//     for(let i=num2; i>=num1; i--){
//       if(i%2 !== 0){
//         arr.push(i)
//       }
//     }
//   }
//   return arr;
// }

// function makeOrder(n1, n2){
//   let arr = [];
//   if(n1 < n2){
//     for(let i = n1; i <= n2; i++){
//       arr.push(i)
//     }
//   }
//   if(n1 >= n2){
//     for(let i = n1; i >= n2; i--){
//       arr.push(i)
//     }
//   }
//   return arr;
// }

// function fractionSum(n){
//   let sum = 0;
//   for(let i = 1; i <= n; i++){
//     sum += 1 / i;
//   }
//   return Number(sum.toFixed(2));
// }

// function arrayOfSquares(n1){
//   if(n1 < 1){
//     return []
//   }
//   let arr = [];
//   for(let i = n1; i > 0; i--){
//     arr.push(i ** 2);
//   }
//   return arr;
// }

// function powerOfTwo(num){
//   if(num < 0){
//     return [];
//   }
//   let arr = [];
//   for(let i = num; i >= 0; i--){
//     arr.push(2 ** i);
//   }
//   return arr;
// }

// function powerOfNum(num, power){
//   if (power < num) return `Sum is ${num}`;
//   let sum = 0;
//   for (let i = num; i <= power; i++){
//     sum += num ** i;
//   }
//   return `Sum is ${sum}`;
// }

// function strToArray(str){
//   let arr = [];
//   for(let i = str.length -1; i >= 0; i--){
//     arr.push(Number(str[i]));
//   }
//   return arr;
// }

// function sumFromN1ToN2(n1, n2){
//   let sum = 0;
//   for(let i = n1 + 1; i < n2; i++){
//     sum += i;
//   }
//   return sum;
// }

// function divisibleByFive(n1, n2){
//   let sum = 0;
//   for(let i = n1 + 1; i < n2; i++){
//     if(i % 5 === 0){
//       sum += i
//     }
//   }
//   return sum;
// }

// function sumOfPositive(n1, n2){
//   let sum = 0;
//   for(let i = n1; i <= n2; i++){
//     if(i > 0){
//       sum += i;
//     }
//   }
//   return sum;
// }

// function negativeAndDivisibleBy3(n1, n2){
//   let sum = 0;
//   for(let i = n1; i < n2; i++){
//     if(i < 0 && i % 3 == 0){
//       sum += i;
//     }
//   }
//   return sum;
// }

// function allButZero(n1, n2){
//   let sum = 0;
//   for(let i = n1; i <= n2; i++){
//     if(i == 0){
//       return 'Invalid input'
//     }
//     sum += i
//   }
//   return sum;
// }

// function stringResult(n1, n2){
//   let sum = 0;
//   for(let i = n1; i <= n2; i++){
//     sum += i
//   }
//   return `Sum of numbers from ${n1} to ${n2} is ${sum}`;
// }

// function sumOfArray(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     sum += arr[i]
//   }
//   return `Sum of array is ${sum}`
// }

// function totalLength(array) {
//   let str = '';
//   for(let i = 0; i < array.length; i++) {
//     for(let j = 0; j < array[i].length; j++){
//       str += array[i][j]
//     }
//   }
//   return str.length;
// }

// function oneAndTwoDigits(n1, n2){
//   sumOfOne = 0;
//   sumOfTwo = 0;
//   for(let i = n1 + 1; i < n2; i++){
//     if(Math.abs(i) < 10){
//       sumOfOne += i
//     }
//     else if(Math.abs(i) > 9 && Math.abs(i) < 100){
//       sumOfTwo += i
//     }
//   }
//   return `Sum of one digit: ${sumOfOne}, sum of two digits: ${sumOfTwo}`
// }

// function addSumToObj(obj, n1, n2) {
//   sum = 0;
//   start = n1;
//   end = n2;
//   if(n2 < n1){
//     start = n2;
//     end = n1;
//   }
//   for(let i = start; i <= end; i++) {
//     sum += i;
//   }
//   obj.sum = sum;
//   return obj;
// }

// function sumOdd(arr){
//   sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       sum += arr[i]
//     }
//   }
//   return sum;
// }

// function sumOddNegative(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 !== 0 && arr[i] < 0){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// function sumEven(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] % 2 === 0){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// function sumEvenNegative(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++) {
//     if(arr[i] % 2 == 0 && arr[i] < 0) {
//       sum += arr[i]
//     }
//   }
//   return sum;
// }

// function sumEvenPositiveOddNegative(arr){
//   let sumEven = 0;
//   let sumOdd = 0;
//   for(let i = 0; i <= arr.length; i++){
//     if(arr[i] % 2 == 0 && arr[i] > 0){
//       sumEven += arr[i];
//     } else if(arr[i] % 2 !== 0 && arr[i] < 0){
//       sumOdd += arr[i];
//     }
//   }
//   let sum = sumEven + sumOdd;
//   return sum;
// }

// function sumEvenPositive3digitNum(arr){
//   let sum = 0;
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i].toString().length === 3 && arr[i] > 0 && arr[i] % 2 == 0){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// function from5ElTo10El(arr){
//   let sum = 0;
//   if(arr.length < 9){
//     for(let i = 4; i <= arr.length; i++){
//       if(arr[i] % 2 == 0){
//         sum += arr[i];
//       }
//     }
//   } else if (arr.length > 9){
//     for(let j = 4; j <= 9; j++){
//       if(arr[j] % 2 == 0){
//         sum += arr[j];
//       }
//     }
//   }
//   return sum;
// }

// function from2IndTo6Ind(arr){
//   let sum = 0;
//   for (let i = 2; i <= 6; i++) {
//     if(arr[i] % 2 !== 0 && arr[i] > 9 && arr[i] < 100)
//       sum += arr[i];
//   }
//   return sum
// }

// function sumEven2DigPositiveAnd3DigNegative(arr){
//   let sum = 0;
//   for (let i = 0; i < arr.length; i++) {
//     if ((arr[i] % 2 === 0 && arr[i] > 9 && arr[i] < 100) || (arr[i] % 2 === 0 && arr[i] < -99 && arr[i] > -1000)) {
//       sum += arr[i]
//     }
//   }
//   return sum;
// }

// function sumOddFromMiddleToEnd(arr){
//   let sum = 0;
//   let half = Math.floor(arr.length / 2);
//   for(let i = half; i < arr.length; i++){
//     if(arr[i] % 2 !== 0){
//       sum += arr[i];
//     }
//   }
//   return sum;
// }

// function stringToArray(str){
//   if(str.length == 0){
//     return [];
//   }
//   return str.split('');
// }

// function twoIntoOne(s1, s2){
//   if(s1.length !== 0 && s2.length !== 0){
//     let arr1 = s1.split('');
//     let arr2 = s2.split('');
//     arr1.push(' ');
//     return arr1.concat(arr2);
//   } else if(s1.length == 0 || s2.length ==0){
//     return s1.split('').concat(s2.split(''));
//   } else {
//     return [];
//   }
// }

// function replaceSpaces(str){
//   let arr = [];
//   let count = 0;
//   if(str.length === 0){
//     return arr;
//   }
//   for(let i = 0; i < str.length; i++){
//     if(str[i] == ' '){
//       count++;
//       continue;
//     } else {
//       arr.push(str[i]);
//     }
//   }
//   arr.reverse();
//   for(let i = 1; i <= count; i++){
//     arr.push(null)
//   }
//   return arr;
// }

// function twoStrings(s1, s2){
//   let arr = [];
//   for(let i = 0; i < s1.length; i++){
//     arr.push(s1[i] + s2[i])
//   }
//   return arr;
// }

// function reverseLettersCase(str){
//   let arr = str.split('');
//   let arr1 = [];
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] == ' '){
//       continue;
//     } else if(arr[i] !== arr[i].toUpperCase()){
//       arr1.push(arr[i].toUpperCase())
//     } else {
//       arr1.push(arr[i].toLowerCase())
//     }
//   }
//   return arr1;
// }

// function strOfNum(str){
//   let arr = [];
//   for(let i = 0; i < str.length; i++){
//     if(+str[i] == i){
//       arr.push(str[i])
//     }
//   }
//   return arr;
// }

// function vowelsAndConsonants(str){
//   let arr = [];
//   let arr2 = [];
//   for(let i = 0; i < str.length; i++){
//     if(str[i] == 'a' || str[i] == 'e' || str[i] == 'i' || str[i] == 'o' || str[i] == 'u'){
//       arr.push(str[i]);
//     } else {
//       arr2.push(str[i])
//     }
//   }
//   return [arr, arr2];
// }

// function vowelsAndConsonants(str){
//   let arr1 = str.match(/[aeiou]/g) || [];
//   let arr2 = str.match(/[bcdfghjklmnpqrstvwyz]/g) || [];
//   return [arr1, arr2];
// }

// function vowelsAndConsonants(str){
//   let arr = [];
//   let arr2 = [];
//   for(let i = 0; i < str.length; i++){
//     if('aeiou'.includes(str[i])){
//       arr.push(str[i]);
//     } else {
//       arr2.push(str[i])
//     }
//   }
//   return [arr, arr2];
// }

// function reverseString(str, b){
//   let arr = [];
//   for(let i = str.length -1; i >= 0; i--){
//     if(str[i] === b){
//       break;
//     }
//     arr.push(str[i]);
//   }
//   return arr;
// }

// function wordsDivider(str) {
//   if (str.length == 0) return [];
//   let array = [];
//   let chunk = '';
//   for (let i = 0; i < str.length; i++) {
//     if (str[i] !== ' ') {
//       chunk += str[i];
//     } else {
//       array.push(chunk);
//       chunk = '';
//     }
//   }
//   array.push(chunk)
//   return array;
// }

// function biggerString(str1, str2){
//   let arr = [];
//   let result = '';
//   if(str1.length === str2.length) {
//     result = str2;
//   } else if(str1.length > str2.length){
//     result = str1;
//   } else {
//     result = str2;
//   }
//   for(let i = 0; i < result.length; i++){
//     arr.unshift(result[i])
//   }
//   return arr;
// }

// function wordFromLetters(letters){
//   return letters.join('');
// }

// function getNumber(digits){
//   let number = '';
//   for(let i = 0; i < digits.length; i++){
//     number += digits[i];
//   }
//   return +number;
// }

// function numbersToString(numbers){
//   let result = '';
//   for(let i = 0; i < numbers.length; i++) {
//     result += numbers[i];
//     if( i !== numbers.length - 1) {
//       result += ',';
//     }
//   }
//   return result;
// }

// function shoppingList(items){
//   let res = 'Shopping list:';
//   for(let i = 0; i < items.length; i++){
//     res += '\n-' + items[i];
//   }
//   return res;
// }

// function wordsToSentence(words){
//   if(words.length == 0){
//     return '';
//   }
//   let sentence = '';
//   sentence = words[0][0].toUpperCase() + words[0].substring(1).toLowerCase();
//   for(let i = 1; i < words.length; i++){
//     sentence += ' ' + words[i].toLowerCase();
//   }
//   return sentence + '.'
// }

// function stringOfPositiveIntegers(arr){
//   let str = ' ';
//   for(let i = 0; i < arr.length; i++){
//     if(arr[i] > 0 && arr[i] % 1 == 0){
//       str += arr[i] + '; '
//     }
//   }
//   return '(' + str.trimEnd() + ')';
// }

// function getWordsStartingWith(words, letter){
//   let str = '';
//   for(let i = 0; i < words.length; i++){
//     if(words[i][0].toLowerCase() == letter.toLowerCase()){
//       str += ' ' + words[i];
//     }
//   }
//   return str.trimStart();
// }

// function filterByLength(words, length){
//   let result = '';
//   for (let i = 0; i < words.length; i++) {
//     if (length === 0 || words[i].length === length) {
//       if ( result !== '') {
//         result = result + ',';
//       }
//       result += words[i] ;
//     }
//   }
//   return result;
// }

// function filterByLetter(words, letter){
//   if(letter == ''){
//     return words.join(';');
//   }
//   let str = '';
//   for(let i = 0; i < words.length; i++){
//     for(let j = 0; j < words[i].length; j++){
//       if(words[i][j].toLowerCase() == letter.toLowerCase()){
//         str += words[i] + ';'
//         break;
//       }
//     }
//   }
//   return str.slice(0, -1);
// }

// function booksToRead(books){
//   let booksToRead = [];
//   for (let i = 0; i < books.length; i++) {
//     if (books[i].alreadyRead === false) {
//       booksToRead.push(books[i]);
//     }
//   }
//   if (booksToRead.length === 0) {
//     return `Congrats! You've read all books.`;
//   } else {
//     let result = `You still need to read: `;
//     for (let i = 0; i < booksToRead.length; i++) {
//       result += `"${booksToRead[i].title}" by ${booksToRead[i].author}`;
//       if (i == booksToRead.length - 1) {
//         result += '.';
//       } else {
//         result += ', ';
//       }
//     }
//     return result;
//   }
// }

// function reverseString(str){
//   let newStr = str.split('').reverse().join('');
//   return newStr;
// }

// function reverseWithoutSpaces(str){
//   let newStr = str.split(' ').join('').split('').reverse().join('');
//   return newStr;
// }

// function reverseStrAndCase(str){
//   return str.split('').reverse().map(el => el == el.toUpperCase() ? el.toLowerCase() : el.toUpperCase()).join('')
// }

// function reverseStrInArray(arr){
//   let str = '';
//   for(let i = arr.length -1; i >= 0; i--){
//     str += arr[i];
//   }
//   return [arr[0], str.split('').reverse().join('')]
// }

// function reverseStrInArray(arr){
//   return [arr[0], arr[0].split('').reverse().join('')]
// }

// function reverse(str, index, index2){
//   if(str == ''){
//     return 'nothing to reverse'
//   }
//   let res = '';
//   for(let i = 0; i < str.length; i++){
//     if(i == index || i == index2){
//       continue;
//     }
//     res += str[i];
//   }
//   res = res.split('').reverse().join('');
//   return str + ' ' + res;
// }

// function reverseAndSpaceIt(str){
//   return str.split('').reverse().join(' ').trim();
// }

// function reverseAndCompare(str1, str2){
//   let newStr1 = str1.split('').reverse().join('');
//   if(str2 == newStr1.toLowerCase()){
//     return 'Strings are equal with lowercase';
//   } else if(newStr1.toUpperCase() == str2){
//     return 'Strings are equal with uppercase';
//   } else {
//     return 'Strings are not equal'
//   }
// }

// function reverseBigger(arr){
//   if(arr[0].length > arr[1].length){
//     arr.push(arr[0].split('').reverse().join(''));
//   } else {
//     arr.push(arr[1].split('').reverse().join(''));
//   }
//   return arr
// }

// function deepReverse(str) {
//   let newStr = '';
//   for (let i = 0; i < str.length; i++) {
//     if(str[i].toUpperCase() === str[i]){
//       newStr += str[str.length - 1 - i].toUpperCase();
//     } else {
//       newStr += str[str.length - 1 - i].toLowerCase();
//     }
//   }
//   return newStr;
// }

// function reverseStringInArray(arr){
//   let newArr = [];
//   for (let i = 0; i < arr.length; i++) {
//     let chunk = '';
//     for (let j = arr[i].length - 1; j >= 0; j--) {
//       chunk += arr[i][j];
//     }
//     newArr.push(chunk);
//   }
//   return newArr;
// }

// function checkTheString(str){
//   return str.split('').reverse().join('') === str;
// }

// function isPalindrome(str){
//   return str.toLowerCase().split('').reverse().join('') == str.toLowerCase();
// }

// function isAnyPalindrome(str1, str2){
//   if(str2.split('').reverse().join('') == str2 && str1.split('').reverse().join('') == str1){
//     return 'both are palindrome'
//   }
//   if(str1.split('').reverse().join('') == str1){
//     return `${str1} is palindrome`
//   }
//   if(str2.split('').reverse().join('') == str2){
//     return `${str2} is palindrome`
//   } else {
//     return 'none of them is palindrome'
//   }
// }

// function checkArray(arr){
//   return arr[0].split('').reverse().join('') == arr[0];
// }

// function makePalindrome(str){
//   let newStr = str.split('').reverse().join('');
//   return str + newStr
// }

// function isArrayPalindrome(arr){
//   return arr.toString().split('').reverse().join('') == arr ? true : false;
// }

// function checkStr(str){
//   if(str.split('').reverse().join('') == str){
//     return `${str} is palindrome`;
//   }
//   if(str.split('').reverse().join('') != str){
//     return `${str} is not palindrome`;
//   }
// }

// function fixStr(str){
//   let middleStr = str.length / 2;
//   for (let i = 0; i < middleStr; i++) {
//     if (str[i] != str[str.length - 1 - i])
//       return false;
//   }
//   return true;
// }

// function checkPalindrome(str){
//   if(str.toLowerCase().split('').reverse().join('') == str.toLowerCase()){
//     return `${str.trim().toLowerCase()} is a palindrome`
//   }
//   return `${str.trim().toLowerCase()} is not a palindrome`
// }

// function findWrongLetter(str){
//   let str1 = str.split('').reverse().join('');
//   for(let i = 0; i < str.length; i++){
//     if(str[i] != str1[i]){
//       return `${str} is not palindrome because of wrong letter at position ${i}`
//     }
//   }
// }

// function spread(func, args) {
//   return func.apply(this, args);
// }

// let beeramid = function(bonus, price) {
//   if(bonus <= 0 || price <= 0){
//     return 0;
//   }
//   let res = Math.floor(bonus / price);
//   let levels = 0;
//   let need = 0;
//   while(res >= need){
//     levels ++
//     need += levels ** 2;
//   }
//   return levels -1;
// }

// function scoreTest(str, right, omit, wrong){
//   let answer = 0;
//   for(let i = 0; i < str.length; i++){
//     if(str[i] == 0){
//       answer += right
//     } else if(str[i] == 1){
//       answer += omit
//     } else if(str[i] == 2){
//       answer -= wrong;
//     }
//   }
//   return answer;
// }

// function doors(n){
//   return Math.floor(Math.sqrt(n));
// }

// function findUniq(arr) {
//   let unique = {};
//   for(let i = 0; i < arr.length; i++){
//     let num = arr[i];
//     if(unique[num]){
//       unique[num] =  unique[num] + 1
//     } else {
//       unique[num] = 1
//     }
//   }
//   for(let i in unique){
//     if(unique[i] == 1){
//       return parseFloat(i)
//     }
//   }
// }

// function zeros (n) {
//   let sum = 0;
//   for(let i = 5; n / i >= 1; i *= 5){
//     sum += Math.floor(n / i)
//   }
//   return sum;
// }

// function nbYear(p0, percent, aug, p) {
//   let i = 0;
//   for(i = 0; p0 < p; i++){
//     p0 = Math.floor(p0 + p0 * percent / 100 + aug)
//   }
//
//   return i;
// }

// function nbYear(p0, percent, aug, p) {
//   let years = 0;
//   percent = percent / 100;
//   while(p0 < p){
//     p0 = Math.floor(p0 + p0 * percent + aug);
//     years++
//   }
//   return years;
// }

// const quarterOf = (month) => {
//   if(month <= 3 && month >= 1){
//     return 1;
//   }
//   else if (month >= 4 && month <= 6) {
//     return 2;
//   }
//   else if (month >= 7 && month <= 9) {
//     return 3;
//   }
//   else if(month >= 10 && month <= 12){
//     return 4;
//   }
// }

// function swapValues(args) {
//   let temp = args[0];
//   args[0] = args[1];
//   args[1] = temp;
//   return args;
// }

// function reverseByCenter(s){
//   let length = s.length;
//   let half = Math.floor(length / 2);
//   if(length % 2 == 0){
//     return s.slice(half) + s.slice(0, half);
//   } else {
//     return s.slice(half + 1) + s.charAt(half) + s.slice(0, half)
//   }
// }

// function guessBlue(blueStart, redStart, bluePulled, redPulled) {
//   let blue = blueStart - bluePulled;
//   let red = redStart - redPulled;
//   return blue / (blue + red)
// }

// function rgb(r, g, b) {
//   r = Math.max(0, Math.min(255, r))
//   g = Math.max(0, Math.min(255, g))
//   b = Math.max(0, Math.min(255, b))
//   let color = (r << 16) + (g << 8) + b;
//   return ('00000' + color.toString(16).toUpperCase()).slice(-6)
// }

// function isValidIP(str) {
//   return /^(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))\.(\d|[1-9]\d|1\d\d|2([0-4]\d|5[0-5]))$/.test(str);
// }

// function solution(string) {
//   return(string.replace(/([A-Z])/g, ' $1'));
// }

// function generateHashtag (str) {
//   if(str.trim() === '') return false
//
//   let strWithCamel = str
//     .split(' ')
//     .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//     .join('')
//
//   let strWithHash = `#${strWithCamel.trim()}`;
//   return strWithHash.length > 140 ? false : strWithHash;
// }

// function deleteNth(arr,n){
//   let res = {};
//   return arr.filter(v => (res[v] = ~~ res[v] + 1) <= n)
// }

// function peopleWithAgeDrink(old) {
//   if(old < 14){
//     return 'drink toddy'
//   } else if(old < 18){
//     return 'drink coke'
//   } else if(old < 21){
//     return 'drink beer'
//   } else if(old >= 21){
//     return 'drink whisky'
//   }
// };

// function twoSort(s) {
//   return s.sort()[0].split('').join('***');
// }

// function expandedForm(num) {
//   return num.toString()
//     .split("")
//     .reverse()
//     .map((a, i) => a * Math.pow(10, i))
//     .filter(a => a > 0)
//     .reverse()
//     .join(" + ");
//
// }

// function wave(str){
//   return Array(str.length).fill(str).map((v, i, arr) =>
//     v.slice(0, i).toLowerCase() +
//     v.slice(i, i + 1).toUpperCase()
//     + v.slice(i + 1).toLowerCase())
//     .filter(v => v != v.toLowerCase())
// }

// function solution(input, markers) {
//   let arr = input.split('\n');
//   for(i = 0; i < markers.length; i++){
//     arr = arr.map(function(el) {
//       let ind = el.indexOf(markers[i]);
//       if(ind !== -1) return el.substr(0, ind);
//       else return el.replace(/\s*$/,'');
//     });
//   }
//   return arr.join('\n').trim();
// };

// let number = function(array){
//   return array.map((el, ind) => `${ind + 1}: ${el}`);
// }

// function stray(numbers) {
//   return numbers.find(
//     number => numbers.indexOf(number) === numbers.lastIndexOf(number)
//   )
// }

// function toCamelCase(str){
//   return str.replace(/[-_](.)/g, (_, c) => c.toUpperCase());
// }

// let determinant = m => m.length === 1 ? m[0][0] : m[0].reduce((s, n, i) => s + (i % 2 === 0 ? 1 : -1) * n * determinant(m.slice(1)
//   .map(r => r.filter((_, j) => j !== i))), 0);

// function firstNonRepeatingLetter(s) {
//   return s[s.toLowerCase().split('').findIndex(letter => s.toLowerCase().split('').filter(l => l === letter).length === 1)] || ''
// }

// function isPangram(string){
//   let str = string.split('').join('').replace(/[\W\d]/g, '').toLowerCase().split('');
//   return [...new Set(str)].length == 26;
// }

// function updateLight(current) {
//
//   return current === 'yellow' ? 'red' : current === 'green' ? 'yellow' : 'green'
//
// }

// const sequenceSum = (begin, end, step) =>
//   begin > end ? 0 : begin + sequenceSum(begin + step, end, step)

// function getPINs(observed) {
//   let obj = {
//     "0": ["0", '8'],
//     '1': ['1', '2', '4'],
//     '2': ['2', '3', '5', '1'],
//     '3': ['3', '6', '2'],
//     '4': ['4', '1', '5', '7'],
//     '5': ['5', '2', '6', '8', '4'],
//     '6': ['6', '3', '9', '5'],
//     '7': ['7', '4', '8'],
//     '8': ['8', '5', '9', '0', '7'],
//     '9': ['9', '6', '8']
//   }
//   return observed.split('').map(o => obj[o]).reduce((start, tail) => {
//     if(!start) return tail;
//
//     return start.reduce((list, combination) =>
//         list.concat(tail.map(key => combination + key))
//       , []);
//   }, null);
// }

// function reverseList(list) {
//   return list.reverse();
// }

// function baseCost(days, rate){
//   return days * rate;
// }
//
// function discountRate(days){
//   if(days >= 7){
//     return 50;
//   }
//   else if(days >= 3){
//     return 20;
//   }
//   else{
//     return 0;
//   }
// }
//
// function rentalCarCost(days){
//   return baseCost(days, 40) - discountRate(days);
// }

// function spinWords(string){
//   return string.split(' ').map(value => { if (value.length > 4) return value.split('').reverse().join('');
//     return value})
//     .join(' ')
// }

// decodeMorse = function(morseCode){
//   return morseCode.split(' ').map((v, i) => MORSE_CODE[v] != undefined ? MORSE_CODE [v] : 1).join('').replace(/11/g, ' ').replace(/1/g, ' ').trim();
// }

// function testEven(n) {
//   if(n % 2 == 0){
//     return true;
//   }
//   return false;
// }

// function orderWeight(strng) {
//   let sum = (str) => str.split('').reduce((sum, el) => (sum + (+el)), 0);
//   function comp(a, b){
//     let sumA = sum(a);
//     let sumB = sum(b);
//     return sumA === sumB ? a.localeCompare(b) : sumA - sumB;
//   };
//   return strng.split(' ').sort(comp).join(' ');
// }

// function rowSumOddNumbers(n) {
//   return Math.pow(n, 3);
// }

// function combat(health, damage) {
//   return health < damage ? 0 : health - damage;
// }

// function nthEven(n){
//   return n * 2 - 2;
// }

// function differenceInAges(ages){
//   return [Math.min(...ages), Math.max(...ages), Math.max(...ages) - Math.min(...ages)];
// }

// function pigIt(str){
//   return str.split(' ').map(v => v.match(/[A-Za-z]/) ? v.slice(1) + v.slice(0, 1) + 'ay' : v).join(' ')
// }

// const cakes = (needs, has) => Math.min(
//   ...Object.keys(needs).map(key => Math.floor(has[key] / needs[key] || 0))
// )

// function listSquared(m, n) {
//   let arr = [];
//   for(let i = m; i <= n; i++){
//     let temp = 0;
//     for(let j = 1; j <= i; j++){
//       if(i % j == 0){
//         temp += j * j;
//       }
//     }
//     if(Math.sqrt(temp) % 1 == 0){
//       arr.push([i, temp]);
//     }
//   }
//   return arr;
// }

// function xor(a, b) {
//   return a != b;
// }

// function findShort(s){
//   return Math.min(...s.split(' ').map(s => s.length));
// }

// function groupByCommas(n) {
//   return n.toLocaleString()
// }

// function between(a, b) {
//   let arr = [];
//   for(let i = a; i <= b; i++){
//     arr.push(i)
//   }
//   return arr;
// }

// function sumDigits(number) {
//   return Math.abs(number).toString().split('').reduce((total, next ) => total + Number(next), 0)
// }

// class SmallestIntegerFinder {
//   findSmallestInt(args) {
//     return Math.min(...args)
//   }
// }

// function goals () {
//   return [...arguments].reduce((a, b) => a + b, 0);
// }

// function paperwork(n, m) {
//   return n > 0 && m > 0 ? n * m : 0;
// }

// function helloWorld(){
//   let str;
//   console.log('Hello World!');
//   'Hello World!'
// }

// function remove (string) {
//   return string.replace(/!$/, '');
// }

// let Kata = {
//   getVolumeOfCuboid : (length, width, height) => length * width * height
// }

// function checkForFactor (base, factor) {
//   return base % factor === 0
// }

// function revrot(str, sz) {
//   if(sz < 1 || sz > str.length)
//     return '';
//
//   let reverse = s => s.split('').reverse().join('');
//   let rotate = s => s.slice(1) + s.slice(0, 1);
//   let sumCubes = c => c.split('').reduce((a, b) => a + Number(b) ** 3, 0);
//
//   return str
//     .match(new RegExp('.{' + sz + '}', 'g'))
//     .map(c => sumCubes(c) % 2 ? rotate(c) : reverse(c))
//     .join('');
// }

// function main (verb, noun){
//   return `${verb}${noun}`
// }

// function animal(obj){
//   return `This ${obj.color} ${obj.name} has ${obj.legs} legs.`;
// }

// function tribonacci(signature,n){
//   let arr = [...signature];
//   for(let i = 0; i < n; i++){
//     arr.push(arr.slice(i, i + 3).reduce((acc, next) => acc + next, 0))
//   }
//   return arr.slice(0, -3)
// }

// function encrypt(text, n) {
//   if(!text || n <= 0) return text;
//   while(n--) {
//     let ans = '';
//     for(let i = 1; i < text.length; i += 2){
//       ans += text[i];
//     }
//     for(let i = 0; i < text.length; i += 2){
//       ans += text[i];
//     }
//     text = ans;
//   }
//   return text;
// }
//
// function decrypt(encryptedText, n) {
//   if(!encryptedText || n <= 0) return encryptedText;
//   let ans = new Array(encryptedText.length);
//   while(n--){
//     let j = 0;
//     for(let i = 1; i < ans.length; i += 2){
//       ans[i] = encryptedText[j++];
//     }
//     for(let i = 0; i < ans.length; i += 2){
//       ans[i] = encryptedText[j++];
//     }
//     encryptedText = ans.join('');
//   }
//   return encryptedText;
// }

// function replace(s){
//   return s.replace(/[aeoiu]/ig, '!')
// }

// function insurance(age, size, numofdays){
//   let insur = 0;
//   if(age < 25) insur += 10;
//   if(size === 'economy') insur += 0;
//   else if(size === 'medium') insur += 10
//   else if(size === 'full-size') insur += 15
//   else insur += 15
//   insur = (numofdays * (50 + insur))
//   return insur >= 0 ? insur : 0
// }

// function solve(str){
//   let arr = [...str.split(' ').join('')];
//   return str.replace(/\S/g, a => arr.pop());
// }

// function titleCase(title, minorWords) {
//   var minorWords = typeof minorWords !== 'undefined' ? minorWords.toLowerCase().split(' ') : [];
//   return title.toLowerCase().split(' ').map(function(v, i) {
//     if(v != '' && ((minorWords.indexOf(v) === -1) || i == 0)){
//       v = v.split('');
//       v[0] = v[0].toUpperCase();
//       v = v.join('');
//     }
//     return v;
//   }).join(' ');
// }

// function whatday(num) {
//   switch(num){
//     case 1:
//       return 'Sunday';
//     case 2:
//       return 'Monday';
//     case 3:
//       return 'Tuesday';
//     case 4:
//       return 'Wednesday';
//     case 5:
//       return 'Thursday';
//     case 6:
//       return 'Friday';
//     case 7:
//       return 'Saturday';
//     default:
//       return 'Wrong, please enter a number between 1 and 7';
//   }
// }

// function stockList(listOfArt, listOfCat){
//   if(listOfArt.length === 0 || listOfCat.length === 0) return ''
//   let arr = [];
//   let list = '';
//   let not = 0;
//   for(let i = 0; i < listOfCat.length; i++){
//     list = listOfCat[i];
//     not = 0;
//     for(let j = 0; j < listOfArt.length; j++){
//       if(listOfArt[j][0] === listOfCat[i]){
//         not += listOfArt[j].match(/[\d]+/g) * 1 }}
//     let str = `(${list} : ${not})`
//     arr.push(str)
//   }
//   return arr.join(' - ')
// }

// function axisAlignedBoundingBox(x, y) {
//   let a = Math.max(...x) - Math.min(...x)
//   let b = Math.max(...y) - Math.min(...y)
//   return a * b;
// }

// function generateLink(user) {
//   return `http://www.codewars.com/users/${encodeURIComponent(user)}`
// }

// const store = {
//   name: 'Walmart',
// };
// const customer = {
//   name: 'Joe',
// };
// function say(){
//   console.log('Hi, ' + this.name);
// }
// say.apply(store);
// say.apply(customer);

// const user = {
//   name: 'Ben',
// };
// const user2 = {
//   name: 'Anna',
// };
// function mul(n1, n2){
//   console.log('Bye, ' + this.name + ' ' + (n1 * n2));
// }
// say.apply(user, [10, 5])
// say.apply(user2, [-7, -6])

// const client = {
//   id: 111,
//   fullName: null,
//   setName: function(first, last){
//     this.fullName = first + ' ' + last;
//   }
// }
// function getName([first, last], func, obj){
//   func.apply(obj, [first, last]);
// }
// getName(['Jenna', 'Rodrigez'], client.setName, client);
// console.log(client.fullName);

// let guests = ['Alan', 'Zoi', 'Mally', 'Zick'];
// function welcome(){
//   const args = Array.prototype.slice.call(arguments), (1)
//   let lastElem = args.pop();
//   console.log('Welcome ' + args.join(', ') + ', and ' + lastElem + '.');
// }
// welcome.apply(null, guests);

// const nums = [2, 4, -1, 43, 56, 9];
// let max = Math.max.apply(null, nums);
// let min = Math.min.apply(null, nums)
// let res = max - min;
// console.log(res);

// const user = {
//   name: 'Zelanda'
// };
// function sayHi(){
//   console.log('Good morning, ' + this.name);
// }
// let funcUser = sayHi.bind(user);
// funcUser();

// const user = {
//   name: 'Nick',
// };
// function sayHi(word){
//   console.log(word + 'Hello, ' + this.name);
// }
// let funcUser = sayHi.bind(user);
// funcUser('I meant Hi!');
//
// let user = {
//   name: 'Ivanna',
//   say: function (){
//     console.log(this.name + ' Hi!');
//   },
// };
// let sayHi = user.say.bind(user);
// sayHi();
//
// let user = {
//   name: 'Ivanna',
//   say: function (text){
//     console.log(this.name + ' Hi!' + text);
//   },
// };
// let sayHi = user.say.bind(user);
// sayHi('How are you?');

// const user = {
//   name: 'Jampiya',
//   age: 67,
//   introduction: function (job){
//     console.log('Name is ' + this.name);
//     console.log('Age is ' + this.age);
//     console.log('Job is ' + job);
//   },
// };
// let say = user.introduction.bind(user);
// say('QA');
// const person = {
//   name: 'Tanya',
//   age: 34,
// };
// user.introduction.bind(person, 'QA')();

// const obj = {
//   num: 2, name
//   mult: function (b, c){
//     return this.num * b * c;
//   } ,
// };
// let mult3 = obj.mult.bind(obj, 3);
// console.log(mult3(5));
// console.log(mult3(70));

// const obj = {
//   mult: function (b, c){
//     return b * c;
//   }
// }
// let mult3 = obj.mult.bind(null, 3);
// console.log(mult3(79));
// console.log(mult3(90));

// String.prototype.trimAndUp = function (){
//   return this.trim().toUpperCase();
// }
// console.log(' c a t  '.trimAndUp());
// console.log('    Dog'.trimAndUp());

// String.prototype.trimSpaces = function (){
//   return this.split(/\s/).join('')
// }
// let str = 'a b      c d e   '
// let str2 = 'Hi, James Greed !  ';
// console.log(str.trimSpaces());
// console.log(str2.trimSpaces());

// Number.prototype.add = function (value){
//   return this + value;
// }
//
// Number.prototype.subtr = function (value){
//   return this - value;
// }
//
// Number.prototype.mult = function (value){
//   return this * value;
// }
//
// Number.prototype.div = function (value){
//   return this / value;
// }
// let num = 100;
// console.log(num.add(5));
// console.log(num.subtr(7));
// console.log(num.mult(5));
// console.log(num.div(30));
// console.log(num.add(50).div(6).mult(8).subtr(8));

// Number.prototype.addAdd = function (){
//   const args = Array.prototype.slice.call(arguments);
//   let res = args.map(el => el + this).reduce((acc, curr) => acc + curr, 0);
//   return res;
// }
// let num2 = 5;
// console.log(num2.addAdd(1, 1, 2, 7))

// Number.prototype.truncate = function (n){
//   return Math.trunc(Math.round(this * Math.pow(10, n))) / Math.pow(10, n);
// }
// let number = 12.12345678;
// console.log(number.truncate(5));
// console.log(number.truncate(6));

// Number.prototype.substrNum = function (){
//   let str = this.toString();
//   let ind = str.indexOf('.')
//   return ind = -1 ? +str : str.substring(ind);
//  }
//  let number = 125.67564;
// let number2 = 7;
// console.log(number.substrNum());
// console.log(number2.substrNum());

// const str = 'obbo';
// const isPalindrome = str.split('').reverse().join('') === str;
// console.log(isPalindrome)
//
// const str = 'obgo';
// const isPalindrome = str.split('').reverse().join('') === str;
// console.log(isPalindrome)
//
// const str = 'Obbo';
// const isPalindrome = str.split('').reverse().join('') === str;
// console.log(isPalindrome)

// const str = 'Obbo';
// const isPalindrome = str.toLowerCase().split('').reverse().join('') = str.toLowerCase();
// console.log(isPalindrome);

// function isPalindrome(str){
//   for(let i = 0; i , str.length; i++){
//     if(str[i] !== str[str.length -1 -i]){
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(isPalindrome('obqiiwbo'));
//
// function isPalindrome(str){
//   for(let i = 0; i < str.length; i++){
//     if(str[i] !== str[str.length -1 -i]){
//       return false;
//     }
//   }
//   return true;
// }
//
// console.log(isPalindrome('obiyyibo'));

// function incrementer(nums) {
//   return nums.map((v, i) => (v + i + 1) % 10);
// }

// function solve(s) {
//   s = s.toLowerCase();
//   let arr = s.slice().replace(/[aeiuo]/g, ' ').replace(/\s+/g, ' ');
//   arr = arr.split(' ').map(v => v.split('').map(v => v.charCodeAt()-96).reduce((a, b) => a + b, 0))
//   return Math.max(...arr);
// };

// function solution(number){
//   let res = '',
//     decimals = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1],
//     roman = ['M', 'CM', 'D', 'CD', 'C', 'XC', 'L', 'XL', 'X', 'IX', 'V', 'IV', 'I'];
//
//   decimals.map(function (value, index) {
//     while(number >= value) {
//       res += roman[index];
//       number -= value;
//     }
//   });
//   return res;
// }

// function isLeapYear(year) {
//   return (year % 100 !== 0 && year % 4 === 0) || year % 400 === 0;
// }

// function include(arr, item){
//   return arr.includes(item);
// }

// function formatMoney(amount){
//   return `$${amount.toFixed(2)}`
// }

// function scramble(str1, str2) {
//   let char = str1.split('').reduce((a, b) => { a[b] ? a[b]++ : a[b] = 1; return a }, {});
//   return str2.split('').every((char2) => --char[char2] >= 0);
// }

// function meeting(s) {
//   return s.replace(/;/gi, ' ').split(' ').map(a => a.split(':').reverse().join(', ').toUpperCase()).sort()
//     .map(c => '(' + c + ')').join('');
// }

// function solution(number){
//   let arr = [];
//   for(let i = number -1; i >= 0; i--){
//     if(i % 3 === 0) arr.push(i);
//     if(i % 5 === 0) arr.push(i);
//   }
//   return [...new Set(arr)].reduce((a ,b) => a + b, 0);
// }

// var SequenceSum = (function() {
//   function SequenceSum() {}
//
//   SequenceSum.showSequence = function(count) {
//     let arr = [];
//     for(let i = 0; i <= count; i++){
//       arr.push(i);
//     }
//     let a = arr.reduce((a, b) => a + b, 0)
//     let b = arr.join('+')
//     if(count < 0) return `${count}<0`;
//     if(count == 0) return `${count}=0`;
//     return `${b} = ${a}`
//   };
//
//   return SequenceSum;
//
// })();

// function flattenAndSort(array) {
//   return [].concat(...array).sort((a, b) => a - b);
// }

// function isAnagram(str1, str2){
//   const s1 = str1.trim().toLowerCase();
//   const s2 = str2.trim().toLowerCase();
//
//   if (s1.length !== s2.length) return false;
//
//   for (let i = 0; i < s1.length; i++){
//     for(let j = 0; j < s2.length; j++){
//       if(s1[i] === s2[j]) break;
//       if(s2.length -1 === j) return false;
//       }
//     }
//   return true;
//   }
// console.log(isAnagram('elbow', 'below'))

// function isAnagarm(str1, str2){
//   let s1 = str1.trim().toLowerCase();
//   let s2 = str2.trim().toLowerCase();
//
//   if(s1.length !== s2.length) return false;
//
//   const s2obj = {};
//
//   for(let i = 0; i < s2.length; i++){
//     const el = s2[i];
//     s2obj[el] = true;
//   }
//
//   for(let i = 0; i < s1.length; i++){
//     const el = s1[i];
//     if(!s2obj[el]) return false;
//   }
//   return true;
// }
//
// console.log(isAnagarm('123', '923'));
// console.log(isAnagarm('elbow', 'below'));
// console.log(isAnagarm('laptop 123', 'toplap 125'));
// console.log(isAnagarm('laptop 123', 'toplap 123'));
// console.log(isAnagarm('laptop machines', 'Apple Macintosh'))

// function isAnagram(str1, str2){
//   let s1 = str1.trim().toLowerCase();
//   let s2 = str2.trim().toLowerCase();
//
//   if(s1.length !== s2.length) return false;
//
//   let s1mod = s1.split('').sort().join('');
//   let s2mod = s2.split('');
//   let s2mod2 = s2mod.sort()
//   let s2mod3 = s2mod2.join('')
//
//   return s1mod === s2mod3;
// }
//
// console.log(isAnagram('below', 'elbow'));

// function isAnagram(str1, str2){
//   let s1 = str1.split('').sort().join('');
//   let s2 = str2.split('').sort().join('');
//   return s1 === s2;
// }

// function isAnagram(str1, str2){
//
//   if(str1.length === 0 || str2.length === 0 ){
//     return 'One or both strings are empty'
//   }
//
//   let s1 = str1.trim().toLowerCase().replace(/\s/g, '').split('').sort().join('');
//   let s2 = str2.trim().toLowerCase().replace(/\s/g, '').split('').sort().join('');
//   return s1 === s2;
// }

// function isAnagram(str1, str2){
//   if(str1.length !== str2.length){
//     return false;
//   }
//   let s1obj = {};
//   let s2obj = {};
//   for(let i of str1){
//     i = i.toLowerCase();
//     if(i !== ' '){
//       s1obj[i] = (s1obj[i] || 0) + 1
//     }
//   }
//   for(let i of str2){
//     i = i.toLowerCase();
//     if(i !== ' '){
//       s2obj[i] = (s2obj[i] || 0) + 1
//     }
//   }
//   for(let i in s1obj){
//     if(s1obj[i]!== s2obj[i]){
//       return false;
//     }
//   }
//   return true;
// }

// function noOdds( values ){
//     return values.filter(x => x % 2 === 0);
// }

// function isAnagram(str1, str2){
//     let s1 = str1.toLowerCase();
//     let s2 = str2.toLowerCase();
//     s1 = s1.replace(/\s/g, '');
//     s2 = s2.replace(/\s/g, '');
//
//     if(s1.length !== s2.length){
//         return false;
//     }
//     let char1 = {};
//     let char2 = {};
//     for(let i of s1){
//         char1[i] = (char1[i] || 0) + 1;
//     }
//     for(let i of s2){
//         char2[i] = (char2[i] || 0) + 1;
//     }
//     for(let i in char1){
//         if(char1[i] !== char2[i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isAnagram(arr){
//     if(arr.length <= 1){
//         return true;
//     }
//     let s1 = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         let str = arr[i];
//         if(s1.length !== str.length){
//             return false;
//         }
//         let obj = {};
//         for(let i of str){
//             obj[i] = (obj[i] || 0) + 1;
//         }
//         for(let i of s1){
//             if(!obj[i]){
//                 return false;
//             }
//             obj[i]--
//         }
//     }
//     return true;
// }

// function isAnagram(arr1, arr2){
//     let str1 = arr1.join('').replace(/\s/g, '').toLowerCase();
//     let str2 = arr2.join('').replace(/\s/g, '').toLowerCase();
//     let s1 = str1.split('').sort().join('');
//     let s2 = str2.split('').sort().join('');
//     return s1 === s2;
// }

// function isAnagram(arr1, arr2){
//
//     let s1 = arr1.join('').replace(/\s/g, '').toLowerCase();
//     let s2 = arr2.join('').replace(/\s/g, '').toLowerCase();
//
//     if(s1.length !== s2.length){
//         return false;
//     }
//     let char1 = {};
//     let char2 = {};
//     for(let i of s1){
//         char1[i] = (char1[i] || 0) + 1;
//     }
//     for(let i of s2){
//         char2[i] = (char2[i] || 0) + 1;
//     }
//     for(let i in char1){
//         if(char1[i] !== char2[i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isAnagram(str1, str2){
//     function createCharMap(str){
//         let charMap = {};
//         for(let i of str){
//             i = i.toLowerCase();
//             if(i !== ' '){
//                 charMap[i] = true;
//             }
//         }
//         return charMap;
//     }
//     str1 = str1.trim();
//     str2 = str2.trim();
//
//     if(str1.length !== str2.length){
//         return false;
//     }
//
//     let charMap1 = createCharMap(str1);
//     let charMap2 = createCharMap(str2);
//
//     for(let i in charMap1){
//         if(!charMap2[i]){
//             return false;
//         }
//     }
//     return [true, charMap1];
// }

// function isAnagram(obj){
//     let str1 = obj.str1.toLowerCase().replace(/\s/g, '');
//     let str2 = obj.str2.toLowerCase().replace(/\s/g, '');
//
//     let obj1 = {};
//     let obj2 = {};
//
//     for(let i of str1){
//         obj1[i] = (obj1[i] || 0) + 1;
//     }
//     for(let i of str2){
//         obj2[i] = (obj2[i] || 0) + 1;
//     }
//     let keys1 = Object.keys(obj1);
//     let keys2 = Object.keys(obj2);
//     if(keys1.length !== keys2.length){
//         return {
//             str1: obj.str1, str2: obj.str2, result: false
//         };
//     }
//     for(let i of keys1){
//         if(obj1[i] !== obj2[i]){
//             return {
//                 str1: obj.str1, str2: obj.str2, result: false
//             };
//         }
//     }
//     return {
//         str1: obj.str1, str2: obj.str2, result: true
//     };
// }

// function numberOfOccurrences(str, symbol){
//     let sum = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == symbol){
//             sum++
//         }
//     }
//     return sum;
// }

// function firstAndLastElement(str){
//     if(str.length == 0){
//         return 'String is empty';
//     }
//     let countOfFirst = 0;
//     let countOfLast = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == str[0]){
//             countOfFirst++
//         }
//         if(str[i] == str[str.length -1]){
//             countOfLast++
//         }
//     }
//     return `Count of first element: ${countOfFirst}, count of last element: ${countOfLast}`
// }

// function lowerAndUpperCase(str, symbol){
//     let countLowerCase = 0;
//     let countUpperCase = 0;
//
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == symbol.toLowerCase()){
//             countLowerCase++
//         }
//         if(str[i] == symbol.toUpperCase()){
//             countUpperCase++
//         }
//     }
//     return `Number of lowercase is ${countLowerCase} and uppercase is ${countUpperCase}`
// }

// function add(a, b) {
//     let res = '', c = 0;
//     a = a.split('');
//     b = b.split('');
//     while(a.length || b.length || c){
//         c += ~~a.pop() + ~~b.pop()
//         res = c % 10 + res
//         c = c > 9
//     }
//     return res;
// }

// function fizzbuzz(n){
//     return Array.apply(null, new Array(n)).map(function(e, i){
//         return (++i % 3 ? '' : 'Fizz') + (i % 5 ? '' : 'Buzz') || i;
//     });
// }

// function numberOfOccurrencesBothEl(str, el1, el2){
//     str = str.toLowerCase();
//     el1 = el1.toLowerCase();
//     el2 = el2.toLowerCase();
//     let first = 0;
//     let second = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === el1){
//             first++
//         }
//         if(str[i] === el2){
//             second++
//         }
//     }
//     return `First element: ${first}, second element: ${second}`
// }

// function indexOfOccurrences(str, symbol){
//     if(str.length == 0 || symbol.length == 0){
//         return '';
//     }
//     let arr = [];
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == symbol){
//             arr.push(i);
//         }
//     }
//     return arr.join(' ');
// }

// function stringOfOccurrences(str, el){
//     if(str.length == el.length){
//         return 'There is no such element in the string'
//     }
//     let sum = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == el){
//             sum++
//         }
//     }
//     if(sum > 0){
//         return `The element "${el}" occurs in the string ${sum} time${sum > 1 ? 's' : ''}`
//     }else{
//         return 'There is no such element in the string'
//     }
// }

// function occurrencesInObject(str){
//     let obj = {
//         one: 0,
//         two: 0,
//         three: 0
//     }
//     for(let i of str){
//         if(i == '1'){
//             obj.one++
//         }
//         else if(i == '2'){
//             obj.two++
//         }
//         else if(i == '3'){
//             obj.three++
//         }
//     }
//     return obj;
// }

// function stairsIn20(s){
//     return s
//         .reduce((arr, day) => arr.concat(...day), [])
//         .reduce((total, stairs) => total + stairs, 0) * 20
// }

// function partsSums(ls) {
//     let array = [0];
//     ls.reverse().forEach(v => array.push(array[array.length -1] + v));
//     return array.reverse();
// }

// function replaceElWithIndex(str, symbol){
//     if(str.length == 0){
//         return '';
//     }
//     let newStr = '';
//     for(let i = 0; i < str.length; i++){
//         let a = str[i].toLowerCase();
//         let b = symbol.toLowerCase();
//         if(a !== b){
//             newStr += str[i]
//         } else{
//             newStr += i
//         }
//     }
//     return newStr;
// }

// function wordValue(a) {
//     return a.map(v => v.replace(/\ /gi, '').split('').map(v => v.charCodeAt(0) - 96)
//         .reduce((a, b) => a + b, 0)).map((v, i) => v * (i + 1));
// }

// Math.round = function(number) {
//     return (number - parseInt(number) >= 0.5) ? parseInt(number) + 1 : parseInt(number);
// };
// Math.ceil = function(number) {
//     return (parseInt(number) === number) ? number : parseInt(number) + 1;
// };
// Math.floor = function(number) {
//     return parseInt(number)
// };

// function divideByEl(string, el){
//     let arr = [];
//     let chunk = '';
//     for(let i = 0; i < string.length; i++){
//         if(string[i] === el){
//             chunk += el;
//             arr.push(chunk);
//             chunk = '';
//         } else {
//             chunk += string[i];
//         }
//     }
//     if(chunk.length !== 0) {
//         arr.push(chunk);
//     }
//     return arr;
// }

// function duplicateCount(text){
//     return (text.toLowerCase().split('').sort().join('').match(/([^])\1+/g) || []).length;
// }

// function seaSick(x) {
//     let count = 0;
//     for (let i = 0; i < x.length - 1; i++) {
//         if (x[i] !== x[i + 1]) {
//             count++;
//         }
//     }
//     if (count / x.length > 0.2) {
//         return "Throw Up";
//     }
//     return "No Problem";
// }

// function stringAndElIndexes(str, el){
//     let arr = [], newString = '';
//     for (let i = 0; i < str.length; i++){
//         if(str[i] === el){
//             arr.push(i);
//         } else {
//             newString += str[i];
//         }
//     }
//     if(newString.length !==0) {
//         arr.unshift(newString);
//     }
//     return arr;
// }

// function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
//     return enteredCode === correctCode && Date.parse(expirationDate) >= Date.parse(currentDate)
// }

// function gap(g, m, n) {
//     let last = 0;
//     let prime = function(x){
//         for(let i = 2; i * i <= x; i++){
//             if(x % i == 0)
//                 return false; }
//         return true;
//     }
//     for(let i = m; i <= n; i++)
//         if(prime(i)){
//             if(i - last == g) return [last, i];
//             else last = i;
//         }
//     return null
// }

// function sqInRect(lng, wdth){
//     let arr = [];
//     if(lng === wdth) return null
//     while(lng > 0 && wdth > 0){
//         arr.push(lng > wdth ? wdth : lng)
//         lng > wdth ? lng -= wdth : wdth -= lng
//     }
//     return arr;
// }

// Array.prototype.square = function(){
//     return this.map(v => v * v)
// }
// Array.prototype.cube = function(){
//     return this.map(v => v * v * v)
// }
// Array.prototype.average = function(){
//     return this.reduce((a, b) => a + b, 0) / this.length;
// }
// Array.prototype.sum = function(){
//     return this.reduce((a, b) => a + b, 0)
// }
// Array.prototype.even = function(){
//     return this.filter(v => v % 2 == 0)
// }
// Array.prototype.odd = function(){
//     return this.filter(v => v % 2 !== 0)
// }

// function Sleigh() {
// }
//
// Sleigh.prototype.authenticate = function(name, password) {
//     return name === 'Santa Claus' && password === 'Ho Ho Ho!'
// };

// String.prototype.reverse = function (){
//     return this.split('').reverse().join('');
// }

// Array.prototype.even = function(){
//     return this.filter(a => Number.isInteger(a) && a % 2 == 0);
// }
// Array.prototype.odd = function(){
//     return this.filter(a => Number.isInteger(a) && a % 2 !== 0);
// }
// Array.prototype.under = function(x){
//     return this.filter(a => Number.isInteger(a) && a < x);
// }
// Array.prototype.over = function(x){
//     return this.filter(a => Number.isInteger(a) && a > x)
// }
// Array.prototype.inRange = function(min,max){
//     return this.filter(a => Number.isInteger(a) && a >= min && a <= max)
// }

// String.prototype.capitalize = function(){
//     if(this.length == 0){
//         return '';
//     }
//     let first = this.charCodeAt(0)
//     if(97 <= first && first <= 122){
//         first -= 32;
//     }
//     return String.fromCharCode(first) + this.slice(1)
// }

// Boolean.prototype.toString = Number.prototype.toString = Array.prototype.toString =
//     function() {
//         return JSON.stringify(this)
//     }

// function getSize(width, height, depth){
//     return [(depth * width + depth * height + width * height) * 2,
//         width * height * depth]
// }

// function countEachEl(str){
//     let obj = {};
//     for(let i of str){
//         obj[i] = (obj[i] || 0) + 1;
//     }
//     return obj;
// }

// function countElFromStartToMiddle(str){
//     let obj = {};
//     let mid = Math.ceil(str.length / 2)
//     for(let i = 0; i < mid; i++){
//         let first = str[i];
//         obj[first] = (obj[first] || 0) + 1
//     }
//     return obj;
// }

// function countElFrom4Ind(str){
//     if(str.length < 5) return 'The string is not long enough';
//     const obj = {};
//     for (let i = 4; i < str.length; i++) {
//         if (obj[str[i]]) obj[str[i]]++
//         else obj[str[i]] = 1;
//     }
//     return obj;
// }

// function countElFromEndToMiddle(str){
//     let middle = Math.floor(str.length / 2);
//     const obj = {};
//     for (let i = str.length -1; i > middle; i--) {
//         if (obj[str[i]]) obj[str[i]]++
//         else obj[str[i]] = 1;
//     }
//     return obj;
// }

// function objectKeys(str){
//     let obj = {};
//     [...str].forEach((el) => {
//         obj[el] = true;
//     });
//     return Object.keys(obj);
// }

// function countFirstAndSecondEl(str){
//     str = str.toLowerCase();
//     if(str.length == 0){
//         return 'Empty string'
//     }
//     let first = str[0];
//     let second = str[1];
//     if(first == second){
//         return 'The first and second symbols are the same'
//     }
//     let countF = str.split(first).length - 1
//     let countS = str.split(second).length - 1
//     return `${first} - ${countF}, ${second} - ${countS}`
// }

// function validateBattlefield(field) {
//     var hit = (row, col) => (row < 0 || col < 0 || row > 9 || col > 9) ? 0 : field[row][col];
//     for(var ships = [10, 0, 0, 0, 0], row = 0; row < 10; row++){
//         for(let col = 0; col < 10; col++){
//             if(hit(row, col)){
//                 if(hit(row -1, col -1) || hit(row - 1, col + 1)){
//                     return false;
//                 }
//                 if(hit(row -1, col) && hit(row, col - 1)){
//                     return false;
//                 }
//                 if((field[row][col] += hit(row -1, col) + hit(row, col -1)) > 4){
//                     return false;
//                 }
//                 ships[field[row][col]]++
//                 ships[field[row][col] -1]--
//             }
//         }
//     }
//     return [0, 4, 3, 2, 1].every((s, i) => s == ships[i])
// }

// function add(a, b){
//     return a + b;
// }
// function divide(a, b){
//     return a / b
// }
// function multiply(a, b){
//     return a * b
// }
// function mod(a, b){
//     return a % b;
// }
// function exponent(a, b){
//     return a ** b;
// }
// function subt(a, b){
//     return a - b
// }

// function capitalize(s){
//     let str1 = '';
//     let str2 = '';
//     for(let i = 0; i < s.length; i ++){
//         if((i + 2) % 2 == 0){
//             str1 += s[i].toUpperCase();
//             str2 += s[i].toLowerCase()
//         }else {
//             str1 += s[i].toLowerCase();
//             str2 += s[i].toUpperCase();
//         }
//     }
//     return [str1, str2]
// };

// function reverseWords(str) {
//     let res = str.split(' ');
//     let str1 = '';
//     for(let i of res){
//         str1 += i.split('').reverse().join('') + ' ';
//     }
//     return str1.trim();
// }

// function ipsBetween(start, end){
//     let ip1 = start.split('.');
//     let ip2 = end.split('.');
//     let res = 0;
//     for(let i = 0; i < 4; i++){
//         res += (ip2[i] - ip1[i]) * 256 ** (3 - i);
//     }
//     return res;
// }

// var findMissing = function (list) {
//     let length = list.length;
//     let one = list[0];
//     let last = list[list.length -1];
//     let d = Math.floor((one - last) / (0 - length));
//     for(let i = 1; i < list.length; i++){
//         if(list[i] != d + list[i -1]){
//             return d + list[i -1]
//         }
//     }
// }

// function nextId(ids){
//     for(let i = 0; i < ids.length; i++){
//         if(ids.indexOf(i) == -1){
//             return i;
//         }
//     }
//     return ids.length;
// }

// function mxdiflg(a1, a2) {
//     let x = a1.length;
//     let y = a2.length;
//     let res = 0;
//     if(x == 0 || y == 0){
//         return -1
//     }
//     for(let i = 0; i < x; i++){
//         for(let j = 0; j < y; j++){
//             let a = a1[i].length;
//             let b = a2[j].length;
//             if(res < a - b){
//                 res = a - b;
//             } else if(res < b - a){
//                 res = b - a
//             }
//         }
//     }
//     return res;
// }

// function vowelIndices(word){
//     if(word.length === 0){
//         return [];
//     }
//     let arr = [];
//     for(let i = 0; i < word.length; i++){
//         if(/[aeoiuy]/i.test(word[i])){
//             arr.push(i + 1)
//         }
//     }
//     return arr;
// }

// function reverseLetter(str) {
//     return str.split('').reverse().filter(el => /[a-zA-Z]/.test(el)).join('')
// }

// function multiTable(number) {
//     let res = '';
//     for(let i = 1; i<10; i++){
//         res +=`${i} * ${number} = ${i*number}\n`;
//     }
//     res += `${10} * ${number} = ${10*number}`
//     return res;
// }

// function minValue(values){
//     return +(values.filter((el, i) => values.indexOf(el) == i).sort().join(''));
// }

// const str = 'abc co ding ace';
// const obj = {};
// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]]) obj[str[i]]++
//         else obj[str[i]] = 1;
// }
// console.log(obj);

// let str = 'abc coding ace';
// let obj = {};
// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]]) obj[str[i]]
//     else obj[str[i]] = 1;
// }
// console.log(Object.keys(obj));

// let str = 'abc coding ace';
// let obj = {};
// for(let i = 0; i < str.length; i++){
//     if(obj[str[i]]) obj[str[i]]++
//     else obj[str[i]] = 1;
// }
// const arr = Object.entries(obj);
// let acc = '';
// for(let i = 0; i < arr.length; i++){
//     acc += arr[i][0] + ' = ' + arr[i][1] + ', '
// }
// console.log(acc);

// const str = 'HELLO programming WORLD!';
// const vowels = 'aeiouAEIOU';
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     if(vowels.includes(str[i])){
//         count++
//     }
// }
// console.log(count);

// const str = 'Let`s try to count the number of vowels in this sentence';
// const vowels = 'aeiouAEIOU';
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < vowels.length; j++){
//         if(str[i] === vowels[j]){
//             count++
//         }
//     }
// }
// console.log(count);

// const str = 'Let`s try to count the number of consonants in this sentence';
// const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
// let count = 0;
// for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < consonants.length; j++){
//         if(str[i] === consonants[j]){
//             count++
//         }
//     }
// }
// console.log(count);

// const str = '0Le1t`s f2ind 34 all5 6numbers 789';
// const numbers = '0123456789';
// const array = [];
// for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < numbers.length; j++){
//         if(str[i] === numbers[j]) array.push(str[i]);
//     }
// }
// console.log(array);

// const str = '789 Let`s 456 sort 0123';
// const consonants = 'bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ';
// const vowels = 'aeiouAEIOU';

// const arrOfConsonants = [];
// const arrOfVowels = [];
// const arrElse = [];
//
// for(let i = 0; i < str.length; i++){
//     if(consonants.includes(str[i])) arrOfConsonants.push(str[i]);
//     else if (vowels.includes(str[i])) arrOfVowels.push(str[i]);
//     else arrElse.push(str[i]);
// }
// console.log(arrOfConsonants);
// console.log(arrOfVowels);
// console.log(arrElse);

// function checkStr(str) {
//     let vowel = 0;
//     let consonant = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'e' || str[i] === 'u' || str[i] === 'i' || str[i] === 'o' || str[i] === 'a') {
//             vowel ++;
//         } else consonant ++;
//     }
//     return {
//         vowel: vowel, consonant: consonant
//     }
// }

// function countOnlyVowel(str) {
//     let vowel = 0
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'e' || str[i] === 'u' || str[i] === 'i' || str[i] === 'o' || str[i] === 'a') {
//             vowel++
//         }
//     }
//     return  `${str} includes ${vowel} vowels and ${str.length - vowel} consonants`;
// }

// function countVowels(str){
//     let vowels = /[aeiou]/gi;
//     let match = str.match(vowels);
//     return match ? match.length : 0;
// }

// function countLetters(str){
//     let vowels = /[aeuoi]/gi
//     let consonant = /[bcdfghjklmnpqrstvwxyz]/gi
//     let matchV = str.match(vowels);
//     let matchC = str.match(consonant);
//     let countV = matchV ? matchV.length : 0;
//     let countC = matchC ? matchC.length : 0;
//     return {
//         vowel: countV,
//         consonant: countC
//     }
// }

// function countOnlyConsonant(str){
//     let consonant = /[bcdfghjklmnpqrstvwxyz]/gi
//     let match = str.match(consonant);
//     return match ? match.length : 0;
// }

// function countLetters(str){
//     let vowelL = /[aeiou]/g;
//     let vowelU = /[AEIOU]/g;
//     let matchU = str.match(vowelU);
//     let matchL = str.match(vowelL);
//     let countVowelLowerCase = matchL ? matchL.length : 0;
//     let countVowelUpperCase = matchU ? matchU.length : 0;
//     let others = str.length - countVowelLowerCase - countVowelUpperCase;
//     return {
//         vowelLowerCase: countVowelLowerCase,
//         vowelUpperCase: countVowelUpperCase,
//         others: others
//     }
// }

// function whatWin(str1, str2){
//     let lowels = /[aeiou]/g;
//     let match1 = str1.match(lowels) || [];
//     let match2 = str2.match(lowels) || [];
//     if(match1.length > match2.length){
//         return 'First word wins!';
//     } else if(match1.length < match2.length) {
//         return 'Second word wins!'
//     } else {
//         return 'It\'s a draw!'
//     }
// }

// function whatWin(str1, str2){
//     let consonant = /[bcdfghjklmnpqrstvwxyz]/gi;
//     let match1 = (str1.match(consonant) || []).length;
//     let match2 = (str2.match(consonant) || []).length;
//     if(match1 > match2){
//         return 'First word wins!';
//     } else if(match1 < match2) {
//         return 'Second word wins!'
//     } else {
//         return 'It\'s a draw!'
//     }
// }

// function wordSpec(str) {
//     const vowels = 'aeiou';
//     const length = str.length;
//     let vowel = "";
//     let consonant = "";
//     for (let i = 0; i < length; i++) {
//         if (vowels.includes(str[i])) {
//             vowel += str[i];
//         } else {
//             consonant += str[i];
//         }
//     }
//     return {
//         vowel,
//         consonant,
//         length
//     }
// }

// function specTheWord(str){
//     let vowel = /[aeiou]/gi;
//     let consonant = /[bcdfghjklmnpqrstvwxyz]/gi;
//     let vMatch = str.match(vowel) || [];
//     let cMatch = str.match(consonant) || [];
//     return {
//         vowel: vMatch.join(''),
//         vowelCount: vMatch.length,
//         consonant: cMatch.join(''),
//         consonantCount: cMatch.length
//     }
// }

// function numOfLowerCase(str){
//     let res = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toLowerCase()){
//             res++;
//         }
//     }
//     return res;
// }

// function numOfUpperCase(str){
//     let res = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toUpperCase()){
//             res++
//         }
//     }
//     return res;
// }

// function strOfLowerAndUpperCase(str){
//     if(str.length === 0){
//         return 'string is empty';
//     }
//     let first = '';
//     let rest = '';
//     for(let i of str){
//         if(i === i.toUpperCase()){
//             first += i;
//         } else {
//             rest += i
//         }
//     }
//     if(first === ''){
//         return rest;
//     }else if(rest === ''){
//         return first;
//     }else{
//         return `${rest} ${first}`
//     }
// }

// function numOfLowerCase(str){
//     if(str.length === 0) return 'String is empty';
//     let count = 0;
//     for (let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toLowerCase() && str[i] === str[i].toUpperCase()) {
//             continue;
//         }
//         if(str[i] === str[i].toLowerCase()){
//             count++;
//         }
//     }
//     return `Lowercase: ${count} and other symbols: ${str.length - count}`;
// }

// function numOfLettersAndOther(str){
//     if(str.length === 0) return 'String is empty'
//     let count = 0;
//     let symbols = 0;
//     for(let i = 0; i < str.length; i++){
//         if(/[a-zA-Z]/.test(str[i])){
//             count++
//         } else{
//             symbols++
//         }
//     }
//     return `Letters: ${count}, other symbols: ${symbols}`
// }

// function caseSeparation(str){
//     let lowerCase = '';
//     let upperCase = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str[i].toLowerCase() && lowerCase.indexOf(str[i]) === -1) {
//             lowerCase += str[i];
//         }
//         if(str[i] === str[i].toUpperCase() && upperCase.indexOf(str[i]) === -1) {
//             upperCase += str[i];
//         }
//     }
//     return [lowerCase, upperCase];
// }

// function twoStringsBattle(str1, str2){
//     let countStr1 = 0;
//     let countStr2 = 0;
//     for(let i = 0 ; i < str1.length; i++){
//         if(str1[i] === str1[i].toUpperCase()){
//             countStr1++
//         }
//     }
//     for(let j = 0; j < str2.length; j++){
//         if(str2[j] === str2[j].toUpperCase()){
//             countStr2++
//         }
//     }
//     if(countStr1 > countStr2){
//         return `${str1} has won with number of ${countStr1}`
//     } else if(countStr1 < countStr2){
//         return `${str2} has won with number of ${countStr2}`
//     } else {
//         return 'Draw'
//     }
// }

// function stringAndCommand(str, command){
//     if(str.length === 0) return 'String is empty';
//     let count = 0;
//     if(command === 'countUpperCase'){
//         for(let i = 0; i < str.length; i++){
//             if(str[i] === str[i].toUpperCase()){
//                 count++
//             }
//         }
//     }
//     else if(command === 'countLowerCase'){
//         for(let i = 0; i < str.length; i++){
//             if(str[i] === str[i].toLowerCase()){
//                 count++
//             }
//         }
//     }
//     return `Command: ${command}, result: ${count}`
// }

// function lettersAndSymbols(str){
//     let string = '';
//     let symbols = '';
//     for(let i = 0 ; i < str.length; i++){
//         if(/[a-zA-Z]/.test(str[i])){
//             string += str[i];
//         } else {
//             symbols += str[i];
//         }
//     }
//     return [string, symbols]
// }

// const str = 'Hello Coding JS!'
// let upper = 0, lower = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i].toUpperCase() === str[i]) upper++
//     else lower++
// }
// console.log(upper, lower)

// const str = 'Hello !';
// let upper = 0, lower = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) upper++
//     else lower++
// }
// console.log(upper, lower);

// const str = 'Hello JS !';
// let upper = 0, lower = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i].toUpperCase() === str[i] && str[i].toLowerCase() !== str[i]) upper++
//         if(str[i].toUpperCase() !== str[i]) lower++
// }
// console.log(upper, lower);

// const str = 'Hello JS !';
// let upper = 0, lower = 0
// for(let i = 0; i < str.length; i++){
//     if(str[i].toLowerCase() !== str[i]) upper++
//     if(str[i].toUpperCase() !== str[i]) lower++
// }
// console.log(upper, lower);

// function numOfLowerAndUpperCase(str){
//     let upper = 0, lower = 0;
//     for(let i of str){
//         if(i >= 'a' && i <= 'z') lower++
//         else if(i >= 'A' && i <= 'Z') upper++
//     }
//     return [lower, upper];
// }

// function countDigit(str, str2){
//     let count = 0;
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === str2)
//             count++
//     }
//     return count;
// }

// function countDigits(str){
//     let count = 0;
//     for(let i of str){
//         if(i !== ' ' && !isNaN(i)) count++
//     }
//     return count;
// }

// function countDigitInNumber(number, digit) {
//     let newNum = number.toString();
//     let newDig = String(digit);
//     let count = 0;
//     for(let i = 0; i < newNum.length; i++){
//         if(newNum[i] === newDig) count++
//     }
//     return `In number ${number} digit ${digit} occurs ${count} times`
// }

// function digitsToArray(str){
//     let digits = '0123456789';
//     let arr = [];
//     for(let i = 0; i < str.length; i++){
//         if(digits.indexOf(str[i]) !== -1){
//             arr.push(Number(str[i]));
//         }
//     }
//     return arr;
// }

// function numbersToArray(str) {
//     const digits = '0123456789';
//     let numbers = [];
//     let number = '';
//
//     for (let i = 0; i < str.length; i++) {
//         if (digits.includes(str[i])) {  // если символ является цифрой
//             number += str[i];             // добавляем его в текущее число-аккумулятор
//         } else if (number.length > 0) { // если символ не является цифрой и текущее число-аккумулятор не пустое
//             numbers.push(+number);        // добавляем текущее число-аккумулятор в массив чисел
//             number = '';                   // сбрасываем значение текущего числа-аккумулятора
//         }
//     }
//
//     if (number.length > 0) {    // если строка закончилась числом, то нужно добавить в массив последнее число-аккумулятор
//         numbers.push(+number);    // добавляем его в массив чисел
//     }
//
//     return numbers;
// }

// function countEven(str){
//     let count = 0;
//     let acc = '';
//     for(let i = 0; i < str.length; i++){
//         let char = str[i];
//         if(char >= '0' && char <= '9'){
//             acc += char;
//         } else if(acc.trim() !== ''){
//             if(Number(acc) % 2 === 0){
//                 count++
//             }
//             acc = '';
//         }
//     }
//     if(acc.trim() !== ''){
//         if(+acc % 2 === 0){
//             count++
//         }
//     }
//     return count;
// }

// function calculator(op, num1, num2) {
//     switch(op){
//         case '+':
//             return num1 + num2;
//         case '-':
//             return num1 - num2;
//         case '/':
//             return num1 / num2;
//         case '*':
//             return num1 * num2;
//         default:
//             return NaN;
//     }
// }
// function calculateExpression(str) {
//     let num1 = '';
//     let num2 = '';
//     let op;
//     let opIndex;
//     for(let i = 0; i < str.length; i++){
//         if(isOperator(str[i])){
//             op = str[i];
//             opIndex = i;
//             break;
//         }
//         num1 += str[i];
//     }
//     for(let i = opIndex + 1; i < str.length; i++){
//         num2 += str[i];
//     }
//     num1 = parseFloat(num1);
//     num2 = parseFloat(num2);
//     return calculator(op, num1, num2)
// }
// function isOperator(char){
//     let operators = '+-*/';
//     return operators.includes(char);
// }

// function firstDigitCount(str) {
//     let count = 0;
//     let firstDigit = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] >= '0' && str[i] <= '9' && firstDigit === '') {
//             firstDigit = str[i];
//         }
//         if (str[i] === firstDigit) {
//             count++;
//         }
//     }
//     return count;
// }

// function digitsCount(str){
//     let result = [0,0,0,0,0,0,0,0,0,0];
//     for(let i = 0; i < str.length; i++){
//         if(/\d/.test(str[i])){
//             result[Number(str[i])]++
//         }
//     }
//     return result;
// }

// function getNumbersInfo(str){
//     str = str.trim();
//     if(str === ''){
//         return 'String is empty';
//     }
//     let negatives = 0,
//         positives = 0,
//         zeros = 0,
//         odds = 0,
//         evens = 0
//     let newStr = str.split(' ').map(Number);
//     for(let i of newStr){
//         if(i < 0){
//             negatives++
//         }
//         else if(i > 0) positives++
//         else if(i === 0) zeros++
//         if(i % 2 === 0) evens++
//         else odds++
//     }
//     return {
//         negatives,
//         positives,
//         zeros,
//         odds,
//         evens
//     }
// }

// const str = 'Find numbers 123 in string 456';
// const numbers = '0123456789';
// const arrOfNumbers = [];
// for(let i = 0; i < str.length; i++){
//     for(let j = 0; j < numbers.length; j++){
//         if(str[i] === numbers[j]) arrOfNumbers.push(str[i]);
//     }
// }
// console.log(arrOfNumbers);

// const str = 'a0 b9 c8 d7 e6 f5';
// const numbers = '0123456789';
// const arrOfNumbers = [];
// for(let i = 0; i < str.length; i++){
//     if(numbers.includes(str[i])) arrOfNumbers.push(str[i]);
// }
// console.log(arrOfNumbers);

// const str = '5He88llo 009-87-65 world3!4';
// const numbers = '0123456789';
// const arr = [];
// let acc = '';
// for(let i = 0; i < str.length; i++){
// if(numbers.includes(str[i])) acc += str[i];
// else if(acc !== ''){
//     arr.push(+acc);
//     acc = '';
// }
// if(i === str.length -1 && acc !== '') arr.push(+acc);
// }
// console.log(arr);

// const str = '5Hi 1-2-3 world7?10';
// const numbers = '0123456789';
// const arr = [];
// let acc = '';
// for(let i = 0; i < str.length; i++){
//     if(numbers.includes(str[i]) && i === str.length -1) {
//         acc += str[i];
//         arr.push(acc);
//     } else if(numbers.includes(str[i])){
//         acc += str[i];
//     } else if (acc !== ''){
//         arr.push(acc);
//         acc = '';
//     }
// }
// console.log(arr);

// function countWords(str){
//     let count = 1;
//     let str1 = str.trim();
//     if(str1 === '') return 0;
//     for (let i = 0; i < str1.length; i++){
//         if(str1[i] === ' ' && str1[i+1] !== ' ')count++;
//     }
//     return count;
// }

// function countSigns(str, sign){
//     let count = 0;
//     for(let i of str){
//         if(i === sign) count++
//     }
//     return count;
// }

// function numberOfSpaces(str){
//     let count = 0;
//     for(let i of str){
//         if(i === ' ') count++
//     }
//     return count;
// }

// function insideBrackets(str){
//     let firstBracket = str.indexOf('(');
//     let secondBracket = str.indexOf(')', firstBracket);
//     if(firstBracket === -1 || secondBracket === -1){
//         return -1;
//     }
//     let count = 0;
//     for(let i = firstBracket +1; i < secondBracket; i++){
//         if(/[a-zA-Z0-9]/.test(str[i])){
//             while(/[a-zA-Z0-9]/.test(str[i]) && i < secondBracket){
//                 i++
//             }
//             count++
//         }
//     }
//     return count;
// }

// function outsideBrackets(str){
//     let firstBracket = str.indexOf('(');
//     let secondBracket = str.indexOf(')', firstBracket);
//     let count = 0;
//     for(let i = 0; i < firstBracket; i++){
//         if(str[i] === ' ') count ++
//     }
//     for(let j = secondBracket + 1; j < str.length; j++){
//         if(str[j] === ' ') count++
//     }
//     return count;
// }

// function countWords (str){
//     let newStr = str.trim();
//     let count = 0;
//     let flag = false;
//     if(newStr === ' '){
//         return 0;
//     }
//     for(let i = 0; i < newStr.length; i++){
//         if(str[i] === ' '){
//             if(flag) {
//                 count++
//                 flag = false;
//             }
//         }
//         else {
//             flag = true;
//         }
//     }
//     if(flag) count++
//     return count;
// }

// function findBugs(str){
//     let str1 = str.toLowerCase();
//     let bug = 'bug';
//     let count = 0;
//     let index = 0;
//     while(index < str1.length){
//         let bugIndex = str1.indexOf(bug, index);
//         if(bugIndex === -1){
//             break
//         }
//         count++
//         index = bugIndex + bug.length;
//     }
//     return count;
// }

// function countWordsNotNumbers(str){
//     let str1 = str.split(' ');
//     let str2 = str1.filter((el) => isNaN(el));
//     return str2.length;
// }

// function theLongestWord(arr){
//     if(arr.length === 0) return 'No words found'
//     let longestWord = arr[0];
//     for(let i = 1; i < arr.length; i++){
//         let curr = arr[i];
//         if(longestWord.length < curr.length){
//             longestWord = curr;
//         }
//     }
//     return `The longest word has ${longestWord.length} length`
// }

// function objectCount(arr){
//     let obj = {};
//     if(arr.length === 0) return 'No words - no object'
//     for(let i = 0; i < arr.length; i++){
//         if(obj.hasOwnProperty(arr[i])) obj[arr[i]]++
//         else obj[arr[i]] = 1;
//     }
//     return obj;
// }

// function sayHello( name, city, state ) {
//     return `Hello, ${name.join(' ')}! Welcome to ${city}, ${state}!`
// }

// function deleteSpace(str){
//     let newStr = str.split(' ').join('').trim()
//     return newStr;
// }

// function doubleElement(arr){
//     if(arr.length === 0) return 'No array - no work';
//     for(let i = 0; i < arr.length; i++){
//         if(arr.indexOf(arr[i], i + 1) !== -1)
//             return true;
//     }
//     return false;
// }

// function secondWord(str){
//     let arr = str.split(' ');
//     if(arr.length < 2){
//         return 'Second word was not found';
//     }
//     return arr[1];
// }

// function firstDuplicate(str){
//     let arr = str.split(' ');
//     if(arr.length < 2) return false;
//     for(let i = 1; i < arr.length; i++){
//         if(arr[0] === arr[i]) return true;
//     }
//     return false;
// }

// function findDuplicate(str){
//     let arr = str.split(' ');
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== ' ') {
//             if(obj[arr[i]]){
//                 return true;
//             }
//             obj[arr[i]] = 1;
//         }
//     }
//     return false;
// }

// function lastDuplicate(str){
//     let str1 = str.split(' ');
//     if(str1.length < 2) return false;
//     let lastWord = str1[str1.length - 1];
//     for(let i = 0; i < str1.length -1; i++){
//         if(str1[i] === lastWord) return true;
//     }
//     return false;
// }

// function removeDuplicates(str){
//     let result = '';
//     let many = new Set();
//     for(let i = 0; i < str.length; i++){
//         let char = str[i];
//         if(!many.has(char) || char === ' '){
//             result += char;
//             many.add(char);
//         }
//     }
//     while(result.endsWith(' ')) {
//         result = result.slice(0, -1)
//     }
//     return result;
// }

// function copyDuplicate(str) {
//     let arr = [];
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ' && str.indexOf(str[i]) < i) {
//             if(arr.indexOf(str[i]) === -1){
//                 arr.push(str[i]);
//             }
//         }
//     }
//     return arr;
// }


// function copyDuplicate(str){
//     let obj = {};
//     let str1 = str.split(' ');
//     str1.forEach(el => {
//         for(let i = 0; i < el.length; i++){
//             let letter = el[i];
//             if(obj.hasOwnProperty(letter)) obj[letter]++
//             else obj[letter] = 1;
//         }
//     })
//     let objRes = {};
//     for(let i in obj){
//         if(obj[i] > 1) objRes[i] = obj[i] -1;
//     }
//     return objRes;
// }

// function moveDuplicates(str){
//     let str1 = str.toLowerCase().trim();
//     if(str1 === '') return 'string is empty'
//     let unique = '';
//     let duplicate = '';
//     for(let i = 0; i < str1.length; i++){
//         if(unique.includes(str1[i])) duplicate += str1[i];
//         else unique += str1[i];
//     }
//     return [unique, duplicate]
// }

// const arr = ['102', '120', '201'];
// let res = '';
// const symbols = {};
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if (!symbols[arr[i][j]]) {
//             symbols[arr[i][j]] = 1;
//             res += arr[i][j];
//         }
//     }
// }
// console.log(res)

// const arr = ['-75', '-59', '-975'];
// let res = '';
// const symbols = {};
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if (!symbols[arr[i][j]]) {
//             symbols[arr[i][j]] = 1;
//             res += arr[i][j];
//         }
//     }
// }
// console.log(res)

// const arr = ['1', '31', '173'];
// let res = '';
// const symbols = {};
// for(let i = 0; i < arr.length; i++){
//     for(let j = 0; j < arr[i].length; j++){
//         if (!symbols[arr[i][j]]) {
//             symbols[arr[i][j]] = 1;
//             console.log(res += arr[i][j]);
//         }
//     }
// }

// function deleteDuplicate(str){
//     let arr = str.split(' ');
//     let many = new Set(arr);
//     let result = Array.from(many).join(' ');
//     return result;
// }
//
// console.log(deleteDuplicate('Many and Many'));

// function findTheSameWord(str) {
//     let obj = {};
//     let result = '';
//     let word = '';
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') word += str[i]
//         if (str[i] === ' ' || i === str.length - 1) {
//             if (word && !obj.hasOwnProperty(word)) {
//                 obj[word] = 1;
//                 result += (result ? '-' : '') + word;
//             }
//             word = '';
//         }
//     }
//     return result
//}

// function returnDuplicates(str){
//     let arr = str.split(' ');
//     let unique = new Set(arr);
//     let duplicates = [];
//     unique.forEach(el => {
//         let count = arr.filter(e => e === el).length;
//         if(count > 1) duplicates.push(el)
//     })
//     return duplicates.join(' ');
// }

// function findAndDelete(str){
//     let arr = str.toLowerCase().split(' ');
//     let unique = [];
//     let words = new Set();
//     for(let i of arr){
//         if(!words.has(i)) {
//             words.add(i)
//             unique.push(i);
//         }
//     }
//     return unique.join(' ');
// }

// function checkDuplicates(str){
//     let arr = str.split(' ');
//     let unique = new Set();
//     for(let i of arr){
//         unique.add(i);
//     }
//     return [...unique].join(' ');
// }

// function howManyDuplicates(str) {
//     let count = 0;
//     let word = '';
//     let obj = {};
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] !== ' ') word += str[i];
//
//         if (str[i] === ' ' || i === str.length - 1) {
//             if (word && !obj[word]) {
//                 obj[word] = 1;
//             } else if (word && obj[word] === 1) {
//                 count++;
//             }
//             word = '';
//         }
//     }
//     return count
// }

// function countDuplicates(str){
//     let arr = str.toLowerCase().split(' ');
//     let obj = {};
//     let duplicate = 0;
//     for(let i of arr){
//         if(obj[i]){
//             obj[i]++
//         } else{
//             obj[i] = 1;
//         }if(obj[i] > 1){
//             duplicate++
//         }
//     }
//     return duplicate;
// }

// function deleteDuplicates(str){
//     let arr = [];
//     str.split(' ').forEach(el => {
//         let clean = el.replace(/[!?.,;:]/g, '').toLowerCase();
//         if(!arr.includes(clean)){
//             arr.push(clean);
//         }
//     })
//     return arr.join(' ');
// }

// function noDuplicate(str){
//     let arr = str.trim().split(' ');
//     let unique = {};
//     let result = [];
//     for(let i of arr){
//         if(!unique[i]){
//             unique[i] = true;
//             result.push(i);
//         }
//     }
//     if(result.length > 1) return result.join('***');
//     else return result.join(' ');
// }

// function findDuplicates(str){
//     let arr = str.split(/[\s-]+/);
//     let many = new Set();
//     let words = arr.filter(el => {
//         if(!many.has(el)){
//             many.add(el)
//             return true;
//         }
//         return false;
//     })
//     return words.join(' ');
// }

// const str = 'JavaScript is the best programming language';
// const arr = str.split(' ');
// console.log(arr);

// const str = "     Let's practice JavaScript!   ";
// const arr = [];
// let acc = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== ' ') acc += str[i];
//     if((str[i] === ' ' || i === str.length -1) && acc !== ''){
//     arr.push(acc);
//     acc = '';
//     }
// }
// console.log(arr);

// const str = '   Hey, Alice! How was your vacation?   ';
// const arr = [];
// let acc = '';
// const symbols = '.,!?;:'
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== ' ' && !symbols.includes(str[i])) acc += str[i]
//     if((str[i] === ' ' || i === str.length -1) && acc !== ''){
//         arr.push(acc);
//         acc = ''
//     }
// }
// console.log(arr);

// const str = 'abc alert beep';
// let res = '';
// const symbols = {};
// for(let i = 0; i < str.length; i++){
//     if(!symbols[str[i]]){
//         symbols[str[i]] = 1
//         res += str[i];
//     }
// }
// console.log(res);

// const str = 'abc alert beep';
// let res = '';
// const symbols = {};
// for(let i = 0; i < str.length; i++){
//     if(!symbols[str[i]]) {
//         symbols[str[i]] = 1;
//         res += str[i];
//     }
// }
// console.log(symbols);

// const str = 'Hello ! World Hello !';
//
// const words = {}
// let res = '';
// let acc = '';
//
// for (let i = 0; i < str.length; i++){
//     if(str[i] !== ' ') acc += str[i]
//
//     if(str[i] === ' ' || i === str.length-1){
//         if(acc && !words[acc]) {
//             words[acc] = 1;
//             res += acc + ' ';
//         }
//         acc = '';
//     }
// }
//
// console.log(res)

// const str = '!! JS World JS !!';
// const words = {}
// let res = '';
// let acc = '';
// for (let i = 0; i < str.length; i++){
//     if(str[i] !== ' ') acc += str[i]
//
//     if(str[i] === ' ' || i === str.length-1){
//         if(acc && !words[acc]) {
//             words[acc] = 1;
//             res += acc + ' ';
//         }
//         acc = '';
//     }
// }
// console.log(res === '!! JS World')

// const str = 'programming is easy is as 123 123';
// const words = {}
// let res = '';
// let acc = '';
// for (let i = 0; i < str.length; i++){
//     if(str[i] !== ' ') acc += str[i]
//     if(str[i] === ' ' || i === str.length-1){
//         if(acc && !words[acc]) {
//             words[acc] = 1;
//             if(res) res += ' ' + acc;
//             else res += acc;
//         }
//         acc = '';
//     }
// }
// console.log(res);

// function findDuplicates(str){
//     let str1 = str.replace(/-/g, ' ').split(/\s+/);
//     let many = new Set(str1);
//     return Array.from(many).join(' ');
// }

// function replaceCommas(str){
//     let str1 = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === ',') str1 += ' '
//         else str1 += str[i];
//     }
//     return str1;
// }

// function fixNames(arr){
//     return arr.map(el => {
//         if(el === '') return ''
//         return el[0].toUpperCase() + el.substring(1).toLowerCase();
//     })
// }

// function replaceDigits(str, symbol){
//     return str.replace(/\d/g, symbol);
// }

// function replacePunctuation(str){
//     let str1 = ''
//     for(let i = 0; i < str.length; i++){
//         if(str[i] === '!' || str[i] === '?') str1 += '.'
//         else str1 += str[i]
//     }
//     return str1;
// }

// function formatSentence(sentence) {
//     if (sentence === '') return '';
//     let firstLetter = sentence[0].toUpperCase();
//     let lastLetter = sentence[sentence.length - 1];
//     let newSentence = sentence;
//     if (firstLetter !== sentence[0]) {
//         newSentence = firstLetter;
//         for (let i = 1; i < sentence.length; i++) {
//             newSentence += sentence[i];
//         }
//     }
//     if (lastLetter !== '.' && lastLetter !== '!' && lastLetter !== '?' ) {
//         newSentence = newSentence + '.';
//     }
//     return newSentence;
// }

// function wordsCapitalize(str){
//     if(str.length === '') return '';
//     let res = '';
//     let cap = true;
//     for(let i = 0; i < str.length; i++){
//         let char = str.charAt(i);
//         if(cap && char !== ' '){
//             res += char.toUpperCase();
//             cap = false;
//         } else {
//             res += char.toLowerCase();
//             if(char === ' ') cap = true;
//         }
//     }
//     return res;
// }

// function wordsCapitalize(str){
//     if(str.length === '') return '';
//     let flag = true;
//     let res = ''
//     for(let i of str){
//         if(flag && i !== ' ') {
//             res += i.toUpperCase();
//             flag = false;
//         } else {
//             res += i
//         } if(i === ' '){
//             flag = true;
//         }
//     }
//     return res;
// }

// function replaceEverySecondSpace(str){
//     let str1 = str.trim();
//     let count = 0;
//     let res = '';
//     for(let i = 0; i < str1.length; i++){
//         if(str1[i] === ' ') {
//             count++
//             if(count % 2 === 0) {
//                 res += '_'
//                 continue;
//             }
//         }
//         res += str1[i];
//     }
//     return res;
// }

// const str = 'This is a sensational result.';
// let result = '';
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === '.') {
//         result += '!!!';
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// const str = 'I am 2 old 4 it.';
// let result = '';
// const map = {
//     2: 'too',
//     4: 'for',
//     '.': '!'
//  }
//  for (let i = 0; i < str.length; i++) {
//      if (map[str[i]]) {
//         result += map[str[i]];
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// const str = 'u r34lly c4n r34d th1s.';
// let result = '';
// const map = {
//     1: 'i',
//     'u': 'you',
//     3: 'e',
//     4: 'a',
//     '.': '!'
// }
// for (let i = 0; i < str.length; i++) {
//     if (map[str[i]]) {
//         result += map[str[i]];
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// const str = 'YOU BECOME WHAT YOU BELIEVE.';
// let result = '';
// const map = {
//     'I': 1,
//     'E': 3,
//     'A': 4,
//     'T': 7,
//     'B': 8,
//     '.': '!'
// }
// for (let i = 0; i < str.length; i++) {
//     if (map[str[i]]) {
//         result += map[str[i]];
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// function colorDecoder(str) {
//     if(str === '') return ''
//     const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//     let result = '';
//     let current = '';
//     for(let i = 0; i < str.length; i++){
//         if(!isNaN(parseInt(str[i]))){
//             current += str[i];
//         } else {
//             if(current !== ''){
//                 let index = parseInt(current) -1;
//                 if(index >= 0 && index < rainbow.length){
//                     result += rainbow[index];
//                 } else {
//                     result += current;
//                 }
//                 current = '';
//             }
//             result += str[i];
//         }
//     }
//     if(current !== ''){
//         let index = parseInt(current) -1;
//         if(index >= 0 && index < rainbow.length){
//             result += rainbow[index];
//         } else {
//             result += current;
//         }
//     }
//     return result;
// }
//
// function removeExtraSpaces(str) {
//     let result = '';
//     let prevChar = '';
//     for (let i = 0; i < str.length; i++) {
//         let char = str[i];
//         if (char === ' ' && prevChar === ' ') {
//             continue;
//         }
//         result += char;
//         prevChar = char;
//     }
//     return result;
// }
//
// function decodeAddress(address) {
//     let decodeTable = {
//         'St.': 'Street',
//         'Rd.': 'Road',
//         'Ln.': 'Lane',
//         'Dr.': 'Drive',
//         'Cir.': 'Circle',
//         'Ave.': 'Avenue',
//         'Pl.': 'Place',
//         'Sq.': 'Square',
//         'Pkwy.': 'Parkway',
//         'Ct.': 'Court',
//         'Hwy.': 'Highway',
//         'Plz.': 'Plaza',
//         'Blvd.': 'Boulevard',
//         'Bch.': 'Beach',
//         'Aly.': 'Alley'
//     }
//     let res = '';
//     let word = '';
//     for(let i of address){
//         if(i !== ' '){
//             word += i;
//         } else {
//             if(decodeTable[word + '']){
//                 res += decodeTable[word] + ' ';
//             } else {
//                 res += word + ' ';
//             }
//             word = '';
//         }
//     }
//     if(decodeTable[word + '']){
//         res += decodeTable[word];
//     } else {
//         res += word;
//     }
//     return res;
// }
//

// function switchWords(str){
//     let index = str.indexOf(' ');
//     let firstWord = str.substring(0, index);
//     let lastIndex = str.lastIndexOf(' ');
//     let lastWord = str.substring(lastIndex + 1);
//     let restOfWord = str.substring(index +1, lastIndex);
//     return lastWord + ' ' + restOfWord + ' ' + firstWord;
// }

// function switchWords(str) {
//     let index = str.indexOf(' ');
//     let firstWord = str.substring(0, index);
//     let lastIndex = str.lastIndexOf(' ');
//     let lastWord = str.substring(lastIndex + 1);
//     return lastWord  + str.substring(index, lastIndex + 1)  + firstWord;
// }

// function funnyPhrase(str) {
//     let firstWord = '';
//     let lastWord = '';
//     let restPart = '';
//     for (let i = 0; i < str.length; i++) {
//         if (",!?.".includes(str[i]) === false) firstWord += str[i]
//         else break;
//     }
//     let lastSpaceIndex = str.lastIndexOf(' ');
//     for (let i = lastSpaceIndex + 1; i < str.length - 1; i++)
//         lastWord += str[i]
//     restPart = str.substring(firstWord.length, lastSpaceIndex) + ' ';
//     return lastWord + restPart + firstWord + str[str.length - 1];
// }

// function switchAndCapital(str){
//     let divide = str.search(/[ ,?!]/);
//     let first = str.substring(0, divide).toUpperCase();
//     let last = str.lastIndexOf(' ');
//     let lastWord = str.substring(last + 1).toUpperCase();
//     let middle = str.substring(divide + 1, last);
//     let symbol = str.charAt(divide);
//     return lastWord + symbol + middle + ' ' + first;
// }

// function addNewWord(str, newFirstWord){
//     let exceptFirstWord = '';
//     let firstWord = '';
//     let i = 0;
//     while(i < str.length && !divide(str[i])){
//         firstWord += str[i];
//         i++
//     }
//     while(i < str.length){
//         exceptFirstWord += str[i];
//         i++
//     }
//     return newFirstWord + exceptFirstWord + ' ' + firstWord;
// }
// function divide(element){
//     return element === ' ' || element === ',' || element === '?' || element === '!'
// }

// const str = 'car js pasv car jsp coding     js car';
// const words = {};
// let res = '';
// let acc = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] !== ' ') acc += str[i]
//     if(str[i] === ' ' || i === str.length -1){
//         if(acc && !words[acc]){
//             words[acc] = 1;
//             res += acc + ' ';
//         }
//         acc = '';
//     }
// }
// console.log(res);

// const str = 'car js pasv car jsp coding    js car';
// const words = {};
// let res = '';
// let acc = '';
// for(let i = 0; i < str.length; i++){
//     if (str[i] !== ' ') acc += str[i]
//     if (str[i] === ' ' || i === str.length -1){
//         if (acc && !words[acc]){
//             words[acc] = 1;
//             if (res) res += ' ' + acc;
//             else res += acc;
//         }
//         acc = '';
//     }
// }
// console.log(res);

// const str = 'abc alert beep';
// let res = '';
// const symbols = {};
// for (let i = 0; i < str.length; i++){
//     if (!symbols[str[i]]){
//         symbols[str[i]] = 1;
//         res += str[i]
//     }
// }
// console.log(res);
//
// const str = 'abc alert beep';
// let res = '';
// const symbols = {};
// for(let i = 0; i < str.length; i++){
//     if (!symbols[str[i]]){
//         symbols[str[i]] = 1;
//         res += str[i];
//     }
// }
// console.log(symbols);

// function updateString(str){
//     let obj = {
//         firstWord: '',
//         lastWord: '',
//         updatedString: ''
//     }
//     let words = str.split(' ');
//     obj.firstWord = words[0];
//     obj.lastWord = words[words.length -1];
//     words[0] = obj.lastWord;
//     words[words.length -1] = obj.firstWord;
//     obj.updatedString = words.join(' ');
//     return obj;
// }

// function changeIf3Space(str){
//     let words = str.split(' ');
//     if(words.length == 4){
//         return words[0] + ' ' + words[words.length -1]
//     }else {
//         return str;
//     }
// }

// function switchWords(str){
//     let words = str.split(' ');
//     return words[1] + ' ' + words[0];
// }

// function firstIsLast(str){
//     let words = str.toLowerCase().split(' ');
//     if(words.length <= 1){
//         return 'nothing to switch';
//     }
//     let first = words[0];
//     let last = words[words.length -1];
//     words[0] = last;
//     words[words.length -1] = first;
//     return words.join(' ');
// }

// function switchWordAddToArray(str){
//     let res = ['', '', ''];
//     let start = 0;
//     let end = 0;
//     if(str.length == 5){
//         res[0]=str;
//         return [str, '', ''];
//     }
//
//     for(let i = 0; i <= str.length; i++){
//         if(str[i] === ' ' ||  i === str.length){
//             end = i;
//             let word = str.slice(start,end);
//
//             if(res[2] === ''){
//                 res[2] = word;
//             }else  if(i === str.length){
//                 res[0] = word;
//             }else {
//                 res[1] += word + ' ';
//             }
//             start =  i + 1;
//         }
//     }
//     res[1] = res[1].trim();
//     return res;
// }

// function validPhoneNumber(phoneNumber){
//     if(phoneNumber.length !== 14){
//         return false;
//     }
//     if(phoneNumber[0] !=='(' && phoneNumber[4] !== ')'){
//         return false;
//     }
//     if(phoneNumber[5] !== ' '){
//         return false;
//     }
//     if(phoneNumber[9] !== '-'){
//         return false;
//     } else{
//         return true;
//     }
// }

// function _if(bool, func1, func2) {
//     if(bool){
//         return func1();
//     }
//     else{
//         return func2();
//     }
// }

// function switcheroo(x){
//     let str = '';
//     for(let i = 0; i < x.length; i++){
//         if(x[i] == 'a'){
//             str += 'b';
//         } else if(x[i] == 'b'){
//             str += 'a'
//         } else {
//             str += x[i];
//         }
//     }
//     return str;
// }

// function remove(s,n){
//     for(let i = 1; i <= n; i++){
//         s = s.replace('!', '');
//     }
//     return s;
// }

// var encryptThis = function(text) {
//     let words = text.split(' ');
//     let res = [];
//     for(let i of words){
//         let newStr = '';
//         let temp = '';
//         for(let j = 0; j < i.length; j++){
//             if(j === 0){
//                 newStr += i.charCodeAt(0)
//             }else if(j === 1){
//                 temp += i[j];
//                 newStr += i.slice(-1)
//             }else if(j == i.length -1){
//                 newStr += temp;
//             }else {
//                 newStr += i[j]
//             }
//         }
//         res.push(newStr);
//     }
//     return res.join(' ');
// }

// function loop_size(node){
//     if(!node) return 0;
//     let a = node;
//     let b = a.next;
//     while(a !== b && a !== b.next){
//         a = a.next;
//         b = b.next.next;
//     }
//     a = b.next;
//     b = a.next;
//     let res = 1;
//     while(a !== b){
//         res++
//         b = b.next;
//     }
//     return res;
// }

// function encode(string) {
//     let res = (el) => {
//         switch(el){
//             case 'a': return 1;
//             case 'e': return 2;
//             case 'i': return 3;
//             case 'o': return 4;
//             case 'u': return 5;
//         }
//     }
//     return string.replace(/a|e|i|o|u/g, res);
// }
//
// function decode(string) {
//     let res = (el) => {
//         switch(el){
//             case '1': return 'a';
//             case '2': return 'e';
//             case '3': return 'i';
//             case '4': return 'o';
//             case '5': return 'u';
//         }
//     }
//     return string.replace(/[1-5]/g, res);
// }

// function add(n){
//     let res = (el) => add(n + el);
//     res.toString = () => n
//     return res;
// }

// function longestSlideDown (pyramid) {
//     for(let i = pyramid.length -2; i >= 0; i--){
//         for(let j = 0; j <= i; j++){
//             pyramid[i][j] += Math.max(pyramid[i + 1][j], pyramid[i + 1][j + 1])
//         }
//     }
//     return pyramid[0][0];
// }

// function SubtractSum(n){
//     return "apple"
// }

// function multipleOfIndex(array) {
//     let arr = [];
//     for(let i = 0; i < array.length; i++){
//         if(array[i] % i === 0 || array[i] === 0){
//             arr.push(array[i]);
//         }
//     }
//     return arr;
// }

// function foldArray(array, runs){
//     for(let i = 0; i < runs; i++){
//         let arr = [];
//         let middle = Math.floor(array.length / 2);
//         for(let j = 0; j < middle; j++){
//             let sum = array[j] + array[array.length -1 -j];
//             arr.push(sum);
//         }
//         if(array.length % 2 !== 0){
//             arr.push(array[middle]);
//         }
//         array = arr;
//     }
//     return array;
// }

// function meanMaxQM(dice, n) {
//     return 0.5 * (dice - 1) * (n - 1) / (n + 1);
// }

// function sumDigPow(a, b) {
//     let arr = [];
//     for(let i = a; i <= b; i++){
//         let sum = 0;
//         for(let j = 0; j <= String(i).length; j++){
//             sum += Math.pow(+String(i)[j], j + 1)
//             if(sum == i){
//                 arr.push(i);
//             }
//         }
//     }
//     return arr;
// }

// function isSortedAndHow(array) {
//     let ascending = true;
//     let descending = true;
//     for(let i = 0; i < array.length -1; i++){
//         if(array[i] < array[i + 1]){
//             descending = false;
//         }
//         if(array[i] > array[i + 1]){
//             ascending = false;
//         }
//     }
//     if(ascending){
//         return 'yes, ascending';
//     }else if(descending){
//         return 'yes, descending'
//     } else{
//         return 'no'
//     }
// }

// function sumOfDivided(lst) {
//     let arr = [];
//     let maxNum = Math.max.apply(0, lst.map(Math.abs));
//     let cantDivide = a => b => a % b !== 0;
//     for(let i = 2, primes = []; i <= maxNum; i++){
//         if(primes.every(cantDivide(i))) {
//             primes.push(i);
//             let sum = lst.reduce((sum, n) => cantDivide(n)(i) ? sum : sum + n, null)
//             if(sum !== null){
//                 arr.push([i, sum])
//             }
//         }
//     }
//     return arr;
// }

// function getMiddle(s){
//     if(s.length % 2){
//         return s[(s.length - 1) / 2]
//     }else {
//         return s[s.length / 2 - 1] + s[s.length / 2]
//     }
// }

// function isRubyComing(list) {
//     return list.some(el => el.language === 'Ruby');
// }

// function mergeArrays(arr1, arr2) {
//     let arr = arr1.concat(arr2).sort((a, b) => a - b);
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] !== arr[i + 1]){
//             newArr.push(arr[i])
//         }
//     }
//     return newArr;
// }

// function progress(puzzle) {
//
//     const getSq = (x, y) => {
//         const [xs, ys] = [x - x % 3, y - y % 3]
//         return puzzle.slice(xs, xs + 3).reduce((c, v) => c.concat(v.slice(ys, ys + 3)), [])
//     }
//
//     for (let x = 0; x < 9; x++) {
//         for (let y = 0; y < 9; y++) {
//             if(puzzle[x][y] == 0) {
//                 const numbers = new Set(puzzle[x].concat(puzzle.map(x => x[y]), getSq(x, y)).filter(Boolean))
//                 if (numbers.size === 8) return [x, y, [1, 2, 3, 4, 5, 6, 7, 8, 9].findIndex(n => !numbers.has(n)) + 1]
//             }
//         }
//     }
//     return
// }

// function validateUsr(username) {
//     const res = /^[0-9a-z_]{4,16}$/.test(username)
//     return res;
// }

// function whoIsPaying(name){
//     return (name.length > 2) ? ([name, name.substr(0, 2)]) : ([name]);
// }

// function isAllPossibilities(x){
//     if(x.length === 0){
//         return false;
//     }
//     for(let i = 0; i < x.length; i++){
//         if(!x.includes(i)){
//             return false;
//         }
//     }
//     return true;
// }

// function sortByArea(array) {
//     let arr = [].concat(array);
//     let area = x => Array.isArray(x) ? x[0] * x[1] : Math.PI * Math.pow(x, 2);
//     return arr.sort((a, b) => area(a) - area(b))
// }

// function pillars(numPill, dist, width) {
//     return numPill > 1 ? (numPill - 1) * dist * 100 + (numPill - 2) * width : 0
// }

// const solve = (x, y) => x / y

// function getAverage(marks){
//     let res = 0;
//     for(let i = 0; i < marks.length; i++){
//         res += marks[i];
//     }
//     return Math.floor(res / marks.length)
// }

// function calculateTip(amount, rating) {
//     switch(rating.toLowerCase()){
//         case 'terrible': return 0;
//         case 'poor': return Math.ceil(amount * 0.05);
//         case 'good': return Math.ceil(amount * 0.1);
//         case 'great': return Math.ceil(amount * 0.15);
//         case 'excellent': return Math.ceil(amount * 0.20);
//         default: return 'Rating not recognised'
//     }
// }

// function isVow(a){
//     let arr = ['a', 'e', 'i', 'o', 'u'];
//     for(let i = 0; i < a.length; i++){
//         for(let j = 0; j < arr.length; j++){
//             if(a[i] === arr[j].charCodeAt()){
//                 a[i] = arr[j]
//             }
//         }
//     }
//     return a;
// }

// function alphabetWar(fight){
//     let left = 0;
//     let right = 0;
//     let leftSide = {
//         'w': 4,
//         'p': 3,
//         'b': 2,
//         's': 1
//     };
//     let rightSide = {
//         'm': 4,
//         'q': 3,
//         'd': 2,
//         'z': 1
//     }
//     for(let i = 0; i < fight.length; i++){
//         if(fight[i] in leftSide){
//             left += leftSide[fight[i]];
//         }
//         if(fight[i] in rightSide){
//             right += rightSide[fight[i]];
//         }
//     }
//     if(left > right){
//         return 'Left side wins!';
//     }
//     if(left < right){
//         return 'Right side wins!';
//     }
//     return "Let's fight again!"
// }

// function mirrorImage(arr){
//     for(let i =0; i < arr.length -1; i++){
//         if(`${arr[i]}` === [...`${arr[i + 1]}`].reverse().join('')){
//             return [arr[i], arr[i + 1]]
//         }
//     }
//     return [-1, -1];
// }

// function processData(data){
//     let res = 1;
//     for(let i = 0; i < data.length; i++){
//         res *= data[i][0] - data[i][1];
//     }
//     return res;
// }

// function cubeChecker(volume, side){
//     if(side ** 3 === volume && volume > 0 && side > 0){
//         return true;
//     }
//     return false;
// };

// function toIndustrial(time){
//     if(typeof time === 'number'){
//         let indHour = (time * 60 / 3600).toFixed(2);
//         return Number(indHour);
//     }
//     if(typeof time === 'string'){
//         let normHour = time.split(':');
//         let indHour = ((Number(normHour[0]) * 60 + Number(normHour[1])) * 60 / 3600).toFixed(2)
//         return Number(indHour)
//     }
// }
//
// function toNormal(time){
//     let totalMin = time * 3600 / 60;
//     let min = (totalMin.toFixed() % 60) < 10 ? `0${totalMin.toFixed() % 60}` : (totalMin.toFixed() % 60);
//     let hours = Math.floor((totalMin.toFixed()) / 60);
//     return `${hours}:${min}`;
// }

// function removeUrlAnchor(url){
//     if(url.includes('#')){
//         return url.slice(0, url.indexOf('#'))
//     } else{
//         return url;
//     }
// }

// function remainder(n, m){
//     if(n > m){
//         return n % m;
//     }else{
//         return m % n;
//     }
// }

// var websites = [];
// let text = 'codewars';
// for(let i = 0; i < 1000; i++){
//     websites.push(text);
// }

// function gps(s, x) {
//     if(x.length <= 1){
//         return 0;
//     }
//     let arr = [];
//     for(let i = 0; i < x.length - 1; i++){
//         arr.push((x[i + 1] - x[i]) * 3600 / s)
//     }
//     return Math.max(...arr);
// }

// function defineSuit(card) {
//     if(card.includes('♣')){
//         return 'clubs'
//     }
//     if(card.includes('♦')){
//         return 'diamonds'
//     }
//     if(card.includes('♥')){
//         return 'hearts'
//     }
//     if(card.includes('♠')){
//         return 'spades'
//     }
// }

// function datingRange(age){
//     let min = 0;
//     let max = 0;
//     if(age <= 14){
//         min = Math.floor(age - 0.10 * age)
//         max = Math.floor(age + 0.10 * age)
//     }else {
//         min = Math.floor(age/2 + 7)
//         max = Math.floor((age - 7) * 2 )
//     }
//     return `${min}-${max}`
// }

// reverse=a=>a.map(a.pop,[...a])

// function sameCase(a, b){
//     if(a.toUpperCase() === a.toLowerCase() || b.toUpperCase() === b.toLowerCase()){
//         return -1;
//     } else if(a === a.toLowerCase() && b === b.toLowerCase() || a === a.toUpperCase() && b === b.toUpperCase()){
//         return 1;
//     }else{
//         return 0;
//     }
// }

// function isDigit(s) {
//     return parseFloat(s) === Number(s) ? true : false;
// }

// function remove(string){
//     return string.replace(/!/g, '') + '!';
// }

// function lovefunc(flower1, flower2){
//     if(flower1 % 2 === 0 && flower2 % 2 !== 0 || flower1 % 2 !== 0 && flower2 % 2 === 0){
//         return true;
//     }
//     return false;
// }

// function vertMirror(strng) {
//     return strng.map(el => [...el].reverse().join(''));
// }
// function horMirror(strng) {
//     return strng.reverse();
// }
// function oper(fct, s) {
//     return fct(s.split('\n')).join('\n');
// }

// function distinct(a) {
//     return a.filter((item,index)=>a.indexOf(item)===index)
// }

// function bump(x){
//     let sum = 0;
//     for(let i = 0; i < x.length; i++){
//         if(x[i] === 'n'){
//             sum ++
//         }
//     }
//     if(sum > 15){
//         return 'Car Dead'
//     } else{
//         return 'Woohoo!'
//     }
// }

// function overTheRoad(address, n){
//     return (n * 2 + 1) - address;
// }

// function pyramid(n) {
//     let arr = [];
//     for(let i = 1; i <= n; i++){
//         arr.push(new Array(i).fill(1));
//     }
//     return arr;
// }

// class Ship {
//     constructor(draft, crew) {
//         this.draft = draft
//         this.crew = crew
//     }
//
//     isWorthIt(){
//         return this.draft - 1.5 * this.crew > 20
//     }
//
// }

// function factorial(n){
//     if(n < 0 || n > 12){
//         throw new RangeError('Argument must be beetween 0 and 12')
//     }
//     return n === 0 ? 1 : factorial(n - 1) * n;
// }

// function reverseNumber(n) {
//     let x = Math.abs(n).toString().split('').reverse().join('');
//     return n < 0 ? -x: +x
// }

// function odds(values){
//     return values.filter(a => a % 2 !== 0);
// }

// function declareWinner(fighter1, fighter2, firstAttacker) {
//     let f1 = Math.ceil(fighter1.health / fighter2.damagePerAttack);
//     let f2 =  Math.ceil(fighter2.health / fighter1.damagePerAttack);
//     return f1 < f2 ? fighter2.name : f2 < f1 ? fighter1.name : firstAttacker
// }

// function totalLicks(env) {
//     let lick = 252;
//     let count = 0;
//     let name = '';
//     for(let i in env){
//         lick += env[i];
//         if(env[i] > count){
//             count = env[i];
//             name = i;
//         }
//     }
//     if(name == ''){
//         return `It took ${lick} licks to get to the tootsie roll center of a tootsie pop.`
//     } else{
//         return `It took ${lick} licks to get to the tootsie roll center of a tootsie pop. The toughest challenge was ${name}.`
//     }
// }

// function getSocks(name, socks) {
//     socks.sort();
//     if(name == 'Punky'){
//         for(var i = 1; i < socks.length; i++){
//             if(socks[i] !== socks[i - 1]){
//                 return [socks[i - 1], socks[i]]
//             }
//         }
//     }else{
//         for(var i = 1; i < socks.length; i++){
//             if(socks[i] == socks[i - 1]){
//                 return [socks[i - 1], socks[i]]
//             }
//         }
//     }
//     return [];
// }

// function partlist(arr) {
//     let res = [];
//     for(let i = 1; i < arr.length; i++){
//         let res1 = [];
//         res1.push(arr.slice(0, i).join(' '));
//         res1.push(arr.slice(i).join(' '));
//         res.push(res1);
//     }
//     return res;
// }

// function evil(n) {
//     let binary = n.toString(2);
//     let sum = 0;
//     for(let i = 0; i < binary.length; i++){
//         sum += Number(binary[i])
//     }
//     return sum % 2 === 0 ? "It's Evil!" : "It's Odious!";
// }

// function averages(numbers) {
//     let arr = [];
//     if(!numbers){
//         return arr;
//     }
//     for(let i = 1; i < numbers.length; i++){
//         arr.push((numbers[i - 1] + numbers[i]) / 2)
//     }
//     return arr;
// }

// function eqSumPowdig(hMax, exp) {
//     let res = [];
//     if(hMax < 153){
//         return res;
//     }
//     for(let i = 153; i <= hMax; i++){
//         let hMaxi = i.toString();
//         let sum = 0;
//         for(let j = 0; j < hMaxi.length; j++){
//             sum += Math.pow(parseInt(hMaxi[j]), exp)
//         }
//         if(sum == i){
//             res.push(sum);
//         }
//     }
//     return res;
// }

// function isLockNessMonster(s) {
//     return s.includes("tree fiddy") || s.includes('3.50')
// }

// function wallpaper(l, w, h) {
//     if(l === 0 || w === 0) return 'zero'
//     let roomArea = 2 * (l + w)* h
//     let roolArea = 0.52 * 10
//     let rollsRequired = Math.ceil(roomArea / roolArea * 1.15)
//     return numbers[rollsRequired]
// }

// function sortMyString(S) {
//     let odd = '';
//     let even = '';
//     for(let i = 0; i < S.length; i++){
//         if(i % 2 === 0){
//             even += S[i];
//         } else{
//             odd += S[i];
//         }
//     }
//     return even + ' ' + odd;
// }

// function arrayManip(array){
//     for(let i = 0; i < array.length; i++){
//         let number = array[i];
//         let replacement = -1;
//         for(let j = i; j < array.length; j++){
//             let newReplacement = array[j];
//             if(newReplacement > number && (replacement === -1 || replacement > newReplacement)){
//                 replacement = newReplacement;
//             }
//         }
//         array[i] = replacement;
//     }
//     return array;
// }

// function solve(arr) {
//     let arr1 = [];
//     let arr2 = arr.reverse();
//     for(let i = 0; i < arr2.length; i++){
//         if(arr1.indexOf(arr2[i]) === -1){
//             arr1.push(arr2[i]);
//         }
//     }
//     return arr1.reverse();
// }

// function splitAndMerge(string, separator) {
//     let words = string.split(' ');
//     let arr = [];
//     let res = [];
//     for(let i = 0; i < words.length; i++){
//         arr.push(words[i].split('').join(separator))
//     }
//     res = arr.join(' ');
//     return res;
// }

// function makeClass(...properties) {
//     return function (...params){
//         for(let i = 0; i < properties.length; i++){
//             this[properties[i]] = params[i];
//         }
//     }
// }

// function oddOne(arr) {
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             return i
//         }
//     }
//     return -1
//
// }

// function friends(n){
//     if(n <= 2){
//         return 0;
//     } else{
//         let counter = 0;
//         while(n > 1){
//             n = n / 2
//             counter++
//         }
//         return counter - 1;
//     }
// }

// var hotpo = function(n){
//     if(n == 0){
//         return 0;
//     } for(let i = 0; i <= 100; i++){
//         if(n == 1){
//             return i;
//         } else if(n % 2 == 0){
//             n /= 2;
//         } else{
//             n = 3 * n + 1;
//         }
//     }
//     return - 1;
// }

// function getRectangleRatio(n) {
//     return (n + (n ** 2 + 4) ** .5) / 2;
// }

// function mystery() {
//     let results = {
//         sanity: 'Hello'
//     };
//     return results;
// }

// function stringClean(s){
//     return s.replace(/[0-9]/g, '')
// }

// function howManyLightsabersDoYouOwn(name) {
//     return name === 'Zach' ? 18 : 0;
// }

// var quote = function(fighter) {
//     return fighter.toLowerCase() === 'conor mcgregor' ? "I'd like to take this chance to apologize.. To absolutely NOBODY!":"I am not impressed by your performance."
// };
// function generateShape(integer){
//     return ("+".repeat(integer) + "\n").repeat(integer).trim()
// }

// const orderedCount = function (text) {
//     return Array.from(new Set(text)).map(c=>[c, text.match(new RegExp(c, 'g')).length])
// }

// function solve(arr){
//     let alphabet = 'abcdefghijklmnopqrstuvwxyz'
//     let final = []
//     for(let i = 0; i<arr.length; i++){
//         let count = 0;
//         for(let j =0;j<arr[i].length; j++){
//             if(arr[i][j].toLowerCase() == alphabet[j]){
//                 count++
//             }
//         }
//         final.push(count)
//
//     }
//     return final
// };

// function cheapestQuote(newspapers) {
//     let result = 0;
//     let quantity = [40,20, 10, 5, 1]
//     let price = [3.85, 1.93, 0.97,0.49, 0.10]
//     while(newspapers>0){
//         for(let i =0;i<quantity.length; i++){
//             if(newspapers >= quantity[i]){
//                 result += price[i]
//                 newspapers -= quantity[i]
//                 break;
//             }
//         }
//     }
//     return parseFloat(result.toFixed(2))
// }
//

// function nearestSq(n){
//     return Math.pow(Math.round(Math.sqrt(n)),2)
// }


// class God{
//     /**
//      * @returns Human[]
//      */
//     static create(){
//         return [new Man, new Woman]
//     }
// }
//
// class Human{}
//
// class Man extends Human{}
//
// class Woman extends Human{}

// function closeCompare(a, b, margin){
//     return Math.abs(a-b) <=margin? 0: Math.sign(a-b)
// }

// function sumCubes(n){
//     if(n == 1){
//         return n**3
//     }else{
//         return n**3 + sumCubes(n-1)
//     }
// }

// function maxRot(n){
//     let max = n;
//     let arr = String(n).split('');
//     for(let i = 0; i < arr.length; i++){
//         arr.push(arr.splice(i, 1));
//         let num = Number(arr.join(''))
//         if(num > max){
//             max = num;
//         }
//     }
//     return max;
// }

// function getFirstPython(list) {
//     for(let i = 0; i < list.length; i++){
//         if(list[i].language === 'Python'){
//             return list[i].firstName + ', ' + list[i].country;
//         }
//     }
//     return 'There will be no Python developers'
// }

// function nthSmallest(arr, pos){
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i + 1; j < arr.length; j++){
//             let current = arr[i];
//             if(arr[j] < arr[i]){
//                 arr[i] = arr[j];
//                 arr[j] = current;
//             }
//         }
//     }
//     return arr[pos -1]
// }

// function getStatus(isBusy) {
//     var msg = (isBusy ? "busy" : "available");
//     return {
//         status: msg
//     }
// }

// function distancesFromAverage(arr){
//     let average = arr.reduce((s, v) => s + v, 0) / arr.length;
//     return arr.map(v => average - v).map(x => Math.round(x * 100) / 100)
// }

// function aliasGen(first, last){
//     let firstStr = first[0].toUpperCase();
//     let secStr = last[0].toUpperCase();
//     if(firstName[firstStr] && surname[secStr]){
//         return firstName[firstStr] + ' ' + surname[secStr];
//     } else {
//         return 'Your name must start with a letter from A - Z.'
//     }
// }

// const str = 'Hello! JavaScript!';
// let result = '';
//
// for (let i = 0; i < str.length; i++) {
//     if (str[i] === '!') {
//         result += '.';
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// const str = '1 + 2 + 3 Hello. JavaScript...';
// let result = '';
//
// const map = {
//     '.': '!',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     ' ': '_',
//     '+': '*'
// }
//
// for (let i = 0; i < str.length; i++) {
//     if (map[str[i]]) {
//         result += map[str[i]];
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// const str = '5 + 4 - 7 = 2; 2 * 3 / 6 = 1';
//
// let result = '';
//
// const map = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     7:'seven',
//     8: 'eight',
//     9: 'nine',
//     '-': 'minus',
//     '+': 'plus',
//     '*': 'multiply',
//     '/': 'divide',
//     '=': 'equals',
//     ';': ' and',
// }
//
// for (let i = 0; i < str.length; i++) {
//     if (map[str[i]]) {
//         result += map[str[i]];
//     } else {
//         result += str[i];
//     }
// }
// console.log(result);

// const str = 'Hello, world!';
// let result = str.replace('world', 'JavaScript');
// console.log(result);

// const str = 'Hello! World!';
// let result = str.replace('!', ';');
// console.log(result);

// function tapCodeTranslation(text) {
//     let arr = [
//         ['A', 'B', 'C\K', 'D', 'E'],
//         ['F', 'G', 'H', 'I', 'J'],
//         ['L', 'M', 'N', 'O', 'P'],
//         ['Q', 'R', 'S', 'T', 'U'],
//         ['V', 'W', 'X', 'Y', 'Z']
//     ];
//     let res = '';
//     for(let i = 0; i < text.length; i++){
//         let test = text[i].toUpperCase();
//         if(test == 'K' || test == 'C'){
//             test = 'C\K'
//         }
//         for(let j = 0; j < arr.length; j++){
//             for(let c = 0; c < arr[j].length; c++){
//                 if(arr[j][c] == test){
//                     let dot = '.'.repeat(j + 1);
//                     let pause = ' ';
//                     let cDots = '.'.repeat(c + 1);
//                     res += `${dot}${pause}${cDots} `
//                 }
//             }
//         }
//     }
//     return res.trim();
// }

// function Hero (name) {
//     this.name = name || 'Hero';
//     this.position = '00';
//     this.health = 100;
//     this.damage = 5;
//     this.experience = 0;
// }

// function multiplyAll(arr){
//     return function(n){
//         let res = [];
//         if(arr.length == 0){
//             return res;
//         }
//         for(let i = 0; i < arr.length; i++){
//             res.push(arr[i] * n)
//         }
//         return res;
//     }
// }

// const flip=(d, a)=>{
//     if(d === 'R'){
//         return a.sort((a, b) => a - b);
//     }
//     if(d === 'L'){
//         return a.sort((a, b) => b - a);
//     }
// }

// function solve(a){
//     let even = 0
//     let odd = 0;
//     for(let i = 0; i < a.length; i++){
//         if(typeof(a[i]) === 'number'){
//             if(a[i] % 2 === 0){
//                 even += 1;
//             } if(a[i] % 2 !== 0) {
//                 odd += 1;
//             }
//         }
//     }
//     return even - odd;
// };

// function evaporator(content, evap_per_day, threshold){
//     let day = 0;
//     let total = 100;
//     while(total > threshold){
//         day += 1;
//         total -= total * evap_per_day / 100;
//     }
//     return day;
// }

// function capitalize(s,arr){
//     let newS = s.split('');
//     for(let i = 0; i < arr.length; i++){
//         if(newS[arr[i]]){
//             newS[arr[i]] = newS[arr[i]].toUpperCase();
//         }
//     }
//     newS = newS.join('');
//     return newS;
// };

// function sakuraFall(v) {
//     let distance = 5 * 80;
//     let time = 0;
//     if(v > 0){
//         time = distance / v;
//     }
//     return time;
// }

// function mygcd(x,y){
//     while(x !== y){
//         if(x > y){
//             x = x - y;
//         }else{
//             y = y - x;
//         }
//     }
//     return x;
// }

// function seven(m) {
//     let counter = 0;
//     while(m > 99){
//         m = Math.floor(m / 10) - (2 * (m % 10));
//         counter++
//     }
//     return [m, counter]
// }

// function foldTo(distance) {
//     let paper = 0.0001;
//     let res = 0;
//     while(distance > paper){
//         paper *= 2;
//         res++
//     }
//     return distance >= 0 ? res : null
// }

// function maxProduct(numbers, size){
//     return numbers.sort((a, b) => b - a).slice(0, size).reduce((el, index) => el * index);
// }

// String.prototype.vowel = function() {
//     return /^[aeiou]$/i.test(this);
// };

// const neutralise = (s1, s2) => {
//     let res = '';
//     for(let i = 0; i < s1.length; i++){
//         if(s1[i] == s2[i]){
//             res += s1[i];
//         }else{
//             res += '0';
//         }
//     }
//     return res;
// }

// function hasUniqueChars(str){
//     for(let i = 0; i < str.length; i++){
//         if(str.lastIndexOf(str.charAt(i)) !== i){
//             return false;
//         }
//     }
//     return true;
// }

// function getASCII(c){
//     return c.charCodeAt(0);
// }

// async function promiseHelloWorld() {
//     return 'Hello World!';
// }

// function add(n) {
//     return function (m){
//         return n + m;
//     }
// }

// function strong(n){
//     if (n === 1) return 'STRONG!!!!'
//     let arr = n.toString().split('').map(Number).reduce((a, b) => {
//         let factorial = 1;
//         for (let i = 1; i <= b; i++){
//             factorial *= i;
//         }
//         return a + factorial;
//     }, 0)
//     return arr == n ? 'STRONG!!!!' : "Not Strong !!";
// }

// function evalObject(value){
//     var result = 0;
//     switch(value.operation){
//         case'+': result = value.a + value.b
//             break;
//         case'-': result = value.a - value.b
//             break;
//         case'/': result = value.a / value.b
//             break;
//         case'*': result = value.a * value.b
//             break;
//         case'%': result = value.a % value.b
//             break;
//         case'^': result = Math.pow(value.a, value.b)
//             break;
//     }
//     return result;
// }

// function menFromBoys(arr){
//     let even = [];
//     let odd = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0 && arr[i] !== arr[i + 1]){
//             even.push(arr[i]);
//         }else{
//             odd.push(arr[i]);
//         }
//     }
//     return [...new Set([...even.sort((a, b) => a - b), ...odd.sort((a, b) => b - a)])]
// }

// function sortGiftCode(code){
//     return code.split('').sort().join('')
// }

// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//     get info(){
//         return `${this.name}s age is ${this.age}`
//     }
// }

// const cannonsReady = (gunners) => {
//     for(let i in gunners){
//         if(gunners[i] == 'nay'){
//             return 'Shiver me timbers!'
//         }
//     }
//     return 'Fire!'
// }

// let obj = {
//     hello: 'english',
//     ciao: 'italian',
//     salut: 'french',
//     hallo: 'german',
//     hola: 'spanish',
//     ahoj: 'czech republic',
//     czesc: 'polish'
// }
// function validateHello(greetings) {
//     for(let i in obj){
//         if(greetings.toLowerCase().includes(i)){
//             return true;
//         }
//     }
//     return false;
// }

// function explode(s) {
//     let str = '';
//     for(let i = 0; i < s.length; i++){
//         for(let j = s[i]; j > 0; j--){
//             str += s[i];
//         }
//     }
//     return str;
// }

// function vaporcode(string) {
//     return string.toUpperCase().split(' ').join('').split('').join('  ')
// }

// function adjacentElementsProduct(array) {
//     let arr = [];
//     for(let i = 0; i < array.length -1; i++){
//         arr.push(array[i] * array[i + 1])
//     }
//     return Math.max(...arr);
// }

// function maxTriSum(numbers){
//     let arr1 = [];
//     let arr2 = [];
//     let a = Math.max(...numbers);
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] !== a){
//             arr1.push(numbers[i]);
//         }
//     }
//     let b = Math.max(...arr1);
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] !== b){
//             arr2.push(arr1[i]);
//         }
//     }
//     let c = Math.max(...arr2);
//     return a + b + c;
// }

// const str = 'seven plus zero equal 7';
// const arr = str.split(' ');
// const first = arr[0];
// const last = arr[arr.length - 1];
// arr[0] = arr[arr.length - 1];
// arr[arr.length - 1] = first;
// const res = arr.join(' ');
// console.log(res);

// const str = 'Alex met Mary';
// const arr = str.split(' ');
// const first = arr[0];
// const last = arr[arr.length - 1];
// arr[0] = last;
// arr[arr.length - 1] = first;
// const res = arr.join(' ');
// console.log(res);

// const str = 'first could be last';
// let start = '';
// for(let i = 0; i < str.length; i++) {
//     if(str[i] === ' ') break;
//     else start += str[i];
// }
// console.log(start);

// const str = 'first could be last';
// let start = '';
// let end = '';
// let startSpaceIndex, endSpaceIndex;
// let res = '';
// for(let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//         startSpaceIndex = i;
//         break;
//     } else start += str[i];
// }
// for(let i = str.length-1; i >= 0; i--) {
//     if(str[i] === ' ') {
//         endSpaceIndex = i;
//         break;
//     } else end = str[i]  + end;
// }
// res = end;
// for(let i = startSpaceIndex; i <= endSpaceIndex; i++) {
//     res += str[i];
// }
// res += start;
// console.log(res);

// const str = 'sunset precedes the sunrise';
// let first = '';
// let last = '';
// let firstSpaceIndex, lastSpaceIndex;
// let res = '';
// for(let i = 0; i < str.length; i++) {
//     if (str[i] === ' ') {
//         firstSpaceIndex = i;
//         break;
//     } else first += str[i];
// }
// for(let i = str.length-1; i >= 0; i--) {
//     if(str[i] === ' ') {
//         lastSpaceIndex = i;
//         break;
//     } else last = str[i]  + last;
// }
// res = last;
// for(let i = firstSpaceIndex; i <= lastSpaceIndex; i++) {
//     res += str[i];
// }
// res += first;
// console.log(res);

// const str = 'hello js pasv coding com';
// //olleh sj vsap gnidoc moc
// let res = '';
// let word = '';
//
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word)
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     return str.toUpperCase()
// }
// console.log(res);

// const str = 'hello js pasv coding com';
// let res = '';
// let word = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word)
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++) {
//         res = str[i] + res;
//     }
//     return res;
// }
// console.log(res);

// function reverseAWord(str){
//     return str.split('').reverse().join('')
// }

// function reverseExceptLast(str){
//     if(str.length == 0){
//         return '';
//     }
//     return str.slice(0, -1).split('').reverse().join('') + str.slice(-1);
// }

// function twoWords(words){
//     let newStr = '';
//     let chunk = [];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i] === ' ') {
//             newStr += chunk + ' ';
//             chunk = '';
//         } else {
//             chunk = words[i] + chunk;
//         }
//     }
//     newStr += chunk;
//     return newStr;
// }

// function reverseStrExceptLast(str) {
//     if (str.length === 0) {
//         return '';
//     }
//     let words = str.slice(0, -1).split(' ');
//     for (let i = 0; i < words.length; i++) {
//         words[i] = words[i].split('').reverse().join('')
//     }
//     return words.join(' ') + str.slice(-1);
// }

// function reverseWithCases(str){
//     let reversedStr = '';
//     let length = str.length;
//     for (let i = 0; i < length; i++) {
//         if( str[i].toLowerCase() === str[i] ) {
//             reversedStr += str[length-1-i].toLowerCase();
//         } else {
//             reversedStr += str[length-1-i].toUpperCase();
//         }
//     }
//     return reversedStr;
// }

// function reverseAndPush(str){
//     let newStr = str.split(' ');
//     for(let i = 0; i < newStr.length; i++){
//         newStr[i] = newStr[i].split('').reverse().join('');
//     }
//     return newStr
// }

// function reverseLocationOfWords(str){
//     let newStr = str.split(' ');
//     let newStr2 = str.split(' ');
//     for(let i = 0; i < newStr.length; i++){
//         newStr[i] = newStr2[newStr2.length -1 -i];
//     }
//     return newStr.join(' ');
// }

// function reverseOnlyLastWord(str){
//     let newStr = str.split(' ');
//     newStr[newStr.length -1] = newStr[newStr.length -1].split('').reverse().join('')
//     return newStr.join(' ');
// }

// function decryptTheCode(str){
//     let newStr = '';
//     for(let i = str.length - 1; i >= 0; i--){
//         if(str[i] >= 'a' && str[i] <= 'z' || str[i] >= 'A' && str[i] <= 'Z'){
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }

// function reverseOnlyFirstWord(str){
//     let newS = str.split(' ');
//     newS[0] = newS[0].split('').reverse().join('');
//     return newS.join(' ');
// }

// const str = '123 + 234 = 357';
// let res = '';
// let word = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word);
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         res = str[i] + res;
//     }
//     return res;
// }
// console.log(res);

// const str = 'bus star reward';
// let res = '';
// let word = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word);
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         res = str[i] + res;
//     }
//     return res;
// }
// console.log(res);

// const str = 'NadiA saw a doG';
// let res = '';
// let word = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word);
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         res = str[i] + res;
//     }
//     return res;
// }
// console.log(res);

// const str = 'LIVE stressed';
// let res = '';
// let word = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word);
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         res = str[i] + res;
//     }
//     return res;
// }
// console.log(res);

// const str = '12 pans 23 nuts';
// let res = '';
// let word = '';
// for(let i = 0; i < str.length; i++){
//     if(str[i] === ' '){
//         res +=reverse(word);
//         word = '';
//         res += ' ';
//     } else if(i === str.length - 1) {
//         word += str[i];
//         res +=reverse(word);
//         word = '';
//     } else {
//         word += str[i];
//     }
// }
// function reverse(str){
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         res = str[i] + res;
//     }
//     return res;
// }
// console.log(res);

// const str = 'Hello 100 3 6 10 11 9 world';
// const numbers = {
//     0: 'zero',
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five',
//     6: 'six',
//     10: 'ten',
//     11: 'eleven'
// }
//
// let result = '';
// let word = '';
//
// for(let i = 0; i < str.length; i ++){
//     if(str[i] !== ' ') word += str[i];
//
//     if(str[i] === ' ' && word) {
//         if(numbers[word]) result += numbers[word];
//         else if(!Number.isNaN(+word)) result += 'unknown';
//         else result += word;
//         word = '';
//     }
//
//     if(str[i] === ' ') result += ' ';
//
//     if(i === str.length - 1 && word) {
//         if(numbers[word]) result += numbers[word];
//         else if(!Number.isNaN(+word)) result += 'unknown';
//         else result += word;
//     }
// }
// console.log(result)

// function numFromOneToFive(str){
//     let obj = {
//         '1': 'one',
//         '2': 'two',
//         '3': 'three',
//         '4': 'four',
//         '5': 'five'
//     }
//     let res = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] >= '1' && str[i] <= '5'){
//             res += obj[str[i]] + ' '
//         }
//     }
//     return res.trim();
// }

// function countOfNumbers(str){
//     let obj = {
//         'zero': 0,
//         'one': 0,
//         'two': 0
//     }
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == '0'){
//             obj.zero++
//         }
//         else if(str[i] == '1'){
//             obj.one++
//         }
//         else if(str[i] == '2'){
//             obj.two++
//         }
//     }
//     return obj;
// }

// function numToWordWithArray(str){
//     let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let newStr = '';
//     for (let i = 0; i < str.length; i++) {
//         newStr += arr[+str[i]];
//         if(i !== str.length - 1) {
//             newStr += ', ';
//         }
//     }
//     return newStr;
// }

// function numbersAndWords(str){
//     let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let newStr = '';
//     let res = ''
//     for(let i of str){
//         if(/[0-9]/.test(i)){
//             newStr += i;
//             res += arr[+newStr];
//             newStr = '';
//         } else{
//             if(newStr !== ''){
//                 res += arr[+newStr];
//                 newStr = '';
//             }
//             res += i;
//         }
//     }
//     if(newStr !== ''){
//         res += arr[+newStr];
//     }
//     return res;
// }

// function phoneNumber(str){
//     let arr = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
//     let newStr = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' ' && str[i] !== '(' && str[i] !== ')' && str[i] !== '-'){
//             if(i !== str.length - 1) {
//                 newStr += arr[str[i]] + '-';
//             } else {
//                 newStr += arr[str[i]];
//             }
//         }
//     }
//     return newStr;
// }

// function numToWord(arr){
//     let objFrom10to19 = { 10: 'ten', 11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen' }
//     let res = arr.map(num => objFrom10to19[num])
//     return res;
// }

// function numToWord(arr){
//     const objFrom0to9 = { 0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine' }
//     const objFrom10to90 = { 1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8:'eighty', 9: 'ninety' }
//     let newArr = [];
//
//     for(let i = 0; i < arr.length; i++){
//         const str = arr[i].toString();
//         let word = '';
//
//         if(str.length === 1) word = objFrom0to9[str];
//         else {
//             if(str[1] === '0') word = objFrom10to90[str[0]];
//             else {
//                 const part1 = objFrom10to90[str[0]];
//                 const part2 = objFrom0to9[str[1]];
//                 word = part1 + '-' + part2;
//             }
//         }
//         newArr.push(word);
//     }
//     return newArr;
// }

// function numToWord(arr){
//     const objFrom1to9 = {1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
//     const objFrom20to90 = {2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8:'eighty', 9: 'ninety'}
//
//     return arr.map(num => {
//         if(num < 20){
//             return objFrom1to9[num]
//         } else{
//             let ten = Math.floor(num / 10);
//             let ones = num % 10;
//             if(ones == 0){
//                 return objFrom20to90[ten]
//             } else{
//                 return objFrom20to90[ten] + '-' + objFrom1to9[ones]
//             }
//         }
//     })
//
// }

// function numToWord(str){
//     const objFrom0to9 = {0: 'zero', 1: 'one', 2: 'two', 3: 'three', 4: 'four', 5: 'five', 6: 'six', 7: 'seven', 8: 'eight', 9: 'nine'}
//     const objFrom11to19 = {11: 'eleven', 12: 'twelve', 13: 'thirteen', 14: 'fourteen', 15: 'fifteen', 16: 'sixteen', 17: 'seventeen', 18: 'eighteen', 19: 'nineteen'}
//     const objFrom10to90 = {1: 'ten', 2: 'twenty', 3: 'thirty', 4: 'forty', 5: 'fifty', 6: 'sixty', 7: 'seventy', 8: 'eighty', 9: 'ninety'}
//
//     let newArr = [];
//     const arrayOfNums = str.split(', ');
//
//     for(let i = 0; i < arrayOfNums.length; i++){
//
//         const num = arrayOfNums[i]
//         let word = '';
//
//         if(num.length === 1) word = objFrom0to9[num];
//
//         else if(num[1] === '0') word = objFrom10to90[num[0]];
//         else if(num[0] === '1') word = objFrom11to19[num];
//
//         else {
//             const part1 = objFrom10to90[num[0]];
//             const part2 = objFrom0to9[num[1]];
//             word = part1 + '-' + part2;
//         }
//         newArr.push(word)
//     }
//     return newArr.join(', ')
// }

// function arraySum(arr){
//     if(arr.length === 0){
//         return [];
//     }
//
//     let resulLenght= Math.ceil(arr.length/2)
//     let result = new Array(resulLenght)
//     let resultIndex = 0
//
//
//     for(let i = arr.length -1; i > 0; i -= 2){
//         result[resultIndex] = arr[i] + arr[i - 1];
//         resultIndex++
//     }
//     if(arr.length % 2 !== 0){
//         result[resultIndex] = arr[0];
//
//     }
//     return result.reverse();
// }

// function reverseArray(arr){
//     return arr.reverse()
// }

// function getAPhrase(arr){
//     let string = arr.filter(el => typeof el === 'string');
//     return string.reverse().join(' ');
// }

// function reversedArray(arr){
//     return arr.reverse();
// }

// function findNumbers(arr){
//     let odd = [];
//     let even = [];
//     for(let i of arr){
//         if(typeof i === 'number'){
//             if(i % 2 === 0){
//                 even.unshift(i)
//             } else {
//                 odd.unshift(i)
//             }
//         }
//     }
//     return [even, odd]
// }

// function getDifference(arr){
//     if(arr.length == 0){
//         return 0;
//     }
//     let lsNum = arr[arr.length -1]
//     for(let i = 0; i < arr.length -1; i++){
//         lsNum -= arr[i];
//     }
//     return lsNum;
// }

// test

// function findNumbersAndDifference(arr){
//     let lsNum = null;
//     let diff = 0;
//     for(let i = arr.length -1; i >= 0; i--){
//         if(typeof arr[i] === 'number'){
//             if(lsNum == null){
//                 lsNum = arr[i]
//             }else{
//                 diff -= arr[i]
//             }
//         }
//     }
//     return diff + (lsNum || 0);
// }

// function stringLengthsDif(arr) {
//     let difference = 0;
//     let lastStr = 0;
//
//     for (let i = arr.length -1; i >= 0; i--) {
//         if (typeof arr[i] === 'string') {
//             if(lastStr === 0){
//                 lastStr = arr[i].length;
//             } else {
//                 difference -= arr[i].length;
//             }
//         }
//     }
//     return difference += lastStr;
// }

// function getAPhrase(arr){
//     let arr1 = [];
//     for(let i = arr.length -1; i >= 0; i--){
//         if(typeof arr[i] === 'string'){
//             arr1.push(arr[i]);
//         } else if (typeof arr[i] === 'boolean'){
//             arr1.push('oops');
//         }
//     }
//     return arr1.join(' ');
// }

// function countFees(arr){
//     let overallApartments = 0;
//     let sumOfPayments = 0;
//     for(let i of arr){
//         if(i.hasOwnProperty('apartment') && i.hasOwnProperty('condoFee')){
//             overallApartments++;
//             sumOfPayments += i.condoFee;
//         }
//     }
//     return {overallApartments: overallApartments,
//         sumOfPayments: sumOfPayments
//     }
// }

// function sumOfNumbers(arr){
//     let sum = 0;
//     for(let i of arr){
//         sum += i
//     }
//     return sum;
// }

// function sumOfPosAndNeg(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sumPos = 0;
//     let sumNeg = 0;
//     for(let i of arr){
//         if(i < 0){
//             sumNeg += i;
//         } else if(i > 0){
//             sumPos += i;
//         }
//     }
//     return [sumPos, sumNeg]
// }

// function sumOfEvenAndOdd(arr){
//     if(arr.length === 0){
//         return 'Array has no numbers';
//     }
//     let sumOdd = 0;
//     let sumEven = 0;
//     for(let i of arr){
//         if(i % 2 !== 0){
//             sumOdd += i;
//         } else {
//             sumEven += i;
//         }
//     }
//     return `Sum of even numbers is ${sumEven}, sum of odd numbers is ${sumOdd}`
// }

// function sumOfNumbers(arr){
//     if(arr.length === 0){
//         return 'Empty array';
//     }
//     let sum = 0;
//     for(let i of arr){
//         if(typeof i === 'number'){
//             sum += i;
//         }
//     }
//     return sum;
// }

// function sumOfNumbers(arr1, arr2, arr3){
//     let sum = 0;
//     let arr = arr1.concat(arr2, arr3);
//     if(arr1.length === 0 && arr2.length === 0 && arr3.length === 0){
//         return 'All arrays are empty';
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// function sumOfNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     for(let i of arr){
//         if(typeof i !== 'boolean' && !isNaN(i)){
//             sum += Number(i)
//         }
//     }
//     return sum;
// }

// function sumOfNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     for(let i of arr){
//         for(let j of i){
//             sum += j;
//         }
//     }
//     return sum;
// }

// function sumOfNumbers(arr){
//     if(arr.length == 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     for(let i of arr){
//         if(Array.isArray(i)){
//             for(let j of i){
//                 sum += j;
//             }
//         }else{
//             sum += i;
//         }
//     }
//     return sum;
// }

// function sumOfNumbers(arr){
//     let sum = 0;
//     for(let i of arr){
//         if((i > 99 && i < 999) || (i < -99 && i > -999)){
//             sum += i;
//         }
//     }
//     return sum;
// }

// function sumOfNumbers(arr){
//     let sum = 0;
//     for(let i of arr){
//         if(String(i)[0] === '5'){
//             sum += i;
//         }
//     }
//     return sum;
// }

// const arr = [1, 2, 3, 4, 5];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }
// for(let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// function average(arr){
//     if(arr.length === 0){
//         return 'Empty array';
//     }
//     let sum = 0;
//     for(let i of arr){
//         sum += Math.round(i);
//     }
//     return Math.round(sum / arr.length);
// }

// function averageEven(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     let even = 0;
//     for(let i of arr){
//         if(i % 2 === 0){
//             even++;
//             sum += i;
//         }
//     }
//     if(even === 0){
//         return 0;
//     } else {
//         return Math.floor(sum / even);
//     }
// }

// function averageOdd(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     let odd = 0;
//     for(let i of arr){
//         if(i % 2 !== 0){
//             odd++;
//             sum += i;
//         }
//     }
//     if(odd === 0){
//         return 0;
//     }
//     return Math.ceil(sum / arr.length);
// }

// function averageDes(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     let count = 0;
//     for(let i of arr){
//         if(!Number.isInteger(i)){
//             sum += i;
//             count++
//         }
//     }
//     if(count === 0){
//         return 0;
//     }
//     return +(sum / count).toFixed(2)
// }

// function average3Digit(arr) {
//     if (arr.length === 0) return 'Array is empty';
//     let sum = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] >= 100 && arr[i] <= 999 || arr[i] <= -100 && arr[i] >= -999) {
//             sum += arr[i];
//             count++;
//         }
//     }
//     if(count === 0){
//         return 0;
//     }
//     return Math.floor(sum / count);
// }

// function averageNegative(arr){
//     let sum = 0;
//     let count = 0;
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i of arr){
//         if(i < 0){
//             sum += i;
//             count++
//         }
//     }
//     if(count === 0){
//         return 0;
//     }
//     return Math.round(sum / count);
// }

// function averageNegativeEven(arr){
//     let sum = 0;
//     let count = 0;
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i of arr){
//         if(i % 2 === 0 && i < 0){
//             sum += i;
//             count++
//         }
//     }
//     if(count === 0){
//         return 0;
//     }
//     return Math.floor(sum / count);
// }

// function averageFromStartToMiddle(arr){
//     if(arr.length === 0) return 'Array is empty';
//     if (arr.length < 2) return 'Array is not long enough';
//     let middle = Math.floor(arr.length / 2);
//     let sum = 0;
//     for (let i = 0; i < middle; i++) {
//         sum += arr[i];
//     }
//     return Math.round(sum / middle);
// }

// function averageInSubArr(arr){
//     let sum = 0;
//     let count = 0;
//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j < arr[i].length; j++) {
//             sum += arr[i][j];
//             count++;
//         }
//     }
//     if (count === 0) return 'Arrays are empty';
//     return Math.round(sum / count);
// }

// function averageStringNum(arr){
//     let sum = 0;
//     let count = 0;
//     let symbols = '0123456789';
//     for (let i = 0; i < arr.length; i++) {
//         for (let j = 0; j < symbols.length; j++) {
//             if (arr[i] === symbols[j]) {
//                 sum += +arr[i];
//                 count++;
//                 break;
//             }
//         }
//     }
//     if (count === 0) return 'There are no numbers';
//     return Math.round(sum / count);
// }

// const arr = [1, '2', 3, NaN, 'four', 5, true];
// let acc = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (!Number.isNaN(+arr[i])) acc += +arr[i];
// }
// console.log(acc);

// const arr = [1, '2', 3, NaN, 'four', 5, true];
// let acc = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
//         acc += arr[i];
//     }
// }
// console.log(acc);

// const arr = [NaN, 3, false, -7, true, 'five', -5, '11'];
// let acc = 0;
// let count = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
//         acc += arr[i];
//         count++;
//     }
// }
// console.log(acc / count);

// function average(arr){
//     let acc = 0;
//     let count = 0;
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = +arr[i];
//         if (typeof arr[i] === 'number' && !Number.isNaN(arr[i])) {
//             acc += arr[i];
//             count++;
//         }
//     }
//     return acc / count;
// }
// console.log(average(['1', '2', '6']));

// function findMinNumber(arr){
//     if(arr.length == 0){
//         return undefined;
//     }
//     let min = arr[0];
//     for(let i of arr){
//         if(i < min){
//             min = i;
//         }
//     }
//     return min;
// }

// function findMaxNumber(arr){
//     if(arr.length === 0){
//         return undefined;
//     }
//     let max = arr[0];
//     for(let i of arr){
//         if(i > max){
//             max = i;
//         }
//     }
//     return max;
// }

// function minAndMaxOfNegatives(arr){
//     if(arr.length === 0){
//         return [undefined, undefined];
//     }
//     let arr1 = [];
//     for(let i of arr){
//         if(i < 0){
//             arr1.push(i);
//         }
//     }
//     let min = arr1[0];
//     let max = arr1[0];
//     for(let i of arr1){
//         if(i < min){
//             min = i;
//         } if(i > max){
//             max = i;
//         }
//     }
//     return [min, max];
// }

// function minAndMaxOfPositive(arr){
//     if(arr.length === 0){
//         return [undefined, undefined];
//     }
//     let arr1 = [];
//     for(let i of arr){
//         if(i > 0){
//             arr1.push(+i);
//         }
//     }
//     let min = arr1[0];
//     let max = arr1[0];
//     for(let i of arr1){
//         if(i < min){
//             min = i;
//         } if(i > max){
//             max = i;
//         }
//     }
//     return [min, max];
// }

// function minAndMax(arr1, arr2){
//     let arr = arr1.concat(arr2);
//     if(arr.length === 0){
//         return [undefined, undefined];
//     }
//     let min = arr[0];
//     let max = arr[0];
//     for(let i of arr){
//         if(i < min){
//             min = i;
//         }
//         if(i > max){
//             max = i;
//         }
//     }
//     return [min, max];
// }

// function minAndMax(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     if(arr.length === 1){
//         return 'Array has only one element';
//     }
//     let middle = Math.floor(arr.length / 2);
//     let min = arr[0];
//     for(let i = 0; i < middle; i++){
//         if(arr[i] < min){
//             min = arr[i];
//         }
//     }
//     let max = arr[middle];
//     for(let i = middle; i < arr.length; i++){
//         if(arr[i] > max){
//             max = arr[i];
//         }
//     }
//     return [min, max]
// }

// function minAndMax(arr1, arr2){
//     let min = arr1[0];
//     for(let i of arr1){
//         if(i < min){
//             min = i;
//         }
//     }
//     let max = arr2[0];
//     for(let i of arr2){
//         if(i > max){
//             max = i;
//         }
//     }
//     return [min, max]
// }

// function minAndMax(arr1, arr2){
//     let min1 = arr1[0];
//     let max1 = arr1[0];
//     for(let i of arr1){
//         if(min1 > i){
//             min1 = i;
//         } if(max1 < i){
//             max1 = i;
//         }
//     }
//     let min2 = arr2[0];
//     let max2 = arr2[0];
//     for(let i of arr2){
//         if(min2 > i){
//             min2 = i;
//         } if(max2 < i){
//             max2 = i;
//         }
//     }
//     if((max1 - min1) > (max2 - min2)){
//         return [min1, max1];
//     }
//     else if((max1 - min1) < (max2 - min2)){
//         return [min2, max2];
//     } else {
//         return [min1, max1, min2, max2];
//     }
// }

// function minAndMax(arr1, arr2){
//     let arr = arr1.concat(arr2);
//     if(arr.length === 0){
//         return null;
//     }
//     let max = arr[0];
//     let min = arr[0];
//     for(let i of arr){
//         if(i < min){
//             min = i;
//         } if (i > max){
//             max = i;
//         }
//     }
//     return [min, max];
// }

// function minAndMax(arr1, arr2){
//     let newArr = [...arr1, ...arr2];
//     if(!newArr.length) return 'Both arrays are empty';
//     let min = undefined;
//     let max = undefined;
//
//     for(let i = 0; i < newArr.length; i++){
//         if ( newArr[i] !== '' && !isNaN(newArr[i]) ) {
//             if(min === undefined) {
//                 min = +newArr[i];
//                 max = +newArr[i];
//             } else {
//                 if(newArr[i] < min) min = +newArr[i];
//                 if(newArr[i] > max) max = +newArr[i];
//             }
//         }
//     }
//     return [min, max];
// }

// const arr = [-1, -3, -5, 0];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);

// const arr = [7.3, 7.5, 7.7, 7.4, 7];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// function minAndMax(arr){
//     let min = arr[arr.length - 1];
//     let max = arr[arr.length - 1];
//     for (let i = arr.length - 1; i >= 0; i--) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//     }
//     return [min, max];
// }
// console.log(minAndMax([-5, -13, 77, 91, 11]));

// function secondMinNumber(arr){
//     if(arr.length === 0) return false;
//     let min = arr[0];
//     let secondMin = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min){
//             secondMin = min;
//             min = arr[i];
//         } else if((secondMin === min || arr[i] < secondMin) && arr[i] !== min){
//             secondMin = arr[i];
//         }
//     }
//
//     if(secondMin === min) return 'There is no second min number';
//     else return secondMin;
// }

// function secondMaxNumber(arr){
//     if(arr.length === 0) return false;
//     let max = arr[0];
//     let secondMax = arr[0];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] > max){
//             secondMax = max;
//             max = arr[i];
//         } else if((secondMax === max || arr[i] > secondMax) && arr[i] !== max){
//             secondMax = arr[i];
//         }
//     }
//
//     if(secondMax === max) return 'There is no second max number';
//     else return secondMax;
// }

// function secondMinNumber(arr){
//     if( arr.length === 0 ) return 'Array is empty';
//     let min = arr[0];
//     let secondMin = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min) min = arr[i];
//     }
//
//     for(let i = 1; i < arr.length; i++){
//         if((secondMin === min || arr[i] < secondMin) && arr[i] !== min) secondMin = arr[i];
//     }
//
//     if( secondMin === min ) return 'There is no second min number';
//     else return secondMin;
// }

// function secondMaxNumber(arr){
//     if( arr.length === 0 ) return 'Array is empty';
//     let max = arr[0];
//     let secondMax = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] > max) max = arr[i];
//     }
//
//     for(let i = 1; i < arr.length; i++){
//         if((secondMax === max || arr[i] > secondMax) && arr[i] !== max) secondMax = arr[i];
//     }
//
//     if( secondMax === max ) return 'There is no second max number';
//     else return secondMax;
// }

// function secondMinPositive(arr){
//     if(arr.length == 0) return 'Array is empty';
//     let min = Infinity
//     let secondMin = Infinity;
//
//     for(let i = 0; i < arr.length; i++){
//
//         if(arr[i] > 0){
//             if(arr[i] < min) {
//                 secondMin = min;
//                 min = arr[i]
//             } else if(arr[i] < secondMin && arr[i] !== min){
//                 secondMin = arr[i]
//             }
//         }
//
//     }
//
//     if(min === Infinity) return 'There is no positive numbers';
//     if(secondMin === Infinity) return 'There is no second min positive number';
//     return secondMin;
// }

// function secondMaxNegative(arr){
//     if(arr.length == 0) return 'Array is empty';
//     let max = -Infinity
//     let secondMax = -Infinity;
//
//     for(let i = 0; i < arr.length; i++){
//
//         if(arr[i] < 0){
//             if(arr[i] > max) {
//                 secondMax = max;
//                 max = arr[i]
//             } else if(arr[i] > secondMax && arr[i] !== max){
//                 secondMax = arr[i]
//             }
//         }
//     }
//
//     if(max === -Infinity) return 'There is no negative numbers';
//     if(secondMax === -Infinity) return 'There is no second max negative number';
//     return secondMax;
// }

// function filterAndAdd(arr, ...elementsToAdd){
//     let filteredArr = elementsToAdd.filter(el => typeof el === 'number');
//     let res = arr.toSpliced(arr.length, 0, ...filteredArr);
//     return res;
// }

// function rearrangeArray(arr, indexFrom, indexTo){
//     if(arr.length <= indexFrom || arr.length <= indexTo || 0 > indexFrom || 0 > indexTo){
//         return 'Index is out of range';
//     }
//     let arrCopy = arr.slice();
//     let el =  arrCopy[indexFrom];
//     arrCopy.splice(indexFrom, 1);
//     arrCopy = arrCopy.toSpliced(indexTo, 0, el);
//     return arrCopy;
// }

// let fruits = ["Apple", "Banana"];
// console.log(fruits);
//
// let newLength = fruits.unshift("Orange");
// console.log(fruits);
// console.log(newLength);

// function integrateElements(arr, position, element){
//     if(position < 0 || position > arr.length){
//         return 'Position is out of bounds'
//     }
//     return arr.toSpliced(position, 0, ...element);
// }

// function updateSegment(array, start, deleteCount, newElements){
//     return array.toSpliced(start, deleteCount, ...newElements);
// }

// function mergeAndSplit(array, insertAt, elementsToInsert, deleteFrom, deleteCount){
//     let merged = array.toSpliced(insertAt, 0, ...elementsToInsert);
//     let newArray = merged.toSpliced(deleteFrom, deleteCount);
//     return {
//         merged: merged,
//         newArray: newArray
//     };
// }

// function combineAndFilter(list1, list2, exclusions){
//     let combinedList = list1.concat(...list2);
//     let filteredList = combinedList.filter(item => !exclusions.includes(item));
//     return filteredList;
// }

// function filterAndAppend(arr, filterOut, toAdd){
//     const filteredArr = arr.filter(el => !filterOut.includes(el));
//     let res = filteredArr.concat(toAdd);
//     return res;
// }

// function flexibleModifyAndTrack(originalArray, operations){
//     let arrCopy = originalArray.slice();
//     let changes = [];
//     operations.forEach(op => {
//         let { start, deleteCount, items } = op;
//         let removedItems = arrCopy.splice(start,deleteCount, ...items);
//         changes.push({
//             added: items,
//             removed: removedItems
//         });
//     });
//     return {
//         finalArray: arrCopy,
//         changes: changes
//     };
// }

// <!DOCTYPE html>
// <head>
// <title>Anna Dowlin</title>
// <style>
//     body {
//     text-align: center;
//     background: url("http://dash.ga.co/assets/anna-bg.png");
//     background-size: cover;
//     background-position: center;
//     color: white;
//     font-family: helvetica;
// }
//     p {
//     font-size: 22px;
// }
//     input {
//     border: 0;
//     padding: 10px;
//     font-size: 18px;
// }
//     input[type="submit"] {
//     background: red;
//     color: white;
// }
// </style>
// </head>
// <body>
// <img src="/assets/anna.png">
//     <p>Hi! I'm Anna, a NYC-based marketer. Say hello!</p>
//     <input type="email" placeholder="Your email">
//         <input type="submit">
// </body>

// <!DOCTYPE html>
// <head>
// <link href="/normalize.css" rel="stylesheet">
//     <style>
//     header {
//     text-align: center;
//     background: url('http://dash.ga.co/assets/jeff-bg.png');
//     background-size: cover;
//     color: white;
// }
// a {
//     color: white;
// }
// h1 {
//     font-size: 70px;
// }
// img {
//     margin: 40px 0px 0px 0px;
//     border: 7px solid white;
//     border-radius: 20px;
// }
// ul {
//     padding: 10px;
//     background: rgba(0,0,0,0.5);
// }
// li {
//     display: inline;
//     padding: 0px 10px 0px 10px;
// }
// article {
//     max-width: 500px;
//     padding: 20px;
//     margin: 0 auto;
// }
// @media (max-width: 500px) {
//     h1 {
//         font-size: 36px;
//         padding: 5px;
//     }
//     li {
//         padding: 5px;
//         display: block;
//     }
// }
// </style>
// </head>
// <body>
// <header>
//     <img src="/assets/jeff.png">
//         <h1>Jeff's Blog</h1>
//         <ul>
//             <li><a href="#">About Me</a></li>
//             <li><a href="#">Best Poems</a></li>
//             <li><a href="#">Worst Poems</a></li>
//         </ul>
// </header>
// <article>
//     <h2>VHS umami pop-up trust fund</h2>
//     <p>Marfa church-key kitsch bicycle rights, 8-bit mixtape cardigan gentrify Echo Park. Street art swag brunch, next level roof party Schlitz hella organic keffiyeh selfies. You probably haven't heard of them polaroid hashtag +1, meggings biodiesel Portland High Life cray tumblr retro.</p>
//     <button>Like</button>
// </article>
// <article>
//     <h2>Sartorial synth Echo Park, roof party</h2>
//     <p>chambray you probably haven't heard of them pour-over viral selvage umami skateboard VHS post-ironic selfies. Wes Anderson gentrify fanny pack twee, bicycle rights bitters blog keffiyeh plaid flannel. Tonx irony cliche sustainable mlkshk bitters. Four loko leggings chambray Vice.</p>
//     <button>Like</button>
// </article>
// <article>
//     <h2>Forage food truck keytar master cleanse</h2>
//     <p>ethical thundercats sustainable locavore quinoa Neutra. Aesthetic tacky sweater single-origin coffee, bicycle rights organic lo-fi street art american apparel ennui four loko ethnic Brooklyn small batch. Forage YOLO polaroid</p>
//     <button>Like</button>
// </article>
// <script>
//     $("button").on("click", function() {
//     alert("Clicked!");
// });
// </script>
// </body>

// let numbers = [1, 2, 3, 4, 5];
// numbers.reverse();
// console.log(numbers);

// const original = ['!!!', 'world', 'hello'];
// const result = original.reverse();
//
// console.log(result);
// console.log(original);

// let original = [1, 2, 3, 4, 5];
// let reversed = [...original].reverse();
// console.log(original);
// console.log(reversed);

// const originalArray = [1, 2, 3, 4, 5];
//
// const reversedArray = originalArray.toReversed();
// console.log(reversedArray);
// console.log(originalArray);

// <!DOCTYPE html>
//
// <head>
// <script src="/assets/jquery.js"></script>
// <link href='https://fonts.googleapis.com/css?family=Londrina+Shadow' rel='stylesheet' type='text/css'>
//     <style>
//         body {
//         font-family: helvetica, sans-serif;
//         margin: 0 auto;
//         max-width: 600px;
//         background: #232323;
//     }
//         div {
//         height: 200px;
//         background-size: cover;
//         position: relative;
//         margin: 40px 0 0 0;
//         border-radius: 12px;
//     }
//         h1 {
//         font-family: 'Londrina Shadow', cursive;
//         text-align: center;
//         font-size: 75px;
//         color: #aaaaaa;
//         margin: 60px 0 0 0;
//     }
//         h2 {
//         text-align: center;
//         color: #bbbbbb;
//         margin: 0px 0 70px 0;
//     }
//         small{
//         opacity: 0;
//     }
//         .show-description p{
//         height: 150px;
//     }
//         .show-description small{
//         opacity: 1;
//     }
//         p {
//         color: rgba(255,255,255,1);
//         height: 30px;
//         transition: height .5s;
//         -webkit-transition: height .5s;
//         -moz-transition: height .5s;
//         background: black;
//         background: linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,.4));
//         background: -webkit-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,.4));
//         background: -moz-linear-gradient(bottom, rgba(0,0,0,1), rgba(0,0,0,.4));
//         padding: 10px;
//         line-height: 28px;
//         text-align: justify;
//         position: absolute;
//         bottom: 0;
//         margin: 0;
//     }
//
//         .first{
//         background-image: url("http://dash.ga.co/assets/firstcourse.jpg");
//     }
//         .second{
//         background-image: url("http://dash.ga.co/assets/secondcourse.jpg");
//     }
//         .dessert{
//         background-image: url("http://dash.ga.co/assets/dessertcourse.jpg");
//     }
//         .price {
//         float: right;
//     }
//         @media(max-width: 500px){
//         h1{
//         font-size: 50px;
//         margin-top: 20px;
//         line-height: 40px;
//     }
//         h2{
//         font-size: 20px;
//         margin: 20px 0 30px 0;
//     }
//         div{
//         margin: 20px 12px 0 12px;
//     }
//         p{
//         font-size: 20px;
//         line-height: 24px;
//     }
//         small{
//         font-size: 16px;
//     }
//     }
//     </style>
//
// </head>
//
// <body>
// <h1>esha's restaurant</h1>
// <h2>a New York City eatery</h2>
// <div class="first">
//     <p>welsh onion soko <span class="price">$14</span><br />
//         <small>Mustard sierra leone bologi kale chard beet greens black-eyed pea sorrel amaranth garlic tigernut spring onion summer purslane asparagus lentil. </small></p>
// </div>
//
// <div class="second">
//     <p>pastrami boudin tongue <span class="price">$22</span><br />
//         <small>Tri-tip capicola kielbasa salami brisket chicken rump strip steak drumstick. Meatloaf chuck boudin ribeye pork jowl. Andouille bacon jowl meatloaf pork loin prosciutto bresaola.</small></p>
// </div>
//
// <div class="dessert">
//     <p>fruitcake marzipan pudding dragee <span class="price">$8</span><br />
//         <small>Lollipop tart cotton candy jelly-o carrot cake apple pie cupcake. Jelly-o bear claw ice cream candy canes.</small></p>
// </div>
// <script>
//     $("div").on("click", function(){
//     $(this).toggleClass("show-description");
// });
// </script>
// </body>

// <!DOCTYPE html>
//
// <head>
// <link href='https://fonts.googleapis.com/css?family=Poller+One' rel='stylesheet' type='text/css'>
//     <script src="/assets/jquery.js"></script>
// <style>
//
//     body{
//     background: rgba(red, green, blue, 1);
// }
//
//     .robot {
//     position: relative;
//     left: 200px;
// }
//
//     .beep {
//     width: 5px;
//     height: 0;
//     border: 5px solid transparent;
//     border-top: 10px solid #777;
//     border-bottom: 80px solid #888;
//     position: relative;
//     left: 140px;
// }
//
//     img {
//     position: absolute;
//     top: 200px;
//     left: 400px;
// }
//
//
//     @keyframes blink {
//     50% {
//         background: radial-gradient(circle, red 15%, transparent 40%), #cc5;
// }
// }
//     @-webkit-keyframes blink {
//     50% {
//         background: -webkit-radial-gradient(circle, red 15%, transparent 40%), #cc5;
// }
// }
//     @-moz-keyframes blink {
//     50% {
//         background: -moz-radial-gradient(circle, red 15%, transparent 40%), #cc5;
// }
// }
//     .laser {
//     animation: blink .5s infinite;
//     -webkit-animation: blink .5s infinite;
//     -moz-animation: blink .5s infinite;
// }
//     .brain {
//     background: radial-gradient(circle, white 15%, transparent 40%), #cc5;
//     background: -moz-radial-gradient(circle, white 15%, transparent 40%), #cc5;
//     background: -webkit-radial-gradient(circle, white 15%, transparent 40%), #cc5;
//     background-size: 75px 150px;
//     height: 150px;
//     width: 150px;
//     border-radius: 60px 60px 10px 10px;
//     border-bottom: 40px solid #666;
//     position: relative;
//     left: 70px;
// }
//     .torso {
//     height: 0;
//     width: 140px;
//     border-top: 300px solid #bc6;
//     border-left: 75px solid transparent;
//     border-right: 75px solid transparent;
//     border-radius: 20px 20px 100px 100px;
// }
//     .left {
//     font-family: 'Poller One', verdana, arial, sans-serif;
//     font-weight: bold;
//     font-size: 250px;
//     color: #666;
//     transform: rotate(200deg);
//     -webkit-transform: rotate(200deg);
//     -moz-transform: rotate(200deg);
//     position: relative;
//     top: -320px;
//     left: -190px;
//     z-index: -1;
// }
//     .right {
//     font-family: 'Poller One', verdana, arial, sans-serif;
//     font-weight: bold;
//     font-size: 250px;
//     color: #666;
//     transform: scaleY(-1) rotate(20deg);
//     -webkit-transform: scaleY(-1) rotate(20deg);
//     -moz-transform: scaleY(-1) rotate(20deg);
//     position: relative;
//     top: -620px;
//     left: 190px;
//     z-index: -1;
// }
//     .foot {
//     height: 40px;
//     width: 40px;
//     background: #ccc;
//     border-radius: 40px;
//     border: 15px solid #999;
//     position: relative;
//     left: 110px;
//     top: -10px;
//     z-index: -1;
// }
//
//     @keyframes dance{
//     from {
//     left: 800px;
// }
// }
//
//     @-webkit-keyframes dance{
//     from{
//     left: 800px;
// }
// }
//
//     @-moz-keyframes dance{
//     from{
//     left: 800px;
// }
// }
//
//     img {
//     animation: dance 4s infinite;
//     -webkit-animation: dance 4s infinite;
//     -moz-animation: dance 4s infinite;
//     position: absolute;
//     top: 200px;
//     left: 400px;
//
// }
//
// </style>
// </head>
//
// <body>
//
// <div class="robot">
//     <div class="beep"></div>
//     <div class="brain"></div>
//     <div class="torso">
//         <div class="left">j</div>
//         <div class="right">j</div>
//     </div>
//     <div class="foot"></div>
// </div>
//
// <button class="flash">laser eyes on/off</button>
// <button class="color">change color!</button>
// <button class="moves">break/dance</button>
//
// <img src="/assets/dance_cotter.gif">
//     <script>
//         // When eyes button is clicked, toggle laser class on brain
//         $(".flash").click(function() {
//         $(".brain").toggleClass('laser');
//     });
//
//         // When color button is clicked, generate on RGBA value
//         $(".color").click(function() {
//         // Assign each named color a random number 0-255
//         var red = Math.floor(Math.random() * 255);
//         var green = Math.floor(Math.random() * 255);
//         var blue = Math.floor(Math.random() * 255);
//
//         // Generate an RGBA value from red, green and blue
//         var randomRGBA = 'rgba('+red+','+green+','+blue+', 1)';
//
//         // Display the RGBA value in an alert window
//         //alert(randomRGBA);
//
//         $("body").css("background", randomRGBA);
//         alert(randomRGBA);
//
//         $(".moves").click(function() {
//         $("img").toggle();
//     });
//
//     });
//     </script>
// </body>

// <!DOCTYPE html>
//
// <head>
// <link href='https://fonts.googleapis.com/css?family=Fjalla+One' rel='stylesheet' type='text/css'>
//
//     <link href='https://fonts.googleapis.com/css?family=Shadows+Into+Light' rel='stylesheet' type='text/css'>
//     <script src="/assets/jquery.js"></script>
// <style>
//     body{
//     text-align:center;
//     font-family: 'Fjalla One';
//     font-size: 20px;
//     background: #e6eaf0;
// }
//     button{
//     margin: 40px;
// }
//     input{
//     font-size: 24px;
// }
//     .fill{
//     background: white;
//     color: red;
//     border-bottom: 2px black solid;
//     font-family: 'Shadows Into Light';
//     padding: 0 6px;
//     margin: 4px;
// }
// </style>
// </head>
//
// <body>
// <div class="prompt"></div>
// <button>Next</button>
// <script>
//
//
//     // List of prompts for the user
//     var prompts = [
//     'Type your name',
//     'Type an adjective',
//     'Type a noun'
//     ];
//
//     var answers=[];
//     // Keep track of current prompt we're on
//     var currentPrompt = 0;
//
//     // A function that will call the next prompt
//     var nextPrompt = function() {
//     //if there's no answer in the form
//     if (currentPrompt != 0){
//     answers.push($('input').val());
// }
//     // if there is a next prompt
//     if (currentPrompt < prompts.length) {
//     // put first prompt in all html elements with class
//     $('.prompt').html(prompts[currentPrompt] +'<br><input type="text">');
//     // move the next prompt into variable currentPrompt
//     currentPrompt = currentPrompt + 1;
// }
//     //or else if we're at the end of the array
//     else {
//     // put a new message into the html.
//     showFinal();
// }
// }
//
//     //puts user answers into HTML
//     var showFinal = function() {
//     $('.prompt').html('This is the story of <span class="fill">'+answers[0]+'</span> and the <span class="fill">'+answers[1]+'</span> <span class="fill">'+answers[2]+'</span>.');
//     //and then hide the button
//     $('button').hide();
// }
//     // run nextPrompt function when button is clicked
//     $('button').click(function() {
//     nextPrompt();
// });
//
//     // Show the first prompt as soon as js loads
//     nextPrompt();
// </script>
//
// </body>

// <!DOCTYPE html>
// <html>
// <head>
// <title>{Title}</title>
//
// <style>
//     header {
//     background: url(http://dash.ga.co/assets/gene-bg.png);
// }
//     header a {
//     text-decoration: none;
//     color: #fff;
// }
//     h1 {
//     display: inline;
//     position: absolute;
//     top: 60px;
//     font-size: 42px;
//     color: #fff;
// }
//     h2 {
//     display: inline;
//     color: #fff;
//     position: absolute;
//     top: 120px;
//     font-size: 20px;
// }
//     body {
//     background: #eee;
//     font-family: sans-serif;
// }
//     .post {
//     background: #fff;
//     margin: 40px auto;
//     padding: 20px;
//     border-radius: 6px;
//     width: 640px;
// }
//     .avatar {
//     margin: 60px 30px;
//     border-radius: 100%;
// }
//     .container {
//     max-width: 640px;
//     margin: 0 auto;
// }
//     .like-reblog {
//     list-style: none;
//     border: 1px solid #ccc;
// }
//     .like-reblog li {
//     float: right;
//     padding: 6px;
//     height: 20px;
// }
//     .page{
//     background: #222;
//     padding: 20px;
// }
//     .page a{
//     text-decoration: none;
//     color: #eee;
// }
//     .pagelist{
//     margin: 0 auto;
//     width: 640px;
// }
// </style>
// </head>
//
// <body>
// <header>
//     <div class="container">
//         <img class="avatar" src="{PortraitURL-128}">
//             <h1><a href="{BlogURL}">{Title}</a></h1>
//             {block:Description}
//             <h2>{Description}</h2>
//             {/block:Description}
//                 </div>
//                 </header>
//
//             {block:HasPages}
//             <div class="page">
//                 {block:Pages}
//                 <div class="pagelist">
//                     <a href="{URL}">{Label}</a>
//                 </div>
//                 {/block:Pages}
//                     </div>
//                 {/block:HasPages}
//
//                 {block:Posts}
//
//                 {block:Text}
//                     <div class="post">
//                 {block:Title}
//                 <h3>
//                     <a href="{Permalink}">{Title}</a>
//                 </h3>
//                 {/block:Title}
//                 {Body}
//                     <ul class="like-reblog">
//                     <li>{LikeButton}</li>
//             <li>{ReblogButton}</li>
//             <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//                 </ul>
//                 </div>
//             {block:PostNotes}{PostNotes}{/block:PostNotes}
//             {/block:Text}
//
//             {block:Photo}
//                 <div class="post">
//                 <img src="{PhotoURL-500}">
//             {block:Caption}{Caption}{/block:Caption}
//                 <ul class="like-reblog">
//                 <li>{LikeButton}</li>
//             <li>{ReblogButton}</li>
//             <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//                 </ul>
//                 </div>
//             {block:PostNotes}{PostNotes}{/block:PostNotes}
//             {/block:Photo}
//
//             {block:Quote}
//                 <div class="post">
//             {Quote}
//                 {block:Source}<br>&mdash;{Source}{/block:Source}
//                     <ul class="like-reblog">
//                     <li>{LikeButton}</li>
//             <li>{ReblogButton}</li>
//             <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//                 </ul>
//                 </div>
//             {block:PostNotes}{PostNotes}{/block:PostNotes}
//             {/block:Quote}
//
//             {block:Link}
//                 <div class="post">
//                 <a href="{URL}" {Target}>{Name}</a>
//             {block:Description}{Description}{/block:Description}
//             <ul class="like-reblog">
//             <li>{LikeButton}</li>
//         <li>{ReblogButton}</li>
//         <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//             </ul>
//             </div>
//         {block:PostNotes}{PostNotes}{/block:PostNotes}
//         {/block:Link}
//
//         {block:Chat}
//             <div class="post">
//         {block:Title}{Title}{/block:Title}
//             <table>
//         {block:Lines}
//             <tr>
//                 <th>{block:Label}{Label}{/block:Label}</th>
//                     <td>{Line}</td>
//                     </tr>
//                 {/block:Lines}
//                     </table>
//                     <ul class="like-reblog">
//                     <li>{LikeButton}</li>
//         <li>{ReblogButton}</li>
//         <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//             </ul>
//             </div>
//         {block:PostNotes}{PostNotes}{/block:PostNotes}
//         {/block:Chat}
//
//         {block:Audio}
//             <div class="post">
//         {AudioPlayer}
//             {block:Caption}{Caption}{/block:Caption}
//                 <ul class="like-reblog">
//                 <li>{LikeButton}</li>
//         <li>{ReblogButton}</li>
//         <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//             </ul>
//             </div>
//         {block:PostNotes}{PostNotes}{/block:PostNotes}
//         {/block:Audio}
//
//         {block:Video}
//             <div class="post">
//         {Video-500}
//             {block:Caption}{Caption}{/block:Caption}
//                 <ul class="like-reblog">
//                 <li>{LikeButton}</li>
//         <li>{ReblogButton}</li>
//         <li>{block:Date}<a href="{Permalink}">{TimeAgo}</a>{/block:Date}</li>
//             </ul>
//             </div>
//         {block:PostNotes}{PostNotes}{/block:PostNotes}
//         {/block:Video}
//
//         {/block:Posts}
//
//         {block:Pagination}
//             <div class="pagenav">
//         {block:PreviousPage}<a href="{PreviousPage}">Previous</a>{/block:PreviousPage}
//         {block:NextPage}<a href="{NextPage}">Next</a>{/block:NextPage}
//             </div>
//         {/block:Pagination}
//
//             </body>
//             </html>

// function findIndexWithMaxDigitSum(arr){
//     function digitSum(str){
//         return str
//             .split('')
//             .filter(char => /\d/.test(char))
//             .reduce((sum, digit) => sum + Number(digit), 0);
//     }
//     let maxSum = -1;
//     let maxIndex = -1;
//     arr.forEach((item, index) => {
//         if(!isNaN(item)){
//             const sum = digitSum(item);
//             if(sum > maxSum){
//                 maxSum = sum;
//                 maxIndex = index;
//             }
//         }
//     });
//     return maxIndex === -1 ? "No valid elements" : maxIndex;
// }

// function findFirstRepeatingIndex(arr){
//     const seen = new Set();
//     for(let i = 0; i < arr.length; i++){
//         if(seen.has(arr[i])){
//             return i;
//         }
//         seen.add(arr[i]);
//     }
//     return "No repeating elements";
// }

// function findIndexWithMostVowels(arr){
//     const vowels = "aeiou";
//     function countVowels(str){
//         return str.split('').filter(char => vowels.includes(char.toLowerCase())).length;
//     }
//     let maxVowels = 0;
//     let maxIndex = -1;
//     arr.forEach((item, index) => {
//         const vowelCount = countVowels(item);
//         if(vowelCount > maxVowels){
//             maxVowels = vowelCount;
//             maxIndex = index;
//         }
//     });
//     return maxIndex === -1 ? "No vowels found" : maxIndex;
// }

// function findIndexStartingWith(arr, subStr){
//     if(arr.length === 0){
//         return "Array is empty";
//     }
//     if(!subStr){
//         return "Subarray is undefined";
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].startsWith(subStr)){
//             return i;
//         }
//     }
//     return "No element found";
// }

// function findIndices(arr, ...elementsToFind){
//     const result = {};
//     const notFound = [];
//
//     elementsToFind.forEach((element) => {
//         const index = arr.indexOf(element);
//         if(index !== -1){
//             result[element] = index;
//         } else {
//             notFound.push(element);
//         }
//     });
//     if(notFound.length > 0){
//         result.notFound = notFound;
//     }
//     return result;
// }

// function findSubstringsIndices(arr, substring){
//     const result = [];
//     arr.forEach((item, index) => {
//         if(item.toLowerCase().includes(substring.toLowerCase())){
//             result.push([item, index]);
//         }
//     });
//     return result.length > 0 ? result : "No elements found"
// }

// function findLastIndex(arr, element){
//     return arr.lastIndexOf(element);
// }

// function findLastIndexIgnoreCase(arr, str){
//     const lowerStr = str.toLowerCase();
//     const lowerArr = arr.map(item => item.toLowerCase());
//     return lowerArr.lastIndexOf(lowerStr);
// }

// function findLastIndexByLength(arr, length){
//     const lengthsArray = arr.map(item => item.length);
//     const lastIndex = lengthsArray.lastIndexOf(length);
//     return {
//         modifiedArray: lengthsArray,
//         index: lastIndex
//     }
// }

// function findLastIndexInMultidimensionalArray(arr, element){
//     const flatArray = arr.flat(Infinity);
//     const lastIndex = flatArray.lastIndexOf(element);
//     return lastIndex;
// }

// function findLastIndexOfSquare(arr, num) {
//     const squaresArray = arr.map(item => item ** 2);
//     const lastIndex = squaresArray.lastIndexOf(num);
//     return lastIndex !== -1 ? lastIndex : "Not found";
// }

// function findLastIndexByProperty(arr, value){
//     const values = arr.map(obj => Object.values(obj)).flat();
//     const lastIndex = values.lastIndexOf(value);
//     return lastIndex !== -1 ? lastIndex : "Not found";
// }

// function findLastIndexAfterModification(arr, num){
//     let modifiedArray = arr.map(item => {
//         if(typeof item === 'number'){
//             return Math.round(Math.sqrt(item));
//         }
//         return item;
//     });
//     let lastIndex = modifiedArray.lastIndexOf(num);
//     return {
//         modifiedArray: modifiedArray,
//         lastIndex: lastIndex
//     }
// }

// function findLetterIndices(arr, letter){
//     let result = {};
//     arr.forEach((str, index) => {
//         const indices = [];
//
//         for(let i = 0; i < str.length; i++){
//             if(str[i] === letter){
//                 indices.push(i);
//             }
//         }
//         if(indices.length === 0){
//             result[str] = { indexOfString: index, indexOfLetter: 'Not found' };
//         } else if(indices.length === 1){
//             result[str] = { indexOfString: index, indexOfLetter: indices[0] };
//         } else {
//             result[str] = { indexOfString: index, firstIndexOfLetter: indices[0], lastIndexOfLetter: indices[indices.length -1] };
//         }
//     });
//
//     return result;
// }

// function findLastIndexOfModifiedString(arr, word){
//     let result = [];
//
//     for(let str of arr){
//         let newStr = '';
//
//         for(let i = 0; i < str.length; i++){
//             if(str[i] !== ' ' && newStr.length)
//                 newStr += ' ' + str[i];
//             else if(str[i] !== ' ')
//                 newStr += str[i];
//         }
//         result.push(newStr);
//     }
//     let lastIndex = -1;
//     arr.forEach((str, index) => {
//         let modifiedStr = str.split('').join(' ');
//
//         if(modifiedStr === word){
//             lastIndex = index;
//         }
//     });
//     return { modifiedString: result, index: lastIndex };
// }

// function findLastIndexByDigitSum(numbers, targetSum){
//     function sumOfDigits(num){
//         return num.toString().split('').reduce((sum, digit) => sum + parseInt(digit), 0);
//     }
//     let sumOfNumbers = numbers.map(sumOfDigits);
//     let index = -1;
//     for(let i = numbers.length - 1; i >= 0; i--){
//         if(sumOfNumbers[i] === targetSum){
//             index = i;
//             break;
//         }
//     }
//     return { sumOfNumbers, index }
// }

// const original = [1, 2, 3, 4, 5, 6];
// const evenNumbers = original.filter(number => number % 2 === 0);
//
// console.log(original);
// console.log(evenNumbers);

// const people = [
//     { name: "John", age: 25 },
//     { name: "Jane", age: 16 },
//     { name: "Jim", age: 30 }
// ];
//
// const adults = people.filter(person => person.age > 18);
// console.log(adults); // [ { name: "John", age: 25 }, { name: "Jim", age: 30 } ]

// <!DOCTYPE html>
// <html>
// <head>
// <title>School subjects</title>
// <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <div class="Mathematics">
//     <h1>Mathematics</h1>
//
//     <p>	Mathematics is the study of numbers, shapes, patterns, and logical reasoning. It is a fundamental subject that provides tools and frameworks for solving problems across many fields, from science and engineering to economics and art. Here are the core areas in mathematics:
//     </p>
//     <ol>
//         <li>
//             Arithmetic – The study of basic operations (addition, subtraction, multiplication, and division) and number properties.
//         </li>
//
//         <li>
//             Algebra – Focuses on variables, equations, and functions, providing a foundation for solving complex problems.
//         </li>
//
//         <li>
//             Geometry – Examines shapes, sizes, and the properties of space, exploring points, lines, angles, and surfaces.
//         </li>
//
//         <li>
//             Trigonometry – Studies the relationships between angles and sides in triangles, which has applications in physics, engineering, and astronomy.
//         </li>
//
//         <li>
//             Calculus – Investigates rates of change (derivatives) and accumulation of quantities (integrals), essential for understanding motion and change.
//         </li>
//
//         <li>
//             Statistics and Probability – Deals with data analysis, averages, probability, and chance, used widely in sciences, economics, and social studies.
//         </li>
//     </ol>
//     <img src="image/Math.webp">
//         <hr>
// </div>
// <div class="Science">
//     <h1>Science</h1>
//
//     <p>	Science is the systematic study of the natural world, using observation, experimentation, and analysis to understand phenomena and develop theories. It’s divided into key branches:
//     </p>
//
//     <ol>
//         <li>
//             Physics – Studies matter, energy, and the fundamental forces of nature, explaining how objects move and interact.
//         </li>
//
//         <li>
//             Chemistry – Focuses on substances, their properties, and reactions, essential for understanding materials and how they combine or change.
//         </li>
//
//         <li>
//             Biology – Examines living organisms, their structures, functions, and interactions, providing insights into life processes.
//         </li>
//
//         <li>
//             Earth Science – Investigates Earth’s structure, including geology, meteorology, and oceanography, exploring natural processes and phenomena.
//         </li>
//
//         <li>
//             Environmental Science – Studies ecosystems, biodiversity, and human impacts on the environment, emphasizing sustainability and conservation.
//         </li>
//
//     </ol>
//     <img src="image/Science.webp">
//         <hr>
// </div>
//
// <div class="Biology">
//     <h1>Biology</h1>
//
//     <p>	Biology is the study of living organisms and life processes. It explores everything from microscopic cells to complex ecosystems. Here are the core areas:
//     </p>
//
//     <ol>
//
//         <li>
//             Cell Biology – Examines the structure and function of cells, the building blocks of life.
//         </li>
//
//         <li>
//             Genetics – Focuses on DNA, heredity, and how traits are passed through generations.
//         </li>
//
//         <li>
//             Evolution – Explains how species change over time through natural selection and adaptation.
//         </li>
//
//         <li>
//             Ecology – Studies ecosystems, interactions between organisms, and their environments.
//         </li>
//
//         <li>
//             Human Anatomy and Physiology – Looks at the structure and function of the human body.
//         </li>
//
//         <li>
//             Microbiology – Investigates microorganisms, such as bacteria and viruses, and their roles in health and ecosystems.
//         </li>
//
//     </ol>
//
//     <img src="image/Biology.webp">
//         <hr>
// </div>
//
// <div class="Chemistry">
//     <h1>Chemistry</h1>
//
//     <p>	Chemistry is the study of matter, its properties, composition, and the reactions it undergoes. It’s essential for understanding the building blocks of the universe and how substances interact. Core areas include:
//     </p>
//
//     <ol>
//         <li>
//             Atomic Structure – Examines atoms, the basic units of matter, including protons, neutrons, and electrons.
//         </li>
//
//         <li>
//             Periodic Table – Organizes elements by their properties, helping predict behaviors and reactions.
//         </li>
//
//         <li>
//             Chemical Bonding – Studies how atoms bond to form molecules, including ionic, covalent, and metallic bonds.
//         </li>
//
//         <li>
//             States of Matter – Looks at solids, liquids, gases, and how they change through physical processes like melting and evaporation.
//         </li>
//
//         <li>
//             Chemical Reactions – Explores how substances transform in reactions, involving energy changes, reactants, and products.
//         </li>
//
//         <li>
//             Acids and Bases – Focuses on substances that donate or accept protons, crucial for understanding pH and reactions in living organisms.
//         </li>
//
//     </ol>
//
//     <img src="image/Chemistry.webp">
//         <hr>
// </div>
//
// <div class="Physics">
//     <h1>Physics</h1>
//
//     <p>	Physics is the study of matter, energy, and the fundamental forces that govern the universe. It seeks to explain how things move, interact, and change over time. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Mechanics – Studies motion, forces, and energy, explaining concepts like velocity, acceleration, and Newton’s Laws of Motion.
//         </li>
//
//         <li>
//             Thermodynamics – Focuses on heat, temperature, and the flow of energy, covering principles like entropy and the laws of thermodynamics.
//         </li>
//
//         <li>
//             Electromagnetism – Explores electric and magnetic fields, including how they produce forces and currents, which is foundational for electronics.
//         </li>
//
//         <li>
//             Optics – Examines the behavior of light, including reflection, refraction, and the color spectrum.
//         </li>
//
//         <li>
//             Quantum Mechanics – Investigates particles at the smallest scales, revealing phenomena like wave-particle duality and uncertainty.
//         </li>
//
//         <li>
//             Relativity – Describes the effects of gravity and high speeds on space, time, and matter, as famously explained by Einstein.
//         </li>
//
//     </ol>
//     <img src="image/Physics.webp">
//         <hr>
// </div>
//
// <div class="EnglishLanguageArts">
//     <h1>English Language Arts</h1>
//
//     <p>	English Language Arts (ELA) is the study of language, communication, and literature, focusing on reading, writing, speaking, and listening skills. ELA encourages critical thinking and effective communication. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Reading and Literature – Involves analyzing texts, from fiction and poetry to nonfiction, exploring themes, characters, and literary techniques.
//         </li>
//
//         <li>
//             Writing – Covers grammar, vocabulary, and composition skills, from essays to creative writing, enabling clear and expressive communication.
//         </li>
//
//         <li>
//             Speaking and Listening – Develops oral communication and active listening skills, important for discussions, presentations, and collaboration.
//         </li>
//
//         <li>
//             Research and Information Literacy – Teaches students how to locate, evaluate, and use information effectively and responsibly.
//         </li>
//
//     </ol>
//
//     <img src="image/ELA.webp">
//         <hr>
// </div>
//
// <div class="History">
//     <h1>History</h1>
//
//     <p>	History is the study of past events, people, and societies, helping us understand how the world has developed over time. It provides insight into cultures, conflicts, achievements, and social changes. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Ancient Civilizations – Examines the early societies like Egypt, Mesopotamia, Greece, and Rome, exploring their contributions to government, culture, and technology.
//         </li>
//
//         <li>
//             Medieval and Renaissance Eras – Covers the Middle Ages and the Renaissance, focusing on feudalism, exploration, and cultural rebirth in Europe.
//         </li>
//
//         <li>
//             Modern History – Looks at recent centuries, including the Industrial Revolution, world wars, and the Cold War, which have shaped today’s world.
//         </li>
//
//         <li>
//             American History – Focuses on the history of the United States, from colonization and independence to contemporary issues.
//         </li>
//
//         <li>
//             World History – Explores global events and connections, studying diverse cultures, empires, and the impact of globalization.
//         </li>
//
//     </ol>
//     <img src="image/History.webp">
//         <hr>
// </div>
//
// <div class="Geography">
//     <h1>Geography</h1>
//
//     <p>	Geography is the study of Earth's landscapes, environments, and the relationships between people and their environments. It covers both natural and human-made features of the planet. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Physical Geography – Examines natural features like mountains, rivers, climate, ecosystems, and how they shape life on Earth.
//         </li>
//
//         <li>
//             Human Geography – Studies human societies, including population distribution, urban development, cultures, and economic activities.
//         </li>
//
//         <li>
//             Map Skills – Teaches how to read and interpret maps, including symbols, scales, and geographic coordinates.
//         </li>
//
//         <li>
//             Environmental Geography – Focuses on issues like climate change, conservation, and the impact of human activity on the planet.
//         </li>
//
//         <li>
//             Geospatial Technologies – Uses tools like GPS, GIS, and satellite imagery to study and analyze geographic information.
//         </li>
//
//     </ol>
//     <img src="image/Geograpy.webp">
//         <hr>
// </div>
//
// <div class="SocialStudies">
//     <h1>Social Studies</h1>
//
//     <p>	Social Studies is an interdisciplinary subject that explores society, cultures, history, government, and human interactions. It aims to help students understand the world around them and their role as active citizens. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             History – Studies past events, cultures, and significant figures to understand societal development and lessons from the past.
//         </li>
//
//         <li>
//             Civics and Government – Focuses on how governments function, the rights and responsibilities of citizens, and the importance of democracy.
//         </li>
//
//         <li>
//             Geography – Explores physical and human geography, emphasizing how people interact with the environment and global communities.
//         </li>
//
//         <li>
//             Economics – Introduces economic principles, such as supply and demand, trade, and the role of money in society.
//         </li>
//
//         <li>
//             Culture and Society – Examines customs, beliefs, and social structures, helping students appreciate cultural diversity and social dynamics.
//         </li>
//
//     </ol>
//     <img src="image/SoStu.webp">
//         <hr>
// </div>
//
// <div class="PhysicalEducation">
//     <h1>Physical Education (PE)</h1>
//
//     <p>	Physical Education (PE) is a school subject focused on physical activity, fitness, and overall health. It aims to develop physical skills, promote teamwork, and encourage lifelong healthy habits. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Exercise and Fitness – Teaches students about aerobic and strength-building exercises to improve endurance, strength, and flexibility.
//         </li>
//
//         <li>
//             Sports and Games – Covers team sports (e.g., soccer, basketball) and individual activities (e.g., running, gymnastics) to build skills, coordination, and teamwork.
//         </li>
//
//         <li>
//             Health and Wellness – Focuses on the importance of physical activity, nutrition, and personal well-being.
//         </li>
//
//         <li>
//             Motor Skills Development – Enhances fundamental movement skills, such as balance, agility, and hand-eye coordination.
//         </li>
//
//         <li>
//             Teamwork and Sportsmanship – Encourages cooperation, respect, and positive interactions during physical activities.
//         </li>
//
//     </ol>
//
//     <img src="image/PhyEdu.webp">
//         <hr>
// </div>
//
// <div class="Art">
//     <h1>Art</h1>
//
//     <p>	Art is a subject that explores creativity, expression, and the visual representation of ideas. It involves learning techniques, understanding styles, and appreciating the impact of art in culture. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Drawing and Painting – Teaches skills in sketching, shading, and color use with various media like pencils, paints, and pastels.
//         </li>
//
//         <li>
//             Sculpture and 3D Art – Involves creating three-dimensional works using materials like clay, wood, or metal, emphasizing form and space.
//         </li>
//
//         <li>
//             Art History – Studies famous artists, art movements (like Impressionism or Modernism), and cultural significance across time periods.
//         </li>
//
//         <li>
//             Digital Art and Photography – Explores technology-based art forms, including digital illustration, graphic design, and photography.
//         </li>
//
//         <li>
//             Art Appreciation and Critique – Encourages analyzing and interpreting art, understanding themes, and discussing the emotional impact of artwork.
//         </li>
//
//     </ol>
//     <img src="image/Art.webp">
//         <hr>
// </div>
//
// <div class="Music">
//     <h1>Music</h1>
//
//     <p>	Music is the study of sound, rhythm, melody, and harmony, focusing on both the creation and appreciation of musical works. It teaches technical skills, creativity, and cultural understanding. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Music Theory – Covers the basics of reading music, scales, chords, and rhythm, helping students understand the structure behind compositions.
//         </li>
//
//         <li>
//             Instruments and Performance – Involves learning to play musical instruments, sing, and perform, either solo or in groups.
//         </li>
//
//         <li>
//             Music History – Studies different musical periods, genres, and influential composers or musicians from around the world.
//         </li>
//
//         <li>
//             Composition and Songwriting – Teaches the basics of creating original music, exploring melody, lyrics, and arrangement.
//
//         </li>
//
//         <li>
//             Listening and Appreciation – Focuses on analyzing and interpreting music, understanding mood, cultural background, and musical styles.
//         </li>
//
//     </ol>
//     <img src="image/MusicAtr.webp">
//         <hr>
// </div>
//
// <div class="ComputerScience">
//     <h1>Computer Science</h1>
//
//     <p>	Computer Science is the study of computers, algorithms, and programming, focusing on how technology processes information and solves problems. It’s foundational for understanding and developing technology. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Programming and Coding – Teaches languages like Python, Java, and HTML to create software, websites, and applications.
//         </li>
//
//         <li>
//             Algorithms and Data Structures – Focuses on efficient methods for organizing and processing data, essential for solving complex problems.
//         </li>
//
//         <li>
//             Computer Systems and Hardware – Covers the components and architecture of computers, including CPUs, memory, and storage.
//         </li>
//
//         <li>
//             Networks and Internet – Examines how computers communicate, covering networks, cybersecurity, and the principles of the internet.
//         </li>
//
//         <li>
//             Artificial Intelligence and Machine Learning – Introduces AI concepts, such as pattern recognition, machine learning, and decision-making processes.
//         </li>
//
//     </ol>
//     <img src="image/ComSc.webp">
//         <hr>
// </div>
//
// <div class="ForeignLanguage">
//     <h1>Foreign Language</h1>
//
//     <p>	Foreign Language studies focus on learning new languages, improving communication skills, and understanding different cultures. It enhances linguistic abilities and cultural awareness. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Speaking and Pronunciation – Teaches students to speak and pronounce words correctly, helping with fluency and conversational skills.
//         </li>
//
//         <li>
//             Listening Comprehension – Focuses on understanding spoken language, building skills to comprehend different accents and contexts.
//         </li>
//
//         <li>
//             Reading and Vocabulary – Covers reading comprehension and expanding vocabulary to understand written texts.
//         </li>
//
//         <li>
//             Grammar and Sentence Structure – Teaches the rules and structure of the language, essential for accurate communication.
//         </li>
//
//         <li>
//             Cultural Understanding – Explores the culture, traditions, and social norms associated with the language, fostering global awareness.
//         </li>
//
//     </ol>
//     <img src="image/ForLan.webp">
//         <hr>
// </div>
//
// <div class="Economics">
//     <h1>Economics</h1>
//     <p>Economics is the study of how individuals, businesses, and governments make choices about resources, production, and consumption. It focuses on understanding financial systems, markets, and decision-making. Key areas include:
//     </p>
//
//     <ol>
//         <li>
//             Microeconomics – Examines individual and business decisions, including supply, demand, and price determination in specific markets.
//         </li>
//
//         <li>
//             Macroeconomics – Looks at the economy as a whole, studying factors like inflation, unemployment, and economic growth.
//         </li>
//
//         <li>
//             Economic Systems – Explores different types of economies, such as capitalism, socialism, and mixed economies, and how resources are allocated.
//         </li>
//
//         <li>
//             Money and Banking – Covers the role of money, banks, and financial institutions in supporting trade and investment.
//         </li>
//
//         <li>
//             International Trade and Global Economics – Examines trade between countries, globalization, exchange rates, and the impact of policies on global economies.
//         </li>
//     </ol>
//
//     <img src="image/Economics.webp">
//         <hr>
// </div>
//
// </body>
// <script>
//     document.addEventListener("DOMContentLoaded", function() {
//     // Получаем все карточки предметов
//     const subjectCards = document.querySelectorAll("div[class^='Mathematics'], div[class^='Science'], div[class^='Biology'], div[class^='Chemistry'], div[class^='Physics'], div[class^='EnglishLanguageArts'], div[class^='History'], div[class^='Geography'], div[class^='SocialStudies'], div[class^='PhysicalEducation'], div[class^='Art'], div[class^='Music'], div[class^='ComputerScience'], div[class^='ForeignLanguage'], div[class^='Economics']");
//
//     // Перебираем каждую карточку и добавляем событие клика
//     subjectCards.forEach(card => {
//     const content = card.querySelector("p, ol, img");
//     content.style.display = "none"; // Скрываем содержимое карточки
//
//     // Добавляем обработчик клика
//     card.addEventListener("click", function() {
//     if (content.style.display === "none") {
//     content.style.display = "block";
//     card.style.cursor = "default";
// } else {
//     content.style.display = "none";
// }
// });
// });
// });
// </script>
//
// </html>

// /* Общие стили */
// body {
//     font-family: Arial, sans-serif;
//     background-color: #f4f4f9;
//     color: #333;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     justify-content: center;
// }
//
// /* Карточки предметов */
// div[class^="Mathematics"],
//     div[class^="Science"],
//     div[class^="Biology"],
//     div[class^="Chemistry"],
//     div[class^="Physics"],
//     div[class^="EnglishLanguageArts"],
//     div[class^="History"],
//     div[class^="Geography"],
//     div[class^="SocialStudies"],
//     div[class^="PhysicalEducation"],
//     div[class^="Art"],
//     div[class^="Music"],
//     div[class^="ComputerScience"],
//     div[class^="ForeignLanguage"],
//     div[class^="Economics"] {
//     width: 90%;
//     max-width: 700px;
//     margin: 20px auto;
//     padding: 20px;
//     background-color: #fff;
//     border-radius: 15px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
//     transition: transform 0.3s, box-shadow 0.3s;
//     cursor: pointer;
//     overflow: hidden;
// }
//
// div[class^="Mathematics"]:hover,
//     div[class^="Science"]:hover,
//     div[class^="Biology"]:hover,
//     div[class^="Chemistry"]:hover,
//     div[class^="Physics"]:hover,
//     div[class^="EnglishLanguageArts"]:hover,
//     div[class^="History"]:hover,
//     div[class^="Geography"]:hover,
//     div[class^="SocialStudies"]:hover,
//     div[class^="PhysicalEducation"]:hover,
//     div[class^="Art"]:hover,
//     div[class^="Music"]:hover,
//     div[class^="ComputerScience"]:hover,
//     div[class^="ForeignLanguage"]:hover,
//     div[class^="Economics"]:hover {
//     transform: scale(1.02);
//     box-shadow: 0px 6px 20px rgba(0, 0, 0, 0.15);
// }
//
// /* Стили для заголовков */
// h1 {
//     font-size: 1.8em;
//     color: #333;
//     margin-bottom: 10px;
//     text-align: center;
// }
//
// /* Стили для текста */
// p {
//     line-height: 1.6;
//     margin-bottom: 15px;
// }
//
// /* Стили для списков */
// ol {
//     padding-left: 20px;
//     margin-bottom: 20px;
// }
//
// ol li {
//     padding: 5px 0;
// }
//
// /* Стили для изображений */
// img {
//     width: 100%;
//     height: auto;
//     border-radius: 10px;
//     margin-top: 10px;
//     box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.1);
// }

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>School Subjects</title>
// <link rel="stylesheet" href="style.css">
// </head>
// <body>
// <h1>School Subjects</h1>
// <div class="icon-grid">
//     <a href="mathematics.html" class="subject-icon">
//         <img src="image/Math.webp" alt="Mathematics Icon">
//             <p>Mathematics</p>
//     </a>
//     <a href="science.html" class="subject-icon">
//         <img src="image/Science.webp" alt="Science Icon">
//             <p>Science</p>
//     </a>
//     <a href="biology.html" class="subject-icon">
//         <img src="image/Biology.webp" alt="Biology Icon">
//             <p>Biology</p>
//     </a>
//     <a href="chemistry.html" class="subject-icon">
//         <img src="image/Chemistry.webp" alt="Chemistry Icon">
//             <p>Chemistry</p>
//     </a>
//     <a href="physics.html" class="subject-icon">
//         <img src="image/Physics.webp" alt="Physics Icon">
//             <p>Physics</p>
//     </a>
//     <a href="english_language_arts.html" class="subject-icon">
//         <img src="image/ELA.webp" alt="English Language Arts Icon">
//             <p>English Language Arts</p>
//     </a>
//     <a href="history.html" class="subject-icon">
//         <img src="image/History.webp" alt="History Icon">
//             <p>History</p>
//     </a>
//     <a href="geography.html" class="subject-icon">
//         <img src="image/Geograpy.webp" alt="Geography Icon">
//             <p>Geography</p>
//     </a>
//     <a href="social_studies.html" class="subject-icon">
//         <img src="image/SoStu.webp" alt="Social Studies Icon">
//             <p>Social Studies</p>
//     </a>
//     <a href="physical_education.html" class="subject-icon">
//         <img src="image/PhyEdu.webp" alt="Physical Education Icon">
//             <p>Physical Education</p>
//     </a>
//     <a href="art.html" class="subject-icon">
//         <img src="image/Art.webp" alt="Art Icon">
//             <p>Art</p>
//     </a>
//     <a href="music.html" class="subject-icon">
//         <img src="image/MusicAtr.webp" alt="Music Icon">
//             <p>Music</p>
//     </a>
//     <a href="computer_science.html" class="subject-icon">
//         <img src="image/ComSc.webp" alt="Computer Science Icon">
//             <p>Computer Science</p>
//     </a>
//     <a href="foreign_language.html" class="subject-icon">
//         <img src="image/ForLan.webp" alt="Foreign Language Icon">
//             <p>Foreign Language</p>
//     </a>
//     <a href="economics.html" class="subject-icon">
//         <img src="image/Economics.webp" alt="Economics Icon">
//             <p>Economics</p>
//     </a>
// </div>
// </body>
// </html>

// /* General Page Styling */
// body {
//     font-family: Arial, sans-serif;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     background-color: #f0f2f5;
//     margin: 0;
//     padding: 20px;
// }
//
// /* Title Styling */
// h1 {
//     font-size: 2em;
//     margin-bottom: 20px;
//     color: #333;
// }
//
// /* Icon Grid Container */
// .icon-grid {
//     display: flex;
//     flex-wrap: wrap;
//     gap: 20px;
//     justify-content: center;
// }
//
// /* Individual Subject Icon Styling */
// .subject-icon {
//     text-align: center;
//     width: 150px;
//     background-color: #fff;
//     border-radius: 12px;
//     box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
//     padding: 15px;
//     transition: transform 0.3s ease, box-shadow 0.3s ease;
//     text-decoration: none;
//     color: #333;
// }
//
// /* Hover Effect */
// .subject-icon:hover {
//     transform: scale(1.05);
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
// }
//
// /* Image Styling Inside Icons */
// .subject-icon img {
//     width: 100%;
//     height: auto;
//     border-radius: 8px;
//     margin-bottom: 10px;
// }
//
// /* Subject Name Styling */
// .subject-icon p {
//     margin: 0;
//     font-weight: bold;
//     color: #555;
// }

// body {
//     font-family: Arial, sans-serif;
//     background-color: #f4f6f9;
//     color: #333;
//     margin: 0;
//     padding: 20px;
//     display: flex;
//     flex-direction: column;
//     align-items: center;
// }
//
// .back-button {
//     display: inline-block;
//     margin-bottom: 20px;
//     color: #333;
//     text-decoration: none;
//     background-color: #e0e0e0;
//     padding: 8px 15px;
//     border-radius: 8px;
//     font-weight: bold;
//     transition: background-color 0.3s ease;
// }
//
// .back-button:hover {
//     background-color: #dcdcdc;
// }
//
// .subject-page {
//     max-width: 800px;
//     background: linear-gradient(135deg, #f8f9fa, #e0e0e0);
//     padding: 30px;
//     border-radius: 12px;
//     box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
//     text-align: center;
// }
//
// .subject-page h1 {
//     font-size: 2.5rem;
//     color: #34495e;
//     margin-bottom: 10px;
//     text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
// }
//
// .subject-page p, .subject-page ol li {
//     font-size: 1.1rem;
//     line-height: 1.8;
//     color: #333;
// }
//
// .subject-page ol li strong {
//     color: #2980b9;
// }
//
// .subject-page ol li:hover {
//     color: #1e90ff;
//     transition: color 0.3s ease;
// }
//
// .subject-image {
//     width: 100%;
//     max-width: 600px;
//     height: auto;
//     border-radius: 10px;
//     margin-top: 20px;
//     box-shadow: 0 6px 12px rgba(0, 0, 0, 0.1);
//     transition: transform 0.3s ease;
// }
//
// .subject-image:hover {
//     transform: scale(1.05);
// }
//
// .subject-footer {
//     margin-top: 40px;
//     font-size: 0.9rem;
//     color: #777;
//     text-align: center;
// }

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Social Studies</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Social Studies</h1>
//         <p>Social Studies is an interdisciplinary subject that explores society, cultures, history, government, and human interactions. Key areas include:</p>
//         <ol>
//             <li><strong>History</strong> – Studies past events and significant figures to understand societal development.</li>
//             <li><strong>Civics and Government</strong> – Focuses on how governments function and the importance of democracy.</li>
//             <li><strong>Geography</strong> – Explores physical and human geography and global communities.</li>
//             <li><strong>Economics</strong> – Introduces economic principles, such as supply and demand and the role of money.</li>
//             <li><strong>Culture and Society</strong> – Examines customs, beliefs, and social structures.</li>
//         </ol>
//         <img src="image/SoStu.webp" alt="Social Studies Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Science</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Science</h1>
//         <p>Science is the systematic study of the natural world, using observation, experimentation, and analysis to understand phenomena and develop theories. It’s divided into key branches:</p>
//         <ol>
//             <li><strong>Physics</strong> – Studies matter, energy, and the fundamental forces of nature.</li>
//             <li><strong>Chemistry</strong> – Focuses on substances, their properties, and reactions.</li>
//             <li><strong>Biology</strong> – Examines living organisms, their structures, and functions.</li>
//             <li><strong>Earth Science</strong> – Investigates Earth’s structure, natural processes, and phenomena.</li>
//             <li><strong>Environmental Science</strong> – Studies ecosystems, biodiversity, and human impacts on the environment.</li>
//         </ol>
//         <img src="image/Science.webp" alt="Science Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Physics</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Physics</h1>
//         <p>Physics is the study of matter, energy, and the fundamental forces that govern the universe. Key areas include:</p>
//         <ol>
//             <li><strong>Mechanics</strong> – Studies motion, forces, and energy.</li>
//             <li><strong>Thermodynamics</strong> – Focuses on heat, temperature, and the flow of energy.</li>
//             <li><strong>Electromagnetism</strong> – Explores electric and magnetic fields.</li>
//             <li><strong>Optics</strong> – Examines the behavior of light.</li>
//             <li><strong>Quantum Mechanics</strong> – Investigates particles at the smallest scales.</li>
//         </ol>
//         <img src="image/Physics.webp" alt="Physics Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Physical Education (PE)</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Physical Education (PE)</h1>
//         <p>Physical Education (PE) focuses on physical activity, fitness, and overall health. It aims to develop physical skills and promote teamwork. Key areas include:</p>
//         <ol>
//             <li><strong>Exercise and Fitness</strong> – Teaches aerobic and strength-building exercises.</li>
//             <li><strong>Sports and Games</strong> – Covers team sports (e.g., soccer) and individual activities (e.g., running).</li>
//             <li><strong>Health and Wellness</strong> – Focuses on the importance of physical activity and nutrition.</li>
//             <li><strong>Motor Skills Development</strong> – Enhances fundamental movement skills.</li>
//             <li><strong>Teamwork and Sportsmanship</strong> – Encourages cooperation and positive interactions.</li>
//         </ol>
//         <img src="image/PhyEdu.webp" alt="Physical Education Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Music</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Music</h1>
//         <p>Music is the study of sound, rhythm, melody, and harmony, focusing on both the creation and appreciation of musical works. Key areas include:</p>
//         <ol>
//             <li><strong>Music Theory</strong> – Covers the basics of reading music, scales, chords, and rhythm.</li>
//             <li><strong>Instruments and Performance</strong> – Involves learning to play musical instruments and sing.</li>
//             <li><strong>Music History</strong> – Studies different musical periods, genres, and influential composers.</li>
//             <li><strong>Composition and Songwriting</strong> – Teaches the basics of creating original music.</li>
//             <li><strong>Listening and Appreciation</strong> – Focuses on analyzing and interpreting music.</li>
//         </ol>
//         <img src="image/MusicAtr.webp" alt="Music Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Mathematics</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Mathematics</h1>
//         <p>Mathematics is the study of numbers, shapes, patterns, and logical reasoning. It is a fundamental subject that provides tools and frameworks for solving problems across many fields, from science and engineering to economics and art. Here are the core areas in mathematics:</p>
//         <ol>
//             <li><strong>Arithmetic</strong> – The study of basic operations (addition, subtraction, multiplication, and division) and number properties.</li>
//             <li><strong>Algebra</strong> – Focuses on variables, equations, and functions, providing a foundation for solving complex problems.</li>
//             <li><strong>Geometry</strong> – Examines shapes, sizes, and the properties of space, exploring points, lines, angles, and surfaces.</li>
//             <li><strong>Trigonometry</strong> – Studies the relationships between angles and sides in triangles, which has applications in physics, engineering, and astronomy.</li>
//             <li><strong>Calculus</strong> – Investigates rates of change (derivatives) and accumulation of quantities (integrals), essential for understanding motion and change.</li>
//             <li><strong>Statistics and Probability</strong> – Deals with data analysis, averages, probability, and chance, used widely in sciences, economics, and social studies.</li>
//         </ol>
//         <img src="image/Math.webp" alt="Mathematics Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>History</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>History</h1>
//         <p>History is the study of past events, people, and societies, helping us understand how the world has developed over time. Key areas include:</p>
//         <ol>
//             <li><strong>Ancient Civilizations</strong> – Examines early societies like Egypt, Mesopotamia, Greece, and Rome.</li>
//             <li><strong>Medieval and Renaissance Eras</strong> – Covers feudalism, exploration, and cultural rebirth in Europe.</li>
//             <li><strong>Modern History</strong> – Looks at recent centuries, including the Industrial Revolution and world wars.</li>
//             <li><strong>American History</strong> – Focuses on the history of the United States, from colonization to contemporary issues.</li>
//             <li><strong>World History</strong> – Explores global events, studying diverse cultures, empires, and globalization.</li>
//         </ol>
//         <img src="image/History.webp" alt="History Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Geography</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Geography</h1>
//         <p>Geography is the study of Earth's landscapes, environments, and the relationships between people and their environments. Key areas include:</p>
//         <ol>
//             <li><strong>Physical Geography</strong> – Examines natural features like mountains, rivers, and climate.</li>
//             <li><strong>Human Geography</strong> – Studies human societies, including population distribution and urban development.</li>
//             <li><strong>Map Skills</strong> – Teaches how to read and interpret maps, including symbols and scales.</li>
//             <li><strong>Environmental Geography</strong> – Focuses on issues like climate change and conservation.</li>
//             <li><strong>Geospatial Technologies</strong> – Uses tools like GPS and satellite imagery to analyze geographic information.</li>
//         </ol>
//         <img src="image/Geograpy.webp" alt="Geography Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Foreign Language</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Foreign Language</h1>
//         <p>Foreign Language studies focus on learning new languages, improving communication skills, and understanding different cultures. Key areas include:</p>
//         <ol>
//             <li><strong>Speaking and Pronunciation</strong> – Teaches students to speak and pronounce words correctly.</li>
//             <li><strong>Listening Comprehension</strong> – Focuses on understanding spoken language in different accents and contexts.</li>
//             <li><strong>Reading and Vocabulary</strong> – Covers reading comprehension and expanding vocabulary.</li>
//             <li><strong>Grammar and Sentence Structure</strong> – Teaches the rules and structure of the language.</li>
//             <li><strong>Cultural Understanding</strong> – Explores culture, traditions, and social norms associated with the language.</li>
//         </ol>
//         <img src="image/ForLan.webp" alt="Foreign Language Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>


// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>English Language Arts</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>English Language Arts</h1>
//         <p>English Language Arts (ELA) is the study of language, communication, and literature, focusing on reading, writing, speaking, and listening skills. Key areas include:</p>
//         <ol>
//             <li><strong>Reading and Literature</strong> – Analyzing texts, exploring themes, characters, and literary techniques.</li>
//             <li><strong>Writing</strong> – Covers grammar, vocabulary, and composition skills for expressive communication.</li>
//             <li><strong>Speaking and Listening</strong> – Develops oral communication and listening skills.</li>
//             <li><strong>Research and Information Literacy</strong> – Teaches how to locate, evaluate, and use information effectively.</li>
//         </ol>
//         <img src="image/ELA.webp" alt="English Language Arts Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects.

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Art</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Art</h1>
//         <p>Art explores creativity, expression, and the visual representation of ideas. It involves learning techniques, understanding styles, and appreciating art in culture. Key areas include:</p>
//         <ol>
//             <li><strong>Drawing and Painting</strong> – Teaches skills in sketching, shading, and color use with various media.</li>
//             <li><strong>Sculpture and 3D Art</strong> – Involves creating three-dimensional works using materials like clay and metal.</li>
//             <li><strong>Art History</strong> – Studies famous artists, art movements, and cultural significance.</li>
//             <li><strong>Digital Art and Photography</strong> – Explores digital illustration, graphic design, and photography.</li>
//             <li><strong>Art Appreciation and Critique</strong> – Encourages analyzing and interpreting art.</li>
//         </ol>
//         <img src="image/Art.webp" alt="Art Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Biology</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Biology</h1>
//         <p>Biology is the study of living organisms and life processes. It explores everything from microscopic cells to complex ecosystems. Here are the core areas:</p>
//         <ol>
//             <li><strong>Cell Biology</strong> – Examines the structure and function of cells.</li>
//             <li><strong>Genetics</strong> – Focuses on DNA, heredity, and how traits are passed through generations.</li>
//             <li><strong>Evolution</strong> – Explains how species change over time.</li>
//             <li><strong>Ecology</strong> – Studies ecosystems, interactions between organisms, and their environments.</li>
//             <li><strong>Human Anatomy and Physiology</strong> – Looks at the structure and function of the human body.</li>
//         </ol>
//         <img src="image/Biology.webp" alt="Biology Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Chemistry</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Chemistry</h1>
//         <p>Chemistry is the study of matter, its properties, composition, and the reactions it undergoes. It’s essential for understanding the building blocks of the universe. Core areas include:</p>
//         <ol>
//             <li><strong>Atomic Structure</strong> – Examines atoms, the basic units of matter.</li>
//             <li><strong>Periodic Table</strong> – Organizes elements by their properties.</li>
//             <li><strong>Chemical Bonding</strong> – Studies how atoms bond to form molecules.</li>
//             <li><strong>States of Matter</strong> – Looks at solids, liquids, gases, and their changes.</li>
//             <li><strong>Chemical Reactions</strong> – Explores how substances transform in reactions.</li>
//         </ol>
//         <img src="image/Chemistry.webp" alt="Chemistry Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Computer Science</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Computer Science</h1>
//         <p>Computer Science is the study of computers, algorithms, and programming, focusing on how technology processes information and solves problems. Key areas include:</p>
//         <ol>
//             <li><strong>Programming and Coding</strong> – Teaches languages like Python, Java, and HTML to create software and websites.</li>
//             <li><strong>Algorithms and Data Structures</strong> – Focuses on efficient methods for organizing and processing data.</li>
//             <li><strong>Computer Systems and Hardware</strong> – Covers the components and architecture of computers.</li>
//             <li><strong>Networks and Internet</strong> – Examines how computers communicate, including networks and cybersecurity.</li>
//             <li><strong>Artificial Intelligence and Machine Learning</strong> – Introduces AI concepts and machine learning.</li>
//         </ol>
//         <img src="image/ComSc.webp" alt="Computer Science Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <title>Economics</title>
// <link rel="stylesheet" href="style.css">
//     <link rel="stylesheet" href="subject-style.css">
//     </head>
//     <body>
//     <a href="index.html" class="back-button">⬅️ Back to School Subjects</a>
//     <div class="subject-page">
//         <h1>Economics</h1>
//         <p>Economics is the study of how individuals, businesses, and governments make choices about resources, production, and consumption. Key areas include:</p>
//         <ol>
//             <li><strong>Microeconomics</strong> – Examines individual and business decisions in specific markets.</li>
//             <li><strong>Macroeconomics</strong> – Looks at the economy as a whole, including inflation and unemployment.</li>
//             <li><strong>Economic Systems</strong> – Explores different types of economies and resource allocation.</li>
//             <li><strong>Money and Banking</strong> – Covers the role of money, banks, and financial institutions.</li>
//             <li><strong>International Trade and Global Economics</strong> – Examines trade between countries, globalization, and exchange rates.</li>
//         </ol>
//         <img src="image/Economics.webp" alt="Economics Image" class="subject-image">
//     </div>
//     <footer class="subject-footer">
//         <p>© 2023 School Subjects. All Rights Reserved.</p>
//     </footer>
//     </body>
// </html>

// function findFirstNegativeIndex(arr){
//     return arr.findIndex(num => num < 0);
// }

// function findIndexByProperty(arr, value){
//     const index = arr.findIndex(obj => Object.values(obj).includes(value));
//     return index !== -1 ? index : "Value not found";
// }

// function findFirstEvenIndex(arr){
//     const flattened = arr.flat(Infinity);
//     const index = flattened.findIndex(num => num % 2 === 0);
//     return index !== -1 ? index : "Even number not found"
// }

// function findFirstIndexStartingWith(arr, letter){
//     const normalizedLetter = letter.toLowerCase();
//     const index = arr.findIndex(str => str.trim().toLowerCase().startsWith(normalizedLetter));
//     return index !== -1 ? index : "Element not found"
// }

// function findIndexByDigitSum(arr, targetSum){
//     const calculateDigitSum = (num) => {
//         return Math.abs(num)
//             .toString()
//             .split("")
//             .reduce((sum, digit) => sum + Number(digit), 0);
//     };
//     const index = arr.findIndex(item => {
//         if(typeof item === 'number' && !isNaN(item)) {
//             return calculateDigitSum(item) === targetSum;
//         }
//         return false;
//     });
//     return index !== -1 ? index : 'Element not found';
// }

// function findIndexByProperties(arr, target){
//     const index = arr.findIndex(obj => {
//         return Object.keys(target).every(key => obj[key] === target[key]);
//     });
//     return index !== -1 ? index : "Object not found";
// }

// function findFirstIndexLongerThanNext(arr){
//     const index = arr.findIndex((str, i) => i < arr.length -1 && str.length > arr[i + 1].length);
//     return index !== -1 ? index : "Element not found";
// }

// function findIndexByCaseCount(arr, caseCount){
//     const countCases = (str) => {
//         let upperCount = 0;
//         let lowerCount = 0;
//         for(const char of str){
//             if(/[A-Z]/.test(char)) upperCount++
//             else if(/[a-z]/.test(char)) lowerCount++
//         }
//         return { upperCount, lowerCount };
//     };
//     const index = arr.findIndex(str => {
//         const { upperCount, lowerCount } = countCases(str);
//         return upperCount >= caseCount.upperCase && lowerCount >= caseCount.lowerCase;
//     });
//     return index !== -1 ? index : 'Element not found';
// }

// function findFirstIndexWithSubstringAndLength(arr, substring, minLength){
//     const index = arr.findIndex(str => str.includes(substring) && str.length > minLength);
//     return index !== -1 ? index : 'Element not found';
// }

// function findIndexContainingAllLetters(arr, word){
//     const letters = new Set(word.toLowerCase());
//     const index = arr.findIndex(str => {
//         const lowerStr = str.toLowerCase();
//         return [...letters].every(letter => lowerStr.includes(letter));
//     });
//     return index !== -1 ? index : 'Element not found';
// }

// if (!Array.prototype.findLastIndex) {
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for (let i = this.length - 1; i >= 0; i--) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastPositiveIndex(arr) {
//     return arr.findLastIndex(n => n > 0);
// }

// if (!Array.prototype.findLastIndex) {
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for (let i = this.length - 1; i >= 0; i--) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastIndexByProperty(arr, key, value) {
//     return arr.findLastIndex(item => item[key] === value);
// }

// if (!Array.prototype.findLastIndex) {
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for (let i = this.length - 1; i >= 0; i--) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastIndexByLength(arr, option) {
//     const isEven = option === 'even';
//     return arr.findLastIndex(item => (item.length % 2 === 0) === isEven);
// }

// if(!Array.prototype.findLastIndex){
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for(let i = this.length -1; i >= 0; i--){
//             if(callback.call(thisArg, this[i], i, this)){
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastIndexContainingLetters(arr, word){
//     let requiredCount = Math.ceil(word.length / 2);
//
//     return arr.findLastIndex(str => {
//         let count = 0;
//         for(let char of word){
//             if(str.includes(char)){
//                 count++;
//             }
//             if(count >= requiredCount){
//                 return true;
//             }
//         }
//         return false;
//     });
// }

// if(!Array.prototype.findLastIndex){
//     Array.prototype.findLastIndex = function(callback, thisArg){
//         for(let i  = this.length - 1; i >= 0; i--){
//             if(callback.call(thisArg, this[i], i, this)){
//                 return i;
//             }
//         }
//         return -1;
//     }
// }
//
// function findLastIndexBySquare(arr, num){
//     return arr.findLastIndex(item => item * item > num);
// }

// if(!Array.prototype.findLastIndex){
//     Array.prototype.findLastIndex = function(callback, thisArg){
//         for(let i  = this.length - 1; i >= 0; i--){
//             if(callback.call(thisArg, this[i], i, this)){
//                 return i;
//             }
//         }
//         return -1;
//     }
// }
//
// function findLastIndexBySymbolCount(arr, symbol, target){
//     symbol = symbol.toLowerCase()
//     return arr.findLastIndex(str =>{
//         str = str.toLowerCase();
//         let count = 0;
//
//         for(let char of str){
//             if(char === symbol) count++
//             if(count === target) return true;
//         }
//         return false;
//     });
// }

// if(!Array.prototype.findLastIndex){
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for(let i = this.length -1; i >= 0; i--){
//             if(callback.call(thisArg, this[i], i, this)){
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastIndexByFormattedLength(arr, length){
//     return arr.findLastIndex(str => {
//         const formattedStr = str.replace(/[^a-zA-Z]/g, '');
//         return formattedStr.length === length;
//     });
// }

// function fB(n) {
//     for(let i = 1; i <= n; i++){
//         if(i % 3 === 0 && i % 5 === 0){
//             console.log("FB")
//         } else if(i % 3 === 0){
//             console.log("F")
//         } else if(i % 5 === 0){
//             console.log("B")
//         } else {
//             console.log(i);
//         }
//     }
//
// }

// function canBePalindromeWithOneRemoval(str) {
//     let left = 0;
//     let right = str.length - 1;
//
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return isPalindrome(str, left + 1, right) || isPalindrome(str, left, right - 1);
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
//
// function isPalindrome(str, left, right) {
//     while (left < right) {
//         if (str[left] !== str[right]) {
//             return false;
//         }
//         left++;
//         right--;
//     }
//     return true;
// }
//
// function isSpecialSequence(dna_sequence) {
//     const n = dna_sequence.length;
//
//     for (let i = 1; i < n; i++) {
//         const str1 = dna_sequence.slice(0, i);
//         const str2 = dna_sequence.slice(i);
//
//         if (canBePalindromeWithOneRemoval(str1) && canBePalindromeWithOneRemoval(str2)) {
//             return "YES";
//         }
//     }
//
//     return "NO";
// }

// const x = 2;
// let y = 4;
//
// function update(arg) {
//     return Math.random() + y * arg;
// }
//
// y = 3;
//
// const result = update(x);
// console.log(result);

// if(!Array.prototype.findLastIndex){
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for(let i = this.length -1; i >= 0; i--){
//             if(callback.call(thisArg, this[i], i, this)){
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
//
// function findLastIndexByDigitSum(arr, targetSum) {
//
//     const modifiedArray = arr.map(str => str.replace(/\D/g, ''));
//
//     const index = modifiedArray.findLastIndex(numStr => {
//         const digitSum = [...numStr].reduce((sum, digit) => sum + Number(digit), 0);
//         return digitSum === targetSum;
//     });
//     return { modifiedArray, index };
// }

// if (!Array.prototype.findLastIndex) {
//     Array.prototype.findLastIndex = function(callback, thisArg) {
//         for (let i = this.length - 1; i >= 0; i--) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastIndexByUpperCaseCount(arr, targetCount) {
//
//     const index = arr.findLastIndex(str => {
//         const upperCaseCount = [...str].filter(char => char >= 'A' && char <= 'Z').length;
//         return upperCaseCount === targetCount;
//     });
//
//     return index;
// }

// if (!Array.prototype.findLastIndex) {
//     Array.prototype.findLastIndex = function (callback, thisArg) {
//         for (let i = this.length - 1; i >= 0; i--) {
//             if (callback.call(thisArg, this[i], i, this)) {
//                 return i;
//             }
//         }
//         return -1;
//     };
// }
//
// function findLastIndexByMaxProperty(arr, property) {
//
//     const max = Math.max(...arr.map(obj => obj[property] || 0));
//
//     const index = arr.findLastIndex(obj => obj[property] === max);
//
//     return index;
// }

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <meta name="description" content="Hi! I'm Anna Dowlin, a friendly LA-based developer. Say hello!">
//     <title>Anna Dowlin - Developer</title>
// <style>
//     body {
//     margin: 0;
//     padding: 0;
//     background: url("https://wallpaperaccess.com/full/314785.jpg") no-repeat center center fixed;
//     background-size: cover;
//     font-family: Arial, sans-serif;
//     color: white;
//     text-align: center;
// }
//     .container {
//     padding: 20px;
//     background: rgba(0, 0, 0, 0.7);
//     border-radius: 10px;
//     display: inline-block;
//     margin: 50px auto;
// }
//     img {
//     border-radius: 50%;
//     width: 120px;
//     height: 120px;
//     margin-bottom: 15px;
// }
//     h1 {
//     font-size: 2rem;
//     margin: 0;
//     color: #fff;
// }
//     p {
//     font-size: 1.2rem;
//     margin: 10px 0 20px;
//     color: #ddd;
// }
//     input[type="email"] {
//     width: 80%;
//     max-width: 300px;
//     padding: 10px;
//     font-size: 1rem;
//     border: none;
//     border-radius: 5px;
//     margin-bottom: 10px;
// }
//     input[type="submit"] {
//     padding: 10px 20px;
//     font-size: 1rem;
//     border: none;
//     background: purple;
//     color: white;
//     border-radius: 5px;
//     cursor: pointer;
//     transition: background 0.3s ease;
// }
//     input[type="submit"]:hover {
//     background: darkmagenta;
// }
//     footer {
//     margin-top: 20px;
//     font-size: 0.8rem;
//     color: #ccc;
// }
// </style>
// </head>
// <body>
// <div class="container">
//     <img src="https://th.bing.com/th/id/OIP.Xeoc3iMVyCImvf2gRTLveQHaFj?w=238&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="Anna Dowlin's profile picture">
//         <h1>Hi, I'm Anna Dowlin!</h1>
//         <p>A friendly LA-based developer. I'd love to hear from you!</p>
//         <form action="#" method="post">
//             <input type="email" placeholder="Your email" required>
//                 <input type="submit" value="Say Hello!">
//         </form>
// </div>
// <footer>
//     &copy; 2024 Anna Dowlin. Built with ❤️ in LA.
// </footer>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Anna Dowlin - Welcome!</title>
// <style>
//     body {
//     margin: 0;
//     padding: 0;
//     font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
//     text-align: center;
//     background: linear-gradient(to bottom right, #f9f6f7, #d8e6ff);
//     color: #333;
// }
//     .container {
//     padding: 20px;
//     max-width: 650px;
//     margin: 50px auto;
//     background: rgba(255, 255, 255, 0.9);
//     border-radius: 15px;
//     box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
// }
//     img {
//     width: 140px;
//     height: 140px;
//     border-radius: 50%;
//     border: 4px solid #d8e6ff;
//     margin-bottom: 20px;
// }
//     h1 {
//     font-size: 2.5rem;
//     margin-bottom: 10px;
//     color: #4d73b5;
// }
//     p {
//     font-size: 1.2rem;
//     line-height: 1.6;
//     margin-bottom: 30px;
//     color: #666;
// }
//     form {
//     margin-top: 20px;
// }
//     input[type="email"] {
//     padding: 12px;
//     font-size: 1rem;
//     border: 1px solid #ccc;
//     border-radius: 25px;
//     width: 80%;
//     max-width: 320px;
//     margin-bottom: 15px;
//     outline: none;
//     box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
//     transition: border-color 0.3s, box-shadow 0.3s;
// }
//     input[type="email"]:focus {
//     border-color: #4d73b5;
//     box-shadow: 0 0 10px rgba(77, 115, 181, 0.5);
// }
//     input[type="submit"] {
//     padding: 12px 30px;
//     background: #4d73b5;
//     color: white;
//     font-size: 1rem;
//     border: none;
//     border-radius: 25px;
//     cursor: pointer;
//     transition: background 0.3s;
// }
//     input[type="submit"]:hover {
//     background: #34588d;
// }
//     footer {
//     margin-top: 20px;
//     font-size: 0.9rem;
//     color: #888;
// }
//     footer a {
//     color: #4d73b5;
//     text-decoration: none;
// }
//     footer a:hover {
//     text-decoration: underline;
// }
// </style>
// </head>
// <body>
// <div class="container">
//     <img src="https://th.bing.com/th/id/OIP.Xeoc3iMVyCImvf2gRTLveQHaFj?w=238&h=180&c=7&r=0&o=5&dpr=2&pid=1.7" alt="Anna Dowlin's profile picture">
//         <h1>Hello, I'm Anna!</h1>
//         <p>I’m a passionate developer based in Los Angeles. I enjoy creating beautiful and meaningful projects that tell a story.
//             Drop me a message and let’s connect!</p>
//         <form action="#" method="post">
//             <input type="email" placeholder="Your email" required>
//                 <input type="submit" value="Say Hello">
//         </form>
// </div>
// <footer>
//     <p>&copy; 2024 Anna Dowlin. Built with care and creativity. <a href="#">Contact Me</a></p>
// </footer>
// </body>
// </html>

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Iggi's Blog</title>
// <style>
// body {
//     background: url('https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg') no-repeat center center fixed;
//     background-size: cover;
//     font-family: Arial, sans-serif;
//     color: white;
//     margin: 0;
//     padding: 0;
// }
// header {
//     text-align: center;
//     padding: 20px 0;
// }
// img {
//     margin-top: 20px;
//     height: 180px;
//     border: 5px solid white;
//     border-radius: 20px;
// }
// h1 {
//     font-size: 50px;
//     color: white;
// }
// ul {
//     list-style: none;
//     padding: 0;
//     margin: 10px auto;
//     display: inline-block;
// }
// ul li {
//     display: inline;
//     margin: 0 15px;
// }
// ul li a {
//     text-decoration: none;
//     color: white;
// }
// ul li a:hover {
//     color: lightgray;
// }
// article {
//     background: rgba(0, 0, 0, 0.6);
//     margin: 20px auto;
//     padding: 15px;
//     border-radius: 10px;
//     width: 90%;
//     max-width: 600px;
// }
// h2 {
//     font-size: 24px;
//     color: white;
// }
// p {
//     font-size: 16px;
//     color: lightgray;
// }
// button {
//     background: #ff4d4d;
//     color: white;
//     border: none;
//     padding: 10px 20px;
//     border-radius: 5px;
//     cursor: pointer;
// }
// button:hover {
//     background: #e60000;
// }
// </style>
// </head>
// <body>
// <header>
//     <img src="https://i.pinimg.com/originals/b4/08/cc/b408ccfa493d96fbd84e7e165eec72e9.jpg" alt="Iggi's profile picture">
//         <h1>Iggi's Blog</h1>
//         <ul>
//             <li><a href="#">About Me</a></li>
//             <li><a href="#">Best Code</a></li>
//             <li><a href="#">Worst Code</a></li>
//         </ul>
// </header>
// <article>
//     <h2>How Ridesharing Apps Optimize Traffic with Data Analytics</h2>
//     <p>Explore how ridesharing platforms like Uber use data analytics and machine learning to manage traffic flow and improve the rider experience.</p>
//     <button>Like</button>
// </article>
// <article>
//     <h2>Preparing for an IT Role in Election Support Services</h2>
//     <p>A guide on the IT skills and tools needed to support election services, from network setup to data security.</p>
//     <button>Like</button>
// </article>
// <article>
//     <h2>Bridging Communication Gaps in IT Teams</h2>
//     <p>Discuss how multilingual teams in IT can benefit from collaboration platforms that support multiple languages, enhancing productivity and team cohesion.</p>
//     <button>Like</button>
// </article>
// </body>
// </html>

// const taskInput = document.getElementById("taskInput");
// const addTaskButton = document.getElementById("addTaskButton");
// const taskList = document.getElementById("taskList");
//
// function loadTasks() {
//     const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.forEach((task) => addTaskToDOM(task));
// }
//
// function saveTasks() {
//     const tasks = Array.from(taskList.children).map((li) => li.textContent.replace("❌", "").trim());
//     localStorage.setItem("tasks", JSON.stringify(tasks));
// }
//
// function addTaskToDOM(task) {
//     const li = document.createElement("li");
//     li.textContent = task;
//
//     const deleteButton = document.createElement("button");
//     deleteButton.textContent = "❌";
//     deleteButton.style.marginLeft = "10px";
//     deleteButton.addEventListener("click", () => {
//         li.remove();
//         saveTasks();
//     });
//
//     li.appendChild(deleteButton);
//     taskList.appendChild(li);
// }
// function addTask() {
//     const task = taskInput.value.trim();
//     if (task) {
//         addTaskToDOM(task);
//         saveTasks();
//         taskInput.value = "";
//     }
// }
// addTaskButton.addEventListener("click", addTask);
// taskInput.addEventListener("keypress", (e) => {
//     if (e.key === "Enter") addTask();
// });
//
// loadTasks();
//

// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Список задач</title>
// </head>
// <body>
// <h1>Список задач</h1>
// <input type="text" id="taskInput" placeholder="Введите задачу">
//     <button id="addTaskButton">Добавить задачу</button>
//     <ul id="taskList"></ul>
//
//     <script src="script.js"></script>
// </body>
// </html>

// const counterValue = document.getElementById("counterValue");
// const incrementButton = document.getElementById("incrementButton");
// const decrementButton = document.getElementById("decrementButton");
// const resetButton = document.getElementById("resetButton");
//
// let count = 0;
//
// function updateCounter() {
//     counterValue.textContent = count;
// }
//
// incrementButton.addEventListener("click", () => {
//     count++;
//     updateCounter();
// });
//
// decrementButton.addEventListener("click", () => {
//     if (count > 0) {
//         count--;
//         updateCounter();
//     }
// });
//
// resetButton.addEventListener("click", () => {
//     count = 0;
//     updateCounter();
// });
//
// updateCounter();
//
// <!DOCTYPE html>
// <html lang="en">
//     <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <title>Counter App</title>
// <style>
//     body {
//     font-family: Arial, sans-serif;
//     text-align: center;
//     margin: 50px;
// }
//     #counterValue {
//     font-size: 3rem;
//     margin: 20px 0;
// }
//     button {
//     font-size: 1.2rem;
//     padding: 10px 20px;
//     margin: 10px;
//     cursor: pointer;
// }
// </style>
// </head>
// <body>
// <h1>Simple Counter</h1>
// <div id="counterValue">0</div>
// <button id="incrementButton">Increment</button>
// <button id="decrementButton">Decrement</button>
// <button id="resetButton">Reset</button>
//
// <script src="script.js"></script>
// </body>
// </html>

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


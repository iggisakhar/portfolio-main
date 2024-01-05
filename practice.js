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


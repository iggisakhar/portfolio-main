// function numToWord(arr){
//     if(arr.length === 0){
//         return 'Array is empty'
//     }
//     const objFrom0to9 = {
//         0: 'zero',
//         1: 'one',
//         2: 'two',
//         3: 'three',
//         4: 'four',
//         5: 'five',
//         6: 'six',
//         7: 'seven',
//         8: 'eight',
//         9: 'nine'
//     }
//     const objFrom11to19 = {
//         11: 'eleven',
//         12: 'twelve',
//         13: 'thirteen',
//         14: 'fourteen',
//         15: 'fifteen',
//         16: 'sixteen',
//         17: 'seventeen',
//         18: 'eighteen',
//         19: 'nineteen'
//     }
//     const objFrom10to90 = {
//         10: 'ten',
//         20: 'twenty',
//         30: 'thirty',
//         40: 'forty',
//         50: 'fifty',
//         60: 'sixty',
//         70: 'seventy',
//         80: 'eighty',
//         90: 'ninety'
//     }
//     return arr.map(num => {
//         if(num < 10){
//             return objFrom0to9[num];
//         }
//         else if(num < 20 && num >= 10){
//             return objFrom11to19[num] || objFrom10to90[num];
//         }
//         else {
//             let ten = Math.floor(num / 10);
//             let ones = num % 10;
//             if(ones == 0){
//                 return objFrom10to90[ten * 10];
//             }
//             else {
//                 return objFrom10to90[ten * 10] + '-' + objFrom0to9[ones]
//             }
//         }
//     })
// }

// const numbers = {
//     1: 'one',
//     2: 'two',
//     3: 'three',
//     4: 'four',
//     5: 'five'
// };
//
// function changeNumberToWord(str){
//     let result = '';
//     let word = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' ') word += str[i];
//         if(str[i] === ' ' && word || i === str.length - 1) {
//             if(numbers[word]) result += numbers[word];
//             else if(!Number.isNaN(+word)) result += 'SomeNumber';
//             else result += word;
//             word = '';
//         }
//         if(str[i] === ' ') result += ' ';
//     }
//     return result;
// };
// console.log(changeNumberToWord('5 4 3 2 1 Start!'));

// function sum(str){
//     if(str === ''){
//         return 0;
//     }
//     return str.split('').map(digit => +digit).reduce((acc, value) => acc + value, 0);
// }

// function sumOfEvenAndOdd(str){
//     if(str === ''){
//         return 'String is empty';
//     }
//     let sumOfEven = 0;
//     let sumOfOdd = 0;
//     for(let i of str){
//         let num = Number(i)
//         if(num % 2 === 0){
//             sumOfEven += num;
//         } else{
//             sumOfOdd += num;
//         }
//     }
//     return `Sum of even numbers is ${sumOfEven}, sum of odd numbers is ${sumOfOdd}`
// }

// function sumOnlyNumbers(str){
//     const numbers = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true };
//     if(str.length === 0) return 'String is empty';
//     let sum = 0;
//     let acc = '';
//     for (let i = 0; i < str.length; i++) {
//         const num = str[i];
//         if (numbers[num]) acc += str[i];
//         else {
//             sum += Number(acc);
//             acc = '';
//         }
//     }
//     sum += Number(acc);
//     return sum;
// }

// function sortNumbers(str){
//     let firstStr = '';
//     let secondStr = '';
//     let digit = str.match(/\d/g) || [];
//
//     digit.forEach(el => {
//         if(el >= '0' && el <= '4'){
//             firstStr += el;
//         } else if(el >= '5' && el <= '9'){
//             secondStr += el;
//         }
//     })
//     return [firstStr, secondStr];
// }

// function sumAllNumbers(str){
//     const numbers = { 0: true, 1: true, 2: true, 3: true, 4: true, 5: true, 6: true, 7: true, 8: true, 9: true };
//     let sum = 0;
//     let acc = '';
//     for (let i = 0; i < str.length; i++) {
//         const el = str[i];
//         const nextEl = str[i + 1];
//         if (numbers[el] || el === '-' && numbers[nextEl] && acc === '') {
//             acc += el;
//         }
//
//         else if(el === '-' && numbers[nextEl] && acc !== ''){
//             sum += Number(acc);
//             acc = '-';
//         }
//         else {
//             sum += Number(acc);
//             acc = '';
//         }
//     }
//     sum += Number(acc);
//     return sum;
// }

// function sumPositiveAndNegative(str){
//     let str1 = str.split(', ');
//     let sum = 0;
//     for(let i = 0; i < str1.length; i++){
//         if(!isNaN(str1[i]) && str1[i].trim() !== ''){
//             sum += +str1[i];
//         }
//     }
//     return sum;
// }

// function sumPositiveAndNegative(str){
//     let str1 = str.split(', ');
//     let sum = 0;
//     for(let i = 0; i < str1.length; i++){
//         if(!isNaN(str1[i])){
//             sum += Number(str1[i]);
//         }
//     }
//     return sum;
// }

// function average(str){
//     if(!str){
//         return 'No data';
//     }
//     let str1 = str.split(' ');
//     let sum = 0;
//     let count = 0;
//     for(let i = 0; i < str1.length; i++){
//         let number = parseFloat(str1[i]);
//         if(!isNaN(number)){
//             sum += number;
//             count++
//         }
//     }
//     return count > 0 ? sum / count : 'No data';
// }

// function findAndSum(str){
//     let numbers = '0123456789';
//     let sum = 0;
//     let chunk = '';
//     for(let i = 0; i < str.length; i++) {
//         if (numbers.includes(str[i])){
//             chunk += str[i];
//         } else {
//             sum += Number(chunk);
//             chunk = '';
//         }
//     }
//     if (chunk !== '') {
//         sum += Number(chunk);
//     }
//     return sum;
// }

// function sumOfFractionalNumbers(str){
//     let sum = 0;
//     let currNumber = '';
//     let flag = false;
//     let addToSum = () => {
//         if(currNumber){
//             sum += parseFloat(currNumber);
//             currNumber = '';
//             flag = false;
//         }
//     }
//     for(let i of str + ' '){
//         if(i >= '0' && i <= '9'){
//             currNumber += i;
//         } else if(i == '.' && !flag){
//             currNumber += i;
//             flag = true;
//         }else{
//             addToSum();
//         }
//     }
//     return sum;
// }

// const str = 'w10r * (2) 2n3, wer30';
// const digits = '0123456789';
//
// let acc = 0;
// let n = '';
//
// for(let i = 0; i < str.length; i++) {
//     if(digits.includes(str[i])) {
//         n += str[i];
//     } else {
//         acc += +n;
//         n = '';
//     }
//     if(i === str.length - 1) {
//         acc += +n;
//     }
// }
// console.log(acc)

// function sumOfFractionalNumbers(str){
//     if(str === 0){
//         return 0;
//     }
//     let sum = 0;
//     let curr = '';
//     for(let i = 0; i <= str.length; i++){
//         if(i < str.length && (str[i] >= '0' && str[i] <= '9' || str[i] == '.')){
//             curr += str[i];
//         } else if(curr.length > 0){
//             sum += parseFloat(curr);
//             curr = '';
//         } if(i == str.length && curr.length > 0){
//             sum += parseFloat(curr);
//         }
//     }
//     return sum;
// }

// function sumAllNums(str){
//     let sum = 0;
//     let curr = '';
//     for(let i = 0; i < str.length; i++){
//         if(i < str.length && (str[i] >= '0' && str[i] <= '9' || str[i] == '.' || str[i] == '-')){
//             curr += str[i];
//         }else {
//             if(curr !== ''){
//                 sum += parseFloat(curr);
//                 curr = '';
//             }
//         }
//     }
//     if(curr !== ''){
//         sum += parseFloat(curr);
//     }
//     return sum;
// }

// const str = '-1, 9'
// const digits = '0123456789';
// let acc = 0;
// let number = '';
// for(let i = 0; i < str.length; i++){
//     if(digits.includes(str[i])) number += str[i];
//     else{
//         acc += +number;
//         number = '';
//     }
//     if(i === str.length - 1) acc += +number;
// }
// console.log(acc);

// function sumNumbers(str){
//     const digits = '0123456789';
//     let acc = 0;
//     let num = '';
//     for(let i = 0; i < str.length; i++){
//         if(digits.includes(str[i])) num += str[i];
//         else{
//             acc += +num;
//             num = '';
//         }
//         if(i === str.length - 1) acc += +num;
//     }
//     return acc;
// }
// console.log(sumNumbers('herbivores - 7 cows, carnivores - 3 bears'));

// function sumNumbers(str){
//     const digits = '0123456789';
//     let acc = 0;
//     let number = '';
//     for(let i = 0; i < str.length; i+=2){
//         if(digits.includes(str[i])) number += str[i];
//         else{
//             acc += +number;
//             number = '';
//         }
//         if(i === str.length - 1) acc += +number;
//     }
//     return acc;
// }
// console.log(sumNumbers('1st, 2nd, 3rd, 4th, 5th'));

// function sumNumbers(str){
//     const digits = '0123456789';
//     let acc = 0;
//     let number = '';
//     for(let i = str.length - 1; i >=0; i--){
//         if(digits.includes(str[i])) number += str[i];
//         else{
//             acc += +number;
//             number = '';
//         }
//         if(str[i] === str[0]) acc += +number;
//     }
//     return acc;
// }
// console.log(sumNumbers('3 cats, 5 dogs, 12 mice'));

// function sumNumbers(str){
//     const digits = '0123456789';
//     let acc = 0;
//     let number = '';
//     for(let i = str.length - 1; i >= 0; i = i - 2){
//         if(digits.includes(str[i])) number += str[i];
//         else{
//             acc += +number;
//             number = '';
//         }
//         if(str[i] === str[0]) acc += +number;
//     }
//     return acc;
// }
// console.log(sumNumbers('1st, 2nd, 3rd, 4th, 5th, 7th, 8th, 3th'));

// function sumNumbers(str){
//     const digits = '0123456789';
//     let acc = 0;
//     let number = '';
//     for(let i = 0; i < str.length; i++){
//         if(digits.includes(str[i])) number += str[i];
//         else{
//             acc += +number;
//             number = '';
//         }
//         if(i === str.length - 1) acc += +number;
//     }
//     return acc;
// }
// console.log(sumNumbers('YOU 83COM3 WH47 YOU 83L1V3!'));

// function reverseBiggerString(arr){
//     let first = arr[0].length >= arr[1].length ? arr[0] : arr[1];
//     let reverse = first.split('').reverse().join('');
//     return [arr[0], arr[1], reverse]
// }

// function checkStr(str){
//     let newStr = str.toLowerCase();
//     for(let i = 0; i < newStr.length / 2; i++){
//         if(newStr[i] !== newStr[newStr.length -1 -i]){
//             return `${newStr} is not palindrome`
//         }
//     }
//     return `${newStr} is palindrome`
// }

// function wordsDivider(str){
//     if(str.length === 0){
//         return []
//     }
//     return str.split(' ');
// }

// function sumNumbers(str){
//     const digits = '0123456789';
//     let acc = 0;
//     let n = '';
//
//     for(let i = 0; i < str.length; i++) {
//         if(digits.indexOf(str[i]) !== -1) n += str[i];
//         else {
//             acc += +n;
//             n = '';
//         }
//         if(i === str.length - 1) acc += +n;
//     }
//     return acc;
// }
// console.log(sumNumbers(' ...1,?1 205^@6 99%/*-+ :0 9daw80'));

// function numberOfOccurrencesBothEl(str, el1, el2){
//     let firstEl = 0;
//     let secondEl = 0;
//     let newStr = str.toLowerCase();
//     let newEl1 = el1.toLowerCase();
//     let newEl2 = el2.toLowerCase();
//     for(let i of newStr){
//         if(i === newEl1){
//             firstEl++
//         } if(i === newEl2){
//             secondEl++
//         }
//     }
//     return `First element: ${firstEl}, second element: ${secondEl}`
// }

// function whatWin(str1, str2){
//     let newStr1 = str1.toLowerCase();
//     let newStr2 = str2.toLowerCase();
//     let firstWord = 0;
//     let secondWord = 0;
//     let vowels = 'aeiou';
//     for(let i of newStr1){
//         if(vowels.includes(i)){
//             firstWord++
//         }
//     }
//     for(let i of newStr2){
//         if(vowels.includes(i)){
//             secondWord++
//         }
//     }if(firstWord > secondWord){
//         return 'First word wins!';
//     }else if(firstWord < secondWord){
//         return 'Second word wins!'
//     } else {
//         return `It's a draw!`
//     }
// }

// function digitsToArray(str){
//     let numbers = '0987654321';
//     let arr = [];
//     for(let i of str){
//         if(numbers.includes(i)){
//             arr.push(parseInt(i))
//         }
//     }
//     return arr;
// }

// function findDuplicates(str){
//     let str1 = str.replace(/-/g, ' ');
//     let arr = str1.split(' ');
//     let unique = new Set();
//     arr.forEach(el => {
//         if(el){
//             unique.add(el);
//         }
//     })
//     return Array.from(unique).join(' ');
// }

// function isAnagram(str1, str2){
//     str1 = str1.toLowerCase();
//     str2 = str2.toLowerCase();
//     if(str1.length !== str2.length){
//         return false;
//     }
//     let count1 = {};
//     let count2 = {};
//     for(let i = 0; i < str1.length; i++){
//         let char = str1[i];
//         if(count1[char]){
//             count[char]++
//         }else{
//             count1[char] = 1;
//         }
//     }
//     for(let i = 0; i < str2.length; i++){
//         let char = str2[i];
//         if(count2[char]){
//             count2[char]++
//         }else{
//             count2[char] = 1;
//         }
//     }
//     for(let i in count1){
//         if(count1[i] !== count2[i]){
//             return false;
//         }
//     }
//     return true;
// }

// function reverseOnlyLastWord(str){
//     if(str.trim() === ''){
//         return '';
//     }
//     let words = str.match(/\S+|s+|[.,?!.;]/g);
//     let index = words.reduce((lastIndex, word, ind) => /\S/.test(word) ? ind : lastIndex, -1);
//     if(index !== -1){
//         words[index] = words[index].split('').reverse().join('');
//     }
//     return words.join(' ');
// }

// function digitsToWords(str){
//     let digitWords = {
//         '0': 'zero',
//         '1': 'one',
//         '2': 'two',
//         '3': 'three',
//         '4': 'four',
//         '5': 'five',
//         '6': 'six',
//         '7': 'seven',
//         '8': 'eight',
//         '9': 'nine'
//     }
//     let res = [];
//     for(let i = 0; i < str.length; i++){
//         let char = str[i];
//         if(digitWords[char]){
//             res.push(digitWords[char]);
//         }else{
//             res.push(char)}
//     }
//     return res.join('');
// }

// function arrayToString(arr){
//     if(arr.length == 0){
//         return 'Array is empty';
//     }
//     let str = '';
//     for(let i = 0; i < arr.length; i++){
//         str += arr[i];
//     }
//     return str;
// }

// function squareRoot(arr){
//     let res= [];
//     for(let i of arr){
//         let number = Number(i);
//
//         if(number >= 0){
//             let sqrt =
//                 Math.round(Math.sqrt(number));
//             res.push(sqrt);
//         }else {
//             res.push(false);
//         }
//     }
//     return res;
// }

// const arr = [123, 'abc', true, null, undefined, {name: 'Jack'}];
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = ['one', 2, 3, 'two', 2, 3, 'three', 2, 3];
// for(let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }

// function squareRoot(arr){
//     let newArr = [];
//     for(let i = 0; i < arr.length; i++){
//         let number = Number(arr[i]);
//         if(!isNaN(number) && number >= 0){
//             let sqrt = Math.round(Math.sqrt(number));
//             newArr.push(sqrt);
//         } else{
//             newArr.push(false)
//         }
//     }
//     return newArr;
// }

// function sumAllNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let newArr = [];
//     let sum = 0;
//     for(let i of arr){
//         if(typeof i == 'number'){
//             newArr.push(i);
//             sum += i;
//         }
//     }
//     newArr.push(`Sum of all numbers is ${sum}`);
//     return newArr;
// }

// function sumAndCount(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let sum = 0;
//     let count = 0;
//     for(let i of arr){
//         let number = parseFloat(i);
//         if(!isNaN(number)){
//             sum += number;
//             count++;
//         }
//     }
//     if(count === 0){
//         return 'No numbers were found in array';
//     } else {
//         return `Count of numbers: ${count}, sum of numbers: ${sum}`
//     }
// }

// function sortLettersByCase(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arrLower = [];
//     let arrUpper = [];
//     for(let i of arr){
//         if(i === i.toLowerCase() && i !== i.toUpperCase()){
//             arrLower.push(i);
//         } else {
//             arrUpper.push(i);
//         }
//     }
//     return [...arrLower, ...arrUpper]
// }

// function typesOfElements(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i of arr){
//         arr1.push(typeof i);
//     }
//     return arr1;
// }

// function countElementTypes(arr){
//     if(arr.length === 0){
//         return 'Array has no elements';
//     }
//     let obj = {};
//     for(let i of arr){
//         let type = typeof i;
//         if(obj[type]){
//             obj[type]++
//         } else {
//             obj[type] = 1;
//         }
//     }
//     return obj;
// }

// function checkTypes(arr){
//     if (arr.length === 0) return 'There is nothing to do here :(';
//
//     let power = 1;
//     let string = '';
//     let booleanCount = 0;
//
//     for (let i = 0; i < arr.length; i++){
//
//         if (typeof arr[i] === 'number' && string === '' && booleanCount === 0) power *= arr[i];
//         else if (typeof arr[i] === 'string' && power === 1 && booleanCount === 0) string += arr[i];
//         else if (typeof arr[i] === 'boolean' && power === 1 && string === '') booleanCount++;
//         else return 'There are different types in array';
//     }
//
//     if (power !== 1) return power;
//     else if (string !== '') return string;
//     else return booleanCount;
// }

// function getAllSmallOnes(arr){
//     if(arr.length === 0){
//         return 'Array has no elements';
//     }
//     let arr1 = [];
//     let str = '';
//     for(let i of arr){
//         if(i.length <= 3){
//             str += i;
//         } else {
//             arr1.push(i);
//         }
//     }
//     arr1.unshift(str);
//     return arr1;
// }

// function fillThemUp(arr){
//     if(arr.length === 0){
//         return false;
//     }
//     let arr1 = [];
//     for(let i of arr){
//         if(i.length < 5){
//             while(i.length < 5){
//                 i += '#';
//             }
//         }
//         arr1.push(i);
//     }
//     return arr1;
// }


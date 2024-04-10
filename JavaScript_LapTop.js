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
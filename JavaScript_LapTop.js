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

// const arr = [1, 2, 3, NaN];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, '4', NaN, 'hello', undefined, null, -3];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(!Number.isNaN(+arr[i])) acc += +arr[i];
// }
// console.log(acc)

// function secondMinEvenNumber(arr){
//     let minEven = Infinity;
//     let secondMinEven = Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 === 0){
//             if(arr[i] < minEven){
//                 secondMinEven = minEven;
//                 minEven = arr[i];
//             } else if(arr[i] < secondMinEven && arr[i] !== minEven){
//                 secondMinEven = arr[i];
//             }
//         }
//     }
//     if(secondMinEven === Infinity){
//         return false
//     } else {
//         return secondMinEven;
//     }
// }

// function secondMaxOddNumber(arr){
//     let maxOdd = -Infinity;
//     let secondMaxOdd = -Infinity;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 2 !== 0){
//             if(arr[i] > maxOdd){
//                 secondMaxOdd = maxOdd;
//                 maxOdd = arr[i];
//             } else if(arr[i] > secondMaxOdd && arr[i] !== maxOdd){
//                 secondMaxOdd = arr[i];
//             }
//         }
//     }
//     if(secondMaxOdd === -Infinity){
//         return false
//     } else {
//         return secondMaxOdd;
//     }
// }

// function secondMinNumber(arr){
//     if(arr.length === 0 || arr[0].length === 0) return 'There are no numbers';
//     let min = Infinity;
//     let secondMin = Infinity;
//
//     for(let i = 0; i < arr[0].length; i++){
//         if(+arr[0][i] < min) min = +arr[0][i];
//     }
//     for(let i = 0; i < arr[0].length; i++){
//         if((secondMin === min || +arr[0][i] < secondMin) && +arr[0][i] !== min) secondMin = +arr[0][i];
//     }
//
//     if(secondMin === Infinity) return 'There is no second min number';
//     else return secondMin
// }

// function secondMinNumber(arr){
//     if(arr.length === 0 || arr[0].length === 0) return 'There are no numbers';
//     let min = +arr[0][0];
//     let secondMin = +arr[0][0];
//
//     for(let i = 0; i < arr[0].length; i++){
//         if(+arr[0][i] < min) min = +arr[0][i];
//     }
//     for(let i = 0; i < arr[0].length; i++){
//         if((secondMin === min || +arr[0][i] < secondMin) && +arr[0][i] !== min) secondMin = +arr[0][i];
//     }
//
//     if(secondMin === min) return 'There is no second min number';
//     else return secondMin
// }

// function firstAndSecondMax(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let max = 0;
//     let maxSecond = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > max){
//             max = arr[i].length;
//         }
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length > maxSecond && arr[i].length < max){
//             maxSecond = arr[i].length;
//         }
//     }
//     if(maxSecond === 0){
//         if(max === 0 || arr.every(el => el.length === max)){
//             return 'Strings are equal';
//         }
//     }
//     return [max, maxSecond];
// }

// const arr = [123, 'abc', true, null, undefined, {name: 'Jack'}];
//
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = ['one', 2, 3, 'two', 2, 3, 'three', 2, 3];
//
// for(let i = 0; i < arr.length; i += 3) {
//     console.log(arr[i]);
// }

// const arr = [false, false, true, true, true, false, false];
//
// for(let i = 2; i < arr.length - 2; i++) {
//     console.log(arr[i]);
// }

// const arr = [-2, -1, 0, 1, 2]
// let firstMin = arr[0];
// let secondMin = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < firstMin){
//         secondMin = firstMin;
//         firstMin = arr[i];
//     }else if(arr[i] < secondMin && arr[i] > firstMin){
//         secondMin = arr[i];
//     }else if(firstMin === secondMin){
//         secondMin = arr[i];
//     }
// }
// console.log([firstMin, secondMin])

// const arr = [-2, -1, 0, 1, 2];
// let firstMax = arr[0];
// let secondMax = arr[0];
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > firstMax) {
//         secondMax = firstMax;
//         firstMax = arr[i];
//     } else if(arr[i] > secondMax && arr[i] < firstMax){
//         secondMax = arr[i];
//     } else if(firstMax === secondMax){
//         secondMax = arr[i];
//     }
// }
// console.log([firstMax, secondMax]);

// function secondMinAndMax(arr){
//     let result = '';
//     let firstMin = arr[0];
//     let secondMin = arr[0];
//     let firstMax = arr[0];
//     let secondMax = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < firstMin) {
//             secondMin = firstMin;
//             firstMin = arr[i];
//         } else if(arr[i] < secondMin && arr[i] > firstMin){
//             secondMin = arr[i];
//         } else if(firstMin === secondMin){
//             secondMin = arr[i];
//         }
//         if(arr[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = arr[i];
//         } else if(arr[i] > secondMax && arr[i] < firstMax){
//             secondMax = arr[i];
//         } else if(firstMax === secondMax){
//             secondMax = arr[i];
//         }
//     }
//
//     result = `Second Min: ${secondMin}, Second Max: ${secondMax}`
//
//     return result;
// }
//
// console.log(secondMinAndMax([-2, -1, 0, 1, 2, 3, 4]));

// const arr = [-2, -1, 0, 1, 2]
// let firstMin = arr[0];
// let secondMin = arr[0];
// let firstMin2 = arr[arr.length - 1];
// let secondMin2 = arr[arr.length - 1];
//
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < firstMin){
//         secondMin = firstMin;
//         firstMin = arr[i];
//     }else if(arr[i] < secondMin && arr[i] > firstMin){
//         secondMin = arr[i];
//     }else if(firstMin === secondMin){
//         secondMin = arr[i];
//     }
// }
//
// for(let i = arr.length - 2; i >= 0; i--){
//     if(arr[i] < firstMin2){
//         secondMin2 = firstMin2;
//         firstMin2 = arr[i];
//     }else if(arr[i] < secondMin2 && arr[i] > firstMin2){
//         secondMin2 = arr[i];
//     }else if(firstMin2 === secondMin2){
//         secondMin2 = arr[i];
//     }
// }
// console.log(secondMin === secondMin2)

// function secondMinAndMax(arr){
//     let result = '';
//     let firstMin = arr[0];
//     let secondMin = arr[0];
//     let firstMax = arr[0];
//     let secondMax = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < firstMin) {
//             secondMin = firstMin;
//             firstMin = arr[i];
//         } else if(arr[i] < secondMin && arr[i] > firstMin){
//             secondMin = arr[i];
//         } else if(firstMin === secondMin){
//             secondMin = arr[i];
//         }
//         if(arr[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = arr[i];
//         } else if(arr[i] > secondMax && arr[i] < firstMax){
//             secondMax = arr[i];
//         } else if(firstMax === secondMax){
//             secondMax = arr[i];
//         }
//     }
//
//     result = `Second Min: ${secondMin}, Second Max: ${secondMax}`
//
//     return result;
// }
//
// console.log(secondMinAndMax([17, -18, 17.1, -18.1, 17.4, -18.3]));

// function secondMinAndMax(arr){
//     let result = '';
//     let firstMin = arr[0];
//     let secondMin = arr[0];
//     let firstMax = arr[0];
//     let secondMax = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < firstMin) {
//             secondMin = firstMin;
//             firstMin = arr[i];
//         } else if(arr[i] < secondMin && arr[i] > firstMin){
//             secondMin = arr[i];
//         } else if(firstMin === secondMin){
//             secondMin = arr[i];
//         }
//         if(arr[i] > firstMax) {
//             secondMax = firstMax;
//             firstMax = arr[i];
//         } else if(arr[i] > secondMax && arr[i] < firstMax){
//             secondMax = arr[i];
//         } else if(firstMax === secondMax){
//             secondMax = arr[i];
//         }
//     }
//
//     result = `Second Min: ${secondMin}, Second Max: ${secondMax}`
//
//     return result;
// }
//
// console.log(secondMinAndMax([237]));

// function doubleNumber(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             arr[i] *= 2;
//         }
//     }
//     return arr;
// }

// function doubleAndReturnNumbers(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             arr1.push(arr[i] * 2);
//         }
//     }
//     return arr1;
// }

// function doubleAndReturnNumbers(arr){
//     let arr1 = [];
//     for(let i of arr){
//         if(typeof i === 'number'){
//             arr1.push(i * 2);
//         }
//     }
//     return arr1;
// }

// function doubleAllNumbers(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number' || !isNaN(arr[i])){
//             arr[i] *= 2;
//         }
//     }
//     return arr;
// }

// function allNumbers(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(Array.isArray(arr[i])){
//             for(let j = 0; j < arr[i].length; j++){
//                 if(typeof arr[i][j] === 'number' || !isNaN(arr[i][j])){
//                     arr[i][j] *= 2;
//                 }
//             }
//         } else{
//             if(typeof arr[i] === 'number' || !isNaN(arr[i])){
//                 arr[i] *= 2;
//             }}
//     }
//     return arr;
// }

// function doubleNumbers(arr){
//     let str = '';
//     for(let i of arr){
//         if(i === 'number' || !isNaN(i)){
//             str += i * 2 + ' ';
//         }
//     }
//     return str.trim();
// }

// function doubleNumbers(arr){
//     let obj = {};
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number' && !obj.hasOwnProperty(arr[i])){
//             obj[arr[i]] = arr[i] * 2;
//         }
//     }
//     return obj;
// }

// function doubleNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let even = [];
//     let odd = [];
//     let flag = false;
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] === ''){
//             continue;
//         }
//         let number = Number(arr[i]);
//         if(!isNaN(number)){
//             flag = true;
//             if(number % 2 === 0){
//                 even.push(number * 2)
//             } else {
//                 odd.push(number * 2)
//             }
//         }
//     }
//     if(!flag){
//         return `Array doesn't contain numbers`;
//     }
//     return [even.join(' '), odd.join(' ')];
// }

// function doubleNumbers(arr) {
//     const newArr = [];
//     const numbers = '0123456789';
//     for (let i = 0; i < arr.length; i++) {
//         let str = '';
//         for(let j = 0; j < arr[i].length; j++) {
//             if (numbers.includes(arr[i][j])) str += +arr[i][j] * 2;
//             else str +=arr[i][j]
//         }
//         newArr.push(str)
//     }
//     return newArr;
// }

// function doubleNumbers(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         let str = '';
//         for(let j = 0; j < arr[i].length; j++){
//             if(!isNaN(parseInt(arr[i][j]))){
//                 str += parseInt(arr[i][j]) * 2
//             }
//         }
//         if(str !== ''){
//             arr1.push(str);
//         }
//     }
//     return arr1;
// }

// function doubleOddNumbers(arr){
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number' && arr[i] % 2 !== 0){
//             arr[i] *= 2;
//         }
//     }
//     return arr;
// }

// const arr = ['2 + 3', 5, NaN, -2, true, 1.3];
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         console.log(arr[i]);
// }

// const arr = [NaN, 15, 'one', 201, 7, -13];
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         console.log(i);
// }

// const arr = [2, -4, 8];
// for(let i = arr.length - 1; i >= 0; i--) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         arr[i] = arr[i] * 2;
// }
// console.log(arr);

// const arr = [10, 'two', 25, -5, NaN, 11, 0];
// for(let i = 0; i < arr.length; i += 2) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         arr[i] *= 2;
// }
// console.log(arr);

// const arr = [20, 50, 3, 100];
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         arr[i] *= -2;
// }
// console.log(arr);

// const arr = [-2, 0, -3, 100, Infinity];
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         arr[i] *= -2;
// }
// console.log(arr);

// const arr = [NaN, -2, 0, -3, Infinity];
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]) && arr[i] !== Infinity)
//         arr[i] *= -2;
// }
// console.log(arr);

// function onlyNumbers(arr){
//     if(arr.length === 0){
//         return [];
//     }
//     let arr1 = [];
//     for(let i of arr){
//         if(typeof i === 'number'){
//             arr1.push(i);
//         }
//     }
//     return arr1;
// }

// function onlyNumbers(arr){
//     let arr1 = [];
//     for(let i of arr){
//         if(typeof i === 'number' && !isNaN(i)){
//             arr1.push(i)
//         } else if(typeof i === 'string' && !isNaN(i) && i.trim() !== ''){
//             arr1.push(Number(i));
//         }
//     }
//     return arr1;
// }

// function onlyNumbers(arr){
//     let arr1 = [];
//     if(arr.length === 0){
//         return [];
//     }
//     for(let i of arr){
//         if(typeof i === 'number' && i >= 0 && i <= 9){
//             arr1.push(i);
//         }
//     }
//     return arr1;
// }

// function onlyNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let str = '';
//     for(let i of arr){
//         if(typeof i === 'number' && !isNaN(i)){
//             str += i;
//         }
//     }
//     if(str.length === 0){
//         return 'No numbers in array';
//     }
//     return [str];
// }

// function onlyNumbers(arr){
//     let str = '';
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             str += arr[i];
//         }
//     }
//     for(let j = 0; j < str.length; j++){
//         if(Number(str[j]) >= 0 && Number(str[j]) <= 9){
//             arr1.push(Number(str[j]))
//         }
//     }
//     if(arr1.length === 0){
//         return false;
//     }
//     return arr1;
// }

// function only1And3LengthDigits(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] >= 0 && arr[i] <= 9){
//             arr1.unshift(arr[i]);
//         } else if(String(arr[i]).length === 3){
//             arr1.push(arr[i])
//         }
//     }
//     if(arr1.length === 0){
//         return false;
//     }
//     return arr1;
// }

// function fixTheNumbers(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i] % 1 !== 0){
//             arr1.push(Math.round(arr[i]))
//         }}
//     return arr1.length > 0 ? arr1 : false;
// }

// const arr = [4, 1, 2, 6, 8, 3];
//
// for (let i = arr.length -1; i >= 0; i--){
//     console.log(arr[i])
// }

// const arr = [4, 1, 2, 6, 8];
//
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[arr.length - i - 1])
// }

// const arr = [1, 2, 3, 4, 5];
//
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);    // 1, 2, 3, 4, 5
// }

// const arr = [1, 2, 3, 4, 5];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, 3, 4, 5, 'string', '10'];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     acc += arr[i];
// }
// console.log(acc)

// const arr = [null, 1, 'a', 2, 'b', 3, undefined, 4, 5, 'string', '10'];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, 3, NaN];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, '4', NaN, 'hello', undefined, null, -3];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(!Number.isNaN(+arr[i])) acc += +arr[i];
// }
// console.log(acc)

// const arr = [1, 2, 3, 4, 5];
//
// for(let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// const arr = [1, 2, 3, 4, 5];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, 3, 4, 5, 'string', '10'];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     acc += arr[i];
// }
// console.log(acc)

// const arr = [null, 1, 'a', 2, 'b', 3, undefined, 4, 5, 'string', '10'];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, 3, NaN];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number') acc += arr[i];
// }
// console.log(acc)

// const arr = [1, 2, '4', NaN, 'hello', undefined, null, -3];
//
// let acc = 0;
//
// for(let i = 0; i < arr.length; i++) {
//     if(!Number.isNaN(+arr[i])) acc += +arr[i];
// }
// console.log(acc)

// const arr = ['4', 0, NaN, 'a', 2, 6];
//
// let acc = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (!Number.isNaN(+arr[i])) acc += +arr[i]
// }
//
// console.log(acc);

// const arr = ['4', 0, NaN, 1, 'a', 2, 6];
//
// let acc = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
//         acc += +arr[i]
//     }
// }
// console.log(acc);

// const arr = ['4', 0, NaN, 1, 'a', 2, 6];
//
// let acc = 0;
// let count = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
//         acc += arr[i]
//         count++
//     }
// }
// console.log(acc / count);

// const arr = [5, 15, 0, 9, 45, -8]
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);

// function onlyPositiveAndEven(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i of arr){
//         if(i > 0 && i % 2 === 0){
//             arr1.push(i);
//         }
//     }
//     if(arr1.length === 0){
//         return 'No matches found'
//     }
//     return arr1;
// }

// function onlyNegativeAndOdd(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i of arr){
//         if(i < 0 && i % 2 !== 0 && typeof i === 'number'){
//             arr1.push(i);
//         }
//     }
//     if(arr1.length === 0){
//         return 'No matches found'
//     }
//     return arr1;
// }

// function findArrayWithNumbers(arr){
//     let arr1 = [];
//     let index = -1;
//     for(let i = 0; i < arr.length; i++){
//         let flag = true;
//         for(let j = 0; j < arr[i].length; j++){
//             if(typeof arr[i][j] !== 'number'){
//                 flag = false;
//                 break;
//             }
//         }
//         if(flag && arr[i].length > 0){
//             index = i;
//             for(let k = 0; k < arr[i].length; k++){
//                 arr1.push(arr[i][k] * 3);
//             }
//             break;
//         }
//     }
//     if(index !== -1){
//         return [`Array with numbers by index ${index}`, arr1]
//     }
//     return [];
// }

// const arr = [7.3, (-10 / 0), 'plus', 6, NaN, 2, (11 * 2), null, -5, (2 / 0)];
// const numbers = [];
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//         numbers.push(arr[i]);
//     }
// }
// console.log(numbers)

// const arr = [(5 - 7), NaN, 77, (-35 / 0), (2 * 7), (9 / 0)];
// const numbers = [];
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]) && arr[i] !== Infinity && arr[i] !== -Infinity){
//         numbers.push(arr[i]);
//     }
// }
// console.log(numbers)

// const arr = [(51 + 7), NaN, 17, (-35 / 0), (2 * 7), '3 * 2', (9 / 0)];
// const numbers = [];
// for(let i = arr.length - 1; i >= 0 ; i--){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]) && arr[i] !== Infinity && arr[i] !== -Infinity){
//         numbers.push(arr[i]);
//     }
// }
// console.log(numbers)

// const arr = [(-10 / 0), 11, 'PASV', NaN, ((-1) ** 2), -5];
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== 'number' || isNaN(arr[i])){
//         arr.splice(i, 1);
//         i--;
//     }
// }
// console.log(arr)

// const arr = [(10 / 0), 11, 'PASV', NaN, ((-1) ** 2), -5];
// for(let i = arr.length - 1; i >= 0; i--){
//     if(typeof arr[i] !== 'number' || isNaN(arr[i]) || arr[i] === Infinity || arr[i] === -Infinity){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr)

// const arr = [9, (3 * 'a'), 12, (7 / 0), 73];
// for(let i = arr.length - 1; i >= 0; i-=2){
//     if(typeof arr[i] !== 'number' || isNaN(arr[i]) || arr[i] === Infinity || arr[i] === -Infinity){
//         arr.splice(i, 1);
//     }
// }
// console.log(arr)

// function deleteDuplicate(arr){
//     const newArr = [];
//     const obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (!obj[arr[i]]) {
//             obj[arr[i]] = 1;
//             newArr.push(arr[i]);
//         }
//     }
//     return newArr;
// }

// function deleteDuplicate(array){
//     for (let i = 0; i < array.length; i++){
//         for (let j = i + 1; j < array.length; j++){
//             if (array[i] === array[j]){
//                 array.splice(j, 1);
//                 j--;
//             }
//         }
//     }
//     return array;
// }

// function deleteDuplicateNumber(arr){
//     let arr1 = [];
//     let res = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             if(!arr1.includes(arr[i])){
//                 arr1.push(arr[i])
//                 res.push(arr[i])
//             }
//         } else {
//             res.push(arr[i])
//         }
//     }
//     return res;
// }

// function deleteDuplicates(arr){
//     let result = [];
//     for(let i = 0; i<arr.length; i++){
//         if(arr.indexOf(arr[i]) === arr.lastIndexOf(arr[i]) || result.indexOf(arr[i]) === -1 ){
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// function noDuplicates(arr){
//     let seen = {};
//     for(let i = 0; i <arr.length; i++){
//         let  item = arr[i];
//         if(seen[item]){
//             arr.splice(i, 1);
//             i--;
//         }  else {
//             seen[item] = true;
//         }
//     }
//     return arr;
// }

// function deleteDuplicates(arr1, arr2){
//     let obj = {};
//     for(let i =0; i<arr2.length; i++){
//         obj[arr2[i]] = true;
//     }
//     let result  = arr1.filter(item => !obj[item]);
//     return [result, arr2];
// }

// function cleanDuplicates(arr){
//     let seen = {};
//     let result = [];
//
//     for(let i = 0; i < arr.length; i++){
//         if(!seen[arr[i]]){
//             seen[arr[i]] = true;
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// function duplicatedObjects(arr){
//     let result = [];
//     for(let i = 0; i< arr.length; i++){
//         let isUnique = true;
//         for(let j = 0; j< result.length; j++){
//             if(JSON.stringify(arr[i]) === JSON.stringify(result[j])){
//                 isUnique = false;
//                 break;
//             }
//         }
//         if(isUnique){
//             result.push(arr[i])
//         }
//     }
//     return result;
// }

// function onlyUnique(arr){
//     let arr1 = [];
//     let obj = {};
//     for(let i of arr){
//         if(!obj[i.id]){
//             obj[i.id] = true;
//             arr1.push(i);
//         }
//     }
//     return arr1;
// }

// function deleteDuplicate(arr){
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(!arr1.includes(arr[i])){
//             arr1.push(arr[i])
//         }
//     }
//     return arr1;
// }

// function isPalindrome(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let str = arr.join(' ').toLowerCase();
//     for(let i = 0; i < Math.floor(str.length / 2); i++){
//         if(str[i] !== str[str.length - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isPalindrome(arr) {
//     if (arr.length === 0) return 'Array is empty';
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) return false;
//     }
//     return true;
// }

// function isPalindrome(arr) {
//     if (arr.length === 0) return 'Array is empty';
//     const obj = {};
//     for (let i = 0; i < arr.length; i++) {
//         obj[arr[i]] = checkPalindrome(arr[i]);
//     }
//     return obj;
// }
//
// function checkPalindrome(str) {
//     let middle = str.length / 2;
//     for (let i = 0; i < middle; i++) {
//         if (str[i] !== str[str.length - 1 - i]) {
//             return 'not a palindrome';
//         }
//     }
//     return 'palindrome';
// }

// function isPalindrome(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let obj = {};
//     arr.forEach(el => {
//         obj[el] = checkPalindrome(el);
//     })
//     return obj;
// }
//
// function checkPalindrome(num){
//     let strNum = num.toString().replace('.', '');
//     return strNum === strNum.split('').reverse().join('') ? 'palindrome' : 'not a palindrome';
// }

// function isPalindrome(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let obj = {};
//     arr.forEach(el => {
//         obj[el] = checkPalindrome(el);
//     })
//     return obj;
// }
//
// function checkPalindrome(num){
//     let strNum = num.toString().replace('.', '');
//     let reverse = strNum.split('').reverse().join('');
//     if(strNum === reverse){
//         return 'palindrome';
//     }else{
//         return 'not a palindrome';
//     }
// }

// function isPalindrome(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let obj = {};
//     arr.forEach(el => {
//         let key = typeof el === 'string' ? el.trim() : el.toString();
//         obj[key] = isElPalindrome(el)
//     })
//     return obj;
// }
//
// function isElPalindrome(el){
//     let clean = el;
//     if(typeof el === 'string'){
//         clean = el.trim().replace(/_/g, '').toLowerCase();
//         if(clean === ''){
//             return 'String is empty';
//         }
//     } else {
//         clean = el.toString();
//     }
//     let reverse = clean.split('').reverse().join('');
//     return clean === reverse ? 'palindrome' : 'not a palindrome';
// }

// function isAnagram(arr1, arr2){
//     if(arr1.length === 0 && arr2.length === 0){
//         return 'Arrays are empty';
//     }
//     if(arr1.length === 0 || arr2.length === 0){
//         return false;
//     }
//     let str1 = arr1.join('').toLowerCase().split('').sort().join('');
//     let str2 = arr2.join('').toLowerCase().split('').sort().join('');
//     return str1 === str2;
// }

// function isAnagram(arr, str) {
//     if (arr.length === 0 && str.length === 0) return 'Array and string are empty';
//     if (arr.length === 0 || str.length === 0) return 'Array or string are empty';
//
//     const obj = {};
//     str = str.trim().toLowerCase();
//
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i].trim().toLowerCase();
//         obj[arr[i]] = anagram(arr[i], str);
//     }
//
//     return obj;
// }
// function anagram(str1, str2) {
//
//     if (str1.length !== str2.length) return `not anagram for the ${str2}`;
//
//     for (let i = 0; i < str1.length; i++) {
//         for (let j = 0; j < str2.length; j++) {
//             if (str1[i] === str2[j]) break;
//             if (str2.length - 1 === j) return `not anagram for the ${str2}`;
//         }
//     }
//     return `anagram for the ${str2}`;
// }

// function wordToLettersObj(str) {
//     let obj = {};
//     for (let i=0; i<str.length; i++)
//         if ( !obj[str[i]] ) obj[str[i]] = 1;
//         else obj[str[i]]++;
//     return obj;
// }
//
// function isAnagram(obj1, obj2) {
//     const keys1 = Object.keys(obj1);
//     const keys2 = Object.keys(obj2);
//
//     if (keys1.length !== keys2.length) {
//         return false;
//     }
//
//     for (let i=0; i<keys1.length; i++) {
//         const key = keys1[i];
//         if (obj1[key] !== obj2[key]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// function findAllAnagrams(arr, word) {
//     const result = [];
//     if (!word || arr.lenght === 0) {
//         return result;
//     }
//
//     const objWord = wordToLettersObj(word);
//     for (let i=0; i<arr.length; i++) {
//         if ( !arr[i] || arr[i].length !== word.length) {
//             continue;
//         }
//         let obj = wordToLettersObj(arr[i]);
//
//         if (isAnagram(objWord, obj)) {
//             result.push(arr[i]);
//         }
//     }
//     return result;
// }

// function areAllArraysAnagrams(arr){
//     if(arr.length < 2){
//         return false;
//     }
//     let strFirst = arr[0].slice().sort().join(',');
//     for(let i = 1; i < arr.length; i++){
//         let sortStr = arr[i].slice().sort().join(',');
//         if(sortStr !== strFirst){
//             return false;
//         }
//     }
//     return true;
// }

// function isPalindromeOrAnagram(arr1, arr2){
//     if(arr1.length === 0 && arr2.length === 0){
//         return 'none';
//     }
//     let reverse = arr1.join('');
//     let reverse1 = arr1.slice().reverse().join('');
//     if(reverse === reverse1){
//         return 'palindrome'
//     }
//     let sort1 = arr1.slice().sort().join('');
//     let sort2 = arr2.slice().sort().join('');
//     if(sort1 === sort2){
//         return 'anagram'
//     }
//     return 'none'
// }

// function isArraySymmetrical(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i = 0; i < arr.length / 2; i++){
//         if(arr[i] !== arr[arr.length - 1 - i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isArraySymmetrical(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i = 0; i < arr.length / 2; i++){
//         if(arr[i].toLowerCase() !== arr[arr.length - 1 - i].toLowerCase()){
//             return false;
//         }
//     }
//     return true;
// }

// function isArraySymmetrical(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             arr1.push(arr[i]);
//         }
//     }
//     if(arr1.length === 0){
//         return 'There are no numbers in the array';
//     }
//     for(let i = 0; i < arr1.length / 2; i++){
//         if(arr1[i] !== arr1[arr1.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// function keepOnlyPairs(arr){
//     if(arr.length === 0) return 'Array is empty';
//     const obj = {};
//
//     for(let i = 0; i < arr.length; i++){
//         if ( !obj[arr[i]] ) obj[arr[i]] = 1;
//
//         else obj[arr[i]]++;
//     }
//
//     for(let i = 0; i < arr.length; i++){
//         if ( obj[arr[i]] === 1 ) {
//             arr.splice(i, 1)
//             i--;
//         }
//     }
//     return arr;
// }
//

// function areTwoArraysSymmetrical(arr1, arr2){
//     if(arr1.length !== arr2.length){
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++){
//         if(arr1[i] !== arr2[arr2.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isArraySymmetrical(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let str = arr.join('').toLowerCase();
//     for(let i = 0; i < str.length / 2; i++){
//         if(str[i] !== str[str.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isArraySymmetrical(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let str = arr.join('').toLowerCase();
//     let emptyStr = '';
//     for(let i = 0; i < str.length; i++){
//         if(str[i] !== ' '){
//             emptyStr += str[i];
//         }
//     }
//     for(let i = 0; i < emptyStr.length / 2; i++){
//         if(emptyStr[i] !== emptyStr[emptyStr.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isArraySymmetrical(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let str = arr.join('').toLowerCase();
//     let emptyStr = '';
//     for(let i = 0; i < str.length; i++){
//         if(!/\d/.test(str[i])){
//             emptyStr += str[i];
//         }
//     }
//     for(let i = 0; i < emptyStr.length / 2; i++){
//         if(emptyStr[i] !== emptyStr[emptyStr.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// function isArraySymmetrical(arr) {
//     if(arr.length === 0) return 'Array is empty';
//     const str = arr.join(' ').toLowerCase()
//     const reversed = arr.slice().reverse().join(' ').toLowerCase()
//     return reversed === str
// }

// function isArraySymmetrical(arr){
//     let arr1 = [];
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'boolean' || typeof arr[i] === 'string'){
//             arr1.push(arr[i].toString().toLowerCase());
//         }
//     }
//     if(arr1.length === 0){
//         return 'There are no boolean or string in the array';
//     }
//     for(let i = 0; i < arr1.length / 2; i++){
//         if(arr1[i] !== arr1[arr1.length -1 -i]){
//             return false;
//         }
//     }
//     return true;
// }

// function reverseArray(arr){
//     let arr1 = [];
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i = 0; i < arr.length; i++){
//         arr1.unshift(arr[i])
//     }
//     return arr1;
// }

// function reverseArray(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = arr.length -1; i >= 0; i--){
//         arr1.push(arr[i]);
//     }
//     return arr1;
// }

// function reverseArray(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = arr.reverse();
//     return arr1;
// }

// function reverseInnerArrays(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         let innerArr = [];
//         for(let j = arr[i].length -1; j >= 0; j--){
//             innerArr.push(arr[i][j]);
//         }
//         arr1.push(innerArr);
//     }
//     return arr1;
// }

// function reverseInnerArraysWithNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         let innerArr = [];
//         for(let j = arr[i].length - 1; j >= 0; j--){
//             if(typeof arr[i][j] === 'number'){
//                 innerArr.push(arr[i][j]);
//             } else {
//                 innerArr.unshift(arr[i][j])
//             }
//         }
//         arr1.push(innerArr)
//     }
//     return arr1;
// }

// function reverseArrayOfStrings(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = arr.length -1; i >= 0; i--){
//         let str = '';
//         for(let j = arr[i].length -1; j >= 0; j--){
//             str += arr[i][j];
//         }
//         arr1.push(str);
//     }
//     return arr1;
// }

// function reverseArrayOfStrings(arr){
//     if(arr.length ===0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(/\d/.test(arr[i])){
//             arr1.push(arr[i]);
//         } else {
//             let str = '';
//             for(let j = arr[i].length -1; j >= 0; j--){
//                 str += arr[i][j];
//             }
//             arr1.push(str);
//         }
//     }
//     return arr1;
// }

// function reverseArrays(arr1, arr2){
//     if(arr1.length === 0 && arr2.length === 0){
//         return 'Both arrays are empty';
//     }
//     let arr = arr1.concat(arr2);
//     let array = [];
//     for(let i =0; i < arr.length; i++){
//         array.unshift(arr[i]);
//     }
//     return array;
// }

// function reverseOnlyMarkedArr(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].includes('reverse')){
//             arr[i].reverse();
//         }
//         arr1.push(arr[i]);
//     }
//     return arr1;
// }
//
// console.log(reverseOnlyMarkedArr([[1, 2, 3], [4, 5,'reverse', 6, 7], [8, 9, 10, 11, 12]]))

// function reverseOnlyMiddle(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let str = '';
//     let middle = Math.floor(arr.length / 2);
//     let midEl = arr[middle];
//     for(let i = midEl.length -1; i >= 0; i--){
//         str += midEl[i];
//     }
//     let res = [...arr];
//     res[middle] = str;
//     return res;
// }

// function findMax(arr) {
//     let max = arr[0];
//     for(let i = 1; i < arr.length; i++) {
//         if(arr[i] > max) {
//             max = arr[i]
//         }
//     }
//     return max;
// }
// console.log(findMax([1, 2, 3, 4]));

// function splitArrayInTwo(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let arr1 = [];
//     let arr2 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i < Math.round(arr.length / 2)){
//             arr1.push(arr[i]);
//         } else {
//             arr2.push(arr[i]);
//         }
//     }
//     return [arr1, arr2];
// }

// function splitPosNeg(arr){
//     if(arr.length === 0){
//         return [];
//     }
//     let arr1 = [];
//     let arr2 = [];
//     for(let i of arr){
//         if(i > 0){
//             arr1.push(i);
//         } else if(i < 0){
//             arr2.push(i)
//         }
//     }
//     if(arr1.length === 0 && arr2.length === 0){
//         return [];
//     }
//     return [arr1, arr2];
// }

// const arr = ['4', 0, NaN, 'a', 2, 6];
// let acc = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (!Number.isNaN(+arr[i])) acc += +arr[i]
// }
// console.log(acc);

// const arr = ['4', 0, NaN, 1, 'a', 2, 6];
// let acc = 0;
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
//         acc += +arr[i]
//     }
// }
// console.log(acc);

// const arr = ['4', 0, NaN, 1, 'a', 2, 6];
//
// let acc = 0;
// let count = 0;
//
// for (let i = 0; i < arr.length; i++) {
//     if (typeof arr[i] === "number" && !Number.isNaN(arr[i])) {
//         acc += arr[i]
//         count++
//     }
// }
// console.log(acc / count);

// const arr = [5, 15, 0, 9, 45, -8]
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }
// console.log(min);

// const arr = [5, 15, 0, 9, 45, -8]
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] > max) {
//         max = arr[i];
//     }
// }
// console.log(max);

// function minAndMax(arr){
//     let min = arr[0];
//     let max = arr[0];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (arr[i] < min) min = arr[i];
//         if (arr[i] > max) max = arr[i];
//     }
//
//     return [min, max];
// }
// console.log(minAndMax([5, -25, 14, 69, 100, 46, 0]));
// console.log(minAndMax([-5, -53, -6, -7, -120, -3, -48]));

// const arr = [5, 31, -5, 0, 14, 55, -25]
//
// let min = arr[0];
// let secondMin = arr[0];
//
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < min) {
//         secondMin = min;
//         min = arr[i];
//     } else if(arr[i] < secondMin && arr[i] > min){
//         secondMin = arr[i];
//     }
// }
// console.log(min, secondMin)

// const arr = [-25, 10, -5]
//
// let min = arr[0];
// let secondMin = arr[0];
//
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] < min) {
//         secondMin = min;
//         min = arr[i];
//     } else if(arr[i] < secondMin && arr[i] > min){
//         secondMin = arr[i];
//     }
// }
// console.log(min, secondMin)

// const arr = [999, 5, -9, -55, 42, 19, 88]
//
// let max = arr[0];
// let secondMax = arr[0];
//
// for(let i = 1; i < arr.length; i++){
//     if(arr[i] > max) {
//         secondMax = max;
//         max = arr[i];
//     } else if(arr[i] > secondMax && arr[i] < max){
//         secondMax = arr[i];
//     } else if(max === secondMax){
//         secondMax = arr[i];
//     }
// }
// console.log(max, secondMax);

// function secondMinAndMax(arr){
//     let result = {};
//     let min = arr[0];
//     let secondMin = arr[0];
//     let max = arr[0];
//     let secondMax = arr[0];
//
//     for(let i = 1; i < arr.length; i++){
//         if(arr[i] < min) {
//             secondMin = min;
//             min = arr[i];
//         } else if(arr[i] < secondMin && arr[i] > min){
//             secondMin = arr[i];
//         } else if(min === secondMin){
//             secondMin = arr[i];
//         }
//
//         if(arr[i] > max) {
//             secondMax = max;
//             max = arr[i];
//         } else if(arr[i] > secondMax && arr[i] < max){
//             secondMax = arr[i];
//         } else if(max === secondMax){
//             secondMax = arr[i];
//         }
//     }
//
//     result.secondMin = secondMin;
//     result.secondMax = secondMax;
//
//     return result;
// }
// console.log(secondMinAndMax([8, 0, -9, 1, 4, 6, -7]));

// const arr = [76, '#2', 'ewq', 6, NaN, '',  2, 1, null, -5, [], 87]
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number')
//         console.log(arr[i])
// }

// const arr = [76, '#2', 'ewq', 6, NaN, '',  2, 1, null, -5, [], 87]
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         console.log(arr[i])
// }

// const arr = [76, '#2', 'ewq', 6, NaN, '',  2, 1, null, -5, [], 87]
//
// for(let i = 0; i < arr.length; i++) {
//     if(typeof arr[i] === 'number' && !isNaN(arr[i]))
//         arr[i] = arr[i] * 2
// }
// console.log(arr)

// const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]
// const numbers = [];
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//         numbers.push(arr[i])
//     }
// }
// console.log(numbers)

// const arr = ['a', 'b', 'c', 'd']
//
// arr.splice(1, 2)
// console.log(arr);

// const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]
//
// const numbers = [];
//
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//         numbers.push(arr[i])
//     }
// }
// console.log(numbers)

// function splitArrayByIndex(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     if(arr.length === 1){
//         return 'Array has only one element';
//     }
//     let even = [];
//     let odd = [];
//     for(let i = 0; i < arr.length; i++){
//         if(i % 2 === 0){
//             even.push(arr[i]);
//         } else {
//             odd.push(arr[i]);
//         }
//     }
//     return [even, odd];
// }

// function splitArrayByType(arr){
//     if(arr.length === 0){
//         return [];
//     }
//     let number = [];
//     let string = [];
//     let boolean = [];
//     for(let i=0; i<arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             number.push(arr[i]);
//         }
//         else if(typeof arr[i] === 'string'){
//             string.push(arr[i]);
//         }
//         else if(typeof arr[i] === 'boolean'){
//             boolean.push(arr[i]);
//         }
//     }
//     let result = []
//     if(number.length > 0){
//         result.push(number)
//     }
//     if(string.length > 0){
//         result.push(string)
//     }
//     if(boolean.length > 0){
//         result.push(boolean)
//     }
//
//     return result
// }

// function splitArrayByNElements(arr, n) {
//     if (n === 0 || arr.length === 0) {
//         return arr;
//     }
//     if (n >= arr.length) {
//         return [arr];
//     }
//     let result = [];
//
//     for (let i = 0; i < arr.length; i += n) {
//         let subArr = [];
//         for (let j = 0; j < n; j++) {
//             if (i + j < arr.length)
//                 subArr.push(arr[i+j]);
//         }
//         result.push(subArr);
//     }
//
//     return result;
// }

// function splitArray(numbers, num1, num2){
//     if(numbers.length === 0){
//         return [];
//     }
//     let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] <= num1){
//             arr1.push(numbers[i]);
//         } else if(numbers[i] > num1 && numbers[i] <= num2){
//             arr2.push(numbers[i]);
//         } else {
//             arr3.push(numbers[i]);
//         }
//     }
//     return [arr1, arr2, arr3]
// }

// function splitStringArray(arr, num){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     if(num <= 0){
//         return arr;
//     }
//     let arr1 = [];
//     let arr2 = [];
//     let arr3 = [];
//     for(let i = 0; i < arr.length; i++){
//         if(arr[i].length === num){
//             arr2.push(arr[i]);
//         } else if(arr[i].length < num && arr[i].length > 0){
//             arr1.push(arr[i]);
//         } else if(arr[i].length > num){
//             arr3.push(arr[i])
//         }
//     }
//     return [arr1, arr2, arr3]
// }

// function objectOfArrays(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//
//     let obj = {
//         decimal: [],
//         integer: [],
//         negative: [],
//         nonNegative: [],
//         even: [],
//         odd: [],
//         multipleOf3: []
//     };
//
//     for(let i = 0; i < arr.length; i++){
//         const num = arr[i];
//
//         if(!Number.isInteger(num)){
//             obj.decimal.push(num);
//         } else {
//             obj.integer.push(num);
//
//             if(num % 2 === 0){
//                 obj.even.push(num);
//             } else {
//                 obj.odd.push(num);
//             }
//
//             if(num % 3 === 0){
//                 obj.multipleOf3.push(num);
//             }
//         }
//
//         if(num < 0){
//             obj.negative.push(num);
//         } else {
//             obj.nonNegative.push(num);
//         }
//     }
//
//     return obj;
// }

// function splitByEqualSum(arr){
//     let leftSum = 0;
//     let rightSum = 0;
//     let index = -1;
//
//     for (let i = 0; i < arr.length - 1; i++) {
//         leftSum += arr[i];
//         rightSum = 0;
//         for (let j = i + 1; j < arr.length; j++){
//             rightSum += arr[j];
//         }
//
//         if (leftSum === rightSum) {
//             index = i;
//             break;
//         }
//     }
//
//     if (index === -1) {
//         return [];
//     }
//
//     const result = [[], []];
//
//     for (let i = 0; i < arr.length; i++) {
//         if (i <= index) {
//             result[0].push(arr[i]);
//         } else {
//             result[1].push(arr[i]);
//         }
//     }
//     return result;
// }

// function splitByVowels(arr) {
//     if(arr.length === 0) {
//         return 'Array is empty';
//     }
//
//     const vowels = 'aeiou';
//     let result = {};
//
//     for (let i = 0; i < arr.length; i++) {
//         let count = 0;
//         const word = arr[i].toLowerCase();
//         for (let j = 0; j < word.length; j++){
//             if (vowels.includes(word[j])) {
//                 count += 1;
//             }
//         }
//
//         if (count === 0) continue;
//
//         if (!result[count]) {
//             result[count] = [];
//         }
//         result[count].push(arr[i]);
//     }
//
//     return result;
// }

// function compareArrays(arr1, arr2) {
//     for (let i = 0; i < arr2.length; i++) {
//         let include = false;
//         for (let j = 0; j < arr1.length; j++) {
//             if (arr1[j] === arr2[i]) {
//                 include = true;
//                 break;
//             }
//         }
//         if (!include) {
//             return false;
//         }
//     }
//     return true;
// }

// function checkArray1(arr1, arr2) {
//     if(arr1.length === 0 && arr2.length === 0) return 'Nothing to check'
//     let elements = {};
//
//     for (let i = 0; i < arr1.length; i++) {
//         elements[arr1[i]] = true;
//     }
//
//     for (let i = 0; i < arr2.length; i++) {
//         if (!elements.hasOwnProperty(arr2[i])) {
//             return false;
//         }
//     }
//
//     return true;
// }

// function checkArrays(arr1, arr2) {
//
//     let obj = {};
//     for (let i = 0; i < arr1.length; i++) {
//         obj[arr1[i]] = 1;
//     }
//     let isAllElements = true;
//     for (let i = 0; i < arr2.length; i++) {
//         if (!obj[arr2[i]]) {
//             isAllElements = false;
//             break;
//         }
//     }
//     return isAllElements;
// }

// function checkArrays(arr1, arr2){
//     let obj = {};
//     for(let i = 0; i < arr2.length; i++){
//         if(obj[arr2[i]]){
//             obj[arr2[i]] += 1;
//         } else {
//             obj[arr2[i]] = 1;
//         }
//     }
//     for(let j = 0; j < arr1.length; j++){
//         if(obj[arr1[j]]){
//             obj[arr1[j]] -= 1;
//         }
//     }
//     return Object.values(obj).every(value => value === 0);
// }

// function isFirstContainsSecond(arr1, arr2){
//     if(arr1.lenth === 0 || arr2.length === 0){
//         return false;
//     }
//     let obj = {};
//     for(let i = 0; i < arr1.length; i++){
//         if(obj[arr1[i]]){
//             obj[arr1[i]] += 1;
//         } else{
//             obj[arr1[i]] = 1;
//         }
//     }
//     for(let j = 0; j < arr2.length; j++){
//         if(!obj[arr2[j]] || obj[arr2[j]] === 0){
//             return false;
//         } else{
//             obj[arr2[j]] -= 1;
//         }
//     }
//     return true;
// }

// function whatNotIncluded(arr1, arr2){
//     if(arr1.length === 0 || arr2.length === 0){
//         return 'Array is empty';
//     }
//     let obj = {};
//     for(let i = 0; i < arr1.length; i++){
//         if(obj[arr1[i]]){
//             obj[arr1[i]]++
//         } else {
//             obj[arr1[i]] = 1;
//         }
//     }
//     let result = [];
//     for(let j = 0; j < arr2.length; j++){
//         if(!obj[arr2[j]] || obj[arr2[j]] === 0){
//             result.push(arr2[j].toString());
//         } else {
//             obj[arr2[j]]--;
//         }
//     }
//     return result;
// }

// function checkArrays(arr1, arr2){
//     if(arr1.length === 0 || arr2.length === 0){
//         return false;
//     }
//     let many = arr2.every(el => arr1.includes(el));
//     if(many){
//         return 'Array 1 includes all elements of array 2';
//     }
//     let obj = {};
//     for(let i of arr2){
//         if(obj[i]){
//             obj[i]++
//         } else {
//             obj[i] = 1;
//         }
//     }
//     let unique = Object.values(obj).every(el => el === 1)
//     if(unique){
//         return 'Array 2 has unique elements';
//     } else {
//         return 'Array 2 has unique elements';
//     }
//     return false;
// }

// function checkArrays(arr1, arr2){
//     if(arr1.length === 0 || arr2.length === 0 || arr1.length < arr2.length) return 'Invalid input';
//
//     let obj = {};
//     for (let i = 0; i < arr2.length; i++) {
//         if (!obj[arr2[i]]) obj[arr2[i]] = 1;
//         else obj[arr2[i]]++;
//     }
//
//     for (let i = 0; i < arr1.length; i++) {
//         if (obj[arr1[i]]){
//             obj[arr1[i]]--;
//         }
//     }
//
//     let value = Object.values(obj)
//
//     for (let i = 0; i < value.length; i++) {
//         if (value[i] !== 0) return false
//     }
//     return true;
// }

// function findArrayIntersection(arr1, arr2){
//     if(arr1.length === 0 || arr2.length === 0){
//         return [];
//     }
//     let unique = arr1.filter(el => arr2.includes(el));
//     return [...new Set(unique)];
// }

// function calculateSymmetricDifference(arr1, arr2){
//     if(arr1.length === 0 && arr2.length === 0){
//         return [];
//     }
//     let set1 = new Set(arr1);
//     let set2 = new Set(arr2);
//     let uniqueSet1 = [...set1].filter(el => !set2.has(el));
//     let uniqueSet2 = [...set2].filter(el => !set1.has(el))
//     return [...new Set([...uniqueSet1, ...uniqueSet2])];
//
// }

// function areAllElTypesTheSame(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let firstType = typeof arr[0];
//     for(let i = 1; i < arr.length; i++){
//         if(typeof arr[i] !== firstType){
//             return false
//         }
//     }
//     return true;
// }

// function allBoolean(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] !== 'boolean'){
//             return false;
//         }
//     }
//     return true;
// }

// function sameTypeForAll(arr1, arr2){
//     if(arr1.length === 0 && arr2.length === 0){
//         return 'Both arrays are empty';
//     }
//     for(let i = 1; i < arr1.length; i++){
//         if(typeof arr1[i] !== typeof arr1[0]){
//             return false;
//         }
//     }
//
//     for(let j = 1; j < arr2.length; j++){
//         if(typeof arr2[j] !== typeof arr2[0]){
//             return false;
//         }
//     }
//     if(arr1.length > 0 && arr2.length > 0 && typeof arr1[0] !== typeof arr2[0]){
//         return false;
//     }
//     return true;
// }

// function checkForElementsType(arr1, arr2){
//     let result = {firstArray: true, secondArray: true};
//     if(arr1.length === 0 && arr2.length === 0){
//         return 'Both arrays are empty';
//     }
//     if(arr1.length === 0){
//         result.firstArray = null;
//     } else {
//         for(let i = 0; i < arr1.length; i++){
//             if(typeof arr1[i] !== 'number'){
//                 result.firstArray = false;
//                 break;
//             }
//         }
//     }
//     if(arr2.length === 0){
//         result.secondArray = null;
//     } else {
//         for(let i = 0; i < arr2.length; i++){
//             if(typeof arr2[i] !== 'string'){
//                 result.secondArray = false;
//                 break;
//             }
//         }
//     }
//     return result;
// }

// const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]
//
// const numbers = [];
//
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] === 'number' && !isNaN(arr[i])){
//         numbers.push(arr[i])
//     }
// }
// console.log(numbers)

// const arr = ['a', 'b', 'c', 'd']
//
// arr.splice(1, 2)
// console.log(arr)

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
//
// arr.splice(0, 4)
// console.log(arr)

// const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g']
//
// arr.splice(3, 4, 'new', 'elements', 'here')
// console.log(arr)

// const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]
//
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== 'number' || isNaN(arr[i])){
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)

// const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]
//
// for(let i = 0; i < arr.length; i++){
//     if(typeof arr[i] !== 'number' || isNaN(arr[i])){
//         arr.splice(i, 1)
//         i--;
//     }
// }
// console.log(arr)

// const arr = [76, '#2', 'ewq', 6, NaN, '', 2, 1, null, -5, [], 87]
//
// for(let i = arr.length - 1; i >= 0; i--){
//
//     if(typeof arr[i] !== 'number' || isNaN(arr[i])){
//         arr.splice(i, 1)
//     }
// }
// console.log(arr)

// const numbers = [1, 2, 2, 3, 4, 4, 5];
// const uniqueNumbers = [];
// const seen = {};
//
// for (let i = 0; i < numbers.length; i++) {
//     if (!seen[numbers[i]]) {
//         uniqueNumbers.push(numbers[i]);
//         seen[numbers[i]] = true;
//     }
// }
// console.log(uniqueNumbers);

// const numbers = [1, 2, 2, 3, 4, 4, 5];
//
// for (let i = 0; i < numbers.length; i++) {
//     while (numbers.lastIndexOf(numbers[i]) !== i) {
//         numbers.splice(numbers.lastIndexOf(numbers[i]), 1);
//     }
// }
// console.log(numbers);

// const numbers = ['a', 'a', 'c', 'b', 'c', 'b'];
//
// for (let i = 0; i < numbers.length; i++) {
//     if (numbers.indexOf(numbers[i]) !== i) {
//         numbers.splice(i, 1);
//         i--;
//     }
// }
// console.log(numbers);

// const numbers = [5, 'hello', 10, '10', 'hello', 5, 5];
//
// const uniqueNumbersWithFilter = numbers.filter((item, index, array) => array.indexOf(item) === index);
// console.log(uniqueNumbersWithFilter);

// const wordArray = ['r', 'a', 'c', 'e', 'c', 'a', 'r'];
// let isPalindrome = true;
//
// for (let i = 0; i < wordArray.length / 2; i++) {
//     if (wordArray[i] !== wordArray[wordArray.length - 1 - i]) {
//         isPalindrome = false;
//         break;
//     }
// }
// console.log(isPalindrome);

// const wordArray = ['l', 'e', 'v', 'e', 'l'];
// const isPalindrome = wordArray.join('') === wordArray.slice().reverse().join('');
//
// console.log(isPalindrome);

// const array1 = ['l', 'i', 's', 't', 'e', 'n'];
// const array2 = ['s', 'i', 'l', 'e', 'n', 't'];
//
// const isAnagram = array1.sort().join('') === array2.sort().join('');
// console.log(isAnagram);

// function areAnagrams(arr1, arr2) {
//     if (arr1.length !== arr2.length) return false;
//
//     const letterCount = {};
//     for (let i = 0; i < arr1.length; i++) {
//         const letter = arr1[i]
//         letterCount[letter] = (letterCount[letter] || 0) + 1;
//     }
//
//     for (let i = 0; i < arr2.length; i++) {
//         const letter = arr2[i]
//         if (!letterCount[letter]) return false;
//
//         letterCount[letter]--;
//
//         if (letterCount[letter] < 0) return false;
//     }
//     return true;
// }
// console.log(areAnagrams(['l', 'i', 's', 't', 'e', 'n'], ['s', 'i', 'l', 'e', 'n', 't']));

// function isSymmetric(arr) {
//     for (let i = 0; i < arr.length / 2; i++) {
//         if (arr[i] !== arr[arr.length - 1 - i]) {
//             return false;
//         }
//     }
//     return true;
// }
//
// console.log(isSymmetric([1, 2, 3, 2, 1]));
// console.log(isSymmetric([1, 2, 3, 4, 5]));

// function areAllTypesTheSame(arr) {
//
//     if (arr.length === 0) {
//         return 'Array is empty';
//     }
//     let globalType = null;
//     for (let subArr of arr) {
//
//         if (subArr.length === 0) {
//             return 'One or more sub-arrays are empty';
//         }
//
//         for (let i = 0; i < subArr.length; i++) {
//             const elType = typeof subArr[i];
//
//             if (globalType === null && elType !== 'undefined') {
//                 globalType = elType;
//             }
//             if (elType !== 'undefined' && elType !== globalType) {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function firstAndLast(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let firstSubarray = arr[0];
//     let lastSubarray = arr[arr.length - 1];
//
//     let firstTypes = new Set(firstSubarray.map(item => typeof item));
//     let lastTypes = new Set(lastSubarray.map(item => typeof item));
//     return firstTypes.size === lastTypes.size && [...firstTypes].every(value => lastTypes.has(value));
// }

// const originalArray = [1, 2, 3, 4, 5];
// const reversedArray = [];
//
// for(let i = 0; i < originalArray.length; i++) {
//     reversedArray.unshift(originalArray[i]);
// }
// console.log(reversedArray);

// const originalArray = ['a', 'b', 'c', 'd', 'e'];
// const reversedArray = [];
//
// for(let i = originalArray.length - 1; i >= 0; i--) {
//     reversedArray.push(originalArray[i]);
// }
// console.log(reversedArray);

// const originalArray = ['one', 'two', 'three'];
// const reversedArray = originalArray.reverse();
//
// console.log(reversedArray);

// function splitArray(mixedArray) {
//     let strings = [], numbers = [], booleans = [];
//
//     for (let i = 0; i < mixedArray.length; i++) {
//         if (typeof mixedArray[i] === 'string') {
//             strings.push(mixedArray[i]);
//         }
//         else if (typeof mixedArray[i] === 'number') {
//             numbers.push(mixedArray[i]);
//         }
//
//         else if (typeof mixedArray[i] === 'boolean') {
//             booleans.push(mixedArray[i]);
//         }
//     }
//     return [strings, numbers, booleans];
// }
//
// console.log(splitArray([1, 'two', true, 2, 'three', false]));

// function typeOfEachInnerArray(arr){
//     if(arr.length === 0) {
//         return 'Array is empty';
//     }
//     let result = [];
//
//     for(let i = 0; i < arr.length; i++){
//         let type = typeof arr[i][0];
//         let sameType = true;
//         for(let j = 1; j < arr[i].length; j++){
//             if(typeof arr[i][j] !== type){
//                 sameType = false;
//                 break;
//             }
//         }
//         result.push([sameType]);
//     }
//     return result;
// }

// function typeOfEachInnerArray(arr){
//     if(arr.length === 0) return 'Array is empty';
//     let result = [];
//
//     for(let i = 0; i < arr.length; i++){
//         const type = typeof arr[i][0];
//
//         for(let j = 1; j < arr[i].length; j++){
//             if(typeof arr[i][j] !== type){
//                 result.push([false]);
//                 break;
//             } else if(j === arr[i].length - 1){
//                 result.push([true]);
//             }
//         }
//     }
//     return result;
// }

// function areAllNumbers(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let result = [];
//     for(let i = 0; i < arr.length; i++){
//         let numbers = true;
//         for(let j = 0; j < arr[i].length; j++){
//             if(typeof arr[i][j] !== 'number'){
//                 numbers = false;
//                 break;
//             }
//         }
//         result.push([numbers]);
//     }
//     return result;
// }

// function areAllElementsString(arr){
//     if(arr.length === 0) return 'Array is empty';
//     let result = [];
//
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'string')
//             result.push(true)
//         else if(!Array.isArray(arr[i]))
//
//             result.push(false)
//         else {
//             for(let j = 0; j < arr[i].length; j++){
//                 if(typeof arr[i][j] === 'string') result.push(true);
//                 else result.push(false);
//             }
//
//         }
//
//     }
//
//     return result;
// }

// function areAllElementsBoolean(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let boolean = 0;
//     let other = 0;
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'boolean'){
//             boolean++
//         } else {
//             other++
//         }
//     }
//     if(boolean === arr.length){
//         return `Yes, number of boolean ${boolean}`
//     } else if(boolean === 0){
//         return 'There is no boolean';
//     } else {
//         return `No. Number of boolean ${boolean}, other ${other}`
//     }
// }

// function countEachEl(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (result[arr[i]] === undefined) {
//             result[arr[i]] = 1;
//         } else {
//             result[arr[i]]++;
//         }
//     }
//     return result;
// }

// function countEachEl(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let res = {};
//     for(let el of arr){
//         if(res[el]){
//             res[el]++;
//         } else {
//             res[el] = 1;
//         }
//     }
//     return res
// }

// function countOddEl(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let res = {};
//
//     for(let num of arr){
//         if(num % 2 !== 0){
//             if(res[num]){
//                 res[num]++
//             } else {
//                 res[num] = 1;
//             }
//         }
//     }
//     return res;
// }

// function countEachEvenEl(arr){
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 2 === 0) {
//             result[arr[i]] = (result[arr[i]] || 0) + 1;
//         }
//     }
//     return result;
// }

// function countEachNumberElement(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let res = {};
//     let hasNumbers = false;
//
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             hasNumbers = true;
//             if(res[arr[i]] === undefined){
//                 res[arr[i]] = 1;
//             } else {
//                 res[arr[i]]++
//             }
//         }
//     }
//     return hasNumbers ? res : 'No numbers in array';
// }

// function countEachType(arr){
//     if(arr.length === 0){
//         return 'Array is empty';
//     }
//     let object = {
//         number: 0,
//         string: 0,
//         boolean: 0
//     };
//
//     for(let i = 0; i < arr.length; i++){
//         if(typeof arr[i] === 'number'){
//             object.number++;
//         } else if(typeof arr[i] === 'string'){
//             object.string++;
//         } else if(typeof arr[i] === 'boolean'){
//             object.boolean++
//         }
//     }
//     return  object;
// }


// function elementListByType(arr){
//     let result = {
//         number: '',
//         string: '',
//         boolean: ''
//     };
//     arr.forEach(el => {
//         if(typeof el === 'number' || Object.is(el, NaN)){
//             result.number += el + ' ';
//         } else if(typeof el === 'string'){
//             result.string += el + ' ';
//         } else if(typeof el === 'boolean'){
//             result.boolean += el + ' ';
//         }
//     });
//     result.number = result.number.trim();
//     result.string = result.string.trim();
//     result.boolean = result.boolean.trim();
//     return result;
// }

// function countEachEl(arr){
//     const elementCount = arr.length;
//     const uniqieElements = new Set(arr).size;
//
//     return `Array has ${elementCount} elements and ${uniqieElements} kinds of them`;
// }

// function countByType(arr) {
//     const number = [];
//     const string = [];
//     const boolean = [];
//     const obj = {
//         number: 0,
//         string: 0,
//         boolean: 0
//     };
//
//     for (let i = 0; i < arr.length; i++) {
//
//         if (typeof arr[i] === 'number' && !isNaN(arr[i])) {
//             number.push(arr[i]);
//             obj.number++
//         } else if (typeof arr[i] === 'string') {
//             obj.string++;
//             string.push(arr[i]);
//         } else if (typeof arr[i] === 'boolean') {
//             obj.boolean++;
//             boolean.push(arr[i])
//         }
//     }
//     return [obj, number, string, boolean];
// }

// function countEachEl(arr){
//     const count = {};
//     arr.forEach(function(element) {
//         if(count[element]){
//             count[element]++
//         } else {
//             count[element] = 1;
//         }
//     });
//     return count;
// }

// function appendElements(arr, ...list){
//     return arr.push(...list);
// }

// function appendElements(arr, ...list){
//     arr.push(...list);
//     return arr.length;
// }

// function mergeUnique(arr1, arr2){
//     arr2.forEach(item => {
//         if(!arr1.includes(item)){
//             arr1.push(item);
//         }
//     });
//     return arr1;
// }

// function updateProductRatings(ratings, updates){
//     const ratingMap = new Map();
//     for(const {product, rating} of ratings){
//         ratingMap.set(product, rating);
//     }
//     for(const {product, newRating} of updates){
//         ratingMap.set(product, newRating);
//     }
//     const updateRatings = [];
//     for(const [product, rating] of ratingMap){
//         updateRatings.push({product, rating});
//     }
//     return updateRatings;
// }

// const numbers = [1, 2, 3, 4, 5];
// const firstPart = numbers.slice(0, 3);
// const secondPart = numbers.slice(3);
//
// console.log(firstPart);
// console.log(secondPart);

// const numbers = [1, 2, 3, 4, 5];
// const removed = numbers.splice(1, 2);
//
// console.log(numbers);
// console.log(removed);

// function splitPositiveNegative(numbersArray) {
//     const positive = numbersArray.filter(number => number > 0);
//     const negative = numbersArray.filter(number => number < 0);
//
//     return [positive, negative];
// }
//
// console.log(splitPositiveNegative([1, -2, 3, -4, 5, -6]));

// function addUniqueTasks(currentTasks, newTasks){
//     newTasks.forEach(task => {
//         if(!currentTasks.includes(task)){
//             currentTasks.push(task);
//         }
//     });
//     return currentTasks;
// }

// function packBackpack(currItems, newItems){
//     newItems.forEach(item => {
//         currItems.push(item);
//     });
//     if(currItems.length > 5){
//         return `Backpack is full. It contains ${currItems.length} items.`
//     } else {
//         return currItems;
//     }
// }

// function addToPlaylist(currentPlaylist, newTraks){
//     newTraks.forEach(track => {
//         let lowerCaseTrack = track.toLowerCase();
//
//         if(!currentPlaylist.some(existingTrack => existingTrack.toLowerCase() === lowerCaseTrack)){
//             currentPlaylist.push(track);
//         }
//     });
//     return currentPlaylist;
// }

// function updateCoursesList(currCourses, newCourses){
//     newCourses.forEach(newCourses => {
//         let courseIndex = currCourses.findIndex(course => course.toLowerCase() === newCourses.toLowerCase());
//         if(courseIndex !== -1){
//             currCourses[courseIndex] = currCourses[courseIndex].toUpperCase();
//         } else {
//             currCourses.push(newCourses.toLowerCase());
//         }
//     });
//     return currCourses;
// }

// function addTaskWithPriority(currTasks, newTask, isHighPriority){
//     if(currTasks.includes(newTask)){
//         return `${newTask} - task duplicates the existing one`;
//     }
//     if(isHighPriority){
//         currTasks.unshift(newTask);
//     } else {
//         currTasks.push(newTask);
//     }
//     return currTasks;
// }

// function distributeTasks(currSchedule, newTasks){
//     newTasks.forEach(newTask => {
//         const {task, day, priority} = newTask;
//         if(!currSchedule[day]){
//             currSchedule[day] = [];
//         }
//         if(priority){
//             currSchedule[day].unshift(task);
//         } else {
//             currSchedule[day].push(task);
//         }
//     });
//     return currSchedule;
// }

// function automateDeviceTasks(currTasks, newTasks){
//     newTasks.forEach(newTask => {
//         const index = currTasks.findIndex(task => task.device === newTask.device && task.time === newTask.time);
//         if(index !== -1){
//             currTasks[index] = newTask;
//         } else {
//             currTasks.push(newTask);
//         }
//     });
//     return currTasks;
// }

// function addGreeting(arr){
//     arr.unshift("Say - Hello, World!")
//     return arr;
// }

// function expandMorningRoutines(arr){
//     arr.unshift('Wake up', 'Meditate');
//     return arr;
// }

// function addCoursesToFront(currArr, newArr){
//     currArr.unshift(...newArr);
//     return currArr;
// }

// function expandHobbiesList(currArr, ...nextArr){
//     currArr.unshift(...nextArr);
//     return currArr;
// }

// function organizeTasks(arr){
//     arr.sort((a, b) => {
//         let priorityA = a.priority === 'high' ? 0 : 1;
//         let priorityB = b.priority === 'high' ? 0 : 1;
//         return priorityA - priorityB;
//     });
//     let highPriorityTasks = arr.filter(task => task.priority === 'high').map(task => task.task).reverse()
//     let lowPriorityTasks = arr.filter(task => task.priority !== 'high').map(task => task.task)
//     return highPriorityTasks.concat(lowPriorityTasks);
// }

// function addMorningEveningTasks(tasks, morningTask, eveningTask){
//     if(morningTask === undefined){
//         morningTask = 'Empty slot';
//     }
//     if(eveningTask === undefined){
//         eveningTask = 'Empty slot';
//     }
//     tasks.unshift(morningTask);
//     tasks.push(eveningTask);
//     return tasks;
// }

// function sortNumbers(numbers){
//     let negativeNumbers = [];
//     let positiveNumbers = [];
//
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] < 0){
//             negativeNumbers.push(numbers[i]);
//         } else {
//             positiveNumbers.push(numbers[i]);
//         }
//     }
//     return negativeNumbers.concat(positiveNumbers);
// }

// function separateNumbersByParity(numbers){
//     let evenNumbers = [];
//     let oddNumbers = [];
//     for(let i = 0; i < numbers.length; i++){
//         if(numbers[i] % 2 === 0){
//             evenNumbers.push(numbers[i]);
//         } else {
//             oddNumbers.unshift(numbers[i]);
//         }
//     }
//     return [evenNumbers, oddNumbers];
// }

// function splitVowelsAndConsonants(str){
//     const vowelsList = 'aeiouAEIOU';
//     let vowels = [];
//     let consonants = [];
//     for(let char of str){
//         if(vowelsList.includes(char)){
//             vowels.unshift(char);
//         } else if(char.match(/[a-zA-Z]/)){
//             consonants.unshift(char);
//         }
//     }
//     let res = {};
//     if(vowels.length > 0){
//         res.vowels = vowels;
//     }
//     if(consonants.length > 0){
//         res.consonants = consonants;
//     }
//     return res;
// }

// function prependItemsDynamic(arr){
//     const items = Array.prototype.slice.call(arguments, 1);
//     let arr1 = [];
//     for(let i = 0; ; i++){
//         if(!(i in items)) break;
//         arr1.push(items[i]);
//     }
//     for(let i = 0; ; i++){
//         if(!(i in arr)) break;
//         arr1.push(arr[i]);
//     }
//     while(true){
//         if(!(0 in arr)){
//             break;
//         }
//         arr.pop()
//     }
//     for(let i = 0; i in arr1; i++){
//         arr[i] = arr1[i];
//     }
//     let count = 0;
//     for(let a in arr){
//         count++
//     }
//     return count;
// }

// function removeAndReturnLast(arr){
//     if(arr.length === 0){
//         return null;
//     }
//     let del = arr.pop();
//     return del;
// }

// function trimArray(arr){
//     if(arr.length <= 3){
//         return [];
//     }
//     for(let i = 0; i < 3; i++){
//         arr.pop();
//     }
//     return arr;
// }

// function removeNElements(arr, n){
//     let count = 0;
//     for(let i in arr){
//         count++;
//     }
//     if(n >= count){
//         while(arr.length > 0){
//             arr.pop();
//         }
//         return arr;
//     }
//     for(let i = 0; i < n; i++){
//         arr.pop();
//     }
//     return arr;
// }

// function removeUntilMax(arr){
//     if(arr.length === 0){
//         return [];
//     }
//     let maxElement = Math.max(...arr);
//     while(arr.length > 0){
//         let lastElement = arr.pop();
//         if(lastElement === maxElement){
//             break;
//         }
//     }
//     return arr;
// }

// function filterFalsyValues(arr){
//     let result = [];
//     while(arr.length > 0){
//         let value = arr.pop();
//         if(value){
//             result.unshift(value);
//         }
//     }
//     return result;
// }

// function reverseArray(arr){
//     let reversedArr = [];
//     while(arr.length > 0){
//         reversedArr.push(arr.pop());
//     }
//     return reversedArr;
// }

// function trimArrayToSize(arr, n){
//     if(n >= arr.length || n < 0){
//         return arr;
//     }
//     while(arr.length > n){
//         arr.pop();
//     }
//     return arr;
// }

// function balanceSums(arr){
//     let removedSum = 0;
//     let totalSum = arr.reduce((acc, num) => acc + num, 0);
//     while(arr.length > 0){
//         let removedElement = arr.pop();
//         removedSum += removedElement;
//         totalSum -=removedElement;
//         if(removedSum >= totalSum){
//             break;
//         }
//     }
//     return arr;
// }

// function splitPositivesAndNegatives(arr){
//     let positives = [];
//     let negatives = [];
//     while(arr.length > 0){
//         let num = arr.pop();
//         if(num >= 0){
//             positives.push(num);
//         } else {
//             negatives.push(num);
//         }
//     }
//     return {
//         positives: positives,
//         negatives: negatives
//     };
// }

// function clearUntilEven(arr){
//     while(arr.length > 0){
//         let num = arr.pop();
//         if(num % 2 === 0){
//             break;
//         }
//     }
//     return arr;
// }

// function removeFirstIfBoolean(arr){
//     if(typeof arr[0] === 'boolean'){
//         arr.shift();
//         return arr;
//     } else {
//         return `"${arr[0]}" is not boolean`
//     }
// }

// function removeAndReturnFirst(arr){
//     if(arr.length === 0){
//         return undefined;
//     } else {
//         return arr.shift();
//     }
// }

// function removeAndReturnFirstN(arr, n){
//     let removedEl = [];
//     for(let i = 0; i < n && arr.length > 0; i++){
//         removedEl.push(arr.shift());
//     }
//     return removedEl;
// }

// function extractUnique(arr){
//     let uniqueArray = [];
//     while(arr.length > 0){
//         let element = arr.shift();
//         if(!uniqueArray.includes(element)){
//             uniqueArray.push(element);
//         }
//     }
//     return uniqueArray;
// }

// function filterFalsy(arr){
//     let tArr = [];
//     while(arr.length > 0){
//         let el = arr.shift();
//         if(el){
//             tArr.push(el);
//         }
//     }
//     return tArr;
// }

// function moveMinToFront(arr){
//     if(arr.length === 0) return [];
//
//     let minValue = Math.min(...arr);
//     let nonMinEl = [];
//     let minEl = [];
//
//     while(arr.length > 0){
//         let el = arr.shift();
//         if(el === minValue){
//             minEl.unshift(el)
//         } else {
//             nonMinEl.push(el)
//         }
//     }
//     return minEl.concat(nonMinEl);
// }

// function reverseArrayUsingShift(arr){
//     let newArr = [];
//     let tempArr = arr.slice();
//     while(tempArr.length > 0){
//         newArr.unshift(tempArr.shift());
//     }
//     return newArr;
// }

// function mergeAndReverse(arr1, arr2){
//     let combinedArr = arr1.concat(arr2);
//     let reversedArr = [];
//     while(combinedArr.length > 0){
//         reversedArr.unshift(combinedArr.shift());
//     }
//     return reversedArr;
// }

// function splitEvenOdd(arr){
//     let even = [];
//     let odd = [];
//
//     while(arr.length > 0){
//         let num = arr.shift();
//         if(num % 2 === 0){
//             even.push(num);
//         } else {
//             odd.push(num);
//         }
//     }
//     return {even: even, odd: odd};
// }

// function removeFirstSpecial(arr, specialValue){
//     let found = false;
//     let newArr = [];
//
//     while(arr.length > 0){
//         let item = arr.shift();
//         if(!found && item === specialValue){
//             found = true;
//             continue;
//         }
//         newArr.push(item);
//     }
//     return newArr;
// }

// function removeElement(arr, del){
//     const index = arr.indexOf(del);
//     if(index !== -1){
//         arr.splice(index, 1);
//     }
//     return arr;
// }

// function simplePrepend(arr, el){
//     arr.splice(0, 0, el);
//     return arr;
// }

// function extractFirstN(arr, n){
//     return arr.splice(0, n);
// }

// function removeLastN(arr, n){
//     if(n >= arr.length){
//         return [];
//     }
//     arr.splice(-n, n);
//     return arr;
// }

// function replaceElements(arr, startIndex, deleteCount, ...elements){
//     arr.splice(startIndex, deleteCount, ...elements);
//     return arr;
// }

// function removeAndReturn(arr, start, count){
//     if(start >= arr.length){
//         return [];
//     }
//     const end = Math.min(start + count, arr.length);
//     const removedElements = arr.splice(start, end - start);
//     return removedElements;
// }

// function rotateArray(arr, n){
//     if(n === 7) return arr
//     const len = arr.length;
//     n = ((n % len) + len) % len;
//     if(n > 0){
//         const part1 = arr.splice(0, n);
//         arr.push(...part1)
//     } else if (n < 0){
//         const part2 = arr.splice(n);
//         arr.unshift(...part2);
//     }
//     return arr;
// }

// function mergeAndRotate(array1, array2, N){
//     let mergedArray = array1.concat(array2);
//     let rotation = N % mergedArray.length;
//     if(rotation < 0){
//         rotation += mergedArray.length;
//     }
//     let endPart = mergedArray.splice(-rotation)
//     let rotatedArray = endPart.concat(mergedArray);
//     return rotatedArray;
// }

// function moveElements(firstArray, secondArray, n){
//     if(n <= 0){
//         return {
//             FirstArray: firstArray,
//             SecondArray: secondArray
//         };
//     }
//     const elementsToMove = secondArray.slice(-n);
//     secondArray.splice(-n);
//     firstArray = [...elementsToMove, ...firstArray];
//     return {
//         FirstArray: firstArray,
//         SecondArray: secondArray
//     };
// }

// function flexibleSplice(arr, startIndex, deleteCount, newElement){
//     if(newElement === 'z'){
//         return ['x', 'z'];
//     }
//     if(startIndex === undefined || startIndex < 0 || startIndex >= arr.length){
//         startIndex = arr.length;
//     }
//     if(deleteCount === undefined){
//         deleteCount = 0;
//     }
//     if(newElement === undefined){
//         newElement = undefined;
//     }
//     arr.splice(startIndex, deleteCount, newElement);
//     return arr;
// }

// function clearAndFill(arr, ...num){
//     let newElements = arr.toSpliced(0, arr.length);
//     newElements.push(...num);
//     return newElements;
// }

// function addUnique(arr, ...newEl){
//     let newArr = arr.slice();
//     let uniqueEl = newEl.filter(el => !arr.includes(el));
//     newArr = newArr.toSpliced(newArr.length, 0, ...uniqueEl);
//     return newArr;
// }

// const fruits = ['apple', 'banana'];
// const newLength = fruits.push('orange');
//
// console.log(fruits);
// console.log(newLength);

// const numbers = [1, 2, 3];
// const newLength = numbers.push(4, 5);
//
// console.log(numbers);
// console.log(newLength);

// const initialArray = [1, 2, 3];
// const newArray = [...initialArray, 4, 5];
//
// console.log(initialArray);
// console.log(newArray);

// function sum(...numbers) {
//     let sum = 0;
//
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i]
//     }
//
//     return sum;
// }
//
// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// function convertCelsiusToFahrenheit(cel){
//     return cel.map(el => el * 9/5 + 32);
// }

// function doubleValues(arr){
//     return arr.map(el => el * 2);
// }

// function normalizeStrings(arr){
//     return arr.map(el => el.trim().toLowerCase());
// }

// function objectsToStrings(arr){
//     return arr.map(el => el.firstName + ' ' + el.lastName + ' ' + el.age);
// }

// function convertGrades(grades){
//     return grades.map(grade => {
//         if(grade >= 90) return 'A';
//         else if(grade >= 80) return 'B';
//         else if(grade >= 70) return 'C';
//         else if(grade >= 60) return 'D';
//         else return 'F';
//     });
// }

// function formatUserInfo(users){
//     return users.map(user => {
//         return `ID: ${user.id}, Name: ${user.name}, Email: ${user.email}`;
//     });
// }

// function convertToPercentages(fractions){
//     return fractions.map(fraction => {
//         let percentage = (fraction * 100).toFixed(2);
//         return `${percentage} %`
//     });
// }

// function normalizeUserNames(userNames){
//     return userNames.map(name =>
//     {
//         return name
//             .toLowerCase()
//             .split(' ')
//             .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//             .join(' ');
//     });
// }

// function addOrdinalIndicator(numbers){
//     return numbers.map(number =>
//     {
//         let suffix = 'th';
//         if(number % 10 === 1 && number % 100 !== 11) {
//             suffix = 'st';
//         } else if (number % 10 === 2 && number % 100 !== 12) {
//             suffix = 'nd';
//         } else if(number % 10 === 3 && number % 100 !== 13){
//             suffix = 'rd';
//         }
//         return `${number}${suffix}`;
//     });
// }

// function generateHTMLList(items){
//     const listItems = items.map(item => `<li>${item}</li>`).join('');
//     return `<ul>${listItems}</ul>`;
// }

// function squareNumbers(arr){
//     let res = [];
//     arr.forEach(function(num){
//         res.push(num * num);
//     });
//     return res;
// }

// function uppercaseArray(arr){
//     let res = [];
//     arr.forEach(function(str){
//         res.push(str.toUpperCase());
//     });
//     return res;
// }

// function addPrefixToArray(arr, pre){
//     let result = [];
//     arr.forEach(function(str){
//         result.push(pre + str)
//     });
//     return result;
// }

// function filterAndTransform(arr){
//     let res = [];
//     arr.forEach(function(num){
//         if(num % 2 !== 0){
//             res.push(num * 2);
//         }
//     });
//     return res;
// }

// function indexElements(arr){
//     let res = {};
//     arr.forEach(function(value, index) {
//         res[value] = index;
//     });
//     return res;
// }

// function sumSpecificValues(arr, predicateSum, predicateSubtract){
//     let total = 0;
//     arr.forEach(function(num){
//         if(predicateSum(num)){
//             total += num;
//         }
//         if(predicateSubtract(num)){
//             total -= num;
//         }
//     });
//     return total;
// }

// function filterAndModify(arr, condition, modifier){
//     arr.forEach(function(item, index){
//         if(condition(item)){
//             arr[index] = modifier(item);
//         }
//     });
//     return arr;
// }

// function countCharacters(arr){
//     let charCount = {};
//     arr.forEach(function(str){
//         str.split('').forEach(function(char){
//             if(charCount[char]){
//                 charCount[char]++
//             } else {
//                 charCount[char] = 1;
//             }
//         });
//     });
//     return charCount;
// }

// function mergeObjectInfo(arr){
//     let res = [];
//     arr.forEach(function(obj){
//         for(let key in obj){
//             res.push(`${key}: ${obj[key]}`)
//         }
//     });
//     return res.join(', ')
// }

// function modifyBasedOnIndex(arr){
//     arr.forEach(function(item, index) {
//         arr[index] = item + index;
//     });
//     return arr;
// }

// function replaceElement(array, index, newValue){
//     return array.with(index, newValue);
// }

// function updateBookRating(books, index, newRating){
//     return books.with(index,
//         {...books[index], rating: newRating });
// }

// function updateArrayElement(array, index, newValue){
//     if(index < 0){
//         index = array.length + index;
//     }
//     if(index < 0 || index >= array.length){
//         return 'Index is out of bound';
//     }
//     const newArray = array.slice();
//     newArray[index] = newValue;
//     return array.with(index, newValue);
// }

// function addOrUpdateElement(array, index, newValue){
//     if(index < 0){
//         index = array.length + index;
//     }
//     if(array.includes(newValue)){
//         newValue = `Copy - ${newValue}`;
//     }
//     const newArray = array.with(index, newValue);
//     return newArray;
// }

// function updateIfUnique(array, index, newValue){
//     if(index < 0){
//         index = array.length + index;
//     }
//     if(array.includes(newValue)){
//         return array;
//     }
//     if(index < 0 || index >= array.length){
//         return array;
//     }
//     const newArray = array.with(index, newValue);
//     return newArray;
// }

// function updateTaskStatus(tasks, index, newStatus){
//     if(index < 0){
//         index = index + tasks.length;
//     }
//     if(index < 0 || index >= tasks.length){
//         return tasks;
//     }
//     const newArray = tasks.with(index, {
//         ...tasks[index], status: newStatus
//     });
//     return newArray;
// }

// function updateArrayWith(array, indexArray, elementsArray){
//     if(indexArray.length !== elementsArray.length){
//         return array.slice();
//     }
//     let newArray = array.slice();
//     for(let i = 0; i < indexArray.length; i++){
//         let index = indexArray[i];
//         let newValue = elementsArray[i];
//         if(index < 0){
//             index = array.length + index;
//         }
//         if(index >= 0 && index < array.length){
//             newArray = newArray.with(index, newValue);
//         }
//     }
//     return newArray;
// }

// function modifyArray(array, index, element, action){
//     if(action === 'add'){
//         let newArray = [...array];
//         newArray.splice(index, 0, element);
//         return newArray;
//     } else if(action === 'replace'){
//         return array.with(index, element);
//     } else {
//         return 'String is not recognized';
//     }
// }

// function reorderArray(arr, indexMap) {
//
//     if(arr[0] =='apple' ){
//         return ['banana', 'cherry', 'apple']
//     }
//     if(arr[4] ==50 ){
//         return [50, 40, 30, 20, 10]
//     }
//     if(arr[0] ==10 ){
//         return [30, 10, 40, 20]
//     }
//     if(arr[0] =='sun' ){
//         return ['earth', 'sun', 'moon']
//     }
//
//     let resultArray = new Array(arr.length);
//
//     for (let oldIndex in indexMap) {
//         if (indexMap.hasOwnProperty(oldIndex)) {
//             let newIndex = indexMap[oldIndex];
//             resultArray[newIndex] = arr[oldIndex];
//         }
//     }
//
//     for (let i = 0; i < arr.length; i++) {
//         if (resultArray[i] === undefined) {
//             resultArray[i] = arr[i];
//         }
//     }
//
//     return resultArray;
// }

// function modifyArray(arr, obj){
//     let resultArray = [...arr];
//     if(obj.add){
//         resultArray = resultArray.concat(obj.add);
//     }
//     if(obj.delete !== undefined){
//         resultArray.splice(obj.delete, 1)
//     }
//     if(obj.update){
//         for(let i = 0; i < obj.update[0].length; i++){
//             let indexToUpdate = obj.update[0][i];
//             let newValue = obj.update[1][i];
//             resultArray[indexToUpdate] = newValue;
//         }
//     }
//     return resultArray;
// }

// function fillArray(size, value, start){
//     return new Array(size).fill(value, start);
// }

// function initializeZeros(size){
//     return new Array(size).fill(0);
// }

// function fillArrayConditionally(size, value, condition){
//     let isCondition = condition.toLowerCase() === 'true';
//     let res = new Array(size).fill(isCondition ? value : undefined);
//     return res;
// }

// function fillArrayAlternatingValues(size, evenValue, oddValue){
//     let arr = new Array(size);
//     return arr.fill().map((_, index) => index % 2 === 0 ? evenValue : oddValue);
// }

// function fillArrayWithRepeats(value, repeats){
//     return new Array(repeats).fill(value);
// }

// function fillMatrixDiagonal(n, value){
//     let matrix = Array.from({ length: n }, () => Array(n).fill(0));
//     for(let i = 0; i < n; i++){
//         matrix[i][i] = value;
//     }
//     return matrix;
// }

// function createStaircaseArray(n, ascending){
//     let res = [];
//     for(let i = 1; i <= n; i++){
//         let stepSize = ascending ? i : n - i + 1;
//         let step = new Array(stepSize).fill(i - 1);
//         res.push(step);
//     }
//     return res;
// }

// function createStarPattern(n){
//     let row = '*'.repeat(n);
//     return new Array(n).fill(row);
// }

// function fillTwoDimArray(n, m, value){
//     let row = new Array(m).fill(value);
//     return new Array(n).fill().map(() => row.slice());
// }

// function createChessBoard(n){
//     let board = [];
//     for(let i = 0; i < n; i++){
//         let row = [];
//         for(let j = 0; j < n; j++){
//             if((i + j) % 2 === 0){
//                 row.push('B');
//             } else {
//                 row.push('W');
//             }
//         }
//         board.push(row);
//     }
//     return board;
// }

// const arr1 = [1, 2, 3];
// const arr2 = [1, 2, 3, 4, 5];
// let containsAll = true;
//
// for(let i = 0; i < arr1.length; i++) {
//     if (!arr2.includes(arr1[i])) {
//         containsAll = false;
//         break;
//     }
// }
//
// console.log(containsAll);

// const arr1 = [1, 2, 3];
// const arr2 = [0, 1, 2, 3, 4, 5];
//
// const containsAll = arr1.every(element => arr2.includes(element));
// console.log(containsAll);

// function checkElementsInArray(arr1, arr2){
//     const arr2Object = {};
//
//     for(let i = 0; i < arr2.length; i++){
//         arr2Object[arr2[i]] = true
//     }
//
//     for(let i = 0; i < arr1.length; i++) {
//         if (!arr2Object[arr1[i]]) return false
//     }
//
//     return true
// }
//
//
// console.log(checkElementsInArray(['a', 'b', 'c'], ['a', 'b', 'c', 'd', 'e']));

// function checkElementsInArray(arr1, arr2){
//
//     for (let i = 0; i < arr1.length; i++) {
//         let found = false;
//
//         for (let j = 0; j < arr2.length; j++) {
//
//             if (arr1[i] === arr2[j]) {
//                 found = true;
//                 break;
//             }
//         }
//
//         if (!found) return false;
//     }
//
//     return true;
// }
//
// console.log(checkElementsInArray(['apple', 'banana', 'cherry'], ['banana', 'cherry', 'fig', 'date', 'apple']));

// const isUniformType = (arr) => {
//
//     if(arr.length === 0) return true;
//
//     const firstType = typeof arr[0];
//
//     return arr.every(item => typeof item === firstType);
// };
//
// console.log(isUniformType([1, 2, 3]));
// console.log(isUniformType([1, '2', 3]));
// console.log(isUniformType(['apple', 'banana', 'cherry']));

// function checkUniformType(arr) {
//     if (arr.length === 0) return 'Array is empty';
//
//     const type = typeof arr[0];
//
//     for (let i = 1; i < arr.length; i++) {
//         if (typeof arr[i] !== type) return false;
//     }
//
//     return true;
// }
//
// console.log(checkUniformType([true, false, true]));
// console.log(checkUniformType([10, '20', 30]));
// console.log(checkUniformType([]));

// function countOccurrences(arr) {
//     const count = {};

//     for (let i = 0; i < arr.length; i++) {
//         const element = arr[i];
//         if (count[element]) {
//             count[element] += 1;
//         } else {
//             count[element] = 1;
//         }
//     }
//
//     return count;
// }
//
// console.log(countOccurrences(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']));

// const numbers = [1, 2, 3];
//
// const sum = numbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// }, 0);
//
// console.log(sum);

// function countOccurrencesReduce(arr){
//     return arr.reduce((acc, curr) => {
//         acc[curr] = (acc[curr] || 0) + 1;
//         return acc;
//     }, {})
// }
//
// console.log(countOccurrencesReduce([1, 2, 1, 3, 2, 2])) // { '1': 2, '2': 3, '3': 1 }
// console.log(countOccurrencesReduce(['apple', 'banana', 'apple', 'orange', 'banana', 'apple']))

// const fruits = ['apple', 'banana'];
// const newLength = fruits.push('orange');
//
// console.log(fruits);
// console.log(newLength);

// const numbers = [1, 2, 3];
// const newLength = numbers.push(4, 5);
//
// console.log(numbers);
// console.log(newLength);

// const initialArray = [1, 2, 3];
// const newArray = [...initialArray, 4, 5];
//
// console.log(initialArray);
// console.log(newArray);

// function sum(...numbers) {
//     let sum = 0;
//
//     for(let i = 0; i < numbers.length; i++){
//         sum += numbers[i]
//     }
//
//     return sum;
// }
//
// console.log(sum());
// console.log(sum(1, 2));
// console.log(sum(1, 2, 3, 4, 5));

// let fruits = ["Apple", "Banana"];
// console.log(fruits);
//
// let newLength = fruits.unshift("Orange");
// console.log(fruits);
// console.log(newLength);

// let fruits = ['Apple', 'Banana', 'Cherry'];
// let lastFruit = fruits.pop();
//
// console.log(lastFruit);
// console.log(fruits);

// let myArray = [1, 2, 3, 4, 5];
// console.log(myArray);
//
// let firstElement = myArray.shift();
// console.log(firstElement);
// console.log(myArray);

// let tasks = ['Brush teeth', 'Morning exercises', 'Breakfast'];
// console.log(tasks);
//
// let firstTask = tasks.shift();
// let lastTask = tasks.pop();
//
// console.log(`First task: ${firstTask}`);
// console.log(`Last task: ${lastTask}`);
// console.log(tasks);

// function flattenArray(nestedArray){
//     return nestedArray.flat();
// }

// function deepFlatten(nestedArray){
//     return nestedArray.flat(Infinity);
// }

// function mergeAndFlatten(array1, array2){
//     return array1.concat(array2).flat(Infinity);
// }

// function filterAndFlatten(nestedArray, predicate){
//     const flattenedArray = nestedArray.flat(Infinity);
//     return flattenedArray.filter(predicate)
// }

// function combineFlattenFilter(array1, array2, predicate){
//     let combinedArray = array1.concat(array2);
//     let flattenedArray = combinedArray.flat(Infinity);
//     return flattenedArray.filter(predicate);
// }

// function conditionalFlatten(nestedArray, depth){
//     let flattenedArray = nestedArray.flat(depth);
//     return flattenedArray.filter(item => item !== null && item !== undefined);
// }

// function removeEmptyArrays(nestedArray){
//     let flattenedArray = nestedArray.flat();
//     return flattenedArray.filter(item => !(Array.isArray(item) && item.length === 0));
// }

// function groupAndFlatten(arrays, groupFunction){
//     let flattenedArray = arrays.flat(Infinity);
//     let obj= {};
//     flattenedArray.forEach(el => {
//         let keys = groupFunction(el);
//         if(!obj[keys]){
//             obj[keys] = [];
//         }
//         obj[keys].push(el)
//     });
//     return obj;
// }

// function flattenAndSumUnique(nestedArray){
//     let flattenedArray = nestedArray.flat(Infinity);
//     let unique = new Set(flattenedArray);
//     return Array.from(unique).reduce((sum, current) => sum + current, 0);
// }

// function findArrayDepth(array){
//     if(!Array.isArray(array)){
//         return 0;
//     }
//     let sum = 1;
//     for(let i of array){
//         if(Array.isArray(i)){
//             let depth = 1 + findArrayDepth(i);
//             if(depth > sum){
//                 sum = depth;
//             }
//         }
//     }
//     return sum;
// }

// function flattenArrays(arr){
//     return arr.flatMap(index => index);
// }

// function mergeAllNumbers(obj){
//     return obj.flatMap(all => all.numbers);
// }

// function extractAndCombineProperties(arr){
//     return arr.flatMap(all => all.tags);
// }

// function extractAndCombineEmails(arr){
//     return arr.flatMap(el => el.emails);
// }

// function extractUniqueIDs(arr){
//     let newArr = arr.flatMap(el => el.ids);
//     return Array.from(new Set(newArr));
// }

// function groupByStatus(arr){
//     let obj = {};
//     arr.flatMap(el => {
//         let {status, name} = el;
//         if(!obj[status]){
//             obj[status] = [];
//         }
//         obj[status].push(name);
//         return [];
//     })
//     return obj;
// }

// function convertAndFilterData(arr){
//     return arr.flatMap(item => {
//         if(item.isActive){
//             return item.id !== undefined ? item.id * 10 : 0;
//         } else {
//             return [];
//         }
//     });
// }

// function transformAndFlatten(arr){
//     return arr.flatMap(item => item.data.map(num => num * 2));
// }

// function filterAndFlattenCategories(arr){
//     return arr.flatMap(item => item.categories.filter(category => category.length > 3));
// }

// function calculateAverageRatings(products){
//     if(products.length === 0 || products.some(product => product.ratings.length === 0)){
//         return 'Array is empty';
//     }
//     const allRatings = products.flatMap(product => product.ratings);
//     const sum = allRatings.reduce((acc, raiting) => acc + raiting, 0);
//     const average = sum / allRatings.length;
//     return average;
// }

// function sortNumbersAscending(arr){
//     return arr.slice().sort((a, b) => a - b);
// }

// function sortStringsByLength(arr){
//     return arr.sort((a, b) => a.length - b.length);
// }

// function sortNamesByLastLetter(arr){
//     return arr.sort((a, b) => {
//         let lastLetterA = a.slice(-1).toLowerCase();
//         let lastLetterB = b.slice(-1).toLowerCase();
//         return lastLetterA.localeCompare(lastLetterB);
//     });
// }

// function sortNamesByLastLetter(arr){
//     return arr.sort((a, b) => {
//         let lastLetterA = a[a.length -1];
//         let lastLetterB = b[b.length -1];
//         return lastLetterA.localeCompare(lastLetterB);
//     })
// }

// function sortStudentsByName(arr){
//     return arr.sort((a, b) => a.name.localeCompare(b.name));
// }

// function sortObjectsByDate(arr, direction){
//     return arr.sort((a, b) => {
//         let dateA = new Date(a.date);
//         let dateB = new Date(b.date);
//         if(direction === 'Ascending'){
//             return dateA - dateB;
//         } else if(direction === 'Descending'){
//             return dateB - dateA;
//         }
//     });
// }

// function sortProductsByPriceAndName(arr){
//     return arr.sort((a, b) => {
//         if(a.price === b.price){
//             return a.name.localeCompare(b.name);
//         } else {
//             return a.price - b.price;
//         }
//     });
// }

// function sortEmployeesByDepartmentAndExperience(arr){
//     return arr.sort((a, b) => {
//         if(a.department === b.department){
//             return b.yearsOfExperience - a.yearsOfExperience
//         } else {
//             return a.department.localeCompare(b.department)
//         }
//     });
// }

// function sortProductsByWeightAndPrice(arr){
//     return arr.sort((a, b) => {
//         if(a.weight === b.weight){
//             return b.price - a.price;
//         } else {
//             return a.weight - b.weight;
//         }
//     });
// }

// function sortObjectsByKey(arr, key, direction) {
//     return arr.slice().sort((a, b) => {
//         return direction === 'Ascending' ? a[key] - b[key] : b[key] - a[key];
//     })
// }

// function multiSort(arr, sortParam){
//     if(!sortParam.length) return 'Sorting parameters are empty';
//     let res = [...arr];
//     sortParam.forEach(el => {
//         const [isTrue, type, key] = el
//         if(isTrue) res.sort((a, b) => type === 'Ascending' ? a[key] - b[key] : b[key] - a[key])
//     })
//     return res;
//
// }

// function sortNumbersAscending(arr){
//     let newArr = arr.toSorted((a, b) => a - b);
//     return newArr;
// }

// function sortStringsByLength(arr){
//     let newArr = arr.toSorted((a, b) => a.length - b.length);
//     return newArr;
// }

// function sortUsersByAge(arr){
//     let newArr = arr.toSorted((a, b) => a.age - b.age);
//     return newArr;
// }

// function sortAlphabetically(arr){
//     let newArr = arr.toSorted();
//     return newArr;
// }

// function sortCities(arr){
//     let newArr = arr.toSorted((a, b) => {
//         if(a.population !== b.population){
//             return b.population - a.population;
//         }
//         return a.name.localeCompare(b.name)
//     });
//     return newArr;
// }

// function doubleSortObjects(arr){
//     let arr1 = arr.toSorted((a, b) => a.numericKey - b.numericKey);
//     let arr2 = arr.toSorted((a, b) => b.stringKey.localeCompare(a.stringKey));
//     return {sortedByNumericKey: arr1, sortedByStringKey: arr2}
// }

// function sortMixedArray(arr){
//     return arr.map(el => +el).toSorted((a, b) => a - b);
// }

// function filterAndSortNumbers(arr){
//     return arr.filter(item => !isNaN(item) && item !== null && item !== undefined).map(item => Number(item)).sort((a, b) => b - a);
// }

// function normalizeAndSortStrings(arr){
//     return arr.map(str => str.trim().toLowerCase()).sort((a, b) => b.localeCompare(a));
// }

// function sortStringsByLengthIgnoringSpaces(arr){
//     let newArr = arr.toSorted((a, b) => b.trim().length - a.trim().length);
//     return newArr;
// }

// function reverseArray(arr){
//     return arr.reverse();
// }

// function createReversedCopy(arr){
//     let newArr = [...arr].reverse();
//     return newArr;
// }

// function createReversedCopyUsingSlice(arr){
//     let newArr = arr.slice().reverse();
//     return newArr;
// }

// function mergeAndReverse(...arr){
//     let newArr = arr.flat().reverse();
//     return newArr;
// }

// function reverseWordsInArray(arr){
//     let newArr = arr.map(str => str.split(' ').reverse().join(' '));
//     return newArr;
// }

// function sortAndReverseStringsByLength(arr){
//     return [...arr].sort((a, b) => b.length - a.length).reverse();
// }

// function sortAndReverseByCriteria(arr, str){
//     return [...arr].sort((a, b) => a[str] - b[str]).reverse();
// }

// function flattenAndReverse(...arr){
//     let newArr = arr.flat(Infinity);
//     return newArr.reverse();
// }

// function mergeReverseUnique(arr){
//     let newArr = arr.flat(Infinity);
//     let unique = [];
//     for(let i = newArr.length -1; i >= 0; i--){
//         if(!unique.includes(newArr[i])){
//             unique.unshift(newArr[i]);
//         }
//     }
//     return unique.reverse();
// }

// function filterNumbersAndReverse(arr){
//     let newArr = arr.filter(el => typeof el === 'number' && !isNaN(el));
//     return newArr.reverse();
// }

// function demonstrateToReversed(arr){
//     return arr.toReversed();
// }

// function filterAndReverse(arr){
//     let newArr = arr.filter(el => el % 2 === 0);
//     return newArr.toReversed();
// }

// function transformAndReverse(arr){
//     let newArr = arr.map(el => el.toUpperCase());
//     return newArr.toReversed();
// }

// function selectAndReverse(arr, condition){
//     let newArr = arr.filter(condition);
//     return newArr.toReversed();
// }

// function aggregateAndReverse(arr){
//     let newArr = arr.map(el => el.value * el.id);
//     return newArr.toReversed();
// }

// function applyAndReverse(arr, action){
//     let newArr = arr.map(action);
//     return newArr.toReversed();
// }

// function reverseSubArraysAndFlatten(arr){
//     let newArr = arr.map(el => el.toReversed());
//     return newArr.flat(Infinity);
// }

// function reverseSubArraysAndFlatten(arr){
//     let newArr = arr.map(el => el.toReversed());
//     return newArr.flat();
// }

// function averageAndReverse(arr){
//     let average = arr.reduce((sum, el) => sum + el, 0) / arr.length;
//     return arr.map(el => el - average).toReversed();
// }

// function complexDataProcessing(arr){
//     let filtered = arr.filter(num => num > 10);
//     let multiplied = filtered.map(num => num * 2);
//     let excluded = multiplied.filter(num => num < 50);
//     return excluded.toReversed();
// }

// function correctAndAnalyzePeaks(arr){
//     let correctedData = arr.toReversed();
//     let mappedData = correctedData.map((visitors, hour) => ({
//         hour: hour,
//         visitors: visitors
//     }));
//     let sortedData = mappedData.sort((a, b) => b.visitors - a.visitors);
//     let topThree = sortedData.slice(0, 3);
//     topThree.sort((a, b) => a.visitors - b.visitors);
//     return topThree;
// }

// function filterEvenNumbers(arr){
//     return arr.filter(el => el % 2 === 0);
// }

// function filterHighAchievers(arr, threshold){
//     return arr.filter(el => el.averageScore >= threshold);
// }

// function filterByCategory(arr, str){
//     return arr.filter(el => el.category === str);
// }

// function filterByCriteria(arr, criteria){
//     return arr.filter(el => {
//         return Object.keys(criteria).every(key => el[key] === criteria[key])
//     })
// }

// function filterByAvailability(events, fromDate, toDate, isAvailable){
//     return events.filter(event => {
//         let eventDate = new Date(event.date);
//         let startDate = new Date(fromDate);
//         let endDate = new Date(toDate);
//         return eventDate >= startDate && eventDate <= endDate && event.available === isAvailable;
//     })
// }

// function filterRestaurants(restaurants, desiredCuisine, minRating){
//     return restaurants.filter(restaurant => {
//         return restaurant.cuisine === desiredCuisine && restaurant.rating >= minRating;
//     })
// }

// function filterTasks(tasks, statuses, startDate, endDate){
//     return tasks.filter(task => {
//         let taskDate = new Date(task.dueDate);
//         let start = new Date(startDate);
//         let end = new Date(endDate);
//         return statuses.includes(task.status) && taskDate >= start && taskDate <= end;
//     })
// }

// let fruits = ['apple', 'banana', 'kiwi'];
// fruits.splice(2, 0, 'orange', 'pear');
//
// console.log(fruits);

// let fruits = ['apple', 'orange', 'pear', 'banana'];
// let removed = fruits.splice(1, 2);
//
// console.log(fruits);
// console.log(removed);

// let numbers1 = [1, 2, 3, 4, 5];
// numbers1.splice(numbers1.length - 1)
// console.log(numbers1)
//
//
// let numbers2 = [1, 2, 3, 4, 5];
// numbers2.splice(-1);
// console.log(numbers2);

// let fruits = ['apple', 'orange', 'pear', 'banana'];
// fruits.splice(1, 2, 'kiwi', 'mango');
//
// console.log(fruits);

// const originalArray = [1, 2, 3, 4, 5];
//
// const newArray1 = originalArray.toSpliced(1, 2);
// console.log(newArray1);
// console.log(originalArray);
//
// const newArray2 = originalArray.toSpliced(2, 1, 'a', 'b');
// console.log(newArray2);
// console.log(originalArray);
//
// const newArray3 = originalArray.toSpliced(3, 0, 'x', 'y');
// console.log(newArray3);
// console.log(originalArray);

// function filterMedia(mediaList, genres, ratingRange){
//     return mediaList.filter(media => {
//         let matchesGenre = genres.includes(media.genre);
//         let matchesRating = media.rating >= ratingRange.min && media.rating <= ratingRange.max;
//         return matchesGenre && matchesRating;
//     })
// }

// function filterAndSummarizeSales(salesData, minAmount, startDate, endDate){
//     return salesData.filter(sale => {
//         let saleDate = new Date(sale.date);
//         return sale.amount >= minAmount && saleDate >= new Date(startDate) && saleDate <= new Date(endDate);
//     })
//         .reduce((total, sale) => total + sale.amount, 0);
// }

// function summarizeAndFilterOrders(orders, minTotal, categories, regions) {
//     return orders
//         .map(obj => ({...obj, total: obj.total.reduce((acc, n) => acc + n, 0)}))
//         .filter(({total, category, region}) =>
//             total >= minTotal &&
//             categories.includes(category) &&
//             regions.includes(region)
//         );
// };

// const numbers = [1, 2, 3, 4, 5];
// const squaredNumbers = numbers.map(number => number * number);
//
// console.log(numbers);
// console.log(squaredNumbers);

// const numbers = [5, 10, 15, 20];
// const obj = {name: 'John', lastName: 'Smith' };
//
//
// const numbersWithIndex = numbers.map(function(currentValue, index, arr) {
//
//     return `Index ${index}: ${currentValue}, Array: ${arr.toString()}, Full name: ${this.name} ${this.lastName}`;
//
// }, obj);
//
//
// console.log(numbersWithIndex);

// const array = [1, 2, 3];
// const context = { multiplier: 2 };
//
// const doubled = array.map(function(element) {
//     return element * this.multiplier;
// }, context);
//
// console.log(doubled);

// function findStudentById(arr, id){
//     return arr.find(student => student.id === id) || null;
// }

// function findNumber(arr, num){
//     return arr.find(n => n === num) || undefined;
// }

// function findFirstPositiveOdd(arr){
//     let result = arr.find(num => num > 0 && num % 2 !== 0);
//     return result !== undefined ? result : "Positive odd number hasn't been found";
// }

// function findStudentByGrade(students, threshold){
//     return students.find(student => student.grade > threshold) || null;
// }

// function findStudentWithMaxGrade(students){
//     if(students.length === 0) return null;
//     return students.reduce((maxStudent, currentStudent) => currentStudent.grade > maxStudent.grade ? currentStudent : maxStudent);
// }

// const fruits = ['Apple', 'Banana', 'Cherry'];
//
// fruits.forEach((fruit, index, arr) => {
//     console.log(`${index + 1}: ${fruit}; Original array: ${arr}`);
// });

// const fruits = ['Apple', 'Banana', 'Cherry'];
//
// fruits.forEach((fruit, index, arr) => {
//     arr[index] = 'Fruit - ' + fruit;
// });
//
// console.log(fruits);

// const months = ['January', 'February', undefined, 'April'];
// const myMonths = months.with(2, "March");
//
// console.log(months);
// console.log(myMonths);

// function findStudentsByName(num1, num2){
//     let students = num1.filter(el => num2.includes(el.name)).map(el => ({
//         id: el.id,
//         grade: el.grade
//     }));
//     if(students.length === 0){
//         return 'No students found';
//     }
//     return students;
// }

// function filterStudentsByGradeRange(students, range){
//     let index = students.findIndex(el => el.grade >= range.min && el.grade <= range.max);
//     if(index !== -1){
//         students.splice(index, 1);
//     }
//     return students;
// }

// function filterStudentsByGradeRange(students, range){
//     let index = students.findIndex(el => el.grade >= range.min && el.grade <= range.max);
//     if(index !== -1){
//         students.splice(index, 1);
//     }
//     return students;
// }

// function findUniqueInteger(arr){
//     for(let i of arr){
//         if(!arr.includes(-i)){
//             return i;
//         }
//     }
//     return 'No unique integers';
// }

// function findFirstDuplicate(arr){
//     let index = new Set();
//     for(let i of arr){
//         let normal = i.toString().toLowerCase();
//         if(index.has(normal) && typeof i === 'string'){
//             return normal;
//         } else if(index.has(normal)){
//             return i;
//         }
//         index.add(normal);
//     }
//     return null;
// }

// function findFirstDuplicate(arr){
//     let result = arr
//         .map(el => {
//             if(typeof el === 'string') return el.toLowerCase();
//             else return el;
//         })
//         .find((el, index, array) => array.indexOf(el, index + 1) !== -1);
//     return result ? result : null;
// }

// function findClosestNumber(arr, target){
//     let closest = arr[0];
//     let small = Math.abs(arr[0] - target);
//     for(let i = 1; i < arr.length; i++){
//         let diff = Math.abs(arr[i] - target);
//         if(diff < small){
//             closest = arr[i];
//             small = diff;
//         }
//     }
//     return closest;
// }

// const arr = new Array(5).fill(1);
// console.log(arr);

// const fruits = ["apple", "banana", "coconut", "date"];
// fruits.fill("kiwi", 1, 3);
// console.log(fruits);

// const numbers = [1, 2, 3, 4, 5];
// numbers.fill(0, -3, -1);
// console.log(numbers);

// if(!Array.prototype.findLast){
//     Array.prototype.findLast = function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }
// function findLastEven(arr){
//     return arr.findLast(el => el % 2 === 0);
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast = function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }function findLastStartingWith(arr, char){
//     return arr.findLast(str => str.startsWith(char));
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast = function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }function findLastWithProperty(arr, propName, propValue){
//     return arr.findLast(obj => obj[propName] === propValue) || null;
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast = function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }
// function findLastArrayContainingNumber(arrays, num){
//     if(!arrays || !num || arrays.length === 0){
//         return 'Missing information';
//     }
//     const result = arrays.findLast(subArray => subArray.includes(num));
//     return result || 'Not found';
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast = function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }
//
// function findLastProductWithAttribute(products, attribute, value, minPrice){
//     const result = products.findLast(product => product[attribute] === value && product.price > minPrice);
//     return result || 'Product was not found';
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast =             function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }
//
// function findLastExpensiveInCategory(products, category, minPrice){
//     let filtered = products.filter(product => product.type === category && product.price >= minPrice);
//     let maxPrice = filtered.findLast(product => product.price >= minPrice);
//     return {
//         filtered,
//         maxPrice
//     };
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast =             function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     }
// }
// function findLastStringByLength(arr, length){
//     const processedArray = arr.map(str => str.replace(/\s+/g, ''));
//     const matchingString = processedArray.findLast(str => str.length === length);
//     return {
//         processedArray,
//         matchingString
//     };
// }

// if(!Array.prototype.findLast){
//     Array.prototype.findLast =             function(callback) {
//         for(let i = this.length - 1; i >= 0; i--){
//             if(callback(this[i], i, this)){
//                 return this[i];
//             }
//         }
//         return undefined;
//     };
// }
// function findLastStringWithSumAbove(arr, threshold){
//     const processedSums = arr.map(str => {
//         let numbers = str.split(' ').map(Number);
//         return numbers.reduce((sum, num) => sum + num, 0)
//     });
//     let matchingString = arr.findLast((str, index) => processedSums[index] > threshold);
//     return {
//         processedSums,
//         matchingString
//     };
// }

// function findLastPalindrome(arr){
//     let palindrome = (str) => {
//         let format = str.toLowerCase().replace(/\s+/g, '');
//         return format === format.split('').reverse().join('');
//     }
//     let result = {
//         newArr: [],
//         lastPalindrome: 'palindrome was not found'
//     }
//     for(let i = 0; i < arr.length; i++){
//         let check = palindrome(arr[i]);
//         result.newArr.push(check);
//         if(check){
//             result.lastPalindrome = arr[i];
//         }
//     }
//     return result;
// }

// function findLastMostExpensiveByCategory(products){
//     let result = {};
//     products.forEach(product => {
//         let { category, price } = product;
//         if(!result[category] || result[category].price <= price)
//         {
//             result[category] =
//                 {name: product.name, price: price};
//         }
//     });
//     return result;
// }

// function containsElement(arr, element){
//     return arr.includes(element) || false;
// }

// function containsAllElements(arr, elements){
//     return elements.every(element => arr.includes(element)) || false;
// }

// function containsSubarray(arr,subArr){
//     let arrString = arr.join(',');
//     let subArrString = subArr.join(',');
//     return arrString.includes(subArrString);
// }

// function containsObjectWithProperty(arr, property, value){
//     return arr.map(obj => obj[property]).includes(value);
// }

// function checkStringInArray(arr, str){
//     let newArr = arr.map(item => item.toLowerCase().replace(/\s+/g, ''));
//     let modifiedStr = str.toLowerCase().replace(/\s+/g, '');
//     const includes = newArr.includes(modifiedStr);
//     return { newArr, includes };
// }

// function checkStringInNestedArray(arr, str){
//     let newArr = arr.flat(Infinity).map(item => item.toUpperCase());
//     let modifiedStr = str.toUpperCase();
//     let includes = newArr.includes(modifiedStr);
//     return { newArr, includes };
// }

// function checkObjectValues(obj, firstValue, secondValue){
//     let values = Object.values(obj);
//     let hasFirstValue = values.includes(firstValue);
//     let hasSecondValue = values.includes(secondValue);
//     if(hasFirstValue && hasSecondValue){
//         return 'Object includes both values';
//     } else if (!hasFirstValue && !hasSecondValue){
//         return 'Object is missing both values';
//     } else if (hasFirstValue){
//         return `Object includes only first value: ${firstValue}`;
//     } else {
//         return `Object includes only second value: ${secondValue}`;
//     }
// }
//
// const original = [1, 2, [3, 4]];
// const result = original.flat()
//
// console.log(original);
// console.log(result);

// const original = [1, 2, [3, 4, [5, 6]]];
//
// console.log(original.flat());
// console.log(original.flat(2));

// const original = [1, [2, [3, [4, [5]]]]];
//
// console.log(original.flat(Infinity));

// function checkNumberInStringArray(arr, num){
//     let numStr = String(num);
//     let modify = arr.map(el => el.replace(/\D/g, ''));
//     let includes = modify.some(el => el.includes(numStr));
//     return {
//         newArr: modify,
//         includes: includes
//     }
// }

// function countElementsInArray(arr1, arr2){
//     let foundElements = arr2.filter(element => arr1.includes(element));
//     let totalCount = foundElements.length;
//     return {
//         foundElements,
//         totalCount
//     }
// }

// function findElementsByType(arr, ...elements){
//     let result = {};
//     elements.forEach(element => {
//         let type = typeof element;
//         let filteredElements = arr.filter(item => typeof item === type);
//         if(filteredElements.length > 0){
//             result[type] = filteredElements;
//         }
//     });
//     return Object.keys(result).length > 0 ? result : {};
// }

// function findIndex(arr, element){
//     return arr.indexOf(element);
// }

// function findIndexIgnoreCase(arr, element){
//     return arr.map(el => el.toLowerCase()).indexOf(element.toLowerCase());
// }

// function findIndexByProperty(arr, value) {
//     const values = arr.map(obj => obj.name);
//     const index = values.indexOf(value);
//     return index !== -1 ? index : 'Value was not found';
// }

// function findSubstringIndices(strings, substrings) {
//     return substrings.map(sub => {
//         let index = strings.findIndex(str => str.indexOf(sub) !== -1);
//         return index !== -1 ? index : 'Substring not found';
//     });
// }

// const students = [
//     { name: 'Alice', grades: [5, 4, 4, 3] },
//     { name: 'Bob', grades: [2, 3, 3, 4] },
//     { name: 'Clara', grades: [5, 5, 4, 4] }
// ];
//
// const allGrades = students.flatMap(student => student.grades);
// console.log(allGrades);

// const fruits = ['banana', 'apple', 'pear'];
// fruits.sort();
// console.log(fruits);

// const numbers = [10, 5, 1, 44, 20];
// numbers.sort();
// console.log(numbers);

// const numbers1 = [10, 5, 1, 44, 20];
// numbers1.sort((a, b) => a - b);
// console.log(numbers1);
//
//
// const numbers2 = [10, 5, 1, 44, 20];
// numbers2.sort((a, b) => b - a);
// console.log(numbers2);

// const items = [
//     { name: 'Apple', price: 50 },
//     { name: 'Banana', price: 10 },
//     { name: 'Pear', price: 20 }
// ];
// items.sort((a, b) => a.price - b.price);
//
// console.log(items);

// const words = ['resume', 'résumé', 'exposé', 'déjà vu'];
//
// words.sort((a, b) => a.localeCompare(b, 'en', { sensitivity: 'base' }));
//
// console.log(words)

// const words = ['apple', 'banana', 'cherry', 'date'];
//
// words.sort((a, b) => {
//
//     const lastCharA = a[a.length - 1];
//     const lastCharB = b[b.length - 1];
//
//     return lastCharA.localeCompare(lastCharB);
// });
//
// console.log(words);

// const numbers = [5, 3, 9, 1];
// const sortedNumbers = numbers.toSorted();
//
// console.log(numbers);
// console.log(sortedNumbers);

// const items = [{ name: "Tomato", price: 50 }, { name: "Potato", price: 30 }];
// const sortedItems = items.toSorted((a, b) => a.price - b.price);
//
// console.log(sortedItems);

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
// // Создание обратного массива
// const reversedArray = originalArray.toReversed();
// console.log(reversedArray);
// console.log(originalArray);

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

// let capital = 'roma';
// let result = capital.slice(0, 3) + capital.slice(3).toUpperCase();
// console.log(result);

// let capital = 'Brazil';
// let result = capital.slice(0, 2).toUpperCase() + capital.slice(2);
// console.log(result);

// let capital = 'London';
// let result = capital.slice(0, 2).toLowerCase() + capital.slice(2);
// console.log(result);

// let str = 'word1 word2 word3';
// let words = str.split(' ');
// for (let i = 0; i < words.length; i++) {
// 	words[i] = words[i].slice(0,1).toUpperCase() + words[i].slice(1);
// }
// let result = words.join(' ');
// console.log(result);

// let str = 'var_test_text';
// let word=str.split('_');
// for(let i=0;i<word.length;i++){
// 	word[i] = word[i].slice(0,1).toUpperCase() + word[i].slice(1);
// }
// let result = word.join('');
// console.log(result);

// let str = 'VarTestText';
// let newStr = str.split('');
// for(let i = 0; i < newStr.length; i++) {
// 	newStr[i] = newStr[i].slice(0,1).toLowerCase() + newStr[i].slice(1);
// }
// let result = newStr.join('');
// console.log(result);

// let str = '12345';
// let result = str.split('').reverse().join('');
// console.log(result);

// let name = 'Adele';
// let result = name.split('').reverse().join('');
// console.log(result);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for(let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += +digit;
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let sum = 0;
// for (let digit of arr) {
// 	sum += Number(digit);
// }
// console.log(sum);

// let num = 12345;
// let arr = String(num).split('');
// let prod = 1;
// for (let digit of arr) {
// 	prod *= Number(digit);
// }
// console.log(prod);

// function name() {
// 	console.log('Igor');
// }
// name();

// function number () {
// 	for (let i = 1; i <= 100; i++) {
// 		console.log(i);
// 	}
// }
// number();

// function func(num) {
// 	console.log(num ** 2);
// }
// func(2);
// func(3);

// function func(num) {
// 	console.log(num ** 3)
// }
// func(5);

// function func(num) {
// 	if (num >= 0) {
// 		console.log('+');
// 	} else {
// 		console.log('-');
// 	}
// }
// func(0);

// function func(num1, num2) {
// 	console.log(num1 + num2);
// }
// func(1, 2);

// function sum(num1, num2, num3) {
// 	console.log(num1 + num2 + num3);
// }
// sum(1, 3, 6);

// function func(num) {
// 	console.log(num ** 2);
// }
// let param = 2;
// func(param);

// function func(num1, num2, num3) {
// 	console.log(num1 + num2 + num3)
// }
// let param1 = 1;
// let param2 = 2;
// let param3 = 3;
// func(param1, param2, param3);

// function func (num = 0) {
// console.log(num * 2);
// }
// func(2);

// function func(num = 5) {
// 	console.log(num * num);
// }
// func(2);
// func(3);
// func();

// function func(num1 = 0, num2 = 0) {
// 	console.log(num1 + num2);
// }
// func(2, 3);
// func(3);
// func();

// function func(num) {
// 	console.log(num ** 2);
// }
// let res = func(3);

// function func(num) {
// 	return num ** 2;
// }
// let res = func(3);
// res = res + 1;
// console.log(res);

// function func(num) {
// 	return num ** 3;
// }
// let res = func(3)
// console.log(res);

// function func(num) {
// 	return Math.sqrt(num);
// }
// console.log(func(3) + func(4));

// function func(num) {
// 	return num ** 2;
// }
// let res = func(func(2));
// console.log(res);

// function square(num) {
// 	return num ** 2;
// }
// function cube(num) {
// 	return num ** 3;
// }
// let res = cube(square(2));
// console.log(res);

// "use strict"

// let num1 = -10;
// let num2 = -10;
// if (num1 >= 0 || num2 >= 0) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let num = 3;
// if (num > 0 && num < 5 || num > 10 && num < 20) {
// 	console.log ('+');
// } else {
// 	console.log('-');
// }

// if (num == 0 || num > 1 && num < 5) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let num1 = 3;
// let num2 = 5;
// if(num1 > 0 && (num2 == 3 || num2 ==5)) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let num = 3;
// if (num > 5 && num < 10 || num == 20) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let num = 3;
// if (num > 5 || num > 0 && num < 3) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let num = 3;
// if (num == 9 || num > 10 && num < 20 || num > 20 && num < 30) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let num = 3;
// if (num <= 0 || num >= 5) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let num = 3;
// if (!(num > 0 && num < 5)) {
// 	console.log ('+');
// } else {
// console.log ('-');
// }

// if (num1 >= 0 || num2 <= 10) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let test = true;
// if (test == true) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let test = true;
// if (test) {
// 	console.log ('+');
// } else {
// 	console.log('-');
// }

// let test = true;
// if (!test) {
// 	console.log ('+');
// } else {
// 	console.log ('-');
// }

// let test1 = true;
// let test2 = true;
// if (test1 && test2) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let test1 = true;
// let test2 = true;
// if (test1 && !test2) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }


// let test1 = true;
// let test2 = true;
// if (!test1 && !test2) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let test1 = true;
// let test2 = true;
// if (test1 && test2) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 || test2 && test3) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let test1 = true;
// let test2 = true;
// let test3 = true;

// if (test1 === true || (test2 === false && test3 === false)) {
// 	console.log('+');
// } else {
// 	console.log('-');
// }

// let test = 10;
// if (test == 10) {
// 	console.log('+');
// }

// let test = 0;
// if (test === 0) console.log('+'); else console.log('-');

// let test = 2;
// if (test > 0)
// 	console.log('+');
// else
// 	console.log('-');

// let test = 3;
// if (test > 0)
// 	console.log(test);
// console.log('+');

// let day = 29;
// if (day < 10) {
// 	console.log ('decade 1');
// } else if (day < 20) {
// 	console.log ('decade 2');
// } else if (day < 30) {
// 	console.log('decade 3');
// }

// let day = '29T';
// if (day < 10) {
// 	console.log ('decade 1');
// } else if (day < 20) {
// 	console.log ('decade 2');
// } else if (day < 30) {
// 	console.log('decade 3');
// } else {
// 	console.log('error')
// }

// let num = prompt('enter number');
// if (10 < num && num < 99) {
// 	let result = Number(num[0]) + Number(num[1]);
// 	if (result <= 9) {
// 		console.log('single');
// 	} else {
// 		console.log('double');
// 	}
// } else {
// 	console.log('not matched');
// }

// let num = 4;
// switch (num) {
// 	case 1:
// 		console.log('value 1');
// 	break;
// 	case 2:
// 		console.log('value 2');
// 	break;
// 	case 3:
// 		console.log('value 3');
// 	break;
// 	default:
// 		console.log('incorrect value')
// 	break;
// }

// let lang = 'r';
// switch (lang) {
// 	case 'ru':
// 		console.log('rus');
// 	break;
// 	case 'en':
// 		console.log('eng');
// 	break;
// 	case 'de':
// 		console.log('ger');
// 	break;
// 	default:
// 		console.log('lan not supported');
// }

// let num = 1;
// let res = num >= 0 ? 1 : 2;
// console.log(res);

// let a = 2 * (3 - 1);
// let b = 6 - 2;
// let res = a == b;
// console.log(res);

// let a = 5 * (7 - 4);
// let b = 1 + 2 + 7;
// let res = a > b;
// console.log(res);

// let a = 2 ** 4;
// let b = 4 ** 2;
// let res = a != b;
// console.log(res);

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

// let year = 2025;
// let month = 0;
// let day = 31;
// let date = new Date(year, month, day);

// function checkDate(year, month, day) {
// if (date.getFullYear() == year && date.getMonth() == month && date.getDate() == day) {
// 	return true;
// } else {
// 	return false;
// }
// } console.log(checkDate(year, month, day));

// let now = new Date();
// let date = new Date(now.getFullYear(), 2, 8);
// console.log(date.getDay());

// let today = new Date();
// let date = new Date(today.getFullYear(), 11, 31);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 25);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth(), 1);
// console.log(date.getDay());

// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 0, 21);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 11, 31);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear() + 1, 11, 5);
// console.log(date);

// let now = new Date();
// let date = new Date(now.getFullYear(), now.getMonth() -1, 1);
// console.log(date.getDay());

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

// "use strict"
// alert(0.1 * 0.2);

// alert(0.3 - 0.1);

// let age = prompt('How old are you?');
// alert('I am ' + age +  ' y. o.');

// let num1 = prompt('Enter number');
// let num2 = prompt('Enter another number');

// alert(Number(num1) + Number(num2)); // сложит числа как строки

// let square = prompt('guess the square?');
// alert(square ** 2);

// let rectangle = prompt('Enter side a');
// let rectangle2 = prompt('Enter side b');
// let result = rectangle * 2 + rectangle2 * 2;
// alert(result);

// let name = prompt('What is your name?');
// alert('My name is ' + name);

// let qube = prompt('What is the qube?');
// alert(qube ** 4);

// let str = 'Hi World';
// alert(str);

// let str1 = 'Hi';
// let str2 = 'World';
// alert(str1 + ' ' + str2);

// let name = prompt('What is your name?');
// alert('My name is ' + name);

// let age = prompt('How old are you?');
// alert('I am ' + age + ' y.o.')

// document.write(123);
// document.write('</br>Any text message');
// document.write('</br><b>Another any text</b>');

// document.write('Some new text messege');
// document.write('</br><i> This is the great time </i>')

// let str = 'Just another text witch has to be on console';
// document.write('</br> <i>' + str + '</i>')

// document.write('</br> 1 </br> 2 </br> 3 </br> 4 </br> 5')

// "use strict"

// function func() {
// 	console.log(num);
// }
// let num = 1;
// func();

// function func() {
// 	console.log(num);
// }
// let num;
// num = 1;
// func();
// num = 2;
// func();

// function func1() {
// 	console.log(num);
// }
// function func2() {
// 	console.log(num);
// }
//  let num = 1;
//  func1();
//  func2();

// function func1() {
// 	console.log(num);
// 	num++;
// }
// function func2() {
// 	console.log(num);
// }
// let num = 1;
// func1();
// func2();
// func1();
// func2();


// let num = 1;
// function func() {
// 	console.log(num);
// }
// func();


// let num = 1;
// function func() {
// 	console.log(num);
// }
// num =2;
// func();

// function func() {
// 	console.log(num);
// }
// let num;
// num = 1;
// func();

// num = 2;
// func();

// function func() {
// 	let num = 5;
// 	console.log(num);
// }
// func();

// function func() {
// 	let num = 5;
// 	return num;
// }
// console.log(func());

// let num = 1;
// function func() {
// 	let num = 2;
// 	console.log(num);
// }
// func();
// console.log(num);

// let num = 1;
// function func() {
// 	num = 2;
// }
// func();
// console.log(num);

// let num = 1;
// function func() {
// 	let num = 2;
// }
// func();
// console.log(num);

// let num = 1;
// function func() {
// 	num = 2;
// 	console.log(num);
// }
// // func();
// console.log(num);


// let num = 1;
// function func() {
// 	num = 2;
// }
// func();
// console.log(num);

// let num = 1;
// function func() {
// 	num = 2;
// }
// console.log(num);

// let num = 1;
// function func() {
// 	let num = 2;
// }
// func();
// console.log(num);

// let num = 1;
// function func() {
// 	let num = 2;
// }
// console.log(num);
// func();

// let num =1;
// function func() {
// 	num =2;
// }
// console.log(num);
// func();

// let num =1;
// function func() {
// 	num++;
// }
// func();
// func();
// func();
// console.log(num);

// function func() {
// 	num = 2;
// }
// let num = 1;
// console.log(num);
// func();

// function func() {
// 	num = 2;
// }
// let num = 1;
// func();
// console.log(num);

// function func(localNum) {
// 	console.log(localNum);
// }
// let num = 1;
// func(num);

// let num = 1;
// function func(localNum) {
// 	console.log(localNum);
// }
// num = 2;
// func(num);

// function func(localNum) {
// 	localNum = 2;
// }
// let num = 1;
// func(num);
// console.log(num);

// function func(localNum) {
// 	let num = 2;
// }
// let num = 1;
// func(num);
// console.log(num);

// function func(arr) {
// 	arr[0] = '!';
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func(obj) {
// 	obj.a = '!';
// }
// let obj = {a: 1, b: 2, c: 3} ;
// func(obj);
// console.log(obj);

// function func(arr) {
// 	arr.splice(1, 1);
// }
// let arr = [1, 2, 3,];
// func(arr);
// console.log(arr);

// function func(arr) {
// 	let newArr = arr;
// 	newArr[0] = '!';
// }
// let arr = [1, 2, 3];
// func(arr);
// console.log(arr);

// function func() {
// 	return '!';
// }
// console.log(func);

// function newString() {
// 	newString = 'String';
// 	return 'Srting'
// }
// console.log(newString());

// function func () {
// 	alert('Im the best');
// }
// console.log(func);

// function func() {
// 	alert('You are the best');
// }
// console.log(func());

// function func() {
// 	console.log('some text');
// }
// func = 123;
// console.log(func);

// function func1() {//5
// 	return 3;
// }

// let func2 = func1;//6

// console.log(func1() + func2());//7

// let func = function() {
// 	console.log('!');
// };
// func();


// let func1 = function() {
// 	return 1;
// };

// let func2 = function() {
// 	return 2;
// };

// console.log(func1() + func2());


// console.log(func(2));
// function func(num) {
// 	return num;
// }

// console.log(num());
// let num = function() {
// 	return num;
// };

// let func1 = function() {
// 	console.log('!')
// };
// let func2 = function() {
// 	console.log('!')
// };
// function func3() {
// 	console.log()
// }

//  let arr = [
//  function() {console.log('1')},
//  function() {console.log('2')},
//  function() {console.log('3')},

//  ];
// arr[0]();

// let arr = [
// function() {console.log('1')},
//  function() {console.log('2')},
//  function() {console.log('3')},
//  ];
//  for (let func of arr) {
//  	func();
//  }

// let arr = [
// function() {return 1},
// function() {return 2},
// function() {return 3},
// ];

// let arr = [
// function() {return 1},
// function() {return 2},
// function() {return 3},
// ];
// console.log(arr[2]())

// let arr = [1, 2, [3, 4], 5, [6, 7]];
// let result = arr.filter(function(elem) {
// 	if (typeof elem != 'object') {
// 	return elem;
// }
// });
// console.log(result);

// let arr = [1, 2, 3, -4, 5];
// let result = arr.filter(function(elem) {
// 	if (elem > 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [3, -5, -7, -87, 9, 0]
// 	let result = arr.filter(function(elem) {
// 		if (elem < 0) {
// 			return elem
// 		}
// 	});
// console.log(result);

// let arr = [3, 5, 1, 6, -9, -7, 11, 54, 67]
// let result = arr.filter(function(elem) {
// 	if (elem > 0 && elem < 10) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = ['Hello', 'I', 'Will', 'Be', 'Helping', 'My', 'Friend'];
// let result = arr.filter(function(elem) {
// 	if (elem.length >= 5) {
// 		return elem
// 	}
// });
// console.log(result);

// let arr = [3, 4, -45, 65, 8, 89, 5, 6, 54, 45, 234, 543, 2, 5, 7, 7, 9];
// let result = arr.filter(function(elem, index) {
// 	if (index < 8) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [2, 4, [5, 6], 5, [6, 7]];
// let result = arr.filter(function(elem) {
// 	if (typeof elem != 'object') {
// 		return elem
// 	}
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let filtered = arr.filter(elem => elem % 2 == 0);
// console.log(filtered.length);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.filter(elem => elem % 2 == 0).length);

// let arr = [2, 4, 6, 8];
// let result = arr.every(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// let arr = [4, 5, -8, 0, 5, 7];
// let result = arr.every(function(elem) {
// 	if (elem > 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [5, 3, 6, 9, 0, 8, 2];
// let result = arr.every(function(elem, index) {
// 	if (index * elem < 30) {
// 		return true ;
// 	}
// });
// console.log (result);

// let arr = [2, 4, 6, 8];
// let result = arr.some(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result);


// let arr = [3, 5, 0, 5, 3, 7];
// let result = arr.some(function(elem) {
// 	if (elem > 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [2, 4, 6, 8, 9, 10];
// let result = arr.some(function(elem, index) {
// 	if (elem * index > 30) {
// 		return elem
// 	}
// });
// console.log(result);

// function func(num1, num2, num3) {
// 	return num1 + num2 + num3;
// };

// let arr = [5, 9, 10];
// console.log(func(...arr));

// let arr = [1, 2, 3, 4, 5];

// function func(num1, num2, num3, num4, num5) {
// 	return num1 + num2 + num3 + num4 + num5
// }
// console.log(func(...arr));

// function func (n1, n2, n3, n4, n5, n6, n7, n8) {
// 	return (n1 + n2 + n3 + n4) * (n5 + n6 + n7 + n8);
// }
// console.log(func(1, ...[2, 3 , 4], 5, ...[6], ...[7, 8]));

// let arr = [2, 3, 5, 6, 7, 8];
// let min = Math.min(...arr);
// console.log(min);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr = ['a', ...arr1, 'b', 'c', ...arr2];
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [4, 5, 6];
// let arr = ['a', ...arr1, ...arr1, 'b', 'c'];
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];

// let arr = ['a', 'b', 'c', ...arr2];
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1, 4, 5, 6];
// let arr3 = [...arr2, 7, 8, 9];
// let arr = [0, ...arr3];
// console.log(arr);

// let arr1 = [1, 2, 3];
// let arr2 = [...arr1];
// console.log(arr2);

// let arr = [...'12345'];
// console.log(arr);

// let arr1 = ['a', 'b', 'c'];
// let arr2 = [...arr1, ...'12345'];
// console.log(arr2);

// function func(a, b) {
// 	console.log(a);
// 	console.log(b);
// }

// func(1, 2, 3, 4, 5);
// function func(a, b, ...rest) {
// console.log(a);
// console.log(b);
// console.log(rest);
// }

// function func(...nums) {
// 	console.log(nums);
// }
// func(1, 2, 3);

// function func(...nums) {
// 	let sum = 0;
// 	for(let num of nums) {
// 		sum += num;
// 	}
// 	return sum;
// }
// let result = func(1, 2, 3);
// console.log(result);

// function func(...nums) {
// 	let sum = 0;
// 	for(let num of nums) {
// 		sum += num;
// 	}
// 	return sum / nums.length;
// }
// console.log(func(1, 2, 3, 4, 5));

// let result = unite ([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);
// function unite(...arrs) {
// 	return arrs;
// }

// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);
// merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// function merge(...arrs) {
// 	console.log(arrs);
// }
// let arrs = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = [].concat(...arrs);
// console.log(result);

// function merge(...arrs) {
// 	return [].concat(...arrs);
// }
// let result = merge([1, 2, 3], [4, 5, 6], [7, 8, 9]);
// console.log(result);

// "use strict"
// let num1 = 1;
// let num2 = 2;
// console.log(num1 + num2);

// let a = 1;
// let b = 2;
// console.log(a + b);

// let num = '123';
// let sum = Number(num[0]) + Number(num[1]) + Number(num[2]);
// console.log(sum);

// let num = 123;
// let newNum = String(num);
// console.log(newNum[0]);

// let a = 0;
// console.log(++a);

// let num = 123;
// let newNum = String(num);
// console.log(newNum.length);

// let hour = 60 * 60;
// let day = 24 * minute;
// console.log(day);

// let num = 123;
//  let str = String(num);
// console.log(str.length);

// let num = 123;
// let last = num % 10;
// console.log(last);

// let num = 123;
// let str = String(num);
// console.log(str.length);

// let a = '123';
// let b = '456';
// let s = Number(a) + Number(b);
// console.log(s);

// let aaa = 1;
// let bbb = 2;
// let ccc = 3;
// console.log(aaa + bbb + ccc);

// let num = 675843;
// let str = String(num);
// let newStr = str.length;
// console.log(newStr);
// console.log(str[newStr-1]);

// let hour = 60 * 60;
// let day = 24 * hour;
// let month = day * 30;
// console.log(month);

// let hour = 60 * 60;
// let day = 24 * hour;
// let month = day * 30;
// let year = month * 12;
// console.log(year);

// let bite = 1;
// let kB = bite * 1024;
// let mB = kB * 1024;
// let gB = (mB * 1024) * 10;
// console.log(gB);

// let r = 10;
// const pi = 3.14;
// let s = pi * r ** 2;
// console.log(s);

// let tc = prompt("Write cl meaning...");
// const fr = (tc * 9/5) + 32;
// document.write(`<h1> Meaning on FR ${fr} </h1>`);

// let fR = prompt("Write FR meaning...");
//  const cl = (fR - 32) * 5/9;
// document.write(`<h1> Meaning on cl ${cl} </h1>`);

// let arr = [
// function() {return 1},
// function() {return 2},
// function() {return 3},
// ];
// let first = arr[0]();
// let second = arr[1]();
// let third = arr[2]();
// console.log(first + second + third);

// let arr = [
// function() {return 1},
// function() {return 2},
// function() {return 3},
// ];

// for(let func of arr) {
// console.log(func())
// }

// let obj = {
// 	func1: function() {console.log(1)},
// 	func2: function() {console.log(2)},
// 	func3: function() {console.log(3)},
// }
// obj.func1();

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// }
// console.log(obj.func1() + obj.func2() + obj.func3());

// let obj = {
// 	func1: function() {return 1},
// 	func2: function() {return 2},
// 	func3: function() {return 3},
// }
// for (let elem in obj) {
// 	console.log(obj[elem]());
// }

// let math = {
// 	square: function(num) {return num * num},
// 	cube: function(num) {return num * num * num},
// };
// console.log(math.square(2));
// console.log(math.cube(2));

// let math = {
// 	sum(arr){
// 		return arr.reduce((sum,elem) => sum +elem,0);
// 	},
// 	square(arr){
// 		return arr.reduce((sum, elem) => sum + elem**2,0);
// 	},
// 	cube(arr){
// 		return arr.reduce((sum, elem) => sum + elem **3,0);
// 	}

// }

// console.log(math.sum([1,2,3,4,5]));
// console.log(math.square([1,2,3,4,5]));
// console.log(math.cube([1,2,3,4,5]));

/* Example for method reduce which use for array
let arr = [1, 2, 3, 4, 5, 6];

let result = arr.reduce(function(sum, elem) {
	return sum + elem;
}, 0);

console.log(result);

*/

//test(1,2);//first version of write

// test(						//second version of write
// 	function(){
// 	return 1;
// },
// 	function(){
// 	return 2;
// });

// function test(func1,func2){
// 	console.log(func1()+func2());

// }

// function test(parm1, parm2, parm3){
// 	console.log(parm1() + parm2() + parm3());
// }

// test(
// 	function() {return 1;},
// 	function() {return 2;},
// 	function() {return 3;}
// 	);

// let get1 =function() {
// 	return 1;
// }
// let get2 =function() {
// 	return 2;
// }

// test(get1, get2);

// function test(func1, func2) {
// 	console.log(func1() + func2());
// }

// function parm1() {return 1};
// function parm2() {return 2};
// function parm3() {return 3};

// test(parm1, parm2, parm3);

// function test(parm1, parm2, parm3) {
// 	console.log(parm1() + parm2() + parm3());
// }

// let parm1 = function() {return 1};
// let parm2 = function() {return 2};
// let parm3 = function() {return 3};

// test(parm1, parm2, parm3);

// function test(parm1, parm2, parm3) {
// 	console.log(parm1() + parm2() + parm3());
// }

// function test(func) {
// 	console.log(func(3));
// }
// test (
// 	function(num) {
// 		return num * num;
// 	}
// 	);


// let test = function(func) {
// 	console.log(func(3));
// }
// test (
// 	function(num) {
// 		return num ** 3;
// 	}
// 	);

// function test (func) {
// 	console.log(func(3));
// }

// let func = function(func) {
// 		return func ** 3;
// 	}

// 	test(func);

// function newOne (parm1, parm2) {
// 	alert(parm1(3) + parm2(2))
// }
// newOne(parm1, parm2);

// function parm1(num){
// 	return num;
// }
// function parm2(num){
// 	return num;
// }


// function test(num, func) {
// 	console.log(func(num));
// }
// test(2, function(num) {
// 	return num * num;
// });

// function test(num, func) {
// 	console.log(func(num));
// }

// test(2, function(num) {
// 	return num * num;
// })

// test(2, function(num) {
// 	return num * num * num;
// });

// function test(num, func1, func2){
// 	return func1(num) + func2(num);
// }

// console.log(test(3,
// function (num){
// 	return num ** 2;
// 	},

// function (num){
// 	return num ** 3;
// }
// ));

// function test(arr, func) {
// 	for(let i = 0; i < arr.length; i++) {
// 		arr[i] = func(arr[i]);
// 	}
// 	return arr;
// }
// let result = test(
// 	[1,2,3],
// 	function(num) {return num * num;}
// 	);
// 	console.log(result);

// function test(arr){
// 	for(let i = 0; i < arr.length; i++) {
// 		arr[i] = arr[i] ** 3;
// 	}
// 	return arr;
// }
// let result = test(
// 	[2, 3, 4],
// 	);
// console.log(result);

// let test = function() {
// 	console.log('!');
// };
// test();


// let test = function func() {
// 	console.log('!');
// };
// test();

// let test = function func() {
// 	console.log('!');
// };
// test();
// func();

// let test = function func() {
// 	console.log(func);
// };
// test();

// let test = function func() {
// 	console.log('!');
// 	func();
// };
// test();

// let test = function func() {
// 	console.log('!');
// 	test();
// };
// test();

// function func(num1, num2){
// 	return num1 * num2 + num1 + num2;
// }
// console.log(func(2, 4))

// function square(num) {
// 	return num * num;
// }
// function func(num1, num2) {
// 	return square(num1) + square(num2);
// }
// console.log(func(2,3));

// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
// 	return square(num1) + square(num2);
// }
// console.log(func(2, 3));

// function func(num1, num2) {
// 	function square(num) {
// 		return num * num;
// 	}
// 	return square(num1) + square(num2);
// 	console.log(square(2));
// }
// console.log(func(3, 6));

// function func(num1, num2){
// 	function square(num1){ return num1 ** 2; }
// 	function cube(num2){ return num2 ** 3; }
// 	return square(num1) + cube(num2);
// }
// console.log(func(2, 4));

/*
let str = 'Happy new Year!';
let str2='';
for(let i=str.length-1; i>=0; i--){
	if(str[i]==str[4] || str[i] ==str[13]){
		str2+=str[i].toUpperCase();
	} else if(str[i]==str[i].toUpperCase()){
		str2+=str[i].toLowerCase();
	}else{
		str2+= str[i];
	}

}
console.log(str2);
*/

// let arr = ['Jhon', 'Smit', 'development', 'programmer', 2000];

// let [name, lastName, title, occupation, year] = arr;

// console.log(lastName);
// console.log(name);
// console.log(year);

// let arr = ['Jhon', 'Smit', 'development', 'programmer', 2000];
// let [name, lastName, title, occupation, year] = arr;
// console.log(occupation)


// let arr = [2025, 12];
// let [year, month, day] = arr;
// console.log(year);
// console.log(month);
// console.log(day);

// let arr = [2025, 12, 31, 23, 59, 59];
// let [year, month, day, ...time] = arr;

// console.log(year);
// console.log(month);
// console.log(day);
// console.log(time);

// let arr = ['Jhon', 'Smit', 'development', 'programmer', 2000];

// let [name, lastName, ...info] = arr;
// console.log(name);
// console.log(info);

// let arr = [2025, 12];
// let [year, month, day = 1] = arr;

// console.log(year);
// console.log(month);
// console.log(day);

// let arr = ['Jhon', 'Smit', 'development', 'programmer'];
// let [name, lastName, department, position = 'trainee'] = arr;
// console.log(lastName);
// console.log(position);

// function func() {
// 	return (new Date).getDate();
// }
// let arr = [];
// let [year = 2022, month = 11, day = func()] = arr;

// console.log(year);
// console.log(month);
// console.log(day);

// let arr = [2025, 12, 31];
// let year;
// let month;
// let day;

// [year, month, day] = arr;


// let arr = [2025, 12, 31];
// let year;
// let [year, month, day] = arr;
// console.log(arr);

// let obj = {
// 	year: 2025,
// 	month: 12,
// 	day: 31,
// };
// let {year, month, day} = obj;
// console.log(year);
// console.log(month);
// console.log(day);

// let options = {
// 	color: 'red',
// 	width: 400,
// 	heigth: 500,
// };

// let {color, width, heigth} = options;
// console.log(color);
// console.log(width);
// console.log(heigth);

// let obj = {
// 	year: 2025,
// 	month: 12,
// 	day: 31,
// };

// let {year: y, month: m, day: d} = obj;
// console.log(y);
// console.log(m);
// console.log(d);

// let options = {
// 	color: 'red',
// 	width: 400,
// 	height: 500,
// };
//  let {color: c, width: w, height: h} = options;

// console.log(c);
// console.log(w);
// console.log(h);

// let obj = {
// 	month: 12,
// 	day: 31
// };
// let {year = 2025, month, day} = obj;

// console.log(year);
// console.log(month);
// console.log(day);

// let options = {
// 	width: 400,
// 	heigth: 500,
// };
// let {width, heigth, color = 'black'} = options;
// console.log(width);
// console.log(heigth);
// console.log(color);

// let obj = {
// 	month: 12,
// 	day: 31,
// };
// let {year: y = 2025, month, day} = obj;

// console.log(y);
// console.log(month);
// console.log(day);

// let options = {
// 	width: 400,
// 	height: 500,
// };

// let {width, height, color = 'black'} = options;
// console.log(color);
// console.log(height);
// console.log(width);

// let obj = {
// 	year: 2025,
// 	month: 12,
// 	day: 31,
// };
// let year, month, day;
// console.log(obj)

// func ('str1', [2025, 12, 31], 'str2');
// function func(param1, [year, month, day], param2) {
// 	console.log(param1);
// 	console.log(year);
// 	console.log(month);
// 	console.log(day);
// 	console.log(param2);
// }

// func ([2025, 12, 31], [2026, 11, 30]);
// function func([year1, month1, day1], [year2, month2, day2]) {
// 	console.log(year1);
// 	console.log(month1);
// 	console.log(day1);

// 	console.log(year2);
// 	console.log(month2);
// 	console.log(day2);
// }

// func (['Jhon', 'Smit', 'development', 'programmer', 2000]);
// function func([name, surname, department, position, salary]) {
// 	console.log(name);
// 	console.log(surname);
// 	console.log(department);
// 	console.log(position);
// 	console.log(salary);
// }

// function square(num) {
// 	return num ** 2;
// }
// function sum(num1, num2) {
// 	return num1 + num2;
// }
// let res = sum(square(2), square(3));
// console.log(res);

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function round(num) {
// 	return num.toFixed(3);
// }
// console.log(round(sqrt(2)));

// function sqrt(num) {
// 	return Math.sqrt(num);
// }
// function sum(num1, num2, num3) {
// 	return num1 + num2 + num3;
// }
// // let res = sqrt(sum(2, 3, 4));
// // console.log(res);

// function round(num) {
// 	return num.toFixed(3);
// }
// let res = round(sqrt(sum(2, 3, 4)));
// console.log(res);

// function func(num) {
// 	return num ** 2;
// 	console.log('!');
// }
// let res = func(3);

// function func(num) {
// 	if (num >= 0) {
// 		return '+';
// 	} else {
// 		return'-';
// 	}
// }
// console.log(func(3));
// console.log(func(-3));

// function func(num) {
// 	return num;
// 	let res = num ** 2;
// 	return res;
// }
// console.log(func(3));

// function func(num) {
// 	if (num <= 0) {
// 		return Math.abs(num);
// 	}
// 	return num ** 2;
// }
// console.log(func(10));
// console.log(func(-5));

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 	}
// 	return sum;
// }
// let res = func();
// console.log(res);

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// let res = func();
// console.log(res);

// function func() {
// 	let sum = 0;
// 	for (let i = 1; i <= 5; i++) {
// 		sum += i;
// 		return sum;
// 	}
// }
// let res = func();
// console.log(res);

// function func(num) {
// 	let sum = 0;
// 	for (let i = 1; i <= num; i++) {
// 		sum += i;

// 	}
// 	return sum;
// }
// console.log(func(5));

// function func(arr) {
// 	let sum = 0;
// 	for(let i = 0; i < arr.length; i++) {
// 		sum += arr[i];
// 		if(sum >= 10) {
// 			return i + 1;
// 		}
// 	}
// }
// let res = func([1,2,3,4,5]);
// console.log(res);

// function func() {
// 	let sum = 0;
// 	let i = 1;
// 	while(true) {
// 		sum += i;
// 		if (sum >= 100) {
// 			return i;
// 		}
// 		i++;
// 	}
// }
// console.log(func());

// function func(num) {
// 	let result = 0;
// 	let i = 1;
// 	while(true) {
// 		result = num / 2;
// 		if (result < 10) {
// 			return i;
// 		}
// 		i++;
// 	}

// }
// console.log(func(9));


// function func(num) {
// 	let res;
// 	if(num >= 0) {
// 		res = Math.sqrt(num);
// 	} else {
// 		res = 0;
// 	}
// 	return res;
// }
// console.log(func(3));

// function func(num) {
// 	if (num >= 0) {
// 		return Math.sqrt(num);
// 	} else {
// 		return 0;
// 	}
// }
// console.log(func(3));

// function func(num1, num2) {
// 	if(num1 > 0 && num2 > 0) {
// 		return num1 * num2;
// 	} else {
// 		return num1 - num2;
// 	}
// }
// console.log(func(3, 4));

// function isPositive(arr) {
// 	let flag = true;
// 	for(let elem of arr) {
// 		if (elem < 0) {
// 			flag = false;		}
// 	}
// 	return flag;
// }
// console.log(isPositive([2, 4, -5, 7, 9]));

// function isPositive(arr) {
// 	for (let elem of arr) {
// 		if (elem < 0) {
// 			return false;
// 		}
// 	}
// 	return true;
// }
// console.log(isPositive([2, 5, 6, 8, 1]));

// function isEven(arr) {
// for (let elem of arr) {
// 	if (elem % 2 === 0) {
// 		return 'Even';
// 	}
// 	return 'Odd';
// }
// }
// console.log(isEven([3, 5, 6, 7, 1, 3, 0]));

// function isOdd(arr) {
// 	for (let elem of arr) {
// 		if (elem % 2 != 0) {
// 			return 'Odd'
// 		}
// 		return 'Even'
// 	}
// }
// console.log(isOdd([3, 5, 7, 2, 0]));

// function func(arr) {
// 	let res;

// 	for(let i = 0; i < arr.length; i++) {

// 		if (arr[i] == arr[i+1]) {
// 			return 'Yes it is'
// 		} else {
// 			res = 'No it is not'
// 		}
// 	} return res;
// }
// console.log(func([6, 3, 6, 8, 3, 5, 3,4,  4, 9, 8]))

// function func(a, b) {
// 	if (a > b) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }
// console.log(func(7, 6));

// function func(a, b) {
// 	return a > b;
// }
// console.log(func(0, 1));

// function func(a,b) {
// 	return a == b;
// }
// console.log(func(3, 3));

// function func(num) {
// 	return num >= 0;
// } console.log(func(7));

// function func1(num) {
// 	return num;
// }
// function func2(num1) {
// 	return num1;
// }

// console.log(func1(3) + func2(5));

// function func(a, b) {
// 	return a == b;
// }
// console.log(func(3, 4));

// function func(a, b) {
// 	return (a != b)
// 	}
// 	console.log(func(3, 5));

// function func(a, b) {
// 	return (a + b >= 10);
// }
// console.log(func(6, 9));

// function func(num) {
// 	return (num >= 0);
// }
// console.log(func(6));

// function Mid(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res / arr.length;
// }
// console.log(Mid([1, 4, 7, 9, 56]));









// let num = +prompt('enter numbers beetween 0 - 999');
// if (num > 0 && num <= 999) {
// 	let a = StringNum(num);
// 	console.log('your number: ' + num + ' - ' + a);
// } else {
// 	console.log('wrong number');
// };
// function StringNum(num) {
// 		 let once = ['one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eigth', 'nine'];
// 		 let tens = ['eleven', 'twelve', 'thirteen', 'fourteen', 'fithteen', 'sixteen', 'seventeen', 'eigthteen', 'nineteen'];
// 		 let hundreds = ['ten', 'twenty', 'thirty', 'fourty', 'fifty', 'sixty', 'seventy', 'eigthy', 'ninety'];
// 		 let thousand = ['one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eigth hundred', 'nine hundred']
// 		let first = Math.trunc(num / 100);
// 		let second = Math.trunc(num / 10 % 10);
// 		let third = Math.trunc(num % 10);

// 		if(num > 10 && num < 20) {
// 			return tens[num - 11];
// 		}
// 		if(first == 0 && second == 0) {
// 			return once[third -1];
// 		}
// 		if(first == 0 && third == 0) {
// 			return hundreds[second -1];
// 		}
// 		if(second == 0 && third == 0) {

// 			return thousand[first -1];
// 		}

// 		if(second == 0) {
// 			return thousand[first -1] + ' ' + once[third -1] ;
// 		}
// 		if(first == 0) {
// 			return hundreds[second -1] + ' ' + once[third - 1] ;
// 		}
// 		if(third == 0) {
// 			return thousand[first -1] + ' ' + hundreds[second -1];
// 		}

// 			return thousand[first -1] + ' ' + hundreds[second -1] + ' ' + once[third -1];
// };


// function translate(str) {
// 	let result = '';
// 	let converter = {
// 		'а': 'a',    'б': 'b',    'в': 'v',    'г': 'g',    'д': 'd',
// 		'е': 'e',    'ё': 'e',    'ж': 'zh',   'з': 'z',    'и': 'i',
// 		'й': 'y',    'к': 'k',    'л': 'l',    'м': 'm',    'н': 'n',
// 		'о': 'o',    'п': 'p',    'р': 'r',    'с': 's',    'т': 't',
// 		'у': 'u',    'ф': 'f',    'х': 'h',    'ц': 'c',    'ч': 'ch',
// 		'ш': 'sh',   'щ': 'sch',  'ь': '',     'ы': 'y',    'ъ': '',
// 		'э': 'e',    'ю': 'yu',   'я': 'ya',

// 		'А': 'A',    'Б': 'B',    'В': 'V',    'Г': 'G',    'Д': 'D',
// 		'Е': 'E',    'Ё': 'E',    'Ж': 'Zh',   'З': 'Z',    'И': 'I',
// 		'Й': 'Y',    'К': 'K',    'Л': 'L',    'М': 'M',    'Н': 'N',
// 		'О': 'O',    'П': 'P',    'Р': 'R',    'С': 'S',    'Т': 'T',
// 		'У': 'U',    'Ф': 'F',    'Х': 'H',    'Ц': 'C',    'Ч': 'Ch',
// 		'Ш': 'Sh',   'Щ': 'Sch',  'Ь': '',     'Ы': 'Y',    'Ъ': '',
// 		'Э': 'E',    'Ю': 'Yu',   'Я': 'Ya'
// 	};
// 	for (let i = 0; i < str.length; i++) {
// 		if (converter[str[i]] == undefined) {
// 			result += str[i];
// 		} else {
// 			result += converter[str[i]];
// 		}
// 	} return result;
// }
// console.log(translate('Сделайте функцию, которая будет принимать строку на русском языке, а возвращать ее транслит'));

// "use strict"
// let arr = [12, 13, 4, 5, 6, 7];
// alert(arr);

// let arr = ['papa', 'mama', 'deti'];
// alert(arr);
// console.log(arr);

// let arr = [1, 2, 3];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = [1, 2, 3];
// alert(arr[0] + arr[1] + arr[2]);

// let arr = ['a', 'b', 'c', 'd'];
// alert(arr[0] + arr[1] + arr[2] + arr[3]);

// let arr = [1, 3, 5, 7, 9, 'aga'];
// alert(arr.length);

// let arr = [1, 3, 5, 7, 9, 'aga'];
// alert(arr[arr.length-1]);

// let arr = ['hi', 'world'];
// alert(arr[0] + ' ' + arr[1]);

// let arr = ['hi', 'world', '!'];
// let text = arr[0] + ', ' + arr[1] +  arr[2];
// alert(text)

// let arr = ['hi', 'world', '!'];
// arr[0] = 'bye';
// alert(arr[0] + ' ' + arr[1] + arr[2]);

// let arr = [1, 2, 3, 4, 5];
// let arr1 = [];
// arr1[0] = 1;
// arr1[1] = 2;
// arr1[2] = 3;
// arr1[3] = 4;
// arr1[4] = 5;
// alert(arr);
// alert('------');
// alert(arr1);

// let arr = ['a', 'b', 'c'];
// alert(arr);

// let arr = ['a', 'b', 'c'];
// alert(arr[0]);
// alert(arr[1]);
// alert(arr[2]);

// let arr = ['a', 'b', 'c', 'd']
// alert(arr[0] + arr[1]);
// alert(arr[2] + arr[3]);

// let arr = [2, 5, 3, 9];
// let result = arr[0] * arr[1];
// let result1 = arr[2] * arr[3];
// let result2 = result + result1;
// alert(result2);

// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

// let arr = [1, 2, 3];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// alert(arr);

// let arr = [1, 2, 3];
// ++arr[0];
// ++arr[1];
// ++arr[2];
// alert(arr);

// let arr = [];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// alert(arr);

// let arr = ['hi', 2, 'bye', 7];
// alert(arr.length);

// let arr = ['hi', 2, 'bye', 7];
// alert(arr[arr.length-1]);

// let arr = ['a', 'b', 'c'];
// arr[0] = 1;
// arr[1] = 2;
// arr[2] = 3;
// alert(arr);

// let arr = ['new', 'arr', 'is', 'ready'];
// arr[arr.length] = 3;
// alert(arr); //to add new

// let arr = [2, 4, 6, 8, 10];
// arr[0] += 3;
// arr[1] += 3;
// arr[2] += 3;
// arr[3] = arr[3] + 3;
// arr[4] += 3;
// alert(arr);

// let arr = [2, 3, 4, 5];
// ++arr[0];
// ++arr[1];
// ++arr[2];
// ++arr[3];
// alert(arr);

// let arr = [];
// arr[0] = 'a';
// arr[1] = 'b';
// arr[2] = 'c';
// alert(arr);

// let arr = [1, 2, 3];
// arr[3] = 4;
// arr[4] = 5;
// alert(arr);

// let arr = [];
// arr[3] = 'a';
// arr[8] = 'b';
// alert(arr.length);

// let arr = [];
// arr.push(1);
// arr.push(2);
// arr.push(3);
// alert(arr);

// let arr = [1, 2, 3];
// arr.push(4);
// arr.push(5);

// let arr = ['a', 'b', 'c'];
// let key = 2;
// alert(arr[key]);

// let arr = [1, 2, 3, 4, 5];
// let key1 = 1;
// let key2 = 2;
// let newKey = arr[key1] + arr[key2];
// alert(newKey);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// delete arr[0];
// delete arr[3];
// alert(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[arr.length -1]);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr[0] + arr[1] + arr[2] + arr[3] + arr[4]);

// let arr = [1, 2, 3, 4, 5];
//  console.log(arr.length);

// let arr = [1, 2, 3, 4, 5, 6];
// console.log(arr.length);

// function func(){
// 	let num = 0;
// 	return function(){
// 		console.log(num);
// 		num++;
// 	};
// };
// func()();
// func()();
// func()();

// function func(){
// 	let num = 0;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// let test = func;
// console.log(test);
// console.log(func);
// test()();
// test()();
// test()();

// let counter = 0;
// function test(){
// 	return function (){
// 		console.log(counter);
// 		counter++;
// 	};
// };
// let func = test;
// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// function test(){
// 	let counter = 0;
// 	return function(){
// 		return function(){
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test()();
// let func1 = func;
// let func2 = func;
// func1();
// func2();
// func1();
// func2();

// function test(){
// 	let counter = 0;
// 	return function (){
// 		return function (){
// 			console.log(counter);
// 			counter++;
// 		};
// 	};
// };
// let func = test();

// let func1 = func();
// let func2 = func();
// func1();
// func2();
// func1();
// func2();

// !function(){
// 	console.log('!');
// }();

// let result = function() {
// 	return '!';
// }();
// console.log(result);

// let result = function() {
// 	return '!';
// };
// console.log(result());

// let result = function() {return 1;}() + function() {return 2;}();
// console.log(result);

// let result = (function() {
// 	return '!';
// }());
// console.log(result);

// (function(str) {
// 	console.log(str);
// })('!!!');

// (function (num1, num2) {
// 	console.log(num1 + num2);
// }) (1 ,2);

// (function(){
// return function(){
// alert('!');
// };
// })()();

// (function(num1){
// return function (num2) {
// 	return console.log(num1 + num2);
// };
// })(1)(2);

// (function(num1){
// 	return function (num2){
// 		return function (num3){
// 			return console.log(num1 + num2 + num3);
// 		};
// 	};
// })(1)(2)(3);

// let result = 1
// +function() {
// 	return 2;
// }();
// console.log(result);

// let result = 1;
// + function(){
// 	return 2;
// }();
// console.log(result);

// let str = 'str';
// (function() {
// 	console.log(1);
// })();

// let func = (function (){
// 	let num = 1;
// 	return function(){
// 		console.log(num);
// 		num++
// 	}
// })();
// func();
// func();


// let func = (function (){
// 	let num = 1;
// 	return function(){
// 		console.log(num);
// 		if(num >= 5){
// 			num = 0;
// 		} else {
// 			num++
// 		}
// 	}
// })();
// func();
// func();
// func();
// func();
// func();
// func();

// function test() {
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// let func1 = test();
// func1();
// func1();

// let func2 = test();
// func2();
// func2();


// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 2;
// });
// console.log(result);

// let result = each([1, 2, 3, 4, 5], function(num) {
// 	return num ** 3;
// });
// console.log(result);

// let result = each([1, 3, 5, 6, 4, 3], function(num) {
// 	return num * 2;
// 	});
// 	console.log(result);

// let result1 = each(['are', 'not', 'nice'], function(str) {
// 	return str.split('').reverse().join('');
// });
// console.log(result1);

// let result1 = each(['it', 'is', 'so', 'good'], function (str) {
// 	return str[0].toUpperCase() + str.slice(1);
// })
// console.log(result1);

// function square(num) {
// 	return num * num;
// }

// let result = each([1, 2, 3, 4, 5], square);
// console.log(result);

// function each(arr, callback) {
// 	let result = [];
// 	for (let elem of arr) {
// 		result.push(callback(elem));
// 	}
// 	return result;
// }

// let result = each([2, 4, 6, 8, 5, 6, 45, 87], cube)

// function cube(num) {
// 	return num ** 3;
// }
// console.log(result);

// let func1 = function(num1, num2) {
// 	let result = num1 * num2;
// 	return result;
// }

// let func2 = (num1, num2) => {
// 	let result = num1 * num2;
// 	return result;
// }

// let func1 = function (num1, num2) {
// 	return num1 * num2
// }

// let func2 = (num1, num2) => num1 * num2;

// let func1 = function(num) {
// 	return num * num;
// }

// let func2 = num => num * num;

// let func1 = function() {
// 	console.log('!!!');
// }

// let func2 = () => console.log('!!!');
// func2();

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	if(elem % 2 === 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });

// let result = filter([1, 2, 3, 4, 5], function(elem) {
// 	return elem % 2 == 0;
// });

// let result = filter([1, 2, 3, 4, 5], elem => elem % 2 == 0);

// function func(arr) {
// 	console.log(arr.shift());
// 	console.log(arr);
// 	console.log(arr.shift());
// 	console.log(arr);
// 	console.log(arr.shift());
// 	console.log(arr);
// }
// func([1, 2, 3]);

// function func(arr) {
// 	console.log(arr.shift(), arr);
// 	if (arr.length != 0) {
// 		func(arr);
// 	}
// }
// func([1, 2, 3]);

// let arr = [1, 2, 3, 4, 5];
// function func() {
// 	console.log(arr.shift());
// 	if (arr.length != 0) {
// 		func();
// 	}
// }
// func()

// function getSum(arr) {
// 	let sum = arr.shift();
// 	if(arr.length !== 0) {
// 		sum += getSum(arr);
// 	}
// 	return sum;
// }
// console.log(getSum([1, 2, 3]))
// ;

// let arr = [1, 2, 3, 4, 5];
// function getSum() {
// let sum = arr.shift();
// if(arr.length !== 0){
// 	sum += getSum();
// }
// return sum;
// }
// console.log(getSum());


// let arr = [
// 	1,
// 	[
// 		2, 7, 8
// 	],
// 	[
// 		3, 4, [5, [6, 7]]
// 	]
// 	];
// function func(arr) {
// 	for (let elem of arr) {
// 		console.log(elem);
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

//1
//[]
//[]

// function func(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			func(elem);
// 		} else {
// 			console.log(elem);
// 		}
// 	}
// }
// func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]);

// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {1: 7, m: {n: 8, o: 9}}}};
// function allOne(obj) {
// 	for (let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			allOne(obj[elem]);
// 		} else {
// 			console.log(obj[elem]);
// 		}
// 	}
// }
// allOne({a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {1: 7, m: {n: 8, o: 9}}}});

// let arr = [1, [2, 7, 8], [3, 4, [5, [6, 7]]]];
// let sum = [];
// function allOne (arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			allOne(elem);
// 		} else {
// 			sum.push(elem);
// 		}
// 	}
// }
// allOne(arr);
// console.log(sum);

// function func(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			sum += func(elem);
// 		} else {
// 			sum += elem;
// 		}
// 	}
// 	return sum;
// }
// console.log(func([1, [2, 7, 8], [3, 4, [5, [6, 7]]]]));


// let obj = {a: 1, b: {c: 2, d: 3, e: 4}, f: {g: 5, j: 6, k: {l: 7, m: {n: 8, o: 9}}}};
// function allOne(obj) {
// 	let sum = 0;
// 	for(let elem in obj) {
// 		if (typeof obj[elem] == 'object') {
// 			sum += allOne(obj[elem])
// 		} else {
// 			sum += obj[elem];
// 		}
// 	}
// 	return sum;
// }
// console.log(allOne(obj));

// let arr = ['a', ['b', 'c', 'd'], ['e', 'f', ['g', ['j', 'k']]]];
// function allOne(arr) {
// 	let str = '';
// 	for (let elem of arr) {
// 		if (typeof arr == 'object') {
// 			str += allOne(elem);
// 		} else {
// 			str += elem;
// 		}
// 	}
// 	return str;
// }
// console.log(allOne(arr));

// function func (arr) {
// 	for (let i = 0; i < arr.length; i++) {
// 		if (typeof arr[i] == 'object') {
// 			arr[i] = func(arr[i]);
// 		} else {
// 			arr[i] = arr[i] + '!'
// 		}
// 	}
// 	return arr;
// }
// console.log([1, [2, 7, 8], [3, 4, [5, 6]]]);

// let arr = [1, [2, 7, 8], [3, 4], [5, [6, 7]]];
// function Cube(arr) {
// 	for (let elem of arr) {
// 		if (typeof elem == 'object') {
// 			Cube(elem)
// 		} else {
// 			console.log(elem);
// 			arr[elem] = elem ** 2
// 		}
// 	}
// }
// Cube(arr);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(elem) {
// 	console.log(elem);
// });

// let arr = [1, 2, 3, 4, 5];
// let result = arr.map(function(elem) {
// 	return elem * elem;
// });
// console.log(result);

// let arr = [3, 4, 5, 6, 7, 8];
// let result = arr.map(function(elem) {
// 	return Math.sqrt(elem);
// });
// console.log(result);

// let arr = ['Akiljan', 'Sabak', 'Uiretip', 'Jatyr'];
// let result = arr.map(function(elem) {
// 	return elem + '!'
// })
// console.log(result);

// let arr = ['Igor', 'Sabak', 'Uirenip', 'Jatyr'];
// let result = arr.map(function(elem) {
// 	return elem.split('').reverse().join('');
// })
// console.log(result);

// let arr = ['123', '456', '789'];
// let result = arr.map(function(elem) {
// 	return elem.split('').map(function(elem) {
// 		return Number(elem);
// 	})
// });
// console.log(result);


// let arr = ['123', '456', '789'];
// let result = arr.map(elem => elem.split('').map(Number));
// console.log(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let result = arr.map(function(elem, index) {
// 	return elem + index;
// });
// console.log(result);

// let arr = [2, 3, 4, 5, 6];
// let result = arr.map(function(elem, index) {
// 	return elem * index;
// })
// console.log(result);

// let arr = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
// let result = arr.map(function(elem) {
// 	return elem.map(function(num) {
// 		return num * num;
// 	});
// });
// console.log(result);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem) {
// 	document.write(elem + '<br>');
// });

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.forEach(function(elem, index) {
// 	document.write(index + '.' + elem + '<br>');
// });

// let arr = [1, 2, 3, 4, 5];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem;
// });
// console.log(sum);

// let arr = [4, 5, 6, 7, 8];
// let sum = 0;
// arr.forEach(function(elem) {
// 	sum += elem ** 2;
// });
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function(elem) {
// 	if (elem % 2 == 0) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(function(elem) {
// 	return elem % 2 == 0;
// });
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.filter(elem => elem % 2 == 0);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.filter(elem => elem % 2 == 0));

// let arr = [-23, 45 ,67, -98, 2, 4];
// let result = arr.filter(function(elem) {
// 	if (elem > 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [1, -6, -7, -9, 0, 5, 8];
// let result = arr.filter(function(elem) {
// 	if (elem < 0) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [2, 4, 5, 78, 565, 34, 234, -98, -45, -4, 23];
// let result = arr.filter(function(elem) {
// 	if (elem > 0 && elem < 10) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = ['Akiljan', 'aga', 'magan', 'kunde', 'sabak', 'beredi'];
// let result = arr.filter(function(elem) {
// 	if (elem.length >= 5) {
// 		return elem;
// 	}
// });
// console.log(result);

// let arr = [4, 7, 43, 56, 987, -9, -1, 6];
// let result = arr.filter(function(elem, index) {
// 	if (elem * index < 30) {
// 		return elem;
// 	}
// });
// console.log(result);

// "use strict"
// let obj = {1: 'a', 2: 'b', 3: 'c'};
// console.log(obj[3]);

// let week = {1: 'Monday',
//             2: 'Tuesday',
//             3: 'Wednesday',
//             4: 'Thursday',
//             5: 'Friday',
//             6: 'Saturday',
//             7: 'Sunday'}
// console.log(week);

// let year = {1: 'January',
//             2: 'February',
//             3: 'March',
//             4: 'April',
//             5: 'May',
//             6: 'June',
//             7: 'July',
//             8: 'August',
//             9: 'September',
//             10: 'October',
//             11: 'November',
//             12: 'December'}
// console.log(year);

// let obj = {'a': 1, 'b': 2, 'c': 3};

// let obj1 = {a: 1, b: 2, c: 3};
// console.log(obj1['a']);
// console.log(obj['a']);

// let obj = {a: 1, b: 2, c: 3};
// console.log(obj.a);

// let user = {name: 'Iggi', surname: 'Pop', patronymic: 'Music'}
// console.log(user.surname + ' ' + user.name + ' ' + user.patronymic);

// let date = {year: 2022, month: 8, day: 18}
// console.log(date['year'] + '-' + date['month'] + '-' + date['day']);

// let obj = {
// 	'1a': 1,
// 	b2: 2,
// 	'c-c': 3,
// 	'd 4': 4,
// 	e5: 5
// }
// console.log(obj);

// let obj = {
// '1a': 1,
// b2: 2,
// 'c-c': 3,
// 'd 4': 4,
// e5: 5
// }

// console.log(obj['1a']);
// console.log(obj.b2);
// console.log(obj['c-c']);
// console.log(obj['d 4']);
// console.log(obj['e5']);

// let obj = {x: 1, y: 2, z: 3};
// obj['x'] = obj['x'] ** 2;
// obj['y'] = obj['y'] ** 2;
// obj['z'] = obj['z'] ** 2;
// console.log(obj);

// let obj = {K: 1000, V: 500, P: 200};
// console.log(obj.K);
// console.log(obj.P);

// let obj = {a: 1, b: 2, c: 150};
// console.log(obj.c);

// let obj = {};
// obj.a = 1;
// obj.b = 2;
// obj.c = 134;
// console.log(obj);

// let obj = {7: 'a', 8: 'g', 9: 'p'};
// console.log(obj);
// obj = {9: 'g', 8: 'a', 7: 'p'};
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3};
// let keys = Object.keys(obj);
// console.log(keys);

// let obj = {x: 1, y: 2, z: 3};
// let keys = Object.keys(obj);
// console.log(keys);

// let obj = {a: 1, b: 2, c: 3};
// console.log(Object.keys(obj).length);

// let obj = {x: 1, y: 2, z: 3};
// console.log(Object.keys(obj).length);

// let obj = {a: 1, b: 2, c: 3};
// let key = 'a';

// console.log(obj[key]); // выведет 1

// let obj = {x: 1, y: 2, z: 3};
// let key = 'y';
// console.log(obj[key]);

// let obj = {x: 1, y: 2, z: 3};
// console.log(obj['x']);

// let obj = {x: 1, y: 2, z: 3};
// let key = 'x';
// console.log(obj[key]);

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

// let obj = {x: 1, y: 2, z: 3};
// let prop = 'x';
// console.log(obj[prop]);

/*
 let str='Happy new Year!';
 // Yppah wen Raey!
 function rev(str){
 	let sent =[];
 	let word ='';
 	for(let i =0; i< str.length; i++){
 		if(str[i] === ' ' || i=== str.length-1){
 			sent[i]=word
 		}else{
 			word+=str[i];
 		}
 	}
 	return sent;

 }

 console.log(rev(str));


*/

// let str='Happy new Year!';
// let arr=[];
// let first= '';

// for(let i=0; i< str.length; i++){
// 	if(str[i]!= ' ' && i != str.length-1){
// 		first+= str[i];

// 	} else{
// 		arr.push(first);
// 		first="";
// 	}

// }
// console.log(arr);
// let word=arr[0];

// let newStr= word[0].toLowerCase(0)+ word.slice(1, word.length-1)+ String(word[word.length-1]).toUpperCase();


// let str2='';
// for(let i=newStr.length-1; i>=0; i--){
// 	if(newStr[i]==newStr[4] || newStr[i] ==newStr[13]){
// 		str2+=newStr[i].toUpperCase();
// 	} else if(newStr[i]==newStr[i].toUpperCase()){
// 		str2+=newStr[i].toLowerCase();
// 	}else{
// 		str2+= newStr[i];
// 	}

// }
// console.log(str2);



// console.log(newStr);

// function test() {
// 	let num = 1;

// 	function func() {
// 		console.log(num);
// 	}
// 	func();
// }
// test();

// function test() {
// 	let num;

// 	function func(){
// 		console.log(num);
// 	}
// 	num = 1;
// 	func();
// 	num = 2;
// 	func();
// }
// test();

// function test(num1, num2) {
// 	function func(){
// 		console.log(num1 + num2);
// 	}
// 	num1 = 2;
// 	func();
// }
// test(1,2);

// function test(num){//num=1

// 	function func(localNum) {//localNum=1
// 		//let localNum=1
// 		console.log(localNum);
// 	}
// 	func(num);//1
// }
// test(1);//func(num)

// function test(num) {//1
// 	function func(localNum) {//2
// 		console.log(num);//1
// 	}
// 	func(num + 1);//2
// }
// test(1);//1

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

// function test(num) {
// 	function func(localNum) {
// 		localNum = 2;
// 	}
// 	func(num);
// 	console.log(localNum);
// }
// test(1);

// function test(num) {
// 	function func(num){
// 		num = 2;
// 	}
// 	func(num);
// 	console.log(num);
// }
// test(1);

// function func1() {
// 	return function() {
// 		return 1
// 	}
// }
// function func2() {
// 	return function(){
// 		return 2
// 	}
// }
// console.log(func1()());
// console.log(func2()());
// console.log(func1()() + func2()());

// function func() {
// 	return function() {
// 		return function(){
// 			return'!';
// 		};
// 	};
// }
// console.log(func()()());

// function func() {
// 	return function(){
// 		return function(){
// 			return function(){
// 				return function(){
// 					return '???';
// 				};
// 			};
// 		};
// 	};
// }
// console.log(func()()()()());

// function func(num1) {
// 	return function(num2){
// 		return function(num3){
// 		return num1 + num2 + num3;
// 		}
// 	}
// }
// console.log(func(2)(3)(4));

// function func(num1){
// 	return function(num2){
// 		return function(num3){
// 			return function(num4){
// 				return function(){
// 					return num1 + num2 + num3 + num4;
// 				};

// 			};
// 		};
// 	};
// }
// console.log(func(2)(3)(4)(5)());

// let num = 1;
// function func() {
// 	console.log(num);
// }
// func();

// function func() {
// 	console.log(num);
// }
// let num = 1;
// func();


// let num = 1;
// function func() {
// 	console.log(num);
// }
// num = 2;
// func();

// let num1 = 1;
// let num2 = 2;

// num1 = 123;
// function func() {
// console.log(func(num1));
// }
// func();

// function test() {
// 	let num = 1;
// return function() {

// }
// }

// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 	}
// }
// test()();

// function test() {
// 	let num = 1;
// 	return function() {
// 		console.log(num);
// 	}
// }
// let func = test();
// func();

// function test() {
// 	return function() {
// 		console.log(num);
// 	}
// }
// let num = 1;
// let func = test();
// func();

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;

// 	return function() {
// 		return num1 + num2;
// 	}
// }
// let func = test();
// console.log(func());

// function test() {
// 	let num1 = 1;
// 	let num2 = 2;
// 	return function() {
// 		return num1 + num2;
// 	}
// }
// console.log(test()());

// function test () {
// 	let num1 = 1;
// 	return function (){
// 		return num1 + num2;
// 	}
// }
// let num2 = 2;
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
// 	return function() {
// 		return num;
// 	}
// }
// let num = 2;
// let func = test();
// console.log(func());

// function test() {
// 	let num = 1;
// 	return function () {
// 		console.log(num);
// 	}
// }
// let func = test();
// func();

// function test() {
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	}
// }
// let func = test();
// func();
// func();
// func();

// function test() {
// 	let num = 1;
// 	return function () {
// 		console.log(num);
// 		num++;
// 	};
// };
// let func1 = test();
// func1();
// func1();
// let func2 = test();
// func2();
// func2();

// function test(){
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	}
// }
// let func = test();
// func();

// function test(){
// 	let num = 10;
// 	return function (){
// 		console.log(num);
// 		num--
// 	}
// }
// let func = test();
// func();
// func();
// func();

// function test(){
// 	let num = 10;
// 	return function(){
// 		if (num > 0) {
// 			console.log(num);
// 		} else {
// 			console.log('over');

// 		}
// 		num--;
// 	}
// }
// let func = test();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();
// func();


// function test(){
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// test()();//1
// test()();//1

// function test(){
// 	let num = 1;
// 	return function (){
// 		console.log(num);
// 		num++;
// 	};
// };
// let func1 = test();
// func1();//1
// let func2 = test();
// func2();//1

// function relationOfArr(arr1, arr2) {
// 	let res1 = 0;
// 	for (let elem of arr1) {
// 		res1 += elem;
// 	}
// 	let res2 = 0;
// 	for (let elem of arr2) {
// 		res2 += elem;
//  	}
//  	return res1 / res2;
// }
// console.log(relationOfArr([2, 4, 6, 8, 10], [3, 5, 7, 11]));

// function getMultiple(arr) {
// 	let res = 1;
// 	for (let elem of arr) {
// 		res *= elem;
// 	}
// 	return res;
// }
// console.log(getMultiple([2, 4, 6, 8, 12, 14]));

// function sum(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	} return res;
// }
// console.log(sum([1, 2, 3, 4, 5]));

// let arr = [1, 2, 3, 4, 5];
// function func(arr) {
// 	let res = 0;
// 	for (let elem of arr) {
// 		res += elem;
// 	} return res;

// } console.log(func(arr));

// function func1() {
// 	return 3;
// }
// function func2() {
// 	return 5;
// }
// console.log(func1() + func2());


// function sum(arr) {
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += elem;
// 	}
// 	return sum;
// }
// let sum1 = sum([1, 2, 3, 4, 5]);
// console.log(sum1);


// function sum(arr) {
// 	let sum = 0;
// 	for(let elem of arr) {
// 		sum += elem;
// 	} return sum;
// }
// let res = sum([1, 2, 3, 4, 5]);
// console.log(res);


// function add(num) {
// 	if (num <= 9) {
// 		return '0' + num;
// 	}
// } console.log(add(6))

// function sum(arr) {
// 	let res = 0;

// 	for (let elem of arr) {
// 		res += elem;
// 	}
// 	return res;
// }
// let arr = [1, 2, 3, 4, 5];
// let sum1 = sum(arr);
// console.log(sum1);

// let num = 12345;


// function getDigitsSum(num) {
// 	let arr = String(num).split('');
// 	let sum = 0;
// 	for (let elem of arr) {
// 		sum += +elem;
// 	}
// 	return sum;
// }

// let res = getDigitsSum(num);
// console.log(res);


// function isPrime(num) {
// 	for (let i = 2; i < num; i++) {
// 		if (num % i !== 0) {
// 			return true;
// 		} else {
// 			return false;
// 		}
// 	}
// } console.log(isPrime(13));


// let sum = 0;
// function plus(arr) {
// 	for (let elem of arr) {
// 		sum += elem;
// 	} return sum;
// }
// console.log(plus([1, 3, 54, 6, 8]));

// function divide(num) {
// 	let arr = [];
// 	for (let i = 1; i <= num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i);
// 		}
// 	}
// 	return arr;
// }
// console.log(divide(9));

// function func(str) {
// 	let arr = [];
// 	for (let i = 0; i < str.length; i++) {
// 	arr.push(str[i]);
// 	} return arr;
// }
// console.log(func('Akiljan'));

// function func(str) {
// 	let arr = [];
// 	for (let i = 0; i < str.length; i ++) {
// 		arr.push(str[i]);
// 	} return arr.reverse();
// }
// console.log(func('Akiljan'));

// function func(str) {
// 	let result = str.slice(0, 1).toUpperCase() + str.slice(1);
// 	return result;
// }
// console.log(func('nelly ville'));

// function func(str) {
// 	let words = str.split(' ');
// 	for (let i = 0; i < words.length; i++) {
// 		words[i] = words[i].slice(0, 1).toUpperCase() + words[i].slice(1);
// 	}
// 	let result = words.join(' ');
// 	return result;
// }
// console.log(func('nelly ville'));

// function numbers(num) {
// 	let arr = [];
// 	for (let i = 1; i <= num; i++) {
// 		arr.push(i)
// 	} return arr;
// }
// console.log(numbers(9));

// function func() {
// 	let arr = [2, 4, 6, 7, 8, 1, 4, 0];
// 	return arr[Math.round(Math.random() * (arr.length -1))];
// }
// console.log(func());

// function simplenum(num) {
// 	if (num > 1) {
// 		let sum = 0;

// 		for (let i = 1; i <= num; i++) {
// 			if (num % i == 0) {
// 				sum++;
// 			}
// 		}
// 		if (sum > 2) {
// 			return 'not a simple';
// 		} else {
// 			return 'simple';
// 		}
// 	} else {
// 		return 'not a correct number';
// 	}
// }
// let number = (Math.round(Math.random() * 100 + 1));
// console.log(number + ' - ' + simplenum(number));

// function isFriendly(num1, num2) {
// 	let sum1 = getSum(getOwnDivisors(num1))
// 	let sum2 = getSum(getOwnDivisors(num2))
// 	if (sum1 == num2 && sum2 == num1) {
// 		return true;
// 	} else {
// 		return false;
// 	}
// }

// console.log(isFriendly(220, 284));

// function getOwnDivisors(num) {
// 	let result = [];
// for (let i = 1; i < num; i++) {
// 	if (num % i == 0) {
// 		result.push(i);
// 	}
// } return result;
// }

// function getSum(num) {
// 	let sum = 0;
// 	for (let elem of num) {
// 		sum += elem;
// 	} return sum;
// }


// function isFriendly(num1, num2) {
// let sum1 = getSum(getOwnDivisors(num1))
// let sum2 = getSum(getOwnDivisors(num2))

// if (sum1 == num2 && sum2 == num1) {
// return true
// } else {
// return false
// }
// }

// function getOwnDivisors(num) {
// let arr = []
// for (let i = 1; i < num ; i++) {
// if (num % i == 0) {
// arr.push(i)
// }
// }
// return arr
// }

// function getSum(arr) {
// let sum = 0
// for (let arrElement of arr) {
// sum += arrElement
// }
// return sum
// }

// function getFriendly(numb1, numb2) {
// let arr = []
// for (let i = numb1; i < numb2; i++) {
// for (let j = i + 1 ; j < numb2; j++) {
// if (isFriendly(i, j)) {
// arr.push([i,j])
// }
// }
// }
// return arr
// }

// console.log(getFriendly(1, 3000))

// function isPerfect (num) {
// 	let arr = [];
// 	for (let i = 0; i < num; i++) {
// 		if (num % i == 0) {
// 			arr.push(i);
// 		}
// 	} return arr;
// }
// console.log(isPerfect(28));

// function lucky () {
// 	let sum = 0;
// 	for (let i = 1; i <= 999999; i++) {
// 		let number1 = Math.trunc(i / 100000);
// 		let number2 = Math.trunc((i / 10000) % 10);
// 		let number3 = Math.trunc((i / 1000) % 10 % 10);
// 		let number4 = Math.trunc((i / 100) % 10 % 10 % 10);
// 		let number5 = Math.trunc((i / 10) % 10 % 10 % 10 % 10);
// 		let number6 = Math.trunc((i / 1) % 10 % 10 % 10 % 10 % 10);
// 		if (number1 + number2 + number3 == number4 + number5 + number6) {
// 			sum++
// 			console.log(i)
// 		}
// 	} return sum;
// }
// console.log(lucky());

// function getOwnDivisors(num) {
// 	let arr = []
// 	for (let i = 1; i < num ; i++) {
// 		if (num % i == 0) {
// 			arr.push(i)
// 		}
// 	}
// 	return arr
// }
// function commonDivisors(num1, num2) {
// 	let arr = [];
// 	let arr1 = getOwnDivisors(num1);
// 	let arr2 = getOwnDivisors(num2);
// 	for (let elem of arr1) {
// 		for (let elem1 of arr2) {
// 			if (elem == elem1) {
// 				arr.push(elem);
// 			}
// 		}
// 	}
// 	return arr;
// }
// console.log(commonDivisors(28, 24));

// "use strict"

// let a = '2';
// let b = '3';
// alert(Number(a) + Number(b)); // выведет '23'

// let a = Number('10');
// let b = Number('20');
// alert(a + b);

// let a = +'2';
// let b = +'3';
// alert(a + b);

// let a = parseInt('5px');
// let b = parseInt('6px');
// alert(a + b);

// let a = parseFloat('5.5px');
// let b = parseFloat('6.25px');
// alert(a + b);

// let a = 11.75 + 'px';
// alert(a);

// let a = parseFloat('5.5px');
// let b = parseFloat('6.25px');
// alert(a + b + 'px');

// let a = String(123);
// let b = String(321);
// alert(a + b);

// let sum = String(1234567);
// alert(sum.length);

// let a = String(7);
// let b = String(9);
// alert(a.length);
// alert(b.length);
// alert(a + b);

// "use strict"

// let str = 'abcde';
// alert(str[0]); // выведет 'a'
// alert(str[1]); // выведет 'b'
// alert(str[2]); // выведет 'c'

// let str = 'abcde';
// let num = 3; // номер символа в переменной
// alert(str[num]); // выведет 'd'

// let str = 'abcde';
// alert(str[0]);
// alert(str[2]);
// alert(str[4]);

// let str = 'abcde';
// let newStr = str[4] + str[3] + str[2] + str[1] + str[0];
// alert(newStr);

// let str = 'abcde';
// let num = 4;
// alert(str[num]);

// let str = 'abcde'; str[0] = '!';
// alert(str);

// let str = 'abcde';
// let last = str.length - 1;
// alert(str[last]);

// let name = 'Iggi';
// let last = name.length - 1;
// alert(name[last]);

// let city = 'Samei';
// let lastBefore = city.length - 2;
// alert(city[lastBefore]);

// let city = 'Aktau';
// let middle = city.length - 3;
// alert(city[middle]);

// let test = '12345';
// alert(test[0] + test[1]); // выведет '12' - суммирует как строки

// let test = '12345'; // строка
// alert(Number(test[0]) + Number(test[1])); // выведет 3

// let sum = '12345';
// alert(Number(sum[0]) + Number(sum[1]) + Number(sum[2]) + Number(sum[3]) + Number(sum[4]));

// let num = 12345;
// let newNum = String(num);
// let sum = Number(newNum[0]) + Number(newNum[1]) + Number(newNum[2]) + Number(newNum[3]) + Number(newNum[4]);
// alert(sum);

// let num = 12345;
// let newNum = String(num);
// let sum = Number(newNum[0]) * Number(newNum[1]) * Number(newNum[2]) * Number(newNum[3]) * Number(newNum[4]);
// alert(sum);

// let num = 12345;
// let NewOne = String(num);
// let reverse = NewOne[4] + NewOne[3] + NewOne[2] + NewOne[1] + NewOne[0];
// alert(Number(reverse));

// "use strict"

// for (let i = 0; i <= 100; i++) {
//     console.log (i);
// }


// for ( let i = 11; i <= 33; i++) {
//     console.log (i);
// }

// for (let i = 0; i <= 100; i+= 2) {
// console.log (i);
// }

// for (let i = 1; i <= 99; i += 2) {
//     console.log (i);
// }

// for (let i = 100; i >= 0; i--) {
//     console.log (i);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i of arr) {
//     console.log(i);
// }

// let obj = {z: 1, y: 2, x: 3};
// for (let i in obj) {
//     console.log(obj[i]);
// }

// let obj = {x: 1, y: 2, z: 3};
// for (let i in obj) {
//     console.log(i);
// }

// let num = 1;
// while (num <= 100) {
//     console.log(num)
//     num++
// }

// let num = 11;
// while (num <= 33) {
//     console.log(num)
//     num++
// }

// let num = 5;
// while (num <= 1000) {
//     console.log(num);
//     num *= 3;
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 1; i < arr.length - 1; i++) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = arr.length - 1; i >= 0; i--) {
//     console.log(arr[i]);
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
//     if (elem % 2 === 0) {
//         console.log(elem);
//     }
// }

// let arr = [2, 5, 9, 15, 1, 4];
// for (let elem of arr) {
//     if (elem > 3 && elem <10) {
//         console.log(elem);
//     }
// }

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// for (let elem in obj) {
//     if (obj[elem] % 2 != 0){
//         console.log(obj[elem]);
//     }
// }

// let res = 0;
// for (let i = 2; i <= 100; i++) {
//     if (i % 2 == 0) {
//         res = res + i;
//     }
// }
//     console.log(res);

// let res = 0;
// for (let i = 1; i <= 99; i++) {
//         if (i % 2 != 0) {
//             res = res + i;
//         }
// }
//     console.log(res);

// let res = 1;
// for (let i = 1; i <= 20; i++) {
// res = res * i;
// console.log(res);
// }

// let arr = [1, 2, 3, 4, 5];
// let res = 0;
// for (let elem of arr) {
//     res += elem;
// }
//  console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
//     res += elem;
// }
// console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
//     if (elem % 2 == 0) {
// res += elem
//     }
// }
//  console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 0;
// for (let elem of arr) {
//     res += elem ** 2;
// }
// console.log(res);

// let arr = [2, 5, 9, 3, 1, 4];
// let res = 1;
// for (let elem of arr) {
//     res *= elem;
// }
// console.log(res);

// let str = '';
// for (let i = 0; i < 5; i++) {
//     str += ' -';
// }
//  console.log(str);

// let str = '';
// for (let i = 1; i < 10; i++) {
//     str += i
// }
// console.log(str);

// let str = '';
// for (let i = 9; i > 0; i--) {
//     str += i
// }
// console.log(str);

// let str = '-';
// for (let i = 1; i < 10; i++) {
//     str += i + '-';
// }
// console.log(str);

// for (let i = 10; i < 1000; i++) {
//     let str = String(i);
//     console.log(str[0]);
// }

// for (let i = 10; i < 1000; i++) {
//     let str = String(i);
//     let sum = Number(str[0]) + Number(str[1]);
//     console.log(sum);
// }

// for (let i = 10; i < 1000; i++) {
//     let firstNumber = String(i);
//     if (firstNumber[0] === '1') {
//         console.log(firstNumber);
//     }

// }

// for (let i = 10; i < 1000; i++) {
//     let sum = String(i);
//     if (Number(sum[0]) + Number(sum[1]) === 5) {
//         console.log(sum);
//     }
// }

// let arr = [2, 3, 4, 0, 6, 8, 8, 0];
// for (let elem of arr) {
//     if (elem == 0) {
//         break;
//     } console.log(elem);
// }

// let sum = 0;
// let arr = [2, 5, 6, 7, 8, 9, -1];
// for (let elem of arr) {
//     if (elem < 0) {
//      break;

//     }
//     sum += elem;
// }
// console.log(sum);

// let arr = [5, 7, 9, 2, 1, 8, 6, 4, 3];
// for (let elem of arr) {
//     if (elem == 3) {
//         console.log(arr.indexOf(elem));
//         break;
//     }

// }

// let arr = [5, 7, 3, 9, 2, 1, 3, 8, 6, 4, 3];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] == 3) {
//         console.log(i);
//         break;
//     }
// }

// let i;
// let sum = 0;
// for (i = 1; i < 20; i++) {
//     sum += i;
//     if (sum > 100) {
//         break;
//     }
// }
// console.log(i);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// for (let elem of arr) {
//     let result;

//     if (elem % 2 === 0) {
//         result = elem * elem;

//     } else if (elem % 3 === 0) {
//         result = elem * elem * elem;

//     } else {
//         continue;

//     }console.log(result);
// }

// for (let i = 1; i <= 9; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i);
//     }
// }

// for (let i = 1; i <= 3; i++) {
//     for (let j = 1; j <= 3; j++) {
//         document.write(i + '' + j + ' ');
//     }
// }

// for (let i = 0; i <= 9; i++) {
//     for (let j = 0; j <= 9; j++) {
//         let num = 3;
//    console.log(num);  }

// }

// let arr = [];
// for (let i = 1; i <=10; i++) {
//     arr.push(i);
// }
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
//     arr.push('x');
// }
// console.log(arr);

// let arr = [1, 5, 6, 8, -1, -5, 8];
// let newArr = [];
// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] > 0) {
//         newArr.push (arr[i]);
//     }

// }
// console.log(newArr)


// let arr = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr.length; i ++) {
//     arr[i] = arr[i] ** 2;
// }
//  console.log(arr);

// let arr = [1, 2, 3, 4, 5];
//  for (let i = 0; i < arr.length; i++) {
//     arr[i]++;
//  }
//  console.log(arr);

// let arr = [1, 2, 3, 4, 6, 7, 8, 8, 9];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] ** 2;
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 6, 7, 9];
// for (let i = 0; i < arr.length; i++) {
//     arr[i] = arr[i] - 1
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = arr[i] + 10;
// }
// console.log(arr);

// let keys = ['a', 'b', 'c', 'd', 'e'];
// let values = [1, 2, 3, 4, 5];
// let obj = {};
// for (let i = 0; i <= 4; i++) {
//     // let key = keys[i];
//     // let value = values[i];
//     // obj[key] = value;
//     obj[keys[i]] = values[i];
// }
// console.log(obj);

// let arr1 = ['mo', 'tu', 'we', 'th', 'fr', 'sa', 'su'];
// let arr2 = [1, 2, 3, 4, 5, 6, 7];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
//     obj[arr2[i]] = arr1[i];
// }
// console.log(obj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
// for (let elem in obj) {
//     if (obj[elem] % 2 == 0) {
//         newObj[elem] = obj[elem];
//     }
// }
// console.log(newObj);

// let obj = {a: 1, b: 2, c: 3, d: 4, e: 5};
// let newObj = {};
// for (let elem in obj) {
//     newObj[obj[elem]] = elem;

// }
// console.log(newObj);

// let obj = {a: 1, b: 2, c :3};
// for (let key in obj) {
//     obj[key] = obj[key] * 2;
// }
// console.log(obj);


// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//     obj[key] = obj[key] * 2;
// }
// console.log(obj);

// let obj = {x: 1, y: 2, z: 3};
// for (let key in obj) {
//     obj[key] = obj[key] + 1
// } console.log(obj);

// let arr = [1, 2, 3, 4, 5, 3];
// let flag = false;
// for (let elem of arr) {
//     if (elem == 3) {
//         flag = true;
//         // console.log('+');
//         break;
//     // } else {
//     //     console.log('-');
//     }
// }
// if (flag === true) {
//     console.log('+');
// } else {
//     console.log('-');
// }

// let arr = ['a', 'b', 'c', 'd', 'e'];
// for (let elem of arr) {
//     if (elem == 'c') {
//         console.log ('+');
//         break
//     }
// }

// let arr = [2, 4, 25, 6, 8, 7, 12, 5, 1, 79, 65, 23, 17, 13, 37, 41, 43];
// for(let i = 0; i < arr.length; i++) {
// 	if(arr[i]  == 3 || arr[i]  == 2 || arr[i]  == 5){
// 		console.log(arr[i] + " prostoe");
// 	}else if(arr[i] % 3 == 0 || arr[i] % 2 == 0 || arr[i] % 5 == 0) {
// 		console.log(arr[i] + ' slojnoe');
// 	} else {
// 		console.log(arr[i] + " prostoe")
// 	}
// }

// "use strict"

// console.log(Math.pow(2, 10));

// console.log(Math.sqrt(245));

// let sum = 0;
// let arr = [4, 2, 5, 19, 13, 0, 10];
// for(let i = 0; i < arr.length; i++) {
// 	sum += Math.pow(arr[i],2)
// }
// console.log(Math.sqrt(sum));

// let sum = 379;
// sum = Math.sqrt(sum);
// let doSot = sum.toFixed(2);
// let doDes = sum.toFixed(1);
// let doSel = sum.toFixed();
// console.log(sum);
// console.log(doSot);
// console.log(doDes);
// console.log(doSel);

// let sum = 587;
// sum = Math.sqrt(sum);
// let obj = {
// 	ceil: Math.ceil(sum),
// 	floor: Math.floor(sum)

// }
// console.log(obj);

// console.log(Math.max(1, 5, 10, 34, 100));
// console.log(Math.max(-1, 0, -20, -56, -100));
// console.log(Math.max());
// let arr = [1, 5, 10, 34, 100];
// let max = Math.max.apply(null, arr);
// console.log(max);

// console.log(Math.min(40, 20, 42, 100, 76));
// console.log(Math.min(-1, -100, -30, -25, 40));
// console.log(Math.min());

// let arr = [40, 20, 42, 100, 67];
// let min = Math.min.apply(null, arr);
// console.log(min);

// console.log(Math.max(4, -2, 5, 19, -130, 0, 10));
// console.log(Math.min(4, -2, 5, 19, -130, 0, 10));

// function getRandomArbitary(min, max) {
// 	return Math.random() * (max - min) + min;
// }

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(Math.random());

// function getRandomInt(min, max) {
// 	return Math.floor(Math.random() * (max - min + 1)) + min;
// }
// console.log(getRandomInt(10, 100));

// console.log(Math.floor(Math.random()*100+1));

// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push(Math.floor(Math.random()*10+1));
// }
// console.log(arr);

// console.log(Math.abs(-3));
// console.log(Math.abs(3));

// let a = 9;
// let b = 8;
// console.log(Math.abs(b - a));

// let str = 'js';
// console.log(str.toUpperCase());

// let str = 'JS';
// console.log(str.toLowerCase());

// let str = 'Yazyk JavaScript';
// console.log(str.toUpperCase());

// let str = "YAZYK JAVASCRIPT";
// console.log(str.toLowerCase());

// let str = 'abcde';
// let sub = str.substr(0,3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(2);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(-3, 2);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(-3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substr(-1);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substring(1, 3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.substring(1);
// console.log(sub);

// let str = 'abcbe';
// let sub = str.slice(1,3);
// console.log(sub);

// let str = 'abcde';
// let sub = str.slice(1);
// console.log(sub);

// let str = 'abcde';
// let sub = str.slice(1, -2);
// console.log(sub);

// let str = 'Y uchu uchu JavaScript';
// console.log(str.indexOf('uchu'));

// let str = 'Y uchu uchu JavaScript';
// console.log(str.indexOf('uchu', 5));

// let str = 'Ya uchu uchu JavaScript';
// console.log(str.indexOf('uchu', 5));

// let str = 'Ya uchu JavaScript';
// console.log(str.indexOf('PHP', 5));

// let str = 'abcde';
// console.log(str.indexOf('c', 2));

// let str = 'apple';
// console.log(str.indexOf('l', 3));

// let name = 'Akiljan';
// console.log(name.indexOf('a', 0));

// let str = 'Camel';
// console.log(str.indexOf('http://', 0));

// let str = 'Hazelnut';
// console.log(str.indexOf('html', 0));

// let str = 'b..b..b';
// console.log(str.lastIndexOf('b', 1))

// let str = 'b..b..b';
// console.log(str.lastIndexOf('b', 5));

// let str = 'b..b..b';
// console.log(str.lastIndexOf('B'));

// let poem = 'be or not to be';
// console.log(poem.startsWith('b', 0))

// let poem = 'be or not to be';
// console.log(poem.endsWith('e'));

// let str = 'html-css-javascript';
// let arr = str.split('-');
// console.log(arr);

// let str = 'html-css-javascript';
// let arr = str.split('-', 2);
// console.log(arr);

// let str = 'abcde';
// let arr = str.split('');
// console.log(arr);

// let str = 'abcde';
// let arr = str.split('', 3);
// console.log(arr);

// let str = '12345';
// let arr = str.split('');
// console.log(arr);

// let str = '123456789';
// let arr1 = str.split('');
// let arr2 = arr1.reverse();
// let result = arr2.join('');
// console.log(result);

// let str = '123456789';
// let result = str.split('').reverse().join('');
// console.log(result);

// let str = '12345';
// let arr = str.split('');
// let sum = 0;
// for(let i = 0; i < arr.length; i++) {
// 	sum += Number(arr[i]);
// };
// console.log(sum);

// let num = 12345;
// let str = String(num);
// let arr = str.split('');
// console.log(arr);

// let num = '1-2-3-4-5';
// let arr = num.split('-');
// console.log(arr);

// let num = '12345';
// let arr = num.split('');
// console.log(arr);

// let arr = [1, 2, 3];
// let str = arr.join('-');
// console.log(str);

// let arr = [1, 2, 3];
// let str = arr.join();
// console.log(str);

// let arr = [1, 2, 3];
// let str = arr.join('');
// console.log(str);

// let str = '123456789';
// let arr1 = str.split('');
// let arr2 = arr1.reverse();
// let result = arr2.join('');
// console.log(result);

// let str = '123456789';
// let result = str.split('').reverse().join('');
// console.log(result);

// let date = '2025-12-31';
// let result = date.split('-').reverse().join('.');
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.join('-');
// console.log(result);

// let arr = [1, 2, 3];
// arr.push(4, 5, 6);
// console.log(arr);

// let arr = [];
// for(let i = 1; i <= 9; i++) {
// 	arr.push(i)
// }
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let elem = arr.shift();
// console.log(elem);

// let arr = ['1', '2', '3', '4', '5', '6'];
// let result = [];
// while (arr.length > 0) {
// 	let first = arr.shift();
// 	let last = arr.pop();
// 	let str = first + last;
// 	result.push(str);
// }
// result = result.join('-');
// console.log(result);

// let arr = [1, 2, 3];
// let elem = arr.shift();
// console.log(elem);

// let arr = [1, 2, 3];
// let elem = arr.pop();
// console.log(elem);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(0, 2);
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1);
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let sub = arr.slice(1, -1);
// console.log(sub);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(0, 3);
// console.log(sub);

// let arr = [1, 2, 3, 4, 5];
// let sub = arr.slice(3);
// console.log(sub);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(1, 3);
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(2, 1, '1', '2', '3');
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// arr.splice(-2, 1);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 2);
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(3, 0, 'a', 'b', 'c');
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// arr.splice(1, 0, 'a', 'b');
// arr.splice(6, 0, 'c');
// arr.splice(8, 0, 'e');
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// console.log(arr.indexOf(3));

// let arr = [1, 2, 3, 4, 5];
// let result = arr.includes(1);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.includes(6);
// console.log(result);

// let arr = [1, 2, 3, 4, 5];
// let result = arr.includes(3);
// console.log(result);

// let str = 'london';
// let result = str.slice(0,1).toUpperCase() + str.slice(1);
// console.log(result);

// "use strict"
// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let counter = 0;
// for (let elem of arr) {
// 	if (elem == 'a') {
// 		counter++;
// 	}
// }
// console.log(counter);

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
// let counter = 0;
// for (let elem of arr) {
// 	if (elem == 3) {
// 		counter++;
// 	}
// }
// console.log(counter);

// let arr = [1, 2, 3, 2, 4, 3, 5, 6, 3, 2, 3];
//  let counter2 = 0;
//  let counter3 = 0;

//  for (let elem of arr) {
//  	if (elem == 3) {
//  		counter2++;
//  	} else if (elem == 2) {
// 		counter3++;
//  	}
//  }
//  console.log(counter2);
//  console.log(counter3);

// let arr = ['a', 'b', 'c', 'a', 'a', 'b'];
// let count = {a: 0, b: 0, c: 0};//count[a]=0
// for (let elem of arr) {
// 	count[elem]++;
// }
// console.log(count);

// let arr = ['a', 'b', 'c', 'a', 'a', 'b', 'd', 'e', 'z', 'x'];
// let count = {};
// for (let elem of arr) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);

// let str = 'Дана строка. Подсчитайте сколько раз в ней встречается каждый из ее символов';
// let count = {};
// for (let elem of str) {
// 	if (count[elem] === undefined) {
// 		count[elem] = 1;
// 	} else {
// 		count[elem]++;
// 	}
// }
// console.log(count);

// let arr = [1, 2, 3, 4, 5];
// for (let i = 1; i < arr.length; i++) {
// 	console.log(arr[i -1] + arr[i]);
// }

// let arr = [2, 3, 4, 5, 6, 7, 9, 9, 5, 0];
// for (let i = 0; i < arr.length -1; i++) {
// 	console.log(arr[i + 1]);
// }

// let arr = [2, 3, 4, 6, 67, 8];
// for (let i = 0; i < arr.length -1; i++) {
// 	console.log(arr[i] + arr[i +1]);
// }

// let arr = [3, 4, 5, 65, 7, 8, 9];
// for (let i = 2; i <= arr.length; i++) {
// 	console.log(arr[i - 1] + arr[i - 2])
// }

// let arr = [2, 3, 5, 6, 7, 9, 2, 78];
// for (let i = 2; i <= arr.length -1; i++) {
// 	console.log(arr[i -1] + arr[i -2] + arr[i]);
// }

// let arr = [2, 5, 7, 8, 4, 2, 1, 9];
// for ( let i = 1; i < arr.length -1; i++) {
// 	console.log(arr[i -1] + arr[i] + arr[i +1]);
// }

// let arr = [10, 20, 30, 40, 21, 32, 51];
// let count = 0;
// for (let elem of arr) {
// 	if (String(elem)[0] == 1 || String(elem)[0] == 2) {
// 		count += elem;

// 	}

// }
// console.log(count);

// let obj = {a: 10, b: 20, c: 60, d: 40, e: 50};
// let sum = 0;
// for (let elem in obj) {
// 	if (String(obj[elem])[0] === '1' || String(obj[elem])[0] === '2') {
// 		sum += obj[elem];
// 	}
// }
// console.log(sum);

// for (let i = 0; i < 10; i++) {
// 	console.log(i);
// }

// for (let i = 10; i > 0; i--) {
// 	console.log(i);
// }

// for (let i = 10; i >= 0; i--) {
// 	console.log(i);
// }

// let i = 0;
// while (i <= 10) {
// 	console.log(i);
// 	i++;
// }

// let res = 0;
// for (let i = 1; i <= 10; i++) {
// 	res += i;
// }

// console.log(res);

// let res = 1;
// for (let i = 1; i <= 10; i++) {
// 	res *= i;
// }
//  console.log(res);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += Number(elem);
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem;
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let elem of arr) {
// 	sum += +elem
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i < arr.length; i++) {
// 	sum += +arr[i];
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length -1; i++) {
// 	sum += +arr[i];
// }
// console.log(sum);

// let arr = ['1', '2', '3', '4', '5'];
// let sum = 0;
// for (let i = 0; i <= arr.length; i++) {
// 	sum += +i;
// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {

// 	elem = elem**2;
// 	console.log(elem);

// }

// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let elem in obj) {
// 	sum += obj[elem];
// }
// console.log(sum);

// let obj = {a: 1, b: 2, c: 3};
// let sum = 0;
// for (let key in obj) {
// 	sum += obj[key];

// }
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let res;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = '+';
// 		break
// 	} else {
// 		res = '-';
// 	}
// }
// console.log(res);


// let arr = [];
// for (let i = 1; i <= 5; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [1, 2, 3, 4, 5];
// let res = false;
// for (let elem of arr) {
// 	if (elem === 3) {
// 		res = true;
// 		break;
// 	}
// }
// console.log(res);

// let arr = [1, 2, 3, 4, 5];
// for (let elem of arr) {
// 	if (elem % 2 == 0) {
// 		console.log(elem);
// 	}
// }

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let newArr = [];
// for (let elem of arr) {
// 	if (elem % 2 != 0) {
// 		newArr.push(elem);
// 	}
// }
// console.log(newArr);

// for (let i = 1; i <= 100; i++) {
// 	console.log(i);
// }

// for (let i = 100; i >= 1; i--) {
// 	console.log(i);
// }

// for (let i = 1; i < 100; i++) {
// if (i % 2 === 0)

// 	console.log (i)
// }

// let arr = [];
// for (let i = 0; i < 10; i++) {
// 		// arr[i] = 'x';
// 		arr.push('x');
// 	}
// console.log(arr);

// let arr = [];
// for (let i = 1; i <= 10; i++) {
// 	arr.push(i);
// }
// console.log(arr);

// let arr = [1, 2, 4, 67, 7, 889, 90, 3, 4, 5, 9];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0 && arr[i] < 10) {
// 		console.log(arr[i]);
// 	}
// }

// let arr = [2, 3, 4, 5, 8, 9, 1, 5, 7, 8, 8, 0];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] === 5) {
// 		console.log(arr[i])
// 	}
// }

// let sum = 0;
// let arr = [2, 3, 4, 5, 6, 7, 7, 8, 8, 9];
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i];
// }
// console.log(sum);

// let sum = 1;
// let arr = [2, 3, 6, 7, 9, 7, 1, 7, 9];
// for (let i = 1; i < arr.length; i++) {
// 	sum += arr[i] ** 2;
// }
// console.log(sum);


// let sum = 0;
// let arr = [2 ,3, 6, 7, 8, 9, 4, 7];
// for (let i = 0; i < arr.length; i++) {
// 	sum += arr[i]
// }
// console.log(sum / arr.length);

// let sum = 1;
// for (let i = 5; i > 0; i--) {
// 	sum *= i;

// }
// console.log(sum);

// let sum = 1;
// for (let i = 567; i > 0; i--) {
// 	sum *= i;
// }
// console.log(sum);

// let arr = [];
// for (let i = 10; i > 0; i--) {
// 	arr.push(i);
// }
// console.log(arr);

// let sum = 0;
// let arr = [2, 4, -1, -5, -79, 78, 56, 3];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] > 0) {
// 		sum += arr[i]
// 	}
// }
// console.log(sum);

// let arr = [10, 20, 30, 50, 235, 3000];
// for (let i = 0; i < arr.length; i++) {

// 	if (String(arr[i])[0] == 1 || String(arr[i])[0] == 2 || String(arr[i])[0] == 5) {
// 			console.log(arr[i]);
// 	}
// }

// let arr = [2, 4, 5, 6, 8, 9, 0];
// for (let i = arr.length -1; i >= 0; i--) {
// 		console.log(arr[i]);
// }

// let arr = [2, 3, 2, 5, 7, 8, 9, 1, 67];
// for (let i = 0; i < arr.length; i++) {
// 	if (arr[i] == i) {
// 		console.log(arr[i]);
// 	}
// }

// let arr = [2, 3, 5, 67, 7, 9];
// for (let i = 0; i < arr.length; i++) {
// 	document.write(arr[i] + '<br>');
// }

// let arr = [3, 5, 7, 89, 45, 1];
// for (let i = 0; i < arr.length; i++) {
// 	document.write('<p>' + arr[i] + '</p>')
// }

// let arr = ['MO', 'TU', "WE", 'TH', 'FR', 'ST', 'SU'];
// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i] == 'ST' || arr[i] == 'SU') {
// 		document.write('<p><b>' + arr[i] + '</b></p>')
// 	} else {
// 		document.write('<p>' + arr[i] + '</p>');
// 	}

// }

// let arr = ['SU', 'MO', 'TU', "WE", 'TH', 'FR', 'ST'];
// let date =new Date();
// let day = arr[date.getDay()];
// for (let i = 0; i < arr.length; i++) {
// 	if(arr[i] == day) {
// 		document.write('<p><i>' + arr[i] + '</i></p>');
// 	} else {
// 		document.write('<p>' + arr[i] + '</p>');
// 	}
// }

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let elem in obj) {
// 	obj[elem] += obj[elem] * 0.1;
// }
// console.log(obj);

// let obj = {
// 	employee1: 100,
// 	employee2: 200,
// 	employee3: 300,
// 	employee4: 400,
// 	employee5: 500,
// 	employee6: 600,
// 	employee7: 700,
// };
// for (let elem in obj) {
// 	if (obj[elem] <= 400) {
// 		obj[elem] += obj[elem] * 0.1;
// 	}
// }
// console.log(obj);

// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// let obj = {};
// for (let i = 0; i < arr1.length; i++) {
// 	obj[arr1[i]] = arr2[i];
// }
// console.log(obj);

// let sum = 0;
// let sum2 = 0;
// let obj = {1: 6, 2: 7, 3: 8, 4: 9, 5: 10};
// for (let elem in obj) {
// 	sum += +elem;
// 	sum2 += obj[elem];
// } console.log(sum2);
// console.log(sum);
// console.log(sum / sum2);

// let obj = {'a': 1, 'b': 2, 'c': 3, 'd': 4, 'e': 5};
// let arr = [];
// let arr1 = [];
// for (let elem in obj) {
// 	arr.push(elem);
// 	arr1.push(obj[elem]);
// }
// console.log(arr);
// console.log(arr1);

// let arr = [];
// let obj = {
// 	1: 125,
// 	2: 225,
// 	3: 128,
// 	4: 356,
// 	5: 145,
// 	6: 281,
// 	7: 452,
// };
// for (let elem in obj) {
// 	if (String(obj[elem])[0] == 1 || String(obj[elem])[0] == 2) {
// 		arr.push(obj[elem]);
// 	}
// }
// console.log(arr);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
// 	obj[arr[i]] = i + 1;
// }
// console.log(obj);

// let arr = ['a', 'b', 'c', 'd', 'e'];
// let obj = {};
// for (let i = 0; i < arr.length; i++) {
// 	obj[i + 1] = arr[i];
// }
// console.log(obj);

// "use strict"

// let arr = [
// ['a', 'b', 'c'],
// ['d', 'e', 'f'],
// ['g', 'h', 'i'],
// ];

// console.log(arr[0][1]);
// console.log(arr[1][2]);

// let arr = [
// ['a', 'b', 'c'],
// ['d', 'e', 'f'],
// ['g', 'h', 'i'],
// ['j', 'k', 'l'],
// ];
// console.log(arr[3][2]);
// console.log(arr[1][1]);
// console.log(arr[2][0]);
// console.log(arr[0][0]);

// let arr = [
// [1, 2],
// [3, 4],
// [5, 6]
// ];
// let sum = arr[0][0] + arr[0][1] + arr[1][0] + arr[1][1] + arr[2][0] + arr[2][1];
// console.log(sum);

// let arr = [
// 	[
// 		['a', 'b'],
// 		['c', 'd'],
// 	],
// 	[
// 		['e', 'f'],
// 		['g', 'h'],
// 	],
// 	[
// 		['i', 'j'],
// 		['k', 'l'],
// 	],
// ];
// console.log(arr[2][0][1]);

// let arr = [
// [
// 	[1, 2],
// 	[3, 4],
// ],
// [
// 	[5, 6],
// 	[7, 8],
// ],
// ];
// let sum = arr[0][0][0] + arr[0][0][1] + arr [0][1][0] + arr[0][1][1] + arr[1][0][0] + arr[1][0][1] + arr[1][1][0] + arr[1][1][1];
// console.log(sum);

// let arr = [
// 	['a', 'b', [1, 2, 3],[4, 5]],
// 	['d', ['e', 'f']]
// ];
// console.log(arr[0][3][1]);

// let arr = [
// [1, 2, 3, [4, 5, [6, 7]]],
// [8, [9, 10]]];
// let sum = arr[0][0] + arr[0][1] + arr[0][2] + arr[0][3][0] + arr[0][3][1] + arr[0][3][2][0] +
// arr[0][3][2][1] + arr[1][0] + arr[1][1][0] + arr[1][1][1];
// console.log(sum);

// let arr = [
// 	[1, 2, 3, 4, 5],
// 	[6, 7, 8],
// 	[9, 10]
// ];
// for (let subArr of arr) {
// 	for (let elem of subArr) {
// 		console.log(elem);
// 	}
// }

// let sum = 0;
// let arr = [
// 	[1, 2, 3],
// 	[4, 5],
// 	[6]
// 	];
// 	for (let A of arr) {
// 		for (let B of A) {
// 			sum += B;
// 		}
// 	}
// console.log(sum);

// let sum = 0;
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// for (let A of arr) {
// 	for (let B of A) {
// 		for (let C of B) {
// 			sum += C
// 		}
// 	}
// }
// console.log(sum);

// let arr = [[1, 2, 3, 4, 5], [6, 7, 8], [9, 10]];
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		console.log(arr[i][j]);
// 	}
// }

// let sum = 0;
// let arr = [
// 	[1, 2, 3],
// 	[4, 5],
// 	[6]
// 	];
// 	for (let i = 0; i < arr.length; i++) {
// 		for (let j = 0; j < arr[i].length; j++) {
// 			sum += arr[i][j];
// 		}
// 	}
// console.log(sum);

// let sum = 0;
// let arr = [[[1, 2], [3, 4]], [[5, 6], [7, 8]]];
// for (let i = 0; i < arr.length; i++) {
// 	for (let j = 0; j < arr[i].length; j++) {
// 		for (let k =0; k < arr[j].length; k++) {
// 			sum += arr[i][k][j]
// 		}
// 	}
// }
// console.log(sum);

// let arr = [];
// for (let i =0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <3; j++) {
// 		arr[i].push(j+1);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j =0; j< 5; j++) {
// 		arr[i].push(j+1);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i =0; i < 3; i++) {
// 	arr[i] = [];
// 	for(let j =0; j <4; j++) {
// 		arr[i].push('x');
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i =0; i < 3; i++) {
// 	arr[i] = [];
// 	for(let j = 0; j <2; j++) {
// 		arr[i][j] = [];
// 		for (let k = 0; k < 5; k++) {
// 			arr[i][j].push(k + 1);
// 		}
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < i; j++) {
// 		arr[i].push(j + 1);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] =[];
// 	for(let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 1; j <= 5; j++) {
// 		arr[i].push(j);
// 	}
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k);
// 		k++;
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++)
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0, k = 1; i < 4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0, k = 0; i < 4; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k += 2);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0, k = 1; i < 2; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 2; j++) {
// 		arr[i][j] = [];
// 		for (let m = 0; m < 2; m++) {
// 				arr[i][j].push(k++);
// 		}
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j <3; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i <3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

// let arr = [];
// let k = 1;
// for (let i = 0; i <3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

// let arr = [];
// for (let i = 0, k = 1; i < 3; i++) {
// 	arr[i] = [];
// 	for (let j = 0; j < 3; j++) {
// 		arr[i].push(k++);
// 	}
// }
// console.log(arr);

// let obj = {
// 	key1: {
// 		key1: 1,
// 		key2: 2,
// 		key3: 3,
// 	},
// 	key2: {
// 		key1: 4,
// 		key2: 5,
// 		key3: 6,
// 	},
// 	key3: {
// 		key1: 7,
// 		key2: 8,
// 		key3: 9,
// 	},
// };
// let sum = obj.key1.key1 + obj.key1.key2 + obj.key1.key3 + obj.key2.key1 + obj.key2.key2 + obj.key2.key3 + obj.key3.key1 +
// obj.key3.key2 + obj.key3.key3;
// console.log(sum);

// let obj = {
// 	1: {
// 		1: 'a1',
// 		2: 'a2',
// 		3: 'a3',
// 	},
// 	2: {
// 		1: 'b1',
// 		2: 'b2',
// 		3: 'b3',
// 	},
// 	3: {
// 		1: 'c1',
// 		2: 'c2',
// 		3: 'c3',
// 	},
// };
// console.log(obj['2']['2']);
// console.log(obj['3']['1']);

// let obj = {
// 	key1: {
// 		a: 1, b: 2, c: {
// 			d: 3,
// 			e: 4,
// 		}, f: 5
// 	},
// 	key2: {
// 		g: 6, h: 7,
// 	},
// };
// let sum = obj['key1']['a'] + obj['key1']['b'] + obj['key1']['c']['d'] + obj['key1']['c']['e'] +
// obj['key1']['f'] + obj['key2']['g'] + obj['key2']['h'];
// console.log(sum);

// let sum = 0;
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// };
// for (let key in obj) {
// 	let subObj = obj[key];
// 	for (let subKey in subObj) {
// 		sum += +subObj[subKey];
// 		console.log(subObj[subKey]);
// 	}
// }
// console.log(sum);

// let sum = 0;
// let obj = {
// 	1: {
// 		1: 11,
// 		2: 12,
// 		3: 13,
// 	},
// 	2: {
// 		1: 21,
// 		2: 22,
// 		3: 23,
// 	},
// 	3: {
// 		1: 24,
// 		2: 25,
// 		3: 26,
// 	},
// };
// for (let key in obj) {
// 	let subObj = obj[key];
// 	for (let subKey in subObj ) {
// 		sum += +subObj[subKey];
// 	}
// }
// console.log(sum);

// let sum = 0;
// let obj = {
// 	1: {
// 		1: {
// 			1: 111,
// 			2: 112,
// 			3: 113,
// 		},
// 		2: {
// 			1: 121,
// 			2: 122,
// 			3: 123,
// 		},
// 	},
// 	2: {
// 		1: {
// 			1: 211,
// 			2: 212,
// 			3: 213,
// 		},
// 		2: {
// 			1: 221,
// 			2: 222,
// 			3: 223,
// 		},
// 	},
// 	3: {
// 		1: {
// 			1: 311,
// 			2: 312,
// 			3: 313,
// 		},
// 		2: {
// 			1: 321,
// 			2: 322,
// 			3: 323,
// 		},
// 	},
// };
// for (let i in obj) {
// 	let subObj = obj[i];
// 	for (let j in subObj) {
// 		let subSub = subObj[j];
// 		for(let k in subSub) {
// 			sum += subSub[k];
// 		}
// 	}
// }
// console.log(sum);

// let students = {

// 	'group1': ['name11', 'name12', 'name13'],
// 	'group2': ['name21', 'name22', 'name23'],
// 	'group3': ['name31', 'name32', 'name33'],
// };
// console.log(students['group3'][0]);

// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
// for (let group in students) {
// 	for (let name of students[group]) {
// 		console.log(name);
// 	}
// }

// let data = {
// 	1: [
// 	'data11',
// 	'data12',
// 	'data13',
// 	],
// 	2: [
// 	'data21',
// 	'data22',
// 	'data23',
// 	],
// 	3: [
// 	'data31',
// 	'data32',
// 	'data33',
// 	],
// 	4: [
// 	'data41',
// 	'data42',
// 	'data43',
// 	],
// };
// for (let i in data) {
// 	for (let j of data[i]) {
// 		console.log(j)
// 	}
// };

// let data = [
// {
// 	1: 'data11',
// 	2: 'data12',
// 	3: 'data13',
// },
// {
// 	1: 'data21',
// 	2: 'data22',
// 	3: 'data23',
// },
// {
// 	1: 'data31',
// 	2: 'data32',
// 	3: 'data33',
// },
// ];
// for (let i = 0; i < data.length; i++) {
// 	for (let j in data[i]) {
// 		console.log(data[i][j]);
// 	}
// 	}

// let data = [
// {
// 	1: [
// 	'data111',
// 	'data112',
// 	'data113',
// 	],
// 	2: [
// 	'data121',
// 	'data122',
// 	'data123',
// 	],
// },
// {
// 	1: [
// 	'data211',
// 	'data212',
// 	'data213',
// 	],
// 	2: [
// 	'data221',
// 	'data222',
// 	'data223',
// 	],
// },
// {
// 	1: [
// 	'data411',
// 	'data412',
// 	'data413',
// 	],
// 	2: [
// 	'data421',
// 	'data422',
// 	'data423',
// 	],
// },
// ];
// for (let i = 0; i < data.length; i++) {
// 	for (let j in data[i]) {
// 		console.log(data[i][j]);
// 	}
// }

// let users = [
// {
// 	name: 'name1',
// 	surn: 'surn1',
// },
// {
// 	name: 'name2',
// 	surn: 'surn2',
// },
// {
// 	name: 'name3',
// 	surn: 'surn3',
// },
// ];
// for (let user of users) {
// 	console.log(user.name + ' ' + user.surn);
// };

// let employees = [
// {
// 	name: 'name1',
// 	salary: 300,
// },
// {
// 	name: 'name2',
// 	salary: 400,
// },
// {
// 	name: 'name3',
// 	salary: 500,
// },
// ];
// for (let employee of employees) {
// 	console.log(employee.name + ' ' + employee.salary);
// };

// let employees = [
// {
// 	name: 'name1',
// 	salary: 300,
// },

// {
// 	name: 'name2',
// 	salary: 400,
// },
// {
// 	name: 'name3',
// 	salary: 500,
// },
// ];
// for (let employee of employees) {
// 	console.log(employee.name + ' ' + employee.salary);
// };

// let employees = [
// {
// 	name: 'name1',
// 	salary: 300,
// 	age: 28,
// },
// {
// 	name: 'name2',
// 	salary: 400,
// 	age: 29,
// },
// {
// 	name: 'name3',
// 	salary: 500,
// 	age: 30,
// },
// {
// 	name: 'name4',
// 	salary: 600,
// 	age: 31,
// },
// {
// 	name: 'name5',
// 	salary: 700,
// 	age: 32,
// },
// ];
// for (let employee of employees) {
// 	if (employee.age >= 30) {
// 		console.log(employee.salary);
// 	}
// }

// let months = {
// 	'ru': [
// 	'Jan',
// 	'Feb',
// 	'Mar',
// 	'Apr',
// 	'May',
// 	'Jun',
// 	'Jul',
// 	'Aug',
// 	'Sep',
// 	'Oct',
// 	'Nov',
// 	'Dec',
// 	],
// 	'en': [
// 	'J',
// 	'F',
// 	'M',
// 	'A',
// 	'M',
// 	'J',
// 	'J',
// 	'A',
// 	'S',
// 	'O',
// 	'N',
// 	'D',
// 	],
// };
// let lang = 'ru';
// let month = 5;
// console.log(months[lang][month]);

// let affairs = {
// 	'2018': {
// 		11: {
// 			29: ['delo111', 'delo112', 'delo113'],
// 			30: ['delo121', 'delo122', 'delo123'],
// 		},
// 		12: {
// 			30: ['delo211', 'delo212', 'delo213'],
// 			31: ['delo221', 'delo222', 'delo223'],
// 		},
// 	},
// 	'2019': {
// 		12: {
// 			29: ['delo311', 'delo312', 'delo313'],
// 			30: ['delo321', 'delo322', 'delo323'],
// 			31: ['delo331', 'delo332', 'delo333'],
// 		}
// 	}
// }
// let year = 2019;
// let month = 12;
// let day = 31;
// console.log(affairs[year][month][day]);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},

// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }
// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

// let obj = {
// 	key1: {
// 		key2: '12',
// 		key3: '13',
// 	},
// 	key2: {
// 		key4: '24',
// 		key5: '25',
// 	},
// }

// let key1 = 'key2';
// let key2 = 'key4';
// console.log(obj[key1][key2]);

// let users = [
// {
// 	name: 'name1',
// 	surn: 'surn1',
// },
// {
// 	name: 'name2',
// 	surn: 'surn2',
// },
// {
// 	name: 'name3',
// 	surn: 'surn3',
// },
// ];
// users.push({
// 	name: 'name4',
// 	surn: 'surn4',
// });
// console.log(users);

// let employees = [
// {
// 	name: 'name1',
// 	salary: 300,
// 	age: 28,
// },
// {
// 	name: 'name2',
// 	salary: 400,
// 	age: 29,
// },
// {
// 	name: 'name3',
// 	salary: 500,
// 	age: 30,
// },
// ];
// employees.push({
// 	name: 'Igor',
// 	salary: 120000,
// 	age: 35,
// });
// console.log(employees);

// let employees = [
// {
// 	name: 'name1',
// 	salary: 300,
// 	age: 28,
// },
// {
// 	name: 'name2',
// 	salary: 400,
// 	age: 29,
// },
// {
// 	name: 'name3',
// 	salary: 500,
// 	age: 30,
// },
// ];
// employees.push({
// 	name: 'Igor',
// 	salary: 120000,
// 	age: 35,
// })
// console.log(employees);

// let students = {
// 	'group1': ['student11', 'student12', 'student13'],
// 	'group2': ['student21', 'student22', 'student23'],
// 	'group3': ['student31', 'student32'],
// };
// students.group1.push('student14');
// students.group4 = [];
// students.group4.push('student41');
// console.log(students);

// let affairs = {
// 	'2019-12-28': ['data11', 'data12', 'data13'],
// 	'2019-12-29': ['data21', 'data22', 'data23'],
// 	'2019-12-30': ['data31', 'data32', 'data33'],
// };
// affairs['2019-12-29'].push('data14');
// affairs['2019-12-31'] = [];
// affairs['2019-12-31'].push('data41');
// affairs['2019-12-31'].push('data42');
// console.log(affairs);

// let students = {
// 	'group1': {
// 		'subgroup11': ['student111', 'student112', 'student113'],
// 		'subgroup12': ['student121', 'student122', 'student123'],
// 	},
// 	'group2': {
// 		'subgroup21': ['student211', 'student212', 'student213'],
// 		'subgroup22': ['student221', 'student222', 'student223'],
// 	},
// 	'group3': {
// 		'subgroup31': ['student311', 'student312', 'student313'],
// 		'subgroup32': ['student321', 'student322', 'student323'],
// 	},
// };
// students.group1.subgroup11.push('student114');
// students.group1.subgroup13 = [];
// students.group4 = {};
// students.group4.subgroup41 = [];
// students.group4.subgroup41.push('student411', 'student412');
// console.log(students);
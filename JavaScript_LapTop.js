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
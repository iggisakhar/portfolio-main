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


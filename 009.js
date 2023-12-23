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
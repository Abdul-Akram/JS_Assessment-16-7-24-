// Bubble Sort in Array
// let arr = [5, 6, 8, 4, 2];
// console.log(arr)
// let n = arr.length;
// for (let i = 0; i < n - 1; i++) {
//   for (let j = 0; j < n - i - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);
// ------------------------------------------------------------------------------------------------------------------------------
//Array Destruction
// let arr = [1, 2, 3, 4, 5, 6];
// let [a, b, c, d, e, f] = arr;
// console.log(a, b, c, d, e, f)
// ------------------------------------------------------------------------------------------------------------------------------
// Array Maximum and Minimum

// let arr = prompt().split(" ").map(Number);
// console.log(arr)
// let max = arr[0];
// let min = arr[0];
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
//   if (arr[i] < min) {
//     min = arr[i];
//   }
// }
// console.log(`Max: ${max} Min: ${min}`);
// -------------------------------------------------------------------------------------------------------------------------------
// search elemnts in array (Binary Search)

// let arr = prompt().split(" ").map(Number);
// console.log(arr)
// let search = Number(prompt());
// console.log("Element : "+arr);
// let left = 0;
// let right = arr.length - 1;
// while (left < right) {
//   let mid = Math.floor((left + right) / 2);
//   if (arr[mid] == search) {
//     console.log("Element found at index " + mid);
//     break;
//   } else if (arr[mid] > search) {
//     right = mid - 1;
//   } else {
//     left = mid + 1;
//   }
// }
// ------------------------------------------------------------------------------------------------------------------------------------

//Merging an array
// let arr1 = prompt().split(" ").map(Number);
// console.log(arr1)
// let arr2 = prompt().split(" ").map(Number);
// console.log(arr2)
// let arr3 = [...arr1, ...arr2];
// console.log(arr3);
// -----------------------------------------------------------------------------------------------------------------------------------
// Flattern the array
// let arr = [1,2,[3,4],[5,6,7,8]];
// console.log(arr)
// console.log(arr.flat(Infinity));
// --------------------------------------------------------------------------------------------------------------------------------
//Mapping the array
// let arr = prompt().split(" ").map(Number);
// console.log(arr);
// -----------------------------------------------------------------------------------------------------------------------------------
// creating new array with given length
// let size = Number(prompt());
// let arr = new Array(size);
// console.log("Size: ",arr.length);

// -----------------------------------------------------------------------------------------------------------------------------------
// Deduplication of array
// let arr = [1,2,3,4,5,3,4,6];
// console.log("orginal array:",arr);
// console.log("deduplication array:", [...new Set(arr)]);
// -----------------------------------------------------------------------------------------------------------------------------------
// Reverse the array
// let arr = prompt().split(" ").map(Number);
// console.log(arr);
// console.log(arr.reverse());





  // const inputs = document.querySelectorAll('.text-input, .select-box, .radio,.radio_two'); //selected multiple class names
  // const progressBar = document.querySelectorAll('.progress'); //selected progress bar


  // //inputs is nodelist and using forEach for each element iteration
  // inputs.forEach(input => {
  //   input.addEventListener('input', updateProgressBar); // added event listener for progress
  // });

  // // function for the update progress bar
  // function updateProgressBar() {
  //   const filledInputs = Array.from(inputs).filter(input => {
  //     if (input.classList.contains('text-input')) {
  //       return input.value.length >=3;
  //     } else if (input.classList.contains('select-box')) {
  //       return input.value !== '';
  //     } else if (input.classList.contains('radio')) {
  //       return input.checked;
  //     }else if(input.classList.contains('radio_two')){
  //       return input.checked
  //     }
  //   });

  //   const progressPercent = (filledInputs.length / inputs.length) * 100; // percentage for the progress bar 
  //   progressBar[0].style.width = `${progressPercent}%`; //added width for the progress bar
  //   progressBar[1].style.width = `${progressPercent}%`; //added width for the progress bar
  // }

  // const data = {
  //   name: "aditya",
  //   age:23,
  //   salary:100,
  //    myfun:function () { 
  //      console.log(this.salary);
  //   }
  // }

  // data.myfun.call(data,"salary");
  
//   function shift (arr) {
//        if(arr.length==0){
//         return [];
//        }
//        let  removeFE = arr[0];
//        for (let i = 0; i < arr.length-1; i++) {
//           arr[i] = arr[i+1];
          
//         }
//         console.log(arr.length--)
//        return removeFE;
//   }
// let arrr = [1,2,3]
// console.log(  shift(arrr))
// console.log(arrr)

// let str ="hare rama hare krishna";
// let count= {};

// for(let i =0; i<str.length; i++){
//   count[str[i]]= (count[str[i]]||0)+1
// }

// console.log(count)

//sort  array in javascript


function bubbleSort(array) {
  const length = array.length;
  for (let i = 0; i < length; i++) {
      for (let j = 0; j < length - 1 - i; j++) {
          if (array[j] > array[j + 1]) {
              // Swap the elements
              let temp = array[j];
              array[j] = array[j + 1];
              array[j + 1] = temp;
          }
      }
  }
  return array;
}

// let array = [5, 2, 1, 3, 4];
// console.log("Sorted array:", bubbleSort(array)); // Output: [1, 2, 3, 4, 5]

// function insertionSort(array) {
//   const length = array.length;
//   for (let i = 1; i < length; i++) {
//       let key = array[i];
//       let j = i - 1;
//       while (j >= 0 && array[j] > key) {
//           array[j + 1] = array[j];
//           j = j - 1;
//       }
//       array[j + 1] = key;
//   }
//   return array;
// }

// let arr = [5, 2, 1, 3, 44,4];
// console.log("Sorted array:", insertionSort(arr)); // Output: [1, 2, 3, 4, 5];

// function sortArr(arr){
//     if(arr.length==0) return [];
//     for (let i= 0; i < arr.length; i++) {
//         for(let j=0;j<arr.length-i;j++){
//            if(arr[j]>arr[j+1]){
//             let temp = arr[j];
//             arr[j] = arr[j+1];
//             arr[j+1] = temp;
//            }
//         }
//       }
//       return arr;
// }
// console.log(sortArr([2,4,5,3,1,65,3,33,2]));

// let arr = [1,3,5,2,4,2,10,122];
// let maxi = arr[0];
// function maximum(arr) {
//   if (arr.length==0) return [];
//   for (let i=1; i<arr.length; i++){
//     if(arr[i]>maxi){
//       maxi = arr[i];
//     }
//   }
// }
// maximum(arr);
// console.log(maxi)
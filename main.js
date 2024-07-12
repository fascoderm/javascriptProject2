// -------- string manipulation functions --------

// ****  functions to reverse a string  ****
let reverseWord = '';

// function expression
let stringReversed = function(str){
  let i = str.length - 1;  // getting the index of the string parameter
  while(i >= 0){
    reverseWord += str[i];
    i -= 1;
  }
  return reverseWord;
}

// testing
console.log(stringReversed('helllloooo'));


//  ****   function to count number of characters in a string  ****

// function declaration
function countChar(str){
  return str.length;
}
// testing
console.log(countChar('faiz'));

// **** capitalizing the first letter ****
let capitalizeFirstLetter = function(str){
  let result = str[0].toUpperCase() + str.slice(1).toLowerCase();
  return result;
}
// testing
console.log(capitalizeFirstLetter('tayo'));

// ---- end of string manipulation functions ----


// """" array functions """"

// function to determine the maximum value from array of numbers
let minMax = function(arr){
  let i = 0;
  let max;
  let min;
  while(i < arr.length){
    if(arr[i] > arr[0]){max = arr[i]}
    if(arr[i] < arr[0]){min =  arr[i]}
    i++
  }
  console.log('max: ' + max);
  console.log('min: ' + min);
}
minMax([3,2.4,5.7,1]) // testing


// sum of numbers in array
function sumAll(num){
  let sum = 0;
  for(let i = 0; i < num.length; i += 1){
    sum+=num[i];
  }
  return sum;
}
console.log(sumAll([1,2,3,4]));  // testing


// function that filters out any age greater than 20

function ageFiltering(age){
  let i = 0;
  let newArray = [];
  while(i < age.length){
    if(age[i] <= 20){
      newArray.push(age[i]);
    }
    i += 1;
  }
  return newArray;
}

console.log(ageFiltering([10,50,15,20,25]))  // testing


//  :::: mathematical functions ::::

// calculating the factorial of any number

let factorial = function(n){
  let i = 1;
  let sum = 1;
  while(i <= n){
    sum *= n;
    n -= 1;
  }
  return sum;
}

console.log(factorial(5)); // testing



// prime number check
  let primeNumber = function(arr){
   let arrayPrime = [];
    for(let n of arr){
     console.log(n);
     let i = 1;
     let countFactor = 0;
      while(i <= n){
        if(n % i == 0){
          countFactor += 1;
        }
        i += 1;
      }
      if(countFactor == 2){
       arrayPrime.push(n);
     }
    }
    return arrayPrime;
  } 

 console.log(primeNumber([1,2,3,4,5,6,7,9,11,13,17,19,21,23])) // testing


 // fibonacci series   0 1 1 2 3 5 8 13

 let n1 = 0, n2 = 1, nextN
  function fib(n){
   let  i = 1;
   while(i<=n){
    console.log(n1);
    nextN = n1 + n2; // 0+1 = 1, 1+1=2
    n1 = n2; // n1 = 1
    n2 = nextN; // n2 = 1
    i++
  }
}
fib(7) // testing


  //let fibInit = [0,1]
    // if(n==1){
    //        fibInit = [0]
    //      }
    //      if(n==2){
    //        fibInit = [0,1]
    //      }
      //console.log(fibInit.length);
      // fibInit.push(fibInit[n-fibInit.length]+fibInit[n-fibInit.length-1])
//  function fib(n){
//   let x;
//   let y;
//   if(n==1){
//     fibInit = [0]
//   }
//   if(n==2){
//     fibInit = [0,1]
//   }

//   for(n=3; n>fibInit.length; n++){

//   }
//   if(n>2){
//     x = n - fibInit.length
//     fibInit.push(fibInit[x]+fibInit[x-1])
//   }
// }
// let arrFib = [4, 7]
// let re = arrFib[0] + arrFib[1]
// let pus = arrFib.push(re)
// console.log(arrFib);
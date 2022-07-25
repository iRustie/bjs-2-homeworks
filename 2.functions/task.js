"use stict";
// Задание 1
function getArrayParams(arr) {
  let min, max, avg;
  sum = 0;
  min = 0;
  max = 0;
  for(let i = 0; i < arr.length; i++){
    if(i > max){
      max = i;
    }else if(i < min){
      min = i;
    }
    console.log(`i: ${i}`);
    sum + i;
    console.log(`sum: ${sum}`);
  }
  avg = sum / arr.length;
  avg.toFixed(2);
  console.log(`avg: ${avg}`);
  console.log(`sum: ${sum}`);
  return { min: min, max: max, avg: avg };
}
//почему-то avg и sum выдают 0..

// Задание 2
function worker(arr) {
  let sum;

  // Ваш код

  return sum;
}

function makeWork(arrOfArr, func) {
  let max;

  // Ваш кода
  // for ...
  
  return max;
}

// Задание 3
function worker2(arr) {
  // Ваш код
}

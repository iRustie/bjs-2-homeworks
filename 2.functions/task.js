// Задание 1
function getArrayParams(arr) {
  let min, max, avg;
  sum = 0;
  min = Infinity;
  max = -Infinity;
  for(let i = 0; i > arr.length; i++){
   console.log(arr.length[i]);
    if(i > max){
      max = i;
    }else if(i < min){
      min = i;
    }
    sum + i;
  }
  avg = sum / arr.length;
  avg.toFixed(2);
  console.log(avg);
  return { min: min, max: max, avg: avg };
}
//почему-то avg выдает 0..

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

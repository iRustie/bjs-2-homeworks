function solveEquation(a, b, c) {
  let arr;
  let discr = (a, b, c) => b * b - 4 * a * c;
  let d = discr(a, b, c);
  let x1 = (-b + Math.sqrt(d)) / (2 * a);
  let x2 = (-b - Math.sqrt(d)) / (2 * a);
  if (d < 0){
    arr = [];
    }else if(d === 0){
    arr = [x1];
    }else{
    arr = [x1, x2];
    }
  return arr;
}




function calculateTotalMortgage(percent, contribution, amount, date) {
  let totalAmount;

  // код для задачи №2 писать здесь

  return totalAmount;
}

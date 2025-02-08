// Rest Parameters
function Qiimayn(...Qiimayaal) {
  // dhamaan qiimayaasha array
  return Array.isArray(Qiimayaal);
}

console.log(Qiimayn(40, 50, 50, 60, 12, 1, 34, 123, 44));

function GetTotal(...Prices) {
  let Result = 0;
  for (let i = 0; i < Prices.length; i++) {
    Result = Result + Prices[i];
  }
  return Result;
}

console.log(GetTotal(15, 18, 90, 54, 100));

function ListPrice(...Prices) {
  for (let i = 0; i < Prices.length; i++) {
    console.log(Prices[i]);
  }
}

ListPrice(90, 67, 10, 76, 55, 34, 23);

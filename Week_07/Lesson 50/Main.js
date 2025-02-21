// for(let i = 0; i < 5; i++){
//     console.log(i)
// }

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let x= 0 // bilow
for(; x < numbers.length;){
    console.log(numbers[x])
    //x++
    //x = x + 1
    x += 1
}
console.log("*".repeat(60))



let a = 0
for(; a < numbers.length;){
    console.log(numbers[a])
    //a = a + 2
    a += 2
}

console.log("*".repeat(60))

for(let r = numbers.length - 1; r >= 0; r--){
    console.log(numbers[r])
}





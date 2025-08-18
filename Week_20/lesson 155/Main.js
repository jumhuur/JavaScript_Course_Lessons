const list = [1,2,3,4,5,6,7,8,9,10] 
list.forEach(
    function(num, index){
    console.log(`--- index ${index}`)
    console.log(num)
}
)
function salaan(name,callback){
    console.log(`salaan 1aad ${name}`)

    setTimeout(() => {
        return callback()
    }, 6000)
  
}
function salaan_kale(){
    console.log("salaan labaad")
}
salaan("cumar",salaan_kale)
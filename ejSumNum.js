let nums = [1,2,3,4]
let numResultado =[];

numResultado[0]=nums[0];
for(let cont = 1; cont < nums.length;cont++)
{
    //console.log("Posicion " +cont +":" +nums[cont])
    let valorAcumulado = numResultado[cont-1]
    numResultado[cont] = valorAcumulado + nums[cont]
}
let numsResultado=[]
console.log("Input " +nums)
console.log(`Output: ${numResultado}`)
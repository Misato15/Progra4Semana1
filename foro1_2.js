function aleatorio(min,max)
{
    return Math.round(Math.random()*(1+max-min)+min);

}

console.log(aleatorio(1,100));
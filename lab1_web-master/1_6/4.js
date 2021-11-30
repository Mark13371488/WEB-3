//Знайти елемент із найбільшою частотою повторень
//let arr = [1, 3, 4, 1, 1, 3, 4, 5];
//let result = {};
exports.frequency=(arr,result )=>{
for (let i = 0; i < arr.length; ++i)
{
    let a = arr[i];
    if (result[a] != undefined)
       { ++result[a];}
    else
        result[a] = 1;
}

console.log('task_4 ')
for (let key in result)
console.log('число '+ key + ' -' +result[key]+' раз/и/ів' )
}
//Написати функцію, яка вставить стрічку у відповідну позицію іншої стрічки
//et result
exports.association=(str1,str2,position)=>{
   // if(position>str1.length)
   // {return  position
    //console.log('')}
    let result=str1.slice(0,position)
    result+=str2.slice()
    result+=str1.slice(position)
    return result
}

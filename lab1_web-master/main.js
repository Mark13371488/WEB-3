const {num}=require('./1_6/1')
const {association}=require('./1_6/2')
const {insertionSort}=require('./1_6/3')
const {frequency}=require('./1_6/4')
const {date}=require('./1_6/5')
const mod = require('./functions.js');
//task 1 
let min=0
let max=1000
num(min,max);
//task 2
let str1='abcd'
let str2='omg'
let p=2
let result=association(str1,str2,p)
console.log("task_2 "+result)
//task 3
let A=[2,5,77,11,3,4,[53]]
let B=[2,5,77,11,3,1,53]
console.log('task_3 ')
console.log('A='+insertionSort(A))
console.log('B='+insertionSort(B))
//task 4
let arr = [1, 3, 4, 1, 1, 3, 4, 5];
let result_1 = {};
frequency(arr,result_1 )
//task 5
date();

// Task 7
//A
//додавання нової космічної станцій 
console.log('\nдодавання нової космічної станцій\n');

let station_1 = mod.AddNewStation('station1');
let station_2 = mod.AddNewStation('station2');
let station_3 = mod.AddNewStation('station3');
let station_4 = mod.AddNewStation('station6');
let station_5 = mod.AddNewStation('station9999');

console.log(mod.global_station_List)
//B
// Редагування станції в колекції
console.log('\nредагування станції в колекції\n');

mod.edit_station('station1','station1234')
mod.edit_station('station2','sta')

console.log(mod.global_station_List)

//C
// Видалення станції з колекції
console.log('\nВидалення станції з колекції\n');

mod.remove_station(station_1)

console.log(mod.global_station_List)

//D
// Пошук однієї станції в колекції
console.log('\nПошук однієї станції в колекції\n');

console.log(mod.find_stantion('sta'))
console.log(mod.find_stantion('station'))

//E
// Додавання планети в колекцію
console.log('\nДодавання планети в колекцію\n');

let planet1 = mod.AddNewPlanet('planet1')
mod.AddNewPlanet('planet2')
mod.AddNewPlanet('planet3')

console.log(mod.global_Planets_List)

//F
// Редагування планети в колекції
console.log('\nРедагування планети в колекції\n');

mod.edit_planet('planet1','777')

console.log(mod.global_Planets_List)

//G
// Видалення планети з колекції
console.log('\nВидалення планети з колекції\n');

mod.remove_planet('planet2')

console.log(mod.global_Planets_List)

//H
// Пошук планети в колекції
console.log('\nПошук планети в колекції\n');

console.log(mod.find_planet('777'))
console.log(mod.find_planet('77'))

//I
// Додавання вантажу в колекцію
console.log('\nДодавання вантажу в колекцію\n');

mod.add_goods('kal')
mod.add_goods('cookies')

console.log(mod.global_goods_List)

//J
// Редагування вантажу в колекції
console.log('\nРедагування вантажу в колекції\n');

mod.edit_goods('kal','kalova masa')

console.log(mod.global_goods_List)

//K
//Видалення вантажу з колекції
console.log('\nВидалення вантажу з колекції\n');

mod.remove_goods('kalova masa')

console.log(mod.global_goods_List)

//L
//Пошук усіх станції планети
console.log('\nПошук усіх станції планети\n');

planet1.stantionList.push(station_2)
planet1.stantionList.push(station_3)
planet1.stantionList.push(station_4)
planet1.stantionList.push(station_5)

mod.get_Stantion_List_on_planet('777')



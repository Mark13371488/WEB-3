//Класс планета
class Planet {
    constructor( name) {
        this.name = name;
        this.stantionList = [];
    }
}

//Клас товари
class Goods {

    constructor(name) {
        this.name = name;
    }
}
//Доставлені товари
class deliveredGoods {

    constructor(name) {
        this.name = name;
        this.planetName = planetName;
    }
}

//Клас Станція
class SpaceStation {
    constructor(name) {
        this.name = name;
    }
}

//Ініціалізація колекцій станцій і товарів
  let global_Planets_List = [];

  let global_station_List = [];

  let global_goods_List = [];

//Функція додавання нової станції
exports.AddNewStation = (newStation) =>{ 
    let spacestation = new SpaceStation(newStation);
    global_station_List.push(spacestation);
    return spacestation;
};
//Функція редагування станції в колекції
exports.edit_station = (name, new_Name) => {
    for (let i = 0; i < global_station_List.length; i++) {
        let station = global_station_List[i];
        if (station.name === name) {
            global_station_List[i].name = new_Name;
            return 1;
        }
    }
    return 'There is no station with such name';
}

//Функція видалення станції з колекції
exports.remove_station = (station) => {
    for (let i = 0; i < global_station_List.length; i++) {
        let stationRem = global_station_List[i];
        if (stationRem.name === station.name) {
            global_station_List.splice(i, 1);
            return 1;
        }
    }
    return 'There is no station with such name';
}

//Функція пошуку однієї станції в колекції
exports.find_stantion = (name) => {
    for (let i = 0; i < global_station_List.length; i++) {
        let station = global_station_List[i];
        if (station.name === name) {
            return station;
        }
    }
    return 'There is no station with such name';
}



//Функція додавання планети в колекцію
exports.AddNewPlanet = (newPlanet) =>{
    let planet = new Planet(newPlanet)
    global_Planets_List.push(planet);
    return planet;
}

//Функція редагування планети в колекції
exports.edit_planet = (name, new_Name) => {
    for (let i = 0; i < global_Planets_List.length; i++) {
        let planet = global_Planets_List[i];
        if (planet.name === name) {
            global_Planets_List[i].name = new_Name;
            return 1;
        }
    }
    return 'There is no planet with such name';
}

//Функція видалення планети з колекції
exports.remove_planet = (name) => {
    for (let i = 0; i < global_Planets_List.length; i++) {
        let stationRem = global_Planets_List[i];
        if (stationRem.name === name) {
            global_Planets_List.splice(i, 1);
            return 1;
        }
    }
    return 'There is no planet with such name';
}

//Функція пошуку однієї планети в колекції
exports.find_planet = (name) => {
    for (let i = 0; i < global_Planets_List.length; i++) {
        let planet = global_Planets_List[i];
        if (planet.name === name) {
            return planet;
        }
    }
    return 'There is no planet with such name';
}

//Додавання вантажу до колекції
exports.add_goods = (goods) =>
{
    let good = new Goods (goods)
    global_goods_List.push(good)
    return good;
}

//редагування вантажу в колекції
exports.edit_goods = (name,newName) =>
{
    if(global_goods_List.find(c =>c.name === name) == undefined){
        console.log('there is no goods with such name')
    }
    else{
        global_goods_List.find(c =>c.name === name).name = newName
    }
}

//видалення вантажу з колекції
exports.remove_goods = (name) => {
    for (let i = 0; i < global_goods_List.length; i++) {
        let goodsRem = global_goods_List[i];
        if (goodsRem.name === name) {
            global_goods_List.splice(i, 1);
            return 1;
        }
    }
    return -1;
}

//Функція пошуку всіх станцій планети
exports.get_Stantion_List_on_planet = (name) => {
    console.log("Stantion list on this planet: ");
    if(global_Planets_List.find(c =>c.name === name) == undefined)
    {
        console.log("planet with such name doesn`t exist")
    }
    else
    {
        for (let i = 0; i < global_Planets_List.find(c =>c.name === name).stantionList.length; i++) {
            let stantion = global_Planets_List.find(c =>c.name === name).stantionList[i];
            console.log(`\tStantion name : ${stantion.name}`);
        }
        console.log();
    }

    return global_Planets_List.find(c =>c.name === name).stantionList;
}
module.exports.global_station_List = global_station_List
module.exports.global_Planets_List = global_Planets_List
module.exports.global_goods_List = global_goods_List
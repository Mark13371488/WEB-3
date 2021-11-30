// Необхідні змінні
let last_good_id = 0;
let goods_list = new Array();
let cured_goods_list = new Array();

class Good {


    constructor (name, age, spacestation, planet, id) {
    
        this.id = id;
        this.age = parseInt(age);
        this.name = name;
        this.spacestation = spacestation;
        this.planet = planet;

        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_good_id;   }
        if (age === "" ||
            typeof age      === 'undefined') { this.age      = "Не встановлено";    }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідомий товар"; }
        if (spacestation === "" ||
            typeof spacestation   === 'undefined') { this.spacestation   = "Не призначено";     }
        if (planet === "" ||
            typeof planet === 'undefined') { this.planet = "Не встановлено";    }
    
    }
}


function add_good (name, age, spacestation, planet, id) {

    let good = new Good(name, age, spacestation, planet, id);
    goods_list.push(good);

    return good;

}

// Додавання нового виписаного товару
function add_cured_good (name, age, spacestation, planet, id) {

    let good = new Good(name, age, spacestation, planet, id);
    cured_goods_list.push(good);

    return good;

}

// Видалити товар з колекції
function remove_good (id) {

    for (let z = 0; z < goods_list.length; z++) {

        let good = goods_list[z];
        if (good.id === id) { cured_goods_list.push(good);
                                 goods_list.splice(z, 1);
                                 return 1; }

    }

    return -1;

}

// Видалити виписаного товару з колекції
function remove_cured_good (id) {

    for (let z = 0; z < cured_goods_list.length; z++) {

        let good = cured_goods_list[z];
        if (good.id === id) { cured_goods_list.splice(z, 1);
                                 return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх товарів
function get_goods_list (cured) {

    if (cured) { return cured_goods_list; }
    else       { return goods_list; }

}

// Задаємо список усіх товарів
function set_goods_list (data, cured) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {

        if (cured) {
            add_cured_good(element.name,
                              element.age,
                              element.spacestation,
                              element.planet,
                              element.id);
        }

        else {
            add_good(element.name,
                        element.age,
                        element.spacestation,
                        element.planet,
                        element.id);
        }
    }
}

// Повертає товар по його id
function get_good_by_id (id, cured) {

    let list = cured ? cured_goods_list : goods_list;

    for (let z = 0; z < list.length; z++) {

        let good = list[z];
        if (good.id === id) { return good; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати станцію в колекції
function edit_good (id, new_name, new_age, new_spacestation, new_planet,new_zapovnenist) {

    for (let z = 0; z < goods_list.length; z++) {

        let good = goods_list[z];

        if (good.id === id) { good.age = new_age;
                                 good.name = new_name;
                                 good.spacestation = new_spacestation;
                                 good.planet = new_planet;
                                 return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти станцію в колекції
function find_goods (search, cured) {

    let result = [];
    let list = cured ? cured_goods_list : goods_list;

    search = search.toLowerCase();

    for (let good of list) {

        let attributes = [ good.name,
                           good.spacestation,
                           good.planet
                        ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(good);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список товарів
function print_goods_list (cured) {

    let type = cured ? "виписаних " : "";
    let list = cured ? cured_goods_list : goods_list;

    console.log("\n" + "Список усіх " + type + "товарів:");

    for (let z = 0; z < list.length; z++) {

        let item = list[z];
        console.log("\t" + "Назва товару: " + item.name);
        console.log("\t" + "Вага товару: "    + item.age);
        console.log("\t" + "Станція: "           + item.spacestation);
        console.log("\t" + "Планета: "         + item.planet);
        console.log("\t" + "ID: "              + item.id);

    }
}
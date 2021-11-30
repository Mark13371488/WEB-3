// Необхідні змінні
let last_spacestation_id = 0;
let spacestations_list = new Array();

// Клас - станція
class Spacestation {

    constructor (name, age, planet, id) {
    
        this.id = id;
        this.zapovnenist = 0;
        this.age = age;
        this.name = name;
        this.planet = planet;

        if (id === "" ||
            typeof id       === 'undefined') { this.id       = ++last_spacestation_id;  }
        if (age === "" ||
            typeof age      === 'undefined') { this.age      = "Не встановлено";  }
        if (name === "" ||
            typeof name     === 'undefined') { this.name     = "Невідома станція"; }
        if (planet === "" ||
            typeof planet === 'undefined') { this.planet = "Не встановлено";  }
    
    }
}

// ...............................................................................................

// Додавання нової станції
function add_spacestation (name, age, planet, id) {

    let spacestation = new Spacestation(name, age, planet, id);
    spacestations_list.push(spacestation);

    return spacestation;

}

// Видалити станцію з колекції
function remove_spacestation (id) {

    for (let z = 0; z < spacestations_list.length; z++) {

        let spacestation = spacestations_list[z];
        if (spacestation.id === id) { spacestations_list.splice(z, 1);
                                return 1; }

    }

    return -1;

}
function get_spacestation_by_name (name){
    for(let i = 0;i < set_spacestations_list.length;i++){
        let spacestation = spacestations_list[i];
        if(spacestation.name === name){
            return spacestations_list[i]
        }
    }
    return -1
}
// ...............................................................................................
function pofig (spacestation,age){
    spacestation.zapovnenist +=age;  
}
// Повертаємо список усіх космічних станцій
function get_spacestations_list()
    { return spacestations_list; }

// Задаємо список усіх космічних станцій
function set_spacestations_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_spacestation(element.name,
                   element.age,
                   element.planet,
                   element.id);
    }
}

// Повертає станцію по її id
function get_spacestation_by_id (id) {

    for (let z = 0; z < spacestations_list.length; z++) {

        let spacestation = spacestations_list[z];
        if (spacestation.id === id) { return spacestation; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати станцію в колекції
function edit_spacestation (id, new_name, new_age, new_planet) {

    for (let z = 0; z < spacestations_list.length; z++) {

        let spacestation = spacestations_list[z];

        if (spacestation.id === id) { spacestation.age = new_age;
                                spacestation.name = new_name;
                                spacestation.planet = new_planet;
                                return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти станцію в колекції
function find_spacestations (search) {

    let result = [];
    search = search.toLowerCase();

    for (let spacestation of spacestations_list) {

        let attributes = [ spacestation.name,
                           spacestation.planet ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(spacestation);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список космічних станцій
function print_spacestations_list() {

    console.log("\n" + "Список усіх космічних станцій:");

    for (let z = 0; z < spacestations_list.length; z++) {

        let spacestation = spacestations_list[z];
        console.log("\t" + "Назва: " + spacestation.name);
        console.log("\t" + "Місткість: "    + spacestation.age);
        console.log("\t" + "Планета: "       + spacestation.planet);
        console.log("\t" + "ID: "            + spacestation.id);

    }
}
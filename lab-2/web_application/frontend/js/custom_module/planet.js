// Необхідні змінні
let last_planet_id = 0;
let planets_list = new Array();

// Клас - планета
class Planet {

    constructor (name, address, id) {
    
        this.id = id;
        this.name = name;
        this.address = address;
        
        if (id === "" ||
            typeof id      === 'undefined') { this.id      = ++last_planet_id; }
        if (name === "" ||
            typeof name    === 'undefined') { this.name    = "Невідома планета"; }
        if (address === "" ||
            typeof address === 'undefined') { this.address = "Не встановлено";   }
   
    }
}

// ...............................................................................................

// Додавання нової планети
function add_planet (name, address, id) {

    let planet = new Planet(name, address, id);
    planets_list.push(planet);

    return planet;

}

// Видалення планети з колекції
function remove_planet (id) {

    for (let z = 0; z < planets_list.length; z++) {

        let planet = planets_list[z];
        if (planet.id === id) { planets_list.splice(z, 1);
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Повертаємо список усіх планет
function get_planets_list()
    { return planets_list; }

// Задаємо список усіх планет
function set_planets_list (data) {

    if (!data || data.length < 1) { return; }

    for (let element of data) {
        add_planet(element.name,
                     element.address,
                     element.id);
    }
}

// Повертає планету по її id
function get_planet_by_id (id) {

    for (let z = 0; z < planets_list.length; z++) {

        let planet = planets_list[z];
        if (planet.id === id) { return planet; }

    }

    return -1;

}

// ...............................................................................................

// Редагувати планету в колекції
function edit_planet (id, new_name, new_address) {

    for (let z = 0; z < planets_list.length; z++) {

        let planet = planets_list[z];

        if (planet.id === id) { planet.name = new_name;
                                  planet.address = new_address;
                                  return 1; }

    }

    return -1;

}

// ...............................................................................................

// Знайти планету в колекції
function find_planets (search) {

    let result = [];
    search = search.toLowerCase();

    for (let planet of planets_list) {

        let attributes = [ planet.name,
                           planet.address ];

        for (let attr of attributes) {

            if (attr.toLowerCase().includes(search)) { result.push(planet);
                                                       break;
            }
        }
    }

    return result;

}

// ...............................................................................................

// Вивести в консоль список планет
function print_planets_list() {

    console.log("\n" + "Список усіх планет:");

    for (let z = 0; z < planets_list.length; z++) {

        let planet = planets_list[z];
        console.log("\t" + "Назва планети: "  + planet.name);
        console.log("\t" + "Місткість: " + planet.address);
        console.log("\t" + "ID: "             + planet.id);

    }
}
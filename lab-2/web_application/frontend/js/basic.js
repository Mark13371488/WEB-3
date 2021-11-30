// Необхідні змінні
let search = "";
let divider = `<li><hr class="dropdown-divider"></li>`;

// Створення нового елемента
async function create_element() {

   let target = location.pathname.substring(1);
   target = target.substring(0, target.length - 1);

   if (target === "cured_good") {
      modal_delete_cured_goods();
      return;
   }

   switch (target) {

      case "planet": $("#planet_title").text("Додавання нової планети");
                       $("#planet_yes").text("Додати");
                       break;
      case "spacestation":   $("#spacestation_title").text("Додавання нової станції");
                       $("#spacestation_yes").text("Додати");
                       prepare_planets_for_dropdown(target);
                       break;
      case "good":  $("#good_title").text("Додавання нового товару");
                       $("#good_yes").text("Додати");
                       prepare_planets_for_dropdown(target);
                       break;

   }

   $(`#${target}_yes`).attr("onclick", `modal_update_${target}s(true)`);
   $(`#modal_${target}s`).modal('show');

}

// ...............................................................................................

// Редагування існуючого елемента
async function edit_element (element) {

   let item;
   let target = location.pathname.substring(1);
   target = target.substring(0, target.length - 1);

   let id = parseInt($(element).closest("tr").children().first().text());

   $(`#${target}_title`).text("Редагування даних");
   $(`#${target}_yes`).text("Оновити дані");

   switch (target) {

      case "planet": item = get_planet_by_id(id);
                       $("#planet_name").val(item.name);
                       $("#planet_address").val(item.address);
                       break;
      case "spacestation":   item = get_spacestation_by_id(id);
                       $("#spacestation_age").val(item.age);
                       $("#spacestation_name").val(item.name);
                       $("#spacestation_planet").text(item.planet);
                       prepare_planets_for_dropdown(target);
                       break;
      case "good":  item = get_good_by_id(id);
                       $("#good_age").val(item.age);
                       $("#good_name").val(item.name);
                       $("#good_spacestation").text(item.spacestation);
                       $("#good_planet").text(item.planet);
                       prepare_planets_for_dropdown(target);
                       break;

   }

   $(`#${target}_yes`).attr("onclick", `modal_update_${target}s(false, ${id})`);
   $(`#modal_${target}s`).modal('show');

}

// ...............................................................................................

// Пошук існуючого елемента
function find_element (element) {

   let search = $(element).val();
   let target = location.pathname.substring(1);
   let search_list = [];

   switch (target) {

      case "planets":      search_list = find_planets(search);      break;
      case "spacestations":        search_list = find_spacestations(search);        break;
      case "goods":       search_list = find_goods(search);       break;
      case "cured_goods": search_list = find_goods(search, true); break;

   }

   display_data(search_list);

}

// ...............................................................................................

// Видалення існуючого елемента
function delete_element (item) {

   let button;
   let message;
   let target = location.pathname.substring(1);
   let id = parseInt($(item).closest("tr").children().first().text());

   switch (target) {

      case "planets":
         message = "Ви дійсно хочете видалити інформацію про цю планету";
         button = "Видалити";
         break;

      case "spacestations":
         message = "Ви дійсно хочете видалити інформацію про цю станцію";
         button = "Видалити";
         break;

      case "goods":
         message = "Ви дійсно хочете видалити інформацію про цей товар";
         button = "Видалити";
         break;

      case "cured_goods":
         message = "Ви дійсно хочете видалити інформацію про цей доставлений товар";
         button = "Видалити";
         break;

   }
   
   modal_confirm_create("Повідомлення",
                        `${message}?`,
                        `${button}`,
                        "Відміна",
                        "delete", id);

   $(`#modal_confirm`).modal('show');

}

// ...............................................................................................

// Відобразити дані у таблиці
function display_data (search_list) {

   let data;
   let additional_attr = "";
   let target = location.pathname.substring(1);

   switch (target) {

      case "planets":      data = get_planets_list();
                             break;
      case "spacestations":        data = get_spacestations_list();
                             break;
      case "goods":       data = get_goods_list();
                             additional_attr = "false, ";
                             break;
      case "cured_goods": data = get_goods_list(true);
                             additional_attr = "true, ";
                             break;
   }

   // Якщо поле пошуку не порожнє - відображаємо результат
   if (search_list) { data = search_list; }

   // Очищення таблиць
   clear_table(data.length === 0);

   // Відображення загальної кількості елементів
   $("#total_count").text(`Загальна кількість: ${data.length}`);


   if (target === "cured_goods") { target = "goods"; }

   // Відобразити дані конкретної таблиці
   eval(`display_${target}_data(${additional_attr}data)`);

}

// ...............................................................................................

function display_planets_data (data) {

   for (let element of data) {
   
      let block = 
     `<tr>
         <td> <span class="m-2">${element.id}</span> </td>
         <td>${element.name}</td>
         <td>${element.address}</td>
         <td>${get_icon_code()}</td>
      </tr>`;

      $("#table").append(block);

   }
}


function display_spacestations_data (data) {

   for (let element of data) {
      
      let block =
     `<tr>
         <td> <span class="m-2">${element.id}</span> </td>
         <td>${element.name}</td>
         <td class="fit"> <span class="m-2">${element.age}</span> </td>
         <td>${element.planet}</td>
         <td>${get_icon_code()}</td>
      </tr>`;

      $("#table").append(block);

   }
}

// Відобразити дані про усіх пацієнтів
function display_goods_data (is_cured, data) {

   for (let element of data) {
      
      let block =
     `<tr>
         <td> <span class="m-2">${element.id}</span> </td>
         <td>${element.name}</td>
         <td class=""> <span class="m-2">${element.age}</span> </td>
         <td>${element.spacestation}</td>
         <td>${element.planet}</td>
         <td>${get_icon_code(is_cured)}</td>
      </tr>`;

      $("#table").append(block);

   }
}

// ...............................................................................................

// Вибрана позитивна відповідь у модальному вікні
function modal_confirm() {

   let page = location.pathname.substring(1);

   let target = $("#modal_confirm").attr("target");
   let src = $("#modal_confirm").attr("src");

   switch (target) {

      // Видалення даних
      case "delete":
         let id = parseInt(src);
         page = page.substr(0, page.length - 1);
         eval(`remove_${page}(${id})`);
         display_data();
         save_data();
         break;


      // Видалення усіх даних про виписаних пацієнтів
      case "delete_cured_goods":
         cured_goods_list = [];
         display_data();
         save_data();
         break;

   }
}

// Задання елементів модального вікна підтвердження
function modal_confirm_create (title, message, yes, no, target, src) {

   $(`#modal_confirm_title`).text(title);
   $(`#modal_confirm_message`).text(message);
   $(`#modal_confirm_yes`).text(yes);
   $(`#modal_confirm_no`).text(no);
   $("#modal_confirm").attr("target", target);
   $("#modal_confirm").attr("src", src);

}

// ...............................................................................................


function modal_update_planets (added_new, id) {

   let name    = $("#planet_name").val();
   let address = $("#planet_address").val();

   if (added_new) { add_planet(name, address);      }
   else           { edit_planet(id, name, address); }

   display_data();
   clear_input();
   save_data();

}

function modal_update_spacestations (added_new, id) {

   let name     = $("#spacestation_name").val();
   let age      = $("#spacestation_age").val();
   let planet = $("#spacestation_planet").text();

   planet = planet === "Виберіть планету" ? "Не встановлено" : planet;

   if (added_new) { add_spacestation(name, age, planet);      }
   else           { edit_spacestation(id, name, age, planet); }

   display_data();
   clear_input();
   save_data();

}

// Додавання нового пацієнта або редагування існуючого
function modal_update_goods (added_new, id) {

   let name     = $("#good_name").val();
   let age      = $("#good_age").val();
   let spacestation   = $("#good_spacestation").text();
   let planet = $("#good_planet").text();

   spacestation   = spacestation   === "Виберіть станцію"  ? "Не призначено"  : spacestation;
   planet = planet === "Виберіть планету" ? "Не встановлено" : planet;

   if (added_new) { add_good(name, age, spacestation, planet);
      pofig(get_spacestation_by_id(1),age)
   }
   else           { edit_good(id, name, age, spacestation, planet); }

   display_data();
   clear_input();
   save_data();

}

// ...............................................................................................


function modal_delete_cured_goods() {

   modal_confirm_create("Видалення даних",
                        "Ви дійсно хочете видалити усі наявні дані про виписані товари?",
                        "Очистити",
                        "Відміна",
                        "delete_cured_goods");

   $(`#modal_confirm`).modal('show');

}

// ...............................................................................................


function set_planet (element) {

   let planet = $(element).text();
   let target = location.pathname.substring(1);

   planet = planet === ". . ." ? "Виберіть планету" : planet;

   if (target === "spacestations") { $("#spacestation_planet").text(planet);  }
   else                      { $("#good_planet").text(planet);
                               prepare_spacestations_for_dropdown();        }

}


function set_spacestation (element) {

   let spacestation = $(element).text();

   spacestation = spacestation === ". . ." ? "Виберіть станцію" : spacestation;

   $("#good_spacestation").text(spacestation);

}

// ...............................................................................................

function prepare_planets_for_dropdown (target) {

   let list = $(`#${target}_planets_list`);

   get_data("planets").then((result) => {

      if (result.length != 0) {
         
         list.find("li:not(:first)").remove();
         list.append(divider);

         for (let item of result) {
            list.append(`<li><span class="dropdown-item" ` +
                        `onclick="set_planet(this)">${item.name}</span></li>`);
         }
      }

   });
}

function prepare_spacestations_for_dropdown() {

   $("#good_spacestation").text("Виберіть станцію");

   let list = $("#good_spacestations_list");
   let planet = $("#good_planet").text();
   let divider_is_added = false;

   get_data("spacestations").then((result) => {

      if (result.length != 0) {
         
         list.find("li:not(:first)").remove();

         for (let item of result) {

            if (item.planet === planet) {

               if (!divider_is_added) { list.append(divider);
                                        divider_is_added = true; }

               list.append(`<li><span class="dropdown-item" ` +
                           `onclick="set_spacestation(this)">${item.name}</span></li>`);
            }
         }
      }

   });
}

// ...............................................................................................

// Видалення усіх даних з таблиці 
// Додавання інформаційного повідомлення, якщо таблиця пуста
function clear_table (table_is_empty) {

   let target = location.pathname.substring(1);
   let span = (target === "planets") ? 4 :
              (target === "spacestations") ? 5 : 6;

   $("#table tbody").empty();

   let block =
  `<tr class="text-center text-secondary" id="table_empty">
      <td colspan="${span}"> <span class="mx-5 fs-4">Немає даних для відображення</span> </td>
   </tr>`;

   if (table_is_empty) { $("#table tbody").append(block); }
   else                { $("#table_empty").remove();      }

}

// Очищення полів вводу
function clear_input() {

   let target = location.pathname.substring(1);

   switch (target) {
      
      case "planets": $("#planet_name").val("");
                        $("#planet_address").val("");
                        break;
      case "spacestations":   $("#spacestation_name").val("");
                        $("#spacestation_age").val("");
                        $("#spacestation_planet").text("Виберіть планету");
                        $("#spacestation_planets_list").find("li:not(:first)").remove();
                        break;
      case "goods":  $("#good_name").val("");
                        $("#good_age").val("");
                        $("#good_spacestation").text("Виберіть станцію");
                        $("#good_planet").text("Виберіть планету");
                        $(`#good_spacestations_list`).find("li:not(:first)").remove();
                        $(`#good_planets_list`).find("li:not(:first)").remove();
                        break;
   }
}

// ...............................................................................................

// Метод повертає html код елементів керування таблицею
function get_icon_code (only_delete) {

   // Іконка редагування елемента
   const icon_edit = 
  `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" class="bi bi-pencil-square btn-control mx-1" viewBox="0 0 16 16" onclick="edit_element(this)">
     <path d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"/>
     <path fill-rule="evenodd" d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"/>
   </svg>`;

   // Іконка видалення елемента
   const icon_delete = 
  `<svg xmlns="http://www.w3.org/2000/svg" width="1.2em" height="1.2em" fill="currentColor" class="bi bi-trash btn-control mx-1" viewBox="0 0 16 16" onclick="delete_element(this)">
     <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
     <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
   </svg>`;

   // Блок з іконками
   const icons =
  `<span class="d-flex mx-2">
      ${!only_delete ? icon_edit : ""}${icon_delete}
   </span>`;

   return icons;

}

// ...............................................................................................

function set_age (element) {

   let value = $(element).val();
   value = value.substring(0, 3);
   $(element).val(value);

}

function delay (time) {
   return new Promise((resolve, reject) => {
      setTimeout(() => {
         resolve();
      }, time);
   });
}

// ...............................................................................................

// Очищення даних після закриття модальних вікон
$(document).on("hidden.bs.modal", () => { clear_input(); });

// Виконання коду після завантаження сторінки
jQuery(async () => {

   await load_data();
   display_data();

});
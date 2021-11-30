// Необхідні константи
const use_db = is_db_used();
const server_port = get_server_port();
const server_url = `http://localhost:${server_port}`;

// Перевірка, чи використовувати базу даних
// Якщо ні, то буде використовуватися localStorage
function is_db_used()
   { return $("head").attr("use_db"); }

// Метод повертає порт, який використовується для запуску сервера
function get_server_port()
   { return $("head").attr("server_port"); }

// ...............................................................................................

// Отримання даних із сервера
async function server_GET (req) {

   try {
      
   const res = await fetch(server_url + req,
                           { method: "GET",
                             headers: { "Accept": "application/json" } });

   if (res.ok) { return res.json(); }
   else { throw new Error(); }

   }

   catch (error) {
      
      if (error instanceof TypeError) {

         modal_confirm_create(
            "Помилка",
            "Не вдалося підключитися до сервера за адресою: " + server_url,
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }

      else {

         modal_confirm_create(
            "Помилка",
            "Не вдалося отримати інформацію з бази даних",
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }
   }
}

// Оновлення даних на сервері
async function server_PUT (req, array) {

   try {
   
   let collection;

   switch (req) {
      case "/set_planets":      collection = 1; break;
      case "/set_spacestations":        collection = 2; break;
      case "/set_goods":       collection = 3; break;
      case "/set_cured_goods": collection = 4; break;
      case "/set_identificators": collection = 5; break;
   }
   
   const res = await fetch(server_url + req,
                           { method: "PUT",
                             headers: { "Accept": "application/json",
                                        "Content-Type": "application/json" },
                             body: JSON.stringify({ array: array,
                                                    collection: collection }) }
                             );
   
   if (res.ok) { return res.json(); }
   else { throw new Error(); }
   
   }

   catch (error) {
      
      if (error instanceof TypeError) {

         modal_confirm_create(
            "Помилка",
            "Не вдалося підключитися до сервера за адресою: " + server_url,
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }

      else {

         modal_confirm_create(
            "Помилка",
            "Не вдалося оновити інформацію у базі даних",
            "Зрозуміло",
            "Відміна"
         );

         $(`#modal_confirm`).modal('show');
         console.log(error);

      }
   }
}

// ...............................................................................................

// Зберігання даних
function save_data() {

   if (use_db === "true") { save_data_in_data_base();     }
   else                   { save_data_in_local_storage(); }

}

// Зберігання даних у localStorage
function save_data_in_local_storage() {

   let target = location.pathname.substring(1);

   switch (target) {

      case "planets":
         localStorage.setItem('planets', JSON.stringify(get_planets_list()));
         break;

      case "spacestations":
         localStorage.setItem('spacestations', JSON.stringify(get_spacestations_list()));
         break;

      case "goods":
         localStorage.setItem('goods', JSON.stringify(get_goods_list()));
         localStorage.setItem('cured_goods', JSON.stringify(get_goods_list(true)));
         break;

      case "cured_goods":
         localStorage.setItem('cured_goods', JSON.stringify(get_goods_list(true)));
         break;

   }

   let identificators = [{ "name":"last_planet_id","value":last_planet_id },
                         { "name":"last_spacestation_id",  "value":last_spacestation_id   },
                         { "name":"last_good_id", "value":last_good_id  }];

   localStorage.setItem('identificators', JSON.stringify(identificators));

}

// Зберігання даних у базу даних
function save_data_in_data_base() {

   let target = location.pathname.substring(1);

   switch (target) {

      case "planets":
         server_PUT("/set_planets", get_planets_list());
         break;

      case "spacestations":
         server_PUT("/set_spacestations", get_spacestations_list());
         break;

      case "goods":
         server_PUT("/set_goods", get_goods_list());
         server_PUT("/set_cured_goods", get_goods_list(true));
         break;

      case "cured_goods":
         server_PUT("/set_cured_goods", get_goods_list(true));
         break;

   }

   let identificators = [{ "name":"last_planet_id","value":last_planet_id },
                         { "name":"last_spacestation_id",  "value":last_spacestation_id   },
                         { "name":"last_good_id", "value":last_good_id  }];

   server_PUT("/set_identificators", identificators);

}

// ...............................................................................................

// Завантаження даних
async function load_data() {

   if (use_db === "true") { await load_data_from_data_base();     }
   else                   { await load_data_from_local_storage(); }

}

// Завантаження даних з localStorage
async function load_data_from_local_storage() {

   let item;
   let target = location.pathname.substring(1);

   switch (target) {

      case "planets":
         item = JSON.parse(localStorage.getItem("planets"));
         set_planets_list(item ? item : []);
         break;

      case "spacestations":
         item = JSON.parse(localStorage.getItem("spacestations"));
         set_spacestations_list(item ? item : []);
         break;

      case "goods":
         item = JSON.parse(localStorage.getItem("goods"));
         set_goods_list(item ? item : []);
         item = JSON.parse(localStorage.getItem("cured_goods"));
         set_goods_list(item ? item : [], true);
         break;

      case "cured_goods":
         item = JSON.parse(localStorage.getItem("cured_goods"));
         set_goods_list(item ? item : [], true);
         break;

   }

   let identificators = JSON.parse(localStorage.getItem("identificators"));
   if (!identificators) { identificators = []; }

   for (let item of identificators) {
      if (item.name === "last_planet_id") { last_planet_id = item.value; }
      if (item.name === "last_spacestation_id")   { last_spacestation_id   = item.value; }
      if (item.name === "last_good_id")  { last_good_id  = item.value; }
   }
}

// Завантаження даних з бази даних
async function load_data_from_data_base() {

   let target = location.pathname.substring(1);

   switch (target) {

      case "planets":
         await server_GET("/get_planets").then((res) =>
            { set_planets_list(res); });
         break;

      case "spacestations":
         await server_GET("/get_spacestations").then((res) =>
            { set_spacestations_list(res); });
         break;

      case "goods":
         await server_GET("/get_goods").then((res) =>
            { set_goods_list(res); });
         await server_GET("/get_cured_goods").then((res) =>
            { set_goods_list(res, true); });
         break;

      case "cured_goods":
         await server_GET("/get_cured_goods").then((res) =>
            { set_goods_list(res, true); });
         break;

   }

   await server_GET("/get_last_planet_id").then((res) =>
      { if (res && res.length > 0) { last_planet_id = res[0].value; }});

   await server_GET("/get_last_spacestation_id").then((res) =>
      { if (res && res.length > 0) { last_spacestation_id = res[0].value; }});

   await server_GET("/get_last_good_id").then((res) =>
      { if (res && res.length > 0) { last_good_id = res[0].value; }});

}

// Отримання даних
async function get_data (data) {

   if (use_db === "true") { return await get_data_from_data_base(data);     }
   else                   { return await get_data_from_local_storage(data); }

}

// Отримання даних з localStorage
async function get_data_from_local_storage (data) {
   
   try           { return JSON.parse(localStorage.getItem(data)); }
   catch (error) { return [];                                     }

}


// Отримання даних з бази даних
async function get_data_from_data_base (data) {

   try           { return await server_GET(`/get_${data}`); }
   catch (error) { return [];                               }

}
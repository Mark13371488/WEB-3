// ...............................................................................................
// Підключення модулів ...........................................................................

// Підключаємо express - веб фреймворк
const express = require("express");

// Підключаємо path - модуль для роботи із шляхами
const path = require("path");

// Підключаємо mongodb - модуль для роботи з MongoDB
const mongo_client = require("mongodb").MongoClient;

// Підключаємо cors - модуль для увімкненя Cross-Origin Resource Sharing
const cors = require ("cors"); 

// ...............................................................................................
// Створення необхідних констант та змінних ......................................................

// Назва бази даних
const db_name = "web_application";

// Доступ до функцій модуля express
const exp = express();
const parser = express.json();

// Порт доступу до локального сервера
const PORT = process.env.npm_package_config_port_backend || 3000;

// Шлях до директорії проекту
const dir_proj = path.join(__dirname, "/../../");

// Шлях до директорії бекенду
const dir_back = __dirname;

// Шлях до директорії view-елементів
const dir_views = path.join(dir_back, "/views");

// Створення об'єкту для підключення до бази даних
const mongo = new mongo_client("mongodb://localhost:27017/", { useUnifiedTopology: true });

// Створення об'єкту для доступу до бази даних
let db_client;

// ...............................................................................................

// Увімкнення CORS-запитів
exp.use(cors());

// Встановлюємо директорію для віддачі статичного контенту
// У нашому випадку це буде директорія проекту
exp.use(express.static(dir_proj));

// Задаємо шаблонізатор, який буде використовуватися для відображення веб-сторінок
exp.set("view engine", "ejs");

// Задаємо шлях до view-елементів
exp.set("views", dir_views);

// Під'єднюємося до бази даних
mongo.connect((error, client) => {

  // Виводимо в консоль можливу помилку
  if (error) { return console.log(error); }

  // Ініціалізуємо об'єкт <db_client>
  db_client = client;

  // Отримуємо доступ до колекцій в базі даних
  exp.locals.planets      = client.db(db_name).collection("planets");
  exp.locals.spacestations        = client.db(db_name).collection("spacestations");
  exp.locals.goods       = client.db(db_name).collection("goods");
  exp.locals.cured_goods = client.db(db_name).collection("cured_goods");
  exp.locals.identificators = client.db(db_name).collection("identificators");

  // Запускаємо локальний сервер
  exp.listen(PORT, () => {

    // Виводимо інформаційне повідомлення
    console.log(`Backend server is started on ${PORT} port`);
    console.log(`Url: http://localhost:${PORT}`);

  });
});

// ...............................................................................................
// Налаштовуємо маршрутизацію

// ... для головної сторінки
exp.get(["/", "/index"], (req, res) => {
  res.render("pages/index", { title: "/index",
                              port: PORT });
});

// ... для запиту /get_planets
exp.get("/get_planets", (req, res) => {

  collection = req.app.locals.planets;
  collection.find({}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для запиту /get_spacestations
exp.get("/get_spacestations", (req, res) => {

  collection = req.app.locals.spacestations;
  collection.find({}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для запиту /get_goods
exp.get("/get_goods", (req, res) => {

  collection = req.app.locals.goods;
  collection.find({}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для запиту /get_cured_goods
exp.get("/get_cured_goods", (req, res) => {

  collection = req.app.locals.cured_goods;
  collection.find({}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для запиту /get_last_hostipal_id
exp.get("/get_last_planet_id", (req, res) => {

  collection = req.app.locals.identificators;
  collection.find({name: "last_planet_id"}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для запиту /get_last_spacestation_id
exp.get("/get_last_spacestation_id", (req, res) => {

  collection = req.app.locals.identificators;
  collection.find({name: "last_spacestation_id"}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для запиту /get_last_good_id
exp.get("/get_last_good_id", (req, res) => {

  collection = req.app.locals.identificators;
  collection.find({name: "last_good_id"}).toArray((error, result) => {

    if (error) { console.log(error);
                 res.sendStatus(500); }
    else       { res.send(result); }

  });
});

// ... для /set_... запитів
exp.put(["/set_planets",
         "/set_spacestations",
         "/set_goods",
         "/set_cured_goods",
         "/set_identificators"], parser, async (req, res) => {

  if (!req.body) { return res.sendStatus(400); }

  let array      = req.body.array;
  let collection = req.body.collection;

  switch (collection) {
    case 1: collection = req.app.locals.planets;      break;
    case 2: collection = req.app.locals.spacestations;        break;
    case 3: collection = req.app.locals.goods;       break;
    case 4: collection = req.app.locals.cured_goods; break;
    case 5: collection = req.app.locals.identificators; break;
  }

  try {

    let result;
    await collection.deleteMany({});

    if (array.length === 0) { result = array; }
    else                    { result = await collection.insertMany(array); }

    return res.send(result);

  }

  catch (error) {

    console.log(error);
    return res.sendStatus(500);

  }

});

// ... для інших запитів
exp.use((req, res) => {

  res.sendStatus(400);

});

// ...............................................................................................

// Прослуховуємо переривання роботи сервера (ctrl-c)
process.on("SIGINT", () => {

  console.log("\n" + "Server is stopped");
  db_client.close();  
  process.exit();

});

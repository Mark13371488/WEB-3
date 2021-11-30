// ...............................................................................................
// Підключення модулів ...........................................................................

// Підключаємо express - веб фреймворк
const express = require("express");

// Підключаємо path - модуль для роботи із шляхами
const path = require("path");

// ...............................................................................................
// Створення необхідних змінних ..................................................................

// Доступ до функцій модуля express
const exp = express();

// Порт доступу до локального сервера
const PORT = process.env.npm_package_config_port_frontend || 8080;

// Допоміжні константи
const USE_DB = process.argv[2] === "use_db=true" ? true : false;
const SERVER_PORT = process.env.npm_package_config_port_backend || 3000;

// Шлях до директорії проекту
const dir_proj = path.join(__dirname, "/../../");

// Шлях до директорії фронтенду
const dir_front = __dirname;

// Шлях до директорії view-елементів
const dir_views = path.join(dir_front, "/views");

// ...............................................................................................

// Встановлюємо директорію для віддачі статичного контенту
// У нашому випадку це буде директорія проекту
exp.use(express.static(dir_proj));

// Задаємо шаблонізатор, який буде використовуватися для відображення веб-сторінок
exp.set("view engine", "ejs");

// Задаємо шлях до view-елементів
exp.set("views", dir_views);

// ...............................................................................................
// Налаштовуємо маршрутизацію

// ... для головної сторінки
exp.get(["/", "/index"], (req, res) => {
  res.render("pages/index", { title: "Головна сторінка",
                              use_db: USE_DB,
                              server_port: SERVER_PORT,
                              page_id: "0" });
});


exp.get("/planets", (req, res) => {
  res.render("pages/planets", { title: "Планети",
                                  use_db: USE_DB,
                                  server_port: SERVER_PORT,
                                  add_button: "Додати нову планету",
                                  page_id: "1" });
});


exp.get("/spacestations", (req, res) => {
  res.render("pages/spacestations", { title: "Космічні станції",
                                use_db: USE_DB,
                                server_port: SERVER_PORT,
                                add_button: "Додати нову станцію",
                                page_id: "2" });
});


exp.get("/goods", (req, res) => {
  res.render("pages/goods", { title: "Товар",
                                 use_db: USE_DB,
                                 server_port: SERVER_PORT,
                                 add_button: "Додати новий товар",
                                 page_id: "3" });
});


exp.get("/cured_goods", (req, res) => {
  res.render("pages/cured_goods", { title: "Доставлений товар",
                                       use_db: USE_DB,
                                       server_port: SERVER_PORT,
                                       add_button: "Очистити дані",
                                       page_id: "4" });
});

// ... для помилкової сторінки - "Сторінку не знайдено"
exp.use((req, res) => {
  res.status(404);
  res.render("pages/404", { title: "Error 404",
                            use_db: USE_DB,
                            server_port: SERVER_PORT,
                            page_id: "-1",
                            path: req.path });
});

// ...............................................................................................

// Запускаємо локальний сервер
exp.listen(PORT);

// Виводимо інформаційне повідомлення
console.log(`Frontend server is started on ${PORT} port`);
console.log(`Url: http://localhost:${PORT}`);

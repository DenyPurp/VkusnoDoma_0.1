const RECIPES = [
  { title: "Борщ классический", url: "recipes/borscht.html", cat: "Первое", time: 90, kcal: 190, difficulty: "средняя", img: "assets/img/borscht.jpg", tags: ["суп", "борщ", "свекла"] },
  { title: "Куриный суп с лапшой", url: "recipes/chicken-soup.html", cat: "Первое", time: 50, kcal: 120, difficulty: "лёгкая", img: "assets/img/soup.jpg", tags: ["суп", "курица"] },
  { title: "Том ям с креветками", url: "recipes/tom-yam.html", cat: "Первое", time: 30, kcal: 180, difficulty: "лёгкая", img: "assets/img/tom-yam.jpg", tags: ["суп", "креветки", "азиатская"] },
  { title: "Шашлык из свинины", url: "recipes/shashlik.html", cat: "Второе", time: 180, kcal: 490, difficulty: "средняя", img: "assets/img/shashlik.jpg", tags: ["шашлык", "мясо"] },
  { title: "Гуляш из говядины", url: "recipes/gulyash.html", cat: "Второе", time: 90, kcal: 320, difficulty: "средняя", img: "assets/img/gulyash.jpg", tags: ["гуляш", "говядина", "ужин"] },
  { title: "Курица тушёная с овощами", url: "recipes/kuritsa-tushenaya.html", cat: "Второе", time: 60, kcal: 210, difficulty: "лёгкая", img: "assets/img/kuritsa-tushenaya.jpg", tags: ["курица", "овощи", "обед"] },
  { title: "Паста карбонара", url: "recipes/carbonara.html", cat: "Второе", time: 25, kcal: 540, difficulty: "лёгкая", img: "assets/img/carbonara.jpg", tags: ["паста", "карбонара", "итальянская"] },
  { title: "Лазанья", url: "recipes/lazanya.html", cat: "Второе", time: 80, kcal: 390, difficulty: "средняя", img: "assets/img/lazanya.jpg", tags: ["лазанья", "фарш", "итальянская"] },
  { title: "Лапша вок с курицей", url: "recipes/vok-lapsha.html", cat: "Второе", time: 25, kcal: 360, difficulty: "лёгкая", img: "assets/img/vok-lapsha.jpg", tags: ["вок", "лапша", "курица"] },
  { title: "Салат Оливье", url: "recipes/olivie.html", cat: "Салаты", time: 40, kcal: 280, difficulty: "лёгкая", img: "assets/img/olivie.jpg", tags: ["салат", "оливье", "праздник"] },
  { title: "Салат Цезарь с курицей", url: "recipes/caesar.html", cat: "Салаты", time: 25, kcal: 340, difficulty: "лёгкая", img: "assets/img/caesar.jpg", tags: ["салат", "цезарь", "быстрые"] },
  { title: "Торт Наполеон", url: "recipes/napoleon.html", cat: "Выпечка", time: 180, kcal: 460, difficulty: "сложная", img: "assets/img/napoleon.jpg", tags: ["торт", "выпечка", "праздник"] },
  { title: "Шарлотка с яблоками", url: "recipes/sharlotka.html", cat: "Выпечка", time: 50, kcal: 240, difficulty: "лёгкая", img: "assets/img/sharlotka.jpg", tags: ["шарлотка", "яблоки", "выпечка"] },
  { title: "Блины на молоке", url: "recipes/bliny.html", cat: "Завтрак", time: 30, kcal: 230, difficulty: "лёгкая", img: "assets/img/bliny.jpg", tags: ["блины", "завтрак"] },
  { title: "Сырники", url: "recipes/syrniki.html", cat: "Завтрак", time: 25, kcal: 250, difficulty: "лёгкая", img: "assets/img/syrniki.jpg", tags: ["сырники", "завтрак", "быстрые"] }
];

function prefix() {
  return document.body.dataset.base || "";
}

function withBase(path) {
  return prefix() + path;
}

function headerHTML(active) {
  const b = prefix();
  return `
    <header class="site-header">
      <div class="wrap header-inner">
        <a class="logo" href="${b}index.html">
          <span class="logo-mark">ВД</span>
          ВкусноДома
        </a>
        <nav class="nav">
          <a class="${active === "home" ? "active" : ""}" href="${b}index.html">Главная</a>
          <details>
            <summary>Рецепты</summary>
            <div class="mega mega-groups">
              <a class="mega-all" href="${b}recipes/index.html">Все рецепты</a>
              <div>
                <span class="mega-label">Тип блюда</span>
                <a href="${b}recipes/soups.html">Первое</a>
                <a href="${b}recipes/mains.html">Второе</a>
                <a href="${b}recipes/salads.html">Салаты</a>
                <a href="${b}recipes/baking.html">Выпечка</a>
              </div>
              <div>
                <span class="mega-label">Приём пищи</span>
                <a href="${b}recipes/breakfasts.html">Завтрак</a>
                <a href="${b}recipes/obed.html">Обед</a>
                <a href="${b}recipes/uzhin.html">Ужин</a>
              </div>
              <div>
                <span class="mega-label">Способ</span>
                <a href="${b}recipes/zharka.html">Жарка</a>
                <a href="${b}recipes/tushenie.html">Тушение</a>
                <a href="${b}recipes/varka.html">Варка</a>
                <a href="${b}recipes/zapekanie.html">Запекание</a>
              </div>
              <div>
                <span class="mega-label">Кухня</span>
                <a href="${b}recipes/russkaya.html">Русская</a>
                <a href="${b}recipes/italyanskaya.html">Итальянская</a>
                <a href="${b}recipes/aziatskaya.html">Азиатская</a>
              </div>
            </div>
          </details>
          <a class="${active === "collections" ? "active" : ""}" href="${b}collections/index.html">Подборки</a>
          <a class="${active === "articles" ? "active" : ""}" href="${b}articles/index.html">Статьи</a>
          <a class="${active === "about" ? "active" : ""}" href="${b}about.html">О проекте</a>
          <a class="${active === "contacts" ? "active" : ""}" href="${b}contacts.html">Контакты</a>
        </nav>
        <form class="search-form" action="${b}search.html" method="get">
          <input type="search" name="q" placeholder="Найти рецепт" aria-label="Поиск рецептов">
          <button type="submit">Найти</button>
        </form>
      </div>
    </header>`;
}

function footerHTML() {
  const b = prefix();
  return `
    <footer class="site-footer">
      <div class="wrap footer-grid">
        <div>
          <strong class="serif">ВкусноДома</strong>
          <p class="tiny">Домашние рецепты с понятной структурой: категории, подборки и пошаговые инструкции.</p>
        </div>
        <div>
          <strong>Разделы</strong><br>
          <a href="${b}recipes/index.html">Каталог рецептов</a><br>
          <a href="${b}collections/quick.html">Быстрые рецепты</a><br>
          <a href="${b}articles/index.html">Кулинарные статьи</a>
        </div>
        <div>
          <strong>Проект</strong><br>
          <a href="${b}about.html">О проекте</a><br>
          <a href="${b}faq.html">Вопросы и ответы</a><br>
          <a href="${b}contacts.html">Контакты</a>
        </div>
      </div>
    </footer>`;
}

function renderChrome() {
  const active = document.body.dataset.active || "";
  document.body.insertAdjacentHTML("afterbegin", headerHTML(active));
  document.body.insertAdjacentHTML("beforeend", footerHTML());
}

function renderSearch() {
  const box = document.querySelector("[data-search-results]");
  if (!box) return;
  const q = new URLSearchParams(location.search).get("q") || "";
  const field = document.querySelector('input[name="q"]');
  if (field) field.value = q;
  const query = q.trim().toLowerCase();
  const found = RECIPES.filter((item) => {
    const hay = (item.title + " " + item.cat + " " + item.tags.join(" ")).toLowerCase();
    return !query || hay.includes(query);
  });
  box.innerHTML = found.length
    ? found.map((item) => cardHTML(item)).join("")
    : `<div class="empty">Ничего не нашлось по запросу «${q}». Попробуйте «борщ», «салат» или «блин».</div>`;
}

function cardHTML(item) {
  const kcal = item.kcal ? `<span>${item.kcal} ккал</span>` : "";
  return `
    <article class="card">
      <a href="${withBase(item.url)}"><img src="${withBase(item.img)}" alt="${item.title}"></a>
      <div class="card-body">
        <div class="meta"><span class="chip">${item.cat}</span><span>${item.time} мин</span>${kcal}</div>
        <h3><a href="${withBase(item.url)}">${item.title}</a></h3>
      </div>
    </article>`;
}

document.addEventListener("DOMContentLoaded", () => {
  renderChrome();
  renderSearch();
});

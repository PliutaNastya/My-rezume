(() => {
    "use strict";
    const dictionary = {
        en: {
            "homepage.title": "Anastasiia Pliuta",
            "education.title": "Courses",
            "contact.title": "Contact",
            "phone.title": "Phone",
            "telegram.title": "Telegram",
            "profession.title": "HTML Developer",
            "about.subtitle": "About me",
            "about.text": "Hello! I am a junior front-end developer. Successfully completed relevant courses at the Hillel IT school, where studied HTML, CSS, SASS/SCSS, BEM, GIT, JavaScript, React. Specializing in the develop of adaptive, reliable and cross-browser sites.",
            "projects.title": "My projects",
            "project1.title": "Online School Landing Page",
            "project2.title": "Wedding Gifts Landing Page",
            "project3.title": "Landing Page on Bootstrap",
            "skills.title": "My skills"
        },
        ua: {
            "homepage.title": "Анастасія Плюта",
            "education.title": "Курси",
            "contact.title": "Контакти",
            "phone.title": "Телефон",
            "telegram.title": "Телеграм",
            "profession.title": "Верстальник",
            "about.subtitle": "Про мене",
            "about.text": "Привіт! Я починаючий Front-end розробник. Успішно закінчила відповідні курси в IT-школі Hillel, в якій вивчала HTML, CSS, SASS/SCSS, BEM, GIT, JavaScript, React. Спеціалізуюся на верстці адаптивних, надійних та кросбраузерних сайтів.",
            "projects.title": "Мої роботи",
            "project1.title": "Сторінка онлайн школи",
            "project2.title": "Сторінка весільних подарунків",
            "project3.title": "Сторінка на Bootstrap",
            "skills.title": "Мої навички"
        },
        ru: {
            "homepage.title": "Анастасия Плюта",
            "education.title": "Курсы",
            "contact.title": "Контакты",
            "phone.title": "Телефон",
            "telegram.title": "Телеграм",
            "profession.title": "Верстальщик",
            "about.subtitle": "Обо мне",
            "about.text": "Привет! Я начинающий Front-end разработчик. Успешно окончила соответствующие курсы в IT-школе Hillel, в которой изучала HTML, CSS, SASS/SCSS, BEM, GIT, JavaScript, React. Специализируюсь на верстке адаптивных, надежных и кроссбраузерных сайтов.",
            "projects.title": "Мои работы",
            "project1.title": "Страница онлайн школы",
            "project2.title": "Страница свадебных подарков",
            "project3.title": "Страница на Bootstrap",
            "skills.title": "Мои навыки"
        }
    };
    const functions_select = document.querySelector("select");
    function setLang(lang = "en") {
        document.querySelectorAll("[data-lang-id]").forEach((elem => {
            const id = elem.getAttribute("data-lang-id");
            elem.innerText = dictionary[lang][id];
        }));
    }
    setLang();
    functions_select.addEventListener("change", (({target: {value}}) => {
        setLang(value);
    }));
    function isWebp() {
        function testWebP(callback) {
            let webP = new Image;
            webP.onload = webP.onerror = function() {
                callback(2 == webP.height);
            };
            webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
        }
        testWebP((function(support) {
            let className = true === support ? "webp" : "no-webp";
            document.documentElement.classList.add(className);
        }));
    }
    let addWindowScrollEvent = false;
    setTimeout((() => {
        if (addWindowScrollEvent) {
            let windowScroll = new Event("windowScroll");
            window.addEventListener("scroll", (function(e) {
                document.dispatchEvent(windowScroll);
            }));
        }
    }), 0);
    window["FLS"] = true;
    isWebp();
    setLang();
})();
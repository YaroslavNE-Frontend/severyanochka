


// МОДАЛЬНОЕ ОКНО
//Открыть/Закрыть модальное окно

const OpenBtn = document.getElementById('sign-in');
const ModalWrapper = document.querySelector('.modal__wrapper');
const CloseBtn = document.querySelector('.icon-close-btn');
const ModalAll = document.querySelector('.modal__wrapper .modal');

OpenBtn.addEventListener('click', (e) => {
    ModalWrapper.classList.toggle('open');
})

CloseBtn.addEventListener('click', (e) => {
    ModalWrapper.classList.toggle('open');
})

// Закрыть модальное окно Esc

window.addEventListener('keydown', (e) => {
    if (e.key === "Escape") {
        ModalWrapper.classList.remove('open')
    }
});

//Закрыть модальное окно при клике в не окна
ModalAll.addEventListener('click', event => {
    event._isClickWithInModal = true;
});

ModalWrapper.addEventListener('click', event => {
    if (event._isClickWithInModal) return;
    event.currentTarget.classList.remove('open');
});

// ПОИСК

document.querySelector('#product').oninput = function () {
    let val = this.value.trim();
    let productItem = document.querySelectorAll('.product-text');
    if (val != '') {
        productItem.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('none');
                elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('none');
                let str = elem.innerText;
                elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        productItem.forEach(function (elem) {
            elem.classList.remove('none');
            elem.innerHTML = elem.innerText;
        });
    }
}

// ВЫДЕЛЕНИЕ ТЕКСТА ПРИ ВВОДЕ В ПОИСК

function insertMark(string, pos, len) {
    return string.slice(0, pos) + '<span class="excretion-text">' + string.slice(pos, pos + len) + '</span>' + string.slice(pos + len);
}

// Подстановка нужной ссылки по клику 

const TrafficLight = document.getElementById("traffic__light")
const FiveShop = document.getElementById("five__shop")
const Ekonomych = document.getElementById("ekonomych")
const Eldorado = document.getElementById("eldorado")
const IframeMap = document.getElementById("map-ourshops")
const OurshopsMapReset = document.getElementById("ourshops__map-reset")
const OurshopsLink = document.querySelectorAll(".ourshops-link")

function removeActiveClass() {
    OurshopsLink.forEach((link) => link.classList.remove('active'));
}

TrafficLight.addEventListener('click', event => {
    IframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2453.720077599468!2d113.48732007642808!3d52.04841097194133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dca355d3ad115af%3A0x1da1a27c5b719cbe!2z0KHQstC10YLQvtGE0L7RgA!5e0!3m2!1sru!2sru!4v1699523920901!5m2!1sru!2sru";
    removeActiveClass();
    TrafficLight.classList.add("active");

});

FiveShop.addEventListener('click', event => {
    IframeMap.src = "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2453.614977523071!2d113.4443671!3d52.050325!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x416555046e6bd16d%3A0x5a47670a0a01950!2z0J_Rj9GC0ZHRgNC-0YfQutCw!5e0!3m2!1sru!2sru!4v1699523756165!5m2!1sru!2sru";
    removeActiveClass();
    FiveShop.classList.add("active");
});

Ekonomych.addEventListener('click', event => {
    IframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d78507.80800448892!2d113.27359982548762!3d52.05480441756078!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dca4a783704a7e3%3A0x5e157e53367e5cf5!2z0K3QutC-0L3QvtC80YvRhw!5e0!3m2!1sru!2sru!4v1699524016701!5m2!1sru!2sru";
    removeActiveClass();
    Ekonomych.classList.add("active");
});

Eldorado.addEventListener('click', event => {
    IframeMap.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d19634.116782347995!2d113.49074129833112!3d52.0384936540629!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5dca351a5f637951%3A0x49cbbacab09afc14!2z0K3Qu9GM0LTQvtGA0LDQtNC-!5e0!3m2!1sru!2sru!4v1699524076179!5m2!1sru!2sru";
    removeActiveClass();
    Eldorado.classList.add("active");
});

OurshopsMapReset.addEventListener('click', event => {
    IframeMap.src = "https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d2453.6149790637746!2d113.44436707642816!3d52.05032497194186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2sru!4v1699519574548!5m2!1sru!2sru";
    removeActiveClass();
    OurshopsMapReset.classList.add("active");
})










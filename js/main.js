


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




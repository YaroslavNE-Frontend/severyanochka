// const CatalogBtn = document.querySelector('.catalog-btn');
// const CatalogList = document.querySelector('.catalog-list');

// CatalogBtn.onclick  = () => {
//     CatalogList.classList.toggle('active');
// }


// const NewBtn = document.querySelector('new-btn');
// const Modal = document.querySelector('modal__wrapper');

// NewBtn.onclick  = () => {
//     Modal.classList.toggle('none');
// }


// МОДАЛЬНОЕ ОКНО


const OpenBtn = document.querySelector('.sign-in');
const ModalWrapper = document.querySelector('.modal__wrapper');
const CloseBtn = document.querySelector('.icon-close-btn');

OpenBtn.addEventListener('click', (e) => {
    ModalWrapper.classList.toggle('none');
});

CloseBtn.addEventListener('click', (e) => {
    ModalWrapper.classList.toggle('none');
});


// ПОИСК

document.querySelector('#product').oninput = function () {
    let val = this.value.trim();
    let productItem = document.querySelectorAll('.product-list li');
    if (val != '') {
        productItem.forEach(function (elem) {
            if (elem.innerText.search(val) == -1) {
                elem.classList.add('none');
                // elem.innerHTML = elem.innerText;
            }
            else {
                elem.classList.remove('none');
                // let str = elem.innerText;
                // elem.innerHTML = insertMark(str, elem.innerText.search(val), val.length);
            }
        });
    }
    else {
        productItem.forEach(function (elem) {
            elem.classList.remove('none');
            // elem.innerHTML = elem.innerText;
        });
    }
}

// ВЫДЕЛЕНИЕ ТЕКСТА ПРИ ВВОДЕ В ПОИСК

// function insertMark(string, pos, len) {
//     return string.slice(0, pos) + '<mark>' + string.slice(pos, pos + len) + '</mark>' + string.slice(pos + len);
// }




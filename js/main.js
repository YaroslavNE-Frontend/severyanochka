const CatalogBtn = document.querySelector('.catalog-btn');
const CatalogList = document.querySelector('.catalog-list');

CatalogBtn.onclick  = () => {
    CatalogList.classList.toggle('active');
}

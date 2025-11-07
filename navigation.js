const hambugerIcon = document.querySelector('.fa-bars');
const verticalItems = document.querySelector('.vertical-items');

hambugerIcon.addEventListener("click", showNavItems);

function showNavItems() {
    hambugerIcon.classList.toggle('active');
    verticalItems.classList.toggle('active');
}


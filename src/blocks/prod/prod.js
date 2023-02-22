const prodBtn = document.querySelectorAll('.prod__btn');
const prodImage = document.querySelectorAll('.prod__image');

for (let item of prodBtn) {

    item.addEventListener('click', function() {

        for (let element of prodImage) {
            element.classList.remove('prod__image--active')
        }

        const content = document.querySelector('#' + item.dataset.tab);
        content.classList.add('prod__image--active')

    })
}
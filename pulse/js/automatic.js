let itemsTitle = document.querySelectorAll(`.catalog-item__subtitle`)

function changeTitle(...args) {
    itemsTitle.forEach((item, i) => {
        item.textContent = args[i]
    })
}

changeTitle(1,2,3,4,5,6,7,8,9)
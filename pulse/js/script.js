$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        variableWidth: true,
        prevArrow: `<button type="button" class="slick-prev" ><img src ="icons/left.svg"></button>`,
        nextArrow: `<button type="button" class="slick-next" ><img src ="icons/right.svg"></button>`,
        responsive: [{
            breakpoint: 768,
            settings: {
                dots: true,
                arrows: false
            }
        }]
    });

    let tab = document.querySelector('.catalog__tabs');
    let tabs = document.querySelectorAll('.catalog__tab')
    let catalogs = document.querySelectorAll('.catalog__content')

    tab.addEventListener('click', (e) => {
        togleActive(e);
    })

    function togleActive(e) {
        tabs.forEach((item, i) => {
            if (e.target.parentElement == item) {
                item.classList.add('catalog__tab_active')
                catalogs[i].classList.add('catalog__content_active')
            } else {
                item.classList.remove('catalog__tab_active')
                catalogs[i].classList.remove('catalog__content_active')
            }

        })
    }

    let wrappers = document.querySelectorAll(`.catalog-item__wrapper`)
    wrappers.forEach((item) => {
        item.addEventListener(`click`, (evt) => {
            evt.preventDefault()
            if (evt.target = HTMLAnchorElement) {
                showList(evt)
            }
        })
    })

    function showList(evt) {
        evt.currentTarget.children[0].classList.toggle('catalog-item__content_active')
        evt.currentTarget.children[1].classList.toggle('catalog-item__list_active')
    }

    //modal
    let modalButtons = document.querySelectorAll(`button[data-modal=consultation]`);
    modalButtons.forEach((item) => {
        item.addEventListener('click', () => {
            openWindows(`.overlay`, `#consultation`)
        })

    })
    let popaps = document.querySelectorAll(`.modal__close`)
    popaps.forEach((item) => {
        item.addEventListener('click', () => {
            closeWindows(`#consultation`, `.overlay`, `#thanks`, `#order`)
        })
    })
    let btn_mini = document.querySelectorAll(`.button_mini`)
    btn_mini.forEach((item, index) => {
        item.addEventListener(`click`, () => {
            openWindows('#order', `.overlay`);
            document.querySelector(`#order`)
                .querySelector(`.modal__descr`)
                .textContent = itemsTitle[index].textContent
        })
    })

    function closeWindows(...args) {
        args.forEach((item) => {
            document.querySelector(item).style.display = `none`
        })
    }

    function openWindows(...args) {
        args.forEach((item) => {
            document.querySelector(item).style.display = `block`
        })
    }

    let forms = document.querySelectorAll('form')
    forms.forEach((item) => {
        item.addEventListener('submit', async (e) => {
            e.preventDefault();

            let response = await fetch("mailer/mailer/smart.php", {
                method: 'POST',
                body: new FormData(item)
            })
            let result = await response.text()
            closeWindows(`#order`, `#consultation`)
            openWindows(`#thanks`)

        })
    })

    //smootg scroll and pageup
    window.addEventListener(`scroll`, () => {
        //    document.querySelector(`.pageup`).innerHTML = pageYOffset
        if (pageYOffset > 1600) {
            openWindows(`.pageup`)
        } else {
            closeWindows(`.pageup`)
        }

    })
    document.querySelector('.pageup').addEventListener('click', (e) => {
        e.preventDefault()
        let scroll = pageYOffset
            let timerId = setInterval(() => {
                if(scroll>0){
                    window.scrollTo(pageYOffset, scroll-=25)
                }
                else{clearInterval(timerId)}
                
                
            },1)

    })
});
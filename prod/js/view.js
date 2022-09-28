'use strict';

function view () {
    const body = document.body;
    const header = document.querySelector('.header-wrapper');

    const ukrainianWrapper = document.querySelector('.ukrainian-wrapper');
    ukrainianWrapper.classList.add('light-theme');
    const ukrPlate = document.createElement('div');
    ukrPlate.classList.add('classic-drinks-wrapper');
    ukrPlate.innerHTML = `<h2 class="h2titles">Класичні напої &#9829</h2>
                <div class="classic-drinks">
                    <ul class="classic-drinks-names">
                        <li class="goods-prices">Еспресо</li>
                        <li class="goods-prices">Макіато</li>
                        <li class="goods-prices">Американо</li>
                        <li class="goods-prices">* з молоком</li>
                        <li class="goods-prices">Капучіно</li>
                        <li class="goods-prices">Лате</li>
                    </ul>

                    <ul class="classic-drinks-prices">
                        <li class="goods-prices">30   43</li>
                        <li class="goods-prices">35</li>
                        <li class="goods-prices">30   43   48</li>
                        <li class="goods-prices">35   48   55</li>
                        <li class="goods-prices">43   48   55   60</li>
                        <li class="goods-prices">43   48   55   60</li>
                    </ul>
                </div>

            <div class="container coffee-drinks-wrapper light-theme">
                <h2>Альтернативні напої</h2>
                <div class="coffee-drinks">
                    <ul class="coffee-drinks-names">
                        <li class="goods-prices">Флет уайт</li>
                        <li class="goods-prices">Раф-кава</li>
                        <li class="goods-prices">Баунті</li>
                        <li class="goods-prices">Моко</li>
                    </ul>

                    <ul class="coffee-drinks-prices">
                        <li class="goods-prices">59</li>
                        <li class="goods-prices">60   65</li>
                        <li class="goods-prices">69</li>
                        <li class="goods-prices">60   65</li>
                    </ul>
                </div>
            </div>

            <div class="container warming-drinks-wrapper light-theme">
                <h2 class="h2titles">Зігріваючі напої</h2>
                <div class="warming-drinks">
                    <ul class="warming-drinks-names">
                        <li class="goods-prices">Чай</li>
                        <li class="goods-prices">Ягідний чай</li>
                        <li class="goods-prices">Какао</li>
                        <li class="goods-prices">Шоколад</li>
                        <li class="goods-prices">Бамбіно</li>
                    </ul>

                    <ul class="warming-drinks-prices">
                        <li class="goods-prices">35</li>
                        <li class="goods-prices">50</li>
                        <li class="goods-prices">48   60</li>
                        <li class="goods-prices">50</li>
                        <li class="goods-prices">48</li>
                    </ul>
                </div>
            </div>

            <div class="container additional-wrapper light-theme">
                <h2>Додатково</h2>
                <div class="additional">
                    <ul class="additional-names">
                        <li class="goods-prices">Зефірки</li>
                        <li class="goods-prices">Рослинне</li>
                        <li class="goods-prices">Безлактозне</li>
                        <li class="goods-prices">Мед</li>
                    </ul>

                    <ul class="additional-prices">
                        <li class="goods-prices">15</li>
                        <li class="goods-prices">15   20</li>
                        <li class="goods-prices">25   35</li>
                        <li class="goods-prices">10</li>
                    </ul>
                </div>
                </div>`;

    const englishWrapper = document.querySelector('.english-wrapper');
    englishWrapper.classList.add('light-theme');
    const engPlate = document.createElement('div');
    engPlate.classList.add('classic-drinks-wrapper');
    engPlate.innerHTML = `<h2 class="h2titles">Classic coffee &#9829</h2>
                <div class="classic-drinks">
                    <ul class="classic-drinks-names">
                        <li class="goods-prices">Espresso</li>
                        <li class="goods-prices">Macchiato</li>
                        <li class="goods-prices">Americano</li>
                        <li class="goods-prices">* with milk</li>
                        <li class="goods-prices">Cappuccino</li>
                        <li class="goods-prices">Latte</li>
                    </ul>

                    <ul class="classic-drinks-prices">
                        <li class="goods-prices">30   43</li>
                        <li class="goods-prices">35</li>
                        <li class="goods-prices">30   43   48</li>
                        <li class="goods-prices">35   48   55</li>
                        <li class="goods-prices">43   48   55   60</li>
                        <li class="goods-prices">43   48   55   60</li>
                    </ul>
                </div>

            <div class="container coffee-drinks-wrapper light-theme">
                <h2>Alternative drinks</h2>
                <div class="coffee-drinks">
                    <ul class="coffee-drinks-names">
                        <li class="goods-prices">Flat white</li>
                        <li class="goods-prices">Raff-coffee</li>
                        <li class="goods-prices">Bounty</li>
                        <li class="goods-prices">Mocha</li>
                    </ul>

                    <ul class="coffee-drinks-prices">
                        <li class="goods-prices">59</li>
                        <li class="goods-prices">60   65</li>
                        <li class="goods-prices">69</li>
                        <li class="goods-prices">60   65</li>
                    </ul>
                </div>
            </div>

            <div class="container warming-drinks-wrapper light-theme">
                <h2 class="h2titles">Warming drinks</h2>
                <div class="warming-drinks">
                    <ul class="warming-drinks-names">
                        <li class="goods-prices">Tea</li>
                        <li class="goods-prices">Berries tea</li>
                        <li class="goods-prices">Cocoa</li>
                        <li class="goods-prices">Chocolate</li>
                        <li class="goods-prices">Bambino</li>
                    </ul>

                    <ul class="warming-drinks-prices">
                        <li class="goods-prices">35</li>
                        <li class="goods-prices">50</li>
                        <li class="goods-prices">48   60</li>
                        <li class="goods-prices">50</li>
                        <li class="goods-prices">48</li>
                    </ul>
                </div>
            </div>

            <div class="container additional-wrapper light-theme">
                <h2>Additional</h2>
                <div class="additional">
                    <ul class="additional-names">
                        <li class="goods-prices">Marshmellow</li>
                        <li class="goods-prices">Plant milk</li>
                        <li class="goods-prices">Non lactose</li>
                        <li class="goods-prices">Honey</li>
                    </ul>

                    <ul class="additional-prices">
                        <li class="goods-prices">15</li>
                        <li class="goods-prices">15   20</li>
                        <li class="goods-prices">25   35</li>
                        <li class="goods-prices">10</li>
                    </ul>
                </div>
            </div>`;

    let lightThemeContainers = document.querySelectorAll('.light-theme');

    const themeTumbler = document.querySelector('.theme-tumbler');
    const themeTumblerCircle = document.querySelector('.theme-tumbler-circle');

    return {
        renderUkrWrapper() {
            ukrainianWrapper.append(ukrPlate);
        },
        renderEngWrapper() {
            englishWrapper.append(engPlate);
        },
        themeSwitch() {
            themeTumbler.classList.toggle('theme-tumbler-dark');
            themeTumblerCircle.classList.toggle('theme-tumbler-circle-dark');
            lightThemeContainers.forEach(el => {
                el.classList.toggle('dark-theme');
            });
            header.classList.toggle('header-dark-theme');
            body.classList.toggle('body-dark-theme');
            },
    }
}

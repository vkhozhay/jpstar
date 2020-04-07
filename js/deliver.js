let carItems = document.querySelectorAll('.delivery__select-car-item');
let selectCity = document.querySelector('#delivery__select-town');
let priceContainer = document.querySelector('.delivery__price-value');

for (let i = 0; i < carItems.length; i++) {
    carItems[i].addEventListener('click', function (e) {
        for (let j = 0; j < carItems.length; j++) {
            carItems[j].classList.remove('delivery__select-car-item_active');
        }

        carItems[i].classList.add('delivery__select-car-item_active');

        if (selectCity.value !== 'Выберите город') {
            let typeCar = document.querySelector('.delivery__select-car-item_active .car-item__title').innerHTML;

            let currentCity = findObject(cities, 'name', selectCity.value);
            console.log(currentCity);

            if (typeCar === 'СЕДАН') {
                priceContainer.innerHTML = currentCity.priceSedan;
            } else if (typeCar === 'МИНИВЕН / КРОССОВЕР') {
                priceContainer.innerHTML = currentCity.priceVan;
            } else if (typeCar === 'ДЖИП') {
                priceContainer.innerHTML = currentCity.priceJeep;
            }
        }
    })
}

for (let i = 0; i < cities.length; i++) {
    let newOption = document.createElement('option');
    newOption.innerHTML = cities[i].name;

    selectCity.appendChild(newOption);
}


selectCity.addEventListener('change', function () {
    if (document.querySelector('.delivery__select-car-item_active')) {
        let typeCar = document.querySelector('.delivery__select-car-item_active .car-item__title').innerHTML;

        let currentCity = findObject(cities, 'name', selectCity.value);
        console.log(currentCity);

        if (typeCar === 'СЕДАН') {
            priceContainer.innerHTML = currentCity.priceSedan;
        } else if (typeCar === 'МИНИВЕН / КРОССОВЕР') {
            priceContainer.innerHTML = currentCity.priceVan;
        } else if (typeCar === 'ДЖИП') {
            priceContainer.innerHTML = currentCity.priceJeep;
        }
    }
})






function findObject(arr, key, value) {
    return arr.find(element => {
        return element[key] === value;
    });
}
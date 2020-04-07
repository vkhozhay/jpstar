let selectCar = document.querySelector('#calculate__form-select-car');
let selectModel = document.querySelector('#calculate__form-select-model');
let carYears = document.querySelector('#calculate__form-year');
let radioMethod1 = document.querySelector('#calculate__form-method1');
let radioMethod2 = document.querySelector('#calculate__form-method2');

for (let i = 0; i < cars.length; i++) {

    let newOption = document.createElement('option');
    newOption.innerHTML = cars[i].name;
    selectCar.appendChild(newOption);
}

selectCar.addEventListener('change', function () {
    selectModel.innerHTML = `<option value="">Модель</option>`
    carYears.value = '';
    let currentCar = findObject(cars, 'name', selectCar.value);

    for (let i = 0; i < currentCar.models.length; i++) {
        let newOption = document.createElement('option');
        newOption.innerHTML = currentCar.models[i].modelName;
        selectModel.appendChild(newOption);
    }
})

selectModel.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', selectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', selectModel.value);

    carYears.value = currentModel.modelYears;
})

radioMethod1.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', selectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', selectModel.value);

    carYears.value = currentModel.modelYears;

})

radioMethod2.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', selectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', selectModel.value);

    carYears.value = currentModel.constructorYears;

})


function findObject(arr, key, value) {
    return arr.find(element => {
        return element[key] === value;
    });
}
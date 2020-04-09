let selectCar = document.querySelector('#calculate__form-select-car');
let selectModel = document.querySelector('#calculate__form-select-model');
let carYearsFrom = document.querySelector('#calculate__form-select-year-from');
let carYearsTo = document.querySelector('#calculate__form-select-year-to');
let radioMethod1 = document.querySelector('#calculate__form-method1');
let radioMethod2 = document.querySelector('#calculate__form-method2');

for (let i = 0; i < cars.length; i++) {

    let newOption = document.createElement('option');
    newOption.innerHTML = cars[i].name;
    selectCar.appendChild(newOption);
}

selectCar.addEventListener('change', function () {
    selectModel.innerHTML = `<option value="">Модель</option>`
    carYearsFrom.innerHTML = '<option value="">C</option>';
    carYearsTo.innerHTML = '<option value="">По</option>';


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

    if (radioMethod1.checked) {
        showYears(currentModel.modelYearsFrom, currentModel.modelYearsTo, carYearsFrom, carYearsTo);
    } else if (radioMethod2.checked) {
        showYears(currentModel.constructorYearsFrom, currentModel.constructorYearsTo, carYearsFrom, carYearsTo);
    }




})

radioMethod1.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', selectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', selectModel.value);

    showYears(currentModel.modelYearsFrom, currentModel.modelYearsTo, carYearsFrom, carYearsTo);

})

radioMethod2.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', selectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', selectModel.value);

    showYears(currentModel.constructorYearsFrom, currentModel.constructorYearsTo, carYearsFrom, carYearsTo);

})





let popupSelectCar = document.querySelector('#popup-calculate__form-select-car');
let popupSelectModel = document.querySelector('#popup-calculate__form-select-model');
let popupCarYearsFrom = document.querySelector('#popup-calculate__form-select-year-from');
let popupCarYearsTo = document.querySelector('#popup-calculate__form-select-year-to');
let popupRadioMethod1 = document.querySelector('#popup-calculate__form-method1');
let popupRadioMethod2 = document.querySelector('#popup-calculate__form-method2');

for (let i = 0; i < cars.length; i++) {

    let newOption = document.createElement('option');
    newOption.innerHTML = cars[i].name;
    popupSelectCar.appendChild(newOption);
}

popupSelectCar.addEventListener('change', function () {
    popupSelectModel.innerHTML = `<option value="">Модель</option>`
    popupCarYearsFrom.innerHTML = '<option value="">C</option>';
    popupCarYearsTo.innerHTML = '<option value="">По</option>';


    let currentCar = findObject(cars, 'name', popupSelectCar.value);

    for (let i = 0; i < currentCar.models.length; i++) {
        let newOption = document.createElement('option');
        newOption.innerHTML = currentCar.models[i].modelName;
        popupSelectModel.appendChild(newOption);
    }
})

popupSelectModel.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', popupSelectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', popupSelectModel.value);

    if (popupRadioMethod1.checked) {
        showYears(currentModel.modelYearsFrom, currentModel.modelYearsTo, popupCarYearsFrom, popupCarYearsTo);
    } else if (popupRadioMethod2.checked) {
        showYears(currentModel.constructorYearsFrom, currentModel.constructorYearsTo, popupCarYearsFrom, popupCarYearsTo);
    }




})

popupRadioMethod1.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', popupSelectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', popupSelectModel.value);

    showYears(currentModel.modelYearsFrom, currentModel.modelYearsTo, popupCarYearsFrom, popupCarYearsTo);

})

popupRadioMethod2.addEventListener('change', function () {
    let currentCar = findObject(cars, 'name', popupSelectCar.value);
    let currentModel = findObject(currentCar.models, 'modelName', popupSelectModel.value);

    showYears(currentModel.constructorYearsFrom, currentModel.constructorYearsTo, popupCarYearsFrom, popupCarYearsTo);

})


function findObject(arr, key, value) {
    return arr.find(element => {
        return element[key] === value;
    });
}


function showYears(modelYearsFrom, modelYearsTo, yearsFrom, yearsTo) {
    yearsFrom.innerHTML = '<option value="">C</option>';
    yearsTo.innerHTML = '<option value="">По</option>';


    for (let i = modelYearsFrom; i <= modelYearsTo; i++) {
        let newOption = document.createElement('option');
        newOption.setAttribute('value', i);
        newOption.innerHTML = i;

        yearsFrom.appendChild(newOption);
    }

    for (let i = modelYearsFrom; i <= modelYearsTo; i++) {


        let newOption = document.createElement('option');
        newOption.setAttribute('value', i);
        newOption.innerHTML = i;

        yearsTo.appendChild(newOption);
    }

    yearsFrom.value = modelYearsFrom;
    yearsTo.value = modelYearsTo;
}
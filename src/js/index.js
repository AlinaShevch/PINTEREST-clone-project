//создаём картинки, аватарки, имена пользователей
const images = document.getElementById('images');
let avatar, username;
let inputValue = '';
let cardsData = [];
let checkSearch = false;

// Блок для жалоб
let pinForm = document.getElementById("pinform");
console.log("pinform", pinForm);

let form = document.createElement("div");
form.className = "form";

let titleForm = document.createElement("div");
titleForm.className = "titleForm";
titleForm.textContent = "Жалоба на пин";

let infoForm = document.createElement("div");
infoForm.className = "infoForm";

let radioButtonOne = document.createElement("input");
radioButtonOne.type = "radio";
radioButtonOne.id = "radioButton";

let spamContainer = document.createElement("label");
spamContainer.setAttribute('for', 'radioButton');
spamContainer.className = "title-container"
spamContainer.textContent = "Спам";

let aboutSpamContainer = document.createElement("p");
aboutSpamContainer.className = "subtitle-container";
aboutSpamContainer.textContent = "Вводящие в заблуждение или повторяющиеся публикации";

let radioButtonToo = document.createElement("input");
radioButtonToo.type = "radio";
radioButtonToo.id = "radioButton";

let imgContainer = document.createElement("label");
imgContainer.setAttribute("for", "radioButton");
imgContainer.textContent = "Изображения обнаженного тела или порнография";

let aboutImgContainer = document.createElement("p");
aboutImgContainer.className = "subtitle-container";
aboutImgContainer.textContent = "Содержимое сексуального характера";

let radioButtonThree = document.createElement("input");
radioButtonThree.type = "radio";
radioButtonThree.id = "radioButton";

let treshContainer = document.createElement("label");
treshContainer.setAttribute("for", "radioButton");
treshContainer.textContent = "Членовредительство";

let aboutTreshContainer = document.createElement("p");
aboutTreshContainer.className = "subtitle-container";
aboutTreshContainer.textContent = "Расстройства пищевого поведения, нанесение травм себе, суицид";

let radioButtonFour = document.createElement("input");
radioButtonFour.type = "radio";
radioButtonFour.id = "radioButton";

let falseContainer = document.createElement("label");
falseContainer.setAttribute('for', 'radioButton');
falseContainer.className = "title-container"
falseContainer.textContent = "Ложная информация";

let aboutFalseContainer = document.createElement("p");
aboutFalseContainer.className = "subtitle-container";
aboutFalseContainer.textContent = "Ложная информация о здоровье, климате, голосованиях или теории заговора";

let radioButtonFive = document.createElement("input");
radioButtonFive.type = "radio";
radioButtonFive.id = "radioButton";

let agressContainer = document.createElement("label");
agressContainer.setAttribute('for', 'radioButton');
agressContainer.className = "title-container"
agressContainer.textContent = "Агрессивные действия";

let aboutAgressContainer = document.createElement("p");
aboutAgressContainer.className = "subtitle-container";
aboutAgressContainer.textContent = "Предрассудки, стереотипы, идея превосходства белой расы, оскорбления";

let radioButtonSix = document.createElement("input");
radioButtonSix.type = "radio";
radioButtonSix.id = "radioButton";

let itemContainer = document.createElement("label");
itemContainer.setAttribute('for', 'radioButton');
itemContainer.className = "title-container"
itemContainer.textContent = "Опасные товары";

let aboutItemContainer = document.createElement("p");
aboutItemContainer.className = "subtitle-container";
aboutItemContainer.textContent = "Наркотики, оружие, регулируемые товары";

let radioButtonSeven = document.createElement("input");
radioButtonSeven.type = "radio";
radioButtonSeven.id = "radioButton";

let confidContainer = document.createElement("label");
confidContainer.setAttribute('for', 'radioButton');
confidContainer.className = "title-container"
confidContainer.textContent = "Преследование или нарушение конфиденциальности";

let aboutConfidContainer = document.createElement("p");
aboutConfidContainer.className = "subtitle-container";
aboutConfidContainer.textContent = "Оскорбления, угрозы, публикация персональных данных";

let radioButtonEight = document.createElement("input");
radioButtonEight.type = "radio";
radioButtonEight.id = "radioButton";

let sceneContainer = document.createElement("label");
sceneContainer.setAttribute('for', 'radioButton');
sceneContainer.className = "title-container"
sceneContainer.textContent = "Сцены насилия";

let aboutSceneContainer = document.createElement("p");
aboutSceneContainer.className = "subtitle-container";
aboutSceneContainer.textContent = "Графическое изображение или пропаганда насилия";

let radioButtonNine = document.createElement("input");
radioButtonNine.type = "radio";
radioButtonNine.id = "radioButton";

let intelContainer = document.createElement("label");
intelContainer.setAttribute('for', 'radioButton');
intelContainer.className = "title-container"
intelContainer.textContent = "Это моя интеллектуальная собственность";

let aboutIntelContainer = document.createElement("p");
aboutIntelContainer.className = "subtitle-container";
aboutIntelContainer.textContent = "Нарушение авторских прав или прав на товарный знак";

let closeForm = document.createElement("div");
closeForm.className = "closeForm";

let backButton = document.createElement("button");
backButton.className = "backButton";
backButton.textContent = "Отмена";

let nextButton = document.createElement("button");
nextButton.className = "nextButton";
nextButton.textContent = "Далее";

pinForm.append(form);
form.append(titleForm, infoForm, closeForm);
closeForm.append(backButton, nextButton);
spamContainer.append(radioButtonOne);
infoForm.append(radioButtonOne, spamContainer, aboutSpamContainer);
imgContainer.append(radioButtonToo);
infoForm.append(radioButtonToo, imgContainer, aboutImgContainer);
treshContainer.append(radioButtonThree);
infoForm.append(radioButtonThree, treshContainer, aboutTreshContainer);
falseContainer.append(radioButtonFour);
infoForm.append(radioButtonFour, falseContainer, aboutFalseContainer);
agressContainer.append(radioButtonFive);
infoForm.append(radioButtonFive, agressContainer, aboutAgressContainer);
itemContainer.append(radioButtonSix);
infoForm.append(radioButtonSix, itemContainer, aboutItemContainer);
confidContainer.append(radioButtonSeven);
infoForm.append(radioButtonSeven, confidContainer, aboutConfidContainer);
sceneContainer.append(radioButtonEight);
infoForm.append(radioButtonEight, sceneContainer, aboutSceneContainer);
intelContainer.append(radioButtonNine);
infoForm.append(radioButtonNine, intelContainer, aboutIntelContainer);

//пин
fetch('https://62ab5fb5bd0e5d29af0ed526.mockapi.io/store')
    .then((response) => response.json())
    .then((arr) => {
        arr.forEach(elem => {
            cardsData.push(elem);

            //создаем пин
            let pin = document.createElement('div');
            pin.classList.add('pin', elem.imageCategory);

            //создаем контейнер для пина
            let pinContainer = document.createElement('div');
            pinContainer.className = 'pin-container';
            pinContainer.style.backgroundImage = `url(${elem.image})`;
            getRandomHeight(pinContainer);

            avatar = document.createElement('img');
            avatar.className = 'avatar';
            avatar.src = elem.avatar;

            username = document.createElement('span');
            username.className = 'username';
            username.textContent = elem.username;

            let addButton = document.createElement('button');
            addButton.className = 'add-button';
            addButton.style.display = 'none';
            addButton.textContent = '...';

            pin.append(pinContainer, avatar, username);
            pinContainer.append(addButton);
            images.append(pin);

            pinContainer.addEventListener('mouseover', () => {
                addButton.style.display = 'block';
                pinContainer.style.backgroundImage = `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(${elem.image})`;
                pinContainer.style.cursor = 'zoom-in';
            });

            pinContainer.addEventListener('mouseout', () => {
                addButton.style.display = 'none';
                pinContainer.style.backgroundImage = `url(${elem.image})`;
            });

            //создаем модальное окно для пожаловаться и доб-я доски
            let pinWindow = document.createElement('div');
            pinWindow.className = 'pin-window';

            let addPinButton = document.createElement('button');
            addPinButton.className = 'pin-button';
            addPinButton.textContent = 'Добавить пин';

            let complainButton = document.createElement('button');
            complainButton.className = 'pin-button';
            complainButton.textContent = 'Пожаловаться';

            pinContainer.append(pinWindow);
            pinWindow.append(addPinButton, complainButton);

            complainButton.addEventListener('click', () => {
                pinForm.style.display = 'block';
            })

            backButton.addEventListener('click', () => {
                pinForm.style.display = 'none';
            })

            window.addEventListener('click', function (e) {
                if (pinContainer.contains(e.target)) {
                    pinWindow.style.display = 'flex';
                    pinWindow.style.cursor = 'default';
                } else {
                    pinWindow.style.display = 'none';
                }
            });

            //создаем модальное окно для добавления пина на доску
            let addWindow = document.createElement('div');
            addWindow.className = 'add-window';
            pinWindow.append(addWindow);

            addPinButton.addEventListener('click', () => {
                addWindow.style.display = 'flex';
            })

            let firstButton = document.createElement('button');
            firstButton.className = 'pin-button';
            firstButton.textContent = 'Доска 1';
            let secondButton = document.createElement('button');
            secondButton.className = 'pin-button';
            secondButton.textContent = 'Доска 2';
            let thirdButton = document.createElement('button');
            thirdButton.className = 'pin-button';
            thirdButton.textContent = 'Доска 3';

            addWindow.append(firstButton, secondButton, thirdButton);

            let cancelButton = document.createElement('button');
            cancelButton.className = 'cancel-button';
            cancelButton.textContent = 'Вернуться назад';
            addWindow.append(cancelButton);

            cancelButton.addEventListener('click', () => {
                addWindow.style.display = 'none';
            })
        })
    })
    .then(() => {
        let arr = [...document.querySelectorAll('.pin')];

        search.addEventListener('keydown', function (e) {
            console.log('search');
            if (checkSearch) {
                arr.forEach((elem) => {
                    elem.style.display = "block";
                })

                checkSearch = false;
            }

            if (e.keyCode === 13) {
                setInputValue(this.value);
            }
        });
    })

function setInputValue(value) {
    inputValue = value;
    let arr = [...document.querySelectorAll('.pin')];
    let arrNone = arr.filter((elem) => elem.className !== `pin ${inputValue}`);

    if (arrNone.length !== arr.length) {
        arrNone.forEach(elem => {
            elem.style.display = "none";
        });

        checkSearch = true;
    }
}

//высота картинок
function getRandomHeight(elem) {
    let px = 200 + Math.random() * (419 - 200);
    return elem.style.height = `${px}px`;
}

//делаем подсветку поисковика в фокусе
const searchContainer = document.getElementById('searchContainer');
const search = document.getElementById('search');
const searchIcon = document.getElementById('searchIcon');

search.onfocus = () => {
    searchContainer.style.boxShadow = 'rgb(0 132 255 / 50%) 0 0 0 4px';
    searchIcon.style.display = 'none';
}

search.onblur = () => {
    searchContainer.style.boxShadow = 'none';
    searchIcon.style.display = 'block';
}

//меняем цвет фона поисковика при наведении мышкой
searchContainer.onmouseover = () => {
    search.style.backgroundColor = '#ddd';
    searchContainer.style.backgroundColor = '#ddd';
}

searchContainer.onmouseleave = () => {
    search.style.backgroundColor = '#e9e9e9';
    searchContainer.style.backgroundColor = '#e9e9e9';
}


let dropdown = document.getElementById('dropdown');

let buttonWindow = document.createElement("div");
buttonWindow.className = "window";

let firstContainer = document.createElement("button");
firstContainer.className = "buttonContainer";
firstContainer.textContent = "cats";

let secondContainer = document.createElement('button');
secondContainer.className = "buttonContainer";
secondContainer.textContent = "nature";

let thirdContainer = document.createElement('button');
thirdContainer.className = "buttonContainer";
thirdContainer.textContent = "food";

dropdown.append(buttonWindow);
buttonWindow.append(firstContainer, secondContainer, thirdContainer);

let topButton = document.getElementById("top-button");

window.addEventListener('click', function (e) {
    if (dropdown.contains(e.target)) {
        buttonWindow.style.display = 'flex';
        buttonWindow.style.cursor = 'default';
    } else {
        buttonWindow.style.display = 'none';
    }
});

firstContainer.addEventListener('click', function () {
    let arr = [...document.querySelectorAll('.pin')];

    arr.forEach((elem) => {
        elem.style.display = "block";
    })

    arr.filter((elem) => elem.className !== 'pin cats').forEach(elem => elem.style.display = 'none');
});

secondContainer.addEventListener('click', function () {
    let arr = [...document.querySelectorAll('.pin')];

    arr.forEach((elem) => {
        elem.style.display = "block";
    })

    arr.filter((elem) => elem.className !== 'pin nature').forEach(elem => elem.style.display = 'none');
});

thirdContainer.addEventListener('click', function () {
    let arr = [...document.querySelectorAll('.pin')];

    arr.forEach((elem) => {
        elem.style.display = "block";
    })

    arr.filter((elem) => elem.className !== 'pin food').forEach(elem => elem.style.display = 'none');
});

document.getElementById('logo').addEventListener('click', (e) => {
    e.preventDefault();

    let arr = [...document.querySelectorAll('.pin')];

    arr.forEach((elem) => {
        elem.style.display = "block";
    })
})
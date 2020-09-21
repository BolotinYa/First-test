// заводим голобальные переменные

var selector = document.getElementById('selector');
var avatarImg = document.getElementById('avatarImg');
var userName = document.getElementById('userName');

// Http запрос для аватарки и имени
var request = new XMLHttpRequest();

request.open('GET', 'http://wp-test/JSON/UserLogData.json');
request.responseType = 'json';
request.send();

// обрабатываем ответ

request.onload = function () {
    var userArr = request.response;
    console.log(userArr); /*просто для проверки*/

    fillSelector(userArr); /*вызываем функцию заполнения слектора*/

    fillUser(userArr);

    function changeImg() {
        fillUser(userArr)
    };

    selector.addEventListener('change', changeImg)
}

// сама функция заполнения

function fillSelector(jsonObj) {
    for (let i = 0; i < jsonObj.length; i++) {
        var option = document.createElement('option');
        option.textContent = jsonObj[i].id;
        selector.append(option);
    }
}

// заполнение аватарки и имени

function fillUser(jsonObj) {
    var selectedUser = selector.value;
    userName.innerText = jsonObj[selectedUser - 1].name;
    avatarImg.src = jsonObj[selectedUser - 1].avatar;
}
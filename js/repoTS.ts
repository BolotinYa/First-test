var requestURL:string = 'http://wp-test/JSON/CarList.json';
var request = new XMLHttpRequest();

var image = document.getElementById('imgId');
var selector = document.getElementById('repoAmount');
var describtion = document.getElementById('description');
var explanation = document.getElementById('explanation');
var userName = document.getElementById('userName');
var repoName = document.getElementById('repoName');

request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function () {
    var imgArr = request.response;
    console.log(imgArr);

    fillSelector(imgArr);

    showImg(imgArr);

    function changeImg() {
        showImg(imgArr)
    }
    selector.addEventListener('change', changeImg);

}

function fillSelector(jsonObj) {
    for (let i = 0; i < jsonObj.length; i++) {
        var option = document.createElement('option');
        option.textContent = i + 1;
        selector.append(option);
    }
}

function showImg(jsonObj) {
    var selectedImg = selector.value;
    image.src = jsonObj[selectedImg - 1].imgUrl;
    describtion.innerText = jsonObj[selectedImg - 1].name;
    explanation.innerText = jsonObj[selectedImg - 1].description;
    userName.innerText = jsonObj[selectedImg - 1].user;
    repoName.innerText = jsonObj[selectedImg - 1].name;
}
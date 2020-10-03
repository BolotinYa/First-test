var input = document.getElementById('input');

input.addEventListener('input',changeList)

function changeList() {
    // делаем из нашего списка объект
    var carList = document.getElementsByClassName('rep-name');
    
    // сам поиск
    for (let i = 0; i < carList.length; i++) {
        if (carList[i].innerText.indexOf(input.value) < 0) {
        carList[i].style.display = 'none'}
        else {
            carList[i].style.display = 'block'
        }   
    }
}
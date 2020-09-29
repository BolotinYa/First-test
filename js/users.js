 // заводим голобальные переменные

 var userList = document.getElementById('userList');

 // Http запрос
 var request = new XMLHttpRequest();

 request.open('GET', 'http://wp-test/JSON/UserLogData.json');
 request.responseType = 'json';
 request.send();
 request.onload = function()

 // обрабатываем ответ
 
     {
         var userArr = request.response;
         console.log(userArr); /*просто для проверки*/

         fillUsers(userArr); /*вызываем функцию заполнения списка*/
     }

     // сама функция заполнения

 function fillUsers(jsonObj) {
     for (let i = 0; i < jsonObj.length; i++) {
             var li = document.createElement('li');
             li.className = 'user-name';
             userList.append(li);

             var userRef = document.createElement('a');
             userRef.className = 'userRef';
             userRef.href = 'UserInfo.html';
             userRef.innerText = jsonObj[i].name;
             li.append(userRef);
         }
 }
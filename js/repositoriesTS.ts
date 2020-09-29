var requestURL:string = 'http://wp-test/JSON/CarList.json';
    var request = new XMLHttpRequest();

    var repList = document.getElementById('repList');

    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function()
        {
            var imgArr = request.response;
            console.log(imgArr);

            fillRepo(imgArr);
        }
    function fillRepo(jsonObj) {
        for (let i = 0; i < jsonObj.length; i++) {
                var li = document.createElement('li');
                li.className = 'rep-name';
                repList.append(li);

                var repoRef = document.createElement('a');
                repoRef.className = 'repoRef';
                repoRef.href = 'RepInfo.html';
                repoRef.innerText = jsonObj[i].name;
                li.append(repoRef);
            }
    }
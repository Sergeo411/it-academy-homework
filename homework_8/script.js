button = document.getElementsByClassName('btn')[0];
users = document.getElementsByClassName('user-list')[0];
content = document.getElementsByClassName('page-content')[0];
var userList;
button.addEventListener('click', function () {
    event.preventDefault();
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqres.in/api/users?page=2', true);
    xhr.send();
    xhr.onload = function () {
        users.innerHTML = '';
        var statusType = Math.round(this.status / 100);
        if (statusType === 2) {
            userList = JSON.parse(this.response).data;
            for (var i = 0; i < userList.length; i++) {
                var user = document.createElement('p');
                user.className = 'users';
                user.classList.add(userList[i].id);
                users.appendChild(user);
                user.innerHTML = 'Пользователь ' + (i + 1);
                console.log(userList[i].first_name + ' ' + userList[i].last_name);
            }

            userInfo(userList[0].id);
        }
    };
    xhr.onerror = function () {

    };

})
users.addEventListener('click', function () {
    var target = event.target;


    if (target.tagName === 'P') {
        target.classList.toggle('click');
        for (var i = 0; i < document.getElementsByTagName('P').length; i++) {
            if (document.getElementsByTagName('P')[i].classList.contains('click') &&
                target.classList != document.getElementsByTagName('P')[i].classList) {
                document.getElementsByTagName('P')[i].classList.toggle('click')
            }
        }
        content.innerHTML = ''
        if (target.classList.contains('click')) {

            userInfo(target.classList[1])
        }
    }

})

function userInfo(userId) {
    var user = 0;
    content.className = 'page-content';
    for (var i = 0; i < userList.length; i++) {
        if (userId == userList[i].id) {
            user = i;
        }
    }
    var img = document.createElement('img');
    img.src = userList[user].avatar;
    content.appendChild(img);

}
button = document.getElementsByClassName('btn')[0];
users = document.getElementsByClassName('user-list')[0];
content = document.getElementsByClassName('page-content')[0];
var userList;
button.addEventListener('click', function () {
    event.preventDefault();
    content.innerHTML = '';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', 'https://reqsres.in/api/users?page=2', true);
    xhr.send();
    if( content.classList.contains('error')){
        content.classList.remove('error');
    }
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
            }
            document.getElementsByTagName('p')[0].classList.add('click');
            userInfo(userList[0].id);
        }
    };
    xhr.onerror = function () {
        content.innerHTML = 'Упс. Что-то пошло не по плану';
        content.classList.remove('page-content');
        content.classList.add('error');
    };

})
users.addEventListener('click', function () {
    var target = event.target;

    if (target.tagName === 'P' && target.tagName !='BUTTON') {
        target.classList.toggle('click');
        for (var i = 0; i < document.getElementsByTagName('P').length; i++) {
            if (document.getElementsByTagName('P')[i].classList.contains('click') &&
                target.classList != document.getElementsByTagName('P')[i].classList) {
                document.getElementsByTagName('P')[i].classList.toggle('click')
            }
        }
        content.innerHTML = '';
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
    var userInfo = document.createElement('div');
    userInfo.classList.add('user-info');
    userInfo.innerHTML =
        '<img src="'+userList[user].avatar+'">'+
        '<p>'+'First Name: '+userList[user].first_name+'<br>'+
              'Last Name: ' + userList[user].last_name+
        '</p>'
    content.appendChild(userInfo);
}
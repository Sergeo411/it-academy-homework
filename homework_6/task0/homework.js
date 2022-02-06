var container = document.getElementById('container');
var newContent = document.createElement('p');
var content = document.createElement('p');
var button = document.getElementsByTagName('button')[0];

container.appendChild(content);
container.appendChild(newContent);
content.innerHTML = 'Это <a href="">просто</a> текст, и <a href="">он</a> небольшой';
newContent.innerHTML = 'В <a href="https://www.google.com">нет</a> смысла, пусть <a href="https://vk.com">он просто</a> тут побудет';

button.onclick = function () {
    for (var i = 0; i < content.children.length; i++) {
        content.children[i].classList.toggle("nope");
    }
}


newContent.addEventListener('click', function () {

    event.preventDefault();
    var target = event.target;

    if (target.tagName == 'A') {
        alert(target.href);
    }
})
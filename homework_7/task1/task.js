var inputList = document.getElementsByTagName('input');
var button = document.getElementsByTagName('button')[0];
var result = document.createElement('p');
document.body.append(result);
button.disabled = true;

document.getElementsByClassName('input-container')[0].addEventListener('keyup', function () {
    if (inputList[0].value == '' || inputList[1].value == '') {
        button.disabled = true;
    }
    if (inputList[0].value != '' && inputList[1].value != '') {
        button.disabled = false;
    }
})

button.addEventListener('click', function () {
    result.innerHTML = '';
    event.preventDefault();

    var x = Number(inputList[0].value);
    var y = Number(inputList[1].value);
    if (x == Math.round(x) && x >= 1 && x <= 10 && y == Math.round(y) && y >= 1 && y <= 10) {
        drowTable(x, y);
    } else if (x < 1 || x > 10 || y < 1 || y > 10) {
        result.innerHTML = 'Введите числа в промежутке от 1 до 10';
    } else result.innerHTML = 'Вы ввели не число';
    result.className='res';
})

result.addEventListener('click', function () {
    target = event.target;
    if (target.tagName == 'TD') {
        var table = document.getElementsByTagName('td');
        for (var i = 0; i < table.length; i++) {
            if (table[i].className == 'black') {
                table[i].className = 'white';
            } else {
                table[i].className = 'black'
            }
        }
    }
})

function drowTable(x, y) {

    result.innerHTML = '';
    for (var i = 0; i < y; i++) {
        var tr = document.createElement('tr');
        for (var j = 0; j < x; j++) {
            var td = document.createElement('td');
            if (i % 2 == j % 2) {
                td.className = "white";
            } else {
                td.className = "black";
            }
            tr.appendChild(td);
        }
        result.appendChild(tr);
    }
}




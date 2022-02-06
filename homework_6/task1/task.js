var table = document.getElementsByTagName('table')[0];
table.addEventListener('click', function () {
    target = event.target;
    if (target.tagName === 'BUTTON') {

        table.insertRow(0);
        for (var i = 0; i < 3; i++) {
            table.rows[0].insertCell(i);

        }
        for (var i = 0; i < table.getElementsByTagName('td').length; i++) {
            var a = table.getElementsByTagName('td')[i];

            if (!a.classList.contains('items') && !a.classList.contains('button')) {
                a.classList.toggle('items');
            }

        }
    }
    if (target.className == 'items') {
        var input = document.createElement('input');
        input.value = target.innerText;
        target.innerText = '';
        target.appendChild(input);
        input.focus();

        input.addEventListener('keypress', function () {
                if (event.keyCode === 13) {
                    this.blur();
                }
            }
        );
        input.addEventListener('blur', function () {
                target.innerText = input.value;
            }
        );

    }
})

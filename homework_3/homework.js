//Задание 1

function Animal(name) {

    this.name = name;
}

Animal.prototype.foodAmount = 50;
Animal.prototype._formatFoodAmount = function () {

    return this.foodAmount + ' гр.';
}
Animal.prototype.dailyNorm = function (amount) {

    if (!arguments.length) return this._formatFoodAmount();
    if (amount < 50 || amount > 100) {
        return 'Недопустимое количество корма.';
    }
    Animal.prototype.foodAmount = amount;
};


Animal.prototype.feed = function () {
    console.log('Насыпаем в миску ' + Animal.prototype.dailyNorm() + ' корма.');
};


function Cat(name) {

}

Cat.prototype = Animal.prototype;

Cat.prototype._animalFeed = Cat.prototype.feed;
Cat.prototype.feed = function () {
    Cat.prototype._animalFeed();
    console.log('Кот доволен ^_^');
    return this;
};
Cat.prototype.stroke = function () {
    console.log('Гладим кота.');
    return this;
};

var barsik = new Cat('Барсик');


barsik.feed().stroke().stroke().feed();

// Задание 2

function deepClone(initialObj) {
    if (!newOnj) {
        var newOnj = new Object();
    }
    for (var key in initialObj) {

        if (typeof (initialObj[key]) == 'object' && !Array.isArray(initialObj[key]) && (initialObj[key] != null)) {
            newOnj[key] = deepClone(initialObj[key]);
            continue;
        }
        if (Array.isArray(initialObj[key])) {
            newOnj[key] = new Array();
            for (var i = 0; i < initialObj[key].length; i++) {
                if (typeof (initialObj[key][i]) == 'object' && !Array.isArray(initialObj[key][i])) {
                    newOnj[key][i] = deepClone(initialObj[key][i]);
                } else {
                    newOnj[key].push(initialObj[key][i]);
                }
            }
            continue;
        }
        newOnj[key] = initialObj[key];
    }
    return newOnj;
}

var initialObj = {
    string: 'Vasya',
    number: 30,
    boolean: true,
    undefined: undefined,
    null: null,
    array: [1, 2, 3],
    object: {
        string2: 'Petrov',
        object2: {
            array2: [{}, {}]
        },
        object3: {}
    },
    method: function () {
        alert('Hello');
    }
};

var clonedObj = deepClone(initialObj);

clonedObj.array.push(2);
clonedObj.object.object2.array2[1] = 'Vasya';

console.log(initialObj);
console.log(clonedObj);


//Задание 3


function objComp(maxObj, minObj) {


    for (var key in maxObj) {

        if (isObj(maxObj[key]) && isObj(minObj[key])) {
            if (Object.keys(maxObj[key]).length == Object.keys(minObj[key]).length) {
                res = objComp(maxObj[key], minObj[key])
            } else res = false;

            if (res == false) {
                return res
            }

            continue;
        }

        if (Array.isArray(maxObj[key])) {
            (maxObj[key].length > minObj[key].length) ? a = maxObj[key].length : a = minObj[key].length;
            for (var i = 0; i < a; i++) {
                if (isObj(maxObj[key][i]) && isObj(minObj[key][i])) {
                    if (Object.keys(maxObj[key][i]).length == Object.keys(minObj[key][i]).length) {
                        res = objComp(maxObj[key][i], minObj[key][i]);
                    } else res = false;

                    if (res == false) {
                        return res
                    }
                } else {
                    if (maxObj[key][i] != minObj[key][i]) {
                        res = false;
                        return res
                    }
                }

            }
            continue;
        }
        if (isObj(maxObj[key]) != isObj(minObj[key])) {
            return false
        }
        if (!isObj(maxObj[key]) && !isObj(minObj[key])) {
            if (maxObj[key] != minObj[key]) {
                res = false;
                return res
            }
        }
    }
    return res
}

function isObj(obj) {
    if (typeof (obj) == 'object' && !Array.isArray(obj) && (obj != null)) {
        return true
    } else return false
}

var res = true;

console.log(objComp(initialObj, clonedObj))

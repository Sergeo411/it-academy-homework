// Задание 1
function filterNumbersArr(a, i, arr) {

    if (a > 0) {
        newArr.push(a);
    }

    return newArr;
}

var newArr = [];
var array = [-1, 0, 2, 34, -2];

array.forEach(filterNumbersArr);
console.log(newArr);

//Задание 2

function firstpositive(arr) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            return arr[i];
        }
    }
    return 'нет положительных';
}

console.log(firstpositive(array))

//Задание 3

function isPalindrome(str) {

    for (var i = 0; i < str.length / 2; i++) {

        if (str[i].toLowerCase() != str[str.length - 1 - i].toLowerCase()) {
            return false;
        }
    }

    return true;

}

console.log(isPalindrome('Шалаш'));
console.log(isPalindrome('привет'));

//Задание 4

function areAnagrams(str1, str2) {

    if (str1.toLowerCase().split('').sort().join('') != str2.toLowerCase().split('').sort().join('')) {
        return false;
    }
    return true;

}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

//Задание 5

function divideArr(arr, a) {
    var newArr= new Array;
    var k=0;

    for(var i=0;i<Math.ceil(arr.length/a);i++){
        newArr[i]=arr.slice(i*a,a*(i+1));
    }
    return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
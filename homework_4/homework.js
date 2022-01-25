// Задание 1
function filterNumbersArr(a) {

    return a > 0;
}

var array = [-1, 0, 2, 34, -2];

var newArray = array.filter(filterNumbersArr);

console.log(newArray);

//Задание 2

function firstpositive(array) {
    return array.find(function (element) {
            return element > 0
        }
    )

}

console.log(firstpositive(array))

//Задание 3

function isPalindrome(str) {


    return str.toLowerCase() == str.toLowerCase().split('').reverse().join('');

}

console.log(isPalindrome('Шалаш'));
console.log(isPalindrome('привет'));

//Задание 4

function areAnagrams(str1, str2) {

    return str1.toLowerCase().split('').sort().join('') == str2.toLowerCase().split('').sort().join('');


}

console.log(areAnagrams('кот', 'отк'));
console.log(areAnagrams('кот', 'атк'));
console.log(areAnagrams('кот', 'отко'));

//Задание 5

function divideArr(arr, a) {
    var newArr = new Array;

    for (var i = 0; i < Math.ceil(arr.length / a); i++) {
        newArr[i] = arr.slice(i * a, a * (i + 1));
    }
    return newArr;
}

console.log(divideArr([1, 2, 3, 4], 2)); // [[1, 2], [3, 4]]
console.log(divideArr([1, 2, 3, 4, 5, 6, 7, 8], 3)); // [[1, 2, 3], [4, 5, 6], [7, 8]]
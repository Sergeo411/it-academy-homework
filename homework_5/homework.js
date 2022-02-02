// Задание 1:

function remakeName(array){

    return  array.map(function (value){
        var names=value;
        value={name: names};
        return value;
    });
}
console.log(remakeName(['Vasya']));


// Задание 2:

function getTime(array){
   var timeres='Текущее время';
   array.forEach(function (timeitem){
       timeres=timeres+' : '+timeitem;
       return timeres;
   });
return timeres;
}
console.log(getTime(['00', '13', '24']))


// Задание 3:

function countingVowels(str,vowels){

    var res=str.split('').reduce(function (sum,value){
        if (vowels.indexOf(value) !== -1){
            sum++
        }
        return sum;
    },0);
    return res;
}
console.log(countingVowels('привет, как дела?','аеёиоуыэюяАЕЁИОУЫЭЮЯ'))


//     Задание 4:


function countSentencesLetters(str){
    var arr=str.split(/[.?!]+/);
    if(arr[arr.length-1]==''){
    arr.pop();
    }
    var res=arr.map(function (value){
        value=value.trim();
        var vallueLenghth=value.split('').reduce(function (sum,item){
            if (item==' ' || item==','){
                sum--;
            }
            return sum;
        },value.length);
        return value+': Letters quantity is: '+vallueLenghth;
    });

    return res;

}
console.log(countSentencesLetters('Привет, студент! Студент... Как дела, студент?'))

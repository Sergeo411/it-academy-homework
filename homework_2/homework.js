function Cat(name) {

    Animals.call(this);

    var parentFeed = this.animalFeed;

    this.feed = function () {
        parentFeed.call(this);
        console.log("Кот доволен ^_^");
    }
    this.stroke =function (){
        console.log("Гладим кота.")
    }

}

function Animals() {

    var foodAmount = 50;

    function formatFoodAmount() {
        return foodAmount + ' гр.'
    }

    this.dailyNorm = function (value) {
        if (!arguments.length) {
            return foodAmount
        }
        if (value >= 100) {
            throw new Error("Значение должно быть меньше 100");
        } else if (value <= 50) {
            throw new Error("Значение должно быть больше 50");
        }
        foodAmount = value + ' гр.';

    }
    this.name = name;

    this.animalFeed = function () {
        console.log('Насыпаем в миску ' + formatFoodAmount() + ' корма.');
    };
}

var barsik = new Cat('Барсик');

barsik.feed();
barsik.dailyNorm(55);
console.log(barsik.dailyNorm());
barsik.feed();
barsik.stroke();
barsik.feed();


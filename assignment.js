function feetToMile(number) {
    let mile = number / 5280;
    let lessFractionNumber = mile.toFixed(3);
    return lessFractionNumber;
}

function woodCalculator(chair, table, bed) {
    let chairValue = chair * 1;
    let tableValue = table * 3;
    let bedValue = bed * 5;
    let total = (chairValue + tableValue + bedValue);
    return total;
}



function birckCalculator(number){
    let flore = number;
    const bricks = 1000;
    let length;
    let total;
    if(number<=10){
        flore;
            length = 15;

            total = flore * length * bricks;
            return total;
    }
    else if(number<=20){
        flore;
            length = 12;

            total = flore * length * bricks;
            return total;
    }
    else if(number<=21){
        flore;
            length = 10;

            total = flore * length * bricks;
            return total;
    }
}

function tinyFriend(array) {

    var smallString = array[0];
    if (array.length != 0) {
        for (i = 0; i < array.length; i++) {
            var curentString = array[i];
            if (curentString.length < smallString.length) {
                smallString = curentString;
            }
        }
    } else {
        return "Array Empty"
    }
    return smallString;
}


let distance = feetToMile(1000);
console.log("Your calculate distance is:", distance, " mile")

let needToCalculate = woodCalculator(6, 1, 1);
console.log("Your neeed ", needToCalculate, "cub fit wood")

let totalBricksNeed = birckCalculator(20);
console.log("Your calculate bricks need: ", totalBricksNeed)



var friendList = ['Rahim', 'karim khan'];
var smallName = tinyFriend(friendList);
console.log("small string of frien name is :", smallName);
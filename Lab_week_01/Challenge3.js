console.log('Challenge 3');

const tbArr = (arr) => {
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum / arr.length;
};

const checkWinner = (avgDolphins, avgKoalas) => {
    if (tbArr(avgDolphins) > tbArr(avgKoalas) && tbArr(avgDolphins) >= 100) {
        console.log('Dolphins win !!!');
    } else if (
        tbArr(avgDolphins) < tbArr(avgKoalas) &&
        tbArr(avgKoalas) >= 100
    ) {
        console.log('Koalas win !!!');
    } else if (
        tbArr(avgDolphins) === tbArr(avgKoalas) &&
        tbArr(avgDolphins) >= 100 &&
        tbArr(avgKoalas) >= 100
    ) {
        console.log('Hòa nhau !!!');
    } else {
        console.log('Không ai thắng !!!');
    }
};

//Test data 1

console.log('Test data 1');
const Dolphins1 = [96, 108, 89];
const Koalas1 = [88, 91, 110];

if (tbArr(Dolphins1) > tbArr(Koalas1)) {
    console.log('Dolphins win !!!');
} else if (tbArr(Dolphins1) < tbArr(Koalas1)) {
    console.log('Koalas win !!!');
} else {
    console.log('Hòa nhau !!!');
}

//Data Bonus 1

console.log('Data Bonus 1');
const Dolphins2 = [97, 112, 101];
const Koalas2 = [109, 95, 123];

checkWinner(Dolphins2, Koalas2);

//Data Bonus 2

console.log('Data Bonus 2');
const Dolphins3 = [97, 112, 101];
const Koalas3 = [109, 95, 106];

checkWinner(Dolphins3, Koalas3);

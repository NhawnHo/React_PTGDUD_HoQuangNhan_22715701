console.log('Challenge 1 & 2');

class Person {
    constructor(name, mass, height) {
        this.name = name;
        this.mass = mass;
        this.height = height;
    }
    BMI = () => this.mass / this.height ** 2;
}

const sosanh = (p1, p2) => {
    const bmi1 = p1.BMI();
    const bmi2 = p2.BMI();
    const markHigherBMI = bmi1 > bmi2;
    return { bmi1, bmi2, markHigherBMI };
};

console.log('Test data 1');

const Mark1 = new Person('Mark', 78, 1.69);
const John1 = new Person('John', 92, 1.95);
const result1 = sosanh(Mark1, John1);
console.log(result1.markHigherBMI);

if (result1.markHigherBMI) {
    console.log(
        `Mark's BMI (${result1.bmi1}) is higher than John's (${result1.bmi2})`,
    );
} else {
    console.log(
        `John's BMI (${result1.bmi2}) is higher than Mark's (${result1.bmi1})`,
    );
}

console.log('Test data 2');
const Mark2 = new Person('Mark', 95, 1.88);
const John2 = new Person('John', 85, 1.76);
const result2 = sosanh(Mark2, John2);
console.log(result2.markHigherBMI);

if (result2.markHigherBMI) {
    console.log(
        `Mark's BMI (${result2.bmi1}) is higher than John's (${result2.bmi2})`,
    );
} else {
    console.log(
        `John's BMI (${result2.bmi2}) is higher than Mark's (${result2.bmi1})`,
    );
}

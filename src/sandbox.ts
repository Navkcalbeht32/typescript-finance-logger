const person = 'alex';

console.log(person);

const inputs = document.querySelectorAll('input');

inputs.forEach(input => {
    console.log(input)
})


const multiply = (x: number, y: number) => {
    console.log(x * y)
}

multiply(96, 19);
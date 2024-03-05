const result = document.getElementById("output");
const input = document.getElementById("number");
const button = document.getElementById("convert-btn");

const romanToInt = {
    "M": 1000,
    "CM": 900,
    "D": 500,
    "CD": 400,
    "C": 100,
    "XC": 90,
    "L": 50,
    "XL": 40,
    "X": 10,
    "IX": 9,
    "V": 5,
    "IV": 4,
    "I": 1
};

button.addEventListener("click", (e) => {
    e.preventDefault();
    let inputVal = parseInt(input.value);
    if (input.value == "") {
        result.textContent = "Please enter a valid number";
    } else if (inputVal < 1) {
        result.textContent = "Please enter a number greater than or equal to 1";
        input.value = "";
    } else if (inputVal >= 4000) {
        result.textContent = "Please enter a number less than or equal to 3999";
    } else {
        let romanNumber = "";

        for(let key in romanToInt){
            while (inputVal >= romanToInt[key]) {
        romanNumber += key;
        inputVal -= romanToInt[key];
            }
        }
        // console.log(romanNumber);
        result.textContent = romanNumber;
        input.value = "";
    }
});

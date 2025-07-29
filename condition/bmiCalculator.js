/*** 

BMI Calculator and Health Category

Create a JavaScript program that calculates the Body Mass Index (BMI) and assigns a health category based on the BMI value. Use nested if-else statements to determine the health category.

    - Calculate BMI using the formula: BMI = weight (kg) / (height (m))^2
    - BMI < 18.5, you are underweight.
    - BMI >= 18.5 and BMI <=24.9, you are normal.
    - BMI >=25 and BMI <= 29.9, you are overweight.
    - Otherwise, you are obese.

*/

let personWeight = 78;
let personHeight = 1.80;
let personBMI = personWeight/ (personHeight * personHeight);

personBMI = personBMI.toFixed(2);

if (personBMI < 18.5){
    console.log("You are underwight");
}else if(personBMI >= 18.5 && personBMI <= 24.9 ){
    console.log("You are normal");
}else if(personBMI >= 25 && personBMI <= 29.9){
    console.log("You are overweight");
}else{
    console.log("You are obese");
}
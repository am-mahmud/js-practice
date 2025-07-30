/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let busTicket = 800;
let age = 20;
let isStudent = true; // set true if student, false otherwise

if (age < 10) {
    console.log("Bus ticket is free");
} else if (isStudent) {
    const discount = busTicket * 50 / 100;
    const payAmount = busTicket - discount;
    console.log("You are a student. Pay:", payAmount, "Tk");
} else if (age >= 60) {
    const discount = busTicket * 15 / 100;
    const payAmount = busTicket - discount;
    console.log("Senior citizen discount applied. Pay:", payAmount, "Tk");
} else {
    console.log("Pay the regular fee:", busTicket, "Tk");
}
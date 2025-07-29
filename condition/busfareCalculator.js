/***

Ticket fare Calculator
    - Children (age < 10): free
    - Students get a 50% discount
    - Senior citizens (age >= 60) gets a 15% Discount
    - Otherwise Regular ticket fare 800 tk
*/

let busTicket = 800;
let age = 0;

if (age < 10){
    console.log("Bus ticket is free");
}else if(age >=60){
    const discount = busTicket * 15 / 100;
    const payAmount = busTicket - discount;
    console.log("You need to pay", payAmount);
}else{
    console.log('Pay the regular fee 800Tk')
}
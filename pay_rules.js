// helps gives better errors related to our code ( example not using variables i havent declared yet)
"use scricts"
//create som variable we need for our calculation 

//this is the hourly rate for the employee 
let payRate = 12.50;
let hoursWorked = 20;
 

//determine how many hours are /normal hrs vs overtime 
let regularHours =0;
let overtimeHours= hoursWorked-40;

if (hoursWorked>40){
  //this is where we need to figure out the overtime hours 
   regularHours=40;
   overtimeHours = hoursWorked- regularHours;
}else{
 //code foe folks who didnt work overtime 
regularHours = hoursWorked;
}

//create some variables to represent the normal pay and the overtime pay 

let normalPay = payRate * regularHours;
let overtimePay =(payRate *1.5)* overtimeHours;

//figure out the total pay before taxes 
let grosspay =normalPay + overtimePay;

console.log("i got paid $" + normalPay.toFixed(2) +" for my regular hours ");
console.log("i got paid $" + overtimePay.toFixed(2) +" for my regular hours ");
console.log("i got paid $" + grosspay.toFixed(2)+" for my regular hours ");
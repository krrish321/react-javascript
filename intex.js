/*const profile = {
    username:"@Krrishsirohiya",
    IsFollow:"false",
    followers:"999",
    following:"500",
}
console.log(profile);*/



/*let a = 5;
let b = 5;
{
    console.log("print answer", a+b);
}*/

/*let name = prompt("Hello");{
    console.log(name);
}*/


/*let score = 60;
let grade;

if (score >= 90 && score <= 100){
    grade = "A";
} else if (score >=70 && score<= 89){
    grade = "B";
} else if(score >=60 && score<=69){
    grade = "C";
} else if(score >=50 && score<=59){
    grade = "D";
} else if(score >=0 && score<=49){
    grade = "F";
}
{
    console.log("According to your score, the grade was", grade);
}*/



/*let name = prompt ("Haan bhai kaisa hai");{

 console.log(name); }*/





 /*create a variable of type string and try to add a number to it in javascript*/

 /*let str = "is a number ";

 let num = 6;

 let result =  str + num;
 console.log(result);
*/

/*create a variable of type string and try to add a number to it in javascript*/

/*let invalidstr = "Hello";
let num = "54";

console.log(typeof invalidstr);
console.log(typeof num);

let result = invalidstr - num;

console.log(result);
console.log(typeof result);*/

/*create a constant object in javascript can you change it to hold a number later


const myObject = {name: "Krrish", age: 21};

console.log(myObject);

myObject.age = 22;
console.log(myObject);

myObject.city = "Ujjain";
console.log(myObject);

*/

/*use logical operators to find whether the age of person  lie between 10 to 20
let age = 21;

if(age >= 10 && age <= 20) {

console.log("The age between 10 to 20");
} else {
    console.log("age is not in the range");

}*/


/*demonstrate the use of switch case statement in javascipt

function getDayOfWeek(dayNumber) {
        let day;
        switch (dayNumber) {
            case 1:
                day = "Monday";
                break;
            case 2:
                day = "Tuesday";
                break;
            case 3:
                day = "Wednesday";
                break;
            case 4:
                day = "Thursday";
                break;
            case 5:
                day = "Friday";
                break;
            case 6:
                day = "Saturday";
                break;
            case 7:
                day = "Sunday";
                break;
            default:
                day = "Invalid day number";
        }
        return day;
    }

    // Example usage:
    console.log(getDayOfWeek(3)); // Output: Wednesday
    console.log(getDayOfWeek(4)); // Output: Sunday
    console.log(getDayOfWeek(10)); // Output: Invalid day number


write a js program to find whether a number is divisible by 2 and 3.

    function checkDivisibility(num) {
        let result = (num % 2 === 0 && num % 3 === 0)
            ? `${num} is divisible by both 2 and 3.`
            : `${num} is not divisible by both 2 and 3.`;
        console.log(result);
    }

    // Example usage:
    checkDivisibility(18); // Output: 18 is divisible by both 2 and 3.
    checkDivisibility(25); // Output: 25 is not divisible by both 2 and 3.
    checkDivisibility(6);  // Output: 6 is divisible by both 2 and 3.*/

    /*print "you can drive"  or "you cannot drive"  based on age being greater than 18 using ternary operator in js

    function canDrive (age){

        let message = (age > 18) ? "You can Drive." : "You cannot Drive.";

        console.log(message);
    }
    canDrive(20); // Output: You can drive.
    canDrive(18); // Output: You cannot drive.
    canDrive(16); // Output: You cannot drive.*/


   /* let marks = { harry: 78, krrish: 90, pranit: 5 };

for in (let student in marks) {
    console.log(student + ": " + marks[student]);
}*/

/*let correctNumber = 7;

let userInput;

while (userInput != correctNumber){
    userInput = prompt("Enter the correct number:");
    if (userInput == correctNumber) {
        alert("Congratulation! You guess the correct number");
    } else {
        alert("Try Again!");
    }
}*/

/*Print all even numbers from 0 to 100. in js

for (let i = 0; i <= 100; i += 2){
    console.log(i);
}*/

const companies=["Bloomberg", "Ibm", "Microsoft", "Uber", "Google", "Netflix"];
console.log(companies);
delete companies[0];
companies[3]= "Ola";
companies.push("Amazon");
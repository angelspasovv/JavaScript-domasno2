// Vezba broj 1:

let globalNum = 10;
function checkScope() {
    let localNum = globalNum;
    return localNum;
}
console.log("The value is:", checkScope());

let local = checkScope();
let compare = local === globalNum;
console.log("Is the value of globalNum and localNum equal?", compare);

if (true) {
    let blockNum = 10;
}

console.log("Type of blockNum is", typeof (blockNum));

// Vezba 2(a.):
// 90 - 100: Grade: А
// 80 - 89: Grade: B
// 70 - 79: Grade: C
// 60 - 69: Grade: D
// 0 - 59: Grade: F

let pointsAmount = 56

if (pointsAmount >= 90 && pointsAmount <= 100) {
    console.log("Excellent! Your grade is A!");
}
else if (pointsAmount >= 80 && pointsAmount <= 89) {
    console.log("Very good! Your grade is B!")
}
else if (pointsAmount >= 70 && pointsAmount <= 79) {
    console.log("Good! Your grade is C!")
}
else if (pointsAmount >= 60 && pointsAmount <= 69) {
    console.log("Acceptable! Your grade is D!")
}
else if (pointsAmount >= 0 && pointsAmount <= 59) {
    console.log("Fail! Your grade is F!")
}
else {
    console.log("Invalid score! Please enter a score between 0 and 100")
}


// Vezba 2 (b.):

let dayNumber = 5

switch (dayNumber) {
    case 1:
        console.log("It's Sunday!");
        break;
    case 2:
        console.log("It's Monday!");
        break;
    case 3:
        console.log("It's Tuesday!");
        break;
    case 4:
        console.log("It's Wednesday!");
        break;
    case 5:
        console.log("It's Thursday!");
        break;
    case 6:
        console.log("It's Friday!");
        break;
    case 7:
        console.log("It's Saturday!");
        break;
    default:
        console.log("Invalid day number. Please enter a number between 1 and 7.");
        break;

}

// Vezba 3:

// function 1:

function addNumbers(num1, num2, num3) {
    let sum = num1 + num2 + num3
    return sum

}

console.log(addNumbers(1, 5, 6));

// function 2:

function printMyName(string) {
    return string
}

console.log(printMyName("My name is Angel!"))

// function 3:

function compareNumbers(num1, num2) {
    if (num1 === num2) {
        console.log("These numbers are equal.");
    } else {
        console.log("These numbers are not equal.");
    }
}

compareNumbers(5, 5);
compareNumbers(7, 10);

// Vezba 4 (a.):

const age = 19
if (age >= 21) {
    console.log("You are able to vote, and also buy alcohol.")
}
else if (age >= 18 && age < 21) {
    console.log("You can vote, but you are not able to buy alcohol.")
}
else {
    console.log("You can neither vote, nor buy alcohol!")
}

// Vezba 4 (b.):

function numOfDays(month) {
    switch (month) {
        case "January":
        case "March":
        case "May":
        case "July":
        case "August":
        case "October":
        case "December":
            return 31
        case "September":
        case "April":
        case "June":
        case "November":
            return 30
        case "February":
            return 28
        default:
            console.log("Invalid input, no such a month exists!")
    }
}

console.log("The number of days in June is:")
console.log(numOfDays("June"))
console.log("The number of days in December is:")
console.log(numOfDays("December"))
console.log("The number of days in February is:")
console.log(numOfDays("February"))
console.log("The number of days in Feebruuary is:")
console.log(numOfDays("Feebruuary"))

// Vezba 4 (v.):

const temperature = 17

if (temperature >=30) {
    console.log("The weather is hot!")
}
else if (temperature <30 && temperature >=20) {
    console.log("The weather is warm.")
}
else if(temperature <=14) {
    console.log("The weather is cold!")
}
else {
    console.log("The weather is medium warm.")
}

// Vezba 5:

function fizzBuzz(number) {
    if (number % 3 === 0 && number % 5 === 0) {
      console.log("FizzBuzz")
    } else if (number % 3 === 0) {
      console.log("Fizz")
    } else if (number % 5 === 0) {
      console.log("Buzz")
    } else {
      console.log(number)
    }
  }

fizzBuzz(24)
fizzBuzz(50)
fizzBuzz(15)
fizzBuzz(8)
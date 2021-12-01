// Question 1
// Add
// console.log("Add :");

let add = function(a, b) {
    return a + b;
}
// console.log(add(1, 2));

// Subtract
// console.log("Subtract :");
let sub = function(a, b) {
    return a - b;
}
// console.log(sub(3, 2));

// Multiply
// console.log("Multiply :");
let mul = function(a,b) {
    return a * b;
}
// console.log(mul(2, 3));

// Division
// console.log("Divide :");
let div = function(a, b) {
    return a / b;
}
// console.log(div(8, 2));

// Question 2
let operators = {
    "+": function (a, b) {
        return add(a, b);
    },
    "-": function (a, b) {
        return sub(a, b);
    },
    "*": function (a, b) {
        return mul(a, b);
    },
    "/": function (a, b) {
        return div(a, b);
    }
};

let operat = (num1, num2, sign) => {
    if (sign in operators) {
        return operators[sign](num1, num2);
    }
}

// console.log(operat(5, 2, '+'));

// Question 3
// console.log("-------");
let show = document.getElementById("show");
let oldNumber = 0;
let number1 = Number;
let number2 = Number;
let sign = "";
let result = 0;
let display = (e) => {
    
    let stm = show.innerText += e;
    switch (e) {
        case "←":
            show.innerText = stm.slice(0, -2);
            break;
        case "+":
        case "-":
        case "*":
        case "/":

            
            number1 = parseFloat(stm);
            sign = e;
            show.innerText = "";
            
            const foundPoints = stm.includes("..");
            if (foundPoints == true) {
                show.innerText = "Error!";
                break;
            }

            
            if (number1 == 0) {
                oldNumber = 0;
            }else if(number1 !== 0) {
                oldNumber = number1;
            }

            break;
        case "=":

            number1 = parseFloat(stm);
            console.log(number1);
            console.log(oldNumber);
            stm = operat(oldNumber, number1, sign);
            number1 = stm;
            show.innerText = stm;

            break;
        default:
            show.innerText = stm;
            break;
    }
    


}

function clearScreen() {
    show.innerText = "";
}

// Switch
























// let display = document.getElementById('display');
// let buttons = Array.from(document.getElementsByClassName('btn'));
    
// buttons.map( button => {
//     button.addEventListener('click', (e) => {
//         switch(e.target.innerText) {
//             case 'Clear':
//                 display.innerText = '';
//                 break;
//             case '←':
//                 if (display.innerText) {
//                     display.innerText = display.innerText.slice(0, -1);
//                 }
//                 break;
//                 case '=':
//                     try {
//                         display.innerText = eval(display.innerText);
//                     } catch {
//                         display.innerText = 'Error!';
//                     }
//                     break;
//             default: 
//             display.innerText += e.target.innerText;
//         }
//     })
// })


// Question 4
// console.log("Question 4");


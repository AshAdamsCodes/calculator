//OPERATOR FUNCTIONS
function add(a, b){
    return a + b;
}; 

function subtract(a, b){
    return a - b; 
}; 

function multiply(a, b){
    return a * b; 
};

function divide(a, b){
    return a / b; 
};

function operate(operator, num_1, num_2){
    return operator(num_1, num_2);
};


//DISPLAY
//When the user presses a number button(s), populate the display
const button = document.querySelectorAll('.button');
const display = document.getElementById('display');

//set shouldClear initially to true
//shouldClear clears the display after an operator button
//is pressed, so that the next number entered can appear
//and NOT append to the number input before pressing the 
//operator button
let shouldClear = true;

//set shouldOperate initially to false
//shouldOperatoe will determine whether the number displayed
//should be operated with a previous number when an operator 
//button is pressed and, therefore, changed OR if the number should 
//stay as is
let shouldOperate = false; 

//NUMBER BUTTONS
button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        shouldOperate = true;
        if(shouldClear === true){
            display.innerHTML = currentButton.id;
            shouldClear = false; 
        }else if(shouldClear === false){
            display.innerHTML += currentButton.id;  
        }
    })
}); 



//Set num_1 and num_2 initially to undefined 
num_1 = undefined; 
num_2 = undefined;

//OPERATOR BUTTONS
const operatorButton = document.querySelectorAll('.operator');

operatorButton.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        //When you press an operator, check if num_1 exists
        //if num_1 doesn't exist, make num_1 equal display.innerhtml
        if(!num_1){
            num_1 = Number(display.innerHTML);
            //else if, it's not undefined (it exists), 
            //add num_1 to the current display.innerhtml 
            //set num_1 to display.innerhtml 
            }else if(shouldOperate){
                if(operator === 'add'){
                    display.innerHTML = add(num_1, Number(display.innerHTML));
                    num_1 = Number(display.innerHTML);
                }else if(operator === 'subtract'){
                    display.innerHTML = subtract(num_1, Number(display.innerHTML));
                    num_1 = Number(display.innerHTML);
                }else if(operator === 'multiply'){
                    display.innerHTML = multiply(num_1, Number(display.innerHTML));
                    num_1 = Number(display.innerHTML);
                }else if(operator === 'divide'){
                    display.innerHTML = divide(num_1, Number(display.innerHTML));
                    num_1 = Number(display.innerHTML);
                }
            }


            //Now that an operator has been pressed, 
            //make shouldClear true again, so that 
            //the previous number disappears from the display
            //and the new number appears
            shouldClear = true;

            //Now that an operator has been pressed, 
            //set should operate to false, so that operating
            //does not keep happening
            shouldOperate = false;

            //Save the last operator that was selected
            operator = currentButton.id;          
    })
});



//EQUALS SIGN
const equals = document.querySelector('.equalSign');
equals.addEventListener('click', () => {
    num_2 = Number(display.innerHTML);
    if(operator === 'add'){
        display.innerHTML = add(num_1, num_2);
    }else if (operator === 'subtract'){
        display.innerHTML = subtract(num_1, num_2);
    }else if (operator === 'multiply'){
        display.innerHTML = multiply(num_1, num_2)
    }else if (operator === 'divide'){
        display.innerHTML = divide(num_1, num_2);
    }

        //Reset everything to initial values
        num_1 = undefined; 
        num_2 = undefined; 
        shouldClear = true;
        shouldOperate = false;
});


//CLEAR BUTTON
const clear = document.querySelectorAll(".clear");

clear.forEach(function(currentButton){
    currentButton.addEventListener('click', () =>{
         display.innerHTML = '';
        shouldClear = true;
        num_1 = undefined;
     })
});
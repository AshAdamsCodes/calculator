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



currentOperator = null; 

//DISPLAY
//When the user presses a number button(s), populate the display
const button = document.querySelectorAll('.button');
const display = document.getElementById('display');

//set shouldClear to true
let shouldClear = true;

//if shouldClear is true, display = button.id
//set shouldClear to false
//else if shouldClear is false, display += display.id


button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        if(shouldClear === true){
            display.innerHTML = currentButton.id;
            shouldClear = false; 
        }else if(shouldClear === false){
            display.innerHTML += currentButton.id;  
        }
    })
});


//OPERATORS
const operatorButton = document.querySelectorAll('.operator');
const equals = document.querySelector('.equalSign'); 

    //Set num_1 and num_2 to undefined 
    num_1 = undefined; 
    num_2 = undefined;

    
    //clear = true
    operatorButton.forEach(function(currentButton){
        currentButton.addEventListener('click', () => {
            //When you press an operator, check if num_1 exists
            //if num_1 doesn't exist, make num_1 equal display.innerhtml
            if(!num_1){
               num_1 = Number(display.innerHTML);
            //else if, it's not undefined (it exists), 
            //displayinnerhtml = add(num_1, dispalyinnerhtml)
            //set num_1 = display.innerhtml 
            }else{
                display.innerHTML = add(num_1, Number(display.innerHTML));
                num_1 = Number(display.innerHTML);
            }
            //Make shouldClear true again
            shouldClear = true;
            
            //Save the last operator that was selected
            operator = currentButton.id; 
               
        }
        )
    });







    //EQUALS 
    //set num_2 to display.innerHTML
    //clear = true; 

    equals.addEventListener('click', () => {
    num_2 = Number(display.innerHTML);
    if(operator === 'add'){
        //console.log(`test`)
        display.innerHTML = add(num_1, num_2);
        //numArray.push(Number(display.innerHTML));
        /*for(let i = 0 ; i < numArray.length ; i++){
            numArray[i] = Number(display.innerHTML);
            if(numArray[i] === numArray[i + 1]){
                numArray.pop();
                //num_1 = numArray[0];
            }
        }*/
        // num_1 = undefined; 
        // num_2 = undefined; 
    }else if (operator === 'subtract'){
        display.innerHTML = subtract(num_1, num_2);
    }else if (operator === 'multiply'){
        display.innerHTML = multiply(num_1, num_2)
    }
        num_1 = undefined; 
        num_2 = undefined; 
        shouldClear = true;
})

const addition = document.getElementById('add');
console.log(operatorButton.length)



const clear = document.querySelectorAll(".clear");
clear.forEach(function(currentButton){
currentButton.addEventListener('click', () =>{
         display.innerHTML = '';
        shouldClear = true;
        num_1 = undefined;
//         //return;     
     })});







//When the operator button is clicked, save the number in the display(num_1)



/*const addition = document.getElementById('add');
add.addEventListener('click', () => {
    add(Number(display.innerHTML));
})

//When the user presses a number(s), populate the display
const display = document.getElementById('display');
const button = document.querySelectorAll('.button');
const operatorButton = document.querySelectorAll('.operator');
button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        display.innerHTML += currentButton.textContent; 
    })
    return display.innerHTML; 
});

//When the user presses an operator button, save the number before it
let operator; 
operatorButton.forEach(function(currentButton){
    currentButton.addEventListener('click', () =>{
        var clicked = false; 
        num_1 = Number(display.innerHTML); 
        display.innerHTML = ' ';
        console.log(num_1);
        operator = currentButton.id; 
        console.log(operator);
        num_2 = 0;
        clicked = true; 
        console.log(operate(operator, num_1, num_2)); 
    })
});
       
       
        /*if(clicked = true){
            currentButton.addEventListener('click', () =>{
                num_2 = Number(display.innerHTML); 
                display.innerHTML = ' ';
                console.log(num_2);
    });
    console.log(operate(operator, num_1, num_2));
}})});*/






/*
//ADD BUTTON
const operation = document.querySelector('.operation');
operation.forEach(function(currentOperation){
    currentOperation.addEventListener('click', () => {
        console.log(currentOperation.id); 
    })
})*/



/*button.addEventListener('click', () => {
    display.innerHTML += button.innerHTML;
})*/



    //Create a div with the class name 'grid'
    //const grid = document.createElement('div');
    //grid.classList.add("grid");
    //Make the 'grid' div a child of the 'container' div
    //container.appendChild(grid);



    //IDEAS
    //set num_1 to undefined 
    //when you press an operator, check if num_1 exists
    //if num_1 doesn't exist, make num_1 equal display.innerhtml
    //else if, it's not undefined (it exists), displayinnerhtml = add(num_1, dispalyinnerhtml), num_1 = display.innerhtml 
    //clear = true
    //make all of these seperate to their operator



    //set clear to true
    //if clear is true, display = button.id and set clear to false
    //else if clear is true, display += display.id


    //eequals 
    //display.innerhtml = add(num 1, display.innerhtml)
    //num 1 os imderfomed 
    //clear = true; 
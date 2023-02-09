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


//1. Press a number
//2. Number appears in display
const display = document.getElementById('display');
const button = document.querySelectorAll('.button');

function calc() {
    button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        display.innerHTML += currentButton.textContent; 
        num_1 = Number(display.innerHTML); 
        
        //3. Press an operator
        //4. Number in display is saved and still displayed
        //5. Operator is saved
        const operatorButton = document.querySelectorAll('.operator');
        operatorButton.forEach(function(currentButton){
            currentButton.addEventListener('click', () => {
                    console.log(num_1);
                    let operator = currentButton.id; 
                    console.log(operator);
            })
            //If operator exists, when you press another number
            //the first number clears and the new number replaces it
            currentButton.addEventListener('click', () => {
              
                    display.innerHTML = '';
                
                display.innerHTML += currentButton.textContent; 
            }
            )})
    

            //NET STEP FIX THE ABOVE
            //MAKE IT SO THAT THE NUMBER IS STILL
            //DISPLAYED WHEN THE OPERATOR BUTTON IS CLICKED
            //NOW, WHEN THE OPERATOR IS CLICKED, THE NUMBER 
            //DISAPPEARS AND THE OPERATOR IS DISPLAYED
            //WE DON'T WANT THAT
})


})};


calc();




/*let clicked = false; 


//DISPLAY
//When the user presses a number(s), populate the display
const display = document.getElementById('display');
const button = document.querySelectorAll('.button');
button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        display.innerHTML += currentButton.textContent; 
        num_1 = Number(display.innerHTML); 
        
    })
//});



const operatorButton = document.querySelectorAll('.operator');
const equals = document.querySelector('.equalSign'); 
operatorButton.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        clicked = false; 
        if(clicked = false){
            num_1 = Number(display.innerHTML);
            console.log(num_1);
            //display.innerHTML = add(num_1, 0);
            console.log(clicked);
        }
        //clicked = true; 
        if(clicked = true){
            console.log(clicked);
            let operator = currentButton.id; 
            console.log(operator);
            num_2 = Number(display.innerHTML);
            console.log(num_2);
            //display.innerHTML = add(Number(display.innerHTML), num_2);
            equals.addEventListener('click', () => {
                if(operator === 'add'){
                    display.innerHTML = add(num_1, num_2);
                }else if(operator === 'subtract'){
                    display.innerHTML = operate(subtract, num_2, num_1); //subtract(num_2, num_1);
                }else if(operator === 'multiply'){
                    display.innerHTML = operate(multiply, num_1, num_2); num//multiply(num_1, num_2);
                }else if(operator === 'divide'){
                    display.innerHTML = operate(divide, num_2, num_1);//divide(num_2, num_1);
                }
            })
        }

        
    })

    

})});

const clear = document.querySelectorAll(".clear");
clear.forEach(function(currentButton){
    currentButton.addEventListener('click', () =>{
        display.innerHTML = '';
        return;     
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


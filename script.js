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

//When the user presses a number(s), populate the display
const display = document.getElementById('display');
const button = document.querySelectorAll('.button');
const operatorButton = document.querySelectorAll('.operator');
button.forEach(function(currentButton){
    currentButton.addEventListener('click', () => {
        display.innerHTML += currentButton.textContent; 
    })
    return; 
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
    const grid = document.createElement('div');
    grid.classList.add("grid");
    //Make the 'grid' div a child of the 'container' div
    //container.appendChild(grid);
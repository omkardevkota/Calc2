let one=document.getElementById('one');
let two=document.getElementById('two');
let three=document.getElementById('three');
let four=document.getElementById('four');
let five=document.getElementById('five');
let six=document.getElementById('six');
let seven=document.getElementById('seven');
let eight=document.getElementById('eight');
let nine=document.getElementById('nine');
let zero=document.getElementById('zero');
let back=document.getElementById('back');
let reset = document.getElementById('reset');
let add=document.getElementById('add');
let diff=document.getElementById('diff');
let prod=document.getElementById('prod');
let divide=document.getElementById('divide');
let mod=document.getElementById('mod');
let dot=document.getElementById('dot');
let equals=document.getElementById('calculate');



one.addEventListener('click',function(){
    document.getElementById('display').value+=1;
});

two.addEventListener('click',function(){
    document.getElementById('display').value+=2;
});

three.addEventListener('click',function(){
    document.getElementById('display').value+=3;
});

four.addEventListener('click',function(){
    document.getElementById('display').value+=4;
});

five.addEventListener('click',function(){
    document.getElementById('display').value+=5;
});

six.addEventListener('click',function(){
    document.getElementById('display').value+=6;
});

seven.addEventListener('click',function(){
    document.getElementById('display').value+=7;
});

eight.addEventListener('click',function(){
    document.getElementById('display').value+=8;
});

nine.addEventListener('click',function(){
    document.getElementById('display').value+=9;
});

zero.addEventListener('click',function(){
    document.getElementById('display').value+=0;
});


back.addEventListener('click',function(){
    document.getElementById('display').value = document.getElementById('display').value.slice(0, -1);
});

reset.addEventListener('click',function(){
    document.getElementById('display').value = '';
});

add.addEventListener('click',function(){
    document.getElementById('display').value += '+';
});

diff.addEventListener('click',function(){
    document.getElementById('display').value += '-';
});

divide.addEventListener('click',function(){
    document.getElementById('display').value += '/';
});

prod.addEventListener('click',function(){
    document.getElementById('display').value += '*';
});

mod.addEventListener('click',function(){
    document.getElementById('display').value += '%';
});

dot.addEventListener('click', function(){
    document.getElementById('display').value += '.';
});


equals.addEventListener('click', function(){
    function calculateResult() {
        let inputElement = document.getElementById('display');
        let expression = inputElement.value;
        try {
            // Evaluate the expression using JavaScript's eval function
            let result = eval(expression);   //The eval function is used to evaluate the arithmetic
            // expression. It automatically respects the order of operations (PEMDAS/BODMAS).
    
            // Display the result in the same input box
            inputElement.value = result;
        } catch (e) {
            // Handle any errors (e.g., invalid input)
            inputElement.value = 'Error';
        }
    }
    calculateResult();
});


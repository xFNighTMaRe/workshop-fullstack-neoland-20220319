var buttons = document.querySelectorAll('button')

var buttonSum = buttons[0]
var buttonMinus = buttons[1]
var buttonMult = buttons[2]
var buttonDiv = buttons[3]

buttonSum.addEventListener('click', function() {
    var inputs = document.querySelectorAll('input')
    
    var input1 = inputs[0];
    var input2 = inputs[1];
    
    var value1 = input1.value;
    var value2 = input2.value;
    
    var viewResult = document.getElementById('viewResult') 
    viewResult.innerHTML = Number(value1) + Number(value2)
})

buttonMinus.addEventListener('click', function() {
    var inputs = document.querySelectorAll('input')
    
    var input1 = inputs[0];
    var input2 = inputs[1];
    
    var value1 = input1.value;
    var value2 = input2.value;
    
    var viewResult = document.getElementById('viewResult') 
    viewResult.innerHTML = Number(value1) - Number(value2)
})

buttonMult.addEventListener('click', function() {
    var inputs = document.querySelectorAll('input')
    
    var input1 = inputs[0];
    var input2 = inputs[1];
    
    var value1 = input1.value;
    var value2 = input2.value;
    
    var viewResult = document.getElementById('viewResult') 
    viewResult.innerHTML = Number(value1) * Number(value2)
})

buttonDiv.addEventListener('click', function() {
    var inputs = document.querySelectorAll('input')
    
    var input1 = inputs[0];
    var input2 = inputs[1];
    
    var value1 = input1.value;
    var value2 = input2.value;
    
    var viewResult = document.getElementById('viewResult') 
    viewResult.innerHTML = Number(value1) / Number(value2)
})
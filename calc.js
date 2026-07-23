function calculator(operator,num1, num2){
    function multiply(){
        return num1 * num2;
        
    }
    function add(){
        return num1 + num2;
        
    }

    function subtract(){
        return num1 - num2;
        
    }


    function divide (){
        return num1 / num2;
        
    }

    if(operator.toLowerCase() === "add"){
        return add();
    }
    else if(operator.toLowerCase() === "multiply"){
        return multiply();
    }
    else if(operator.toLowerCase() ==="subtract"){
        return subtract();
    }
    else if(operator.toLowerCase() === "divide"){
        if(num2 === 0){
            return "Can't divide by 0. Choose another number."
        }else{
        return divide();
        }
    }
    else{
        return "Can't find the operation";
    }

   
}

console.log(calculator( "Add", 5,2));

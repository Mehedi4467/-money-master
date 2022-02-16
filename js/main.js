// get all input 
function getInputValue(inputId){
    const inputText = document.getElementById(inputId + '-input');
    const inputValue = inputText.value;
    const inputNumber = parseFloat(inputValue);
    let massage = errorMassage(inputValue,inputId, inputNumber, inputText);
    if(massage == true){
        return inputNumber;
    }
    else{
        return 0;
    }
    
}

// calculate function income and cost 
function calculateIncomeAndCost(income, food, rend, clothes){
    const totalCostShow = document.getElementById('total-cost');
    const balanceShow = document.getElementById('balance');
    const totalCost = food + rend + clothes;
    const balance = income - totalCost;
    if(income < totalCost){
        const incomeError = document.getElementById('incomeError');
        incomeError.innerText = 'Please increase your income';
    }
    else{
    totalCostShow.innerText = totalCost;
    balanceShow.innerText = balance;
    incomeError.style.display = 'none';
    }
    
}



//error massage function 
function errorMassage(inputValue, inputId, inputNumber, inputText){
    const targetEorrorTag = document.getElementById(inputId + '-input-error');
    if(isNaN(inputValue) || inputText.value == ''){
        targetEorrorTag.innerText = 'Please input number !!'; 
    }
    else if(inputNumber < 0 ){
        targetEorrorTag.innerText = 'Please input a number  greater then zero !!';
    }
    else{
        targetEorrorTag.style.display = 'none';
        return true;
    }
   
}
// income and cost Calculate

document.getElementById('income_cost-button').addEventListener('click', function(){
    const incomeNumber = getInputValue ('income');
    const foodNumber = getInputValue ('food');
    const rentNumber = getInputValue ('rent');
    const clothesNumber = getInputValue ('clothes');
    if(incomeNumber !=0 || foodNumber != 0 || rentNumber !=0 || clothesNumber != 0){
        calculateIncomeAndCost(incomeNumber, foodNumber, rentNumber, clothesNumber);
    }
    
});


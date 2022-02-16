// get all input 
function getInputValue(inputId){
    const inputText = document.getElementById(inputId + '-input');
    const inputValue = inputText.value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;
}

// calculate function income and cost 
function calculateIncomeAndCost(income,food,rend,clothes){
    const totalCostShow = document.getElementById('total-cost');
    const balanceShow = document.getElementById('balance');
    const totalCost = food + rend + clothes;
    totalCostShow.innerText = totalCost;
    const balance = income - totalCost;
    balanceShow.innerText = balance;
}

// income and cost Calculate

document.getElementById('income_cost-button').addEventListener('click', function(){
    const incomeNumber = getInputValue ('income');
    const foodNumber = getInputValue ('food');
    const rentNumber = getInputValue ('rent');
    const clothesNumber = getInputValue ('clothes');
    calculateIncomeAndCost(incomeNumber, foodNumber, rentNumber, clothesNumber);
})
document.getElementById('withdraw-btn').addEventListener('click',function(){

    const withdrawField = document.getElementById('withdraw-part');
    const withdrawAmount = parseFloat(withdrawField.value);

    withdrawField.value = '';

    if(isNaN(withdrawAmount)){
        alert('Please Enter a number?');
        return;
    }


    const withdrawPartElement = document.getElementById('withdraw-total');
    const withdrawTotal = parseFloat(withdrawPartElement.innerText);


    
    const balancePartElement = document.getElementById('balance-total');
     const balanceTotal = parseFloat(balancePartElement.innerText);

     if(withdrawAmount > balanceTotal){
        alert('Not Enough money!!');
        return;
    }
    const currentWithdrawTotal = withdrawTotal+withdrawAmount;
    withdrawPartElement.innerText = currentWithdrawTotal;
    // console.log(currentWithdrawTotal);
     
     const newBalanceTotal = balanceTotal- withdrawAmount
     balancePartElement.innerText = newBalanceTotal;

    

})
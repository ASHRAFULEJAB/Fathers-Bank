document.getElementById('deposite-btn').addEventListener('click', function(){
    const depositeField = document.getElementById('deposite-part');
    const depositeAmount = parseFloat(depositeField.value);

     const depositePartElement = document.getElementById('deposite-total');
     const depositeTotal = parseFloat( depositePartElement.innerText);
     const currentDepositeTotal = depositeTotal+depositeAmount;

     depositePartElement.innerText = currentDepositeTotal;
     
     const balancePartElement = document.getElementById('balance-total');
     const balanceTotal = parseFloat(balancePartElement.innerText);

     const currentBalanceTotal = balanceTotal+depositeAmount;
     balancePartElement.innerText = currentBalanceTotal;


     depositeField.value = '';
    
})
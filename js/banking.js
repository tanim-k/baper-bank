/// handle deposit button event 1 ////
    document.getElementById('deposit-button').addEventListener('click', function () {
/// get the amount deposited ::: deposit portion// 
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);
/* or this way >   
/// update deposit total */
    document.getElementById('deposit-total');
    const previousDepositText = document.getElementById('deposit-total').innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    document.getElementById('deposit-total').innerText = newDepositTotal;
/// update account balance after deposit
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
/// clear the deposit input field 
    document.getElementById('deposit-input').value = '';
})
/// handle withdraw event handler 
    document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
/// set withdraw total 
    const withdarwTotlal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdarwTotlal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdarwTotlal.innerText = newWithdrawTotal;
/// set balance total 
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
/// clear the withdraw input field 
    withdrawInput.value = '';
})
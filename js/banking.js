/// handle deposit button by  event handeler: 1 /
    document.getElementById('deposit-button').addEventListener('click', function () {
/// get the amount deposited : deposit portion /
    const depositInput = document.getElementById('deposit-input');
    const newDepositAmountText = depositInput.value;
    const newDepositAmount = parseFloat(newDepositAmountText);  
/// update deposit total /
    document.getElementById('deposit-total');
    const previousDepositText = document.getElementById('deposit-total').innerText;
    const previousDepositAmount = parseFloat(previousDepositText);
    const newDepositTotal = previousDepositAmount + newDepositAmount;
    document.getElementById('deposit-total').innerText = newDepositTotal;
/// update account balance after deposit /
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotal.innerText = newBalanceTotal;
/// clear the deposit input field /
    document.getElementById('deposit-input').value = '';
})
/// handle withdraw button by event Handler : 2////
    document.getElementById('withdraw-button').addEventListener('click', function () {
    const withdrawInput = document.getElementById('withdraw-input');
    const withdrawAmountText = withdrawInput.value;
    const newWithdrawAmount = parseFloat(withdrawAmountText);
/// set withdraw total /
    const withdarwTotlal = document.getElementById('withdraw-total');
    const previousWithdrawText = withdarwTotlal.innerText;
    const previousWithdrawTotal = parseFloat(previousWithdrawText);
    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withdarwTotlal.innerText = newWithdrawTotal;
/// update account balance after withdraw some money /
    const balanceTotal = document.getElementById('balance-total');
    const previousBalanceText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceText);
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceTotal.innerText = newBalanceTotal;
/// clear the withdraw input field 
    withdrawInput.value = '';
})
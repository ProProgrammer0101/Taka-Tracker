function addItemExpense() {
    let amount = document.getElementById('amount');
    let currency = document.getElementById('currency');
    let itemName = document.getElementById('itemName');

    let account = {
        "amount": amount.value,
        "currency": currency.value,
        "itemName": itemName.value
    };

    localStorage.setItem("amount", account.amount);
    localStorage.setItem("currency", account.currency);
    localStorage.setItem("itemName", account.itemName);

    amount.value = localStorage.getItem("amount");
    currency.value = localStorage.getItem("currency");
    itemName.value = localStorage.getItem("itemName");

    console.log(localStorage)
}

addItemExpense()
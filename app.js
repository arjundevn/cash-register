let billAmount = document.querySelector(".billAmount");
let cashAmount = document.querySelector(".cashAmount");
let check = document.querySelector(".check");
let td = document.querySelectorAll("td");


check.addEventListener('click', function (event) {
    let NumBillAmount = Number(billAmount.value);
    let NumCashAmount = Number(cashAmount.value);
    for(var i =0;i<7;i++) {
        td[i].innerHTML = 0;
    }
    checkBillAndCash(NumBillAmount, NumCashAmount);
})

function checkBillAndCash(NumBillAmount, NumCashAmount) {
    if (NumBillAmount > 0) {
        if (NumCashAmount > 0) {
            if (NumCashAmount > NumBillAmount) {
                denominations((NumCashAmount - NumBillAmount))
            }
            else alert("Cash recieved by customer is less than billed amount");
        }
        else alert("Please enter right cash amount given by customer");
    }
    else alert("Please enter right bill amount");
}

function denominations(change) {
    var changeLeft = change;
    var notes = [2000, 500, 100, 20, 10, 5, 1];

    for(var i = 0; i<notes.length; i++){
        if (changeLeft >= notes[i]){
            // console.log("Notes"+notes[i]+":"+(parseInt(changeLeft/notes[i])));
            td[i].innerHTML = parseInt(changeLeft/notes[i]);
            changeLeft -= (parseInt(changeLeft/notes[i]))*notes[i]
            // console.log(changeLeft);
        } 
    }
    
}
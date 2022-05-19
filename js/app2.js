//Define card preview image of a card, this produces an array of cards. 
let cards = document.getElementsByClassName("card-preview-image");

//Define blank card image
let blankCard = document.getElementById("blank-card");

//Funtion to state when click on a design remove blank card and replace with selected card image
function selectButton(n){
    let buttonSelected = n;
    if(buttonSelected !== document.getElementById("one")){
        cards[0].style.display = "none";
    } else {
        cards[0].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("two")){
        cards[1].style.display = "none";
    } else {
        cards[1].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("three")){
        cards[2].style.display = "none";
    } else {
        cards[2].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("four")){
        cards[3].style.display = "none";
    } else {
        cards[3].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("five")){
        cards[4].style.display = "none";
    } else {
        cards[4].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("six")){
        cards[5].style.display = "none";
    } else {
        cards[5].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("seven")){
        cards[6].style.display = "none";
    } else {
        cards[6].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("eight")){
        cards[7].style.display = "none";
    } else {
        cards[7].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("nine")){
        cards[8].style.display = "none";
    } else {
        cards[8].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("ten")){
        cards[9].style.display = "none";
    } else {
        cards[9].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("eleven")){
        cards[10].style.display = "none";
    } else {
        cards[10].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("twelve")){
        cards[11].style.display = "none";
    } else {
        cards[11].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("thirteen")){
        cards[12].style.display = "none";
    } else {
        cards[12].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("fourteen")){
        cards[13].style.display = "none";
    } else {
        cards[13].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("fifteen")){
        cards[14].style.display = "none";
    } else {
        cards[14].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("sixteen")){
        cards[15].style.display = "none";
    } else {
        cards[15].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("seventeen")){
        cards[16].style.display = "none";
    } else {
        cards[16].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("eighteen")){
        cards[17].style.display = "none";
    } else {
        cards[17].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("nineteen")){
        cards[18].style.display = "none";
    } else {
        cards[18].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("twenty")){
        cards[19].style.display = "none";
    } else {
        cards[19].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("twentyone")){
        cards[20].style.display = "none";
    } else {
        cards[20].style.display = "block";
        blankCard.style.display = "none";
    }
    if(buttonSelected !== document.getElementById("twentytwo")){
        cards[21].style.display = "none";
    } else {
        cards[21].style.display = "block";
        blankCard.style.display = "none";
    }
}

//Define card number input field
const cardNumber = document.getElementById("cnum");

// Add space after every 4 numbers for card input field 
cardNumber.onkeydown = function () {
    if (cardNumber.value.length > 0 && cardNumber.value.length < 28) {
        if (cardNumber.value.length % 4 == 0) {
            cardNumber.value += "    ";
        }
    }
}

//Define sort code input field
const sortCode = document.getElementById("scode");

// Add line after every 2 numbers for sort code input field
sortCode.onkeydown = function () {
    if (sortCode.value.length > 0 && sortCode.value.length < 14) {
        if (sortCode.value.length % 2 == 0) {
            sortCode.value += " -  ";
        }
    }
}

//Define options section 
const options = document.getElementById("options");

//Define personal details section 
const personalDetails = document.getElementById("personal-details");

//Define contact details section
const cardDetails = document.getElementById("card-details");

//Define order confirmation pop up
const orderConf = document.getElementById("order-confirmation")

//Display personal details
function showPersonalDetails () {
    options.style.display = "none";
    personalDetails.style.display = "block";
    cardDetails.style.display = "none";
}

//Display options
function showOptions () {
    options.style.display = "block";
    personalDetails.style.display = "none";
    cardDetails.style.display = "none";
}

//Display card details
function showCardDetails () {
    options.style.display = "none";
    personalDetails.style.display = "none";
    cardDetails.style.display = "block";
}

//Show order confirmation window
function showOrderConf () {
    orderConf.style.display = "block";
}

//Stop page from refreshing when form submitted
const form = document.getElementById("form");
const formTwo = document.getElementById("form-page-two");
function handleForm(event) { event.preventDefault(); } 
form.addEventListener('submit', handleForm);
formTwo.addEventListener('submit', handleForm);

//Show Order confirmation after alerting payment was processed. 
function showButton() {
    alert("Your payment for £29.99 was processed by CustomCard.")
    showOrderConf();
}



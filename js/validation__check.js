const SUBMIT__BTN = document.getElementById("submitBtn");
const NAME__INPUT = document.getElementById("nameInput");
const EMAIL__INPUT = document.getElementById("emailInput");
const SELECT__SERVICE = document.getElementById("selectService");
const SERVICES = ["financial consultancy", "strategy consultancy", "tax consultancy"];
const TOAST__CONTAINER = document.getElementById('success__message');
const TOAST__TIMER = document.querySelector('.toast__time');
const toast = new bootstrap.Toast(TOAST__CONTAINER);

SUBMIT__BTN.classList.add("is-valid");

SUBMIT__BTN.addEventListener("click", () => {
    let nameIsCorrect = checkNameInput();
    let emailIsCorrect = checkEmailInput();
    let selectedService = giveSelectedService();
        
    if(nameIsCorrect === true &&
        emailIsCorrect === true){
            sendMessage();
        }
})

function checkNameInput() {
    let inputValue = NAME__INPUT.value;
    if(inputValue === "" || 
    inputValue.match(/[^\s\w]/g) ||
    inputValue.match(/\d/g) ||
    (inputValue.match(/\w+\s\w+/g) === null)){
        showInValid(NAME__INPUT);
        return false;
    }
     
    showValid(NAME__INPUT);
    return true;
};
function checkEmailInput() {
    let emailInput = EMAIL__INPUT.value;
    if(emailInput === "" ||
    (emailInput.match(/\w+@gmail.\w+$/gim) === null))
    {
        showInValid(EMAIL__INPUT);
        return false;
    }
        
    showValid(EMAIL__INPUT);
    return true;
};
function giveSelectedService() {
    let selectedOptionNum = SELECT__SERVICE.value;
    showValid(SELECT__SERVICE);
    return SERVICES[selectedOptionNum];
};
function sendMessage() {
    toast.show()
    let date = new Date();
    TOAST__TIMER.innerHTML = `${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`;
};

function showValid(input) {

    input.classList.remove("is-invalid");
    input.classList.add("is-valid");

};
function showInValid(input) {

    input.classList.remove("is-valid");
    input.classList.add("is-invalid");

};
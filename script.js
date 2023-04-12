// const formGroup = document.querySelector('.form-group');
const btnSubmit = document.querySelector('.btn-submit');
const inputEmail = document.getElementById('email');
const alertError = document.querySelector('.alert-error');
const errorIcon = document.querySelector('.alert-icon');
const emailCheck = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;


btnSubmit.addEventListener("click", (e) => {
    //prevent default action 
    e.preventDefault();

    //email validation
    const email = inputEmail.value;

    // email not valid
    if (email == "" || email == undefined) {
        inputEmail.classList.add("focus");
        alertError.innerText = "Please provide us your email";
        alertError.style.display = "block";
        errorIcon.style.display = "block";
    } else if (!email.match(emailCheck)) {
        inputEmail.classList.add("focus");
        alertError.innerText = "Please provide a valid email";
        alertError.style.display = "block";
        errorIcon.style.display = "block";
    } else {
        //email valid
        inputEmail.classList.remove("focus");
        alertError.classList.remove("alert-error");
        alertError.classList.add("alert-success");
        alertError.innerText = "Thank you for subscribing";
        errorIcon.style.display = "none";
    }
});

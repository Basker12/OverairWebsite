let form = document.querySelector('#form');
let name = document.querySelector('#name');
let email = document.querySelector('#email');
let text = document.querySelector('#text')

let Regx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

form.addEventListener('submit', (e) => {
    const nameVal = name.value.trim();
    const emailVal = email.value.trim();
    const textVal = email.value.trim();

    if (nameVal === "") {
        e.preventDefault();
        setErrorFor(name, 'Name cannot be blank.')
    } else {
        setSuccessFor(name, 'Valid name.')
    }

    if (emailVal === "") {
        e.preventDefault();
        setErrorFor(email, 'Email cannot be blank.')

    } else if (!isEmail(emailVal)) {
        e.preventDefault();
        setErrorFor(email, 'Not a valid email.')
    } else {
        setSuccessFor(email, 'Valid email.')
    }

    if (textVal === "") {
        e.preventDefault();
        setErrorFor(text, 'Message cannot be blank.')
    } else  {
        setSuccessFor(text, 'Valid message.')
    }

});

function setSuccessFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = "block";
    small.style.color = "#EC008C";
    small.innerText = message;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.style.display = "block";
    small.style.color = "red";
    small.innerText = message;
}

function isEmail(email) {
    return Regx.test(email);
}
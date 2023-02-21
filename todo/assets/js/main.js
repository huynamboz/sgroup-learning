let openInput = document.getElementById('open-input');
let inputForm  = document.getElementById('popup-input');
let closeFormInput = document.getElementById('popup-input');


openInput.addEventListener('click', function() {
    inputForm.classList.add('enable');
})
closeFormInput.addEventListener('click', function() {
    inputForm.classList.remove('enable');
})

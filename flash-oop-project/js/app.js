let addQuestion = document.getElementById('show-btn');
let questionForm = document.getElementsByClassName('question-card');
let closeBtn = document.getElementsByClassName('close-btn');
let saveBtn = document.getElementsByClassName('submitBtn');
let listCard = document.getElementById('questions-list');
let question = document.getElementById('question-input');
let answer = document.getElementById('answer-input');
let delBtn = null;
addQuestion.addEventListener('click', function() {
    console.log('clicked');
    questionForm[0].style.display = 'block';
});
closeBtn[0].addEventListener('click', function() {
    questionForm[0].style.display = 'none';
});
saveBtn[0].addEventListener('click', function() {
    if ( currentEdit != null) {
        currentEdit.parentElement.parentElement.getElementsByClassName('text-capitalize')[0].innerHTML = question.value;
        currentEdit.parentElement.parentElement.getElementsByClassName('answer')[0].innerHTML = answer.value;
        currentEdit = null;
        question.value = '';
    answer.value = '';
        return;
    }
    if(question.value == '' || answer.value == ''){
        alert('Please fill all the fields');
    }else{
        console.log(question.value,answer)
    listCard.innerHTML += `
    <div class="card card-body flashcard my-3 w-50">
     <h4 class="text-capitalize">${question.value}</h4>
     <a  onclick="showHide(this)" class="text-capitalize my-3 show-answer">show/hide answer</a>
        <h5 class="answer mb-3">${answer.value}</h5>
        <div class="flashcard-btn d-flex justify-content-between">
        <a onclick="edit(this)" id="edit-flashcard" class=" btn my-1 edit-flashcard text-uppercase" data-id="">edit</a>
        <a onclick="del(this)" class="delete-flashcard btn my-1 delete-flashcard text-uppercase">delete</a>
     </div>
    `;
    question.value = '';
    answer.value = '';
    }
});
function showHide(ele){
    let answer = ele.parentElement.getElementsByClassName('answer');
    console.log(answer);
    answer[0].classList.toggle('showItem');
}

function del(ele){
    console.log("okkkkkkkkk")
    ele.parentElement.parentElement.remove();
}
let currentEdit = null;
function edit(ele){
    currentEdit = ele;
    console.log(currentEdit);
    question.value=ele.parentElement.parentElement.getElementsByClassName('text-capitalize')[0].innerHTML;
    answer.value=ele.parentElement.parentElement.getElementsByClassName('answer')[0].innerHTML;
}
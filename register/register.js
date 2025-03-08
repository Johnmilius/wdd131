// register.js
import {participantTemplate, submitForm} from "./templates.js";

const addButton = document.querySelector('#add');
const participantContainer = document.querySelector('.participants');

addButton.addEventListener('click', function(){
    const count = participantContainer.querySelectorAll('[class^=participant]').length + 1;
    // const count = 1;
    const addButton =  document.querySelector('#add');
    addButton.insertAdjacentHTML("beforebegin", participantTemplate(count))
});

const submitButton = document.querySelector('#submitButton');
submitButton.addEventListener('click', function(event){
    submitForm(event, participantContainer);
});
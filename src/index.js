import './style.css';
import {
  addScores,getScore,userInput,scoreInput,
} from './modules/lead-api.js';

const submitBtn = document.querySelector('#submit-btn');
const failAlert = document.querySelector('.fail-alert');
const refreshBtn = document.querySelector('#refresh-btn');

window.addEventListener('pageshow',()=>{
  getScore();
});

refreshBtn.addEventListener('click', () =>{
  getScore();
});

submitBtn.addEventListener('click',()=>{
  if(scoreInput.value === '' || userInput.value === ''){
    scoreInput.value = '';
    failAlert.innerHTML = 'Submission failed. Try again.';
  }else{
    addScores();
  }
});

scoreInput.addEventListener('click',() =>{
  failAlert.innerHTML = '';
});

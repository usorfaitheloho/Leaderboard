import './style.css';
import {
  addScores
} from './modules/lead-api.js';
import {refreshScore} from './modules/score.js';

const form = document.querySelector('#form');
const refreshBtn = document.querySelector('#refresh-btn');

refreshScore();

refreshBtn.addEventListener('click', () =>{
  refreshScore();
});

form.addEventListener('submit',async (e) =>{
  e.preventDefault();
 await addScores();
  refreshScore();
  form.reset();
});



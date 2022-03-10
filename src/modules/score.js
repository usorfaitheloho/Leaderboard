import {
    getScore
  } from '../modules/lead-api.js';

const scoreBoard = document.querySelector("#score-board");

const renderScore = async (data)=>{
    let scoreHTML = '';
        data.forEach(({user,score}) => {
        scoreHTML += `
    <li>
      <p class="name">${user}</p>
      <p class="score">${score}</p>
    </li>
    `;
  });
  scoreBoard.innerHTML = scoreHTML;
}


 export const refreshScore = async () =>{
 const data = await getScore();
 data.sort((player1,player2) => player2.score - player1.score);
renderScore(data);
 }
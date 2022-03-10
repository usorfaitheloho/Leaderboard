export const userInput = document.querySelector(".name-input");
export const scoreInput = document.querySelector(".score-input");
const scoreBoard = document.querySelector("#score-board");

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/FN8AxSqDbiVojvawkFIO/scores/';

export const getScore = async () => {
  const response = await fetch(requestURL);
  const scoreArr = await response.json();
  const devScores = scores.result;

  let scoreHTML = '';
  devScores.forEach((player) => {
    scoreHTML 
    += `
    <li>
      <p class="name">${player.user}</p>
      <p class="score">${player.score}</p>
    </li>
    `;
  });
  scoreBoard.innerHTML = scoreHTML;

};

export const addScores = async () =>{
  await fetch(requestURL,{
    method: 'POST',
    headers:{
      'Content-Type' : 'application/json',
    },
    body:JSON.stringify(
      {
        user:userInput.value.trim(),
        score: scoreInput.value.trim(),
      },
    ),
  });
  userInput.value = '';
  scoreInput.value = '';
};
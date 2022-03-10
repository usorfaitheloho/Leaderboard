export const userInput = document.querySelector('.name-input');
export const scoreInput = document.querySelector('.score-input');

const requestURL = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/9LTt99VZIWrCAWVFfiTW/scores';

export const getScore = async () => {
  const response = await fetch(requestURL);
  const scoreArr = await response.json();
  const devScores = await scoreArr.result;
  return devScores;
};

export const addScores = async () => {
  const response = await fetch(requestURL, {
    method: 'POST',
    headers: {
      'Content-Type' : 'application/json',},
    body: JSON.stringify(
      {
        user: userInput.value.trim(),
        score: scoreInput.value.trim(),
      },
    ),
  });
  const data = response.json();
  return data;
};
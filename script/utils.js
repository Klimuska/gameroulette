'use strict';

function getRandomNumber() {
  return Math.ceil(Math.random() * 10);
  }

function areNumbersEqual(type, number) {
  if (number === Number(type)) {
    return alert('Ты выйграл!'); }
    else if (number !== Number(type) && Number(type) < 11 && Number(type) > 0) {
    return alert('Ты проиграл!');} 
    else { 
    return alert('Ты ввел что-то не так!! Попробуй еще раз')}
}

export { getRandomNumber, areNumbersEqual };

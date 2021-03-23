'use strict';

import { getRandomNumber, areNumbersEqual } from './utils.js';

for (let i = 0; true; i++) {
    if (confirm("Сыграем?")) {
        let type = prompt('Угадай число от 1 до 10!!', 'от 1 до 10');
        let resultNumber = getRandomNumber();
        areNumbersEqual(type, resultNumber);
    } else {
        alert("Может в другой раз!");
        break;
        }
    }

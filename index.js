import { fifaData } from './fifa.js';
// console.log(fifaData);

// console.log('its working');
// ⚽️ M  V P ⚽️ //

/* Task 1: Investigate the data above. Practice accessing data by console.log-ing the following pieces of data 

(a) Home Team name for 2014 world cup final
(b) Away Team name for 2014 world cup final
(c) Home Team goals for 2014 world cup final
(d) Away Team goals for 2014 world cup final
(e) Winner of 2014 world cup final */
console.log(`*************** TASK 1 ***************`);

console.log(fifaData.forEach(function(item) {
    if (item['Year'] === 2014 && item['Stage'] === 'Final') {
                console.log(`(a). ${item['Home Team Name']}`);
            }
        }));

console.log(fifaData.forEach(function(item) {
    if (item['Year'] === 2014 && item['Stage'] === 'Final') {
                console.log(`(b). ${item['Away Team Name']}`);
            }
        }));

console.log(fifaData.forEach(function(item) {
    if (item['Year'] === 2014 && item['Stage'] === 'Final') {
                console.log(`(c). ${item['Home Team Goals']}`);
            }
        }));

console.log(fifaData.forEach(function(item) {
    if (item['Year'] === 2014 && item['Stage'] === 'Final') {
                console.log(`(d). ${item['Away Team Goals']}`);
            }
        }));

console.log(fifaData.forEach(function(item) {
    if (item['Year'] === 2014 && item['Stage'] === 'Final' && item['Home Team Goals'] > item['Away Team Goals']) {
                console.log(`(e). ${item['Home Team Name']} won the 2014 World Cup Final`);
            } else if (item['Year'] === 2014 && item['Stage'] === 'Final') {
                console.log(`${item['Away Team Name']} won the 2014 World Cup Final`);
            }
        }));

/* Task 2: Create a function called  getFinals that takes `data` as an argument and returns an array of objects with only finals data */
console.log(`*************** TASK 2 ***************`);
function getFinals(data) {
    const finalsArray = [];
    data.forEach(function(item) {
        if (item['Stage'] === 'Final')
        finalsArray.push(item);
    });
    return finalsArray;
}

const getFinalsTwo = fifaData.filter((item) => item['Stage'] === 'Final');

console.log(getFinals(fifaData));
console.log(getFinalsTwo);

// const getFinals = fifaData.map((item) => item['Stage'] === 'Final'); 
// console.log(getFinals);

/* Task 3: Implement a higher-order function called `getYears` that accepts the callback function `getFinals`, and returns an array called `years` containing all of the years in the dataset */
console.log(`*************** TASK 3 ***************`);

function getYears(callback) {
    const finalsYears = callback.map(callback => {
        return callback['Year'];
    });
    return finalsYears;
    
};

console.log(getYears(getFinalsTwo));

/* Task 5: Implement a higher-order function called `getWinners`, that accepts the callback function `getFinals()` and determine the winner (home or away) of each `finals` game. Return the name of all winning countries in an array called `winners` */ 
console.log(`*************** TASK 5 ***************`);
function getWinners(callback) {
    // const temp = callbacallbackck();
    const winners = [];
    callback.forEach(callback => {
        if (callback['Home Team Goals'] > callback['Away Team Goals']) {
            winners.push(callback['Home Team Name']);
        } else if (callback['Away Team Goals'] > callback['Home Team Goals']) {
            winners.push(callback['Away Team Name']);
        } else if (callback['Win conditions'].includes(callback['Home Team Name'])) {
            winners.push(callback['Home Team Name']);
        } else if (callback['Win conditions'].includes(callback['Away Team Name'])) {
            winners.push(callback['Away Team Name']);
        }
    })
    return winners;
}

console.log(getWinners(getFinalsTwo));

/* Task 6: Implement a higher-order function called `getWinnersByYear` that accepts the following parameters and returns a set of strings "In {year}, {country} won the world cup!" 

Parameters: 
 * callback function getWinners
 * callback function getYears
 */
console.log(`*************** TASK 6 ***************`);
function getWinnersByYear(array,funct1, funct2) {
    const newArray = [];
    const fun1 = funct1;
    const fun2 = funct2;
    // console.log(fun2);
    fun1.forEach((item, index) => {
        // console.log(funct2); 
        newArray.push(`In ${fun2[index]}, ${fun1[index]} won the world cup!`)});
        return newArray;
};




console.log(getWinnersByYear(fifaData,getWinners(getFinals(fifaData)),getYears(getFinals(fifaData))));

/* Task 7: Write a function called `getAverageGoals` that accepts a parameter `data` and returns the the average number of home team goals and away team goals scored per match (Hint: use .reduce and do this in 2 steps) */
console.log(`*************** TASK 7 ***************`);

function getAverageGoals(data) {
const homeTeamPoints = data.reduce((sum,item) => sum + item['Home Team Goals'],0);
// console.log(homeTeamPoints);
const homeTeamGames = data.length;
// console.log(homeTeamGames);
const averageHomePoints = (homeTeamPoints/homeTeamGames).toFixed(1);
// console.log(averageHomePoints);
const awayTeamPoints = data.reduce((sum,item) => sum + item['Away Team Goals'],0);
// console.log(awayTeamPoints);
const awayTeamGames = data.length;
// console.log(awayTeamGames);
const averageAwayPoints = (awayTeamPoints/awayTeamGames).toFixed(1);
// console.log(averageAwayPoints);
return `The average home team goals scored per match is ${averageHomePoints}, while the average away team goals scored per match is ${averageAwayPoints}.`;
};

console.log(getAverageGoals(fifaData));

/// STRETCH 🥅 //

/* Stretch 1: Create a function called `getCountryWins` that takes the parameters `data` and `team initials` and returns the number of world cup wins that country has had. 

Hint: Investigate your data to find "team initials"!
Hint: use `.reduce` */

function getCountryWins(data,teamInitials) {
const countryWins = data.map((item) => item['Home Team Initials'] === teamInitials || item['Away Team Initials'] === teamInitials);
console.log(countryWins);

};

getCountryWins(getFinalsTwo,'BRA');


/* Stretch 3: Write a function called getGoals() that accepts a parameter `data` and returns the team with the most goals score per appearance (average goals for) in the World Cup finals */

function getGoals(/* code here */) {

    /* code here */

};

getGoals();


/* Stretch 4: Write a function called badDefense() that accepts a parameter `data` and calculates the team with the most goals scored against them per appearance (average goals against) in the World Cup finals */

function badDefense(/* code here */) {

    /* code here */

};

badDefense();

/* If you still have time, use the space below to work on any stretch goals of your chosing as listed in the README file. */

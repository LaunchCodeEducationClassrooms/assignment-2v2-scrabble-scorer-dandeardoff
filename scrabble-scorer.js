// inspired by https://exercism.io/tracks/javascript/exercises/etl/solutions/91f99a3cca9548cebe5975d7ebca6a85

const input = require("readline-sync");

const oldPointStructure = {
  0: [' '],
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z']
};

function oldScrabbleScorer(word) {
	word = word.toUpperCase();
	let letterPoints = "";
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += `Points for '${word[i]}': ${pointValue}\n`
		 }
 
	  }
	}
	return letterPoints;
 }

// your job is to finish writing these functions and variables that we've named //
// don't change the names or your program won't work as expected. //

function initialPrompt() {
  const input = require('readline-sync');
  let info = input.question("Let's play some scrabble!\nEnter a word:")
  info = info.toLowerCase();
  let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', ' ']
  
  let letter = '';

  for (let i=0;i<info.length;i++){
    letter = alphabet.indexOf(info[i])
    letter = alphabet[letter]
    if (info[i] != letter){
    info = input.question("Let's play some scrabble!\nEnter a word:")
  } 
  }
  return info
}

let simpleScore = function(word){
  word = word.toUpperCase();
	let letterPoints = "";
  letterPoints = word.length
	return (Number(letterPoints));
 }

let vowelBonusScore = function(word){
  word = word.toUpperCase();
  let letterPoints = '';
	letterPoints = (Number(letterPoints));
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in vowelPointStructure) {
 
		 if (vowelPointStructure[pointValue].includes(word[i])) {
			letterPoints += (Number(pointValue))
		 }
 
	  }
	}
	return letterPoints;
};

let scrabbleScore = function(word){
  word=word.toLowerCase();
  let letterPoints = "";
  letterPoints = (Number(letterPoints));
 
	for (let i = 0; i < word.length; i++) {
 
	  for (const pointValue in oldPointStructure) {
 
		 if (oldPointStructure[pointValue].includes(word[i])) {
			letterPoints += (Number(pointValue))
		 }
 
	  }
	}
	return letterPoints;
 };

const scoringAlgorithms = [
  name = {
  simpleScore: "Simple Score",
  vowelBonusScore: "Bonus Vowels",
  scrabbleScore: "Scrabble"
},

description = {
  simpleScore: "Each letter is worth 1 point.",
  vowelBonusScore: "Vowels are 3 pts, consonants are 1 pt.",
  scrabbleScore: "The traditional scoring algorithm."
},

scorerFunction = {
  simpleScore: simpleScore,
  vowelBonusScore: vowelBonusScore,
  scrabbleScore: scrabbleScore
}
];

function scorerPrompt(){
  console.log(`\nWhich scoring algorithm would you like to use? \n0 - Simple: One point per character \n1 - Vowel Bonus: Vowels are worth 3 points \n2 - Scrabble: Uses scrabble point system \n`)

  const input=require('readline-sync');
  let info = input.question("Enter 0, 1, or 2: ")

  let numberArray = ['0', '1', '2']

  let number = '';

  for (let i=0;i<info.length;i++){
    number = numberArray.indexOf(info[i])
    number = numberArray[number]
    if (info[i] != number){
      info = input.question("Enter 0, 1, or 2: ")
    }
  }
  
  
  return info
  
}

function transform(object){
  let newPoints = {};
  for (item in object){
    for (let i=0;i<object[item].length;i++){
    object[item][i] = object[item][i].toLowerCase()
  }
  }

  for (item in object){
    for (let i=0;i<26;i++){
      newPoints[object[item][i]]=item
    }
    }
    return newPoints
};

let newPointStructure =(transform(oldPointStructure));

function runProgram(){
  let finalScore = '';
  let initPrompt = (`${initialPrompt()}\n\n`)
  let score = scorerPrompt()
  if (score == 0){
    finalScore = scoringAlgorithms[2].simpleScore(initPrompt)
    finalScore = finalScore - 2
  } else if (score == 1){
    finalScore = scoringAlgorithms[2].vowelBonusScore(initPrompt)
  } else if (score == 2){
    finalScore = scoringAlgorithms[2].scrabbleScore(initPrompt)
  }
  return (`Score: ${finalScore}`)
   
}

// Don't write any code below this line //
// And don't change these or your program will not run as expected //
module.exports = {
   initialPrompt: initialPrompt,
   transform: transform,
   oldPointStructure: oldPointStructure,
   simpleScore: simpleScore,
   vowelBonusScore: vowelBonusScore,
   scrabbleScore: scrabbleScore,
   scoringAlgorithms: scoringAlgorithms,
   newPointStructure: newPointStructure,
	runProgram: runProgram,
	scorerPrompt: scorerPrompt
};


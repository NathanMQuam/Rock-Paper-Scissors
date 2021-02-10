const resultsElement = document.getElementById("results")
const playerWeaponElement = document.getElementById("playerWeapon")
const cpuWeaponElement = document.getElementById("cpuWeapon")
const choicesElement = document.getElementById("choicesView")

let playerChoice = ""
let result = ""
let cpuChoice = "gun"



/**
 * @param {String} choice
 */
function play (choice) {
   playerChoice = choice
   cpuChoice = randomChoice()

   determineWinner()
}

function randomChoice() {
   let choices = ["rock", "paper", "scissors"]

   return choices[Math.floor(Math.random() * 3)]
}

function determineWinner() {
   switch (playerChoice) {
      case "rock":
         switch (cpuChoice) {
            case "rock":
               result = "Tie"
               break;
            case "paper":
               result = "Lose"
               break;
            case "scissors":
               result = "Win!"
               break;
         }
         break;
      case "paper":
         switch (cpuChoice) {
            case "rock":
               result = "Win!"
               break;
            case "paper":
               result = "Tie"
               break;
            case "scissors":
               result = "Lose"
               break;
         }
         break;
      case "scissors":
         switch (cpuChoice) {
            case "rock":
               result = "Lose"
               break;
            case "paper":
               result = "Win!"
               break;
            case "scissors":
               result = "Tie"
               break;
         }
   }

   draw()
}





function showWeapons() {
   playerWeaponElement.innerText = playerChoice
   cpuWeaponElement.innerText = cpuChoice

   choicesElement.hidden = false
}

function hideWeapons() {
   choicesElement.hidden = true
}

function draw() {
   resultsElement.innerText = result

   showWeapons()
}

/*
   Possible cases:
               0         1        2
               Rock     Paper    Scissors
0  Rock        Tie      Lose     Win
1  Paper       Win      Tie      Lose
2  Scissors    Lose     Win      Tie
*/
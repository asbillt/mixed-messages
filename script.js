// Define that the JavaScript code should be executed in 'strict mode'.
"use strict";

// Declare variables to be assigned html elements.
const messageGen = document.querySelector(".generate");
let message = document.querySelector(".message");

// Create 3 arrays that contain the phrases that make up
// the message.
const days = [
  "It's Monday",
  "It's Tuesday",
  "It's Wednesday",
  "It's Thursday",
  "It's Friday",
  "It's Saturday",
  "It's Sunday",
];

const phrases = [
  "rise and shine,",
  "it's getting late,",
  "cloudy weather,",
  "I'm tired,",
];

const actions = [
  "let's get some coffee!",
  "time to sleep.",
  "we are going to the beach!",
  "time to drive.",
];

// Method 2
// Define a function that returns a random array element.
const generateRandomWord = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

// Define a function that returns a random template literal
// comprised of random phrases, one from each array.
const generateRandomMessage = () => {
  return `${generateRandomWord(days)}, ${generateRandomWord(
    phrases
  )} ${generateRandomWord(actions)}`;
};

// Method1
// let var1 = array1[Math.floor(Math.random() * array1.length)];
// let var2 = array2[Math.floor(Math.random() * array2.length)];
// let var3 = array3[Math.floor(Math.random() * array3.length)];
// const message = `On ${var1}, ${var2} ${var3}`;

// Test to make sure the random message generator works
console.log(generateRandomMessage());

// Adds an event listener to the button which generates a random message after the button is clicked.
messageGen.addEventListener("click", function () {
  message.textContent = generateRandomMessage();
});

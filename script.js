const array1 = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

const array2 = [
  "Rise and Shine",
  "It's getting late",
  "Cloudy weather",
  "I'm tired",
];

const array3 = [
  "Let's get some coffee",
  "Time to sleep",
  "We are going to the beach",
  "Time to drive",
];

//Method 2
const generateRandomWord = (array) => {
  return array[Math.floor(Math.random() * array.length)];
};

const generateRandomMessage = () => {
  return `${generateRandomWord(array1)} ${generateRandomWord(
    array2
  )} ${generateRandomWord(array3)}`;
};

// Method1
// let var1 = array1[Math.floor(Math.random() * array1.length)];
// let var2 = array2[Math.floor(Math.random() * array2.length)];
// let var3 = array3[Math.floor(Math.random() * array3.length)];

// const message = `On ${var1}, ${var2} ${var3}`;

console.log(generateRandomMessage());

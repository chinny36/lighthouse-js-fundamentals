const temperature = 600;

if (temperature < 0) {
  console.log("Make sure you pick out a scarf!");
} else if (temperature < 15) {
  console.log("Short sleeves won't cut it!");
} else if (temperature > 15 && temperature < 200) {
  console.log("Short sleeves are fine.");
} else if (temperature > 200) {
  console.log("You should probably grab some sunscreen or a flame-retardant suit or something.");
}

console.log("Now you're ready to go outside!");
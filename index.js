// Complete the following functions to make our program work!

/**
 * Takes a F number and returns the number to C
@param {string} fahren 
temperature in degrees F
@returns {number} 
the number of degrees C
 */

function convertToCelsius(fahren) {
  const fahrenNum = parseInt(fahren);
  const celsius = ((fahrenNum - 32) * 5/9);

  return celsius;
}

/**
 * Takes both numbers (F, C) and display a message with
 * both numbers and how that temp makes you feel using
 * this chart
 *
 *   Temp      Feels
 * ---------|----------
 *   < 32   |  "very cold"
 *   < 64   |  "cold"
 *   < 86   |  "warm"
 *   < 100  |  "hot"
 *
 * @param {number} fahren
 * @param {number} celc
 */
function createMessage(fahren, celc) {
  if (fahren < 32 || celc < 0 ){
    console.log("very cold");
  } else if (fahren < 64 || celc < 18){
    console.log("cold");
  } else if (fahren < 86 || celc < 30){
    console.log("warm");
  } else if (fahren < 100 || celc < 37){
    console.log("hot");
  }
}

/**/
let fahren = prompt(
  "enter a number, we will convert that number from fahrenheit to celcius"
);
let celc = convertToCelsius(fahren);
let output = createMessage(fahren, celc);
console.log(output);

if (!fahren || !celc) {
  fahren = prompt(
    "Lets try that again. enter a number, we will convert that number from fahrenheit to celcius"
  );
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
  fahren = rand(110);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
} else {
  fahren = rand(110);
  celc = convertToCelsius(fahren);
  output = createMessage(fahren, celc);
  console.log(output);
}
/**
Define the rand() function to take a limit and return a random number between 0 and that number.
 */

let randomNumber = rand(65); 
console.log(randomNumber);
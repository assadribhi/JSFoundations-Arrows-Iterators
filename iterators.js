/*************************************
 * logger(array)
 *
 * - Accepts an array
 * - Logs every element of the array
 ************************************/
const logger = function (array) {
  // Your code here
  array.forEach((oneS) => console.log(oneS));
};
logger([1, 2, 3, 4]);

/*************************************
 * toCelsius(temperatures)
 *
 * - Accepts an array of temperatures
 *   in degrees Fahrenheit
 * - Returns an array of temperatures
 *   in degrees Celsius
 *
 * The conversion is:
 *   C = (F - 32) * (5/9)
 ************************************/
const toCelsius = function (temperatures) {
  // Your code here
  let Cels = temperatures.map((Temp) => (Temp - 32) * (5 / 9));
  return Cels;
};
toCelsius([32, 212, -40, 122, 54.5]);

/**************************************
 * hottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 * - Accepts a threshhold temperature
 * - Returns an array of temperatures
 *   that exceed the threshhold
 ***************************************/
const hottestDays = function (temperatures, threshhold) {
  // Your code here
  let Ans = temperatures.filter((Higher) => Higher > threshhold);
  return Ans;
};
hottestDays([1, 520, 50, 70], 40);

/******************************************
 * logHottestDays(temperatures, threshhold)
 *
 * - Accepts an array of temperatures
 *   IN DEGREES FAHRENHEINT
 * - Accepts a threshhold temperature
 *   IN DEGREES FAHRENHEINT
 * - Logs temperatures that exceed the
 *   threshhold to the console
 *   IN DEGREES CELSIUS
 *
 * hint: you can combine
 *       all previous functions
 *******************************************/
const logHottestDays = function (temperatures, threshhold) {
  // Your code here
  // let res = Ans.filter((Fin) => toCelsius(Fin));
  // console.log(res);
  let res = toCelsius(hottestDays(temperatures, threshhold));
  logger(res);
};
logHottestDays([1, 50, 6565, 44, 88, 9], 5);

module.exports = { logger, toCelsius, hottestDays, logHottestDays };

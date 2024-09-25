import { greet } from './modules/myName.js';
import celsiusToFahrenheit from './modules/celsiusToFahrenheit.js';
import calculateFallDistance from './modules/calculateFallDistance.js';
import calculateAverage from './modules/calculateAverage.js';
import concatStrings from './modules/concatStrings.js';

console.group('greet');
console.log(greet());
console.log(greet('Vova'));
console.log(greet(null));
console.groupEnd();

console.group('concatStrings');
console.log(concatStrings('aboba', 'cannyCat'));
console.log(concatStrings('а', 'б'));
console.log(concatStrings());
console.log(concatStrings(null));
console.groupEnd();

console.group('celsiusToFahrenheit');
console.log(celsiusToFahrenheit(40));
console.log(celsiusToFahrenheit(-10));
1;
console.log(celsiusToFahrenheit(0));
console.log(celsiusToFahrenheit());
console.log(celsiusToFahrenheit(null));
console.groupEnd();

console.group('calculateFallDistance');
console.log(calculateFallDistance());
console.log(calculateFallDistance(10));
console.log(calculateFallDistance(0));
console.log(calculateFallDistance(999));
console.log(calculateFallDistance(null));
console.groupEnd();

console.group('calculateAverage');
console.log(calculateAverage(42, 69, 228));
console.log(calculateAverage(42, 69, 228, 123, 1337));
console.log(calculateAverage());
console.log(calculateAverage(null));
console.groupEnd();

// function formatDuration(seconds) {
//   const time = {
//     year: Math.floor(seconds / 3600 / 24 / 365),
//     day: Math.floor((seconds / 3600 / 24) % 365),
//     hour: Math.floor((seconds / 3600) % 24),
//     minute: Math.floor((seconds % 3600) / 60),
//     second: (seconds % 3600) % 60,
//     format() {
//       return [
//         this.year > 1 ? this.year + " years" : this.year + " year",
//         this.day > 1 ? this.day + " days" : this.day + " day",
//         this.hour > 1 ? this.hour + " hours" : this.hour + " hour",
//         this.minute > 1 ? this.minute + " minutes" : this.minute + " minute",
//         this.second > 1 ? this.second + " seconds" : this.second + " second",
//       ].filter((el) => (parseInt(el) ? el : ""));
//     },
//   };
//   if (!time.format().length) {
//     return "now";
//   }
//   return time
//     .format()
//     .join(", ")
//     .replace(/(, )(?=\d+ [a-z]+\b$)/, " and ");
// }

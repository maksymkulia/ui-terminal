/*
 * Lib with basics methods
 */

// Assets
let p = require("../assets/primary");
let tc = require("../assets/textColors");
let bc = require("../assets/backgroundColors");

// Test method
exports.test = () => {
  console.log("test ok");
};

// Simple console log (e -> echo).
// Just to keep your code in one format
exports.e = (content) => {
  console.log(content, p.reset);
};

// Outputs table in console
exports.table = (arr) => {
  console.table(arr);
};

// Console log with colors and styles
exports.incolor = (content, color) => {
  console.log(tc[color], content, p.reset);
};

// Console log with backgound color
exports.bgcolor = (content, bgcolor) => {
  console.log(bc[bgcolor], content, p.reset);
};

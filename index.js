// Assets
let p = require("./assets/primary");
let tc = require("./assets/textColors");
let bc = require("./assets/backgroundColors");

// Libs
let textProto = require("./libs/textProto");

// Test method
exports.test = () => {
  console.log("test");
};

// Simple console log (e -> echo).
// Just to keep your code in one format
exports.e = (content) => {
  console.log(content, p.reset);
};

// Console log with colors and styles
exports.incolor = (content, color) => {
  console.log(tc[color], content, p.reset);
};

// Console log with backgound color
exports.bgcolor = (content, bgcolor) => {
  console.log(bc[bgcolor], content, p.reset);
};

// Export Libs for part of text in color
exports.inblack = textProto.inblack;
exports.inred = textProto.inred;
exports.ingreen = textProto.ingreen;
exports.inyellow = textProto.inyellow;
exports.inblue = textProto.inblue;
exports.inmagenta = textProto.inmagenta;
exports.incyan = textProto.incyan;
exports.inwhite = textProto.inwhite;

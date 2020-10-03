// Include module
let ut = require("../index");

// Test variables
let arr = [
  {
    "Header 1": 100,
    "Header 2": "Test",
  },
  {
    "Header 1": "Great text",
    "Header 2": 98,
  },
  {
    "Header 1": 1111,
    "Header 2": false,
  },
];

// Outputs table in console
ut.table(arr);

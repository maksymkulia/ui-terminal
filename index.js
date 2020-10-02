// Assets
let tc = require('./assets/textColors')
let bc = require('./assets/backgroundColors')

// Test method
exports.test = () => {
    
    console.log('test')
}

// Simple console log (e -> echo).
// Just to keep your code in one format
exports.e = content => {
    
    console.log(content)
}

// Console log with colors and styles
exports.incolor = (content, color) => {

    console.log(tc[color], content)
}

// Console log with backgound color
exports.bgcolor = (content, bgcolor) => {

    console.log(bc[bgcolor], content)
}
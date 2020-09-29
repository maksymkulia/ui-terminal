// Assets
let colors = require('./assets/colors')

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

    console.log(colors[color], content)
}
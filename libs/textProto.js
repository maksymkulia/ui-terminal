// Include modules
let p = require('../assets/primary')
let tc = require('../assets/textColors')

// Make only part of text black 
exports.inblack = (content) => {
    
    return `${tc.black}${content}${p.reset}`
}
// Make only part of text red 
exports.inred = (content) => {
    
    return `${tc.red}${content}${p.reset}`
}
// Make only part of text green 
exports.ingreen = (content) => {
    
    return `${tc.green}${content}${p.reset}`
}
// Make only part of text yellow 
exports.inyellow = (content) => {
    
    return `${tc.yellow}${content}${p.reset}`
}
// Make only part of text blue 
exports.inblue = (content) => {
    
    return `${tc.blue}${content}${p.reset}`
}
// Make only part of text magenta 
exports.inmagenta = (content) => {
    
    return `${tc.magenta}${content}${p.reset}`
}
// Make only part of text cyan 
exports.incyan = (content) => {
    
    return `${tc.cyan}${content}${p.reset}`
}
// Make only part of text white 
exports.inwhite = (content) => {
    
    return `${tc.white}${content}${p.reset}`
}
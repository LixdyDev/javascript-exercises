const reverseString = function(str) {
    
    let char = '';
    for(let i = 0; i < str.length; i++ ) {
        char += str[(str.length - 1) - i];
    }   
    return char;
};

// Do not edit below this line
module.exports = reverseString;

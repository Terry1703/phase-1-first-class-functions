// Function receivesAFunction
const receivesAFunction = (callback) => {
    if (typeof callback === 'function')
         {
        callback(); 
    }
     else {
       return 'callback function'
    }
}


// Function returnsANamedFunction
const returnsANamedFunction = (callbackfunction) => {
    
    function namedFunction() {
        console.log('Inside named function');
        
    }
    return namedFunction; 
}
returnsANamedFunction (callbackfunction);

// Define a function that returns an anonymous function
function returnsAnAnonymousFunction() {
    return function() {
        console.log("Anonymous function called");
    };
}

// Usage example
let anonymousFunction = returnsAnAnonymousFunction();
anonymousFunction(); // This should log "Anonymous function called"

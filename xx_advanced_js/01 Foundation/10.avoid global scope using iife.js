//iife - immediatly invoked function expression -> this was used to 
// limit global scope before module system was introduced in modern js


(function() {
    // function invoked immediatly and have its own local scope
    const a = 10 // a is not in global scope.
})();


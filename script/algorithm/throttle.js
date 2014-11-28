// PROBLEM

// a function that accepts a function and timeout, x, in number of milliseconds.
// It returns a function that can only be executed once per x milliseconds.
// This can be useful for limiting the number of time and computation heavy function that are run.
// For example, making AJAX requests to an web service API.

// Furthermore, add a third parameter that will allow the function to be executed immediately
// if set to true. Otherwise the function will run at the end of the timeout period.

// SOLUTION

// This can be accomplished using "underscore.throttle(function, timeout, [options])"
// check http://underscorejs.org/#throttle


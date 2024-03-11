// Function Statement  : It is the general function declaration 
// Function Expression : Function assigned to a variable is known as Function Expression 

// The main difference between the function statement and function expression is Hoisting.

// Function Statement
x();
v();
function x()
{
    let a=10;
    console.log(a);
}

// Function Expression 

// It treates this function as variable rather than function and returns undefined .
var y = function()
{
    console.log(v);
}


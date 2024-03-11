
// CallBack : Function passed as argument to another function is known as CallBack Function.
// The setTimeout function is a callback function 
// Due to the callback function we can do the asynchronous things in JavaScript 
 
setTimeout(function()
{
    console.log("Timer after 5 seconds");
},5000);
function x(y)
{
    console.log("x");
    y();
}
x(function y()
{
    console.log("y"); 
})

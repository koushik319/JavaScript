// Promise : Promise is an object representing the eventual completion of asynchronous operations .
// Example :
// This helps get rid of the Inversion of Control

const Promise= OrderDetails(orderid);
Promise.then(function(orderid)
{
    return PaymentInfo();
}); 

// Here Promise is an object. -- > Initially it returns an empty object and as soo as the the execution is done it returns the data.
// In promises we attcah a callback function rather than passing it.
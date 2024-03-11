// Inversion of Control : The control of one function is totally dependent on the another callback function , due to which there is risk.
// One callback is completely dependent on the other one .

const cart=["shoes","watches","shirts"];

createOrder(cart,function(){

    paymentforOrder()
    
}
)
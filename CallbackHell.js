
// CallBack Hell : one callback function inside another callback function inside another callback function is known as CallBack Hell.
// Multiple chaining of callbacks 

const cart =["shoes","watches","shirt"];
createOrder(cart,function()
{
    paymentForOrder( function(){

        orderSummary(function(){

            UpdateWallet()
        })
    }
    )
})
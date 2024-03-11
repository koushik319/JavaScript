
// Chaining of Callback Function Using Promises.
// Promise Chaining get rid of the Callback Hell.

const cart=["shoes","shirts","watches"];
createOrder(cart)
.then(function(orderId)
{
    return PaymentDetails(orderid);
})
.then(function(paymentid)
{
    return OrderSummary(paymentid);
})
.then(function(OrderSummary)
{
    return WalletUpdate(OrderSummary);
});

function createOrder()
{
    return true;
}
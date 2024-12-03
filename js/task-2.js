function getShippingMessage(country, price, deliveryFee) { 
    resultMessage = `Shipping to ${country} will cost ${price + deliveryFee} credits`;
    console.log(resultMessage);
    return resultMessage; 
}
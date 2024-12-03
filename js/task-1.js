function makeTransaction(quantity, pricePerDroid) { 
    resultMessage = `You ordered ${quantity} droids worth ${pricePerDroid * quantity} credits!`;
    console.log(resultMessage);
    return resultMessage;
}
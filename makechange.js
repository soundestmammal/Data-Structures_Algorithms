function makeChange() {
    const constraint = 100;
    const quarter = 25;
    const dime = 10;
    const nickel = 5;
    const pennies = 1;
    const currentAmount;


    const quantityArray = [4, 0, 0, 0];
    const valueArray = [25, 10, 5, 1];

    // Start with Quarters 4, 3, 2, 1, 0
    //currentCountAmount for quarters is like 4 and that is the max
    while (currentCoinAmount < (constraint/currentCoin)) {
        var currentCoinAmount = currentCoin * coinQuantity;
        const linearCombination = (valueArray, quantityArray) => {
            var sum = 0;
            for (var i = 0; i<valueArray.length; i++) {
                sum = sum + (valueArray[i] * quantityArray[i]);
            }
        }

    }
};
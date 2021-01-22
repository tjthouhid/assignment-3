//https://github.com/tjthouhid/assignment-3
function kilometerToMeter(kmDistance) {
    if (kmDistance < 0) {
        return 'Please enter a positive number.';
    }
    if (isNaN(kmDistance)) {
        return 'Please enter a valid number.';
    }
    var meterDistance = kmDistance * 1000;
    return meterDistance;
}

//console.log(kilometerToMeter(9));

function budgetCalculator(watchCount, mobileCount, laptopCount) {
    var watchPrice = 50,
        mobilePrice = 100,
        laptopPrice = 500;
    if (watchCount < 0 || mobileCount < 0 || laptopCount < 0) {
        return 'Please enter a positive number.';
    }
    if (isNaN(watchCount) || isNaN(mobileCount) || isNaN(laptopCount)) {
        return 'Please enter a valid number.';
    }
    var total = watchCount * watchPrice + mobileCount * mobilePrice + laptopCount * laptopPrice;
    return total;
}
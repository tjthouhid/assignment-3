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

//console.log(budgetCalculator(4, 3, 2));

function hotelCost(stayDays) {
    var cost = 0;
    if (stayDays < 0) {
        return 'Please enter a positive number.';
    }
    if (isNaN(stayDays)) {
        return 'Please enter a valid number.';
    }

    if (stayDays <= 10) {
        cost = stayDays * 100;
    } else if (stayDays <= 20) {
        var tenDays = 10 * 100;
        var remaining = stayDays - 10;
        var twentyDays = remaining * 80;
        cost = twentyDays + tenDays;
    } else {
        var tenDays = 10 * 100;
        var twentyDays = 10 * 80;
        var remaining = stayDays - 20;
        var moreDays = remaining * 50;
        cost = moreDays + twentyDays + tenDays;
    }
    return cost;
}

//console.log(hotelCost(25));

function megaFriend(friendsArray) {
    var longestName = '';
    var friendNameLength = 0;
    for (i = 0; i < friendsArray.length; i++) {
        if (friendsArray[i].length > friendNameLength) {
            var friendNameLength = friendsArray[i].length;
            longestName = friendsArray[i];
        }
    }
    return longestName;
}

//console.log(megaFriend(['abefga', 'abcd', 'abcdeghjk', 'abcd', 'abcdef']));
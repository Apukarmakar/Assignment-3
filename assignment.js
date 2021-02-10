



//kilometerToMeter
function kilometerToMeter(kilometer){
var meter = kilometer * 1000;
return meter;
}
var count = kilometerToMeter(1);
console.log(count);



//budgetCalculator
function budgetCalculator(ghori, phone, laptop){
    total = (ghori * 50) + (phone * 100) + (laptop * 500);
    return total;
}
var budget = budgetCalculator(2, 5, 20);
console.log(budget);



//hotelCost
function hotelCost(days){
    if(days <= 10){
        var cost = days * 100;
        return cost;
    }
    else if(days > 10 && days <= 20){
        var upper10 = days - 10;
        var cost = (upper10 * 80) + 1000;
        return cost;
    }
    else{
        var upper20 = days-20;
        var cost = (upper20 * 50) + 1800;
        return cost;
    }
}
var totalCost = hotelCost(25);
console.log(totalCost);



//megaFriend
function megaFriend(friendNames){
    var strLength=[];
    for (let i = 0; i <friendNames.length; i++){
        var length =friendNames[i].length;
        strLength.push(length);
    }
    var maxValue = Math.max(...strLength);
    var indexNumber = strLength.indexOf(maxValue);
    return indexNumber;
}
var friends = ["siam", "khushnobish", "kaila"];
var megaFriend = friends[ megaFriend(friends)];
console.log(megaFriend);


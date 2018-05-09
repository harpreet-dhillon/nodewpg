const tripExpenses = [100, 50, 100];
const budget = tripExpenses.reduce(function(sum, value){
    return sum + value;
});
console.log(`Total trip budget: ${budget}`);
console.log(`hotel: ${tripExpenses[0]}, trip: ${tripExpenses[1]}, meals: ${tripExpenses[2]}`);
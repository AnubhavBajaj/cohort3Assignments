const transactions1 = require('./transactions1.json')
const transactions2 = require('./transactions2.json')

function calculateTotalSpentByCategory(transactions) {
    const hashMap = new Map();
    transactions.forEach(transaction => {
        if(hashMap.has(transaction.category)){
            hashMap.set(transaction.category, hashMap.get(transaction.category) + transaction.price);
        }
        else hashMap.set(transaction.category, transaction.price);
    });
    let totalSpentbyCategory = [];
    hashMap.forEach((key,value)=>{
        totalSpentbyCategory.push({
            category: key,
            totalSpent: value
        })
    })
    return totalSpentbyCategory;
}

console.log(calculateTotalSpentByCategory(transactions1));
console.log(calculateTotalSpentByCategory(transactions2));
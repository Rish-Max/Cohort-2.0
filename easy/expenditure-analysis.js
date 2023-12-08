/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {
  let categories = [];
  let amountArray = [];
  let results = [];

  transactions.forEach(function (transaction) {
    if (categories.includes(transaction.category)) {
      amountArray[categories.indexOf(transaction.category)] =
        amountArray[categories.indexOf(transaction.category)] +
        transaction.price;
    } else {
      categories.push(transaction.category);
      amountArray.push(transaction.price);
    }
  });

  categories.forEach(function (category, index) {
    let obj = {};
    obj["category"] = category;
    obj["totalSpent"] = amountArray[index];
    results.push(obj);
  });

  return results;
}

module.exports = calculateTotalSpentByCategory;

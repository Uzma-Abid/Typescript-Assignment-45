// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.

let friendsName = ["Uzma", "Nimra", "Amna", "Azka"];
friendsName.forEach(friendName => console.log(`Hello ${friendName}, How was your day?`));
// Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
var friendsName = ["Uzma", "Nimra", "Amna", "Azka"];
friendsName.forEach(function (friendName) { return console.log("Hello ".concat(friendName, ", How was your day?")); });

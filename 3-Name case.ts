//Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.

let personName : string = "Uzma Abid";
//to lowercase
console.log("lowercase :", personName.toLowerCase());

//to uppercase
console.log("uppercase :", personName.toUpperCase());

//titlecase
console.log("titlecase :", personName.replace(/\b\w/g, c=> c.toUpperCase()))
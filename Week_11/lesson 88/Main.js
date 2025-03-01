// Getting and Setting Element Attributes
const input = document.querySelector("input");
console.log(input);

// get Attributes
console.log(input.getAttribute("type"));
const name = input.getAttribute("name");
console.log(name);
// set Attributes
input.setAttribute("class", "myclass");
input.setAttribute("id", "myid");
console.log(input);

//  si toosa
console.log(input.className);
console.log(input.id);
console.log(input.type);
console.log(input.name);

input.type = "password";
input.className = "Password";
input.name = "user password";

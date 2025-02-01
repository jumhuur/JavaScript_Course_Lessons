//Nested Function

// tusaale 1
function greet() {
  function sayHello() {
    return "Hello, welcome to JavaScript!";
  }

  return sayHello();
}

console.log(greet());

// tusaale 2
function FullName(Name, lastname) {
  let formatName = function () {
    return Name + " " + lastname;
  };

  return `soo dhawaaw ${formatName()}`;
}

console.log(FullName("Cabdilaahi", "Cilmi"));

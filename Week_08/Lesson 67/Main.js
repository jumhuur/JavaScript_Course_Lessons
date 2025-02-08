//Lexical Scope
function parent() {
  let x = 10;

  function child() {
    function child1() {
      console.log(x);
    }

    return child1();
  }
  return child();
}

parent();

// sessionStorage

// setItme()
sessionStorage.setItem("user", "Jumhuur");
sessionStorage.setItem("Id", "1234");

// removeItem()
sessionStorage.removeItem("user");

// clear()
sessionStorage.clear();

// getItem()
let Username = sessionStorage.getItem("user");
const Id = sessionStorage.getItem("Id");
const server = sessionStorage.getItem("IsThisFirstTime_Log_From_LiveServer");
console.log(Username);
console.log(Id);
console.log(server);

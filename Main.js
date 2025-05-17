async function fetchUsers() {
  try {
    console.log(" start fetching users");

    const response = await fetch("https://jsonplaceholder.typicode.com/users");

    if (!response.ok) {
      throw new Error("wax users ah oo laguu fetch gareeyo ma jiraan");
    }

    const data = await response.json();

    console.log(`Response data, ${data}`);
  } catch (error) {
    console.log(error);
  }
}

fetchUsers();

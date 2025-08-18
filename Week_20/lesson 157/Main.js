function getdata() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let net = true;
      if (!net) {
        reject("qalad ayaa jira");
      } else {
        resolve({ title: "title", id: 455 });
      }
    }, 4000);
  });
}

// getname()
//   .then((name) => console.log(name))
//   .catch((Err) => console.log(Err));

// arrow function
const showdata2 = async () => {
  try {
    let data = await getdata();
    console.log("data", data);
  } catch (Error) {
    console.log(Error);
  }
};
showdata2();

// named function
async function showdata() {
  try {
    let data = await getdata();
    console.log("data", data);
  } catch (Error) {
    console.log(Error);
  }
}

showdata();

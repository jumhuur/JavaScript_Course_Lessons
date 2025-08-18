fetch("https://jsonplaceholder.typicode.com/comments")
  .then((response) => {
    //console.log(response);
    if (!response.ok) {
      throw new Error("Qalad ayaa dhacay ama jawaab lagma hayo server-ka");
    } else {
      return response.json(); // read parse
    }
  })
  .then((data) => {
    console.log(data);
  })
  .catch((Err) => {
    console.log(Err.message);
  })
  .finally(() => console.log("end"));

// async / await
const showdata = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) {
      throw new Error("qalad ayaa jira");
    }
    const data = await response.json(); // read parse
    data.forEach((post) => {
      console.log("Title ------ ", post.title);
      console.log("Title ------ ", post.id);
    });
  } catch (Error) {
    console.log(Error.message);
  }
};

showdata();

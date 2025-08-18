// post

// const PostObject = {
//   title: "tile hada aan qornay",
//   body: "qoraal cusub oo oa kale ",
//   userId: 25,
// };
const Postdata = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Errort ${response.status}`);
  }
};

Postdata();

// put

// delete

// POST METHOD

const PostObject = {
  title: "tile hada aan qornay",
  body: "qoraal cusub oo oa kale ",
  userId: 25,
};

const Post = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    method: "DELETE",
    body: JSON.stringify(PostObject),
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Errort ${response.status}`);
  }
};

Post();

// PUT METHOD
const UpdatePost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "PUT",
    body: JSON.stringify(PostObject),
    headers: {
      "content-type": "application/json",
    },
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Errort ${response.status}`);
  }
};

UpdatePost();

// DELETE METHOD
const DeletePost = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts/1", {
    method: "DELETE",
  });

  if (response.ok) {
    return await response.json();
  } else {
    throw new Error(`Errort ${response.status}`);
  }
};

DeletePost();

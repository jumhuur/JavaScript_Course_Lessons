const add = (n1, n2) => {
  return n1 + n2;
};

const iskuqaybin = (n1, n2) => {
  return n1 / n2;
};

const kalajarid = (n1, n2) => {
  return n1 - n2;
};

const getdata = async (name) => {
  const data = await fetch(`https://api.github.com/users/${name}/repos`);
  const jsodata = await data.json();
  console.log(`Repos-kaaga dhamaan waa ${jsodata.length}`);
  //console.log(jsodata);
  for (let repo of jsodata) {
    const {
      name,
      default_branch,
      forks,
      open_issues_count,
      id,
      owner: { login },
    } = repo;
    console.log("--- repo name", name);
    console.log("--branch", default_branch);
    console.log("- issues", open_issues_count);
    console.log("- forks", forks);
    console.log("--- repo Id", id);
    console.log("- owner", login);
  }
};

export { add, iskuqaybin, getdata };

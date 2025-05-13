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
const Ul = document.createElement("ul");
const displayUserdata = (Userdata = []) => {
  if (Userdata.length <= 0) {
    console.log("Waan ka xumay wax data ah maan hellin");
  } else {
    let index = 1;
    for (let User of Userdata) {
      const nestedUl = document.createElement("ol");
      const li = document.createElement("li");
      const li_fasal = document.createElement("li");
      const li_guursaday = document.createElement("li");
      const li_Qalinjabin = document.createElement("li");
      const li_da = document.createElement("li");
      const li_magaalo = document.createElement("li");
      const li_xaafad = document.createElement("li");
      const li_lang1 = document.createElement("li");
      const li_lang2 = document.createElement("li");
      const li_name1 = document.createElement("li");
      const li_name2 = document.createElement("li");
      const li_caruur = document.createElement("li");
      const Title = document.createElement("h3");
      const {
        magac,
        fasal,
        guursaday,
        caruur,
        da,
        cinwaan: { magaalo, xaafad },
        luqadaha: [lang1, lang2],
        xiisaha,
        buuxisayKoorsada,
      } = User;
      li_fasal.textContent = `Kooraska : ${fasal}`;
      li_da.textContent = `da'da : ${da} sano`;
      li_guursaday.textContent = `Guursaday : ${!guursaday ? "Maya" : "Haa"}`;
      li_caruur.textContent = `caruur ${!caruur ? "0" : caruur}`;
      li_magaalo.textContent = `Magaalada : ${magaalo}`;
      li_xaafad.textContent = `xaafad : ${xaafad}`;
      li_lang1.textContent = `Luuqada 1aad : ${lang1}`;
      li_lang2.textContent = `Luuqad 2aad : ${lang2}`;
      li_name1.textContent = `Xiiseeya : ${xiisaha.join(" | ")}`;
      li_Qalinjabin.textContent = `Qalin jabin : ${
        buuxisayKoorsada ? "Haa" : "Maya"
      }`;
      Title.textContent = `${index < 10 ? `0${index}` : index} ${magac}`;
      // add
      nestedUl.appendChild(li_fasal);
      nestedUl.appendChild(li_da);
      nestedUl.appendChild(li_guursaday);
      nestedUl.appendChild(li_lang1);
      nestedUl.appendChild(li_lang2);
      nestedUl.appendChild(li_magaalo);
      nestedUl.appendChild(li_xaafad);
      nestedUl.appendChild(li_caruur);
      nestedUl.appendChild(li_name1);
      nestedUl.appendChild(li_Qalinjabin);
      Ul.appendChild(Title);
      Ul.appendChild(nestedUl);
      document.body.appendChild(Ul);
      index++;
    }
  }
};
export { add, iskuqaybin, getdata, displayUserdata };

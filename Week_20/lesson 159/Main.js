const overlay = document.querySelector("div.overlay-loader");
const Maindiv = document.querySelector("div.cards_rep");
let Users = [];
let loading = true;

loading && overlay.classList.add("active");
const getData = async () => {
  try {
    const respnse = await fetch("https://jsonplaceholder.typicode.com/users");
    if (respnse.ok) {
      const data = await respnse.json(); //
      console.log(data);
      Users.push(...data);
      loading = false;
      loading
        ? overlay.classList.add("active")
        : overlay.classList.remove("active");
      if (Users.length > 0) {
        Users.map((User) => {
          const { city, street } = User.address;
          const art = document.createElement("article");
          art.classList.add("card");

          art.innerHTML = `
          <header class="header">
        <div class="avatar" aria-hidden="true">${User.name
          .slice(0, 2)
          .toUpperCase()}</div>
        <div>
          <div class="name">${User.name}</div>
          <div class="role">${User.username}</div>
        </div>
        <div class="divider" aria-hidden="true"></div>
      </header>

      <section class="body">
        <!-- Phone -->
        <div class="row" role="group" aria-label="Phone number">
          <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M22 16.92v2a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.86 19.86 0 0 1 2.92 4.18 2 2 0 0 1 4.92 2h2a2 2 0 0 1 2 1.72c.12.9.33 1.77.62 2.61a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.47-1.02a2 2 0 0 1 2.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0 1 22 16.92z"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <div class="label">Phone</div>
            <div class="value" id="phone">${User.phone}</div>
          </div>
        </div>

        <!-- City -->
        <div class="row" role="group" aria-label="City">
          <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M21 10c0 7-9 12-9 12S3 17 3 10a9 9 0 1 1 18 0Z"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <circle
              cx="12"
              cy="10"
              r="3"
              stroke="currentColor"
              stroke-width="1.6"
            />
          </svg>
          <div>
            <div class="label">City</div>
            <div class="value" id="city">${city} , ${street}</div>
          </div>
        </div>

        <!-- Email (optional field example) -->
        <div class="row" role="group" aria-label="Email">
          <svg class="icon" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M4 4h16a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2z"
              stroke="currentColor"
              stroke-width="1.6"
            />
            <path
              d="m22 6-10 7L2 6"
              stroke="currentColor"
              stroke-width="1.6"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <div>
            <div class="label">Email</div>
            <div class="value" id="email">${User.email}</div>
          </div>
        </div>
      </section>

      <div class="actions">
        <button class="btn" type="button">Save Contact</button>
        <button
          class="btn"
          type="button"
          style="
            background: #0ea5e9;
            box-shadow: 0 8px 18px rgba(14, 165, 233, 0.35);
          "
        >
          Copy Phone
        </button>
          `;

          Maindiv.appendChild(art);
        });
      } else {
        loading = false;
        loading
          ? overlay.classList.add("active")
          : overlay.classList.remove("active");
        Maindiv.textContent = "No User found";
      }
    } else {
      loading = false;
      loading
        ? overlay.classList.add("active")
        : overlay.classList.remove("active");
      throw new Error(`Not Found ${respnse.status}`);
    }
  } catch (Error) {
    Maindiv.textContent = Error.message;
  }
};

setTimeout(() => {
  getData();
}, 3000);

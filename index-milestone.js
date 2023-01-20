let userForm = document.getElementById("user-form");

const retrievedEntries = () => {
  let entries = localStorage.getItem("user-entries");
  if (entries) {
    entries = JSON.parse(entries);
  } else {
    entries = [];
  }
  return entries;
};

let userEntries = retrievedEntries();

/*const t = `<table class="table-auto w-full"><tr>
           <th class="px-4 py-2">Name</th>
           <th class="px-4 py-2">Email</th>
           <th class="px-4 py-2">Password</th>
           <th class="px-4 py-2">Dob</th>
           <th class="px-4 py-2">Accepted terms?</th>
           </tr>${tableEntries}</table>`;*/

const displayEntries = () => {
  const entries = retrievedEntries();
  const tableEntries = entries
    .map((entry) => {
      const namecell = `<td class='border px-4 py-2'>${entry.name}</td>`;
      const emailcell = `<td class='border px-4 py-2'>${entry.email}</td>`;
      const passwordcell = `<td class='border px-4 py-2'>${entry.password}</td>`;
      const dobcell = `<td class='border px-4 py-2'>${entry.dob}</td>`;
      const acceptTermscell = `<td class='border px-4 py-2'>${entry.acceptTerms}</td>`;

      const row = `<tr>${namecell} ${emailcell} ${passwordcell} ${dobcell} ${acceptTermscell}</tr>`;
      return row;
    })
    .join("\n");

  const t = `<table class="table-auto w-full"><tr>
            <th class="px-4 py-2">Name</th>
           <th class="px-4 py-2">Email</th>
           <th class="px-4 py-2">Password</th>
           <th class="px-4 py-2">Dob</th>
           <th class="px-4 py-2">Accepted terms?</th>
           </tr>${tableEntries}</table>`;

  let details = document.getElementById("user-entries");
  details.innerHTML = t;
};

const saveUserForm = (event) => {
  event.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const dob = document.getElementById("dob").value;
  const acceptTerms = document.getElementById("acceptTerms").checked;

  const entry = {
    name,
    email,
    password,
    dob,
    acceptTerms,
  };

  userEntries.push(entry);
  localStorage.setItem("user-entries", JSON.stringify(userEntries));
  displayEntries();
};

userForm.addEventListener("submit", saveUserForm);
displayEntries();

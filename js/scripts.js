import { goTop } from "./goTop.js";

const name = document.getElementById("name");
const form = document.getElementById("form");
const lastName = document.getElementById("lastName");
const phoneNumber = document.getElementById("phoneNumber");
const btnSave = document.getElementById("saveButton");

let id = 0;

form.addEventListener("submit", (e) => {
  e.preventDefault();
});

btnSave.addEventListener("click", async (e) => {
  const data = {
    nombre: name.value,
    apellido: lastName.value,
    telefono: phoneNumber.value,
  };

  await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "text/plain",
    },
    body: JSON.stringify(data),
  })
    .then(() => {
      name.value = "";
      lastName.value = "";
      phoneNumber.value = "";
    })
    .catch((res) => console.log(res));

  await get();
});

const table = document
  .getElementById("contacts")
  .getElementsByTagName("tbody")[0];

const URL = "http://www.raydelto.org/agenda.php";

const get = async () => {
  const data = await fetch(URL);
  const Json = await data.json();

  for (const key of Json) {
    const { nombre, apellido, telefono } = key;
    const newRow = table.insertRow();

    newRow.innerHTML = `
      <td>${++id}</td>
      <td>${nombre}</td>
      <td>${apellido}</td>
      <td>${telefono}</td>
    `;
  }
};

document.addEventListener("DOMContentLoaded", () => {
  get();
  goTop();
});

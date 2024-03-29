let data = [
  { id: 1, name: "Navaeethan", email: "nave@gmail.com" },
  { id: 2, name: "krishna", email: "krish@gmail.com" },
  { id: 3, name: "Krey", email: "krey@gmail.com" },
];

function readAll() {
  localStorage.setItem("object", JSON.stringify(data));
  var tabledata = document.querySelector(".data_table");

  var object = localStorage.getItem("object");
  var objectdata = JSON.parse(object);
  var elements = "";

  objectdata.map(
    (record) =>
      (elements += `<tr>
      <td>${record.name}</td>
      <td>${record.email}</td>
      <td>
      <button class="edit" onclick={edit(${record.id})}>Edit</button>
      <button class="delete" onclick={delet(${record.id})}>Delete</button></td>
      </tr>`)
  );

  tabledata.innerHTML = elements;
}

function create() {
  document.querySelector(".create_form").style.display = "block";
  document.querySelector(".add_div").style.display = "none";
}

function Add_data() {
  var name = document.querySelector(".name").value;
  var email = document.querySelector(".email").value;

  if (name === "" || email === "") {
    alert("Name and email cannot be empty");
    return;
  }

  var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  var invalidEmailFormat = /@\w+\.$/;
  if (!emailRegex.test(email) || invalidEmailFormat.test(email)) {
    alert("Invalid email format. Please use format 'example@gmail.com'");
    return;
  }

  var newObj = {
    id: data.length + 1,
    name: name,
    email: email,
  };
  data.push(newObj);

  document.querySelector(".name").value = "";
  document.querySelector(".email").value = "";

  document.querySelector(".create_form").style.display = "none";
  document.querySelector(".add_div").style.display = "block";

  readAll();
}

function delet(id) {
  data = data.filter((rec) => rec.id !== id);
  readAll();
}

function edit(id) {
  document.querySelector(".update_form").style.display = "block";
  var obj = data.find((rec) => rec.id === id);
  document.querySelector(".uname").value = obj.name;
  document.querySelector(".uemail").value = obj.email;
  document.querySelector(".id").value = obj.id;
}

function update() {
  var id = parseInt(document.querySelector(".id").value);
  var name = document.querySelector(".uname").value;
  var email = document.querySelector(".uemail").value;

  var index = data.findIndex((rec) => rec.id === id);
  data[index] = { id, name, email };

  document.querySelector(".update_form").style.display = "none";
  readAll();
}

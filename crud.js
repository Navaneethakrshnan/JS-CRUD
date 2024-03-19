let data = [
  { id: 1, name: "Navaeethan", email: "nave@gmail.com" },
  { id: 2, name: "krishna", email: "krish@gmail.com" },
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
      <td><button>Edit</button>
      <button>Delete</button></td>
      </tr>`)
  );

  tabledata.innerHTML = elements;
}

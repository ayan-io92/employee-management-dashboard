const modal = document.getElementById("employeeModal");
const tableBody = document.getElementById("tableData");
const totalEmp = document.getElementById("totalEmp");
const avgSalary = document.getElementById("avgSalary");
const totalDept = document.getElementById("totalDept");

let data = [
  { id: 1, name: "Ali", dept: "Sales", salary: 5000 },
  { id: 2, name: "Kashan", dept: "Development", salary: 60000 },
];

function openModal() {
  modal.style.visibility = "visible";
}

function closeModal() {
  modal.style.visibility = "hidden";
}

function populateData() {
  totalEmp.textContent = data.length;
  avgSalary.textContent = data.forEach((element) => {});
}
populateData();
function sortData() {}

function populateData() {
  tableBody.innerHTML = "";
  let newData = [...data];
  const search = document.getElementById("SearchEmployee").value.toLowerCase();
  const dept = document.getElementById("searchDepartment").value;
  if (search) {
    newData = data.filter((emp) => emp.name.toLowerCase().includes(search));
  }
  if (dept) {
    newData = data.filter(
      (emp) => emp.dept.toLowerCase() === dept.toLowerCase(),
    );
  }
  newData.forEach((emp) => {
    tableBody.innerHTML += `
        <tr>
            <td>${emp.id}</td>
            <td>${emp.name}</td>
            <td>${emp.dept}</td>
            <td>${emp.salary}</td>
            <td>
                <button class="edit-btn" onclick="editEmp(${emp.id})">Edit</button>
                <button class="delete-btn" onclick="deleteEmp(${emp.id})">Delete</button>
            </td>
        </tr>
        `;
  });

  updateTotals();
}

function updateTotals() {
  totalEmp.textContent = data.length;

  let avg =
    data.length > 0 ? data.reduce((x, y) => x + y.salary, 0) / data.length : 0;
  avgSalary.textContent = "$" + avg.toFixed(0);

  let total = new Set(data.map((d) => d.dept));
  totalDept.textContent = total.size;
}

function editEmp(id) {
  if (!id) {
    console.error("Employee not found");
    return;
  }
  console.log("Employee was edited");
}

function deleteEmp(id) {
  if (!id) {
    console.error("Employee not found");
    return;
  }
  data = data.filter((x) => x.id !== id);
  populateData();
}
populateData();

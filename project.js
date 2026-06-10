const modal = document.getElementById("employeemodal");
const tableBody = document.getElementById("tableBody");
const totalEmp = document.getElementById("totalemp");
const avgSalary = document.getElementById("avgSalary");
const totalDept = document.getElementById("totaldept");
let data = [
  { id: 1, name: "Ali", dept: "Sales", salary: 5000 },
  { id: 2, name: "Kashan", dept: "Development", salary: 60000 },
];
const modal = document.getElementById("employeeModal");
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
  const search = document.getElementById("SearchEmployee").value.toLowerCase();
  const dept = document.getElementById("searchDepartment").value;
  if (search) {
    employees = employees.filter((emp) =>
      emp.name.toLowerCase().includes(search),
    );
  }
  if (dept) {
    employees = employees.filter(
      (emp) => emp.dept.toLowerCase() === dept.toLowerCase(),
    );
  }
  data.forEach((emp) => {
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

  let avg = data.reduce((x, y) => x + y.salary, 0) / data.length;
  avgSalary.textContent = "$" + avg.toFixed(0);

  let total = new Set(data.map((d) => d.dept));
  totalDept.textContent = total.size;
}

function editEmp(id) {
  if (!id) console.error("Employee not found");
  console.log("Employee was edited");
  return;
}

function deleteEmp(id) {
  if (!id) console.error("Employee not found");
  console.log("Employee was deleted");
  return;
  data = data.filter((x) => x.id != id);
  populateData();
}
populateData();

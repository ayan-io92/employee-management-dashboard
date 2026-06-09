const totalEmp = document.getElementById("totalEmp");
const avgSalary = document.getElementById("avgSalary");
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
function sortData() {}
function populateData() {
  totalEmp.textContent = data.length;
  avgSalary.textContent = data.forEach((element) => {});
}
function updateTotals() {
  totalEmp.textContent = data.length;
  let avg = data.reduce((x, y) => x + y.salary, 0) / data.length;
  avgSalary.textContent = "$" + avg.toFixed(0);
  let total = new Set(data.map((d) => d.dept));
  totalDept.textContent = total.size;
}
populateData();

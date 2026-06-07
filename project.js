const totalEmp = document.getElementById("totalEmp");
const avgSalary = document.getElementById("avgSalary");

let data = [
  { id: 1, name: "Ali", dept: "Sales", salary: 5000 },
  { id: 2, name: "Kashan", dept: "Development", salary: 60000 }
];

function openModal() {
  modal.style.visibility = "visible";
}

function sortData() {
}

function closeModal() {
  modal.style.visibility = "hidden";
}

function populateData() {
  totalEmp.textContent = data.length;

  avgSalary.textContent = data.forEach(element => {
  });
}

populateData();
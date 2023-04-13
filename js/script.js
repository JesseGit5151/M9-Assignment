import { fetchData } from "./modules/init.js"

// GET DOM ELEMENTS
let empTable = document.querySelector("#employees")

// DELETE EMPLOYEE
empTable.addEventListener("click", (e) => {
  if (e.target.classList.contains("delete")) {
    // CONFIRM THE DELETE
    if (confirm("Are you sure you want to delete this employee?")) {
      // GET THE SELECTED ROWINDEX FOR THE TR (PARENTNODE.PARENTNODE)
      let rowIndex = e.target.parentNode.parentNode.rowIndex
      // REMOVE EMPLOYEE FROM ARRAY
      empTable.deleteRow(rowIndex)
    }
  }
})

// BUILD THE EMPLOYEES GRID
function buildGrid() {
  fetchData(`data/employees.json`)
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

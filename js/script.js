// GET DOM ELEMENTS
let empTable = document.querySelector("#employees")
let empCount = document.querySelector("#empCount")
let tbody = document.querySelector("tbody")
let fetchData = async (url) => {
  try {
    const response = await fetch(url)
    const users = await response.json()
    for (let user of users) {
      tbody.innerHTML += `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.ext}</td>
            <td><a href="mailto:${user.email}">${user.email}</a></td>
            <td>${user.department}</td>
            <td><button class="btn btn-sm btn-danger delete">X</button></td>
        </tr>
        `
    }
  } catch (error) {
    console.log(error.message)
  }
}

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
  // BIND THE TBODY TO THE EMPLOYEE TABLE
  empTable.appendChild(tbody)
  
}

// BUILD THE EMPLOYEES TABLE WHEN THE PAGE LOADS
buildGrid()

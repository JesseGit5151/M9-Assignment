export async function fetchData(url) {
    try {
      const response = await fetch(url)
      const users = await response.json()
      for (let user of users) {
        let tbody = document.querySelector("tbody")
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
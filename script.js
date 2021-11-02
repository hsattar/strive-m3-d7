// LOAD AND DISPLAY USER DATA

let userData = []

const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        userData = data
        displayData(data)
    } catch (err) {
        console.error(err)
    }
}

fetchData()

const displayData = data => {
    const tableBody = document.querySelector('.tableBody')
    tableBody.innerHTML = data.map(user => `
    <tr>
        <th scope="row">${user.id}</th>
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td><a class="text-dark" href="./user.html?userId=${user.id}"><i class="bi bi-box-arrow-up-right mr-2"></i></a></td>
    </tr>`).join('')
}

// FILTER USER RESULTS

const filterResults = (filterHeading, input) => {
    const filteredData = userData.filter(user => user[filterHeading.toLowerCase()].toLowerCase().includes(input.toLowerCase()))
    displayData(filteredData)
}

const filterCategory = document.querySelector('#filterCategory')
const filterInput = document.querySelector('#filterInput')

filterCategory.addEventListener('change', () => {
    filterInput.placeholder = `Filter By ${filterCategory.value}`
    filterResults(filterCategory.value, filterInput.value)
})

filterInput.addEventListener('keyup', () => {
    filterResults(filterCategory.value, filterInput.value)
})

// SHOW EXTRA INFORMATION

const showCompanyBtn = document.querySelector('#showCompany')
const showAddressBtn = document.querySelector('#showAddress')
const moreInfo = document.querySelector('.moreInfo')

showCompanyBtn.addEventListener('click', () => {
    moreInfo.innerHTML = userData.map(user => `<p><b>${user.name}</b> works at <b>${user.company.name}</b></p>`).join('')
})

showAddressBtn.addEventListener('click', () => {
    moreInfo.innerHTML = userData.map(user => `
    <p><b>${user.name}</b> lives at <b>${user.address.street} ${user.address.suite} ${user.address.city} (${user.address.zipcode})</b></p>
    `).join('')
})
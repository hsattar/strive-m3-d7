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
    </tr>`).join('')
}

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
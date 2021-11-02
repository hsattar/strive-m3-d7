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
    tableBody.innerHTML = data.map(({id, username, name, email}) => `
    <tr>
        <th scope="row">${id}</th>
        <td>${username}</td>
        <td>${name}</td>
        <td>${email}</td>
        <td><a class="text-dark" href="./user.html?userId=${id}"><i class="bi bi-box-arrow-up-right mr-2"></i></a></td>
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
    moreInfo.innerHTML = userData.map(({name, company}) => `<p><b>${name}</b> works at <b>${company.name}</b></p>`).join('')
})

showAddressBtn.addEventListener('click', () => {
    moreInfo.innerHTML = userData.map(({name, address}) => `
    <p><b>${name}</b> lives at <b>${address.street} ${address.suite} ${address.city} (${address.zipcode})</b></p>
    `).join('')
})

// SORT BY NAME

let sortBtnClicks = 1

const sortBtn = document.querySelector('#sortName')
sortBtn.addEventListener('click', () => {
    sortBtnClicks++
    const ascendingNames = []
    userData.forEach(({name}) => ascendingNames.push(name))
    ascendingNames.sort()

    const descendingNames = []
    userData.forEach(({name}) => descendingNames.push(name))
    descendingNames.sort()
    descendingNames.reverse()

    return (sortBtnClicks % 2 === 0) ? sortArray(ascendingNames) : sortArray(descendingNames)
})

const sortArray = (array) => {
    const usersSortedByName = []
    array.forEach(currentName => usersSortedByName.push(userData.find(({name}) => name === currentName)))
    displayData(usersSortedByName)
}
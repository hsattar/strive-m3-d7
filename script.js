const fetchData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users')
        const data = await response.json()
        displayData(data)
    } catch (err) {
        console.error(err)
    }
}

fetchData()

const displayData = async data => {
    console.log(data)
    const tableBody = document.querySelector('.tableBody')
    tableBody.innerHTML = data.map(user => `
    <tr>
        <th scope="row">${user.id}</th>
        <td>${user.username}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.phone}</td>
        <td>${user.website}</td>
    </tr>`).join('')
}


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
    const tableBody = document.querySelector('.tableBody')
    console.log(data)
}


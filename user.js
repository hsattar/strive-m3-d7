window.onload= () => {
    const id = new URLSearchParams(window.location.search).get('userId')
    loadUserInfo(id)
}

const loadUserInfo = async id => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    const data = await response.json()
    displayUserInfo(data)
}

const displayUserInfo = data => {
    const container = document.querySelector('.container')
    const h1 = document.querySelector('h1')
    h1.innerText = data.name
    const userProperties = Object.entries(data)
    console.log(userProperties)
    container.innerHTML += userProperties.map(propertyPair => `
    <div class="input-group mb-3">
        <div class="input-group-prepend w-25">
            <span class="input-group-text w-100" id="basic-addon1">${propertyPair[0].charAt(0).toUpperCase() + propertyPair[0].substr(1)}</span>
        </div>
        <input type="text" class="form-control" placeholder="${propertyPair[0]}" value="${propertyPair[1]}" aria-label="Username" aria-describedby="basic-addon1">
    </div>
    `).join('')
}
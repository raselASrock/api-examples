const loadUsers = () => {
    fetch('https://randomuser.me/api/?results=10')
    .then(response => response.json())
    .then(data => displayUsers(data.results))
} 

const displayUsers = users => {
    console.log(users)
    const usersContainer = document.getElementById('users-container')
    for(const user of users){
        const userDiv = document.createElement('div')
        userDiv.classList.add('user')
        userDiv.innerHTML = `
        <h3>User Name: </h3>
        <p>User Info:</p>
        <p>User Email: ${user.email}</p>
        <p>User Age: ${user.dob.age}</p>
        <p>User Address: ${user.location.city}</p>
        `
        usersContainer.appendChild(userDiv)
    }
}


loadUsers()
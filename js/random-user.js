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
        <h3>User Info:</h3>
        <p>User Name: ${user.name.title} ${user.name.first} ${user.name.last} </p>
        <p>User Age: ${user.dob.age}</p>
        <p>User Email: ${user.email}</p>
        <p>User Contract: ${user.phone}</p>
        <p>User Address: ${user.location.city} ${user.location.country}</p>
        `
        usersContainer.appendChild(userDiv)
    }
}


loadUsers()
first: "آدرینا"
last: "کوتی"
title: "Miss"
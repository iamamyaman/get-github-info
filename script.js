const btn = document.getElementById("search-btn")
const query = document.getElementById("search")

function getData(){
    const name = query.value
    fetch(`https://api.github.com/users/${name}`)
    .then(res=>res.json())
    .then(user=>{
    console.log(user)

    const avatar = document.getElementById("avatar-img")
    avatar.innerHTML = `<img src ="${user.avatar_url}"/>`

    document.getElementById("name").innerText = user.name
    document.getElementById("followers").innerText = `FOLLOWERS : ${user.followers}`
    document.getElementById("following").innerHTML = `FOLLOWERS : ${user.following}`
    document.getElementById("bio").innerText = user.bio

   

    })
}


btn.addEventListener("click",getData)
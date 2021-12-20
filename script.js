let root = document.getElementById("root");
let btn = document.createElement("button");
btn.addEventListener("click", randomUser);
btn.style.class = "btn btn-primary";
btn.innerText = "New user";
root.append(btn);

let userContainer = document.createElement("div");
userContainer.style.class = "container-fluid";
let userName = document.createElement("h2");
let userInfo = document.createElement("p");
let userImage = document.createElement("img");


function randomUser(){
fetch("https://randomuser.me/api/")
.then(response => response.json())
.then(data => {
    console.log(data.results[0])
    printUser(data);

})

}

function printUser(data) {
    let randomUser = data.results[0];
    
    userName.innerHTML = `Hi, I'm ${randomUser.name.first} ${randomUser.name.last}!`;
    userImage.src = data.results[0].picture.large;
    userInfo.innerHTML = `I am a ${randomUser.dob.age} year old ${randomUser.gender} from ${randomUser.location.country}`;
    //console.log(data.results[0].name.first)
    
    root.append(userContainer);
    userContainer.append(userName, userInfo, userImage);

    

}
//DOM REFERENCES

let avatarElement = document.querySelector(".js-avatar");
let avatarLinkElement = document.getElementById("img-link");
let usernameElement = document.querySelector(".js-username");
let usernameLinkElement = document.getElementById("js-user-link");
let nameElement = document.querySelector(".js-name");
let locationElement = document.querySelector(".js-location");
let repoElement = document.querySelector(".js-repos");
let followersElement = document.querySelector(".js-followers");
let inputElement = document.querySelector(".js-input");
let btnElement = document.querySelector(".js-btn-search");

let cardElement = document.querySelector(".js-card-container")
//FUNCTIONS




async function getData() {

    let githubUser = inputElement.value;
    let response = await fetch(`https://api.github.com/users/${githubUser}`);
    const githubData = await response.json();
    console.log(githubData)

    cardData();
    showcard();

    //LLena la tarjeta con datos
    function cardData() {
        
        usernameElement.innerHTML = githubData.login;
        nameElement.innerHTML = githubData.name;
        avatarElement.src = githubData.avatar_url;
        avatarLinkElement.href = `https://github.com/${githubUser}`
        avatarLinkElement.target = "_blank"
        usernameLinkElement.href = `https://github.com/${githubUser}`
        usernameLinkElement.target = "_blank"
        repoElement.innerHTML = githubData.public_repos;
        followersElement.innerHTML = githubData.followers;
        locationElement.innerHTML = githubData.location;
    }
}

//Clean the input and shows info-card
function showcard() {
    inputElement.value = "";
    cardElement.style.display = "flex";

}
//Add Enter key for fetching data
function runGetData() {
    if (event.keyCode == 13) {
        getData();
    }
}


//Events//

//To fetch the info when "Buscar usuario" is clicked
btnElement.addEventListener("click", getData);

//To fetch the info when "Enter" key is pushed
inputElement.addEventListener("keydown", runGetData);
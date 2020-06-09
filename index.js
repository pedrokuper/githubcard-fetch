//DOM REFERENCES

let avatarElement = document.querySelector(".js-avatar");
let usernameElement = document.querySelector(".js-username");
let avatarLink = document.getElementById("img-link");
let nameElement = document.querySelector(".js-name");
let locationElement = document.querySelector(".js-location");
let repoElement = document.querySelector(".js-repos");
let followersElement = document.querySelector(".js-followers");
let inputElement = document.querySelector(".js-input");
let btnElement = document.querySelector(".js-btn-search");
//FUNCTIONS

let githubUser = inputElement.value;

async function getData() {
    const response = await fetch(`https://api.github.com/users/${githubUser}`);
    const githubData = await response.json();
    console.log(githubData)

    cardData();

    async function cardData() {

        usernameElement.innerHTML = githubData.login;
        nameElement.innerHTML = githubData.name;
        avatarElement.src = githubData.avatar_url;
        avatarLink.href = `https://github.com/${githubUser}`
        avatarLink.target = "_blank"
        followersElement.innerHTML = githubData.followers;
    }
}


btnElement.addEventListener("click", getData)
const github = new Github();
const ui = new UI();



const username = document.querySelector("#username");

username.addEventListener("input", fetchData);


function fetchData(){
    github.getuser(username.value)
    .then((user) => {
        return github.getuserAvatar(user);
    })
    .then((user) => {
        return github.getuserLatestRepos(user);
    })
    .then((user) => {
         ui.showProfile(user);
    })
    .catch((err) => {
        
    });
}
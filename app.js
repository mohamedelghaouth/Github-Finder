const github = new Github("xx", "xx");
const ui = new UI();



const username = document.querySelector("#username");

username.addEventListener("input", fetchData);


function fetchData(){
    if(username.value !== ""){
        github.getuser(username.value)
        .then((data) => {
            if(data.message === "Not Found"){
                ui.showAlert();
            }else {
                return github.getuserAvatar(username.value);
            }
        })
        .then((user) => {
            return github.getuserLatestRepos(user);
        })
        .then((user) => {
            ui.showProfile(user);
        })
        .catch((err) => {
            
        });
    }else {
        ui.clear();
    }
}
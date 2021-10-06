class Github {
    
    static url = "https://api.github.com/users/";

    constructor(clinetID, secretID){
        this.clinetID = clinetID;
        this.secretID = secretID;
        this.param = `?client_id=${clinetID}&client_secret=${secretID}`;
    }

    async getuser(username){

        let response = await fetch(Github.url + username + this.param);
        let user = await response.json();

        return user;
    }

    async getuserAvatar(user){

        let response = await fetch(user.avatar_url + this.param);
        let imageBlob = await response.blob();

        // Then create a local URL for that image and print it 
        user.image = URL.createObjectURL(imageBlob);

        return user;
    }

    async getuserLatestRepos(user){

        let response = await fetch(user.repos_url + this.param);
        let repos = await response.json();

        if(repos.length > 4) {
            repos.length= 4;
        }

        user.repos = repos;

        return user;
    }
}
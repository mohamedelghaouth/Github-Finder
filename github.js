class Github {
    
    static url = "https://api.github.com/users/";

    async getuser(username){

        let response = await fetch(Github.url + username);
        let user = await response.json();

        return user;
    }

    async getuserAvatar(user){

        let response = await fetch(user.avatar_url);
        let imageBlob = await response.blob();

        // Then create a local URL for that image and print it 
        user.image = URL.createObjectURL(imageBlob);

        return user;
    }

    async getuserLatestRepos(user){

        let response = await fetch(user.repos_url);
        let repos = await response.json();

        if(repos.length > 4) {
            repos.length= 4;
        }
        
        user.repos = repos;

        return user;
    }
}
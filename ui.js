class UI {
    
     showProfile(user){
        let profile = document.querySelector("#profile");
        
        profile.innerHTML = `
        <div class="col-4">
            <div class="card-body">
                <div>
                    <img width="100%" height="100%" src="${user.image}">
                </div>
                <div class="card-footer d-grid gap-2">
                    <button type="button" class="btn btn-sm btn-primary">View profile</button>
                </div>
            </div>
        </div>
        <div class="col-8">
            <div class="card-body">
                <span class="badge bg-primary">Public Repos: ${user.public_repos}</span>
                <span class="badge bg-secondary">Public Gists: ${user.public_gists}</span>
                <span class="badge bg-success">Followers: ${user.followers}</span>
                <span class="badge bg-info">Following: ${user.following}</span>
            </div>
            <div class="card-body">
                <ul class="list-group">
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                    Company : ${user.company}
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Website/blog: ${user.blog}
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Location: ${user.location}
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center">
                        Menber Since: ${user.created_at}
                    </li>
                </ul>
            </div>
        </div>
        `;

        let repos = document.querySelector("#repos");

        repos.innerHTML = `
        <div class="card-body">
            <h4 class="card-title">
                Latest Repos
            </h4>
            <ul class="list-group">
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${user.repos[0].name}
                    <span class="badge bg-primary">Stars: ${user.repos[0].stargazers_count}</span>
                    <span class="badge bg-success">Watchers: ${user.repos[0].watchers}</span>
                    <span class="badge bg-warning">Forks: ${user.repos[0].forks}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${user.repos[1].name}
                    <span class="badge bg-primary">Stars: ${user.repos[1].stargazers_count}</span>
                    <span class="badge bg-success">Watchers: ${user.repos[1].watchers}</span>
                    <span class="badge bg-warning">Forks: ${user.repos[1].forks}</span>
                </li>
                <li class="list-group-item d-flex justify-content-between align-items-center">
                    ${user.repos[2].name}
                    <span class="badge bg-primary">Stars: ${user.repos[2].stargazers_count}</span>
                    <span class="badge bg-success">Watchers: ${user.repos[2].watchers}</span>
                    <span class="badge bg-warning">Forks: ${user.repos[2].forks}</span>
                </li>
            </ul>
        </div>
        `;


    }

    
}
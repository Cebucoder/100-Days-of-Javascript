function getUserProfile() {
    var username = document.getElementById("username").value;
    
  
    // Make a request to the GitHub API
    fetch(`https://api.github.com/users/${username}`)
      .then(response => response.json())
      .then(data => {
        // Check if the profile exists
        if (data.message && data.message === "Not Found") {
        //   showErrorMessage("User not available");
          let errtext = document.getElementById("err-text");
          errtext.classList.add("error-show");
          document.getElementById("err-text").style.display = "flex";
         
        } else {
            // Fetch the number of starred repositories separately
            fetch(`https://api.github.com/users/${username}/starred`)
              .then(response => response.json())
              .then(starredRepos => {
                showUserProfile(data, starredRepos.length);
              })
              .catch(error => {
                showUserProfile(data, 0);
                console.error(error);
              });
          }
        })
        .catch(error => {
          showErrorMessage("Error fetching profile");
          console.error(error);
        });
  }
  
function showUserProfile(profile, starredCount) {

    username.value = '';
    var userImg = document.getElementById("image");
    userImg.innerHTML = `
    <img src="${profile.avatar_url}" alt="">
    `;

    document.getElementById("err-text").style.display = "none";
    document.getElementById("user").innerHTML = `${profile.name}`;
    document.getElementById("bio").innerHTML = `${profile.bio}`;
    document.getElementById("repo").innerHTML = `${profile.public_repos}`;
    document.getElementById("star").innerHTML = `${starredCount}`;

}
  
  function showErrorMessage(message) {
    var profileContainer = document.getElementById("profileContainer");
    profileContainer.innerHTML = `<p>${message}</p>`;
  }


  
  
class HttpError extends Error {
    constructor(response) {
      super(`${response.status} for ${response.url}`);
      this.name = 'HttpError';
      this.response = response;
    }
  }
  
  async function loadJson(url) {
    let response = await fetch(url);
    if (response.status == 200) {
        let responseJSON = await response.json();
        return responseJSON;
    } 
    else {
      throw new Error(response.status);
    }
  }
  
  // Ask for a user name until github returns a valid user
  async function demoGithubUser() {
    let user; 
    let name = prompt("Enter a name?", "iliakan");
    let exit = true;
    while(exit) {
        try {
            user = await loadJson(`https://api.github.com/users/${name}`);
            exit = false;
        }
        catch {
            if (err instanceof HttpError && err.response.status == 404) {
                alert("No such user, please reenter.");
            } else {
                throw err;
            }
        }

    }
    alert(`Full name: ${user.name}.`);
    return user;
  }
  
  demoGithubUser();
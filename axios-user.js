const addButton = document.getElementById("button");
addButton.addEventListener("click", addUser);

function addUser() {
  axios
    .get("https://randomuser.me/api")
    .then(function (responde) {
      const user = response.data.results;
      createUser(user);
    })
    .catch(function (error) {
      console.log("errore");
    });
}

function createUser() {}

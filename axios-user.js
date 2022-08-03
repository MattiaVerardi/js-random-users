const addButton = document.getElementById("button");
addButton.addEventListener("click", addUser);

function addUser() {
  axios
    .get("https://randomuser.me/api")
    .then(function (response) {
      const user = response.data.results[0];
      createUser(user);
    })
    .catch(function (error) {
      console.log("errore");
    });
}

function createUser(user) {
  let image = document.createElement("img");
  image.src = user.picture.large;
  let firstName = document.createElement("h3");
  firstName.innerText = user.name.first;
  let lastName = document.createElement("h3");
  lastName.innerText = user.name.last;
  let div = document.createElement("div");
  div.appendChild(image);
  div.appendChild(firstName);
  div.appendChild(lastName);
  div.className = "col-2 mb-3";
  document.getElementById("gallery").appendChild(div);
}

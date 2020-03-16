function getData(){
fetch('https://randomuser.me/api/?results=6')
        .then((response) => response.json())
        // tslint:disable-next-line:only-arrow-functions
        .then(function (data) {
          let users = data.results;
          console.log(users);
          return users.map(function (user){
             let fName = user.name.first;
             let lName = user.name.last;
             let imageSrc = user.picture.large; 
             new createUser(fName, lName, imageSrc);                
             })
          })
        }
class createUser {
constructor(fName, lName, imageSRC){
    this.fName = fName;
    this.lName = lName;
    this.imageSRC = imageSRC;
    createCard(this.fName,this.lName,this.imageSRC);
    
}
}

function createCard(fName,lName,imageSRC){
    var newDiv = document.createElement("div");
    newDiv.className = "card";
    newDiv.style = ".card";
    var newImg = document.createElement("img");
    newImg.src = imageSRC;
    newImg.style = "width:100%"
    newDiv.appendChild(newImg);
    var nameHolder = document.createElement("div");
    nameHolder.className = "container";
    nameHolder.style = ".container";
    var firstName = document.createElement("h4");
    firstName.innerHTML = fName;
    firstName.style = "float-left";
    var lastName = document.createElement("h4");
    lastName.innerHTML = lName;
    lastName.style = "float-right";
    nameHolder.appendChild(firstName);
    nameHolder.appendChild(lastName);
    newDiv.appendChild(nameHolder);     
    document.body.appendChild(newDiv);       
}

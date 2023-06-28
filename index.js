
fetch("https://acnhapi.com/v1/villagers/")
  .then(response => response.json())
  .then(data => {
    
    const animalNav = document.querySelector("#animal-nav");

    const specificAnimalIds = ["rbt02", "shp13", "rbt03", "brd18", "lon07", "cat08", "cbr16", "flg01", "bea13", "kal04"];

    specificAnimalIds.forEach(animalId => {
      const animal = data[animalId];

      const animalContainer = document.createElement("div");
      animalContainer.className = "animal-item";

      const animalImage = document.createElement("img");
      animalImage.src = animal["image_uri"];

      const animalName = document.createElement("span");
      animalName.textContent = animal.name["name-USen"];

      animalContainer.addEventListener("click", () => displayAnimal(animal));

      animalContainer.append(animalImage);
      animalContainer.append(animalName);

      animalNav.append(animalContainer);
    });
  })

function displayAnimal(animal) {
    const animalName = document.querySelector("#animal-display-name");
    const animalImage = document.querySelector("#animal-display-image");
  
    if (typeof animal === 'object') {
      animalName.textContent = animal["name-USen"];
      animalImage.src = animal["image_uri"];
    } else {
      animalName.textContent = animal.name["name-USen"];
      animalImage.src = animal["image_uri"];
    }
  }
  
function addNewAnimal(event) {
    event.preventDefault()
    const newAnimalName = event.target["animal-name-input"].value
    const newAnimalImage = event.target["animal-image-input"].value
    const newAnimal = {
        "name-USen": newAnimalName,
        "image_uri": newAnimalImage
     }
     displayAnimal(newAnimal)
    }

const newAnimalForm = document.querySelector("#new-animal-form")
newAnimalForm.addEventListener("submit", addNewAnimal)



fetch("https://acnhapi.com/v1/villagers/")
  .then(response => response.json())
  .then(data => {
    
    const animalNav = document.getElementById("animal-nav");

    const specificAnimalIds = ["rbt02", "shp13", "rbt03", "brd18", "lon07", "cat08", "cbr16", "flg01", "bea13", "kal04"];

    specificAnimalIds.forEach(animalId => {
      const animal = data[animalId];

      const animalContainer = document.createElement("div");
      animalContainer.className = "animal-item";

      const animalImage = document.createElement("img");
      animalImage.src = animal["image_uri"];
      animalImage.alt = animal.name["name-USen"];

      const animalName = document.createElement("span");
      animalName.textContent = animal.name["name-USen"];

      animalContainer.addEventListener("click", () => displayAnimal(animal));

      animalContainer.appendChild(animalImage);
      animalContainer.appendChild(animalName);

      animalNav.appendChild(animalContainer);
    });
  })
  .catch(error => console.error("Error fetching data:", error));

function displayAnimal(animal) {
  const animalName = document.getElementById("animal-display-name");
  const animalImage = document.getElementById("animal-display-image");

  animalName.textContent = animal.name["name-USen"];
  animalImage.src = animal["image_uri"];
  animalImage.alt = animal.name["name-USen"];
}

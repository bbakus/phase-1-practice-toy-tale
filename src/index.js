







function toyCollection(){
  const toyCollectionDiv = document.querySelector('#toy-collection')
  fetch('http://localhost:3000/toys/')
  .then(response => response.json())
  .then(toy => {
    toy.forEach(fuckingToy => {
      const toyCard = document.createElement('span')
      toyCard.classList.add('card')
      const toyImage = document.createElement('img')
      const toyName = document.createElement('h2')
      const toyLikes = document.createElement('p')
      const likeButton = document.createElement('button')

      toyName.textContent = fuckingToy.name
      toyImage.src = fuckingToy.image
      toyLikes.textContent = `Likes: ${fuckingToy.likes}`
      likeButton.textContent = 'Like!'
      
      toyCard.appendChild(toyImage)
      toyCard.appendChild(toyName)
      toyCard.appendChild(toyLikes)
      toyCard.appendChild(likeButton)
      toyCollectionDiv.appendChild(toyCard)

      likeButton.addEventListener('click', () => {
        toyLikes.textContent = `Likes: ${parseInt(fuckingToy.likes += 1)}`
      })
    })
  })

}

function addToyToCollection(toy) {
  const toyCollectionDiv = document.querySelector('#toy-collection');

  const toyCard = document.createElement('span');
  toyCard.classList.add('card');

  const toyImage = document.createElement('img');
  toyImage.src = toy.image;

  const toyName = document.createElement('h2');
  toyName.textContent = toy.name;

  const toyLikes = document.createElement('p');
  toyLikes.textContent = `Likes: ${toy.likes}`;

  const likeButton = document.createElement('button');
  likeButton.textContent = 'Like!';
  likeButton.addEventListener('click', () => {
    toy.likes += 1;
    toyLikes.textContent = `Likes: ${toy.likes}`;
  });

  
  toyCard.appendChild(toyImage);
  toyCard.appendChild(toyName);
  toyCard.appendChild(toyLikes);
  toyCard.appendChild(likeButton);

  
  toyCollectionDiv.appendChild(toyCard);
}




function cardPost() {
  const form = document.querySelector('.add-toy-form');
  const nameForm = document.querySelector('#toy-name');
  const imageForm = document.querySelector('#toy-image');

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    const newToy = {
      name: nameForm.value,
      image: imageForm.value,
      likes: 0,
    };

    fetch('http://localhost:3000/toys', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newToy),
    })
      .then((response) => response.json())
      .then((toy) => {
        
        addToyToCollection(toy)
        form.reset()
      })
      .catch((error) => console.error('Error:', error));
  });
}




function addButton(){
  let addToy = false
  const addBtn = document.querySelector("#new-toy-btn");
  const toyFormContainer = document.querySelector(".container");
  addBtn.addEventListener("click", () => {
    
    // hide & seek with the form
    addToy = !addToy;
    if (addToy) {
      toyFormContainer.style.display = "block";
    } else {
      toyFormContainer.style.display = "none";
    }
    
  })
}

function main(){
  toyCollection()
  addButton()
  cardPost()

}

document.addEventListener("DOMContentLoaded", () => {
  main()
  
});

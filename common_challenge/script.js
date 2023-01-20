const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const appInformationContainer = document.querySelector('.appInformationContainer');

let users = [];

const apps = [
  {
    title: "Facebook",
    logo: "images/app-logos/facebook.png", 
  },
  {
    title: "Instagram",
    logo: "images/app-logos/instagram.png"
  },
  {
    title: "Snapchat",
    logo: "images/app-logos/snapchat.png"
  }
];



users = apps.map((user, index) => {
  user.id = index;
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header");
  const image = card.querySelector("[data-img]");

  header.textContent = user.title;
  image.src = user.logo;
  card.setAttribute("id", user.title);
  card.setAttribute("id", user.title);
 
  userCardContainer.append(card)
  return { title: user.title, img: user.logo, id: user.id, element: card };
})


searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach((user) => {
    const isVisible = user.title.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible);
  });
});


const appInformation = [
  {
    logo: "images/app-logos/facebook.png",
    title: "Facebook",
    body: "Hello G",
  },
  {
    logo: "images/app-logos/instagram.png",
    title: "Instagram",
    body: "Hello G"
  },
  {
    logo: "images/app-logos/snapchat.png",
    title: "Snapchat",
    body: "Hello G"
  },
];

let appImage = document.querySelector("#app-logo");
let imageFigure = document.querySelector('#image-figure');
let figCaption = document.querySelector('#fig-caption');

appImage.classList.add('imageSize')
imageFigure.classList.add('center-column-flex');



let appInfo = [];
//selecting all app cards
const appCard = document.querySelectorAll('.card');


function showCurrentInformation(){

  for(i = 0; i < appInformation.length; i++)
    appInformation
}

//toggles the hidden class to display/hide the card container
function showAppInfoContainer(){
  appInformationContainer.classList.toggle('hidden');
}



//loop through the apps to apply the open and close function to each of them
  for(i = 0; i < appCard.length; i ++){



    appCard[i].addEventListener('click', showAppInfoContainer);
    appCard[i].addEventListener('click', showCurrentInformation);
    
  }

// selecting the closing button
closeBtn = document.querySelector('.close-btn');

//if the screen is not hidden, then hide and vice versa
function closeScreen() {
 if(appInformationContainer.classList.contains("hidden")){
      appInformationContainer.classList.remove("hidden");
   }
}

//applied this to the close button to close the container
closeBtn.addEventListener('click', closeScreen);
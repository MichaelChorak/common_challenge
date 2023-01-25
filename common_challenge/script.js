const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const appInformationContainer = document.querySelector('.appInformationContainer');


let users = [];

const apps = [
  {
    logo: "images/app-logos/facebook.png", 
    title: "Facebook",
    body: "this is Facebook",
  },
  {
    logo: "images/app-logos/instagram.png",
    title: "Instagram",
    body: "This is Instagram"
  },
  {
    logo: "images/app-logos/snapchat.png",
    title: "Snapchat",
    body: "This is Snapchat"
  },
  {
    logo: "images/app-logos/tiktok.png",
    title: "Tiktok",
    body: "This is Snapchat"
  },
  {
    logo: "images/app-logos/google.png",
    title: "Google",
    body: "This is Snapchat"
  },
  {
    logo: "images/app-logos/netflix.png",
    title: "Netflix",
    body: "This is Snapchat"
  },
  {
    logo: "images/app-logos/spotify.png",
    title: "Spotify",
    body: "This is Snapchat"
  },
];


users = apps.map((user, index) => {
  user.id = index;
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header");
  const image = card.querySelector("[data-img]");

  header.textContent = user.title;
  image.src = user.logo;
  card.setAttribute("id", user.title);
  userCardContainer.append(card)
  return { title: user.title, img: user.logo, body: user.body, id: user.id, element: card };
})






searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach((user) => {
    const isVisible = user.title.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible);
  });
});

//selecting all app cards
const appCard = document.querySelectorAll('.card');
const infoWrapper = document.querySelector('[data-app-information-container]');


//toggles the hidden class to display/hide the card container
function showAppInfoContainer(){
  appInformationContainer.classList.toggle('hidden');
}

//loop through the apps to apply the open and close function to each of them
  for(i = 0; i < appCard.length; i ++){
    appCard[i].addEventListener('click', showAppInfoContainer);
    // appCard[i].addEventListener('click', showTargetData);
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
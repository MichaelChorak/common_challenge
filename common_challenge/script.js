const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");
const appInformationContainer = document.querySelector('.appInformationContainer');


let applications = [];

const apps = [
  {
    logo: "images/app-logos/facebook.png", 
    title: "Facebook",
    body: "this is Facebook",
    isSelected: false,
  },
  {
    logo: "images/app-logos/instagram.png",
    title: "Instagram",
    body: "This is Instagram",
    isSelected: false,
  },
  {
    logo: "images/app-logos/snapchat.png",
    title: "Snapchat",
    body: "This is Snapchat",
    isSelected: false,
  },
  {
    logo: "images/app-logos/tiktok.png",
    title: "Tiktok",
    body: "Tiktok",
    isSelected: false,
  },
  {
    logo: "images/app-logos/google.png",
    title: "Google",
    body: "This is Google",
    isSelected: false,
  },
  {
    logo: "images/app-logos/netflix.png",
    title: "Netflix",
    body: "This is Netflix",
    isSelected: false,
  },
  {
    logo: "images/app-logos/spotify.png",
    title: "Spotify",
    body: "This is Spotify",
    isSelected: false,
  },
];


applications = apps.map((user, index) => {
  user.id = index;
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header");
  const image = card.querySelector("[data-img]");

  header.textContent = user.title;
  image.src = user.logo;
  card.setAttribute("id", user.id);
  userCardContainer.append(card)
  return { logo: user.logo, title: user.title, body: user.body, id: user.id, element: card };
})


// console.log(applications);
// console.log(apps);

const appInfo = (e) => {

  let infoTitle = document.querySelector('[data-info-title]')
  let infoLogo = document.querySelector('[data-info-logo]')
  let infoBody = document.querySelector('[data-info-body]')
  const image = document.querySelector("[data-img]");

  let filteredArray = applications.filter(obj1 => apps.some(obj2 => obj2.id === obj1.id));

  let id = e.target.textContent;

  for (let i = 0; i < applications.length; i++){
      infoTitle.textContent = id;
      infoLogo.src = filteredArray[e.target.id].logo;
      infoBody.textContent = filteredArray[e.target.id].body;
  }
}


searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  applications.forEach((user) => {
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
    appCard[i].addEventListener('click', appInfo);
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
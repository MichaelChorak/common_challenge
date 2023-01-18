const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");


let users = [];


const apps = [
  {
    title: "Facebook",
    imgFile: "images/app-logos/facebook.png", 
    
  },
  {
    title: "Instagram",
    imgFile: "images/app-logos/instagram.png"
    
  },
  {
    title: "Snapchat",
    imgFile: "images/app-logos/snapchat.png"
  }
  
];




users = apps.map((user, index) => {
  
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header");
  const image = card.querySelector("[data-img]");
  // const moreInfoBtn = card.querySelector("[data-info]");
  header.textContent = user.title;
  image.src = user.imgFile;
  card.setAttribute("id", user.title);
  card.setAttribute("id", user.title);
  // card.setAttribute("class", "block");
  user.id = index;
  // moreInfoBtn.textContent = product.title;
  userCardContainer.append(card)
  return { title: user.title, img: user.imgFile, body: user.body, id: user.id, element: card };
})

console.log(users);


searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach((user) => {
    const isVisible = user.title.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible);
  });
});





const appInformation = [
  {
    header: "images/app-logos/facebook.png",
    title: "Facebook",
    body: "Hello G"
  },
  
];


let appInformationContainer = document.querySelector('.appInformationContainer');
  appInformation.map(function(app, index) {

  let formTitles = appInformation;
  let appForm = document.querySelectorAll('#app-form');
  let appContent = document.querySelectorAll('#form-content');

  let appInfoImage = document.querySelector("#app-logo");
  let imageFigure = document.querySelector('#image-figure');
  let figCaption = document.querySelector('#fig-caption');
  app.id = index;
  figCaption.textContent = app.title

  appInfoImage.classList.add('imageSize')
  imageFigure.classList.add('center-column-flex');
})


// appInformationContainer.classList.add('hidden');
const facebookCard = document.querySelector('#Facebook');

function showAppInfoContainer(){
  appInformationContainer.classList.toggle('hidden');
}
facebookCard.addEventListener('click', showAppInfoContainer);

closeBtn = document.querySelector('.close-btn');

function closeScreen() {
 if(appInformationContainer.classList.contains("hidden")){
      appInformationContainer.classList.remove("hidden");
   }
}

closeBtn.addEventListener('click', closeScreen);
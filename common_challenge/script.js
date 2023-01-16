const userCardTemplate = document.querySelector("[data-user-template]");
const userCardContainer = document.querySelector("[data-user-cards-container]");
const searchInput = document.querySelector("[data-search]");


let users = [];


const apps = [
  {
    title: "Instagram",
    imgFile: "images/intro_image.png",
    body: "Content text"
  },
  {
    title: "Snapchat",
    imgFile: "images/intro_image.png",  
    body: "Content text"
  },
  {
    title: "Facebook",
    imgFile: "images/intro_image.png",  
    body: "Content text"
  }
];




users = apps.map((user, index) => {
  
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header");
  const body = card.querySelector("[data-body");
  const image = card.querySelector("[data-img]");
  // const moreInfoBtn = card.querySelector("[data-info]");
  header.textContent = user.title;
  body.textContent = user.body;
  image.src = user.imgFile;
  card.setAttribute("id", user.title);
  user.id = index;
  // moreInfoBtn.textContent = product.title;
  userCardContainer.append(card)
  return { title: user.title, img: user.imgFile, body: user.body, id: user.id, element: card };
})

console.log(users)



searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach((user) => {
    const isVisible = user.title.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible);
  });
});





const appInformation = [
  {
    header: "images/intro_image.png",
    title: "Facebook",
    body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro, quis maiores iste officia ipsum culpa aliquam quasi non possimus deleniti est repellendus enim vel. Ad corrupti recusandae dicta sed",
    category: [
      "Risky",
      "Warning",
      "Neutral"
    ]
  },
  // {
  //   header: "images/intro_image.png",
  //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro, quis maiores iste officia ipsum culpa aliquam quasi non possimus deleniti est repellendus enim vel. Ad corrupti recusandae dicta sed",
  //   footer: "Footer hier"
  // },
  // {
  //   header: "images/intro_image.png",
  //   body: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa porro, quis maiores iste officia ipsum culpa aliquam quasi non possimus deleniti est repellendus enim vel. Ad corrupti recusandae dicta sed",
  //   footer: "Footer hier"
  // }
];



let appInformationContainer = document.querySelector('.appInformationContainer');



appInformation.map(function(app) {
  //creating a container element per app object
  let div = document.createElement("div");
  let title = document.createElement("p");
  let body = document.createElement("p");
  let image = document.createElement("img");
  title.textContent = app.title;
  body.textContent = app.body;
  image.src = app.header;

  image.classList.add('imageSize');
  div.classList.add('app-cards');
  body.classList.add('text-center');

  div.append(image);
  div.append(title);
  div.append(body);

  appInformationContainer.append(div);
 
})


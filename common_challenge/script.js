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




users = apps.map((user) => {
  const card = userCardTemplate.content.cloneNode(true).children[0];
  const header = card.querySelector("[data-header");
  const body = card.querySelector("[data-body");
  const image = card.querySelector("[data-img]");
  // const moreInfoBtn = card.querySelector("[data-info]");
  header.textContent = user.title;
  body.textContent = user.body;
  image.src = user.imgFile;
  card.setAttribute("id", user.title);
  // moreInfoBtn.textContent = product.title;
  userCardContainer.append(card)
  return { title: user.title, img: user.imgFile, body: user.body, element: card };
})



searchInput.addEventListener("input", (e) => {
  const value = e.target.value.toLowerCase()
  users.forEach((user) => {
    const isVisible = user.title.toLowerCase().includes(value)
    user.element.classList.toggle("hide", !isVisible);
  });
});

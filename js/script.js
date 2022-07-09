
const menu = document.querySelector(".header__list");
const menuItems = document.querySelectorAll(".header__link");
const hamburger= document.querySelector(".header__burger");
const menuIcon = document.querySelector(".header__burger");
function toggleMenu() {
    if (menu.classList.contains("showMenu")) {
      menu.classList.remove("showMenu");
      menuIcon.style.display = "block";
      menu.style.display = "none"
    } else {
      menu.classList.add("showMenu");
      menuIcon.style.display = "block";
      menu.style.display = "block"
    }
  }
hamburger.addEventListener("click", toggleMenu);

const articles = document.querySelector(".articles");
const videos = document.querySelector(".videos");
const linkArticles = document.querySelector(".link__articles");
const linkVideos = document.querySelector(".header__sublist ");
const pagination = document.querySelector(".pagination");
const border = document.querySelector(".border-co");
const borderArticles = document.querySelector(".header__list__articles");
const borderVideos = document.querySelector(".header__list_videos")

function showPage(event) {
  event.preventDefault()
      articles.style.display = "block";
      videos.style.display = "none";
      pagination.style.display = "flex";
      borderArticles.classList.add("border-co");
      borderVideos.classList.remove("border-co") 
   
  }
linkArticles.addEventListener("click", showPage);

function showPageVideos(event) {
  event.preventDefault()
      articles.style.display = "none";
      videos.style.display = "block";
      pagination.style.display = "none";
      borderVideos.classList.add("border-co");
      borderArticles.classList.remove("border-co")
  }
linkVideos.addEventListener("click", showPageVideos);





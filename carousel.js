

// /nav bar/


const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav_menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}

//get all the images and li from HTML
var carouselImages = document.getElementsByClassName("carouselImage");
var dotNode = document.getElementsByTagName("li");
var currentIndex = 0;

//create dots/circle
for (let i = 0; i < carouselImages.length; i++) {
  let newDot = document.createElement("li");
  
  newDot.className = "fa fa-circle";
  newDot.setAttribute("onclick", "dotClick(this.id)");
  newDot.setAttribute("id", parseInt(i));
  
  let dotContainer = document.querySelector(".dotList");
  dotContainer.appendChild(newDot);
}

//function1
function displayImage() {
  for (let j = 0; j < carouselImages.length; j++) {
    carouselImages[j].style.display = "none";
  }
  carouselImages[currentIndex].style.display = "block";
}

//function2
function displayDot() {
  for (let j = 0; j < dotNode.length; j++) {
    dotNode[j].style.color = "grey";
  }
  dotNode[currentIndex].style.color = "black";
}

//function3
function moveLeft() {
  if (currentIndex == 0) {
    currentIndex = carouselImages.length - 1;
  } else {
    currentIndex--;
  }
  
  displayImage();
  displayDot();
}

//function4
function moveRight() {
  if (currentIndex == carouselImages.length - 1) {
    currentIndex = 0;
  } else {
    currentIndex++;
  }
  
  displayImage();
  displayDot();
}

//function5
function dotClick(c) {
  currentIndex = c;
  displayImage();
  displayDot();
}

//initial stage
displayImage();
displayDot();
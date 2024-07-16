"use strict"

// Change list color

const furnitureItems = document.querySelectorAll('.furniture-list');

furnitureItems.forEach(item => {
  item.addEventListener("click", function() {
    // Remove 'list-color' class from all items first
    furnitureItems.forEach(e => e.classList.remove('list-color'));
    // Add 'list-color' class to the clicked item
    item.classList.add('list-color');
  });
});

// Display search bar

const searchIcon = document.querySelector('.fa-magnifying-glass')
const searchBar = document.querySelector(".search-bar ")

searchIcon.addEventListener('click', function(){
  if(searchBar.style.opacity == 0 ){
  searchBar.style.opacity = 1
} else{
  searchBar.style.opacity = 0
}
})

// Display hidden nav

const burgerMenu = document.querySelector(".burger-menu")
const hiddenNav = document.querySelector(".hidden-nav")

burgerMenu.addEventListener("click", function(){
  hiddenNav.style.display = 'flex'
})

const navCloseBtn = document.querySelector(".fa-x")

navCloseBtn.addEventListener("click", function(){
  hiddenNav.style.display = 'none'
})

// Sticky Navbar

window.addEventListener("scroll", function(){
  const navBar = document.querySelector(".nav-bar")
  navBar.classList.toggle("sticky-nav", this.window.scrollY > 300)
})

// Go top button

const goTop = document.querySelector(".go-top")

  window.addEventListener("scroll", function(){
    goTop.classList.toggle("sticky-btn", this.window.scrollY > 300)
})
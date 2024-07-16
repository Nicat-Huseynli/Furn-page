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

const searchIcon = document.querySelector('.search-icon')
const searchBar = document.querySelector(".search-bar")

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

// Sticky menu for Mobile

window.addEventListener("scroll", function(){

  burgerMenu.addEventListener("click", function(){
    hiddenNav.classList.toggle("sticky-nav", window.scrollY > 300)
  })
})

// Cart 
const overlay = document.querySelector(".overlay")
const yourCart = document.querySelector(".your-cart")
const shoppingCartIcon = document.querySelector(".shopping-cart-icon")

shoppingCartIcon.addEventListener("click", function(){
  overlay.style.display = "flex";
  yourCart.style.display = "flex";
})

const cartCloseBtn = document.querySelector(".cart-close-btn")

cartCloseBtn.addEventListener("click", function(){
  yourCart.style.display = 'none'
  overlay.style.display = 'none'
})

overlay.addEventListener("click", function(){
  yourCart.style.display = 'none'
  overlay.style.display = 'none'
})
"use strict"

const furnitureItems = document.querySelectorAll('.furniture-list');

furnitureItems.forEach(item => {
  item.addEventListener("click", function() {
    // Remove 'list-color' class from all items first
    furnitureItems.forEach(e => e.classList.remove('list-color'));
    // Add 'list-color' class to the clicked item
    item.classList.add('list-color');
  });
});


const searchIcon = document.querySelector('.fa-magnifying-glass')
const searchBar = document.querySelector(".search-bar ")

searchIcon.addEventListener('click', function(){
  if(searchBar.style.display == 'none'){
  searchBar.style.display = 'block'
} else{
  searchBar.style.display = 'none'
}
})

const burgerMenu = document.querySelector(".burger-menu")
const hiddenNav = document.querySelector(".hidden-nav")

burgerMenu.addEventListener("click", function(){
  hiddenNav.style.display = 'flex'
})

const navCloseBtn = document.querySelector(".fa-x")

navCloseBtn.addEventListener("click", function(){
  hiddenNav.style.display = 'none'
})
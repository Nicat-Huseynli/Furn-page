'use strict'

// NAV Section
const description = document.querySelector(".prod-description-txt")
const specification = document.querySelector(".prod-specification")
const comments = document.querySelector(".prod-comments")
const review = document.querySelector(".product-reviews")

// NAV Buttons
const descriptionBtn = document.querySelector(".description-btn")
const specificationBtn = document.querySelector(".specification-btn")
const commentsBtn = document.querySelector(".comments-btn")
const reviewBtn = document.querySelector(".reviews-btn")

const navBtn = document.querySelectorAll(".nav-btn")
const navSection = document.querySelectorAll(".nav-section")


descriptionBtn.addEventListener("click", function(){
    
    // setTimeout(() => {
        
        navBtn.forEach(btn => btn.classList.remove("active"))
        navSection.forEach(section => section.style.display = "none")
    
        description.style.display = "block";
        descriptionBtn.classList.add("active")
    // }, 100);
})

specificationBtn.addEventListener("click", function(){
    
    navBtn.forEach(btn => btn.classList.remove("active"))
    navSection.forEach(section => section.style.display = "none")

    specification.style.display = "flex";
    specificationBtn.classList.add("active")
})

commentsBtn.addEventListener("click", function(){
    
    navBtn.forEach(btn => btn.classList.remove("active"))
    navSection.forEach(section => section.style.display = "none")

    comments.style.display = "flex";
    commentsBtn.classList.add("active")
})

reviewBtn.addEventListener("click", function(){
    
    navBtn.forEach(btn => btn.classList.remove("active"))
    navSection.forEach(section => section.style.display = "none")

    review.style.display = "flex";
    reviewBtn.classList.add("active")
})
// Connect the img element in html file to my js file
// Connect the right arrow and left arrow to js file

const slideImage = document.querySelector('.slide-pics');
const rightArrow = document.getElementById('right-arrow');
const leftArrow = document.getElementById('left-arrow');

// Put the pictures for the slideshow in an array
// Create a counter for array index

let imgArray = ["1.jpg", "2.jpg", "3.jpg", "4.jpg"];
let imgIndex = 0;

// Create title attribute

const title = document.createAttribute("title");
let imgTitleAttributes = ["donuts", "cupcakes", "rainbow cake", "macaroons"]
title.value = imgTitleAttributes[imgIndex];
slideImage.setAttributeNode(title);

// Create a function to change the picture when you click on right arrow

rightArrow.addEventListener("click", () => {
    if (imgIndex === imgArray.length-1) {
        imgIndex = 0;
    } else {
        imgIndex++
    }

    whenChangeImage()
})

// Create a function to change the picture when you click on left arrow

leftArrow.addEventListener("click", () => {
    if (imgIndex === 0) {
        imgIndex = imgArray.length-1;
    } else {
        imgIndex--
    }

    whenChangeImage()
})


// Change src, alt and title on every click

const whenChangeImage = () => {

    // Create alternative alt attribute names

    let imgAltAttributes = ["donuts", "cupcakes", "rainbow cake", "macaroons"];

    // This functions outcome

    slideImage.src = `images/${imgArray[imgIndex]}`;
    slideImage.alt = imgAltAttributes[imgIndex];
    title.value = imgTitleAttributes[imgIndex];   
}
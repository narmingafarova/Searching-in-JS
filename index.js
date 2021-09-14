// Condition-1 --> Select the section with an id of container without using querySelector.
let getElementSectionId = document.getElementById("container");
console.log(getElementSectionId);

// Condition-2 --> Select the section with an id of container using querySelector.
let querySelectorSectionId = document.querySelector("#container");
console.log(querySelectorSectionId);

// Condition-3 --> Select all of the list items with a class of "second".
let allItemsClassSecond = document.getElementsByClassName("second");
console.log(allItemsClassSecond);

// Condition-4 --> Select a list item with a class of third, but only the list item inside of the ol tag.
let thirdClassInsideOl = document.querySelector("ol .third");
console.log(thirdClassInsideOl);

// Condition-5 --> Give the section with an id of container the text "Hello!".
let changeText = document.querySelector("#container");
changeText.innerText = "Hello!";

// Condition-6 --> Add the class main to the div with a class of footer.
let classAdd = document.querySelector(".footer");
classAdd.classList.add("main");

// Condition-7 --> Remove the class main on the div with a class of footer.
let classRemove = document.querySelector(".footer");
classRemove.classList.remove("main");

// Condition-8 --> Loop over all of the list inside the ol tag and give them a background color of "green".
let insideOl = document.querySelectorAll("ol li");
for (let i = 0; i < insideOl.length; i++) {
  insideOl[i].style.backgroundColor = "green";
}

// Condition-9 --> Change document title to "Made with JS"
document.title = "Made with JS";

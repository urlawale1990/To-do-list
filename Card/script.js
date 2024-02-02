// 'use strict' // using set attribute
// let card = document.getElementById("card") // getting the card conatiner from the HTML file

// let myCardTitle = document.createElement("div"); // creating a new div
// card.append(myCardTitle) // apending the new div to the card conatiner
// myCardTitle.setAttribute("class", "card-title-container") // setting the class attribute  of the div 
// myCardTitle.innerHTML = `<h1>Card Title</h1>` // adding heading to the container

// let myCardBody = document.createElement("div")
// card.append(myCardBody)
// myCardBody.setAttribute("class", "card-body-container")
// myCardBody.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit nulla beatae quibusdam? Ad reiciendis, veniam, error quaerat, voluptate blanditiis laudantium perspiciatis temporibus consequuntur amet fuga natus culpa</p>`

// let myCta = document.createElement("div")
// card.append(myCta)
// myCta.setAttribute("class","card-cta-container")
// myCta.innerHTML = `<button>Learn More</button>`


// console.log(card)


'use strict' // using class list

let mycard = document.getElementById("card")
let myCardTitleContainer = document.createElement("div")
myCardTitleContainer.classList.add("card-title-container")
let myCardBodyContainer = document.createElement("div")
myCardBodyContainer.classList.add("card-body-container")
let myCardCtaContainer = document.createElement("div")
myCardCtaContainer.classList.add("card-cta-container")

myCardTitleContainer.innerHTML =`<h1>Card Title</h1>`
myCardBodyContainer.innerHTML = `<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere odit nulla beatae quibusdam? Ad reiciendis, veniam, error quaerat, voluptate blanditiis laudantium perspiciatis temporibus consequuntur amet fuga natus culpa</p>`
myCardCtaContainer.innerHTML = `<button>Learn More</button>`


card.append(myCardTitleContainer, myCardBodyContainer, myCardCtaContainer)

console.log(card)
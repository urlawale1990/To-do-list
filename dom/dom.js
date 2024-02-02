// let myButton = document.getElementById("button")
// let myParent = myButton.parentElement
// console.log(myParent)


// let myContainer = document.getElementById("container")
// let allChildren = myContainer.children
// console.log(allChildren)


// let myButton = document.getElementById("button")
// let saveSibling = myButton.previousElementSibling
// console.log(saveSibling)

// let headingElement = document.getElementById("heading-text")
// let also = headingElement.nextElementSibling
// console.log(also)

// let container = document.getElementById("container")
// let firstChild = container.firstElementChild
// console.log(firstChild)

// let container = document.getElementById("container")
// let lastChild = container.lastElementChild
// console.log(lastChild)

// let container = document.getElementById("container")
// let allNode = container.childNodes
// console.log(allNode)

// let container = document.getElementById("container")
// let lastChild = container.lastChild
// console.log(lastChild)


// let container = document.getElementById("container")
// let removedItem = container.lastElementChild.remove()
// console.log(removedItem)


// Creating element in JS
// let htmlContainer = document.getElementById("text-container")

// let myDiv = document.createElement("div")
// myDiv.setAttribute("class", "my-new-div")
// myDiv.setAttribute('id', 'my-new-div')
// myDiv.innerHTML = `<p> Paragraph Text </p>`
// myDiv.style.fontSize = "40px"
// console.log(myDiv)

// htmlContainer.append(myDiv)
// " use strict"

// let htmlContainer = document.getElementById("container")
// let myElement = document.createElement("div")
// // TOGGLE METHOD
// myElement.classList.add('joseph-class')
// myElement.classList.toggle('josepg-class')




// htmlContainer.append(myElement)
// myElement.classList.remove('joseph-class')

// CLASS LIST METHOD myElement.classList.add('joseph-class')

// 
// if(myElement.classList.contains('joseph-class')){
//     let myButton = document.createElement("button")
//     myButton.innerText = `Create Account Button`
//     htmlContainer.append(myButton)

// } console .log(`This is a test`)





// SET ATTRIBUTE
// myElement.setAttribute('class', "my-class")
// myElement.setAttribute('id', 'my-class')
// myElement.innerHTML = `<div></div>`

// let  newElement = document.createElement("button")
// newElement.innerHTML = "Create Account Button" 


// myElement.removeAttribute('class')// removing attribue of an element

// htmlContainer.append(myElement)

// event
// let paragraph = document.getElementById("paragraph")
// console.log(paragraph)
// let myBtn = document.getElementById("btn")

// myBtn.addEventListener('click', function(event){
//     myBtn = this.innerText =`Text changed`
//     paragraph.innerText = `This is changed to Joseph Brendan`    

// })

let addButton = document.getElementById("button");
let deleteButton = document.getElementById("delete");
let input = document.getElementById("text");

addButton.addEventListener('click', function(event){
    input.style.display ='inline'
    deleteButton.style.display = 'inline'
    
})
 deleteButton.addEventListener('click', function(event){
    input.style.display ='none'
    deleteButton.style.display = 'none'
    
 })
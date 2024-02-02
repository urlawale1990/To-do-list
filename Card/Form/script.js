let addButton = document.getElementById("button")
let input = document.getElementById("text")


addButton.addEventListener('click', function(event){
    
    input.style.display ='inline'
    addButton.innerText ='Add another field'
    console.log(event)
    
})

console.log(addButton)


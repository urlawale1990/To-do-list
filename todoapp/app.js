let htmlContainer = document.getElementById("to-do")

let myDiv = document.createElement("div")
myDiv.setAttribute('class', "my-new-div")
myDiv.setAttribute('id', "my-new-div")
myDiv.innerHTML = `<p> To do App </p>`
myDiv.innerHTML = `
                <div class="input-header">
                <h1><span id="date"></span></h1>
                <div class="to-do-input">
                    <input type="text" id="item" placeholder="Enter a task"><button id="enter">Enter a task</button>
                </div>
`

htmlContainer.append(myDiv)
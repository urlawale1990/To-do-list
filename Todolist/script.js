const itemsArray = localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [];

console.log(itemsArray);

document.querySelector("#enter").addEventListener("click", () => {
    const item = document.querySelector("#item");
    createItem(item);
});

function displayItems() {
    let items = "";
    for (let i = 0; i < itemsArray.length; i++) {
        items += `<div class="item">
                    <div class="input-controller">
                        <textarea disabled>${itemsArray[i]}</textarea>
                        <div class="edit-controller">
                            <i class="fa-solid fa-check deleteButton"></i>
                            <i class="fa-solid fa-pen-to-square editButton"></i>
                        </div>
                    </div>
                    <div class="update-controller">
                        <button class="saveButton">Save</button>
                        <button class="cancelButton">Cancel</button>
                    </div>
                </div>`;
    }
    document.querySelector(".to-do-list").innerHTML = items;
    activateDeleteListeners();
    activateEditListeners();
    activateSaveListeners();  // Activate the save listeners
    activateCancelListeners();
}

function activateDeleteListeners() {
    let deleteButton = document.querySelectorAll(".deleteButton");
    deleteButton.forEach((db, i) => {
        db.addEventListener("click", () => {
            deleteItem(i);
        });
    });
}

function activateSaveListeners() {
    const saveButton = document.querySelectorAll(".saveButton");
    const inputs = document.querySelectorAll(".input-controller textarea");
    saveButton.forEach((sb, i) => {
        sb.addEventListener("click", () => {
            updateItem(inputs[i].value, i);
        });
    });
}

function activateCancelListeners() {
    const cancelButton = document.querySelectorAll(".cancelButton");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    cancelButton.forEach((cb, i) => {
        cb.addEventListener("click", () => {
            updateController[i].style.display = "none";
            inputs[i].disabled = true;
        });
    });
}

function updateItem(text, i) {
    itemsArray[i] = text;
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems(); // Update the display without reloading the page
}

function deleteItem(i) {
    itemsArray.splice(i, 1);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems(); // Update the display without reloading the page
}

function activateEditListeners() {
    const editButton = document.querySelectorAll(".editButton");
    const updateController = document.querySelectorAll(".update-controller");
    const inputs = document.querySelectorAll(".input-controller textarea");
    editButton.forEach((eb, i) => {
        eb.addEventListener("click", () => {
            updateController[i].style.display = "block";
            inputs[i].disabled = false;
        });
    });
}

function createItem(item) {
    itemsArray.push(item.value);
    localStorage.setItem("items", JSON.stringify(itemsArray));
    displayItems(); // Update the display without reloading the page
}

function displayDate() {
    let date = new Date();
    date = date.toString().split("");
    document.querySelector("#date").innerHTML = date[1] + " " + date[2] + " " + date[3];
}

window.onload = function () {
    // displayDate()
    displayItems();
};

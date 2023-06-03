let mContainer = document.getElementById("modal-container");
let mCard = document.getElementById("modal-card");

function showModal(){
    mContainer.classList.add("show-modal-container");
    mCard.classList.add("show-modal-card");
}

function closeModal(){
    mContainer.classList.remove("show-modal-container");
    mCard.classList.remove("show-modal-card");
}
let dateInput = document.getElementById("date");
let weightInput = document.getElementById("weight");
let weightList = document.getElementById("weight-list");
let selectAllCheckbox = document.getElementById("select-all");


let weights = [];

function addWeight() {
	let date = dateInput.value;
	let weight = weightInput.value;
	let emptyText = document.getElementById("emptytext");
	if (!date || !weight) {
		// alert("Please fill in both date and weight.");
		emptyText.classList.add("show-caution");
		setTimeout(() => {
		emptyText.classList.remove("show-caution");
		},2000)
		return;
	}
	const weightObj = { date, weight };
	weights.push(weightObj);
	renderWeights();

	// Save data to local storage
	localStorage.setItem("weights", JSON.stringify(weights));

	// Play audio
	const audio = new Audio("ting1.mp3");
	audio.play();

    // clear input after adding
	dateInput.value = "";
	weightInput.value = "";
	selectAllCheckbox.checked = false;

	
}


function renderWeights() {
	weightList.innerHTML = "";
	weights.forEach((weight, index) => {
        // creating element
		const row = document.createElement("tr");
		const selectCell = document.createElement("td");
		const dateCell = document.createElement("td");
		const weightCell = document.createElement("td");
		const selectCheckbox = document.createElement("input");
		selectCheckbox.type = "checkbox";
		selectCheckbox.dataset.index = index;
		selectCell.appendChild(selectCheckbox);
		dateCell.innerText = weight.date;
		weightCell.innerText = weight.weight + " kg";

        // appendChild means dipslying the created element
		row.appendChild(selectCell);
		row.appendChild(dateCell);
		row.appendChild(weightCell);
		weightList.appendChild(row);
	});
}

function selectAll() {
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]');
    checkboxes.forEach((checkbox) => {
        checkbox.checked = selectAllCheckbox.checked;
    });
}

function deleteSelected() {
    const checkboxes = document.querySelectorAll('tbody input[type="checkbox"]:checked');
	let caution = document.getElementById("cuition");
	

    if (checkboxes.length === 0) {
        // alert("Please select at least one item to delete.");
		caution.classList.add("show-caution");
		setTimeout(() => {
		caution.classList.remove("show-caution");
		},2000)
        return;
    }
    const selectedIndexes = Array.from(checkboxes).map((checkbox) => parseInt(checkbox.dataset.index));
    selectedIndexes.sort((a, b) => b - a); // sort indexes in descending order
    selectedIndexes.forEach((index) => {
        weights.splice(index, 1);
    });
    renderWeights();
    localStorage.setItem("weights", JSON.stringify(weights));
    selectAllCheckbox.checked = false;
}

window.onload = function() {
    // Get data from local storage
    const storedWeights = localStorage.getItem("weights");
    if (storedWeights) {
        weights = JSON.parse(storedWeights);
        renderWeights();
    }
    selectAllCheckbox.addEventListener("change", selectAll);
    document.getElementById("delete-selected").addEventListener("click", deleteSelected);
};

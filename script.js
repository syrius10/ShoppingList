var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var li = document.getElementsByTagName("li");

button.addEventListener("click", addListAfterClick);

button.addEventListener("keypress", addListAfterKeypress);

checkedItem();
deleteItem();

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var button = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	li.appendChild(button);
	button.innerHTML = "Delete";
	input.value = "";

	checkedItem();
	deleteItem();
}

function addListAfterClick() {
	if(inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if(inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function checkedItem() {
	for (var i = 0; i < li.length; i++) {
		li[i].addEventListener("click", toggleClass);
	}
}

function toggleClass() {
	this.classList.toggle("done");
}

function deleteItem() {
	var button = document.querySelectorAll("li button");
	for (var i = 0; i < button.length; i++) {
		button[i].addEventListener("click", clearItem)
	}
}

function clearItem() {
	for (var i = 0; i < li.length; i++) {
		this.parentNode.remove();
	}
}	
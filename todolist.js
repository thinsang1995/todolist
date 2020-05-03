//add items to Items List
function addItem() {
	const inputName = document.querySelector('#input-name').value;
	let text = document.createTextNode(inputName);

	let divWapper = document.createElement('div');
	let itemName = document.createElement('h4');
	divWapper.appendChild(itemName);
	itemName.appendChild(text);

	let question = document.createElement('label');
	divWapper.appendChild(question);
	question.appendChild(document.createTextNode("Did you do it? No, I didn't"));

	let checkedButton = document.createElement('input');
	divWapper.appendChild(checkedButton);
	checkedButton.setAttribute('type', 'checkbox');
	checkedButton.setAttribute('onclick', 'checkedItem(this)');

	let deleteButton = document.createElement('button');
	divWapper.appendChild(deleteButton);
	deleteButton.appendChild(document.createTextNode('Delete'));
	deleteButton.setAttribute('onclick', 'deleteItem(this)');

	//Data of status
	if (inputName === '') {
		return alert ('You must write something!');
	} else {
		let inputList = document.querySelector('#input-container');
		inputList.appendChild(divWapper);
	}
	document.querySelector('#input-name').value = '';
} 

//Checked or not check
function checkedItem(check) {
	if (check.checked === true) {
		check.previousElementSibling.textContent = "Did you do it? Yes, I did";
		check.previousElementSibling.previousElementSibling.setAttribute('class', 'checked');
	} else {
		check.previousElementSibling.textContent = "Did you do it? No, I didn't";
		check.previousElementSibling.previousElementSibling.setAttribute('class', '');
	}
} 

//Delete items in Items List
function deleteItem(deleteParent) {
	deleteParent.parentNode.remove();
}

//Delete all items in Items List
function deleteAll() {
	document.querySelector('#input-container').innerHTML = '';
}
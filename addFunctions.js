/*********code to produce more fields as they are required in grmn-write.php**********/
var verbCatCounter = 0; //a counter for ensuring different id names
var verbPrepCounter = 0; //a counter for ensuring different id names
var verbExampleCounter = 0; //a counter for ensuring different id names

function addFields(fieldType) {
	var newField = document.createElement("INPUT");
	newField.type = "text";
	
	var insertHere = null;
	
	if (fieldType == 'Category') {
		verbCatCounter++;
		newField.name = "Category" + verbCatCounter;
		insertHere = document.getElementById("addCategory");
	}
	else if (fieldType == 'Preposition') {
		verbPrepCounter++;
		newField.name = "Preposition" + verbPrepCounter;
		insertHere = document.getElementById("addPreposition");
	}
	else if (fieldType == 'Example') {
		verbExampleCounter++;
		newField.name = "Example" + verbExampleCounter;
		insertHere = document.getElementById("addExample");
	}
	
	if (insertHere != null) {
		//it appears you need to be referencing the two nodes from the parent
		insertHere.parentNode.insertBefore(newField,insertHere);
		
		var br = document.createElement("BR");
		insertHere.parentNode.insertBefore(br, insertHere);
	}
	
	
}

function createInput(inputName, isVariable){
	//create field title
	var fieldTitle = document.createElement('h3');
	var fieldTitleText = document.createTextNode(inputName);
	fieldTitle.appendChild(fieldTitleText);
	
	//create the field input node
	var newField = document.createElement('input');
	newField.type = 'text';
	if (isVariable) {
		newField.name = inputName + '0';
	} else {
		newField.name = inputName;
	}
	
	//find form and append nodes
	var parentForm = document.getElementById("addWord");
	parentForm.appendChild(fieldTitle);
	parentForm.appendChild(newField);
	parentForm.appendChild(document.createElement('br'));
	
	if (isVariable) {
		//create the button input node for adding more fields
		var newButton = document.createElement('input');
		newButton.type = 'button';
		newButton.id = 'add' + inputName;
		newButton.value = '+1';
		newButton.onclick = function() { addFields(inputName);}; 
		
		//append the button
		parentForm.appendChild(newButton);
	}
	
}

function createForm(wordType) {
	$('#display').empty();
	//create the form
	var newForm = document.createElement('form');
	newForm.action = 'grmn-write.php';
	newForm.method = 'post';
	newForm.id = 'addWord';
	
	//create form title
	var formTitle = document.createElement('h2');
	//formTitle.id = "addWordTitle";
	var formTitleText = document.createTextNode('Add a ' + wordType);
	formTitle.appendChild(formTitleText);
	
	//append the two to the body
	var display = document.getElementById('display');
	display.appendChild(formTitle);
	display.appendChild(newForm);
	
	//create required form elements
	if (wordType == 'verb') {
		
		createInput('Category', true);
		createInput('Infinitive', false);
		createInput('Meaning', false);
		createInput('Objects', false);
		createInput('Simple_past', false);
		createInput('Past_perfect', false);
		createInput('Preposition', true);
		createInput('Example', true);
	} 
	else if (wordType == 'noun') {
		
		createInput('Category', true);
		createInput('Gender', false);
		createInput('Noun', false);
		createInput('Meaning', false);
		createInput('Plural', false);
		createInput('Example', true);
	}
	else if (wordType == 'adjective') {
		
		createInput('Category', true);
		createInput('Adjective', false);
		createInput('Meaning', false);
		createInput('Example', true);
	}
	else if (wordType == 'expression') {
		
		createInput('Category', true);
		createInput('Expression', false);
		createInput('Meaning', false);
	}
	else {
		alert('error');
	}
	
	//create the hidden input
	var hiddenType = document.createElement('input');
	hiddenType.type = 'hidden';
	hiddenType.value = wordType;
	hiddenType.name = 'wordType';
	
	//create the submit form button
	var submitInput = document.createElement('input');
	submitInput.type = 'submit';
	submitInput.value = 'submit';
	submitInput.name = 'submit';
	
	//add the two to the form;
	newForm.appendChild(hiddenType);
	newForm.appendChild(document.createElement('br'));
	newForm.appendChild(submitInput);

}


var xmlhttp = new XMLHttpRequest();
xmlhttp.open("GET", 'grmn.xml', false);
xmlhttp.send();
var xmlDoc = xmlhttp.responseXML;

/*
 * for a given word type (verb, noun, adjective etc) getDeck() returns all of the words
 * under the given array of categories
 */
function getDeck(wordType, categories) {
	
	
	var wordsFull = new Array();
	var deck = xmlDoc.getElementsByTagName('deck')[0];
	for ( var i = 0; i < deck.children.length; i++) {
		if (deck.children[i].nodeName == wordType) {
			wordsFull.push(deck.children[i]);
		}
	}
	
	var wordsReturn = new Array();
	
	if (categories.length == 0) {
		wordsReturn = wordsFull;
	}
	else {
		for ( var i = 0; i < wordsFull.length; i++) {
			wordCategories = wordsFull[i].getElementsByTagName('category'); //get the categories for the word
			
			var wordAdded = false; //set a trigger, if the word has been added (true), we don't need to keep checking categories
			for ( var j = 0; j < wordCategories.length; j++) { //for each category of the word...
				
				for ( var k = 0; k < categories.length; k++) {
					
					if (wordCategories[j].firstChild.nodeValue == categories[k]) { //...check to see if it's in the demanded category list
						
						wordsReturn.push(wordsFull[i]); //if so, add the word to our return array list
						wordAdded = true; //set the trigger
						break; //break out of categories demanded
					}
				}
				if (wordAdded) {
					break; //if trigger is true, break out of searching categories.
				}
			}
		}
	}
	return wordsReturn;
}


/*
 * function displayWords() is given a list of table titles and xml node information (nodeTitles) along with 
 * a deck of words, and displays each word and each of it's parts in a table.
 */
function displayWords(titles, nodeTitles, words, wordType) {
	
	var display = document.getElementById('display');
	var displayTable = document.createElement('table'); //create the display table for the words array
	
	var titleTR = document.createElement('tr'); //titles row
	titleTR.setAttribute('class', 'title_row');
	for ( var i = 0; i < titles.length; i++) { //create the table headings
		var th = document.createElement('th'); //title cell
		th.setAttribute('class', nodeTitles[i] + 'Column');
		th.innerHTML = titles[i]; //assign the title name to the cell
		titleTR.appendChild(th); //put the cell into the row
	}
	$("<th>Edit</th>", {"class": "editColumn"}).appendTo(titleTR);
	displayTable.appendChild(titleTR); //append the row to the table

	for ( var i = 0; i < words.length; i++) {
		var nodes = words[i].children;
		var wordTR = document.createElement('tr'); //titles row
		rowID = "row" + i;
		wordTR.id = rowID;
		var j = 0;
		for ( var k = 0; k < nodeTitles.length; k++) {
			var td = document.createElement('td');
			while (j < nodes.length && nodeTitles[k] == nodes[j].nodeName) {
				td.innerHTML = td.innerHTML + nodes[j].firstChild.nodeValue + '<br>';
				j++;
			}
			wordTR.appendChild(td);
		}
		var td = $("<td></td>", {"class": "editCells"}).appendTo(wordTR);
		$('<button onclick="editRow(' + "'" + rowID + "', " + "'" + wordType + "'" + ')"><img src="../images/file_edit.png" width="20px" height="20px"></button><br> \
				<button onclick="deleteRow(' + "'" + rowID + "', " + "'" + wordType + "'" + ')"><img src="../images/trash.png" width="20px" height="20px"></button>').appendTo(td);
		displayTable.appendChild(wordTR);
	}
	display.appendChild(displayTable);
}

function control(wordTypes, categories) {
	$('#display').empty();
	var verbTitles = new Array('Categories', 'Infinitive', 'Meaning', 'Objects', 'Simple Past', 'Past Perfect', 'Prepositions', 'Examples');
	var verbNodeTitles = new Array('category', 'infinitive', 'meaning', 'objects', 'simple_past', 'past_perfect', 'preposition', 'example');
	
	var nounTitles = new Array('Categories', 'Gender', 'Noun', 'Meaning', 'Plural', 'Examples');
	var nounNodeTitles = new Array('category', 'gender', 'noun', 'meaning', 'plural', 'example');
	
	var adjectivesTitles = new Array('Categories', 'Adjective/Adverb', 'Meaning', 'Examples');
	var adjectivesNodeTitles = new Array('category', 'adjective', 'meaning', 'example');
	
	var expressionTitles = new Array('Categories', 'Expression', 'Meaning');
	var expressioNodeTitles = new Array('category', 'expression', 'meaning');
	
	
	if (wordTypes.length == 0) {
		displayWords(verbTitles, verbNodeTitles, getDeck('verb', categories));
		displayWords(nounTitles, nounNodeTitles, getDeck('noun', categories));
		displayWords(adjectivesTitles, adjectivesNodeTitles, getDeck('adjective', categories));
		displayWords(expressionTitles, expressioNodeTitles, getDeck('expression', categories));
	} else {
		for ( var i = 0; i < wordTypes.length; i++) {
			if(wordTypes[i] == 'verb')
				displayWords(verbTitles, verbNodeTitles, getDeck('verb', categories), 'verb');
			if(wordTypes[i] == 'noun') 
				displayWords(nounTitles, nounNodeTitles, getDeck('noun', categories), 'noun');
			if(wordTypes[i] == 'adjective') 
				displayWords(adjectivesTitles, adjectivesNodeTitles, getDeck('adjective', categories), 'adjective');
			if(wordTypes[i] == 'expression')
				displayWords(expressionTitles, expressioNodeTitles, getDeck('expression', categories), 'expression');
		}
	}
}
	


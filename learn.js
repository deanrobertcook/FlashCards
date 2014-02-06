/*********code to a js version of the word-adder*******/
/*
 * function getFields returns arrays of fields for each word type.
 * Modify the arrays to change which fields are retrieved from the xml
 * for a given word type, and which input fields are created in the JS
 * Forms.
 */
function getFields(wordType) {
	var fields = new Array();
	if (wordType == 'verb') {
		fields.push(
				"infinitive",
				"meaning",
				"objects",
				"simple_past",
				"past_perfect"
				);
	}
	else if (wordType == 'noun') {
		fields.push(
				"gender",
				"noun",				
				"meaning",
				"plural"
				);
	}
	else if (wordType == 'adjective') {
		fields.push(
				"adjective",
				"meaning"
				);
	}
	else if (wordType == 'expression') {
		fields.push(
				"expression",
				"meaning"
				);
	}
	return fields;
}


/*
 * creates the input form depending on the word type selected by the user,
 * and then creates arrays for the specific fields to be passed to subsequent functions.
 */
function createJSForm(wordType) {
	var fields = getFields(wordType);
	
	$('#display').empty();
	$('#display').append('<form id="addWord"></form>');
	for ( var i = 0; i < fields.length; i++) {
		$('#addWord').append('<label class="textLabel"><span class="textSpan">'+tidyWord(fields[i])+'</span><input id='+fields[i]+' type="text"/></label>');
	}
	$('#addWord').after('<label class="submitLabel"><button id="addWordButton">Add Word</button></label>');
	$('#addWordButton').click (function() {
		addWord(wordType, fields);
	});
}

function addWord(wordType, fields) {
	//create an array of user inputs
	var inputs = new Array();
	for ( var i = 0; i < fields.length; i++) {
		inputs[i] = $('#' + fields[i]).val();
		alert(inputs[i]);
	}
	//create the xml markup for the word
	var rawXML = "<"+wordType+">";
	for ( var i = 0; i < fields.length; i++) {
		rawXML = rawXML + "<"+fields[i]+">"+inputs[i]+"</"+fields[i]+">";
	}
	rawXML = rawXML + "</"+wordType+">";
	//alert(rawXML);
	$.ajax({
		url: "addWord.php",
		type: "POST",
		data: {
			xml : rawXML,
			//inputs: inputs
		},
		dataType: "text",
		success: function(response) {
			$('#display').append(response);
		}
	});
	
}

/*********useful auxiliary functions*******/
function tidyWord (word) { //function that removes all underscores and adds capitals to first letters.
	word = word.charAt(0).toUpperCase() + word.slice(1);
	for ( var i = 0; i < word.length; i++) {
		if (word.charAt(i) == '_') {
			nextWord = word.slice(i+1);
			word = word.slice(0, i) + ' ' + tidyWord(nextWord);
		}
	}
	return word;
}

/*
 * takes an array of wordTypes (verb, noun, adjective, or expression) and returns
 * an array of all of the words under such a wordType.
 */
function makeDeck(wordTypes) {
	var $xml = $(xmlDoc);
	var deck = new Array();
	for ( var i = 0; i < wordTypes.length; i++) {
		var wordType = $.makeArray($xml.find("deck > " + wordTypes[i]));
		for ( var j = 0; j < wordType.length; j++) {
			deck.push(wordType[j]);
			
		}
	}
	//console.log(deck);
	return deck;
}
	
/*
 * Displays a list of words for a given wordType
 */
function singleTypeList(wordType) {
	$("#display").empty();
	var deck = makeDeck(new Array(wordType));
	var fields = getFields(wordType);
	$("#display").append('<table id="singleList"></table>');
	$("#singleList").append('<tr id="titlesRow"></tr>');
	for ( var i = 0; i < fields.length; i++) {
		$("#titlesRow").append(
			'<th class="'+ fields[i] +'">'+ tidyWord(fields[i]) +'</th>'
		);
	}
	$("#titlesRow").append($("<th>Edit</th>", {"class": "editColumn"}));
	for ( var i = 0; i < deck.length; i++) {
		$("#singleList").append('<tr id="row' + i +'"></tr>');
		for ( var j = 0; j < fields.length; j++) {
			child = $(deck[i]).find(fields[j]);
			$("#row" + i).append('<td class="'+ fields[j] +'Value">'+ $(child).text() +'</td>');
		}
		$("#row" + i).append(
				'<td><button onclick="editRow(' + "'row" + i + "', " + "'" + wordType + "'" + ')"><img src="../images/file_edit.png" width="20px" height="20px"></button><br> \
				<button onclick="deleteRow(' + "'row" + i + "', " + "'" + wordType + "'" + ')"><img src="../images/trash.png" width="20px" height="20px"></button></td>'
		);
	}
}

/*
 * Creates a random set of cards to learn from the given types
 */
function shuffle() {
	$("#display").empty();
	$("#display").append('<div id="shuffleCard"></div>');
	var deck = makeDeck($('#typeSelector').val());
	var index = Math.floor(Math.random()*deck.length);
	word = deck[index];
	children = $(word).children();
	for ( var i = 0; i < children.length; i++) {
		$child = $(children[i]);
		$("#shuffleCard").append(
				'<label class="shuffleWord">'
				//+ '<span class="'+$child.get(0).tagName+'">' + tidyWord($child.get(0).tagName) + '</span>'
				+ '<span class="'+$child.get(0).tagName+'Value">' + $child.text()+ '</span>'
				+ '</label>');
	}
}

function CITS() {
	var A = false;
	var B = true;
	var C = true;
	var D = true;
	var E = true;
	var F = true;
	
	var index = Math.floor((Math.random()*2) + 1);
	console.log(index);
	
	var rules = new Array(
			A || B || C, //1
			A && B || A && D || A && B && D ||, //2
			B && E || B && F || B && E && F, //3
			!E && !B || !E && !C || !E && !B && !C, //4
			!A || !C || !E, //5
			!F && !D || !F && !E || !F && !D && !E, //6
			!F && !B || !F && !D || !F && !B && !D, //7
			!A || !D || !F, //8
			!D && !A || !D && !F || !D && !A && !F, //9
			!C && !A || !C && !E || !C && !A && !E, //10
			!E && !A || !E && !B || !E && !A && !B, //11
			D && B || D && E || D && B && E, //12
			!C || !D || !F, //13
			!B || !C || !F, //14
			!B || !D || !F, //15
			D && C || D && F || D && C && F, //16
			!B || !C || !E //17
	);
	
	var continueOn = true;
	for ( var i = 0; i < rules.length; i++) {
		if (!continueOn) {
			console.log("Failure at rule" + (i + 1));
			break;
		}
		if (!rules[i]) {
			continueOn = false;
		}
		else if (i == rules.length) {
			console.log("Success!");
		}
	}
	
	var roads = {
			keyA : A,
			keyB : B,
			keyC : C,
			keyD : D,
			keyE : E,
			keyF : F
	};
	
	console.log(roads);
	
	
}
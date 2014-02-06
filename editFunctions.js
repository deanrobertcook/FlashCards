function editRow(rowID) { 
	alert('edit code here!' + rowID);
}

function deleteRow(rowID, wordType) {//using AJAX to send POST to PHP script
	//alert('delete code here! ' + rowID);
	var ID = rowID.substr(3); //removes the prepended 'row' word and leaves the number of the rowID
	//alert(ID);
	$('#' + rowID).css("background-color", "green");
	//var key = $('#' + rowID).text();
	//document.getElementById(rowID).children[0].style.backgroundColor="green";
	//var key1 = document.getElementById(rowID).children[1].firstChild.nodeValue;
	//var key2 = document.getElementById(rowID).children[2].firstChild.nodeValue;
	
	//var xmlKeys = xmlDoc.getElementsByTagName(wordType);
	var words = $(xmlDoc).find("deck > " + wordType);// == key;
	var key = $(words[ID]).attr('key');
	$('#' + rowID).hide();
	console.log(key);
	//word = (new XMLSerializer().serializeToString(words[ID])); //xml string of the word that we are looking to delete!
	$.ajax({
		url: "deleteWord.php",
		type: "POST",
		data: {
			key : key,
			wordType : wordType
		},
		dataType: "text",
		success: function(response) {
			$('#display').append(response);
		}
	});
	
	/*for ( var i = 0; i < $words.length; i++) {
		console.log($words[i]);
	}*/
	
}
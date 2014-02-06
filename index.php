<html>
<head>
	<link rel="stylesheet" href="style.css" type="text/css" media="screen" title="no title" charset="utf-8"/>
</head>
<body>

	<button type="button" onclick="createForm('verb')">Add Verb</button>
	<button type="button" onclick="createForm('noun')">Add Noun</button>
	<button type="button" onclick="createForm('adjective')">Add Adjective</button>
	<button type="button" onclick="createForm('expression')">Add Expression</button> 
	
	<!--  <button type="button" onclick="createJSForm('verb')">JS Test Add Verb</button> 
	<button type="button" onclick="createJSForm('noun')">JS Test Add Noun</button>
	<button type="button" onclick="createJSForm('adjective')">JS Test Add Adjective</button>
	<button type="button" onclick="createJSForm('expression')">JS Test Add Expression</button>-->
	
	
	<br>
	<select id="typeSelector" multiple="mutltiple">
		<option value="verb">Verbs</option>
		<option value="noun">Nouns</option>
		<option value="adjective">Adjectives/Adverbs</option>
		<option value="expression">Expressions</option>
	</select>
	<button onclick="shuffle()">Create Shuffle</button>
	<button onclick="showList()">Show Lists</button>
	<br>
	
	<button onclick="CITS()">CITS</button>
	<br>
	


<form id="select_form" method="post" action="">
	<input type="submit" value="Verbs" name="type"/>
	<input type="submit" value="Nouns" name="type"/>
	<input type="submit" value="Adjectives" name="type"/>
	<input type="submit" value="Expressions" name="type"/>
</form>

<!-- <button type="button" onclick="singleTypeList('verb')">Display Verbs</button>
<button type="button" onclick="singleTypeList('noun')">Display Nouns</button>
<button type="button" onclick="singleTypeList('adjective')">Display Adjectives</button>
<button type="button" onclick="singleTypeList('expression')">Display Expressions</button> -->

 
<button onclick="control(new Array('verb'), new Array())">Display Verbs</button>
<button onclick="control(new Array('noun'), new Array())">Display Nouns</button>
<button onclick="control(new Array('adjective'), new Array())">Display Adjectives/Adverbs</button>
<button onclick="control(new Array('expression'), new Array())">Display Expressions</button>
<div id="display"></div> 




<?php
/*
function select_type() {
	if ($_POST['type']=="Nouns") {
		return 'noun';
	} elseif ($_POST['type']=="Verbs"){
		return 'verb';
	} elseif ($_POST['type']=="Adjectives") {
		return 'adjective';
	} elseif ($_POST['type']=="Expressions") {
		return 'expression';
	}
}

 * The following code loads grmn.xsl and grmn.xml and displays them
 

//loads a file that we will use as the xsl stylesheet
$xsl= new DOMDocument();
$xsl->load("grmn.xsl");

//creates a new XSLT processor and feeds it the xsl
$xslt = new XSLTProcessor();
$xslt->registerPHPFunctions();
$xslt->importStylesheet($xsl);


//loads a file that we will use as the xml file
$xml = new DOMDocument();
$xml->load("grmn.xml");

//outputs a Document that will then be echoed out and printed. 
$output = $xslt->transformToDoc($xml);
echo $output->saveXML();
*/
?>
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.10.2/jquery.min.js"></script> <!-- Make sure it comes BEFORE ext js files! -->
<script src="learn.js"></script>
<script src="displayFunctions.js"></script>
<script src="addFunctions.js"></script>
<script src="editFunctions.js"></script>

</body>
</html>
<?php
//function found on stack-overflow for appending simple object elements to one another
function sxml_append(SimpleXMLElement $to, SimpleXMLElement $from) {
	$toDom = dom_import_simplexml($to);
	$fromDom = dom_import_simplexml($from);
	$toDom->appendChild($toDom->ownerDocument->importNode($fromDom, true));
}

$xml = simplexml_load_file("grmn.xml");
$deck = new SimpleXMLElement($xml->asXML());
$newWord = new SimpleXMLElement($_POST['xml']);
sxml_append($deck, $newWord);
$deck->asXML("grmn.xml");

/*$testArr = $_POST['inputs'];
foreach ($testArr as $field) {
	echo $field;
}*/
echo "Word Added";
?>

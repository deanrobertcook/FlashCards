<?php
$dom = DOMDocument::load('grmn.xml');
$xpath = new DOMXpath($dom);
/*
 * Adding distinct keys to each wordType
 */

/***********VERBS**************/
$verbs = $xpath->evaluate("//verb");
$infinitives =  $xpath->evaluate("//verb/infinitive");

for ($i = 0; $i < $verbs->length; $i++) {
	$verbs->item($i)->setAttribute('key', $infinitives->item($i)->nodeValue);
}

/***********NOUNS**************/
$nouns = $xpath->evaluate("//deck/noun");
$nounBase =  $xpath->evaluate("//deck/noun/noun");

for ($i = 0; $i < $nouns->length; $i++) {
	$nouns->item($i)->setAttribute('key', $nounBase->item($i)->nodeValue);
}

/***********ADJECTIVES**************/
$adjectives = $xpath->evaluate("//deck/adjective");
$adjectiveBase =  $xpath->evaluate("//deck/adjective/adjective");

for ($i = 0; $i < $adjectives->length; $i++) {
	$adjectives->item($i)->setAttribute('key', $adjectiveBase->item($i)->nodeValue);
}

/***********EXPRESSIONS**************/
$expressions = $xpath->evaluate("//deck/expression");
$keys =  $xpath->evaluate("//deck/expression/expression");

for ($i = 0; $i < $expressions->length; $i++) {
	$expressions->item($i)->setAttribute('key', $keys->item($i)->nodeValue);
}
$dom->preserveWhiteSpace = false;
$dom->save('grmn.xml');
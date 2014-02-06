<?php
$dom = DOMDocument::load('grmn.xml');

$xpath = new DOMXpath($dom);

$key = $_POST['key'];
$wordType = $_POST['wordType'];
$deck = $xpath->evaluate("//deck")->item(0);
$node = $xpath->evaluate("//".$wordType."[@key = '".$key."']")->item(0);

$deck->removeChild($node);

$dom->save('grmn.xml');
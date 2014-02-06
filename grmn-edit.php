<html>
<head>

</head>
<body>
	<h2>Find a Verb</h2>
	<form action="" method="post">
		infinitive<input type="text" name="infinitive"/><br>
		<input type="submit" value="submit" name="submit"/>
	</form>
</body>
</html>
<?php
if (isset($_POST['submit'])) {
	$xml = simplexml_load_file('grmn.xml');
	$deck = new SimpleXMLElement($xml->asXML());
	
	$infinitive = $_POST['infinitive'];
	$result = $deck->xpath("./verb[infinitive='$infinitive']");
	var_dump($result);
}

?>
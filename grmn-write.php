<?php
	$xml = simplexml_load_file("grmn.xml")
	or die("didn't work");
	
	$deck = new SimpleXMLElement($xml->asXML());

	if ($_POST['wordType'] == "verb") {
		$verb = $deck->addChild("verb");
		
		//begin to check to see if fields are empty, if not, add to the word
		//if they are empty, set the print variable to false to ensure the xml
		//doesn't get altered.
		$print = true;
		$i = 0;
		if (!empty($_POST['Category0'])) {
			$verb->addChild("category", $_POST['Category0']);
			$i++;
			while (!is_null($_POST['Category' . $i])) {
				if (!empty($_POST['Category' . $i])) {
					$verb->addChild('category', $_POST['Category' . $i]);
				}
				$i++;
			}
		} else {$print = false;}
		
		
		if (!empty($_POST['Infinitive'])) {
			$verb->addChild("infinitive", $_POST['Infinitive']);
		} else {$print = false;}
		if (!empty($_POST['Meaning'])) {
			$verb->addChild("meaning", $_POST['Meaning']);
		} else {$print = false;}
		if (!empty($_POST['Objects'])) {
			$verb->addChild("objects", $_POST['Objects']);	
		} else {$print = false;}
		if (!empty($_POST['Simple_past'])) {
			$verb->addChild("simple_past", $_POST['Simple_past']);	
		} else {$print = false;}
		if (!empty($_POST['Past_perfect'])) {
				$verb->addChild("past_perfect", $_POST['Past_perfect']);
		} else {$print = false;}		
		
		$i = 0;
		while (!is_null($_POST['Preposition' . $i])) {
			if (!empty($_POST['Preposition' . $i])) {
				$verb->addChild('preposition', $_POST['Preposition' . $i]);
			}
			$i++;
		}
		
		$i = 0;
		while (!is_null($_POST['Example' . $i])) {
			if (!empty($_POST['Example' . $i])) {
				$verb->addChild('example', $_POST['Example' . $i]);
			}
			$i++;
		}

		if ($print == true) {
			$deck->asXML('grmn.xml');
			header('Location: index.php');;
		}
		else {
			?>
			<script type="text/javascript">
				alert('Missing fields');
			</script>
			<?php
		}
		
	}
	
	
	if ($_POST['wordType'] == "noun") {
		$noun = $deck->addChild("noun");
		
		$print = true;
		$i = 0;
		if (!empty($_POST['Category0'])) {
			$noun->addChild("category", $_POST['Category0']);
			$i++;
			while (!is_null($_POST['Category' . $i])) {
				if (!empty($_POST['Category' . $i])) {
					$noun->addChild('category', $_POST['Category' . $i]);
				}
				$i++;
			}
		} else {$print = false;}
		
		if (!empty($_POST['Gender'])) {
			$noun->addChild("gender", $_POST['Gender']);
		} else {$print = false;}
		if (!empty($_POST['Noun'])) {
			$noun->addChild("noun", $_POST['Noun']);
		} else {$print = false;}
		if (!empty($_POST['Meaning'])) {
			$noun->addChild("meaning", $_POST['Meaning']);
		} else {$print = false;}
		if (!empty($_POST['Plural'])) {
			$noun->addChild("plural", $_POST['Plural']);
		} else {$print = false;}
		
		$i = 0;
		while (!is_null($_POST['Example' . $i])) {
			if (!empty($_POST['Example' . $i])) {
				$noun->addChild('example', $_POST['Example' . $i]);
			}
			$i++;
		}
		
		if ($print == true) {
			$deck->asXML('grmn.xml');
			//header('Location: index.php');
			var_dump(noun);
		}
		else {
			?>
			<script type="text/javascript">
				alert('Missing fields');
			</script>
			<?php
		}
	}
	
	if ($_POST['wordType'] == "adjective") {
	
		$adjective = $deck->addChild("adjective");
		
		$print = true;
		$i = 0;
		if (!empty($_POST['Category0'])) {
			$adjective->addChild("category", $_POST['Category0']);
			$i++;
			while (!is_null($_POST['Category' . $i])) {
				if (!empty($_POST['Category' . $i])) {
					$adjective->addChild('category', $_POST['Category' . $i]);
				}
				$i++;
			}
		} else {$print = false;}
		
		if (!empty($_POST['Adjective'])) {
			$adjective->addChild("adjective", $_POST['Adjective']);
		} else {$print = false;}
		if (!empty($_POST['Meaning'])) {
			$adjective->addChild("meaning", $_POST['Meaning']);
		} else {$print = false;}
		
		$i = 0;
		while (!is_null($_POST['Example' . $i])) {
			if (!empty($_POST['Example' . $i])) {
				$adjective->addChild('example', $_POST['Example' . $i]);
			}
			$i++;
		}
		
		if ($print == true) {
			$deck->asXML('grmn.xml');
			header('Location: index.php');;
		}
		else {
			?>
			<script type="text/javascript">
				alert('Missing fields');
			</script>
			<?php
		}
	}
	
	if ($_POST['wordType'] == "expression") {
		$expression = $deck->addChild("expression");
		
		$print = true;
		$i = 0;
		if (!empty($_POST['Category0'])) {
			$expression->addChild("category", $_POST['Category0']);
			$i++;
			while (!is_null($_POST['Category' . $i])) {
				if (!empty($_POST['Category' . $i])) {
					$expression->addChild('category', $_POST['Category' . $i]);
				}
				$i++;
			}
		} else {$print = false;}
		
		if (!empty($_POST['Expression'])) {
			$expression->addChild("expression", $_POST['Expression']);
		} else {$print = false;}
		if (!empty($_POST['Meaning'])) {
			$expression->addChild("meaning", $_POST['Meaning']);
		} else {$print = false;}
		
		if ($print == true) {
			$deck->asXML('grmn.xml');
			header('Location: index.php');;
		}
		else {
			?>
			<script type="text/javascript">
				alert('Missing fields');
			</script>
			<?php
		}
	}

?>
<html>
<head>
	<script src="functions.js"></script>
</head>
<body>
	<button type="button"><a href='index.php'>Back to Decks</a></button>
	<button type="button" onclick="createForm('verb')">Add Verb</button>
	<button type="button" onclick="createForm('noun')">Add Noun</button>
	<button type="button" onclick="createForm('adjective')">Add Adjective</button>
	<button type="button" onclick="createForm('expression')">Add Expression</button>
	
	<!-- <h2>Add a new Verb</h2>
	
	 <div id="readroot" style="display: none">
		Category<input type="text" name="category"/><br>
	</div>
	
	<form action="" method="post">
		Category<input type="text" name="category0"/><br>
		<input type="button" id="addCat" value="+1" onclick="addFields('category');"/><br/>
		 <input type="button" value="-1" onclick="this.parentNode.parentNode.removeChild(this.parentNode);" />
		<br/>
		<hr>
		
		Infinitive<input type="text" name="infinitive"/><br>
		Meaning<input type="text" name="meaning"/><br>
		Objects<input type="text" name="objects"/><br>
		Simple Past<input type="text" name="simple_past"/><br>
		Past Perfect<input type="text" name="past_perfect"/><br>
		<hr>
		
		preposition<input type="text" name="preposition0"/><br>
		<input type="button" id="addPrep" value="+1" onclick="addFields('preposition');"/><br/>
		<hr>
		example<input type="text" name="example0"/><br>
		<input type="button" id="addExample" value="+1" onclick="addFields('example');"/><br/>
		<hr>
		<input type="hidden" value="verb" name="wordType"/>
		<input type="submit" value="submit" name="submit"/>
	</form>-->
	
	
	
</body>
</html>

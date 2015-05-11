<?php

/* Subject and Email Vars  */

	$emailSubject = '2CubedBot - Help Form!';
	$emailAddress = 'dminer78@dminer78.com';
	
/* Set Vars to Info */

	$nameInput = $_POST['name'];
	$emailInput = $_POST['email'];
	$messageInput = $_POST['message'];
	
	$body = <<<EOD
<br /><hr><br />
Name: $name <br />
Email: $email <br />
Message: $message
EOD;

	$headers = "From: $email\r\n";
	$headers .= "Content-type: text/html\r\n";
	$success = mail($emailAddress, $emailSubject, $body, $headers);
	
/* Alert user that email is sent */

	$alert = <<<EOD
<html>
<style>
alert("The form has been sent!");
</style>
</html>
EOD;
echo "$alert";
	
?>
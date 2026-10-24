<?php
if($_SERVER["REQUEST_METHOD"]=="POST")

{

	 $name=$_POST["name"];

	 $email=$_POST["email"];

	 $subject=$_POST["subject"];
	 $msg=$_POST["msg"];

$to = "mobilesignalboosterpune@hotmail.com";

$subject1 = "Enquiry Mail of the Pune";



$message="

<html>

<head>

<title>Enquiry E-mail</title>

</head>

<body>

<p>This email contains Enquiry E-mail</p>

<table style='width:100%; border:1px #888 solid; background-color: #e1e1e1;'>

<tr>

<th style='border-bottom: 1px #888 solid; border-right: 1px #888 solid;'>Name</th>

<th style='border-bottom: 1px #888 solid; border-right: 1px #888 solid;'>E-mail</th>

<th style='border-bottom: 1px #888 solid; border-right: 1px #888 solid;'>Subject</th>

<th style='border-bottom: 1px #888 solid;'>Message</th>

</tr>

<tr>

<td style='border-bottom: 1px #888 solid; border-right: 1px #888 solid;'>".$name."</td>

<td style='border-bottom: 1px #888 solid; border-right: 1px #888 solid;'>".$email."</td>

<td style='border-bottom: 1px #888 solid; border-right: 1px #888 solid;'>".$subject."</td>

<td style='border-bottom: 1px #888 solid;'>".$msg."</td>

</tr>

</table>

</body>

</html>";


// Always set content-type when sending HTML email

$headers = "MIME-Version: 1.0" . "\r\n";

$headers .= "Content-type:text/html;charset=UTF-8" . "\r\n";

// More headers

$headers .= 'From: <mobilesignalboosterpune@hotmail.com>' . "\r\n";



if(mail($to,$subject1,$message,$headers))

{

	header("location: index.html");
	

}

else

{

	echo "<script language='javascript'>";
	echo "alert('Sorry! Some Problem Contact-+91-7715991232'); window.location.href='index.html';";
	echo "</script>";

}

} 

?>
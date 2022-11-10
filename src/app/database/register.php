<?php
include_once("database.php");
$postdata = file_get_contents("php://input");
if(isset($postdata) && !empty($postdata))
{
$request = json_decode($postdata);
$username = trim($request->username);
$firstName = trim($request->firstName);
$lastName = trim($request->lastName);
$plateNumber = trim($request->plateNumber);
$password = mysqli_real_escape_string($mysqli, trim($request->password));
$email = mysqli_real_escape_string($mysqli, trim($request->email));
$sql = "INSERT INTO users(email,username,firstName,lastName,plateNumber,password) VALUES ('$email','$username','$firstName','$lastName','$plateNumber','$password')";
if ($mysqli->query($sql) === TRUE) {
$authdata = [
'username' => $username,
'password' => '',
'email' => $email,
'firstName' => $firstName,
'lastName' => $lastName,
'plateNumber' => $plateNumber,
'id' => mysqli_insert_id($mysqli)
];
echo json_encode($authdata);
}
}

?>
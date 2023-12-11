<?php

error_reporting(E_ALL);
ini_set('display_errors', '1');
$name= $_POST['name'];
$email= $_POST['email'];
$phone= $_POST['phone'];
$message= $_POST['message'];


$conn= new mysqli('localhost' , 'root' ,'', 'procrastinot');
if($conn->connect_error){
    die('Connection Failed : '.$conn->connect_error);

}else{
    $stmt = $conn->prepare("INSERT INTO registration(name,email,phone,message) values(? ,? ,? ,?)");
    $stmt->bind_param("ssis",$name, $email , $phone , $message);
    $stmt->execute();
    echo "Registration Successfully Completed ! ......";
    $stmt->close();
    $conn->close();
    
}
?>
<?php
header("content-type: application/json; charset=utf-8");
$name=isset($_POST['name']) ? $_POST['name'] : "";
$email=isset($_POST['email']) ? $_POST['email'] : "";
$phone=isset($_POST['phone']) ? $_POST['phone'] : "";
$message=isset($_POST['message']) ? $_POST['message'] : "";
if($name && $email && $phone && $message){
 $message_body="Formularz kontaktowy wysłany ze strony www.example.com\n";
 $message_body.="Imię i nazwisko: $name\n";
 $message_body.="Adres email: $email\n";
 $message_body.="Numer telefonu: $phone\n\n";
 $message_body.=$message;
 if(mail("tyszanin93@gmail.com","Formularz kontaktowy",$message_body)){
 $json=array("status"=>1,"msg"=>"Twój formularz został pomyślnie wysłany.");
 }
 else{
 $json=array("status"=>0,"msg"=>"Wystąpił problem z wysłaniem formularza."); 
 }
}
else{
 $json=array("status"=>0,"msg"=>"Proszę wypełnić wszystkie pola przed wysłaniem."); 
}
echo json_encode($json);
exit;
?>
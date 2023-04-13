<?php 

try {
    $dns ='mysql:host=localhost;dbname=trainingbdd';
    $utilisateur ='root';
    $motDePasse ='';
    $connection = new PDO( $dns, $utilisateur, $motDePasse );
    $connection->query("SET NAMES utf8") ;
}catch (BadFunctionCallException $e){
    echo "connection à MySQL impossible : ", $e->getMessage();
    die();
}

?>
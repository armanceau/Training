<?php
require 'connexion.php';



print "<br>Classement par Noms";
$query = "SELECT * FROM user ORDER BY nom ";

echo 'Noms : '.$query;
?>
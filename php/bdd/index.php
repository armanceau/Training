<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Formulaires</title>
</head>
<body>
    <?php
        require "connexion.php";
        $sql=$connection->prepare("SELECT * FROM user");
        $sql->execute();
        $lignes = $sql->fetchall();

        foreach($lignes as $ligne){
            echo "Nom : ".$ligne['nom']."<br>";
            echo "Prénom : ".$ligne['prenom']."<br>";
        }
    ?>
</body>
</html>
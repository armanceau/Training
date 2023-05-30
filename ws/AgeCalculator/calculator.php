
<?php 
    $day = $_REQUEST['day'];
    $month = $_REQUEST['month'];
    $year = $_REQUEST['year'];

    $testDay = false;
    $testMonth = false;
    $testYear = false;
    $testRempli = true;

    $date = "";
    

    // Verification du jour
    if($day < 32 && $day > 0){
        $testDay = true;
    }
    else{
        $testDay = false;
    }

    // Vérification du mois
    if($month < 13 ){
        $testMonth = true;
    }
    else{
        $testMonth = false;
    }

    // Verification de l'année
    if($year <= date("Y") ){
        $testYear = true;
    }
    else{
        $testYear = false;
    }

    // Affichage de la phrase personnalisée de l'erreur selon la variable ayant une erreur
    if($testDay == false){
        $date = "le jour inscrit n'est pas correct";
    }
    elseif($testMonth == false){
        $date = "le mois inscrit n'est pas correct";
    }
    elseif($testYear == false){
        $date = "l'année inscrite n'est pas correcte";
    }
    elseif(empty($day) || empty($month) || empty($year)){
        $testRempli = false;
        $date = "Tous les champs doivent être rempli";
    }
    
    // Affichage de la date
    if($testDay && $testMonth && $testYear && $testRempli){
        echo "day : " . $day . "<br>" ;
        echo "month : " . $month . "<br>";
        echo "year : " . $year . "<br>";
    }
    // Affichage de l'erreur + lien de retour
    else{
        echo "
            Attention " .$date. "
            <br>
            <a href='index.php'>Retour</a>
        ";
    }
?>
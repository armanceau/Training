<?php        
//si le bouton envoyer a été cliqué  
if (isset($_POST["envoyer"])){   
//on recupère le nom  
$nom = $_POST["nom"];  
//on recupère le prenom  
$prenom = $_POST["prenom"];    
//on recupère l'adresse email  
$email = $_POST["email"];      
//on recupère l'objet du message  
$objet = $_POST["objet"];  
//on recupère le message  
$message = $_POST["message"];  
  
$to = "arthur.manceau1@outlook.fr";      
$headers = "From:" . $nom . " " . $prenom ." " . $email;    
//on envoie le message avec la fonction mail  
if (mail($to,$objet,$message,$headers))   
//si le message a été envoyé, on le confirme  
{   
echo " ton message est bien envoyé.";    
}   
//sinon on n'affiche un message d'erreur  
else   
{   
echo "Une erreur s'est produite";   
}   
}   
?> 
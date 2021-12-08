//variables :
/* Personnages*/
let perso1 = new Array();
let perso2 = new Array();
console.log(perso1);
console.log(perso2);
/*Récupération des zones HTML */
let error = document.getElementById('error');

//perso 

/*Perso 1 */
let name1 = document.getElementById('name1');
let life1 = document.getElementById('life1');
let attaque1 = document.getElementById('attaque1');
let def1 = document.getElementById('def1');

/*Perso 2 */
let name2 = document.getElementById('name2');
let life2 = document.getElementById('life2');
let attaque2 = document.getElementById('attaque2');
let def2 = document.getElementById('def2');

function createPerso(){
    //Récupération des valeurs du perso
    let namePerso = document.getElementById('namePerso').value;
    let lifePerso = document.getElementById('lifePerso').value;
    let attaquePerso = document.getElementById('attaquePerso').value;
    let defPerso = document.getElementById('defPerso').value;

    //parsing des valeurs
    lifePerso = parseInt(lifePerso);
    attaquePerso = parseInt(attaquePerso);
    defPerso = parseInt(defPerso);
    //Récupération de la valeur du select
    let num = document.getElementById('num').options[document.getElementById('num').selectedIndex].value;
    //Test si les champs de formulaire sont vides
    if(namePerso == "" || isNaN(isNaN(lifePerso) || attaquePerso) || isNaN(defPerso)){
        console.log('vide');
        error.innerHTML = "Veuillez remplir tous les champs du formulaire !!!<br>";
    }
    //Test si les champs de formulaire sont remplis
    else{
        //Test num perso 1 ou 2? (création du personnage 1)
        if(num == 1){
            //Test si les 3 valeurs ne dépasse pas 10
            if((lifePerso+attaquePerso+defPerso) <= 10){
                //Affectation des valeurs du personnage 1 dans le tableau perso1
                perso1[0] = namePerso;
                perso1[1] = lifePerso;
                perso1[2] = attaquePerso;
                perso1[3] = defPerso;
                console.log(perso1);
                
                //Affichage des valeurs du perso créé
                name1.innerHTML = "Nom : "+perso1[0];
                life1.innerHTML = "Vie : "+perso1[1];
                attaque1.innerHTML = "Attaque : "+perso1[2] ;
                def1.innerHTML = "Défense : "+perso1[3];
            }
            //Si lifePerso+AttaquePerso+defPerso > 10
            else{
                //Affichage de l'erreur
                error.innerHTML += "La somme des compétences est supérieure à 10<br>";
            }        
        }
        //Création du personnage 2
        else{
            if((lifePerso+attaquePerso+defPerso) == 10){
                //affectation des valeurs du personnage 2 dans le tableau perso2
                perso2[0] = namePerso;
                perso2[1] = lifePerso;
                perso2[2] = attaquePerso;
                perso2[3] = defPerso;
                console.log(perso2);

                //Affichage des valeurs du perso créé
                name2.innerHTML = "Nom : "+perso2[0];
                life2.innerHTML = "Vie : "+perso2[1];
                attaque2.innerHTML = "Attaque : "+perso2[2] ;
                def2.innerHTML = "Défense : "+perso2[3];
            }
            else{
                //affichage de l'erreur
                error.innerHTML += "La somme des compétences est supérieure à 10<br>";
            }
        }   
            console.log('rempli');
            error.innerHTML = "Personnage ajouté !!!<br>";
    }
}
function recup(){
    let selectValue = document.getElementById('num').options[document.getElementById('num').selectedIndex].value;
    console.log(selectValue);
}

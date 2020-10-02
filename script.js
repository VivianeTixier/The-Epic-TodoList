//On cible le ul contenant la liste de tâche
let $ulList = document.querySelector('#list');

//On crée un tableau de tâches
let taskArray = ["blabla", "blibli"];

//On lui met un html par défaut s'il n'y a aucune tâche dans le tableau list
//Et on affiche les tâches s'il y en a une
if (taskArray.length > 0) {
    for (task of taskArray) {
        //On crée le li
        let li = document.createElement("li");
        //On insère la donnée dedans
        li.innerHTML= `${task}`;
        //On ajoute le li au ul
        $ulList.appendChild(li);
    }
} else {
    $ulList.innerHTML = "Il n'y a aucune tâche pour le moment."
}
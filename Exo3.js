Ecrire un algorithme qui demande un nombre de départ, et qui ensuite affiche les dix nombres suivants. Par exemple, si l'utilisateur entre le nombre 17, le programme affichera les nombres de 18 à 27.



Variables N, i en Entier
Debut
Ecrire "Entrez un nombre : "
Lire N
Stop ← N+10
Ecrire "Les 10 nombres suivants sont : "
TantQue N < Stop
   N ← N+1
   Ecrire N
FinTantQue
Fin
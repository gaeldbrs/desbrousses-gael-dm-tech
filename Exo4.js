Écrire un algorithme qui demande un nombre de départ, et qui
calcule la somme des entiers jusqu’à ce nombre. Par exemple, si
l’on entre 5, le programme doit calculer : 1 + 2 + 3 + 4 + 5 = 15 NB
: on souhaite afficher uniquement le résultat, pas la décomposition
du calcul.


Variables N, i, Som en Entier
Debut
Ecrire "Entrez un nombre : "
Lire N
Som ← 0
Pour i ← 1 à N
  Som ← Som + i
i Suivant
Ecrire "La somme est : ", Som
Fin
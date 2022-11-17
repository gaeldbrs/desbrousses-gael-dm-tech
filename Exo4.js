fonction somme(n : entier) : entier
  Début
      Si n = 0 alors
          Retourne 0
      Sinon
          Retourne n + somme ( n - 1 )
        fin Si
  Fin 
Variable
    n : entier

Début
    Ecrire("Veuillez entrer un nombre positif : ")
    Lire(n)
    Ecrire("La somme des entier de 1 à " , n , "est : " , somme(n) )

Fin
# TUTO GITLAB

## PARTIE 1 - Récupérer le projet gitlab sur votre ordinateur

`git clone --branch <VotreBranche> https://gitlabiut.iutlan.univ-rennes1.fr/etuinfo/2022sae105/2022sae105_1e/sae105_e12.git`
> <Votre Branche> correspond à la branche que vous voulez récupérer par exemple test pour la branche test ou alors Maxime pour la branche Maxime.
**RQ:** gitlab peut vous demander votre identifiant et mot de passe dans ce cas mettez celui de connexion de l'IUT.

## PARTIE 2 - Envoyer vos modifications sur gitlab

> Tout d'abord, vérifiez que vous êtes bien sur le bonne branche:
`git branch`

Si vous êtes sur la bonne branche (la votre) vous pouvez sauter l'étape qui va suivre sinon faites
`git checkout <VotreBranche>`
> <Votre Branche> correspond à la branche que vous voulez récupérer par exemple test pour la branche test ou alors Maxime pour la branche Maxime.

### Vous êtes ensutie prêt à faire la suite des étapes:

Ajouter tous les nouveaux fichiers à votre prochain commit:
`git add *`

Ajouter un message à votre commit
`git commit -m "premier commit !"`
> par exemple... vous pouvez changer le message

Enfin, si tout a bien fonctionner, faites
`git push`

Et voilà !
> Pensez à vérifier souvent si vous êtes bien à jour sur votre projet, il se peut que vous ayez fait des modifications avant 
> pour en êtres sûr, faites `git status` qui affichera l'état de votre dossier, si il est à jour ou alors si il y a une erreur etc. 

Maintenant, si vous avez la flemme de faire toutes ces étapes vous pouvez seulement faire
`./fast_push.sh "Votre message"` qui va faire toutes les étapes précédents et mettre comme nom de commit "Votre message".

## PARTIE 3 - Mettre à jour votre dossier avec le projet
> pour réaliser cette étape il faut se trouver dans le dossier du projet qui a été cloné avant.

Voici la commande pour mettre à jour votre projet
`git pull`
**RQ:** gitlab peut vous demander votre identifiant et mot de passe dans ce cas mettez celui de connexion de l'IUT.
# LES ICONS
Les icons on été ajouté en CSS. Ils viennent des images SVG présente sur la maquette web. Vous retrouverez l'ensemble des icons dans vos dossier mais il ne surtout pas les utiliser avec la balise `<img ...>` (dans notre cas en tout cas, sinon ça ne pose aucun problème).

## COMMENT FAIRE ?
Pour commencer vous devez connaître comment nos icons sont construit: il est constitué de deux classes:
* une classe **icon**: elle permet de définir la couleur et le type d'affichage.
* une classe portant le **nom de l'icon** (qui est en anglais): elle permet simplement de donner le chemin de l'image de l'icon ainsi que sa taille (car malheureusement tous les icons ont une taille différente).

> Voici comment l'on défini un icon dans le html
```html
<span class="icon arrow-right"></span>
```
L'icon affiché ici sera l'icon de la flèche droite.

## LISTE DES ICONS DISPONIBLES

* flèche droite: `arrow-right`
* flèche gauche: `arrow-left`
* flèche bas: `arrow-down`
* étoile remplie: `star-filed`
* logo de twitter: `twitter`
* sac à dos: `backpack`
* lit double: `bed`
* vélo: `bike`
* menu burger: `burger-menu`
* château: `castle`
* validé: `check-mark`
* refusé: `cross`
* tuba: `dive`
* repas: `eat`
* filtre: `filter`
* flamme: `fire`
* logo 4: `four`
* logo 3: `three`
* logo 2: `two`
* logo 1: `one`
* aide: `help`
* localisation(le pin): `localization`
* personne qui nage: `pool`
* sandales: `sandals`
* personne qui marche: `walk`
* goutte d'eau: `water`

> **Attention** n'oubliez pas de mettre la classe "icon" avant celle de votre icon sinon ça ne marchera pas... (et je viendrai pas vous aider).
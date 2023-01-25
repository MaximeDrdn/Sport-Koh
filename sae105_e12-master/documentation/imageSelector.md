# Séléecteur d'images
les sélécteur d'images sont des éléments contenant une image au centre et en dessous des images où l'on peut cliquer pour changer l'image au centre par celle-ci.

## IMPORTATION
> avant de commencer à l'utiliser, il est important de l'importer ! Voici la ligne à ajouter dans votre code (le chemin est relatif mais étant donné que vous travaillerez dans le dossier "pages" le chemin restera le même).

```javascript
<script src="../assets/javascript/tools/ImageSelector.js"></script>
```

## EXEMPLE DE CODE HTML
Voici un exemple de code d'une sélécteur d'images.
L'image landscape 1 apparaît deux fois car elle apparaît au centre et en bas (pour que l'on puisse la re séléctionner après avoir changé d'image...).
Vous pouvez ajouter autant d'image que vous voulez en bas mais attention ! Je ne conseil pas.
L'id `image_selector_exemple` est unique je vous conseil de le changer pour chaque sélécteur d'image créé sinon vous allez avoir des embrouilles (par le code et par moi !!).

```html
<div class="image__selector" id="image_selector_exemple">
   <img src="../assets/ressources/images/landscapes/landscape_1.jpg" alt="Landscape 1" />
   <div>
   	   <img class="active" src="../assets/ressources/images/landscapes/landscape_1.jpg" alt="Landscape 1" />
       <img src="../assets/ressources/images/landscapes/landscape_2.jpg" alt="Landscape 2" />
       <img src="../assets/ressources/images/landscapes/landscape_3.jpg" alt="Landscape 3" />
       <img src="../assets/ressources/images/landscapes/landscape_4.jpg" alt="Landscape 4" />
       <img src="../assets/ressources/images/landscapes/landscape_5.jpg" alt="Landscape 5" />
	</div>
</div>
```
> NOTE: la classe active présente sur la première image de la seconde div correspond à l'image actuellement affichée.

## EXEMPLE DE CODE JAVASCRIPT
Pour le code javascript c'est là où opère toute la magie puisque tout est fait à votre place ! (presque).
Vous devez tout d'abord vous assurer d'avoir importer le `main.js` __APRES__ l'importation de ImageSelector (pour éviter qu'il ne reconnaisse pas le code contenu dans ImageSelector.
Voic un exemple de code javascript permettant de faire fonctionner votre magnifique sélécteur d'images:
> il est à mettre dans votre fichier `main.js` ! 

```javascript
const imageSelector = new ImageSelector(document.getElementById('image_selector_exemple'))
imageSelector.init()
```
> N'oubliez pas de changer l'id présent dans les guillemets par le votre et à dupliquer ce code pour le N nombre de sélécteur d'images que vous aurez.

Et par magie tout fonctionne !
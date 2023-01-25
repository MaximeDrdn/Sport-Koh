# LES FILTRES
> cette documentation s'adresse à Timéo car c'est lui qui fait la page `catalogue de séjours`

## PARTIE HTML
pour commencer nous allons regarder comment définir les filtres Par exemple (Sports à la montagne (X))

Nous allons commencer par rajouter une classe à notre `ul` ici on va l'appeler "filtres" mais tu peux l'appeler comme tu veux.

```html
<ul class="filtres">
    ....
</ul>
```

Ensuite, on voir comment est constituté chaque `li` de notre balise `ul`

```html
<li data-type="montagne">
    <input id="a_1" type="checkbox" />
    <label for="a_1">Sports à la montagne (100)</label>
</li>
```
> Voici un exemple de filtre défini dans le `ul`.
Et là tu te dis "oh là là il m'a mit des attributs ultra compliqué pas vu genre data-type ou alors c'est quoi input ?"

Pas de panique, voici une explication:
`data-type` permet de savoir quel sera le nom du filtre présent sur l'offre par exemple "montagne" permettra au système de filtre de savoir que l'activité montagne est présente dans l'offre
`<input ... type="checkbox" />` est important car c'est la petite boîte à cocher et décocher pour valider le filtre.
L'id présent sur l'input permet à l'élement `<label..>` de savoir à quoi appartient la checkbox, ici elle appartient à le balise `input`.
> Pense à vérifier que l'id dans l'attribut `id` et `for` sont identiquent à chaque fois.


> voici maintenant comment on définit une offre
```html
<article 
    class="offer"
    data-activites="montagne, mer, aventures, découverte" 
    data-locations="historiques, montagne, bord d'un lac, bord de mer" 
    data-hebergements="hotel, auberge, appart city, chalets, bungalows, mobil home"
>
    ....
</article>
```
* La classe `offer` est pour désigner l'offre, tu peux     mettre autre chose.
* `data-activites` est la liste de tous les tags d'activités exemple (sport à la montagne)
* `data-locations` est la liste de tous les tags concernant la localisation du lieux exemple "historique, montagne...)
* `data-hebergements` est la liste de tous les hebergements possible exemple "hotel, auberge"...

Tu mettre autant de tag que tu veux tant que tu sépares par une `,`.

## PARTIE JS
Pour le js il faudra d'abord ajouter avant la balise main.js

```javascript
<script src="../assets/javascript/tools/Filter.js"></script>
```

Enfin, dans le fichier `main.js` il faudra mettre cette ligne:

```js
const filter = new Filter(
	document.querySelectorAll('.filtres>li'),
	document.querySelectorAll('.offer')
)
filter.init()
```
la première `.filtres` permet de séléctionner tous les filtres

La deuxième permet de séléctionner toutes les offres.


ET VOILA NORMALEMENT
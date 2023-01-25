/**
 * @class Filter
 * @author Mattéo Gaillard
 *
 * @desc système de filtre simplifié
 */
class Filter {

    constructor(filtersNode, offers) {
        this._filtersNode = filtersNode
        this._offers = offers

        this._separator = /, +/g
        this._filters = []
    }

    /**
     * @desc initialiser les filtres
     */
    init() {
        this._filtersNode.forEach(node =>
            this.define(node)
        )
    }

    /**
     * @param {String} filter l'élément ou la classe ou l'id du filtre
     * @desc recenser le filtre dans la liste des filtres
     */
    define(filter) {
        if(typeof filter === 'string') {
            if(!filter.startsWith('#') && !filter.startsWith('.'))
            return console.error('Le filtre doit être une classe ou un ID.')
        filter = document.querySelector(filter)
        }
        const checkBox = filter.querySelector('input[type="checkbox"]')

        if(!checkBox)
            return console.error('Aucune checkbox n\'a été trouvée')
        checkBox.onclick = () => {
            const attr = filter.getAttribute('data-type')
            if(checkBox.checked)
                this._addFilter(attr)
            else
                this._removeFilter(attr)
            this.update()
        }
    }

    /**
     * @param {String} tag le nom du filtre par exemple (montagne)
     * @desc permet d'ajouter le filtre dans la liste des filtres 
     */
    _addFilter(tag) {
        this._filters.push(tag)
    }

    /**
     * @param {String}} tag le nom du filtre par exemple (montagne)
     * @desc permet de retirer le filtre de la liste des filtres 
     */
    _removeFilter(tag) {
        const attrIndex = this._filters.indexOf(tag)
        this._filters.splice(
            this._filters.indexOf(attrIndex),
            1
        )
    }

    /**
     * Mettre à jour les liste des offres grâce aux filtres
     */
    update() {
        this._offers.forEach(offer => {
            let activites = offer.getAttribute('data-activites'),
                localizations = offer.getAttribute('data-locations'),
                hosting = offer.getAttribute('data-hebergements')

            if (!activites || !localizations || !hosting)
                return console.error("Les attributs data-activites ou data-locations ou data-hebrgements manquent.")
            activites = activites.split(this._separator)
            localizations = localizations.split(this._separator)
            hosting = hosting.split(this._separator)

            const offerTags = [...activites, ...localizations, ...hosting]
            if (this._filters.length > 0) {
                if (offerTags.filter(tag => this._filters.includes(tag)).length > 0) {
                    offer.style.display = "block"
                } else {
                    offer.style.display = "none"
                }
            } else {
                offer.style.display = "block"
            }
        })

        this.updateOffersCount();
    }

    // mettre à jour le nombre d'offres trouvées
    updateOffersCount() {
        const offers = Array.from(document.querySelectorAll('.photo>figure'))
            .filter(offer => offer.style.display === "block");
        document.querySelector('#offers-found')
            .textContent = offers.length.toString();
    }

}

/**
 * @class Carousel
 * @author Mattéo Gaillard
 *
 * @desc classe représentant un diaporama
 *  il est constitué de deux bouttons (droite et gauche) et peut
 *  avoir autant de slide que l'on veut
 *
 *  RQ: un diaporama ne peut pas être vide
 */
class Carousel {

    /**
     * @param {Element} carousel le diaporama
     */
    constructor(carousel) {
        if(!carousel)
            return console.error('La carousel n\'est pas définie.')

        this._minPage = 0;
        this._carousel = carousel
        this._slides = Array.from(carousel.querySelectorAll('section>article'))

        this._slidesLength = this._slides.length // nombre de slide dans le diaporama
        this._updatePagination(2, 1030);

        // on ajoute des medias queries pour la carousel
        this._addMediaRule(1151, 1, 520);
        this._addMediaRule(589, 1, 400);
        this._setDefaultRule();
    }

    _setDefaultRule() {
        window.matchMedia(`(min-width: 1026px)`)
            .onchange = ({ matches }) => {
            if(matches)
                this._updatePagination(2, 1030);
        };
    }
    _addMediaRule(maxWidth, maxPerPages, leftScroll) {
        window.matchMedia(`(max-width: ${maxWidth}px)`)
            .onchange = ({ matches }) => {
            if(matches)
                this._updatePagination(maxPerPages, leftScroll);
        };
    }

    /**
     * @param maxPerPages nombre maximum d'offre par pages
     * @param leftScroll le nombre de px à scroller vers la gauche
     * @desc permet de mettre à jour la pagination
     */
    _updatePagination(maxPerPages, leftScroll) {
        this._maxPerPages = maxPerPages;
        this._leftScroll = leftScroll;
        this._maxPages = Math.ceil(this._slidesLength/this._maxPerPages)-1;
        this._actualPage = this._minPage;
        this._update();
    }

    /**
     * @param {String} controllerName le nom de la classe du controller
     * @param {Function} callback une fonction
     * @desc initier les actions possibles sur la carousel en cliquant sur des éléments du DOM
     */
    _initController(controllerName, callback) {
        this._controllers
            .querySelector(`.${controllerName}`)
            .onclick = () => {
            callback()
            this._update()
        }
    }

    /**
     * @param {String} className le nom de la classe du controller
     * @param {Function} callback une fonction 
     * @desc initier les actions possibles sur la carousel en cliquant sur des éléments du DOM
     */
    initController(className, callback) {
        this._carousel
            .querySelector(`.${className}`)
            .onclick = () => {
                callback()
                this._update()
            }
    }

    /**
     * @desc mettre à jour la carousel
     */
    _update() {
        this._carousel
            .querySelector('section')
            .scroll({
                left: this._leftScroll*this._actualPage,
                behavior: 'smooth'
            }) // not responsive
    }

    /**
     * @desc initier le diaporama
     */
    init() {
        if(this._slidesLength <= 0)
            return console.error("Un diaporama ne peut pas être vide.")

        this.initController('left', () => {
            this._actualPage =
                this._actualPage > 0 ?
                    this._actualPage-1 :
                    this._maxPages
        }) // on définit le boutton de gauche

        this.initController('right', () => {
            this._actualPage =
                this._actualPage < this._maxPages ?
                    this._actualPage+1 :
                    0
        }) // on définit le boutton de droite

        this._update() // on met à jour l'affichage des slides
    }

}

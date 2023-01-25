/**
 * @class LastMinuteCarousel
 * @author Mattéo Gaillard
 *
 * @desc classe représentant le diaporama de dernière minute (il en existe qu'un seul)
 *  il est constitué de deux bouttons (droite et gauche), une barre de progression
 *  et peut avoir autant de slide que l'on veut
 *
 *  RQ: un diaporama ne peut pas être vide
 */
class LastMinuteCarousel {

    constructor() {
        this._minPage = 0;

        this._maxProgression = 100;
        this._carouselName = "#last__minute__carousel";

        this._carousel = document.querySelector(this._carouselName);
        this._controllers = document.querySelector(`${this._carouselName}__controller`);

        this._slides = Array.from(this._carousel.querySelectorAll('article'));
        this._slidesCount = this._slides.length;

        this._updatePagination(2, 1030);

        // on ajoute des medias queries pour la carousel
        this._addMediaRule(1025, 1, 520);
        this._addMediaRule(525, 1, 400);
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
        this._maxPages = Math.ceil(this._slidesCount/this._maxPerPages)-1;
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
     * @desc mettre à jour la progression
     */
    _updateProgression() {
        this._progression = this._maxPages-(this._actualPage-1) // on récupère la progression (donc à quelle page il en est)
        this._controllers
            .querySelector('.progress__bar>.progression')
            .style.width = `${this._maxProgression/this._progression}%` // on affiche la progression (en %)
    }

    /**
     * @desc metttre à jour la carousel en passant à la page suivante
     */
    _update() {
        this._carousel.scroll({
            left: this._leftScroll*this._actualPage,
            behavior: 'smooth'
        }) // not responsive
        this._updateProgression()
    }

    /**
     * @desc initier le diaporama
     */
    init() {
        this._initController('left', () => {
            this._actualPage = 
                this._actualPage > this._minPage ?
                    this._actualPage-1 : 
                    this._maxPages
        }) // on définit le boutton de gauche

        this._initController('right', () => {
            this._actualPage = 
                this._actualPage < this._maxPages ?
                    this._actualPage+1 : 
                    this._minPage
        }) // on définit le boutton de droite

        this._update()
    }

}

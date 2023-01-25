/**
* @class ImageSelector
* @author Mattéo Gaillard
*
* @desc classe représentant un sélécteur d'image (pouvoir cliquer et choisir parmis une séléction d'image)
*/
class ImageSelector {

    /**
    * @param {Element} imageSelector l'élément contenant les images
    */
    constructor(imageSelector) {
        if(!imageSelector)
            return console.error('l\'élement avec cet ID est introuvable.')
        this._mainImg = imageSelector.querySelector('img') // image présente sur le sélécteur
		this._previousThumbnail = imageSelector.querySelector('div>img.active')
        this._images  = imageSelector.querySelectorAll('div>img') // les images présentes dans le sélécteur
    }

    /**
    * @desc échanger l'image par défaut avec une nouvelle image
    * @param {Element} newImg la nouvelle image
    */
    _changeDefaultImage(newImg) {

        this._mainImg.src = newImg.src
        this._mainImg.alt = newImg.alt

		this._previousThumbnail.classList.remove('active')
		this._previousThumbnail = newImg
		newImg.classList.add('active')
    }

    /**
    * @desc initier la possibiliter de selectionner une image
    * pour la changer avec l'image par défaut
    */
    init() {
        this._images.forEach(image => {
            image.addEventListener('click', () =>
            this._changeDefaultImage(image)
            )
        })
    }

}
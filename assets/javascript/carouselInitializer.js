// on initie toutes les carousels
const carousels = document.querySelectorAll('.carousel')

for(let carousel of carousels) {
    carousel = new Carousel(carousel)
    carousel.init()
}

// initialisation la carousel des offres de dernière minute
new LastMinuteCarousel().init()
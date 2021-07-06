const album = document.querySelectorAll('.carouselPic')
const albumLength = album.length
let albumPosition = 0
let buttons = document.querySelectorAll('.carouselButtons button')

const hidePics = () => {
    for (let pic of album) {
        pic.classList.remove('carouselVisible')
        pic.classList.add('carouselHidden')
    }
}

const mobileCarouselButton = (e) => {
    hidePics()
    if (e.target.getAttribute('id') == 'carouselPrev') {
        albumPosition == 0 ? albumPosition = albumLength - 1 : albumPosition--
    } else {
        albumPosition == albumLength - 1 ? albumPosition = 0 : albumPosition++
    }
    album[albumPosition].classList.add("carouselVisible")
}

const desktopCarouselButton = (e) => {
    let albumPositionPrev = albumPosition
    hidePics()
    if (e.target.getAttribute('id') == 'carouselPrev') {
        albumPosition == 0 ? albumPosition = albumLength - 1 : albumPosition--
        album[albumPositionPrev].style.order = 2
        album[albumPosition].style.order = 1
        console.log("prev", albumPosition, albumPositionPrev)
    } else {
        albumPosition == albumLength - 1 ? albumPosition = 0 : albumPosition++
        album[albumPosition].style.order = 2
        album[albumPositionPrev].style.order = 1
        console.log("next", albumPosition, albumPositionPrev)
    }
    album[albumPosition].classList.add('carouselVisible')
    album[albumPositionPrev].classList.add('carouselVisible')
}

const deskTopCarousel = (e) => {
    if (e.matches) {
        hidePics()
        let albumPositionNext = albumPosition == album.length - 1 ? 0 : albumPosition + 1
        album[albumPosition].classList.add('carouselVisible')
        album[albumPositionNext].classList.add('carouselVisible')
        buttons.forEach(x => x.removeEventListener('click', mobileCarouselButton))
        buttons.forEach(x => x.addEventListener('click', desktopCarouselButton))
        album[albumPositionNext].style.order = 2
        album[albumPosition].style.order = 1
    }
}

const mobileCarousel = (e) => {
    if (e.matches) {
        hidePics()
        album[albumPosition].classList.add('carouselVisible')
        buttons.forEach(x => x.removeEventListener('click', desktopCarouselButton))
        buttons.forEach(x => x.addEventListener('click', mobileCarouselButton))
    }
}

const mediaQuery = window.matchMedia('(min-width: 768px)')
const mediaQuerySmall = window.matchMedia('(max-width: 768px)')
mediaQuery.addEventListener('change', deskTopCarousel)
mediaQuerySmall.addEventListener('change', mobileCarousel)
deskTopCarousel(mediaQuery)
mobileCarousel(mediaQuerySmall)



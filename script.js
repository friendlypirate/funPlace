const album = document.querySelectorAll('.carouselPic');
let albumPosition = 0;
const albumLength = album.length;

const hidePics = () => {
    for (let pic of album) {
        pic.classList.remove('carouselVisible');
        pic.classList.add('carouselHidden');
    }
}

// const nextPic = () => {
//     hidePics()
//     albumPosition == albumLength - 1 ? albumPosition = 0 : albumPosition++
//     album[albumPosition].classList.add("carouselVisible");
// }

const mobileCarouselButton = (e) => {
    hidePics()
    if (e.target.getAttribute('id') == 'carouselPrev') {
        albumPosition == 0 ? albumPosition = albumLength - 1 : albumPosition--
    } else {
        albumPosition == albumLength - 1 ? albumPosition = 0 : albumPosition++   
    }
    
    album[albumPosition].classList.add("carouselVisible")
}

// const desktopNextPic = () => {
//     hidePics()
//     let albumPositionPrev = albumPosition
//     albumPosition == albumLength - 1 ? albumPosition = 0 : albumPosition++
//     album[albumPosition].classList.add('carouselVisible')
//     album[albumPositionPrev].classList.add('carouselVisible')
//     album[albumPosition].style.order = 1
//     album[albumPositionPrev].style.order = 2
//     console.log('next working')
//     album[albumPosition].style.animation = ''
//     album[albumPositionPrev].style.animation = ''
//     album[albumPosition].style.animation = 'fadePic 5s'
//     album[albumPositionPrev].style.animation = 'fadePic 5s'
// }

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
    // album[albumPosition].style.order = 1
    // album[albumPositionPrev].style.order = 2

}

const deskTopCarousel = (e) => {
    if (e.matches) {
        hidePics()
        let albumPositionNext = albumPosition == album.length - 1 ? 0 : albumPosition + 1
        album[albumPosition].classList.add('carouselVisible')
        album[albumPositionNext].classList.add('carouselVisible')
        document.getElementById('carouselNext').removeEventListener('click', mobileCarouselButton)
        document.getElementById('carouselPrev').removeEventListener('click', mobileCarouselButton)
        document.getElementById('carouselNext').addEventListener('click', desktopCarouselButton)
        document.getElementById('carouselPrev').addEventListener('click', desktopCarouselButton)
        album[albumPositionNext].style.order = 2
        album[albumPosition].style.order = 1
    }
}

const mobileCarousel = (e) => {
    if (e.matches) {
        hidePics()
        album[albumPosition].classList.add('carouselVisible')
        document.getElementById('carouselNext').addEventListener('click', mobileCarouselButton)
        document.getElementById('carouselPrev').addEventListener('click', mobileCarouselButton)
        document.getElementById('carouselNext').removeEventListener('click', desktopCarouselButton)
        document.getElementById('carouselPrev').removeEventListener('click', desktopCarouselButton)
    }
}

const mediaQuery = window.matchMedia('(min-width: 768px)')
const mediaQuerySmall = window.matchMedia('(max-width: 768px)')
mediaQuery.addEventListener('change', deskTopCarousel)
mediaQuerySmall.addEventListener('change', mobileCarousel)
deskTopCarousel(mediaQuery);
mobileCarousel(mediaQuerySmall);



const album = document.querySelectorAll('.carouselPic');
let albumPosition = 0;
const albumLength = album.length;

const hidePics = () => {
    for (let pic of album) {
        pic.classList.remove('carouselVisible');
        pic.classList.add('carouselHideen');
    }
}

const nextPic = () => {
    hidePics()
    albumPosition == albumLength - 1 ? albumPosition = 0 : albumPosition++
    album[albumPosition].classList.add("carouselVisible");
}

const prevPic = () => {
    hidePics()
    albumPosition == 0 ? albumPosition = albumLength - 1 : albumPosition--
    album[albumPosition].classList.add("carouselVisible")
}

document.getElementById('carouselNext').addEventListener('click', nextPic);
document.getElementById('carouselPrev').addEventListener('click', prevPic);

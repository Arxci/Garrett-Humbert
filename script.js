let progress = document.getElementById("progressbar");
let totalHeight = document.body.scrollHeight - window.innerHeight;
window.onscroll = function(){
    let progressHeight = (window.pageYOffset / totalHeight) * 100;
    progress.style.height = progressHeight + '%';
}

window.addEventListener('scroll', HandleHeaderColor);

function HandleHeaderColor() {
    var header = document.querySelector("header");
    if (window.scrollY > 0) {
        header.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    } else {
        header.style.backgroundColor = 'transparent';
    }
}
const header =document.querySelector("header");

window.addEventListener("scroll", function(){
    header.classList.toggle("sticky", window.scrollY > 130);
});

let menu = document.querySelector('#menu-icon');
let menulist = document.querySelector('.menulist');

menu.onclick = () => {
    menu.classList.toggle('bx-x')
    menulist.classList.toggle('open');
};

window.onscroll = () => {
    menu.classList.remove('bx-x')
    menulist.classList.remove('open');
};




const videos = document.querySelectorAll('video');

    // Add event listener for each video to play when hovered over
    videos.forEach(video => {
        video.addEventListener('mouseover', function() {
            this.play();
        });

        video.addEventListener('mouseout', function() {
            this.pause();
            this.currentTime = 0;
        });
});




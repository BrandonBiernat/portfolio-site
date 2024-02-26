window.onscroll = () => onScroll();

let header = document.getElementById("nav-bar");
let sticky = header.offsetTop;

const onScroll = () => {
    if(window.scrollY > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
};
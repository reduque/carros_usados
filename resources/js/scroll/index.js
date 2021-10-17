let lastKnownScrollPosition = 0;
let ticking = false;

$header = document.querySelector('.cu-header')
$mainbar = $header.querySelector('.cu-header__bar')

const handleScroll = (scrollPos) => {
    if (scrollPos > lastKnownScrollPosition) {
        if (scrollPos > 0) {
            $header.classList.add('cu-header--scrolled')
        }
    } else {
        if (scrollPos <= $mainbar.clientHeight) {
            $header.classList.remove('cu-header--scrolled')
        }
    }
}

document.addEventListener('scroll', function(e) {
    const sc = window.scrollY;

    if (!ticking) {
        window.requestAnimationFrame(function() {
            handleScroll(sc);
            ticking = false;
        });
    
        ticking = true;
    }
    lastKnownScrollPosition = sc < 0 ? 0 : 0
});
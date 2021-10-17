import 'flickity/dist/flickity.min.css';
import Flickity from 'flickity'
import './cssvars'
import './togglers'
import './scroll'

const homeSlider = document.querySelector('.cu-catalog__slider__wrapper')
if (homeSlider) {
    const responsiveCells = () => {
        if (window.innerWidth > 1100) {
            return 5;
        } else if (window.innerWidth > 890) {
            return 3;
        } else if (window.innerWidth > 600) {
            return 2;
        } else {
            return 1;
        }
    }
    const slider = new Flickity(homeSlider, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        groupCells: responsiveCells(),
        cellSelector: '.cu-card',
    })
}

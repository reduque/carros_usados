import 'flickity/dist/flickity.min.css'
import '@fancyapps/ui/dist/fancybox.css'

import 'flickity-as-nav-for'
import Flickity from 'flickity'
import { Fancybox } from '@fancyapps/ui'

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

const singleGallery = document.querySelector('.cu-single__gallery')
if (singleGallery) {
    let scrollPos;
    let $body;
    window.onload = function() {
        $body = document.querySelector('body');
        scrollPos = 0;
        const thumbsSlider = new Flickity(singleGallery.querySelector('.cu-single__gallery__thumbs'), {
            cellSelector: '.gallery-thumb',
            cellAlign: 'left',
            contain: true,
            draggable: true,
            wrapAround: true,
            prevNextButtons: false,
            pageDots: false,
            resize: true,
            asNavFor: singleGallery.querySelector('.cu-single__gallery__main'),
            on: {
                change: function(index) {
                    mainSlider.select(index)
                },
            }
        })
        const mainSlider = new Flickity(singleGallery.querySelector('.cu-single__gallery__main'), {
            cellSelector: '.gallery-item',
            cellAlign: 'left',
            draggable: true,
            groupCells: 1,
            prevNextButtons: true,
            pageDots: false,
            wrapAround: true,
            resize: true,
            contain: true,
            on: {
                change: function(index) {
                    thumbsSlider.select(index)
                },
            }
        })
        const panelBtn = document.querySelector('.cu-single__info__button')
        panelBtn.addEventListener('click', (e) => {
            e.preventDefault()
            setTimeout(() => {
                mainSlider.resize()
                thumbsSlider.resize()
            }, 310)
        })
    }

    const pointsBtn = document.querySelector('.see-points')
    if (pointsBtn) {
        const modal = document.querySelector('.cu-modal')
        const closeBtn = modal.querySelector('.cu-modal__close')
        pointsBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modal.classList.add('active')
            disableScroll()
        })
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modal.classList.remove('active')
            enableScroll()
        })
    }

    const disableScroll = () => {
        scrollPos = window.pageYOffset;
        $body.style.overflow = 'hidden';
        $body.style.position = 'fixed';
        $body.style.top = `-${scrollPos}px`;
        $body.style.width = '100%';
    }

    const enableScroll = () => {
        $body.style.removeProperty('overflow');
        $body.style.removeProperty('position');
        $body.style.removeProperty('top');
        $body.style.removeProperty('width');
        window.scrollTo(0, scrollPos);
    }
}

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
    window.onload = function() {
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
}

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
    const slides = homeSlider.querySelector('.cu-card').length
    const responsiveCells = () => {
        if (window.innerWidth > 1100) {
            return 5;
        } else if (window.innerWidth > 890) {
            return 4;
        } else if (window.innerWidth > 600) {
            return 3;
        } else {
            return 2;
        }
    }

    window.onload = function() {
        const slider = new Flickity(homeSlider, {
            cellAlign: 'left',
            contain: true,
            pageDots: window.innerWidth < 480,
            prevNextButtons: slides > responsiveCells(),
            groupCells: responsiveCells(),
            cellSelector: '.cu-card',
        })
    
        if (window.innerWidth < 860) {
            const reasons = document.querySelector('.cu-reasons__reasons')
            const reasonsSlider = new Flickity(reasons, {
                cellAlign: 'left',
                contain: true,
                pageDots: true,
                prevNextButtons: false,
                wrapAround: true,
                cellSelector: '.cu-reasons__reasons__item',
            })
            window.onresize = function() {
                slider.resize()
                reasonsSlider.resize()
            }
        }
    }
}

const singleGallery = document.querySelector('.cu-single__gallery')
if (singleGallery) {
    let scrollPos;
    let $body;
    
    window.onload = function() {
        const $sidebar = document.querySelector('.cu-single__info')
        const $content = document.querySelector('.cu-single__content')
        const $gallery = document.querySelector('.cu-single__gallery__wrapper')

        const handleContentHeight = () => {
            const padding = $content.style.paddingTop + $content.style.paddingBottom
            console.log($content)
            $content.style.minHeight = `${$gallery.clientHeight + padding}px`
        }

        $body = document.querySelector('body');
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
                ready: function() {
                    singleGallery.querySelector('.cu-single__gallery__thumbs').classList.remove('loading')
                },
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
                ready: function() {
                    singleGallery.querySelector('.cu-single__gallery__main').classList.remove('loading')
                    $content.style.minHeight = `${$sidebar.clientHeight}px`
                },
                change: function(index) {
                    thumbsSlider.select(index)
                },
            }
        })
        const panelBtn = document.querySelector('.cu-single__info__button')
        panelBtn.addEventListener('click', (e) => {
            e.preventDefault()
            singleGallery.querySelector('.cu-single__gallery__thumbs').classList.add('transition')
            singleGallery.querySelector('.cu-single__gallery__main').classList.add('transition')
            panelBtn.classList.add('loading')
            setTimeout(() => {
                mainSlider.resize()
                mainSlider.reposition()
                thumbsSlider.resize()
                thumbsSlider.reposition()
                panelBtn.classList.remove('loading')
                singleGallery.querySelector('.cu-single__gallery__thumbs').classList.remove('transition')
                singleGallery.querySelector('.cu-single__gallery__main').classList.remove('transition')
                handleContentHeight()
            }, 350)
        })

        if (window.innerWidth <= 1100) {
            const actions = document.querySelector('.cu-single__info__actions')
            const actionSlider = new Flickity(actions, {
                cellSelector: '.cu-single__info__actions__item',
                cellAlign: 'left',
                draggable: true,
                groupCells: 1,
                prevNextButtons: false,
                pageDots: true,
                wrapAround: true,
                resize: true,
                contain: true,
            })
        }

        window.onresize = function() {
            thumbsSlider.resize()
            mainSlider.resize()
        }
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

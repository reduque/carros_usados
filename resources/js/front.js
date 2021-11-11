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
        $body = document.querySelector('body');
        scrollPos = 0;
        const $sidebar = document.querySelector('.cu-single__info')
        const $content = document.querySelector('.cu-single__content')
        const actions = document.querySelector('.cu-single__info__actions')
        const related = document.querySelector('.cu-related__grid')
        const panelBtn = document.querySelector('.cu-single__info__button')
        let actionSlider
        let relatedSlider

        const handleContentHeight = () => {
            if (window.innerWidth > 860){
                if (panelBtn.getAttribute('aria-expanded') === "false") {
                    $content.removeAttribute('style')
                } else {
                    $content.style.minHeight = `${$sidebar.clientHeight - getStyle($sidebar, 'padding-bottom')}px`
                }
            }
        }
    
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
                ready: function(index) {
                    singleGallery.querySelector('.cu-single__gallery__main').classList.remove('loading')
                    handleContentHeight()
                },
                change: function(index) {
                    thumbsSlider.select(index)
                },
            }
        })

        if (window.innerWidth <= 1280) {
            actionSlider = new Flickity(actions, {
                cellSelector: '.cu-single__info__actions__item',
                cellAlign: 'left',
                draggable: true,
                groupCells: 1,
                prevNextButtons: false,
                pageDots: true,
                resize: true,
                contain: true,
                on: {
                    ready: function() {
                        handleContentHeight()
                    }
                }
            })
        } else {
            if (actionSlider) {
                actionSlider.destroy()
            }
        }
        if (window.innerWidth <= 1100) {
            relatedSlider = new Flickity(related, {
                cellSelector: '.cu-card',
                cellAlign: 'left',
                draggable: true,
                groupCells: 1,
                prevNextButtons: false,
                wrapAround: true,
                pageDots: true,
                resize: true,
                contain: true,
            })
        } else {
            if (relatedSlider) {
                relatedSlider.destroy()
            }
        }
        
        panelBtn.addEventListener('click', (e) => {
            e.preventDefault()
            singleGallery.querySelector('.cu-single__gallery__thumbs').classList.add('loading')
            singleGallery.querySelector('.cu-single__gallery__main').classList.add('loading')
            setTimeout(() => {
                resizeSliders()
                singleGallery.querySelector('.cu-single__gallery__thumbs').classList.remove('loading')
                singleGallery.querySelector('.cu-single__gallery__main').classList.remove('loading')
                handleContentHeight()
            }, 310)
        })

        

        window.addEventListener('resize', () => {
            resizeSliders()
        })

        const resizeSliders = () => {
            mainSlider.resize()
            mainSlider.reposition()
            thumbsSlider.resize()
            thumbsSlider.reposition()
            if (window.innerWidth <= 1280) {
                if (actionSlider) {
                    actionSlider.resize()
                    actionSlider.reposition()
                } else {
                    actionSlider = new Flickity(actions, {
                        cellSelector: '.cu-single__info__actions__item',
                        cellAlign: 'left',
                        draggable: true,
                        groupCells: 1,
                        prevNextButtons: false,
                        pageDots: true,
                        resize: true,
                        contain: true,
                        on: {
                            ready: function() {
                                handleContentHeight()
                            }
                        }
                    })
                }
            } else {
                if (actionSlider) {
                    actionSlider.destroy()
                }
            }
            if (window.innerWidth <= 1100) {
                if (relatedSlider) {
                    relatedSlider.resize()
                    relatedSlider.reposition()
                } else {
                    relatedSlider = new Flickity(related, {
                        cellSelector: '.cu-card',
                        cellAlign: 'left',
                        draggable: true,
                        groupCells: 1,
                        prevNextButtons: false,
                        wrapAround: true,
                        pageDots: true,
                        resize: true,
                        contain: true,
                    })
                }
            } else {
                if (relatedSlider) {
                    relatedSlider.destroy()
                }
            }
        }
    }

    const pointsBtn = document.querySelector('.see-points')
    if (pointsBtn) {
        const modalPoints = document.getElementById('puntos-modal')
        const closePoints = modalPoints.querySelector('.cu-modal__close')
        pointsBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modalPoints.classList.add('active')
            disableScroll()
        })
        closePoints.addEventListener('click', (e) => {
            e.preventDefault()
            modalPoints.classList.remove('active')
            enableScroll()
        })
    }

    const contactBtn = document.querySelector('.contact-btn')
    if (contactBtn) {
        const modalContact = document.getElementById('contact-modal')
        const closeContact = modalContact.querySelector('.cu-modal__close')
        contactBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modalContact.classList.add('active')
            disableScroll()
        })
        
        const reserveBtn = document.querySelector('.reserve-btn')
        reserveBtn.addEventListener('click', (e) => {
            e.preventDefault()
            modalContact.classList.add('active')
            disableScroll()
        })

        closeContact.addEventListener('click', (e) => {
            e.preventDefault()
            modalContact.classList.remove('active')
            enableScroll()
        })
    }

    const  getStyle = (oElm, strCssRule) => {
        let strValue = "";
        if(document.defaultView && document.defaultView.getComputedStyle){
            strValue = document.defaultView.getComputedStyle(oElm, "").getPropertyValue(strCssRule);
        }
        else if(oElm.currentStyle){
            strCssRule = strCssRule.replace(/\-(\w)/g, function (strMatch, p1){
                return p1.toUpperCase();
            });
            strValue = oElm.currentStyle[strCssRule];
        }
        return parseInt(strValue.replace(/\D/g, ''));
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
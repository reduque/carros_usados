let vw = window.innerWidth * 0.01
let vh = window.innerHeight * 0.01
document.documentElement.style.setProperty('--vw', `${vw}px`)
document.documentElement.style.setProperty('--vh', `${vh}px`)

const footer = document.querySelector('.cu-footer')
const main = document.querySelector('.cu-main')

main.style.marginBottom = `${footer.clientHeight}px`

const handleWindowResize = () => {
    vw = window.innerWidth * 0.01;
    vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vw', `${vw}px`)
    document.documentElement.style.setProperty('--vh', `${vh}px`)
    main.style.marginBottom = `${footer.clientHeight}px`
}

window.addEventListener('resize', handleWindowResize);
// Voorbeeld
let interaction = document.querySelector('a:nth-of-type(12)')
interaction.addEventListener('click', jumpHandler)
interaction.addEventListener('animationend', jumpHandler)
function jumpHandler() {
  interaction.classList.toggle('jump')
}

// EERSTE ANIMATIE
let frontend = document.querySelector('a:first-child')
function shakeHandler() {
  frontend.classList.toggle('shake')
}
frontend.addEventListener('dblclick', shakeHandler)
frontend.addEventListener('animationend', shakeHandler)

// TWEEDE ANIMATIE
let design = document.querySelector('a:nth-of-type(2)')
design.addEventListener('click', zoomHandler)
design.addEventListener('animationend', zoomHandler)
function zoomHandler() {
  design.classList.toggle('zoom')
}

let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('click', rotationHandler)
and.addEventListener('animationend', rotationHandler)
function rotationHandler() {
  and.classList.toggle('rotation')
}
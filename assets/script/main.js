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

// DERDE ANIMATIE
let and = document.querySelector('a:nth-of-type(3)')
and.addEventListener('click', rotationHandler)
and.addEventListener('animationend', rotationHandler)
function rotationHandler() {
  and.classList.toggle('rotation')
}

// VIERDE ANIMATIE
let development = document.querySelector('a:nth-of-type(4)')
development.addEventListener('click', bounceHandler)
development.addEventListener('animationend', bounceHandler)
function bounceHandler() {
  development.classList.toggle('bounce')
}

// VIJFDE ANIMATIE 
let sprint5 = document.querySelector('a:nth-of-type(5)')
sprint5.addEventListener('click', colorchangeHandler)
sprint5.addEventListener('animationend', colorchangeHandler)
function colorchangeHandler() {
  sprint5.classList.toggle('colorchange')
}

// ZESDE ANIMATIE 
let fix = document.querySelector('a:nth-of-type(6)')
fix.addEventListener('click', swooshHandler)
fix.addEventListener('animationend', swooshHandler)
function swooshHandler() {
  fix.classList.toggle('swoosh')
}

// ZEVENDE ANIMATIE 
let the = document.querySelector('a:nth-of-type(7)')
the.addEventListener('click', elasticHandler)
the.addEventListener('animationend', elasticHandler)
function elasticHandler() {
  the.classList.toggle('elastic')
}

// ACHTSTE ANIMATIE 
let flow = document.querySelector('a:nth-of-type(8)')
flow.addEventListener('click', stretchHandler)
flow.addEventListener('animationend', stretchHandler)
function stretchHandler() {
  flow.classList.toggle('stretch')
}

// NEGENDE ANIMATIE 
let user = document.querySelector('a:nth-of-type(9)')
user.addEventListener('click', disappearHandler)
user.addEventListener('animationend', disappearHandler)
function disappearHandler() {
  user.classList.toggle('disappear')
}

// TIENDE ANIMATIE 
let interface = document.querySelector('a:nth-of-type(10)')
interface.addEventListener('click', sinkHandler)
interface.addEventListener('animationend', sinkHandler)
function sinkHandler() {
  interface.classList.toggle('sink')
}
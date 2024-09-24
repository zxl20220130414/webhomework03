const canvas = document.querySelector('canvas')
const ctx = canvas.getContext('2d')
const p = document.querySelector('p')

const width = canvas.width = window.innerWidth
const height = canvas.height = window.innerHeight

function random(min, max) {
    return Math.floor(Math.random() * (max - min) + min)
}

function randomColor(){
    return `rgb(${random(0,255)}, ${random(0,255)}, ${random(0,255)})`
}

const SPEED = 7
const MIN_SIZE = 12
const MAX_SIZE = 22
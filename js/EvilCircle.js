function EvilCircle(x, y, exists, color, size) {
    Shape.call(this, x, y, 20, 20, exists)
    this.color = color
    this.size = size
}
EvilCircle.prototype = Object.create(Shape.prototype)
EvilCircle.prototype.constructor = EvilCircle
EvilCircle.prototype.draw = function () {
    ctx.beginPath()
    ctx.lineWidth = 3
    ctx.strokeStyle = this.color;
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.stroke()
}
EvilCircle.prototype.checkBounds = function () {
    this.x + this.size >= width ? this.x -= this.size : ''
    this.x - this.size <= 0 ? this.x += this.size : ''
    this.y + this.size >= height ? this.y -= this.size : ''
    this.y - this.size <= 0 ? this.y += this.size : ''
}
EvilCircle.prototype.setControls = function () {
    window.onkeydown = e => {
        if(e.key === 'a') this.x -= this.velX
        if(e.key === 'd') this.x += this.velX
        if(e.key === 'w') this.y -= this.velY
        if(e.key === 's') this.y += this.velY
    }
}
EvilCircle.prototype.collisionDetect = function () {
    for(let i=0; i<balls.length; i++){
        if(this !== balls[i]){
            let dx = this.x - balls[i].x
            let dy = this.y - balls[i].y
            let distabce = Math.sqrt(dx * dx + dy * dy)
            if(distabce < this.size + balls[i].size){
                // this.color = balls[i].color = randomColor()
                balls[i].exists = false
            }
        }
    }
}
var evilCircle = new EvilCircle(random(0, width), random(0, height), true, 'wheat', 20)
evilCircle.setControls()
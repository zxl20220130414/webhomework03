function Shape(x, y, velX, velY, exists ){
    this.x      = x
    this.y      = y
    this.velX   = velX
    this.velY   = velY
    this.exists = exists
}

Shape.prototype.draw = function(){
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}
Shape.prototype.update = function(){
    this.x + this.size >= width ? this.velX = -this.velX : ''
    this.x - this.size <= 0 ? this.velX = -this.velX : ''
    this.y + this.size >= height ? this.velY = -this.velY : ''
    this.y - this.size <= 0 ? this.velY = -this.velY : '' 
}
Shape.prototype.collisionDetect = function(){
    
}
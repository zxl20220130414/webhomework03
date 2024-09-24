function Ball(x, y, velX, velY, exists, color, size) {
    Shape.call(this, x, y, velX, velY, exists)
    this.color = color
    this.size = size
}
Ball.prototype = Object.create(Shape.prototype)
Ball.prototype.constructor = Ball
Ball.prototype.draw = function () {
    ctx.beginPath()
    ctx.fillStyle = this.color
    ctx.arc(this.x, this.y, this.size, 0, 2 * Math.PI)
    ctx.fill()
}
Ball.prototype.update = function () {
    this.x + this.size >= width ? this.velX = -this.velX : ''
    this.x - this.size <= 0 ? this.velX = -this.velX : ''
    this.y + this.size >= height ? this.velY = -this.velY : ''
    this.y - this.size <= 0 ? this.velY = -this.velY : ''

    this.x = this.x + this.velX
    this.y = this.y + this.velY
}
Ball.prototype.collisionDetect = function () {
    for (let i = 0; i < balls.length; i++) {
        if (this !== balls[i]) {
            let dx = this.x - balls[i].x
            let dy = this.y - balls[i].y
            let distabce = Math.sqrt(dx * dx + dy * dy)
            if (distabce < this.size + balls[i].size) {
                this.color = balls[i].color = randomColor()
            }
        }
    }
}

var balls = []
var ballTotalCount = 222
var start = new Date()
function loop() {
    ctx.fillStyle = 'rgba(0, 0, 0, 0.25)'
    ctx.fillRect(0, 0, width, height)

    while (balls.length < ballTotalCount) {
        var ball = new Ball(
            random(0, width),
            random(0, height),
            random(-SPEED, SPEED),
            random(-SPEED, SPEED),
            true,
            randomColor(),
            random(MIN_SIZE, MAX_SIZE)
        )
        balls.push(ball)
    }

    var ballCount = 0
    for (let i = 0; i < balls.length; i++) {
        if (balls[i].exists) {
            balls[i].draw()
            balls[i].update()
            balls[i].collisionDetect()
            ballCount++
        }
    }
    p.innerHTML = '剩余: ' + ballCount
    if(ballCount === 0){
        var end = new Date()
    }

    evilCircle.draw()
    evilCircle.checkBounds()
    evilCircle.collisionDetect()
    requestAnimationFrame(loop)
}

loop()

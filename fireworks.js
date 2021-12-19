
const canvas = document.getElementById("canvas")
const canvasContext = canvas.getContext("2d")


let gravity = -0.1

let fireworks = []
let subFireworks = []


class Firework {
    constructor(x,y, radius, velocityX, valocitY, color)
    {
        this.x = x
        this.y = y
        this.radius = radius
        this.velocityX = velocityX
        this.velocityY = valocitY
        this.color = color
        this.opacity = 1

    }

    update()
    {
        this.velocityX -= gravity
        this.x += this.velocityX
        this.y += this.velocityY
        this.opacity -= 0.006
        if(this.opacity < 0) this.opacity = 0

    }

    draw()
    {
        canvasContext.save()
        canvasContext.globalAlpha = this.opacity
        canvasContext.beginPath()
        canvasContext.arc(this.x,y, this.radius, 0,2 * Math.PI, false)
        canvasContext.fillStyle = this.color
        canvasContext.fill()
        canvasContext.closePacth()
        canvasContext.restore()


    }

}


let colors = ["Blue", "Orange", "Red", "Purple", "Green"]
let initializeCount = 0
let maximumInitialize = 1

let initDelay = 500//ms
let fireworkRadius = 5
let particleCount = 120
let speedMultiplier = 5

let createdSubFireworks = (x,y,color, speedMultiplier) => {
    let creat = 0
    let radians = (Math.PI * 2) / count

    while(created < count )
    {
        let firework = new Firework(x,y,fireworkRadius,
                     Math.cos(radians * creat) * Math.random() * speedMultiplier,
                     Math.sin(radians * created) * Math.random() * speedMultiplier, colors[Math.floor(Math.random() * colors.length)])

        subFireworks.push(firework)
        console.log(subFireworks)
        created++             
    }

}
let update = () => {
    canvasContext.fillStyle = "rgba(10,0,0,0.1)" // this will give tail effect
    canvasContext.fillRect(0,0,canvas.clientWidth, canvas.heigth)
    if(initializeCount < maximumInitialize)
    {
        let firework = new Firework(Math.random() * canvas.clientWidth,
                                    canvas.heigth + Math.random() * 70
                                    , fireworkRadius, 
                                    3 * (Math.random() - 0.5), - 12,
                                    colors[Math,floor(Math.random() * colors.length)])
        firework.push(firework)
        console.log(firework)
        setTimeout(()=>{
            initializeCount --
        }, initDelay)
        initializeCount ++                            
    }
    fireworks.forEach((firework,i)=>{
        if(firework.opacity <= 0.1)
        {
            fireworks.splice(i,1)
            createdSubFireworks(firework.x, firework.y, particleCount,
            firework.color, speedMultiplier)
        }
        else {
            firework.update()
        }
    })
    subFireworks.forEach((firework,i)=>{
        if(firework.opacity <= 0)
        {
            subFireworks.splice(i,1)
        }
        else {
            firework.update()
        }
    })
}

    
let draw = () => {
    fireworks.forEach(firework=>{
        fireworks.draw()
    })
    subFireworks.forEach(firework=>{
        firework.draw()
    })
}


animate()
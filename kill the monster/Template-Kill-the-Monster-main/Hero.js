class Hero {
    constructor(x,y,r){
        var options = {
            density :1,
            frictionAir :1
        }
        this.image = loadImage("Superhero-01.png")
        this.body = Bodies.circle(x,y,r/2,options)
        this.x = x
        this.y = y
        this.r = r
        World.add(world,this.body)
    }
    display()
	{
			
			var heroPos=this.body.position;		
			push()
			translate(heroPos.x, heroPos.y-100);
			rectMode(CENTER)
			fill(255,0,255)
			imageMode(CENTER);
			image(this.image, 0,0,this.r+150, this.r)
			pop()
			
	}
}
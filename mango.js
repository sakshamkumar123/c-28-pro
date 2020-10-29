
class Mango{
    constructor(x, y) {
        var options = {
            isStatic:true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.rectangle(x, y, 50, 70, options);
        this.image = loadImage("mango.png");
        World.add(world, this.body);
      }
      display(){
        var pos=this.body.position
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, 50,70);
        pop();
      }
}
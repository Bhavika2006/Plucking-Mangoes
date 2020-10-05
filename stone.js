class Stone{
    constructor(x,y,radius){
        var options = {

        isStatic:false,
        restitution:0,
        friction:1,
        density:1.2
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
      this.radius = radius
      
      World.add(world, this.body);
    }
    display(){
        var pos =this.body.position;
        ellipseMode(CENTER);
        fill("brown");
        circle(pos.x, pos.y, this.radius);
      }
}
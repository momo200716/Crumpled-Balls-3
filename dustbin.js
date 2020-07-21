class dustbin{
    constructor(x,y){
        var options= {
            'isStatic':true,
            'friction' : 1.0,
            'density': 2.0,
        }
        this.body = Bodies.rectangle(x,y,0,0,options);
        this.width = 50;
        this.height = 10;
        this.image = loadImage("dustbingreen.png");
        World.add(world, this.body);
 
     }
     display(){
         imageMode(CENTER)
         image(this.image,this.body.position.x,this.body.position.y,this.width,this.height)
         this.width = 100
         this.height = 100
     }


 }
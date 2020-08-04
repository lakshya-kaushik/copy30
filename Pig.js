class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.image = loadImage("sprites/enemy.png");
    //visibilty can be between 0 to 255. 
    //0 is = one fully off byte(0000 0000) 8 0bits
    //255 is = one fully on byte(1111 1111) 8 1bits
    this.Visibility=255;
  }
  display(){
    console.log(this.body.speed);
        if(this.body.speed<3){
      super.display();
    }
    else
    {
          World.remove(world,this.body)
          push();
      this.Visibility=this.Visibility-5;
      tint(255,this.Visibility);
        image(this.image,this.body.position.x, this.body.position.y,50,50);
          pop();
    }
  }

};
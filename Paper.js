class Paper{
 constructor(x,y){
  var properties={
   isStatic:false,
   friction:0.5,
   restitution:0,
   density:0.8   
  }  
  this.body=Bodies.circle(x,y,22,properties)
  this.image=loadImage("paper.png")   
  World.add(world,this.body)
} 
display(){
 var pos=this.body.position
 var angle=this.body.angle
 push()
 translate(pos.x,pos.y)
 rotate(angle)
 //ellipseMode(RADIUS)
 //ellipse(0,0,20,20)  
 imageMode(CENTER)
 image(this.image,0,0,70,70)
 pop() 
  
}  
}

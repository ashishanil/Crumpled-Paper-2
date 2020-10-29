class Dustbin{
    constructor(x,y,width,height){
     var properties={
      isStatic:true   
     }   
     this.Body=Bodies.rectangle(x,y,width,height,properties)
     this.width=width
     this.height=height
     this.image=loadImage("dustbingreen.png")
     World.add(world,this.Body)
    }
   display(){
    var pos=this.Body.position 
    push()  
    fill("green")
    rectMode(CENTER)
    rect(pos.x,pos.y,this.width,this.height)
    pop()  
    imageMode(CENTER)
    image(this.image,720,620,100,90)   
}
}
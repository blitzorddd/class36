class Form {
  constructor() {
    this.input = createInput("").attribute("placeholder", "Enter your name");
    this.playButton = createButton("Play");
    this.titleImg = createImg("./assets/title.png", "game title");
    this.greeting = createElement("h2");
  }

  hide() {
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();
  }
elementPosition(){
  this.input.position(width/2-110,height/2-80)
  this.playButton.position(width/2-110,height/2-20)
  this.titleImg.position(110,40)
  this.greeting.position(width/2-300,height/2-120)
}
elementStyle(){
  this.input.class("customInput")
  this.playButton.class("customButton")
  this.titleImg.class("gameTitle")
  this.greeting.class("greeting")
}
handlemousePressed(){
  this.playButton.mousePressed(()=>{
    this.playButton.hide();
    this.input.hide();
    var message='hello, wait for another player to join'
    this.greeting.html(message)
  }

  )
}
display(){
  this.elementPosition()
  this.elementStyle()
  this.handlemousePressed()
}
}

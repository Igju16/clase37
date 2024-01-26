class Form {
  constructor() {
   this.input=createInput("").attribute("placeholder","Introduce tu nombre");
   this.playButton=createButton("JUGAR");
   this.titleImage=createImg("./assets/title.png","titulo del juego");
   this.titleImage.size(1000,200)
   this.greeting=createElement("h2");
  }
  setElementsPosition(){
    this.titleImage.position(300,10);
    this.input.position(width/2-110,height/2-80);
    this.playButton.position(width/2-60,height/2-20);
    this.greeting.position(width/2-300,height/2-100);
  }
  hide(){
    this.greeting.hide();
    this.playButton.hide();
    this.input.hide();


  }
  handleMousePressed() {
    this.playButton.mousePressed(() => {
      this.input.hide();
      this.playButton.hide();
      var message = `
      Hola ${this.input.value()}
      </br>Espera a que se una otro jugador...`;
      this.greeting.html(message);
      player.name = this.input.value();
      player.index = 1;
      //player.addPlayer();
    });
  }


  display(){
    this.setElementsPosition();
  }




}






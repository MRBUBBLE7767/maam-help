class start{
    constructor() {
        this.button = createButton("start");
        this.title = createElement('h2');
        this.titl = createElement('h2');

      }
      hide(){
       this.button.hide();
       this.title.hide();
       this.titl.hide();

      }
    
      display(){
        this.title.html("Laundry Shooter");
        this.title.position(displayWidth/2 - 150, 0);
        this.titl.html("WARNING :  If you restart/refresh the game the progress will be reset !");
        this.titl.position(displayWidth-1000, 600);
        this.button.position(600,300);
        this.button.mousePressed(()=>{
            this.title.hide();
            this.button.hide();
            gameState="playing";
        });
      }
      
      
  
    


}
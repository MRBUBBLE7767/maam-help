class Form{
    constructor() {
        this.input = createInput("sound");
        this.button2 = createButton("off");
        this.button = createButton("on");
    //    this.greeting = createElement('h2');
        this.title = createElement('h2');
      }
      hide(){
    //    this.greeting.hide();
       this.button.hide();
       this.input.hide();
       this.title.hide();
      }
    
      display(){
        this.title.html("Settings");
        this.title.position(displayWidth/2 - 50, 0);
    
        this.input.position(200 , 300);
        this.button.position(400,300);
        this.button2.position(400,300);
        
        this.button.mousePressed(()=>{
          this.button2 = createButton("off");
          this.button2.position(400,300);
          music = "off";
          this.button2.mousePressed(()=>{
            this.button = createButton("on");
            this.button.position(400,300);
            music = "on";
            this.button.mousePressed(()=>{
                this.button2 = createButton("off");
                this.button2.position(400,300);
                music = "off";
                this.button2.mousePressed(()=>{
                  this.button = createButton("on");
                  this.button.position(400,300);
                  music = "on";
                  this.button.mousePressed(()=>{
                    this.button2 = createButton("off");
                    this.button2.position(400,300);
                    music = "off";
                    this.button2.mousePressed(()=>{
                      this.button = createButton("on");
                      this.button.position(400,300);
                      music = "on";
                      this.button.mousePressed(()=>{
                          this.button2 = createButton("off");
                          this.button2.position(400,300);
                          music = "off";
                          this.button2.mousePressed(()=>{
                            this.button = createButton("on");
                            this.button.position(400,300);
                            music = "on";
                            this.button.mousePressed(()=>{
                                this.button2 = createButton("off");
                                this.button2.position(400,300);
                                music = "off";
                                this.button2.mousePressed(()=>{
                                  this.button = createButton("on");
                                  this.button.position(400,300);
                                  music = "on";
                                  this.button.mousePressed(()=>{
                                      this.button2 = createButton("off");
                                      this.button2.position(400,300);
                                      music = "off";
                                      this.button2.mousePressed(()=>{
                                        this.button = createButton("on");
                                        this.button.position(400,300);
                                        music = "on";
                                        this.button.mousePressed(()=>{
                                          this.button2 = createButton("off");
                                          this.button2.position(400,300);
                                          music = "off";
                                          this.button2.mousePressed(()=>{
                                            this.button = createButton("on");
                                            this.button.position(400,300);
                                            music = "on";
                                            this.button.mousePressed(()=>{
                                                this.button2 = createButton("off");
                                                this.button2.position(400,300);
                                                music = "off";
                                                this.button2.mousePressed(()=>{
                                                  this.button = createButton("on");
                                                  this.button.position(400,300);
                                                  music = "on";
                                                  
                                              });
                                              });
                                        });
                                        });
                                    });
                                    });
                              });
                              });
                        });
                        });
                  });
                  });
              });
              });
        });
        });
        
    
      }


}
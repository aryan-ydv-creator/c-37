class Form{
    constructor(){
        this.input = createInput("name")
        this.button = createButton("play")
        this.greeting= createElement('h3')
    }
    hide(){
        this.greeting.hide();
        this.input.hide();
        this.button.hide();
    }
    display(){
        var title = createElement('h2')
        title.html("Multiplayer Car Racing Game")
        title.position(450,130)
        
        this.input.position(500,360)
        this.button.position(575,400)

        this.button.mousePressed(()=>{
            this.input.hide();
            this.button.hide();
            player.name = this.input.value()
            playerCount = playerCount+1;
            player.updateCount(playerCount);
            this.greeting.html("Hello! "+ player.name)
            this.greeting.position(550,360)
        })
    }
}
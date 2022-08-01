// GUI or interface  _ input devices
function remote(output) {

    this.output = output
   
    this.tap = function (){console.log(this.output.tap());}
    this.drag = function (){console.log(this.output.drag());}


}


function mouse(output) {

    this.output = output
   
    this.click = function (){console.log(this.output.click());}
    this.drop = function (){console.log(this.output.drop());}

}



// implementation _ output devices
function tv() {

    this.tap = function (){console.log("tap tv");}
    this.drag = function (){console.log("drag tv");}

}

function screen() {

    this.click = function (){console.log("tap screen");}
    this.drop = function (){console.log("drop screen");}

}


// call methods
var Tv = new tv();
var Screen = new screen();

var Remote = new remote(Tv);
var Mouse = new mouse(Screen);

Remote.tap();

Mouse.drop();
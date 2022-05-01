

function house(walls,doors,windows){

    this.walls = walls ?? 0;
    this.doors = doors ?? 0;
    this.windows = windows ?? 0;

    console.log("your house has " + this.walls + " walls and " + this.doors + " doors " + this.windows + " windows");


}



function housebuilder(){};


housebuilder.prototype.builder = function(){


        return {

            buildwalls:function(walls){

                this.walls = walls;
                return this;

            },
            builddoors:function(doors){

                this.doors = doors;
                return this;

            },
            buildwindows:function(windows){

                this.windows = windows;
                return this;

            },
            build:function(){

                return new house(this.walls,this.doors,this.windows);

            }




        }


}


let houseresult = new housebuilder();

houseresult.builder().buildwalls(2).builddoors(5).build();






















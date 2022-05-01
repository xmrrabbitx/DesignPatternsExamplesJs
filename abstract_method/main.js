



function vict(options){


    this.chair = options.chair;
    this.sofa = options.sofa;
    this.coffetable = options.coffetable;

    console.log("victorian styel");
    console.log(this.chair);
    console.log(this.sofa);
    console.log(this.coffetable);

}



function modern(options){


    this.chair = options.chair;
    this.sofa = options.sofa;
    this.coffetable = options.coffetable;

    console.log("modern styel");
    console.log(this.chair);
    console.log(this.sofa);
    console.log(this.coffetable);

}




function furnfact(){};

furnfact.prototype.furnclass = vict;


furnfact.prototype.createfurn = function(options){

        if(options.furntype == "victorian"){

            this.furnclass = vict;

        }

        else if(options.furntype === "modern"){

            this.furnclass = modern;

        } 

        return new this.furnclass(options);


};


let furn = new furnfact();

furn.createfurn({

    furntype:"modern",
    sofa:"1",
    chair:"3",
    coffetable:"5"




});



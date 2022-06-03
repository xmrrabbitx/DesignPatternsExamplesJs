

function Chart(){

    this.show = function(type, dataStock){

        if(type === "json"){

            return console.log("chart is ready!!! " + dataStock);

        }else{

            return console.log("errror");
        }

    }


}

// new interface
function Convert(){

    this.type = function(type){ return type;}

    this.allowTypes = function(){

        const Format = ["json","csv","docs"];

        if(Format.includes(this.type)){


            return console.log("format is ok");
        }



    }

    this.converting = function(dataStock){

        let chart = new Chart();

        this.type = "json";

        chart.show(this.type, dataStock);



    }


}


// function adapter
function App(){

    let convert = new Convert();

   
    return {

        request : function(type, dataStock){


            convert.type(type);
            convert.allowTypes();
            convert.converting(dataStock);
            
        }


    }
        



let app = new App();

let dataStock = "data stock apple";

app.request("xml" , dataStock);


var Singleton = function(){


    var instance;

    function createInstance(){

        var obj = new Object("new object");
        return obj;
    }

    return {
            getinstance:function(){
                if(!instance){
                    instance = createInstance();
                }

                return instance;

            }

    }


}


var instance1 = Singleton.getinstance();
var instance2 = Singleton.getinstance();

console.log(instance1);
console.log(instance2);
var Singleton = (function(){


    var instance;


    function createInstance(){

        var obj = Object("NEW OBJECT HERE");
        return obj;


    }

    return {

                getinstance : function(){
                    if(!instance){
                        instance = createInstance();
                    }

                    return instance;
                }

    }



})();


console.log(Singleton.getinstance());


console.log(Singleton.getinstance());

function create(type,model,num){
    return{

    type:type,
    model: model,
    num:num,
    startEngine (){console.log("engine is on")}


    }
}

let c1 = create("car","ford","1234");


let c2 = create("boat","toyota","4567");






const v1 = {
    type:"car",
    model: "ford",
    num:"1234",
    startEngine (){console.log("engine is on")}


}



const v = {
    type:"boat",
    model: "toyota",
    num:"5678",
    startEngine (){console.log("engine 2 is on")}


}





const vehicle = {

        type:"truck",
        model:"s12",
        num:"123"
        

}


const vehicle2 = {

    type:"truck",
    model:"s14",
    num:"456"

}


const vehicle3 = {

    type:"boat",
    model:"s15",
    num:"789"

}






function createvehicle(values){

        return {


            type:values.type,
            model:values.model,
            num:values.num



        }


}



let veh1 = createvehicle({

    type:"truck",
    model:"s12",
    num:"123"

});
console.log(veh1.type);

let veh2 = createvehicle({

    type:"boat",
    model:"s13",
    num:"4567"

});

console.log(veh2.type);













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











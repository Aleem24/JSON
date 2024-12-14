let myObj = {
    name : "Aleem",
    age : 10,
    class : 4
}

let myJSON = JSON.stringify(myObj);

let newObj = JSON.parse(myJSON);

document.getElementById("json").innerHTML = newObj.name;

//Call Back Function

function display(value){
    document.getElementById("callback").innerHTML = value;
};

function myCalculator(num1,num2, mycallback){
    let sum = num1 + num2;
    mycallback(sum);
};

myCalculator(1050,2024, display);



//Asynchronus function

async function add(a,b){
    let result = await a + b;
    display(result);

    
};

function display(some){
     document.getElementById("async").innerHTML = some;
}

add(1133,2244);
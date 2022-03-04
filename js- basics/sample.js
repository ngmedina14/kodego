
// show my console.log in a DIV
(function () {
    if (!console) {
        console = {};
    }
    var old = console.log;
    var logger = document.getElementById('log');
    console.log = function (message) {
        if (typeof message == 'object') {
            logger.innerHTML += (JSON && JSON.stringify ? JSON.stringify(message) : String(message)) + '<br />';
        } else {
            logger.innerHTML += message + '<br />';
        }
    }
})();



function alertDisplays(){
    window.alert("window.alert()");
    alert("alert()");
    confirm("confirm()- yes or no");
    }
    

// The difference of let and var is that Let is not declarable
// but inside the a function it can
function letExample(){
    console.log("<h1 style='margin-bottom:-20px;'>let example</h1>")
    let city = "manila";
    function TheCity(){
        let city="Batangas";
        console.log(city);
    }
    TheCity();
    console.log(city);
}    
letExample();

function documentWrite(){
    console.log("<h1 style='margin-bottom:-20px;'>document.write example</h1>")
    let person = "papajomes"
    document.write(`FullName: ${person} interpolant<br>`)
    document.write("FullName:"+person+" ")
}


function promptNumber(){
let val1 = prompt("Enter the val 1");
let val2 = prompt("Enter the val 2");

console.log("<h1 style='margin-bottom:-20px;'>Prompt!</h1>")

x=(val1==val2)?"Match":"Not Match";
console.log(`the val1 and val2 are ${x}`)
}


function dateSamples(){
    console.log("<h1 style='margin-bottom:-20px;'>Date</h1>")
    
    let date = new Date().getDay();

    switch(date) {
        case 1:
            console.log("Today is Monday");
            break;
        case 2:
            console.log("Today is Tuesday");
            break;
        case 3:
            console.log("Today is Wednesday");
            break;
        case 4:
            console.log("Today is Thursday");
            break;
        case 5:
            console.log("Today is Friday");
            break;
        case 6:
            console.log("Today is Saturday");
            break;
        case 7:
            console.log("Today is Sunday");
            break;
        default:
            console.log("not a date");

    }
}
function loopEachSamples(){
    let series = ["a","b","c","d","e","f","g","h","i"]
    let map ={"k1":"v1","k2":"v2","k3":"v3","k4":"v4"}

    console.log("<h4>using of</h4>")
    for (letter of series ){
        console.log(`${letter}\n`)
    }

    console.log("<h4>using in with map</h4>")
    for (key in map ){
        console.log(`key: ${key}, value: ${map[key]}\n`)
    }

    console.log("<h4>using .forEach()</h4>")
    series.forEach(getValue);

    function getValue(value){
        console.log(`${value}\n`)
    }

    // for (number in range(3) ){
    //     console.log("<h4>using in range()</h4>")
    //     console.log(`${number}\n`)
    // }
}

function functionSamples(){

    console.log("<h4>function Declaration</h4>")
    function functionDeclaration(a,b){
        return a+b
    }
    console.log(functionDeclaration(1,2))
    

    console.log("<h4>function Expression</h4>")
    let x = function(a,b){
        return a+b;
    }
    console.log(x(4,5))

    console.log("<h4>Arrow Function</h4>")
    let sum = (a,b) => a+b
    console.log(sum(2,3))
    
    console.log("<h4>Real Sample</h4>")
    // if func:func
    // let getStatus = age < 18 ? (age) => console.log(`Underage ${age}`): (age) => console.log(`Legal ${age}`);


    let getStatus = (age) => age<18 ? console.log(`${age} is Underage`):console.log(`${age} is Legal`);
    getStatus(16);
}

function arraySamples(){
    // Array Of Objects
    let users = new Array();
    users[0] = {fName:"Neil", lName:"Medina"};
    users[1] = {fName:"qweqwe", lName:"Medina"};
    users[2] = {fName:"asdasd", lName:"Medina"};
    users[3] = {fName:"zxczxc", lName:"Medina"};

    let fullName = users.map((element) => `${element.fName} ${element.lName}`)
    console.log(fullName)

    let num = [1,2,3,4]
    let sum = num.map((num)=>(num%2==0) ? num*2: num)
    console.log(sum)
}
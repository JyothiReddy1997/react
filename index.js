            //Create a variable
//var name ='jyothi';
//name = "Bhavanam"
//alert(name)



            // Create a variable that will not change over time...CONSTANT
//const error_var = 'Error occurred';
//alert(error_var);


//if (true)
//{
//    var name_1 = "jyothi reddy";
//    alert(name_1)
//}
////alert(name_1)

            //<!-- Creating varible using let only in that scope
//if (true)
//{
//    let name_1 = "let keyword";
//    alert(name_1)
//}
//alert(name_1)-->


                //old way
//let fname = 'first name';
//let lname = 'last name';
//let age = prompt("Guess my age. . ");
//
//let result = fname+' '+lname+ ' '+ age+'years old';
//alert(result);


                //using template string
//let lname = 'last name';
//let fname = 'first name';
//let age = prompt("Guess my age. . ");
//let result = `${fname} ${lname} is ${age} years old`;
//alert(result);

                //Default parameters
//function welcome(user = "Mystery Person", message = "Everything okay?")
//{
//    alert(`Hello ${user} ${message}`);
//}
//welcome("java script ","How are you?");
//welcome();


//                old way           
//function greeting(message)
//{
//    return alert(`${message} everyone.`);
//}



                    //Arrow functions
//let greeting = message => alert(`${message} everyone..`); 
//greeting('God Morning! ');


        //Arrow function for multiplestatements to return
//let createBolg = (title, body) =>
//{
//    if(!title)
//        {
//            throw new Error('Title is required.');
//        }
//    if(!body)
//        {
//            throw new Error('Body is required');
//        }
//    return alert(`${title} - ${body}`);
//}
//createBolg('Blog title', 'Blog body');



                    //this keyword
//function sayhi(){
//    
//}
//sayhi()
//console.log(this);


                    //arrow function using this keyword

//    let USA ={
//    //add property
//    mountains:['diablo','Twin Peaks','Mountain view'],
//    //add method
//    printWithDash:function(){
//    setTimeout( ()=> console.log(this.mountains.join(' - ')), 3000);
//    }
//};
//USA.printWithDash();


                    //Destructuring object
//let thingsToDo = {
//    morning: "Excercise",
//    afternoon: "work",
//    evening: "code",
//    night : ["Sleep","Dream"]
//}
//
//let {morning,afternoon} = thingsToDo;
//
//console.log(morning, '-', afternoon);

                    //Destructuring object in functions
//let uni_Student = (name,university) => {
//    console.log(`${name} from ${university}`);
//};
//
//uni_Student({
//    name: 'Jyothi Reddy',
//    university: 'CSU EastBay'
//});


                    //Destructuring array
//let [friends] = ['Garima', 'Snigdha', 'Ankit']
//console.log(friends)
//let [,friends1] = ['Garima', 'Snigdha', 'Ankit']
//console.log(friends1)


                    //Restructure
//var name = 'Sony';
//var height = 5.5;
//var output = function(){
//    console.log(`Hello! ${this.name} is ${this.height} feet tall`);
//}
//
//var sister = {name, height,output};
//sister.output();

                    //Restructure
//var sister = {
//    name: 'Sony',
//    height: 5.5,
//    output(){
//                        console.log(`Hello! ${this.name} is ${this.height} feet tall`);
//}
//};
//sister.output();

                    //Spread operator on array
//var [friends] = ['Snigdha', 'Ankit'];
//var closefriends = ['Vignesh','Tripti'];
//
//var allfriends = [ ...friends, ...closefriends];
//console.log(allfriends);


                    //Spread operator on object
//var day ={
//    breakfast: 'bread toast',
//    lunch: 'rice with curry'
//}
//
//var night = {
//    dinner : 'chicken soup'
//}
//
//var picnic = {...day, ...night};
//
//console.log(picnic)



                    //rest
//var rivers = ['Ganga','yamuna','nile'];
//var[first, ...rest] = rivers;
//console.log(first);
//console.log(rest);


                    //classes
//function Holiday(destination, days){
//    this.destination = destination
//    this.days = days
//}
//
//Holiday.prototype.info = function(){
//    console.log(this.destination+ " | "+ this.days+ " days");
//}
//
//var USA = new Holiday("Usa", 30)
//console.log(USA.info());


                    //properties of methods
class Holiday{
    constructor(destination, days){
        this.destination = destination;
        this.days = days;
    }
    info(){
        console.log(`${this.destination} will take ${this.days} days.`);
    }
}

//const trip = new Holiday('CALIFORNIA, NEWYORK',40);
//console.log(trip.info());

class Expediation extends Holiday{
    constructor(destination, days, gear){
        super(destination, days);
        this.gear = gear;
    }
        info(){
        super.info();
         console.log(`Bring your ${this.gear.join(' and your')}`);
    }
}

const tripWithGear = new Expediation('tower', 45,['Sunglasses','flags','bags']);
tripWithGear.info();
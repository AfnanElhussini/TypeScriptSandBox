
  // Type annotations Data Type of Variables 
  let theName : string = "afnan"; // not mandatory to use (:string ) 
  let theAge : number = 24;
  let isHired: boolean = true;

theName = "Amr";
let secondName = "Afnaaan";

let all : any;
all = "Afnan";

function add(n1 : number, n2: number){
    return n1 + n2;
}

console.log(add(10, 20))

/* Type Annotations with Arrays */ 
let result;
result = "A";
result = 100;
result = true;

// Update with string & number only
let result1 : (string | number);

result1 = "Mahmoud";
result1 = 55;

// TS with Arrays 
let myFriends : string [] = ["Basant", "Samah", "Zainab"]
for(let i =0; i < myFriends.length; i++){
    console.log(myFriends[i].repeat(3));
}

/* Multidimintional Arrays */
let arrayOne : number[] = [1, 2, 3, 4,5];
let arrayTwo : string[] = ["Afnan", "Asmaa", "Yasmeen", "Asma"];
let arrayThree : (string | number) [] = [1, 2, 3, 4 , 5,"Afnan", "Asmaa", "Yasmeen", "Asma" ];

let arrayFour : (string | number | string[])[]   = [1, 2, 3, 4, "A", "B", ["C", "D"]];

/* Functions */ 
// No Implicit Return  >> To Check All code Paths In a function to Ensure They Return a value .
let showMsg = true;
function showDetails(name: string, age: number, _salary: number) : string{
    let test = 10;
    if(showMsg){
      return `Hello ${name},Age is : ${age}, Salary is: ${_salary} test = ${test}`;
    }
    return `No Data to Show`;
}

console.log(showDetails("afnan", 24, 3000));


function showData(name, age, country){
    return `${name} `
}
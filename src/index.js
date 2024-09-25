// Type annotations Data Type of Variables 
// not mandatory to use (:string ) 
var theAge = 24;
var isHired = true;
var secondName = "Afnaaan";
var all;
all = "Afnan";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));
/* Type Annotations with Arrays */
var result;
result = "A";
result = 100;
result = true;
// Update with string & number only
var result1;
result1 = "Mahmoud";
result1 = 55;
// TS with Arrays 
var myFriends = ["Basant", "Samah", "Zainab"];
for (var i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i]);
}
/* Multidimintional Arrays */
var arrayOne = [1, 2, 3, 4, 5];
var arrayTwo = ["Afnan", "Asmaa", "Yasmeen", "Asma"];
var arrayThree = [1, 2, 3, 4, 5, "Afnan", "Asmaa", "Yasmeen", "Asma"];
var arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"]];
/* Functions */
// No Implicit Return  >> To Check All code Paths In a function to Ensure They Return a value .
var showMsg = true;
function showDetails(name, age, _salary) {
    var test = 10;
    if (showMsg) {
        return "Hello ".concat(name, ",Age is : ").concat(age, ", Salary is: ").concat(_salary, " test = ").concat(test);
    }
    return "No Data to Show";
}
console.log(showDetails("afnan", 24, 3000));
// optional Paramter 
function showData(name, age, country) {
    return "".concat(name, " - ").concat(age, " - ").concat(country);
}
console.log(showData("Afnan", 23));
/* Function Reset Paramter */
function addAll() {
    var nums = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        nums[_i] = arguments[_i];
    }
    var result = 0;
    for (var i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 40, 50, 10.5, +true));
// true = 1
/* Annoymous Function */
var addNumbers = function (num1, num2) {
    return num1 + num2;
};
console.log(addNumbers(10, 20));

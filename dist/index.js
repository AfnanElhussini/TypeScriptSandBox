"use strict";
let theName = "afnan";
let theAge = 24;
let isHired = true;
theName = "Amr";
let secondName = "Afnaaan";
let all;
all = "Afnan";
function add(n1, n2) {
    return n1 + n2;
}
console.log(add(10, 20));
let result;
result = "A";
result = 100;
result = true;
let result1;
result1 = "Mahmoud";
result1 = 55;
let myFriends = ["Basant", "Samah", "Zainab"];
for (let i = 0; i < myFriends.length; i++) {
    console.log(myFriends[i].repeat(3));
}
let arrayOne = [1, 2, 3, 4, 5];
let arrayTwo = ["Afnan", "Asmaa", "Yasmeen", "Asma"];
let arrayThree = [1, 2, 3, 4, 5, "Afnan", "Asmaa", "Yasmeen", "Asma"];
let arrayFour = [1, 2, 3, 4, "A", "B", ["C", "D"]];
let showMsg = true;
function showDetails(name, age, _salary) {
    let test = 10;
    if (showMsg) {
        return `Hello ${name},Age is : ${age}, Salary is: ${_salary} test = ${test}`;
    }
    return `No Data to Show`;
}
console.log(showDetails("afnan", 24, 3000));
function showData(name, age, country) {
    return `${name} - ${age} - ${country}`;
}
console.log(showData("Afnan", 23));
function addAll(...nums) {
    let result = 0;
    for (let i = 0; i < nums.length; i++) {
        result += nums[i];
    }
    return result;
}
console.log(addAll(10, 20, 30, 40, 50, 10.5, +true));
//# sourceMappingURL=index.js.map
/* Data Types */ 
/* Type Alies */
type str = string;
let myMName : str = "Afnan";

type strAndNum = string | number;
let myStrNmae : strAndNum = "Fanfona";
let myAge :strAndNum  = 24;

/* Advanced */

type buttons = {
    up: string,
    right: string,
    down: string,
    left : string
}

function getActions(buttons){
    console.log(`Action Button Up Is ${buttons.Up}`);
    console.log(`Action Button Right Is ${buttons.right}`);
    console.log(`Action Button Down Is ${buttons.down}`);
    console.log(`Actions Button Left Is ${buttons.left}`)
    
    
}

getActions({
    up: "jump",
    right: "Go Right",
    left: "Go LEFT",
    dowm: "Go Down"
})
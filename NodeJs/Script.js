let n= 20;
for (let i = 0; i < n; i++) {
    console.log(`${i}. Ram Ram ji`);}
    // console.log("hello to:  ",process.argv);
    let arr= process.argv;
    for (let i = 2; i < arr.length; i++) {
        console.log("Ayodhya dhm ke ",arr[i])
    }
    //module.exports file is case sensitive it is for same directory
    const calculator = require("./Math");
    console.log(calculator.add(33,782));
    console.log(calculator.g);
    // using of module.exports for directory
    let fal= require("./Fruit");
    console.log(fal[0].naam);
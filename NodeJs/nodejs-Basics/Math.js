// be carefull everything is in small letter
const gtr=process.argv;
for (let i = 2; i < gtr.length; i++) {
    console.log(gtr[i]);
    
}
console.log(gtr[2]);
//Now write command in bash $ node Math.js arayabhatta is great mathematician
// let add=(a,b)=>(a+b);
// let mul=(a,b)=>(a*b);
// let pi=3.14;
// let g=9.8;
// let obj={
//     add:add,
//     mul:mul,
//     pi:pi,
//     g:g
// }
// module.exports=obj;
// 2nd way to use modulo exports
// let module.exports={
//     add:add,
//     mul:mul,
//     pi:pi,
//     g:g
// }



// 3rd way to use modulo.exports
// module.exports.add=(a,b)=>(a+b);
// module.exports.mul=(a,b)=>(a*b);
// module.exports.pi=3.14;
// module.exports.g=9.8;


// 4 th short way to use which isi ka ek aur short form hota hai
exports.add=(a,b)=>(a+b);
exports.mul=(a,b)=>(a*b);
exports.pi=3.14;
exports.g=9.8;

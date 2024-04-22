const sum= function (a,b){
    console.log(a+b);
}

const mul= function (a,b){
    console.log(a*b);
}

// module.exports ={
//     fn1: sum,
//     fn2: mul,
// };

// console.log('module 1....')
const name= 'Ajay';
module.exports={
    sum,
    mul,
    'name':name,

    //name,
    
};


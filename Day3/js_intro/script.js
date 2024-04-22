
//JS INTRO


//VARIABLE TYPES

//Var
// var message ="Hellooooo!";
// var age=18;
// age="Done";

// console.log(message)
// var message = "Helloooo";


// message='else';
// console.log(message);

// function env(){
//     for(var i=0;i<5;i++){
//         console.log('--',i);
//     }
//     console .log(i);
// }

// env();


//LET

// let message="Hello";
// console.log(message);

// console.log(message);


//CONST

// const message= 'hello';
// console.log(message);

// message1 = 'else';
// console.log(message1);

// let userAage = 'abcd';   //use Camel case always for JS
// age = 'abbs';
// console.log(typeof(age))

// let _ = 'abcd';        //Other method to write in JS
// _ = 'abbs';
// console.log((_))


// let arr = ['a','b' ,'c','d'];

// arr[0] ='abcd';
// console.log(arr);


// let str='12';

// let age=20;

// let ans=Number(str)+age;   //USED TYPECASTING HERE
// console.log(ans);


// let str ='12a';
// let p = parseInt(str);
// let n = Number(str);
// console.log(p,n);


// let a = ['a','b','c','d'];
// let cpy = [...a];

// console.log(a,cpy);

// if(a==cpy){
//     console.log('1.yes');
// }

// else{

//     console.log('1.no');
// }

// if(a===cpy){
//     console.log('1.yes');
// }
// else{

//     console.log('1.no');
// }


// const str ='Bloom';
// const usrName = `My name is:`;

// const ans = `${usrName}    ${str}`;
// console.log(ans)


// function print(str = 'Nothing is here'){

//     console.log(str);
// }

// const h= 'Hello';
// print('hello');
//print ();


// function sum (a,b){
//     if(a && b){
//         console.log(a+b);
//     }
//     else{

//         console.log(a);
//     }

// }

// sum(2);


//METHOD TO DECLZRE FUNCTIONS

//Function declaration

// function print(){
//     console.log('--');
// }


// //function Assignment (named)

// const a = function print(){   //use let or const anything
//     console.log('--');
// }

// //function  Assignment (Anonymous)
// const b = function (){ 

//     console.log('==');

//     //Arrow function...?




// }

// print();
// a();
// b();


//CONDITIONAL STATEMENT :-Switch Case

// let a=3;
// switch(a){
//     case 1:
//     {
//         console.log('one');
//         break;
//     }
//     case 2: {
//         console.log('two');
//         break;
//     }

//     case 3:
//         {
//             console.log('three');
//             break;
//         }
//         default: {
//             console.log('Not 1,2,3')
//         }
// }


// const obj = new Object();
// obj[1] = 'One';
// obj['name'] = 'Shrishti';
// obj[12] = 'Twelve';
// console.log(obj);

//OR

// const obj = {}
// obj[1] = 'One';
// obj['name'] = 'Shrishti';
// obj[12] = 'Twelve';
// console.log(obj);

//OR

// const obj ={
//     1: 'one',
//     ' first name': 'Pandey',
//     'last name': 'Shrishti',
//     13: 'Twelve',
// };

// console.log(obj);

const obj ={
    1: 'one',
    'firstname': 'Pandey',
    'lastname': 'Shrishti',
    'age':20,
    'address': 'Delhi',
};

const fullName1 = obj.firstname + ' ' +obj["lastname"];
console.log(fullName1);


// const obj ={
//         1: 'one',
//         'firstname': 'Pandey',
//         'lastname': 'Shrishti',
//         'age':20,
//         'address': 'Delhi',
//     };

//     const x = prompt ('Please tell the property to know');
//     console.log(obj[x]);









// //loosely typed
// //strictly typed (correct option)

// //statically typed
// //dynamically typed (correct option)
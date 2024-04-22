//let a=new string ("JavaScript practice"); //new keyword 








// const obj ={
//     name: 'Ajay',
//     lastname: 'Singh',

// }


// const obj = {
//     "name": 'Ajay',
//     'lastname': 'Singh',

// }

// console.log(obj);
// document.write(str);


// const obj= {

//         name: 'shri',
//         age: 20,
// }
// obj.age =20;
//obj.name='shri';
// console.log(obj);


// let arr=[1,2,3,4];
// arr=[3,4,5]; //reassignment is possible
// console.log(arr);

// let arr=[1,2,3,4];
// arr[1]= 30; //change the index value and it will replace the value
// console.log(arr);

// let arr=[1,2,3,4];
// arr.push(10); //insert element in the array using push
// console.log(arr);


// const arr=[1,2,3,4];
// console.log(typeof(arr)); //Object type  //typeof arr is also an object

//In java script mostly everything is of object type


// const obj ={
//     "name": "Ajay",
//     "lastname": "Singh"
// }

// const arr=[1,2,3,4];

// console.log(Array.isArray(obj))
// console.log(Array.isArray(arr))


// //checkIfObject{[1,2,3,4]}
// // checkIfObject({"name"}:"ajay"})


// function checkIfObject(x){

//     if(Array.isArray(x)){
//         console.log("Not object");
//     }
//     else if(typeof(x)=="object"){
//         console.log("object");
//     }
//     else {
//         console.log("Not object");
//     }
// }


// const arr =['name',2,];
// const obj ={
//     'name':"ajay",age:20, 1:'else'
// };

//for(let i=0;i<2;i++){

//}

// for(let i in arr){
//     console.log(i);
// }


//FOR LOOPS:-

//for in
//for
//for of

// for(let i in obj){
//     console.log(i);
// }




// console.log(window)
// console.log(innerHeight) //window functions
// console.log(innerWidth)

// // console.log(window.document)
// // console.log(window)  //It includes all the properties in console

// console.dir(window.document)
// console.dir(window)    //same as log  It consist 2 methods log and dir


// const res=document.getElementsByTagName('h3') //Array is a subset of iterables
// console.log(res);

// const res = document.getElementById('t1')
// console.dir(res)

// document.querySelectorAll('div>h3');   
// console.log(res)


// const res = document.getElementById("ht1");
// console.log(res);

// const res =document.getElementById("ht1");
// res['innerText'] = "Hello , world";
// console.log(res);

// const res =document.getElementsByTagName("div");
// res[0].innerText= "Hello , world";
// console.log(res);


// const res =document.getElementsByTagName("h3");
// res[0].innerText= "<h4>Hello , world</h4>"
// console.log(res);                  //Not completed yet


// console.log(res)
// res[0]


// const ne = document.createElement("h3") //create new element
// ne.innerText = "Dynamic Text";
// console.log(ne);


// const ne = document.createElement("h3") //create new element
// ne.innerText = "Dynamic Text";
// document.body.appendChild(ne);


const ne = document.createElement("h3") 
ne.innerText = "Dynamic Text";
// document.body.appendChild(ne);
const firstDiv = document.getElementsByTagName("div");
firstDiv[0].appendChild(ne);





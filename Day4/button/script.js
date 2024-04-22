// const div = document.querySelector('div');
// console.log(div);

// div.innerHTML = "<p>Hello</p>";
// div[0].innerHTML = "<p>Hello</p>";
// res.remove(); //It should be node

// const res = document.querySelector('div');
// // const c = document.querySelector('p');
// const c = document.querySelector('p:nth-of-type(2)')
// res.removeChild(c);  //use to remove child tag


function getInfo() {
        console.log ("Btn Clicked");
        
}


// function getInfo(){
//     const r = document.querySelector("div");
//     // const e=document.createElement('p');
//     //  e.innnerText="Hollllaaa";
//     r.prepend("Holllaaa");


// }

function getInfo(e){
    // const r = document.querySelector("div");
    // // const e=document.createElement('p');
    // //  e.innnerText="Hollllaaa";
    // r.prepend("Holllaaa");
    console.log(e);
    // e.target.class = 'abc';
    // e.target.setAttribute('style','color:blue')
    // e.target.setAttribute('style','background-color: green')
    e.target.style.backgroundColor = 'green';
    e.target.style.color = 'blue';
}
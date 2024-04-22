// const firstNameChange =()=>{
//     console.log('fisrtName');
// }

const namechange = (e) => {
  // console.log(e);
  const vale = e.target.value;
  // if(val<3){

  if (vale.length > 3) {
    console.log("correct");
  }
};
function submitForm(e) {
  e.preventDefault();
  // console.log(e);

  const t = e.target;
  const res = {
    hobbies: [],
  };
  // for(let i=0; i<2; i++)
  for (let i = 0; i < t.length; i++) {
    // console.log(t[i].value);
    // console.log(t[i].type);

    const nm = t[i].name;
    const ty = t[i].type;
    const vl = t[i].value;
    // console.log(ty,vl,nm);

    if (ty == "checkbox" && t[i].checked) {
      res.hobbies.push(vl);

      // console.log(t[i].checked)
    }

    if (ty != "checkbox" && ty != "submit") {
      res[nm] = vl;
    }
  }
  console.log(res);
}


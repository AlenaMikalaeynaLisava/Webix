export let usersChart= {  view:"chart",
type:"bar",
hover:"myhover",
border:true,
value:"#age#",

xAxis:{
  title: "Age",
  template:"#age#"
},
// yAxis:{
// template:function(value){
//       return (value%20?"":value);
//     }
// },
url:"data/users.js",  
};
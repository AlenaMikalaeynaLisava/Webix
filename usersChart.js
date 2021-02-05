// view.group({
//   by:"country",
//   map:{
//       votes:[ "users", "sum" ]
//   }
// });

export let usersChart= {  view:"chart", 
id:"chart",
type:"bar",
border:true,
value:"#name#",//Remoove
yAxis:{},
// scheme:{
//   $group:{
//     by:"country",
//     map:{
//       name:["name", "count"]//Remoove
//     }	
//   }
// },
scheme:{
  $group:{
    by:"country",
    map:{
      name:["name", "count"]//Remoove
    }	
  }
},
xAxis:{
  title: "Country",
  template:"#country#"
},

// url:"data/users.js",  
};

// function countUsers(data){
//   if (!data.length) return 0;
//   var summ = 0;
//   for (var i = data.length - 1; i >= 0; i--) {
//     summ += prop(data[i])*1;
//   };
//   return summ/data.length;
// }
var options =[
	{ "id":1, "value":"Drama" },
	{ "id":2, "value":"Fiction" },
	{ "id":3, "value":"Comedy" },
	{ "id":4, "value":"Horror" }
]


 export let data = {view:"datatable",  id:"newdatatable", select:true,
hover:"myhover",
columns:[
 {id:"rank", header:"",  css:{"background":"#F4F5F9"}},
 {id:"title", header:["Film Title", {content:"textFilter"}], editor:"text", fillspace: true, sort:"string_strict"},
 {id:"categoryId",	header:["Category",{content:"textFilter"}], 
 collection:options, editor:"text"
},
{id:"rating", header:["Rating", {content:"textFilter"}], sort:"int"},
 {id:"votes", header:["Votes", {content:"textFilter"}], sort:"int",
},
{id:"year", header:["Year"], sort:"int"},
 { id:"del", template:"{common.trashIcon()}", header:""}
],
 editable:true,
scheme:{
$init:function(obj){
  const result = (obj.votes).match(/\d/g); 
  obj.votes = result ? (+result.join('')).toFixed() : 0; 
  obj.categoryId = Math.floor(Math.random() * 4) + 1;
  
}
},
url:"data/data.js",  scrollX:false,
onClick:{
"wxi-trash":function(e, id){
     this.remove(id);
     return false;
}
}
};
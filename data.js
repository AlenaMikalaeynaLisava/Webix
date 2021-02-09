import {categories} from './categories.js';

export let newdatatable = {view:"datatable",  id:"newdatatable", select:true,
hover:"myhover",
columns:[
 {id:"rank", header:"",  css:{"background":"#F4F5F9"}},
 {id:"title", header:["Film Title", {content:"textFilter"}], editor:"text", fillspace: true, sort:"string_strict"},
 {id:"categoryId",	
 header:["Category",{content:"selectFilter"}], 
 collection:categories,
  editor:"text"
},
{id:"rating", header:["Rating", {content:"textFilter"}], sort:"int"},
 {id:"votes", header:["Votes", {content:"textFilter"}], sort:"int"},
{id:"year", header:["Year"], sort:"int"},
 { id:"del", template:"{common.trashIcon()}", header:""}
],
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

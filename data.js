 export let data = {view:"datatable",  id:"newdatatable", select:true,
hover:"myhover",
columns:[
 {id:"rank", header:"",  css:{"background":"#F4F5F9"}},
 {id:"title", header:["Film Title", {content:"textFilter"}],  fillspace: true, sort:"string_strict"},
 {id:"year", header:["Released", {content:"textFilter"}], sort:"int"},
 {id:"votes", header:["Votes", {content:"textFilter"}], sort:"int",
},
 { id:"del", template:"{common.trashIcon()}", header:""}
],
scheme:{
$init:function(obj){
  obj.votes = (obj.votes).match(/\d/g).join('');
}
},
autoConfig:true,  url:"data/data.js",  scrollX:false,
onClick:{
"wxi-trash":function(e, id){
     this.remove(id);
     return false;
}
}
};
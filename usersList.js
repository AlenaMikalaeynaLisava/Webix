export let usersList = {
  margin:20,
  padding:10,
  rows:[{
    margin:20,
    height: 50,
    cols:[
      {view:"text", id:"list_input",css:"fltr"},
      {view:"button", 
      id:"sort_asc_button",
      value:"Sort asc", css:"webix_primary",
    width:120},
      {view:"button", 
      id:"sort_desc_button",
      value:"Sort desc", css:"webix_primary",
      width:120},
    ]
  },
    {view:"list",
    id:"list",
autoheight:false,
template:"#name# #age# from #country#",
select:true,
url:"data/users.js",  
scrollX:false,
// onClick:{
// "wxi-trash":function(e, id){
//      this.remove(id);
//      return false;
// }
// }
}]
};


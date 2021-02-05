webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.list);

export let usersList = {
  view:"editlist",
    id:"list",
    editable:true,
    editor:"text",
    editValue:"name",
template:"#name# #age# from #country# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'></span>",
select:true,
url:"data/users.js",  
scheme:{
  $init:function(obj){
    if(+obj.age<26){
      obj.$css = "highlight";
    }
  }
  },
  rules:{
    name:webix.rules.isNotEmpty,
},
onClick:{
  "remove-icon":function(e, id){
    this.remove(id);
    return false;
  }
},
};


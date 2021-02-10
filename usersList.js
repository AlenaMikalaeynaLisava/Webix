webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.list);

export let editlist =         {
  view:"editlist",
    id:"editlist",
    editable:true,
    editor:"text",
    editValue:"name",
template:" #name# #age# from #country#",
select:true,
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
};


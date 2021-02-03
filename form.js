export let form = {
    view:"form",
    id:"myform",
    autoheight:false,
    width:350,
    elements:[
      { view:"template", template:"edit films", type:"section" },
      { view:"text", label:"Title", name:"title"},
      { view:"text", label:"Year", name:"year"},
      { view:"text", label:"Votes",  name:"votes"},
      { view:"text", label:"Rating", name:"rating"},
      {cols:[
          { view:"button", 
           id:"save_button",
           value:"Save", css:"webix_primary", 
           click:function(){
            var item_data = $$("myform").getValues();
            if(item_data.id){
                $$("newdatatable").updateItem(item_data.id, item_data);
            } else{
                console.log(item_data);
                $$("newdatatable").add(item_data);
            }
              
            }},
          { view:"button", 
          id:"clear_button",
          value:"Clear", 
          click:clear_form}
      ]},
  ],
};

function clear_form(){
    webix.confirm({
        title:false,
        text:"Do you want to clear the form?"
      }).then(
        function(){
          $$("myform").clear();
          $$("myform").clearValidation();
        }, 
        function(){
          webix.message("Rejected");
        }
      );
};

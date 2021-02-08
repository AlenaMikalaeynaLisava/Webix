export let form = {
    view:"form",
    id:"myform",
    autoheight:false,
    width:350,
    elements:[
      { view:"template", template:"edit films", type:"section" },
      { view:"text", label:"Title", name:"title", invalidMessage:"Title should be entered"},
      { view:"text", label:"Year", name:"year", invalidMessage:"Enter year between 1900 and 2021"},
      { view:"text", label:"Votes",  name:"votes", invalidMessage:"Votes must be number"},
      { view:"text", label:"Rating", name:"rating", invalidMessage:"Enter non zero rating, please"},
      {cols:[
          { view:"button", 
           id:"save_button",
           value:"Save", css:"webix_primary", 
          type:"form", click:save_form
          },
          { view:"button", 
          id:"clear_button",
          value:"Clear", 
          click:clear_form
        }
      ]},
  ],
  rules:{
    title:webix.rules.isNotEmpty,
    year:function(value){
        return value>1900 && value <2021;
      },
    votes:webix.rules.isNumber,
    rating: function(value){
        return value!=0 && webix.rules.isNotEmpty;
    }
},
on:{
onValidationError:function(key){
  webix.message({text:key+" field is incorrect", type:"error"});
}
 }
};

function clear_form(){
    webix.confirm({
        title:false,
        text:"Do you want to clear the form?"
      }).then(
        function(){
          $$("myform").clear();
          $$("myform").clearValidation();
          $$("newdatatable").unselectAll();
        }, 
        function(){
          webix.message("Rejected");
        }
      );
};
function save_form(){
  let form = $$('myform');
  if(form.isDirty()){
    if(form.validate()){
      const t  = form.save();
            let item_data = $$("myform").getValues();
            if(!item_data.id){
              webix.message("New item added");
            } 
    }

  }
};
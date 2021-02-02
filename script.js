webix.ready(function(){

    const firstRow = {
        view:"toolbar", 
        id:"firstrow",
        css:"webix_dark",
        cols:[
            {template:"My app", type:"header", borderless:true},
            {},
            { view:"button", id:"button1", type:"icon", icon:"wxi-user", label: "Profile", width:100, css:"webix_transparent my_label", click:function(){
                $$("mywindow").show($$("button1").getNode());
            }}
        ],
    }

    var sidemulti = { 
        css:"menu",
        rows:[ 
          { 
            view:"list",
            id:"mylist1",
            width:200,
            scroll:false,
            select:true,
            on:{
                onAfterSelect:function(id){ 
                  $$(id).show();
              }
            },
            data:[ "Dashboard", "Users", "Products", "Admin"]
          }
        ]
      };


     var data = {view:"datatable",  id:"newdatatable",
     columns:[
       {id:"rank", header:"",  css:{"background":"#F4F5F9"}},
       {id:"title", header:"Film Title", fillspace: true},
       {id:"year", header:"Released"},
       {id:"votes", header:"Votes"},
     ],
     autoConfig:true,  url:"data/data.js",  scrollX:false
      };

    var form = {
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
          // {}
      ],
  };

    var mainmulti = {
        cells:[ 
            { id:"Dashboard", 
            cols:[
                data,
                form
            ]},
          { id:"Users", template:"Users View"},
          { id:"Products", template:"Products view"},
          { id:"Admin", template:"Admin View"}
        ]
      };

    const secondRow = {
            cols:[sidemulti, {view:"resizer"}, mainmulti] 
    }

    const thirdRow = {
        template: "html->my_box1",
        height: 40,
        css:"template",
        
    }
    
    webix.ui({
        type:"line",
        rows:[ firstRow, secondRow, thirdRow]
    });
      
    $$("newdatatable").attachEvent("onAfterSelect", function(id){
      var values = $$("newdatatable").getItem(id);
      $$("myform").setValues(values);
    });

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
    });  
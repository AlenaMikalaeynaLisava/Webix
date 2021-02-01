webix.ready(function(){

    webix.ui({
        view:"popup",
        id:"mywindow",
        body:{
            view:"list",
            data:[ "Settings", "Log out"],
            autoheight:true,
            width:250,
        }
    })

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


     var data = { columnWidth:70, view:"datatable", id:"newdatatable", autoConfig:true,  url:"data/data.js", scrollX:false};

      var form = {
        view:"form",
        id:"formform",
        width:280,
        elements:[
          { type:"section", template:"Edit films" },
          { view:"text", label:"Title" },
          { view:"text", label:"Year" },
          { view:"text", label:"Votes" },
          { view:"text", label:"Rating" },
          {cols:[
            { view:"button", 
            id:"add_button1",
            value:"Add new", css:"webix_primary", 
            click:function(){
                if($$("formform").validate()){
                    var item = $$("formform").getValues();
                    $$("newdatatable").add(item);
                    // webix.message({text:"validation is successful"})
                    // $$("mywindow1").show()
                } 
            }},
            // { view:"button", 
            // id:"clear_button1",
            // value:"Clear", 
            // click:clear_formform},
            { view:"button", 
            id:"delete_button1",
            value:"Delete", 
            // click:clear_formform
        },
            { view:"button", 
            id:"edit_button1",
            value:"Edit data", 
            // click:clear_formform
        },
        ]},
          {}
        ]
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
//       function clear_formform(){
//               $$("formform").clear();
//               $$("formform").clearValidation();
//   };
    });  
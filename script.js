import {data} from './data.js'; // не {User}, просто User
import {form} from './form.js';
import {usersList} from './usersList.js';
import {usersChart} from './usersChart.js';
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
            data:[ "Dashboard", "UsersList", "Products", "Admin"]
          }
        ]
      };

    var mainmulti = {
        cells:[ 
            { id:"Dashboard", 
            cols:[
                data,
                form
            ]},
          {id:"UsersList", 
          rows:[usersList,
            usersChart]
        },
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
      console.log(values);
      $$("myform").setValues(values);
    });

    $$("list_input").attachEvent("onTimedKeyPress",function(){
      var value = this.getValue().toLowerCase();
      $$("list").filter(function(obj){
        return obj.name.toLowerCase().indexOf(value) !== -1;
      })
    });
    });  
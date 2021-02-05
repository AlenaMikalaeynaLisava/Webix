import {data} from './data.js'; 
import {form} from './form.js';
import {userToolbar} from './userToolbar.js';
import {productsTree} from './productsTree.js';

webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.list);

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
            data:[ "Dashboard", "Users view", "Products view", "Admin view"]
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
            {
              margin:20,
              padding:10,
              id:"Users view", 
                    rows:[userToolbar,
                      {
                        view:"editlist",
                          id:"editlist",
                          editable:true,
                          editor:"text",
                          editValue:"name",
                      template:" #name# #age# from #country# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'></span>",
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
                      }
                      },
                      {  view:"chart", 
                        id:"mychart",
                        type:"bar",
                        value:"#name#",
                        xAxis:{
                           title: "Country",
                          template:"#country#"
                        },
                        yAxis:{},
                      }
                    ]
                },
          productsTree,
          { id:"Admin view", template:"Admin view"}
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
      

    $$("mychart").sync($$("editlist"),function(){
      $$("mychart").group({
        by:"country",
        map:{
          name:["name", "count"]
        }
    })
  });
     


    $$("myform").bind($$("newdatatable"));

    $$("list_input").attachEvent("onTimedKeyPress",function(){
      var value = this.getValue().toLowerCase();
      $$("editlist").filter(function(obj){
        return obj.name.toLowerCase().indexOf(value) !== -1;
      })
    });
    });  
    
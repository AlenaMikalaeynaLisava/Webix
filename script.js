// import {newdatatable} from './data.js'; 
import {form} from './form.js';
import {editlist} from './usersList.js';
import {chart} from './usersChart.js';
import {userToolbar} from './userToolbar.js';
import {productsTree} from './productsTree.js';
import {admin} from './admin.js';

const categories = new webix.DataCollection({
  url:"categories.js"
});


const  users = new webix.DataCollection({
  
  url:"data/users.js"
});


webix.protoUI({
  name:"editlist"
}, webix.EditAbility, webix.ui.list);

webix.ready(function(){

  // const categories = new webix.DataCollection({
  //   url:"categories.js"
  // });
  

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
    const sidemulti = { 
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
            data:[ "Dashboard", "Users view", "Products view", "Admin"]
          }
        ]
      };


    const mainmulti = {
        cells:[ 
            { id:"Dashboard", 
            cols:[
               {view:"datatable",  id:"newdatatable", select:true,
hover:"myhover",
columns:[
 {id:"rank", header:"",  css:{"background":"#F4F5F9"}},
 {id:"title", header:["Film Title", {content:"textFilter"}], editor:"text", fillspace: true, sort:"string_strict"},
 {id:"categoryId",	
 header:["Category",{content:"selectFilter"}], 
 collection:categories,
  editor:"text"
},
{id:"rating", header:["Rating", {content:"textFilter"}], sort:"int"},
 {id:"votes", header:["Votes", {content:"textFilter"}], sort:"int"},
{id:"year", header:["Year"], sort:"int"},
 { id:"del", template:"{common.trashIcon()}", header:""}
],
scheme:{
$init:function(obj){
  const result = (obj.votes).match(/\d/g); 
  obj.votes = result ? (+result.join('')).toFixed() : 0; 
  obj.categoryId = Math.floor(Math.random() * 4) + 1;
  
}
},
url:"data/data.js",  scrollX:false,
onClick:{
"wxi-trash":function(e, id){
     this.remove(id);
     return false;
}
}
},
                form
            ]},
            {
              margin:20,
              padding:10,
              id:"Users view", 
                    rows:[userToolbar,
                      editlist,
                      chart
                    ]
                },
          productsTree,
          admin
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
      let value = this.getValue().toLowerCase();
      $$("editlist").filter(function(obj){
        return obj.name.toLowerCase().indexOf(value) !== -1;
      })
    });
    $$("removeButton").attachEvent("onItemClick",function(){var sel = $$("admindatatable").getSelectedId();
    if(sel)
    categories.remove(sel);});
    $$("addButton").attachEvent("onItemClick",function(){categories.add({value:"New category"})});


    // $$("newdatatable").attachEvent("onItemClick",function(){categories.add({value:"New category"})})

    $$("admindatatable").sync(categories);
  //   $$("newdatatable").sync(categories, function(){
  //     this.categoryId
  // });


console.log($$("newdatatable").data);

    //$$("newdatatable").categoryId).sync(categories);
    });  


    
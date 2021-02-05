// import {usersList} from './usersList.js';
// import {usersChart} from './usersChart.js';
import {userToolbar} from './userToolbar.js';
export let usersView = webix.ui({
    margin:20,
    padding:10,
    id:"Users view", 
          rows:[userToolbar,
            {
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
            },
            {  view:"chart", 
              id:"chart",
              type:"bar",
              border:true,
              value:"#name#",//Remoove
              yAxis:{},
              scheme:{
                $group:{
                  by:"country",
                  map:{
                    name:["name", "count"]//Remoove
                  }	
                }
              },
              xAxis:{
                title: "Country",
                template:"#country#"
              },

              // url:"data/users.js",  
              }
              ]
      });
$$("chart").sync($$("list"));
// $$("list").sync($$("chart"));
// $$("mydata").attachEvent("onAfterSelect", function(id){
//   var item  = this.getItem(id);
//   $$("myform").setValues(item);
// });
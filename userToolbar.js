import {users} from './data/users.js';

export let userToolbar = {
    view:"toolbar",
    id:"myToolbar",
    margin:20,
    height: 50,
    cols:[
      {view:"text", id:"list_input",css:"fltr"},
      {view:"button", 
      id:"sort_asc_button",
      value:"Sort asc", css:"webix_primary",
    width:120,  click:function(){
      $$('editlist').sort('#name#','asc');
        }
     },
      {view:"button", 
      id:"sort_desc_button",
      value:"Sort desc", css:"webix_primary",
      width:120, 
      click:function(){
        $$('editlist').sort('#name#','desc');
      }
     },
     { view:"button", value:"Add new",  css:"webix_primary", width:120, click:function(){
      $$("editlist").add({name:"Alan", age:25, country:"Germany"});
      console.log(users);
    }},]
};
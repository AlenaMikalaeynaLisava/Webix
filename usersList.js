export let usersList = {
  margin:20,
  padding:10,
  rows:[{
    margin:20,
    height: 50,
    cols:[
      {view:"text", id:"list_input",css:"fltr"},
      {view:"button", 
      id:"sort_asc_button",
      value:"Sort asc", css:"webix_primary",
    width:120,  click:function(){
      $$('list').sort('#name#','asc')}},
      {view:"button", 
      id:"sort_desc_button",
      value:"Sort desc", css:"webix_primary",
      width:120, click:function(){
        $$('list').sort('#name#','desc');
      } },
    ]
  },
    {view:"list",
    id:"list",
autoheight:false,
template:"#name# #age# from #country# <span class='wxi-close'></span>",
select:true,
url:"data/users.js",  
scrollX:false,
onClick:{
  "wxi-close":function(e, id){
    this.remove(id);
    return false;
  }
},
ready(){
  for (let i=0; i<5; i++){
    const id = this.getIdByIndex(i);
    switch(i) {
      case 0:  
      this.addCss(id, "red")
        break;
      case 1: 
      this.addCss(id, "yellow")
        break;
      case 2: 
      this.addCss(id, "green")
        break;
        case 3: 
      this.addCss(id, "silver")
        break;
        case 4: 
      this.addCss(id, "magenta")
        break;
    }
  }
}
}]
};


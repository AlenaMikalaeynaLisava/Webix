export let usersList = {
  view:"list",
    id:"list",
template:"#name# #age# from #country# <span class='webix_icon mdi mdi-close remove-icon' title='Remove'></span>",
select:true,
url:"data/users.js",  
onClick:{
  "remove-icon":function(e, id){
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
};


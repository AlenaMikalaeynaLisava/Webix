export let productsTree = {
    view:"treetable",
    id:"Products view",
    editable:true,
    select:"cell",// could be row
    columns:[
        { 
            id:"id",    
            header:"", 
        },
        { 
            id:"title",
            fillspace: true,
            header:"Title",
            editor:"text", 
            template:"{common.treetable()} #title#",
        },
        { 
            id:"price",   
            header:"Price",  
            editor:"text",
        },
    ],
    rules:{
        title:webix.rules.isNotEmpty,
        price:webix.rules.isNumber
    },    
    ready:function(){
        this.openAll();
      },
    url:"data/products.js",  
};

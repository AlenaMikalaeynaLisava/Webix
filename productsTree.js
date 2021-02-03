export let productsTree = {
    view:"treetable",
    id:"Products view",
    autowidth:true,
    select:"cell",// could be row
    columns:[
        { 
            id:"id",    
            header:"", 
        },
        { 
            id:"title",
            header:"Title", 
            width:500,
            template:"{common.treetable()} #title#",
        },
        { 
            id:"price",   
            header:"Price",  
        }
    ],
    ready:function(){
        this.openAll();
      },
    url:"data/products.js",  
};

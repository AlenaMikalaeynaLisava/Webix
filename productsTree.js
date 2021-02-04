export let productsTree = {
    view:"treetable",
    id:"Products view",
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
            template:"{common.treetable()} #title#",
        },
        { 
            id:"price",   
            header:"Price",  
        },
    ],
    ready:function(){
        this.openAll();
      },
    url:"data/products.js",  
};

webix.ready(function(){
    webix.ui({
        view:"window",
        id:"mywindow",
        position:"bottom",
        // head:"Settings",
        body:{
            view:"datatable",
            id:"mydatatable1",
            header:false,
            // columns:[
            //     // { id:"col1", header:"Title", hidden:true,  width:50}
            // ],
            scroll:false,
            title:false,
            autoConfig:true,
            data: [
                { id:1, title:"Settings"},
                { id:2, title:"Log out"}
            ]
        }
    })

    const firstRow = {
        view:"toolbar", 
        css:"webix_dark",
        cols:[
            {view:"button",
          id:"mybutton",
          value:"My App",
          css:"webix_transparent header_button"
            },
            {},
            { view:"button", id:"button1", type:"icon", icon:"wxi-user", label: "Profile",  css:"webix_transparent my_label", click:function(){
                $$("mywindow").show($$("button1"));
            }}
        ],
        gravity: 1
    }
    const secondRow = {
        cols:[
            {gravity: 2,
                css: "left_bar",
                rows:[
                { view:"list",
                scroll:false,
                id:"mylist",
                data:[ "Dashboard", "Users", "Products", "Locations"],
                css:"webix_list webix_list_item"
                },
                {view:"label", label:"<span class='my_span1'><span class='webix_icon wxi-check'></span> Connected</span>", css:"material, label_text-staff"}
            ]},
            { view:"resizer" },
            {
                gravity: 9,
                scrollY:true,
            view:"datatable",
            id:"mydatatable",
            autoConfig:true,
            data:small_film_set,
            scrollX:false 
              },
              {gravity: 4,
                view:"form", 
                id:"myform",
                autoheight: false,
                elements:[
                    { view:"template", template:"edit films", type:"section" },
                    { view:"text", label:"Title", name:"Title"},
                    { view:"text", label:"Year", name:"Year" },
                    { view:"text", label:"Rating", name:"Rating" },
                    { view:"text", label:"Votes",  name:"Votes"},
                    {cols:[
                        { view:"button", 
                         id:"add_button",
                         value:"Add new", css:"webix_primary", 
                        click:addItem 
                        },
                        { view:"button", 
                        id:"clear_button",
                        value:"Clear", 
                        click:clear_form}
                    ]}
                ]
            }
        ],
        gravity: 15
    }
    const thirdRow = {
        template: "html->my_box1",
        height: 40,
        gravity: 1,
        css:"template",
        
    }
    
    webix.ui({
        type:"line",
        rows:[ firstRow, secondRow, thirdRow]
    });
    
    function addItem(){
        const item_data = $$("myform").getValues();
        $$("mydatatable").add(item_data);
      };
    
    function clear_form(){
        $$("myform").clear();
      };


    });  
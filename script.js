webix.ready(function(){
    const firstRow = {
        view:"layout",
        css:"webix_dark",
        cols:[
            {view:"button",
          id:"mybutton",
          value:"My App",
          css:"header_button"
            },
            {},
            { view:"label", label:"<span class='my_span'><span class='webix_icon wxi-user'></span> Profile</span>", css:"material my_label"},
        ],
        gravity: 1
    }
    const secondRow = {
        cols:[
            {gravity: 2,
                css: "left_bar",
                rows:[
                { view:"list",
                // id:"film_list",
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
                rows:[
            {view:"datatable",
            id:"mydatatable",
            minHeight:450,
            autoConfig:true,
            data:small_film_set,
            scrollX:false},
            ]
                
              },
              {gravity: 4,
                view:"form", 
                id:"myform",
                autoheight: true ,
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
webix.ready(function(){
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
            {view:"button",
          id:"mybutton",
          value:"My App",
          css:"webix_transparent header_button"
            },
            {},
            { view:"button", id:"button1", type:"icon", icon:"wxi-user", label: "Profile",  css:"webix_transparent my_label", click:function(){
                $$("mywindow").show($$("button1").getNode());
            }}
        ],
    }

    const secondRow = {
        cols:[
            {gravity: 2,
                css: "left_bar",
                rows:[
                { view:"list",
                borderless:true,
                scroll:false,
                id:"mylist",
                data:[ "Dashboard", "Users", "Products", "Locations"],
                css:"webix_list1"
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
                elements:[
                    { view:"template", template:"edit films", type:"section" },
                    { view:"text", label:"Title", name:"title", invalidMessage:"Title should be entered"},
                    { view:"text", label:"Year", name:"year", invalidMessage:"Enter year between 1970 and 2021" },
                    { view:"text", label:"Votes",  name:"votes", invalidMessage:"Votes must be less than 100000"},
                    { view:"text", label:"Rating", name:"rating", invalidMessage:"Enter non zero rating, please" },
                    {cols:[
                        { view:"button", 
                         id:"add_button",
                         value:"Add new", css:"webix_primary", 
                         click:function(){
                            if($$("myform").validate()){
                                var item = $$("myform").getValues();
                                console.log(item);
                                $$("mydatatable").add(item);
                                webix.message({text:"validation is successful"})
                                // $$("mywindow1").show()
                            } 
                          }},
                        { view:"button", 
                        id:"clear_button",
                        value:"Clear", 
                        click:clear_form}
                    ]},
                    {}
                ],
                    rules:{
                        title:webix.rules.isNotEmpty,
                        year:function(value){
                            return value>1970 && value <2021;
                          },
                        votes:function(value){
                            return value<100000;
                        },
                        rating: function(value){
                            return value!=0 && webix.rules.isNotEmpty;
                        }
                   },
                   on:{
                    onValidationError:function(key){
                      webix.message({text:key+" field is incorrect", type:"error"});
                    }
                     }
            }
        ]
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
      
    function clear_form(){
            webix.confirm({
                title:false,
                text:"Do you want to clear the form?"
              }).then(
                function(){
                  $$("myform").clear();
                  $$("myform").clearValidation();
                }, 
                function(){
                  webix.message("Rejected");
                }
              );
      };
    });  
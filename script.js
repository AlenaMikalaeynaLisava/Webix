const firstRow = {
    view:"layout",
    gravity: 1,
    css:"webix_dark",
    cols:[
        {view:"button",
			id:"mybutton",
			value:"My App",
			css:"webix_transparent",//color of letters
        },
        {},
        { view:"label", label:"<span class='something'><span class='webix_icon wxi-user'></span> Profile</span>", css:"material"},
    ]
}
const secondRow = {
    fillspace:true,
    autoheight: true,
    cols:[
        {
            rows:[
            { view:"list",
            autoheight: true ,
            id:"mylist",
            data:[ "Dashboard", "Users", "Products", "Locations"]
            },
            {},
            {view:"label", label:"<span class='something1'><span class='webix_icon wxi-check'></span> Connectad</span>", css:"material"}
        ]},
        {
            view:"datatable",
            autoheight:true,
            scrollY:false,
            autoConfig:true,
            data:small_film_set
          },
          {
            view:"form", 
            autoheight: true ,
            elements:[
                { view:"text", label:"Title" },
                { view:"text", label:"Year" },
                { view:"text", label:"Rating" },
                { view:"text", label:"Votes" },
                {cols:[
                    { view:"button", value:"Add new", css:"webix_primary" },
                    { view:"button", value:"Clear" }
                ]}
            ]
        }
    ]
}
const thirdRow = {
    template: "html->my_box1", autoheight: true,
    gravity: 1
}

webix.ui({
    container:"box",
    rows:[ firstRow, secondRow, thirdRow]
});
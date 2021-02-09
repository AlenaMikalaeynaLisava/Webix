
export let admin ={
  id: "Admin",
rows:[
  { view:"toolbar", cols:[
    { view:"button",id:"addButton", value:"Add new", 
    },
      { view:"button", id:"removeButton", value:"Remove selected", 
    },
    {gravity:2}
  ]}, 
  {
    view:"datatable", 
    id: "admindatatable",
    select:"row", editable:true, editaction:"click",
    columns:[
      {id:"id", header:"",  css:{"background":"#F4F5F9"}},
      {id:"value", editor:"text", header:"Film category", fillspace: true},
    ],
  }
]
}
;

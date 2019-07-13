function dependancyView(){
    var len = undefined;

    var nodes = [{id: 0, label: "Cargo Lamps", group: "data"},
        {id: 1, label: "GMBSW", group: 0},
        {id: 2, label: "Vehicle State", group: 0},
        {id: 3, label: "Entry Control", group: 0},
        {id: 4, label: "Ambient Lamp", group: 0},
        {id: 5, label: "Reverse Lamp", group: 0},
        {id: 6, label: "BSP", group: 0},
        {id: 7, label: "User Selected Lamp", group: 0},
        {id: 8, label: "Emergency Lamp", group: 0},
       
    ];
    var edges = [{from: 1, to: 0},
        {from: 2, to: 0},
        {from: 3, to: 0},
        {from: 4, to: 0},
        {from: 5, to: 0},
        {from: 6, to: 0},
        {from: 7, to: 0},
        {from: 8, to: 0}
     
    ]

    // create a network
    var container = document.getElementById('dependancy-block');
    var data = {
        nodes: nodes,
        edges: edges
    };
    var options = {
        nodes: {
            shape: 'dot',
            size: 40,
            font: {
                size: 18,
               
            },
            borderWidth: 2,
            // color:true
        },
        edges: {
            width: 2,
            length:250,
            shadow:true
          
           
        },
        groups: {
            data: {
                color: {background:'#d4ca76',border:'white'},
                // shape: 'diamond'
            },
            0:{
                color: {background:'#d47676',border:'white'}, 
            }
    }
};
    network = new vis.Network(container, data, options);
}
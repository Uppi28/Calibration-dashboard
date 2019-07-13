function treeView() {
  const text ="./DRL.csv";

    const treeData = [
        {
          name: 'DRL',
          parent: 'null',
          children: [
            {
              name: 'Selctable DRL',
              parent: 'DRL',
              children: [
                {
                  name: 'DRL_PL',
                  parent: 'Selctable DRL'
                },
                {
                  name: 'DRL_PB',
                  parent: 'Selctable DRL'
                },
                {
                  name: 'DRL_PS',
                  parent: 'Selctable DRL'
                }
              ]
            },
            {
              name: 'Forced DRL',
              parent: 'DRL'
            },
            {
              name: 'NO DRL',
              parent: 'DRL'
            }
          ]
        }
];
      
    const margin = {
        top: 20,
      right: 120,
        bottom: 20,
         left: 120
    };
    const	width = 960 - margin.right - margin.left;
    const height = 500 - margin.top - margin.bottom;
    let i = 0;
    const	duration = 750;
    let root;
    const tree = d3.layout.tree().size([height, width]);
    
    const diagonal = d3.svg.diagonal()
    .projection((d) => {return [d.y, d.x];
    });
    
    const svg = d3.select('#tree-block').append('svg')
    .attr('width', width + margin.right + margin.left)
    .attr('height', height + margin.top + margin.bottom)
    .append('g')
    .attr('transform', 'translate(' + margin.left + ',' + margin.top + ')');
    
    root = treeData[0];
    root.x0 = height / 2;
    root.y0 = 0;
    
    update(root);
    
    d3.select(self.frameElement).style('height', '500px');
    
    function update(source) {
    
      // Compute the new tree layout.
    const nodes = tree.nodes(root).reverse();
    const links = tree.links(nodes);
    
      // Normalize for fixed-depth.
    nodes.forEach((d) => { d.y = d.depth * 180; });
    
      // Update the nodes…
    const node = svg.selectAll('g.node')
    .data(nodes, (d) => { return d.id || (d.id = ++i);
    });
    
      // Enter any new nodes at the parent's previous position.
    const nodeEnter = node.enter().append('g')
    .attr('class', 'node')
    .attr('transform', (d) => {
    return 'translate(' + source.y0 + ',' + source.x0 + ')'; })
    .on('click', click);
    
    nodeEnter.append('circle')
    .attr('r', 1e-6)
    .style('fill', (d) => {
      return d._children ? 'lightsteelblue' : '#fff'; });
    nodeEnter.append('text')
    .attr('x', (d) => {
    return d.children || d._children ? -13 : 13; })
    .attr('dy', '.35em')
    .attr('text-anchor', (d) => {
    return d.children || d._children ? 'end' : 'start'; })
    .text((d) => {
    return d.name; })
    .style('fill-opacity', 1e-6);
    
      // Transition nodes to their new position.
    const nodeUpdate = node.transition()
    .duration(duration)
    .attr('transform', (d) => {
      return 'translate(' + d.y + ',' + d.x + ')'; });
    nodeUpdate.select('circle')
    .attr('r', 10)
    .style('fill', (d) => {
    return d._children ? 'lightsteelblue' : '#fff'; });
    nodeUpdate.select('text')
    .style('fill-opacity', 1);
    
    // Transition exiting nodes to the parent's new position.
    const nodeExit = node.exit().transition()
    .duration(duration)
    .attr('transform', (d) => {
      return 'translate(' + source.y + ',' + source.x + ')'; })
    .remove();
    nodeExit.select('circle')
    .attr('r', 1e-6);
    nodeExit.select('text')
    .style('fill-opacity', 1e-6);
    
      // Update the links…
    const link = svg.selectAll('path.link')
    .data(links, (d) => {
      return d.target.id; });
    
      // Enter any new links at the parent's previous position.
    link.enter().insert('path', 'g')
    .attr('class', 'link')
    .attr('d', (d) => {
    const o = {x: source.x0, y: source.y0};
    return diagonal({source: o, target: o});
    });
    
      // Transition links to their new position.
    link.transition()
    .duration(duration)
    .attr('d', diagonal);
    
      // Transition exiting nodes to the parent's new position.
    link.exit().transition()
    .duration(duration)
    .attr('d', (d) => {
    const o = {x: source.x, y: source.y};
    return diagonal({source: o, target: o});
    })
    .remove();
    
      // Stash the old positions for transition.
    nodes.forEach((d) => {
    d.x0 = d.x;
    d.y0 = d.y;
      });
    }
    
    // Toggle children on click.
    function click(d) {
      console.log(d);
      if (d.children) {
    d._children = d.children;
    d.children = null;
    // nodata();
    console.log(d._children);
   
    } else if (d._children == null) {
      // console.log(d._children.name);
      console.log(d);
      display(d);
    display();
      }
      else{
        d.children = d._children;
        d._children = null;
        // console.log(d.children.name);
        // nodata()
      }
      update(d);
    }
   function display(d) 
    {
      // console.log(d.name);
      // console.log(d.parent);
      // console.log(d.parent.children);
      let newArray =[];
      let parentArray =[];
      // remainedChildren =[];
      let selectedName;
      newArray = d.parent.children;
     let newObj= newArray.filter(res =>{
       return  res.name === d.name
      })
      console.log(newObj)
      newObj.map(res =>{
        console.log(res.name);
        selectedName = res.name;

console.log(res.parent.children);
res.parent.children.forEach(res =>{
  console.log(res.name);
  parentArray.push(res.name);
})
// let objs =res.parent.children.map(res =>{
//   let obj ={
//     name :''
//   }
//   obj.name = res.name;
//   return obj;

// })
// parentArray.push(objs);

      })
      console.log(parentArray);
      var index = parentArray.indexOf(selectedName);
if (index !== -1) parentArray.splice(index, 1);
console.log(parentArray);

      // console.log(newObj.name);

      // d.parent.forEach(res =>{
      //   console.log(res);
      // })
      // <input type="button" value="Generate Table" onclick="GenerateTable()" />
      // <hr />
      // <div id="dvTable">
      // console.log(d._children);
      // </div>
          // function GenerateTable() {
              //Build an array containing Customer records.
              var customers = new Array();
              customers.push(["cal_Name", `cal_value_${selectedName}`, `cal_value_${parentArray[0]}`,`cal_value_${parentArray[1]}`,"SSLE_notes"]);
              customers.push(["cal1_EL", "true", "true","true","-"]);
              customers.push(["cal2_EL", "1", "1" ,"1","-"]);
              customers.push(["cal3_EL", "0", "0","0","-"]);
              customers.push(["cal4_EL", "400", "400","400","-"]);
              customers.push(["cal5_EL", "0.001", "0.001","0.001","-"]);
  
              //Create a HTML Table element.
              var table = document.createElement("TABLE");
              // table.border = "1";
  
              //Get the count of columns.
              var columnCount = customers[0].length;
  
              //Add the header row.
              var row = table.insertRow(-1);
              for(var i = 0; i < columnCount; i++) {
                  var headerCell = document.createElement("TH");
                  headerCell.innerHTML = customers[0][i];
                  row.appendChild(headerCell);
              }
  
              //Add the data rows.
              for (var i = 1; i < customers.length; i++) {
                  row = table.insertRow(-1);
                  for (var j = 0; j < columnCount; j++) {
                      var cell = row.insertCell(-1);
                      cell.innerHTML = customers[i][j];
                  }
              }
  
              var dvTable = document.getElementById("dvTable");
              dvTable.innerHTML = "";
              dvTable.appendChild(table);
         
        
    }

    }
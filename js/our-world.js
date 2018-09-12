const ourWorld = () => {
  const margin = 10;
  let earth = d3.select("#our-world");
  let diameter = +earth.attr("width");
  let g = earth.append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

  let pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(5);

  let color = d3.scaleSequential(d3.interpolateBlues)
    .domain([1, 100]);

	d3.json("data/main-data.json").then((data) => {

    // constructing a data format to be used at d3.hierarchy
    let asia = [], africa = [], europe = []; 
    let na = [], sa = [], oceania = [];

    data[1]["detail"].forEach(function(d) {
      if (d.continent ===  "Asia") {
        asia.push({name: d.country, size: Number(d.population)});
      }
      if (d.continent ===  "Africa") {
        africa.push({name: d.country, size: Number(d.population)});
      }
      if (d.continent ===  "Europe") {
        europe.push({name: d.country, size: Number(d.population)});
      }
      if (d.continent ===  "North America") {
        na.push({name: d.country, size: Number(d.population)});
      }
      if (d.continent === "South America") {      
        sa.push({name: d.country, size: Number(d.population)});
      }
      if (d.continent === "Oceania") {      
        oceania.push({name: d.country, size: Number(d.population)});
      }

    const mod_data = {
      name: "Our World",
      children: [
        { name: "Asia",
        children: asia },
        { name: "Africa",
          children: africa },
        { name: "Europe",
          children: europe },
        { name: "North America",
          children: na },
        { name: "South America",
          children: sa },
        { name: "Oceania",
          children: oceania },
      ]
    };

    let root = d3.hierarchy(mod_data)
      .sum((d) => { return d.size; })
      .sort((a, b) => { return b.value - a.value; });
 
    let focus = root;
    let nodes = pack(root).descendants(); 
    let view;
    
    let circle = g.selectAll("circle")
      .data(nodes)
      .enter().append("circle")
        .attr("class", (d) => { 
          if (d.parent) {
            if (d.children) {
              return 'node';
            } else {
              return 'node node-leaf';
            }
          } else {
            return 'node-root';
          }
        })
        .style("fill", (d) => { return d.children ? color(d.depth) : null; });
        // .on("click", (d) => { 
        //   if (focus !== d) zoom(d), d3.event.stopPropagation(); });

    console.log(circle);

    let text = g.selectAll("text")
      .data(nodes)
      .enter().append("text")
        .attr("class", "label")
        .style("fill-opacity", (d) => { return d.parent === root ? 1 : 0; })
        .style("display", (d) => { return d.parent === root ? "inline" : "none"; })
        .text((d) => { return d.data.name; });

    let node = g.selectAll("circle,text");

    earth
      .style("background", color(-1));
      // .on("click", () => { zoom(root);});

    // zoomTo([root.x, root.y, root.r * 2 + margin]);

// const zoom = (d) => {
//   let focus0 = focus;
//   focus = d;

//   let transition = d3.transition()
//     .duration(d3.event.altKey ? 7500 : 750)
//     .tween("zoom", (d) => {
//       let i = d3.interpolateZoom(view, [focus.x, focus.y, focus.r * 2 + margin]);
//       return (t) => { zoomTo(i(t)); };
//     });

//   transition.selectAll("text")
//     .filter(function (d) {
//       return d.parent === focus || this.style.display === "inline"; })
//     .style("fill-opacity", function (d) {
//       return d.parent === focus ? 1 : 0; })
//     .on("start", function (d) {
//       if (d.parent === focus) this.style.display = "inline"; })
//     .on("end", function (d) {
//       if (d.parent !== focus) this.style.display = "none"; });
//   };

    // function zoomTo(v) {
    //   var k = diameter / v[2];
    //   view = v;
    //   node.attr("transform", function (d) {
    //     return "translate(" + (d.x - v[0]) * k + "," + (d.y - v[1]) * k + ")";
    //   });
    //   circle.attr("r", function (d) {
    //     return d.r * k;
    //   });
    // }
    });
  });

};

// ourWorld();
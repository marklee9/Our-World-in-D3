const pieChart = () => {
  // Constants
  let width = 1000;
  let height = 800;
  let radius = 400;
  let color = d3.scaleOrdinal(d3.schemePastel1);

  // Selecting div
  let chart = d3.select("#pie-chart-area")
    .append("svg")
      .attr("width", width)
      .attr("height", height);

  d3.json("data/main-data.json").then((data) => {
    let dataOfInterest = data[0].byContinents.map((d)=> {
      d.population = Number(d.population);
      return d;
    });

    // taking each data to invoke update function.
    update(dataOfInterest);
  });

  const update = (data) => {
    let pie = d3.pie()
      .sort(null)
      .value(d => d.population)(data);
  
    // All Pie chart property
    let arcs = d3.arc()
      .innerRadius(100)
      .outerRadius(300)
      .padAngle(0.1)
      .padRadius(50)
      .cornerRadius(20);
  
    // Pie slice
    let sections = chart.append("g")
      .attr("transform", "translate(400, 400)")
      .selectAll("path")
      .data(pie);
  
    sections.enter().append("path")
      .attr("d", (d) => arcs(d))
      .attr("fill", (d) => color(d.data.continent));

    // Legends
    let legends = chart.append("g")
      .attr("transform", "translate(750, 500)")
      .selectAll(".legends")
      .data(pie);
    
    let legend = legends.enter()
      .append("g")
      .classed("legends", true)
      .attr("transform", (d,i) => "translate(0, " + ((i + 1) * 30) + ")");
      
    legend.append("rect")
      .attr("width", 20)
      .attr("height", 20)
      .attr("fill", (d) => color(d.data.continent));

    legend.append("text")
      .attr("x", 30)
      .attr("y", 15)
      .text((d) => d.data.continent);
  };
};

pieChart();
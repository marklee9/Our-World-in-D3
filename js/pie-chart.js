const pieChart = () => {
  let width = 800;
  let height = 800;
  let radius = 400;
  let color = d3.scaleOrdinal(d3.schemePastel1);

  let chart = d3.select("#pie-chart-area")
    .append("svg")
      .attr("width", width)
      .attr("height", height);

  d3.json("data/main-data.json").then((data) => {
    let dataOfInterest = data[0].byContinents.map((d)=> {
      d.population = Number(d.population);
      return d;
    });

    update(dataOfInterest);
  });

  const update = (data) => {
    let pie = d3.pie()
      .sort(null)
      .value(d => d.population)(data);
  
    let arcs = d3.arc()
      .innerRadius(100)
      .outerRadius(300)
      .padAngle(0.1)
      .padRadius(50)
      .cornerRadius(20);
  
    let sections = chart.append("g")
      .attr("transform", "translate(400, 400)")
      .selectAll("path")
      .data(pie);
  
    sections.enter().append("path")
      .attr("d", (d) => arcs(d))
      .attr("fill", (d) => color(d.data.continent));

    let legends = chart.append("g")
      .attr("transform", "translate(600, 600)")
      .selectAll(".legends").data(pie);
  };
};

pieChart();


  // let width = 800;
  // let height = 800;
  // let radius = 400;

  // let arc = d3.arc()
  //   .outerRadius(radius)
  //   .innerRadius(100)
  //   .startAngle(0)
  //   .endAngle(Math.PI / 2);

  // let pie = d3.pie()
  //   .value(d => d.population)
  //   .sort(null);

  // let pieChart = d3.select("#pie-chart-area").append("svg")
  //   .attr("width", width)
  //   .attr("height", height)
  //   .append("g")
  //   .attr("transform", "translate(400, 400)");

  // const type = (d) => {
  //   d.population = Number(d.population);
  //   return d;
  // };

  // let color = d3.scaleOrdinal(d3.schemePastel1);

  // d3.json("data/main-data.json", type).then((data) => {
  //   data[0].byContinents.forEach((datum) =>
  //     updatePie(datum)
  //   );
  // });


  // const updatePie = (datum) => {
  //   // Joining Data
  //   let path = pieChart.selectAll(".path")
  //     .data(pie(datum.population));

  //   path.exit().remove();

  //   // Enter new data
  //   path.enter().append("path")
  //     .attr("class", "path")
  //     .attr("fill", (d) => color(d))
  //     .attr("d", arc);
  // };
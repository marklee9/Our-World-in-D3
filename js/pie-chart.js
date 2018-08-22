width = 800;
height = 800;
let radius = 400;

let arc = d3.arc()
  .outerRadius(radius)
  .innerRadius(100)
  .startAngle(0)
  .endAngle(Math.PI / 2);

let pie = d3.pie()
  .value(d => d.population)
  .sort(null);

let pieChart = d3.select("#pie-chart-area").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
    .attr("background-color", "pink")
    .attr("transform", "translate(400, 400)");

const type = (d) => {
  d.population = Number(d.population);
  return d;
};

let color = d3.scaleOrdinal(d3.schemePastel1);

d3.json("data/main-data.json", type).then((data) => { 
  // Joining Data
  let path = pieChart.selectAll("path")
    .data(pie(data[0]));

  // Delete old data
  path.exit().remove();  

  // Enter new data
  path.enter().append("path")
    .attr("class", "path")
    .attr("fill", (d) => color(d))
    .attr("d", arc);
 });
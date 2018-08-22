width = 800;
height = 800;
let radius = 400;

let arc = d3.arc()
  .outerRadius(radius)
  .innerRadius(100);

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

d3.json("data/data.json", type).then((data) => { 
  console.log(data);
 });

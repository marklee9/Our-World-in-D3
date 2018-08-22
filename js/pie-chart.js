width = 800;
height = 800;
let radius = 400;

let arc = d3.arc()
  .outerRadius(radius - 10)
  .innerRadius(100);

let pie = d3.select("#pie-chart-area").append("svg")
  .attr("width", width)
  .attr("height", height)
  .append("g")
    .attr("background-color", "pink")
    .attr("transform", "translate(400, 400)");
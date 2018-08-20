
// let data = [10, 20, 30, 40, 50, 60, 70];

//Loading external data.

// This then promise is useful when you want to manipulate the data.
let svg = d3.select('#chart-area')
  .append("svg")
    .attr("width", "500")
    .attr("height", "500");

d3.json("data/buildings.json").then((data) => {
  
  data.forEach(d => {
    d.height = Number(d.height);
  });

  let y = d3.scaleLinear()
    .domain([0, 828])
    .range([0,400]);

  let rect = svg.selectAll("rect")
    .data(data)
      .enter()
      .append("rect")
      .attr("y", 20);
// This will show you the error what went wrong.
}).catch((error) => {
  console.log(error);
});


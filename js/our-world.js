const ourWorld = () => {
  let earth = d3.select("#our-world"),
    margin = 10,
    diameter = +earth.attr("width"),
    g = earth.append("g")
      .attr("transform", "translate(" + diameter / 2 + "," + diameter / 2 + ")");

  let pack = d3.pack()
    .size([diameter - margin, diameter - margin])
    .padding(5);

  let color = d3.scaleSequential(d3.interpolateBlues)
    .domain([1, 100]);

	d3.json("data/main-data.json").then((data) => {

    // constructing a data format to be used at d3.hierarchy
    let asia = {}, africa = {}, europe = {}; 
    let na = {}, sa = {}, oceania = {};

    console.log(data[1]["detail"]);
    data[1]["detail"].forEach((d) => {
      switch (d.continent) {
        case "Asia":
          asia["name"] = d.country;
          asia["size"] = d.population;
      }
    });
  });

};

ourWorld();
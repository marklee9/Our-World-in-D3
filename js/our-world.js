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
    let asia = [], africa = [], europe = []; 
    let na = [], sa = [], oceania = [];

    data[1]["detail"].forEach(function(d) {
      if (d.continent ===  "Asia") {
        asia.push({name: d.country, size:d.population});
      }
      if (d.continent ===  "Africa") {
        africa.push({name: d.country, size:d.population});
      }
      if (d.continent ===  "Europe") {
        europe.push({name: d.country, size:d.population});
      }
      if (d.continent ===  "North America") {
        na.push({name: d.country, size:d.population});
      }
      if (d.continent === "South America") {      
        sa.push({name: d.country, size:d.population});
      }
      if (d.continent === "Oceania") {      
        oceania.push({name: d.country, size:d.population});
      }

    root = d3.hierarchy(root)
      .sum(function(d) { return d.size; })
      .sort(function(a, b) { return b.value - a.value; });

    });
  });

};

ourWorld();
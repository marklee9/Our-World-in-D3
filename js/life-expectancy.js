const lifeExpectancy = () => {
	let margin = {left: 80, right: 0, top: 10, bottom: 80};
	let width = 800 - margin.left - margin.right;
	let height = 600 - margin.top - margin.bottom; 

	let svg = d3.select("#chart-area")
		.append("svg")
			.attr("width", width + margin.left + margin.right)
			.attr("height", height + margin.top + margin.bottom)
		.append("g")
			.attr("transform", "translate(" + margin.left + "," + margin.top + ")");

// Adding mouse following tooltip
  let tooltip = d3.select("#chart-area")
  	.append("div")
  	.classed("tooltip", true);
  tooltip.append("div")
  	.classed("countryName", true);
  tooltip.append("div")
  	.classed("eachPopulation", true);
  tooltip.append("div")
		.classed("lifeExpectancy", true);
		
	// X scale
	let x = d3.scaleLog()
		.domain([500, 15000000000])
		.range([0, width])
		.base(10);

	// Y scale
	let y = d3.scaleLinear()
		.domain([0, 90])
		.range([height, 0]);

	// X axis
	let xAxis = d3.axisBottom(x)
		.tickValues([1000, 10000, 100000, 1000000, 10000000, 100000000, 1000000000, 1000000000])
		.tickFormat((d) => {
			if (d < 1000000) {
				return String(d / 1000) + "k";
			} else if (d < 1000000000) {
				return String(d / 1000000) + " mil";
			} else {
				return String(d / 1000000000) + " bil";
			}
		});
	svg.append("g")
		.attr("class", "bot-axis")
		.attr("transform", "translate(0 ," + height + ")")
		.call(xAxis);

	// Y axis
	let yAxis = d3.axisLeft(y)
		.tickFormat((d) => {
			return d;
		});
	svg.append("g")
		.attr("class", "left-axis")
		.call(yAxis);

	// X Label
	let xLabel = svg.append("text")
		.attr("x", width/2 - 100)
		.attr("y", height + 50)
		.attr("font-size", "20px")
		.text("Total Population");

	// Y Label
	let yLabel = svg.append("text")
		.attr("transform", "rotate(-90)")
		.attr("y", -40)
		.attr("x", -250)
		.attr("font-size", "20px")
		.attr("text-anchor", "middle")
		.text("Average Life Expectancy");

	let year = svg.append("text")
		.attr("y", height - 10)
		.attr("x", width - 40)
		.attr("font-size", "40px")
		.attr("opacity", "0.5")
		.attr("text-anchor", "middle")
		.text("1800");
		
	// Time constant
	let time = 0;

	// Color
	let pastelColor1 = d3.scaleOrdinal(d3.schemePastel1);
	let pastelColor2 = d3.scaleOrdinal(d3.schemePastel1);

	// Legend
	let legend = svg.append("g")
		.attr("transform", "translate(" + (width - 10) + "," + (height - 500) + ")");
	let continents = ["africa", "americas", "europe", "asia"];

	continents.forEach((continent, i) => {
		let row = legend.append("g")
			.attr("transform", "translate(0, " + (i * 20) + ")");
		row.append("rect")
			.attr("border-radius", "50%")
			.attr("width", 10)
			.attr("height", 10)
			.attr("fill", (d) => pastelColor2(continent));
		row.append("text")
			.attr("x", -10)
			.attr("y", 10)
			.attr("text-anchor", "end")
			.text(continent)
			.style("text-transform", "capitalize");
	});

	d3.json("data/data.json").then((data) => {
		let mappedData = data.map((byYear) => {
			return byYear["countries"].filter((d) => d.life_exp);
		});

		d3.interval(() => {
			time = (time < 214) ? time + 1 : 0;
			updateDots(mappedData[time]);
		}, 200);

		updateDots(mappedData[0]);
	});

	const updateDots = (data) => {
		// Joining Data
		let dots = svg.selectAll("circle")
		.data(data, (d) => d.country);
		
		// Delete old dots
		dots.exit().remove();
		
		// transition time set to 0.2 sec
		let t = d3.transition().duration(300);
		
		// Enter
		dots.enter()
			.append("circle")
				.on("mouseover", mouseover)
				.on("mousemove", mousemove)
				.on("mouseleave", mouseleave)
				.attr("fill", (d) => pastelColor1(d.continent))
				.merge(dots)
				.transition(t)
				.attr("cy", (d) => y(d.life_exp))
				.attr("cx", (d) => x(d.population))
				.attr("r", "7px");

		function mouseover(d) {
			tooltip.attr("hidden", null); 
				d3.select(".countryName")
					.html(d.country);
				d3.select(".eachPopulation")
					.html("P: " + d.population.toLocaleString());
				d3.select(".lifeExpectancy")
					.html("LE: " + d.life_exp);
		}

		function mousemove(d) {
			tooltip
				.style("left", d3.event.pageX + "px")
				.style("top", d3.event.pageY + "px");
		}

		function mouseleave() {
			tooltip.attr("hidden", true);
		}

		year.text(time + 1803);
	}; 	 
};

lifeExpectancy();
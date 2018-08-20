let margin = {left: 100, right: 10, top: 10, bottom: 100};
let width = 800 - margin.left - margin.right;
let height = 600 - margin.top - margin.bottom; 

let svg = d3.select("#chart-area")
	.append("svg")
		.attr("width", width + margin.left + margin.right)
		.attr("height", height + margin.top + margin.bottom);


d3.json("data/data.json").then(function(data){
	



});
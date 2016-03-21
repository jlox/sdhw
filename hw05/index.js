var republicans = [
    {state: "Alabama", count: 50, allocated: 49},
    {state: "Alaska", count: 28, allocated: 28},
    {state: "Arizona", count: 58, allocated: 0},
    {state: "Arkansas", count: 40, allocated: 30},
    {state: "California", count: 172, allocated: 0},
    {state: "Colorado", count: 37, allocated: 0},
    {state: "Connecticut", count: 28, allocated: 0},
    {state: "Delaware", count: 16, allocated: 0},
    {state: "Florida", count: 99, allocated: 99},
    {state: "Georgia", count: 76, allocated: 60},
    {state: "Hawaii", count: 19, allocated: 18},
    {state: "Idaho", count: 32, allocated: 32},
    {state: "Illinois", count: 69, allocated: 69},
    {state: "Indiana", count: 57, allocated: 0},
    {state: "Iowa", count: 30, allocated: 16},
    {state: "Kansas", count: 40, allocated: 34},
    {state: "Kentucky", count: 46, allocated: 39},
    {state: "Louisiana", count: 46, allocated: 36},
    {state: "Maine", count: 23, allocated: 23},
    {state: "Maryland", count: 38, allocated: 0},
    {state: "Massachusets", count: 42, allocated: 26},
    {state: "Michigan", count: 59, allocated: 59},
    {state: "Minnesota", count: 38, allocated: 21},
    {state: "Mississippi", count: 40, allocated: 37},
    {state: "Missouri", count: 52, allocated: 52},
    {state: "Montana", count: 27, allocated: 0},
    {state: "Nebraska", count: 36, allocated: 0},
    {state: "Nevada", count: 30, allocated: 21},
    {state: "New Hampshire", count: 23, allocated: 18}, 
    {state: "New Jersey", count: 51, allocated: 0},
    {state: "New Mexico", count: 24, allocated: 0},
    {state: "New York", count: 95, allocated: 0},
    {state: "North Carolina", count: 72, allocated: 65},
    {state: "North Dakota", count: 28, allocated: 0},
    {state: "Ohio", count: 66, allocated: 66},
    {state: "Oklahoma", count: 43, allocated: 28},
    {state: "Oregon", count: 28, allocated: 0},
    {state: "Pennsylvania", count: 71, allocated: 0},
    {state: "Rhode Island", count: 19, allocated: 0},
    {state: "South Carolina", count: 50, allocated: 50},
    {state: "South Dakota", count: 29, allocated: 0}
    {state: "Tennessee", count: 58, allocated: 49},
    {state: "Texas", count: 155, allocated: 152},
    {state: "Utah", count: 40, allocated: 0},
    {state: "Vermont", count: 16, allocated: 16}, 
    {state: "Virginia", count: 49, allocated: 30},
    {state: "Washington", count: 44, allocated: 0},
    {state: "West Virginia", count: 34, allocated: 0},
    {state: "Wisconsin", count: 42, allocated: 0},
    {state: "Wyoming", count: 29, allocated: 10},
];

var textWithBreaks = function(d) {
    var bar = d3.select(this);
    var words = d.state + " | Total: " + d.count + "\n" + " | Allocated: " + d.allocated + "\n" + " | Not Allocated: " + (d.count - d.allocated);
    words = words.split("\n");
    bar.text('');
    for (var i = 0; i< words.length; i++) {
        var tspan = bar.append('tspan').text(words[i]);
        if (i > 0) { 
            tspan.attr('x', 0).attr('dy', '15');
        }
    }
};

d3.select(".chart")
    .selectAll("div")
    .data(republicans)
    .enter().append("div")
    .style("width", function(d) {
	   return d.count * 7 + "px";
    })
    .style("background-color", function(d) {
        if (d.allocated != 0) {
            return "red";
        } else {
            return "#B0171F";
        }
    })
    .each(textWithBreaks);


//var data = [4, 8, 15, 16, 23, 42];
//var chart = d3.select(".chart");
//var bar = chart.selectAll("div");
//var barUpdate = bar.data(data);
//var barEnter = barUpdate.enter(). append("div");
//barEnter.style("width", function(d){return d * 10 + "px"});
//barEnter.text(function(d){return d;});

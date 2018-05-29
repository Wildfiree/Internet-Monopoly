const duration = 250;

//layout conf.
var svgWidth = 1000, 
    svgHeight = 500,
    margin = { top: 10, right: 10, bottom: 10, left: 10 },
    halfSpaceBetween = { header: 15, circle: 15, slope: 5 },
    width = svgWidth - margin.left - margin.right,
    headerHeight = 20,
    footerHeight = 20,
    height = svgHeight - headerHeight - footerHeight - margin.top - margin.bottom,
    halfWidth = width / 2,
    halfHeight = height / 2,
    quarterWidth = width / 4,
    quarterHeight = height / 4;
//beeswarm conf.
var yPosScale = d3.scaleLinear();
var xPosScale = d3.scaleLinear();
var svg, drawingArea, header, footer, axisContainer, avgContainer, medianContainer, trendContainer, circleContainer, tooltip;
    
//initLayout
function initLayout() {
    svg = d3.select("svg")
        .attr("width", svgWidth)
        .attr("height", svgHeight);

    drawingArea = svg.append("g")
        .classed("drawingArea", true)
        .attr("transform", "translate(" + [margin.left + halfWidth, margin.top] + ")");
    
    var graphContainer = drawingArea.append("g")
        .attr("transform", "translate(" + [0, headerHeight] + ")")

    axisContainer = graphContainer.append("g").attr("id", "axis-container");
    // drawAxis()
    trendContainer = graphContainer.append("g").attr("id","trend-container");
    circleContainer = graphContainer.append("g").attr("id", "circle-container");

    tooltip = d3.select("body").append("div")
        .attr("class", "tooltip")
        .style("opacity", 0);
}

function drawAxis() {
    var lineHalfWidth = halfWidth - halfWidth / 4,
        labelMargin = 5;

    var ticks = axisContainer.selectAll(".tick")
        .data(d3.range(numExtent[0], numExtent[1], 20000))
        .enter()
        .append("g")
        .classed("tick", true)
        .attr("transform", (d) => { return "translate(" + [0, yPosScale(+d)] + ")"; })
    ticks.append("line")
        .attr("x1", -lineHalfWidth)
        .attr("y1", 0)
        .attr("x2", lineHalfWidth)
        .attr("y2", 0);
    ticks.append("text")
        .classed("tiny light", true)
        .attr("transform", "translate(" + [lineHalfWidth + labelMargin, 3] + ")")
        .attr("text-anchor", "start")
        .text((d) => { return (d === 0) ? 0 : d / 1000 + "k"; });
    ticks.append("text")
        .classed("tiny light", true)
        .attr("transform", "translate(" + [-(lineHalfWidth + labelMargin), 3] + ")")
        .attr("text-anchor", "end")
        .text((d) => { return (d === 0) ? 0 : d / 1000 + "k"; });

    axisContainer.append("text")
        .classed("unit light", true)
        .attr("transform", "translate(" + [-(lineHalfWidth + labelMargin), 0] + ")")
        .attr("text-anchor", "end")
        .text("(年)")
    axisContainer.append("text")
        .classed("unit light", true)
        .attr("transform", "translate(" + [(lineHalfWidth + labelMargin), 0] + ")")
        .attr("text-anchor", "start")
        .text("(年)")
}


//varable
var tennum = [],
    alinum = [],
    trends = [];

d3.json("./data/cleanD.json", function(error, Mdata) {
    if (error) throw error;
    // console.log(data[0]);
    console.log(Mdata);

    trenum = Mdata;
    tennum = Mdata.filter(function (d) { return d.inname === '腾讯'; });
    alinum = Mdata.filter(function (d) { return d.inname === '阿里巴巴'; });
    
    trenumExtent = d3.extent(trenum, numAccessor);
    tennumExtent = d3.extent(tennum, numAccessor);
    alinumExtent = d3.extent(alinum, numAccessor);
    numExtent = [Math.min(tennumExtent[0], alinumExtent[0]),
                 Math.max(tennumExtent[1], alinumExtent[1])];

    xPosScale.domain(numExtent).range([0,width]);
    yPosScale.domain(numExtent).range([height, 0]);

    initLayout();
    // drawTrends();
    drawBeeswarm();

});

// }
//data filter
// tennum = Mdata.filter(function (d) {return d.inname === '腾讯';});
// alinum = Mdata.filter(function (d) { return d.inname === '阿里巴巴'; });

function numAccessor(d) { return d.year; };


// radiusScale.domain(numExtent).range([0.5, beeRadius])



//swarm plugin
var beeRadius = 3;
//First
function drawTrends() {
    var trends = d3.beeswarm()
        .radius(beeRadius)
        .orientation("horizontal")
        .distributeOn((d) => { return xPosScale(d.year); })
        .data(d3.shuffle(trenum))
        .side("negative")
        .arrange();
    
    drawTrend();
};
function drawTrend() {
    var trend = trendContainer.selectAll("circle")
        .data(trends)
        .enter()
        .append("g")
            .attr("transform", (d) => {return "translate(" + [d.y - halfSpaceBetween.circle, d.x] + ")"});

    drawTooltip(trend);
   
};
//Second 
function drawBeeswarm() {
    var beeswarm = d3.beeswarm()
        .radius(beeRadius)
        // .radius(4)
        .orientation("vertical")
        .distributeOn((d) => { return yPosScale(d.year); });

    // tenArrangement = beeswarm.data(d3.shuffle(tennum)).side("negative").arrange();
    // aliArrangement = beeswarm.data(d3.shuffle(alinum)).side("positive").arrange();

    tenArrangement = beeswarm.data(tennum).side("negative").arrange();
    aliArrangement = beeswarm.data(alinum).side("positive").arrange();
    allArrangement = tenArrangement.concat(aliArrangement);
    // AllArrangement = beeswarm.data(d3.shuffle(mdata)).side("symetric").arrange();
    Allarrangement = allArrangement;
    function change(d){
        d.x2 = d.x;
        d.y2 = d.y;
    };
    change(Allarrangement);
    drawCircles();


};
function drawCircles() {
    circles = circleContainer.selectAll("circle")
        .data(allArrangement)
        .enter()
        .append("g")
            .attr("transform", (d) => { return "translate(" + [d.y - halfSpaceBetween.circle, d.x] + ")" });
    drawTooltip(circles);
        
    circles.transition()
        .duration(3000)
        // .ease("bounce") //貌似要加库
        .delay(1000)
            .attr("transform", (d) => {
                if (d.datum.inname === "腾讯") {
                    return "translate(" + [d.x - halfSpaceBetween.circle, d.y] + ")";
                } else {
                    return "translate(" + [d.x + halfSpaceBetween.circle, d.y] + ")";
                }
            });

    drawTooltip(circles);
    //colored, sized, circle
    // circles.append("circle")
    //     // .attr("r", (d) => { return radiusScale(d.datum.value); })
    //     .attr("r", 3)
    //     .attr("class", (d) => { return d.datum.inname; })
};
// function 
function drawTooltip(svg){
    svg.append("circle")
        .attr("r", beeRadius)
        .on("mouseover", function (d) {
            tooltip.transition()
                .duration(1000)
                .style("opacity", .9);

            


            tooltip.html("" + (d.datum.name + 'from' + d.datum.inname))
                .style("left", (d3.event.pageX - 100) + "px")
                .style("top", (d3.event.pageY - 80) + "px");
        })
        .on("mouseout", function (d) {
            tooltip.transition()
                .duration(duration)
                .style("opacity", 0);
        });
}





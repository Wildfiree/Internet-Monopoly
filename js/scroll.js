$(document).ready(function(){
    compute();
    initlayout();

    var controller = new ScrollMagic.Controller();
    
    // var headerfade = new ScrollMagic.Scene({
    //     triggerElement: "header",
    //     duration: "140%",
    //     triggerHook: 0})
    //     .setPin("#container", {pushFollowers: false})
    //     .addIndicators({name:"headerfade"}).addTo(controller);
    
    var trigV = new ScrollMagic.Scene({triggerElement:"#trigV", duration:"100%", triggerHook:0})
            .on("enter", function(){$("#pin video").trigger("play")}).addTo(controller);
    
    var trig0 = new ScrollMagic.Scene({
        triggerElement:"#trigPre", duration:"900%",triggerHook:0 })
        .on("enter", preL()).setPin("#chart #chart2", {pushFollowers: false})
        .setClassToggle("#sinfo1", "fade-in")
        .addTo(controller);

    var trig1 = new ScrollMagic.Scene({
        triggerElement: "#trigFirst", duration: "100%", triggerHook: 0.6})
        .on("enter", function(){
            d3.selectAll(".axis").transition()
                .duration(0)
                .remove();
            const Yaxis = d3.select("#axis-container")
                .append("g")
                .attr("class", "axis")
                .selectAll(".tick")
                .data(d3.range(2008, 2019, 1))
                .enter()
                .append("text")
                .attr("transform", (d) => { return "translate(" + [margin2.left + (svgWidth- margin2.left) / 11 * (d - 2008) + 2 * Math.floor(d - 2008)/6, svgHeight - margin.bottom] + ")"; })
                .text((d) => {return d + "年"});

            
            d3.selectAll("text").attr("fill", axistext);
            d3.selectAll("circle")
                .transition()
                .duration(2500)
                .delay(d => d.x1*5 + d.y1 - 200)
                .style("opacity", 1)  
                .attr("cx", d => d.x1)
                .attr("cy", d => height - d.y1);
        }).addTo(controller);

    var trig2 = new ScrollMagic.Scene({
        triggerElement: "#trigSecond", duration: "100%", triggerHook: 0
    }).on("enter", function(){
            d3.selectAll(".axis").transition()
                .duration(0)
                .remove();
            const Xaxis = svg.append("g")
                .attr("class", "axis")
                .transition()
                .duration(1000)
                .delay(1000)
                .call(xAxis);
            d3.selectAll("text").attr("fill", axistext);
            d3.selectAll("circle")
                .transition()
                .duration(3000)
                .delay(d => d.y1)
                .style("opacity", 1)
                .attr("cx", d => {
                    if (d.data.inname === "腾讯") {
                        return (svgWidth - halfSpace) / 2 - d.x2 - margin.left;
                    } else {
                        return (svgWidth + halfSpace) / 2 + d.x2 - margin.left;
                    }
                })
                .attr("cy", d => d.y2 - margin.top);})
    .setClassToggle("#twoC", "fade-in").addTo(controller);


    var trig2_3 = new ScrollMagic.Scene({
        triggerElement:"#trig2-3", duration:"240%", triggerHook: 0.9
    }).on("enter", function(){
        d3.selectAll(".axis").transition()
            .duration(0)
            .remove();
        d3.selectAll("circle")
            .transition()
            .duration(3000)
            .style("opacity", 0)
            .attr("cx", d => 800 + Math.random() * 1000)
            .attr("cy", d => 800 + Math.random() * 1000);
    }).addTo(controller);

    var trig3 = new ScrollMagic.Scene({
        triggerElement: "#trigThird", duration: "100%", triggerHook: 0.6})
        .setClassToggle("#sinfo2", "fade-in")
        .on("enter", function(){
            d3.selectAll(".axis").transition()
                .duration(0)
                .remove();
            d3.selectAll("circle")
                .transition()
                .duration(3000)
                .style("opacity", 1)
                .attr("cx", d => d.x3 + svgWidth - Twidth + margin2.left + margin.left)
                .attr("cy", d => d.y3 + margin2.top * 2);
        }).addTo(controller);

    var trig4 = new ScrollMagic.Scene({
        triggerElement: "#trigForth", duration: "100%", triggerHook: 0.3
    })
        .on("enter", function () {
            d3.selectAll(".axis").transition()
                .duration(0)
                .remove();
            d3.selectAll("circle")
                .transition()
                .duration(3000)
                .style("opacity", 1)
                .attr("cx", function(d){
                    if("x4" in d){return d.x4}else{return 400 + Math.random()*1000} 
                })
                .attr("cy", function (d) {
                    if ("y4" in d) { return d.y4 } else { return 800 + Math.random() * 1000 }
                });
        }).addTo(controller);
    
    var trigRound = new ScrollMagic.Scene({triggerElement:"#round", duration:"100%", triggerHook:0})
        .setPin("#round .img", { pushFollowers: false}).addTo(controller);

    
    //add effects to the class element
    // var trigRp = new ScrollMagic.Scene({triggerElement:"#trig6", duration:"200%", triggerHook:0.8 })
    //     .setClassToggle("#relate", "show").addIndicators({name: "Rpre"}).addTo(controller);
    var trigR = new ScrollMagic.Scene({
        triggerElement: "#Rchart", duration: "150%", triggerHook: 0 })    
        .setPin("#chart #Rchart", { pushFollowers: false })
        .addTo(controller);
    
    // $(".textTrans").each(function(){
    //     var fade = new ScrollMagic.Scene({
    //         triggerElement: this,
    //         duration: "20%",
    //         triggerHook:0.8
    //     })
    //         .setClassToggle(this, "fade-in")
    //         .addIndicators({
    //             name: 'fade scene'
    //         })
    //         .addTo(controller);
    // })
    
})
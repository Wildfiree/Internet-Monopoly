$(document).ready(function(){
    compute();
    initlayout();

    var controller = new ScrollMagic.Controller();
    
    var headerfade = new ScrollMagic.Scene({
        triggerElement: "header",
        duration: "120%",
        triggerHook: 0})
        .setPin("#content", {pushFollowers: false})
        .addIndicators({name:"headerfade"}).addTo(controller);
    
    
    var trig0 = new ScrollMagic.Scene({
        triggerElement:"#trigPre", duration:"300%",triggerHook:0 })
        .on("enter",preL()).setPin("#chart svg", {pushFollowers: false})
        .addIndicators({name: 'trig0',}).addTo(controller);

    var trig1 = new ScrollMagic.Scene({
        triggerElement: "#trigFirst", duration: "100%", triggerHook: 0})
        .on("enter", function(){
            d3.selectAll("circle")
                .transition()
                .duration(2500)
                .delay(d => d.x1 * 5 + d.y1)
                .style("opacity", 1)
                .attr("cx", d => d.x1)
                .attr("cy", d => height - d.y1);
        }).addIndicators({name:"first"}).addTo(controller);

    var trig2 = new ScrollMagic.Scene({
        triggerElement: "#trigSecond", duration: "100%", triggerHook: 0
    })
        .on("enter", function(){
            d3.selectAll("circle")
                .transition()
                .duration(3000)
                .delay(d => d.y1)
                .style("opacity", 1)
                .attr("cx", d => {
                    if (d.data.inname === "腾讯") {
                        return (svgWidth - halfSpace) / 2 - d.x2 - margin2.left;
                    } else {
                        return (svgWidth + halfSpace) / 2 + d.x2 - margin2.left;
                    }
                })
                .attr("cy", d => d.y2 - margin2.top);
        }).addIndicators({ name: "second" }).addTo(controller);


    var trig3 = new ScrollMagic.Scene({
        triggerElement: "#trigThird", duration: "100%", triggerHook: 0})
        .on("enter", function(){
            d3.selectAll("circle")
                .transition()
                .duration(3000)
                // .delay()
                .style("opacity", 1)
                // .attr("transform", `translate(${svgWidth - Twidth + margin.left},${margin2.top * 2})`)
                .attr("cx", d => d.x3 + svgWidth - Twidth + margin.left)
                .attr("cy", d => d.y3 + margin2.top * 2);
        }).addIndicators({name:"third"}).addTo(controller);
    

    
    //add effects to the class element
    $(".textTrans").each(function(){
        var fade = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "20%",
            triggerHook:0.8
        })
            .setClassToggle(this, "fade-in")
            .addIndicators({
                name: 'fade scene'
            })
            .addTo(controller);
    })
    
})
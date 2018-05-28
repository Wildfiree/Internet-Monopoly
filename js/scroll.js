$(document).ready(function(){
    compute();
    initlayout();

    var controller = new ScrollMagic.Controller();
    
    // var headerfade = new ScrollMagic.Scene({
    //     triggerElement: "header",
    //     duration: "120%",
    //     triggerHook: 0
    // })
    // .setPin("#content", {pushFollowers: false})
    // .addIndicators({name:"headerfade"})
    // .addTo(controller);
    
    var pintry = new ScrollMagic.Scene({
        triggerElement:"#chart", 
        duration:"300%",
        triggerHook:0 
    })
        .on("enter",preL())
        .on("enter", firstL())
        .setPin("#chart", {pushFollowers: false})
        .addIndicators({//by emiting function to set up more information
                name: 'pin scene',
                colorTrigger: 'black',
                colorStart: '#75C695'
        })
        .addTo(controller);

    // var trig1 = new ScrollMagic.Scene({
    //     triggerElement: "#trigFirst", duration: "100%", triggerHook: 0})
    //     .off("change update", firstL()).addIndicators({name:"scatter"}).addTo(controller);
    var trig2 = new ScrollMagic.Scene({
        triggerElement: "#trigSecond", duration: "100%", triggerHook: 0})
        .on("leave", secondL()).addIndicators({name:"scatter"}).addTo(controller);
    var trig3 = new ScrollMagic.Scene({
        triggerElement: "#trigThird", duration: "100%", triggerHook: 0})
        .on("change", thirdL()).addIndicators({name:"scatter"}).addTo(controller);
    

    //add effects to the class element
    $(".textTrans").each(function(){
        var fade = new ScrollMagic.Scene({
            triggerElement: this,
            duration: "60%"
        })
            .setClassToggle(this, "fade-in")
            .addIndicators({
                name: 'fade scene'
            })
            .addTo(controller);
    })
    
})
// setting window properties
var w = 300;
var h = 200;
var padding = 2;

var dataset = [5,10,14,20,24,50,60];

var svg = d3.select('body').append('svg').attr('width',w).attr('height',h);

function colorpicker(v) {
    if (v<=20) {
        return '#666666';
    }
    else if (v>=30) {
        return '#FF0033';
    }
}

svg.selectAll('rect').data(dataset).enter()
    .append('rect')
    .attr({
        x: function(d,i) { return i * (w/dataset.length);},
        y: function(d,i) { return h - d;},
        width: w / dataset.length - padding ,
        height: function(d,i) {return d;},
        fill: function(d) {return colorpicker(d);}
    });
// this graph is great , but I can add labels to it !! 
// we will add labels to it, in labels.js and labels.html


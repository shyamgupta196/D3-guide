// to add labels we have to add another element of text to svg.

// setting window properties
var w = 350;
var h = 150;
var padding = 2;

var dataset = [15,10,14,20,24,50,60,31,20,49,30,37,25,21];

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
        y: function(d,i) { return h - d},
        width: w / dataset.length - padding ,
        height: function(d,i) {return d;},
        fill: function(d) {return colorpicker(d);}
    });

svg.selectAll('text').data(dataset)
.enter()
.append('text')
.text(function(d) {return d ;})
.attr({
    "text-anchor": "middle",
    x: function(d,i) { return i * (w/dataset.length)+ (w/dataset.length) /2 ;},
    y: function(d) { return h - d ;},
    'font-family':'sans',
    'font-size':13,
    'font-weight':800,
    fill: '#000000'
})

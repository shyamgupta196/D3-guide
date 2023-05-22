var h = 550;
var w = 500;

monthlySales = [
    {'month': 10, 'sales':150},
    {'month': 40, 'sales':90},
    {'month': 70, 'sales':150},
    {'month': 80, 'sales':180},
    {'month': 100, 'sales':260},
    {'month': 160, 'sales':270},
    {'month': 180, 'sales':290},
    {'month': 250, 'sales':370},

]

var lineFun = d3.svg.line()
                .x(function(d) { return d.month * 2; })
                .y(function(d) { return h- d.sales; })
                .interpolate('linear');

var svg = d3.select('body').append('svg').attr({width: w, height: h});

var viz = svg.append('path')
            .attr({
                d: lineFun(monthlySales),
                'stroke': 'purple',
                'stroke-width': 2,
                'fill':'none',
            })

var labels = svg.selectAll('text')
            .data(monthlySales)
            .enter()
            .append('text')
            .text(function(d) { return d.sales;})
            .attr({
                x: function(d){
                    return d.month * 2 - 25;
                },
                y: function(d){
                    return h-d.sales - 10;
                },
                'text-anchor': 'start',
                'font-size':'12px',
                'fill': '#000000',
                'dy': '.57em',
                'font-weight': function(d,i) { 
                    if (i == 0 || i == (monthlySales.length - 1)){
                        return 'bold';
                    } 
                    else{
                        return 'normal';
                    }
                }
            })
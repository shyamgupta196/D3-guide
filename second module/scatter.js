var h = 450;
var w = 450;

monthlySales = [
    {'month': 10, 'sales':150},
    {'month': 40, 'sales':90},
    {'month': 160, 'sales':270},
    {'month': 180, 'sales':290},
    {'month': 240, 'sales':390},
    {'month': 230, 'sales':320},
    {'month': 70, 'sales':150},
    {'month': 80, 'sales':180},
    {'month': 100, 'sales':260},
    {'month': 30, 'sales':30},

]

// create KPI
// for qualitative attr of data

function salesKPI(d){
    if (d>250){
        return '#33CC66';
    }
    else if (d<250){
        return '#666666';
    }
}

// making more interactive

function minmax(ds, col, val, type){
    var max = d3.max(ds, function(d){
        return d[col];
    });
    var min  = d3.min(ds, function(d){ return d[col]; });
    if (type =='minmax' && (val == max)){
        return val;
    }
    else if (type =='minmax' && (val == min)){
        return val;
    }

    else {
        if (type == 'all'){
            return val;
        }
    }
}

// create svg

var svg =  d3.select('body').append('svg').attr({
    width: w, height: h
});

// add dots
var dots = svg.selectAll('circle')
.data(monthlySales).enter()
.append('circle')
.attr({
    cx: function(d) { return d.month ; },
    cy: function(d) { return h- d.sales;},
    r: 5,
    'fill': function(d) { return salesKPI(d.sales);}
})

// add labels
var labels = svg.selectAll('text').data(monthlySales)
            .enter().append('text')
            .text(function(d) { return minmax(monthlySales,'sales',d.sales,'minmax')})
            .attr({
                x: function(d){
                    return d.month +10 ;
                },
                y: function(d){
                    return h-d.sales;
                },
                'font-weight': 'bold',
                'font-size': '20px',
                'font-family': 'sans-serif',
                'fill': 'purple',
            })

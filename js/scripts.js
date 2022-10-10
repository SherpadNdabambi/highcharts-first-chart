$(document).ready(function() {
    addChart();
    setFooterYear();
});

function addChart() {
    const chart = Highcharts.chart('container', {
        chart: {
            type: 'bar'
        },
        title: {
            text: 'Fruit Consumption'
        },
        xAxis: {
            categories: ['Apples', 'Bananas', 'Oranges']
        },
        yAxis: {
            title: {
                text: 'Fruit eaten'
            }
        },
        series: [{
            name: 'Jane',
            data: [1,0,4]
        }, {
            name: 'John',
            data: [5, 7, 3]
        }]
    });
}

function setFooterYear() {
    let date = new Date(), year = date.getFullYear();
    $("#footerYear").text(year.toString());
}

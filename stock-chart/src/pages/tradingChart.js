import React, {useEffect} from "react";
import HighchartsStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import demoData from "../utils/demoData";
import formatData from "../utils/formatData";
import indicator from 'highcharts/indicators/indicators';
import ichimoku from 'highcharts/indicators/ichimoku-kinko-hyo';
import dataModule from 'highcharts/modules/data';
import exportingModule from 'highcharts/modules/exporting';

indicator(HighchartsStock);
dataModule(HighchartsStock);
exportingModule(HighchartsStock);
ichimoku(HighchartsStock);

// const groupingUnits = [
//     [
//         "week", // unit name
//         [1] // allowed multiples
//     ],
//     ["month", [1, 2, 3, 4, 6]]
// ];

HighchartsStock.seriesTypes.column.prototype.pointAttribs = (function(func) {
    return function(point, state) {
        let attribs = func.apply(this, arguments);

        let candleSeries = this.chart.series[0]; // Probably you'll need to change the index
        let candlePoint = candleSeries.points.filter(function(p) { return p.index === point.index; })[0];

        let color = (candlePoint.open > candlePoint.close) ? '#f84960' : '#02c076'; // Replace with your colors
        attribs.fill = state === 'hover' ? HighchartsStock.Color(color).brighten(0.3).get() : color;

        return attribs;
    };
}(HighchartsStock.seriesTypes.column.prototype.pointAttribs));

const mockOptions = {

    rangeSelector: {
        selected: 2
    },

    title: {
        text: 'AAPL Stock Price'
    },

    legend: {
        enabled: true
    },

    plotOptions: {
        series: {
            showInLegend: true
        },
        candlestick: {
            color: '#f84960',
            upColor: '#02c076',
        }
    },

    yAxis: [{
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'OHLC'
        },
        height: '60%',
        lineWidth: 2,
        resize: {
            enabled: true
        }
    }, {
        labels: {
            align: 'right',
            x: -3
        },
        title: {
            text: 'Volume'
        },
        top: '65%',
        height: '35%',
        offset: 0,
        lineWidth: 2
    }],

    tooltip: {
        split: true
    },

    series: [{
        type: 'candlestick',
        id: 'aapl',
        name: 'AAPL Stock Price',
        data: formatData(demoData).ohlc
    }, {
        type: 'column',
        name: 'Volume',
        data: formatData(demoData).volume,
        yAxis: 1,
        // dataGrouping: {
        //     units: groupingUnits
        // }
    }, {
        type: 'ikh',
        linkedTo: 'aapl',
        tenkanLine: {
            styles: {
                lineColor: 'lightblue'
            }
        },
        kijunLine: {
            styles: {
                lineColor: 'darkred'
            }
        },
        chikouLine: {
            styles: {
                lineColor: 'lightgreen'
            }
        },
        senkouSpanA: {
            styles: {
                lineColor: 'green'
            }
        },
        senkouSpanB: {
            styles: {
                lineColor: 'red'
            }
        },
        senkouSpan: {
            color: 'rgba(0, 255, 0, 0.3)',
            styles: {
                fill: 'rgba(0, 0, 255, 0.1)'
            }
        }
    }]
};

const TradingChart = () => {

    // useEffect(() => {
    //
    // }, []);

    return (
        <>
            <h1 style={{color: 'white'}}>
                Hello World!
            </h1>
            <HighchartsReact
                highcharts={HighchartsStock}
                constructorType={"stockChart"}
                options={mockOptions}
            />
        </>
    );
}

export default TradingChart;

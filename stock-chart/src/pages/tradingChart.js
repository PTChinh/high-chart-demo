import React from "react";
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
        }
    },

    series: [{
        type: 'ohlc',
        id: 'aapl',
        name: 'AAPL Stock Price',
        data: formatData(demoData)
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

import React from "react";
import HighchartsStock from 'highcharts/highstock';
import HighchartsReact from 'highcharts-react-official';
import demoData from "../utils/demoData";

const groupingUnits = [
    [
        "week", // unit name
        [1] // allowed multiples
    ],
    ["month", [1, 2, 3, 4, 6]]
];

const mockOptions = {
    plotOptions: {
        candlestick: {
            color: '#f84960',
            upColor: '#02c076',
        }
    },

    rangeSelector: {
        selected: 1
    },

    title: {
        text: "AAPL Historical"
    },

    yAxis: [
        {
            labels: {
                align: "right",
                x: -3
            },
            title: {
                text: "OHLC"
            },
            height: "60%",
            lineWidth: 2,
            resize: {
                enabled: true
            }
        },
        {
            labels: {
                align: "right",
                x: -3
            },
            title: {
                text: "Volume"
            },
            top: "65%",
            height: "35%",
            offset: 0,
            lineWidth: 2
        }
    ],

    tooltip: {
        split: true
    },

    chart: {
        backgroundColor: '#282c34'
    },

    series: [
        {
            type: "candlestick",
            data: (function() {
                let ohlcData = [];

                for (let i = 0; i < demoData.length; i++) {
                    ohlcData.push([
                        demoData[i][0], // the date
                        demoData[i][1], // open
                        demoData[i][2], // high
                        demoData[i][3], // low
                        demoData[i][4] // close
                    ]);
                }
                return ohlcData;
            })(),
        },
        {
            type: "column",
            data: (function() {
                let columnData = [];

                for (let i = 0; i < demoData.length; i++) {
                    columnData.push([
                        demoData[i][0], // the date
                        demoData[i][5] // the volume
                    ]);
                }
                return columnData;
            })(),
            yAxis: 1
        }
    ]
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

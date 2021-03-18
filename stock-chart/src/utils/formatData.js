const formatData = (demoData) => {
    let ohlc = [],
        // volume = [],
        dataLength = demoData.length,
        i = 0;

    for (i; i < dataLength; i += 1) {
        ohlc.push([
            demoData[i][0], // the date
            demoData[i][1], // open
            demoData[i][2], // high
            demoData[i][3], // low
            demoData[i][4] // close
        ]);

        // volume.push([
        //     demoData[i][0], // the date
        //     demoData[i][5] // the volume
        // ]);
    }

    return ohlc;
}

export default formatData;

import { read_data, xvals, yvals, yvals2 } from './test.js';

function convert_date(yymmdd){
    yymmdd = yymmdd.toString();
    const year = parseInt(yymmdd.substring(0,4));
    const month = parseInt(yymmdd.substring(4,6)) - 2;
    const day = parseInt(yymmdd.substring(6,8));
    const hour = parseInt(yymmdd.substring(8,10));

    const date = new Date(year, month, day, hour);
    return date;
}

async function main(){
    await read_data();
    const datex = xvals;
    const pHy = yvals;
    const cO2 = yvals2;
    const dateList = [];
    for (let date in datex){
        dateList.push(convert_date(datex[date]));
    };
    console.log(dateList);
    var pHLevels = {
        x: dateList,
        y: pHy,
        name: 'pH Level',
        type: 'scatter'
    };

    var cO2Levels = {
        x: dateList,
        y: cO2,
        yaxis: 'y2',
        name: 'cO2 Level',
        type: 'scatter'
    };

    var layout = {
        title: 'hey',
        yaxis: {title: 'pH Level'},
        yaxis2:{
            title: 'cO2 Level',
            overlaying: 'y',
            side: 'right'
        }
    };
    var data = [pHLevels, cO2Levels];
    Plotly.newPlot('graph', data, layout);
}

main();
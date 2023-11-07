import { read_data, xvals, yvals } from './test.js';

function convert_date(yymmdd){
    yymmdd = yymmdd.toString();
    const year = 2000 + parseInt(yymmdd.substring(0,2));
    const month = parseInt(yymmdd.substring(2,4)) - 1;
    const day = parseInt(yymmdd.substring(4,6));
    const hour = parseInt(yymmdd.substring(6,8));

    const date = new Date(year, month, day, hour);
    return date;
}

async function main(){
    await read_data();
    const datex = xvals;
    const pHy = yvals;
    const dateList = [];
    for (let date in datex){
        dateList.push(convert_date(datex[date]));
    };
    console.log(dateList.length);
    console.log(pHy.length);
    var trace1 = {
        x: dateList,
        y: pHy,
        type: 'scatter'
    };

    Plotly.newPlot('graph', [trace1]);
}

main();
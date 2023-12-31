import {update_data, xdateval, ypHval, ycO2val} from './buttons.js';

function convert_date(yyyymmddhh) {
    yyyymmddhh = yyyymmddhh.toString();
    const year = parseInt(yyyymmddhh.substring(0,4));
    const month = parseInt(yyyymmddhh.substring(4,6)) - 2;
    const day = parseInt(yyyymmddhh.substring(6,8));
    const hour = parseInt(yyyymmddhh.substring(8,10));

    const date = new Date(year, month, day, hour);
    return date;
}

function get_year_points(data) {
    var points = [];
    var current_year = 2015;
    for (let day_idx in data) {
        if (data[day_idx].getFullYear() != current_year) {
            points.push(day_idx);
            current_year++;
        }
    }
    return points;
}


async function main(){
    await update_data();
    const dateList = [];
    for (let date in xdateval){
        dateList.push(convert_date(xdateval[date]));
    };
    const missing_dates = [];
    for (let i = 0; i < dateList.length - 1; i ++){
        var current = dateList[i];
        var next = dateList[i+1];
        //while loop checks to see if the gap between the current and next day is greater than 1 day
        while (next - current > 86400000){
            //will keep moving onto the next day until there is no 1 day gap
            current.setDate(current.getDate() + 1);
            //appends the missing date to the miss_dates list
            missing_dates.push(current.toString());
        }
    };

    var pHLevels = {
        x: dateList,
        y: ypHval,
        name: 'pH Level',
        type: 'scatter'
    };

    var cO2Levels = {
        x: dateList,
        y: ycO2val,
        yaxis: 'y2',
        name: 'cO2 Level',
        type: 'scatter'
    };
    
    var layout = {
        title: 'Ocean pH Levels and cO2 Levels in The Atmosphere',
        xaxis: {
            type: 'category',
            tickmode: 'array',
            tickvals: get_year_points(dateList),
            ticktext: ['2016', '2017', '2018', '2019', '2020']
        },
        yaxis: {
            tickmode: 'array',
            tickvals: [7,9],
            ticktext: [7,9],
            range: [7,9],
            title: 'pH Level',
        },
        yaxis2:{
            tickmode: 'array',
            tickvals: [350,700,1050,1400,1750],
            ticktext: [350,700,1050,1400,1750],
            range: [0,1750],
            title: 'cO2 Level',
            overlaying: 'y',
            side: 'right'
        }
    };
    var data = [pHLevels, cO2Levels];
    Plotly.newPlot('graph', data, layout);

}

function graph_update(){
    Plotly.update('graph',{'y2' : ycO2val}, {'y' : ypHval});
}
main();
export {main, graph_update};
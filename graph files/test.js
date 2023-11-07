let xvals;
let yvals;
let yvals2;

async function read_data() {

    const xdate2015 = 'Ocean Acidification Data/2015/2015_date.txt';
    const ypH2015 = 'Ocean Acidification Data/2015/2015_pH.txt';
    const ycO22015 = 'Ocean Acidification Data/2015/2015_co2.txt';
    const xdata = await fetch(xdate2015).then(response => response.text());
    const ydata = await fetch(ypH2015).then(response => response.text());
    const ydata2 = await fetch(ycO22015).then(response => response.text());
    xvals = xdata.split('\n').map(line => parseFloat(line));
    yvals = ydata.split('\n').map(line => parseFloat(line));
    yvals2 = ydata2.split('\n').map(line => parseFloat(line));
}

export { read_data, xvals, yvals, yvals2 };

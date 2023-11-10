let xdateval;
let ypHval;
let ycO2val;

async function read_data() {
    const dates = 'Ocean Acidification Data/combined_dates.txt';
    const pH = 'Ocean Acidification Data/combined_pH.txt';
    const cO2 = 'Ocean Acidification Data/combined_co2.txt';
    const xdate = await fetch(dates).then(response => response.text());
    const ypH = await fetch(pH).then(response => response.text());
    const ycO2 = await fetch(cO2).then(response => response.text());
    xdateval = xdate.split('\n').map(line => parseFloat(line));
    ypHval = ypH.split('\n').map(line => parseFloat(line));
    ycO2val = ycO2.split('\n').map(line => parseFloat(line));
}

export { read_data, xdateval, ypHval, ycO2val};

let xdateval1;
let ypHval1;
let ycO2val1;

async function read_data() {
    const dates = 'Ocean Acidification Data/combined_dates.txt';
    const pH = 'Ocean Acidification Data/combined_pH.txt';
    const cO2 = 'Ocean Acidification Data/combined_co2.txt';
    const xdate = await fetch(dates).then(response => response.text());
    const ypH = await fetch(pH).then(response => response.text());
    const ycO2 = await fetch(cO2).then(response => response.text());
    xdateval1 = xdate.split('\n').map(line => parseFloat(line));
    ypHval1 = ypH.split('\n').map(line => parseFloat(line));
    ycO2val1 = ycO2.split('\n').map(line => parseFloat(line));
}

export { read_data, xdateval1, ypHval1, ycO2val1};

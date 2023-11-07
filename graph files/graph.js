const read_data = require('./data_extraction.js');
let result;
async function main(){
    result = await read_data();
    try{
        return result;
    }catch(err){
        console.error(err);
    }
}
main();
console.log(main());
// tester = document.getElementById('tester');
// Plotly.newPlot( tester, [{
// x: [1, 2, 3, 4, 5],
// y: [1, 2, 4, 8, 16] }], {
// margin: { t: 0 } } );
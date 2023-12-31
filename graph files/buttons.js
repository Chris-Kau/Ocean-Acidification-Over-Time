import { read_data, xdateval1, ypHval1, ycO2val1} from './read_data.js';
import { main, graph_update } from './graph.js';
var xdateval = [];
var ypHval = [];
var ycO2val = []; 
var toggle = 0;
let oil_vals;
let coal_vals;
let natural_gas_vals;
let pH_oil_vals;
let pH_coal_vals;
let pH_natural_gas_vals;
async function get_data(){
    await read_data();
    if (toggle == 0){
        xdateval = xdateval1;
        ycO2val = ycO2val1;
        ypHval = ypHval1;
    };
}

const oil = document.getElementById('oil');
const coal = document.getElementById('coal');
const natural_gas = document.getElementById('natural-gas');
async function update_data(){
    await get_data();
    toggle = 1;
    oil_vals = [];
    coal_vals = [];
    natural_gas_vals = [];
    pH_oil_vals = [];
    pH_coal_vals = [];
    pH_natural_gas_vals = [];
    for (let idx in ycO2val1){
        //About 33% of cO2 in the atmosphere stems from human activities
        //Fossil Fuels & Industry make up 89% of carbon emissions
        //Oil: 45%, Coal: 19%, Nautral Gas 36%
        var remaining = (ycO2val1[idx] * 0.89) * .33;
        oil_vals.push((remaining * .45));
        coal_vals.push((remaining * .19));
        natural_gas_vals.push((remaining * .36));
        var pH_remaining = (ypHval1[idx]) * .33;
        pH_oil_vals.push((pH_remaining / oil_vals[idx]));
        pH_coal_vals.push((pH_remaining / coal_vals[idx]));
        pH_natural_gas_vals.push((pH_remaining / natural_gas_vals[idx]));
    };
}


oil.addEventListener('change', function(){
        if (oil.checked){
            for (let idx in ycO2val){
                ycO2val[idx] = ycO2val[idx] + oil_vals[idx];
            };
            for (let idx in ypHval){
                ypHval[idx] = ypHval[idx] - pH_oil_vals[idx];
            };
            graph_update();
        }else{
            for (let idx in ycO2val){
                ycO2val[idx] = ycO2val[idx] - oil_vals[idx];
            }
            for (let idx in ypHval){
                ypHval[idx] = ypHval[idx] + pH_oil_vals[idx];
            };  
            graph_update();
        }
    });

coal.addEventListener('change', function(){
    if (coal.checked){
        for (let idx in ycO2val){
            ycO2val[idx] = ycO2val[idx] + coal_vals[idx];
        }

        for (let idx in ypHval){
            ypHval[idx] = ypHval[idx] - pH_coal_vals[idx];
        };
        graph_update();
    }else{
        for (let idx in ycO2val){
            ycO2val[idx] = ycO2val[idx] - coal_vals[idx];
        }
        for (let idx in ypHval){
            ypHval[idx] = ypHval[idx] + pH_coal_vals[idx];
        };
        graph_update();
    }
});

natural_gas.addEventListener('change', function(){
    if (natural_gas.checked){
        for (let idx in ycO2val){
            ycO2val[idx] = ycO2val[idx] + natural_gas_vals[idx];
        }
        for (let idx in ypHval){
            ypHval[idx] = ypHval[idx] - pH_natural_gas_vals[idx];
        };
        graph_update();
    }else{
        for (let idx in ycO2val){
            ycO2val[idx] = ycO2val[idx] - natural_gas_vals[idx];
        }
        for (let idx in ypHval){
            ypHval[idx] = ypHval[idx] + pH_natural_gas_vals[idx];
        };
        graph_update();
    }
});

export {update_data, xdateval, ypHval, ycO2val};
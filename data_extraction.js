const fs = require('fs');

function read_data(){
    fs.readFile('Ocean Acidification Data/pH_mean_2015.txt', 'utf8',(err, data) =>{
        if(err){
            console.error(err);
            return;
        }
        console.log(data);
    })
}
read_data()
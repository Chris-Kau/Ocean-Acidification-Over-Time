const fs = require('fs').promises;

async function read_data() {
  try {
    const data = await fs.readFile('Ocean Acidification Data/pH_mean_2015.txt', 'utf8');
    const string = data.toString();
    return string;
  } catch (err) {
    throw err;
  }
}

module.exports = read_data;
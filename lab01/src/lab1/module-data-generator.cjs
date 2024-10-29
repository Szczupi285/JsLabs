const fs = require('fs').promises;

const count = Number(process.argv[2])

async function readFileLines(filename) {
    const data = await fs.readFile(filename, 'utf8');
    return data.split('\n').map(line => line.trim()).filter(line => line.length > 0);
}

async function generateData() {
    try {
        const names = await readFileLines('names.txt');
        const surnames = await readFileLines('surnames.txt');
        const heights = await readFileLines('height.txt');

        let peopleData = [];

        for (let i = 0; i < count; i++) {
            peopleData.push({
                id: i + 1,
                name: names[Math.floor(Math.random() * names.length)],
                surname: surnames[Math.floor(Math.random() * surnames.length)],
                height: heights[Math.floor(Math.random() * heights.length)],
            });
        }

        const content = `export const data = ${JSON.stringify(peopleData, null, 2)};`;

        await fs.writeFile('./module-data.js', content);
        console.log("module-data.js generated");
    } catch (error) {
        console.error("Error generating data:", error);
    }
}

generateData();
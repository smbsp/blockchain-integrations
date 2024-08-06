const db = require('./mockDb');
const { promisify } = require('util');

// Promisify db functions
const getData = promisify(db.getData).bind(db);
const processData = promisify(db.processData).bind(db);
const saveData = promisify(db.saveData).bind(db);

async function execute() {
  try {
    // Fetch data from the database
    let data = await getData();

    // Modify data properties
    data.a = 'test';
    data.b = 1111;

    // Process the modified data
    data = await processData(data);

    // Save the processed data
    await saveData();

    // Log completion message
    console.log('finished');
  } catch (err) {
    // Log any errors encountered during the process
    console.log('Error:', err);
  }
}

// Execute the async function
execute();

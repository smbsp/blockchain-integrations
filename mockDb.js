// mockDb.js

// Mock database data
let data = {};

// getData function (callback-based)
const getData = (callback) => {
  setTimeout(() => {
    callback(null, data);
  }, 100);
};

// processData function (callback-based)
const processData = (newData, callback) => {
  setTimeout(() => {
    data = { ...data, ...newData };
    callback(null, data);
  }, 100);
};

// saveData function (callback-based)
const saveData = (callback) => {
  setTimeout(() => {
    if (callback) {
      callback(null, data);
    } else {
      return Promise.resolve(data);
    }
  }, 100);
};

module.exports = {
  getData,
  processData,
  saveData,
};

const path = require('path');

//The global process variable has some properties associated with it
module.exports = path.dirname(process.mainModule.filename);
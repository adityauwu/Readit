const mongoose = require('mongoose');

const subredditSchema = new mongoose.Schema({
    name: String,
    description: String,
    test:Number
});

module.exports = mongoose.model('company', subredditSchema);

const mongoose = require('mongoose');
// Setup schema
var categorySchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: String,
    created_at: {
        type: Date,
        default: Date.now
    }
});

// Export Category model
var Category = module.exports = mongoose.model('category', categorySchema);


module.exports.get = function (callback, limit) {
    Category.find(callback).limit(limit);
}
const mongoose = require('mongoose');

const presenceSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, required:true},
    loginTime: {type:Date, required:true},
    logout:{type:Date}
});

const Presence = mongoose.model('Presence', presenceSchema);
module.exports = Presence;
//requiring dependency for mongoDB model
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//User Schema

var UserSchema = new Schema({
    username: {type: String, required: true},
    gender: {type: String, required: true},
    age: {type: Number, required: true},
    favlang: {type: String, required: true},
    location: {type: [Number], required: true},
    htmlverified: String,
    created_at: {type: Date, default: Date.now},
    updated_at: {type: Date, default: Date.now}
});

UserSchema.pre('save', function(next) {
    now = new Date();
    this.updated_at = now;
    if(!this.created_at) {
        this.created_at = now
    }
    next();
});

//indexes the schema in 2dsphere format for search
UserSchema.index({location: '2dsphere'});

// Exports the UserSchema for use elsewhere. Sets the MongoDB to be used as other name
module.exports = mognoose.model('scotch-user', UserSchema);
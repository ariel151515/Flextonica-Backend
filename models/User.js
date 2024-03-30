const { Schema, model } = require("mongoose");

const userSchema = new Schema({
    uid: {
        type: String,
        unique: true,
    },
    premiumn: {
        type: Boolean,
        unique: false,
    }
}, {
    timestamps: true // Habilita los campos createdAt y updatedAt
});



module.exports = model('User', userSchema);
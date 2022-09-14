const mongoose = require('mongoose')
const collageSchema = new mongoose.Schema({


    name: {
        type: String,
        require: true,
        unique: true,
        trim: true
    },

    fullName: {
        type: String,
        require: true,
        trim: true
    },
    logoLink: {
        type: String,
        require: true,
        trim: true

    },
    idDeleted: {
        type: Boolean,
        default: false
    }



}, { timestamps: true })

module.exports = mongoose.model("Collage", collageSchema)
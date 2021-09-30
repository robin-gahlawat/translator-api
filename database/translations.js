
const mongoose = require('mongoose');

const TranslationSchema = mongoose.model('translations', {
    message: {
        type: String,
        trim: true,
        required: true
    },
    toLanguage : {
        type: String,
        required: true,
        trim: true
    },
    translatedMessage: {
        type: String,
        required: true,
        trim: true
    }
});

module.exports = TranslationSchema
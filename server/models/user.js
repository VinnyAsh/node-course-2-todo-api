
var mongoose = require('mongoose');

var User = mongoose.model('Users', {
    name: {
             type: String,
             required: true,
             minlength: 1,
             trim: true   // remove leading/trailing spaces
    },
    email: {
             type: String,
             required: true,
             minlength: 1,
             trim: true   // remove leading/trailing spaces
    }
});

module.export = {User};

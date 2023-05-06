const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const addressSchema = new Schema({
    province: {
        type: String,
        required: true
    },
    city: {
        type: String,
        required: true
    },
    addressline1: {
        type: String,
        required: true
    }
});

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        validate: {
            validator: function(v) {
                return new RegExp("[a-zA-Z0-9]+@[a-zA-Z0-9]+\\.[a-zA-Z0-9][a-zA-Z0-9][a-zA-Z0-9]*").test(v);
            },
            message: props => `${props.value} is not a valid email`
        },
    },
    password: {
        type: String,
        required: true,
        trim: true,
        minlength: 6
    },
    firstname: {
        type: String,
        required: true,
        trim: true,
        minlength: 2
    },
    lastname: {
        type: String,
        required: true,
        trim: true,
        minlength: true
    },
    address: {
       type: addressSchema,
       required: true,
       unique: true 
    }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
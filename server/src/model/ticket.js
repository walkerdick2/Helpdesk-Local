var mongoose = require('mongoose')
var schema = mongoose.Schema
const requiredNum= {
    type: Number,
    required: true};
const requiredStr = {
    type: String,
    required: true}

var TicketSchema = new mongoose.Schema({
    ID: requiredNum,
    FNAME: requiredStr,
    LNAME: requiredStr,
    EMAIL: requiredStr,
    PROBLEM: requiredStr,
    URGENCY: {
        type: Number,
        min: 0,
        max: 5,
        default: 3,
    },

},
{
    timestamps: true,
})


const ticketentry = mongoose.model('Ticketentry',TicketSchema)
module.exports = ticketentry;
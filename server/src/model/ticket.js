var mongoose = require('mongoose')
var schema = mongoose.Schema
const requiredNum= {
    type: Number,
    required: true};
const requiredStr = {
    type: String,
    required: true}

var TicketSchema = new mongoose.Schema({
    FNAME: requiredStr,
    LNAME: requiredStr,
    EMAIL: requiredStr,
    PROBLEM: requiredStr,
    URGENCY: requiredStr,
    STATUS: {
        type: String,
        default: "NEW",
    },
    COMMENTS: [{
        BODY: String, AGENT: String
    }]

},
{
    timestamps: true,
    returnOriginal: false,
})


const ticketentry = mongoose.model('Ticketentry',TicketSchema)
module.exports = ticketentry;
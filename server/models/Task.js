const mongoose = require("mongoose");

const TaskSchema = mongoose.Schema({
    body: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    }
}, { timestamps: true })

const Task = mongoose.model('Task', TaskSchema )


module.exports = Task;
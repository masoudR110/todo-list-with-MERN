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

const Task = mongoose.model('Tasks', TaskSchema )


module.exports = Task;
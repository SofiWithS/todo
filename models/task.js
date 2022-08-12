const mongoose = require('mongoose')

const task_sema = new mongoose.Schema({
    task: {
        type: String,
        required: true
    },
    done: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model("Task", task_sema)

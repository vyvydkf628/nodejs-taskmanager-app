const mongoose = require('mongoose')
const validator = require('validator')
const bcrypt = require('bcryptjs')

const taskSchema = new mongoose.Schema(
    {
        description:{
            type : String,
            trim : true,
            required: true
        },
        completed:{
            type : Boolean,
            default: false
        }
    }
)
const Task = mongoose.model('Task',taskSchema)

taskSchema.pre("save",async function(next){
    const task = this

    next()
} )

module.exports = Task
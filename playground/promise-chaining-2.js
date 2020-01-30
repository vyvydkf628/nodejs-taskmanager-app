require('../src/db/mongoose')
const Task = require('../src/models/task')

// Task.findByIdAndDelete("5e313ac6d0eeb1513cf5f1cf").then((task)=>{
//     console.log(task)
//     return Task.countDocuments({ completed: false})
// }).then((result)=>{
//     console.log(result)
// }).catch((e)=>{
//     console.log(e)
// })


const deleteTaskAndCount = async (id)=>{
    const task = await Task.findByIdAndDelete(id)
    const count = await Task.countDocuments({completed:false})
    return count
}


deleteTaskAndCount("5e313a4bf0a03c56d86804f4").then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
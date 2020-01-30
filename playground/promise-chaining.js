require('../src/db/mongoose')
const User = require('../src/models/user')

// 5e3137e7f40f866964a34883

User.findByIdAndUpdate('5e322ebd72258f4f78a05a25',{ age : 1}).then((user)=>{
    console.log(user)
    return User.countDocuments({ age : 1})
}).then((result) =>{
    console.log(result)
}).catch((e)=>{
    console.log(e)
})



const updateAgeAndCount = async (id, age) =>{
    const user = await  User.findByIdAndUpdate(id,{ age })
    const count = await User.countDocuments({age})
    return count
}

updateAgeAndCount('5e322ebd72258f4f78a05a25',2).then((count)=>{
    console.log(count)
}).catch((e)=>{
    console.log(e)
})
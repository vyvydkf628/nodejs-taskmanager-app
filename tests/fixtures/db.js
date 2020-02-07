const mongoose = require('mongoose')

const jwt = require('jsonwebtoken')
const User = require('../../src/models/user')
const Task = require('../../src/models/task')


const userOneId = new mongoose.Types.ObjectId()
const userOne = {
    _id: userOneId,
    name : 'Mike',
    email : 'mike@example.com',
    password: 'asdasdasdasd',
    tokens : [{
        token: jwt.sign({ _id: userOneId}, process.env.JWT_SECRET)
    }]
}

const userTwoId = new mongoose.Types.ObjectId()
const userTwo = {
    _id: userTwoId,
    name : 'DongCheol11',
    email : 'mike1@example.com',
    password: 'asdasdasd',
    tokens : [{
        token: jwt.sign({ _id: userTwoId}, process.env.JWT_SECRET)
    }]
}

const taskOne = {
    _id: new mongoose.Types.ObjectId(),
    description: 'to learn something',
    completed : false,
    owner : userOne._id
}
const taskTwo = {
    _id: new mongoose.Types.ObjectId(),
    description: 'to learn something2',
    completed : true,
    owner : userOne._id
}
const taskThree = {
    _id: new mongoose.Types.ObjectId(),
    description: 'to learn something3',
    completed : false,
    owner : userTwo._id
}

const setupDatabase = async () =>{
    await User.deleteMany()
    await Task.deleteMany()
    await new User(userOne).save()
    await new User(userTwo).save()
    await new Task(taskOne).save()
    await new Task(taskTwo).save()
    await new Task(taskThree).save()

}

module.exports = {
    userOneId,
    userOne,
    userTwoId,
    userTwo,
    taskOne,
    taskThree,
    taskTwo,
    setupDatabase
}
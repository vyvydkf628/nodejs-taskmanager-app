const express = require('express')
require('./db/mongoose')
const app = express()
const port = process.env.PORT

const userRouter = require('./routers/user')
const taskRouter = require('./routers/task')

const multer = require('multer')
const upload = multer({
    dest: 'image',
    limits: {
        fileSize: 1000000
    },
    fileFilter(req, file, cb) {
        if (!file.originalname.match(/\.(doc|docx)$/)) {
            return cb(new Error('File must be a PDF'))
            
        }
        
        cb(undefined, true)
    }
})


app.post('/upload', upload.single('upload'), (req,res) =>{
    res.send()
},(error,req,res,next) =>{
        res.status(400).send({error : error.message})
    
})


app.use(express.json())
app.use(userRouter)
app.use(taskRouter)

app.listen(port,()=>{
    console.log('Server is up on port '+ port)
}) 


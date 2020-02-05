const request = require('supertest')
const app = require('../src/app')

test('Should signup a new user',async () =>{
    await request(app).post('/users').set('Content-Type', 'application/json').send({
        name: 'DongCheo',
        email: 'asda111@adasd.com',
        password : 'SA11SA11'

    }).expect(201) 
})

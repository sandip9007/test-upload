const express = require('express')
const app = express()
const port = process.env.PORT || 3010

app.get('', (req, res)=>{
    res.send('This is a test')
})



app.listen(port, ()=>{
    console.log('Server is running')
})
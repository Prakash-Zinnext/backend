const express= require('express')
const app= express()

app.get('/',(req,resp)=>{
    resp.json({
        mesg:"Hello From prakash"
    })

})
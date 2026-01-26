import express from 'express'
import cors from 'cors'
import cookieParser from 'cookie-parser'

const app  = express()

//we used this .use for middleware
app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

// configuration
// we take data from diff forms like in table format, form, url
// json format and we can set the limit limit so our server wont be crash
// if data come from URL, some url make it aarya+patil, aarya%20patil so we need to encode it for that used .urlencoded
app.use(express.json({limit: "10kb"}))
app.use(express.urlencoded({extended: true, limit:"10kb"}))
app.use(express.static("public")) // if we want to store pdf, image which came from data then we can store it in our public folder

// cookie-parser: basically used for user url cookies access and store, we can perform curd operations on it
app.use(cookieParser())

// middleware: suppose you hit the url(instagram) you send the request then instagram sent you response(res.json(), res.send()) but you want to check that user is logged in or not, you are admin or not for that you need to used middleware
// next is flag 

export {app}
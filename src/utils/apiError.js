/*
Error is the class we have in npm js error and we extends this class
In our asyncHandler function we called error msg again and again so for this we create this class and
using this we can set it according to us

super keyword we used to overwrite the existing value. Here we overwrite the message.
*/

class ApiError extends Error{
    constructor(
        statusCode,
        message= "Something went wrong",
        errors = [],
        stack = ""
    ){
        super(message)
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.errors = errors

        if(stack){
            this.stack = stack
        }else{
            Error.captureStackTrace(this, this.
                constuctor
            )
        }
    }
}


export {ApiError}

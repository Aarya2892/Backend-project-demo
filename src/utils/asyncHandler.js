// in utils we right funcions which we used repeatedly. we wrap that function and used in diff diff places

/*In project we send lots of requests to DataBase and for that we can not write the function again and again so we create this 
wrap up function and we will use this function to send the request to DB.

for this we use higherOrderFunction : function who can take the function as parameter and return it.
const asyncHandler = (fn) => async() => {}
*/

const asyncHandler = (requestHandler) =>{
   (req, res, next) =>{
    Promise.resolve(requestHandler(req, res, next))
    .catch((err)=> next(err))
   }
}

export {asyncHandler}



// const asyncHandler = () =>{}
// const asyncHandler = (fun) => () => {}
// const asyncHandler = (fun) => async() => {}

// const asyncHandler = (fn) => async(req, res, next) => {
//     try {
//         await fn(req, res, next)
//     } catch (error) {
//         res.status(err.code || 500).json({
//             success: false,
//             message: err.message
//         })
//     }
// }

import { AsyncHandler } from '../utils/AsyncHandler.js'


const registerUser = AsyncHandler(async (req, res) => {
   return  res.status(200).json({
        message: "Ok",
    })
})

export {registerUser}
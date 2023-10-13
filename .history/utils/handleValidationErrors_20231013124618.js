import { validationResult } from "express-validator"

export default (req,res,next)=>{
    const errors = validationResult()
}
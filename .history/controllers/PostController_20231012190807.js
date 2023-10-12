import PostModel from "../models/Post"

export const create = (req,res)=>{
    try {
        const doc = new PostModel({
           title:req.body.title ,
           text:req.body.text,
           imageUrl
        })
        
    } catch (error) {
        
    }
}
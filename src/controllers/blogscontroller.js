const BlogsModel = require("../models/Blogs_Model")
const AuthorModel=require("../models/Author_Model")
const mongoose = require("mongoose")

const createBlogs= async function(req, res){

    let data=req.body

    let Author= await AuthorModel.findById(data.authorId)
    if(!Author)
    {
        res.status(400).send({status:false, message:"Author_Id not found"})
    }else
    {
       let savedblog=await BlogsModel.create(data)
       res.status(201).send({status:true,data:savedblog})
    }
}



module.exports.createBlogs=createBlogs
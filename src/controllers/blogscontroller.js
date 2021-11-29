const BlogsModel = require("../models/Blogs_Model")
const AuthorModel = require("../models/Author_Model")
const mongoose = require("mongoose")

const createBlogs = async function (req, res) {

    let data = req.body

    let Author = await AuthorModel.findById(data.authorId)
    if (!Author) {
        res.status(400).send({ status: false, message: "Author_Id not found" })
    } else {
        let savedblog = await BlogsModel.create(data)
        res.status(201).send({ status: true, data: savedblog })
    }
}

const getBlogs= async function(req, res){
    try{
        let Id = req.query.authorId
        let category= req.query.category
        let tags= req.query.tags
        let subcategory= req.query.subcategory
        let data = await BlogsModel.findOne({authorId: Id, category: category, tags: tags, subcategory: subcategory })
        console.log("Data", data)
        if (data){
            if (data.isDeleted == false && data.isPublished == true){
                res.status(200).send({Status: "Success", Info: data })
            }
            else{
                res.status(500).send({err: "either book isn't published or data is deleted"})
            }
        }
        else{
            res.status(404).send({err: "provide an valid Input details"})
        }
    }
    catch(err) {
        console.log(err.message)
        res.status(500).send( { msg: "Something went wrong" } )
    }
}


const DeleteBlogs = async function (req, res) {

    let blogId = req.params.deleteId

    let checking = await BlogsModel.findOneAndUpdate({ _id: blogId, isDeleted: false}, {isDeleted : true, deletedAt:Date()})

    if (checking) {
        res.status(200).send({ msg: "Update done" })
        
    } else {
        res.status(404).send({ status: false, msg: "Invalid BlogId" })
    }
}
module.exports.createBlogs = createBlogs
module.exports.DeleteBlogs = DeleteBlogs
module.exports.getBlogs=getBlogs
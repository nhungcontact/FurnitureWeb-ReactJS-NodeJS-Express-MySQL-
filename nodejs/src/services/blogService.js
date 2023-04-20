import db from "../models/index";
// const { Op } = require("sequelize");

let getAllBlogs = (blogId) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let blogs='';
            if(blogId === 'ALL'){
                blogs = db.Blog.findAll({
                    raw: true,
                });
            }
            if(blogId && blogId !== 'ALL'){
                blogs = await db.Blog.findOne({
                    where: {id: blogId},
                    raw : true ,
                })
            }
            resolve(blogs)
        } catch (error) {
            reject(error)
        }
    })
}

let getBlogsByName=(blogName)=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let blogs = await db.Blog.findAll({
                where: {
                    name:blogName
                },
                raw: true,
            })
            if(blogs){
                resolve(blogs)
            }else{
                resolve('')
            }
        } catch (error) {
            reject(error);
        }
    })
}

let createNewBlog = (data,file) => {
    return new Promise(async(resolve,reject)=>{
        try { 
            await db.Blog.create({
                name: data.name,
                photo: file.filename,
                writer: data.writer,
                slug: data.slug,
                content: data.content,
                hidden: data.hidden,
                newBlog: data.newBlog,
            })
            resolve({
                errCode: 0,
                message: 'OK'
            }); 
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}

let deleteBlog = (blogId) => {
    return new Promise (async(resolve,reject)=>{
        let foundBlog = await db.Blog.findOne({
            where: {id: blogId},
            raw:true,
        })
        if(!foundBlog){
            resolve({
                errCode:2,
                errMessage: `The Blog isn't exist`
            })
        }
        await db.Blog.destroy({
            where: {id:blogId}
        })
        resolve({
            errCode: 0,
            errMessage: `The Blog is delete`
        });
    })
}

let updateBlogData = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!data.id){
                resolve({
                    errCode:2,
                    errMessage:`Missing required parameters!`
                })
            }
            let blog= await db.Blog.findOne({
                where: { id: data.id},
                raw: false
            })
            if(blog){
                blog.name= data.name,
                blog.image= data.image,
                blog.writer=data.writer,
                blog.slug=data.slug,
                blog.content=data.content,
                blog.hidden=data.hidden,
                blog.new=data.new
                await blog.save();
                resolve({
                    errCode: 0,
                    message: `Update the blog succeeds!`
                })
            }else{
                resolve({
                    errCode: 1,
                    errMessage: `Blog's not found`
                });
            }
        } catch (error) {
            reject(error)
        }
    });
}

module.exports = {
    getAllBlogs:getAllBlogs,
    getBlogsByName:getBlogsByName,
    createNewBlog:createNewBlog,
    updateBlogData:updateBlogData,
    deleteBlog:deleteBlog
}
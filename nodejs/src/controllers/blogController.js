import blogService from '../services/blogService';

let handleCreateBlog = async(req,res) => {
    console.log(req.body,req.file);
    let message = await blogService.createNewBlog(req.body,req.file)
    return res.status(200).json(message);
}

let handleGetAllBlogs = async(req,res) => {
    let id = req.query.id;
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            blogs : []
        })
    }
    let blogs = await blogService.getAllBlogs(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        blogs 
    })
}



let handleUpdateAddress = async(req,res) => {
    let data = req.body;
    let message = await blogService.updateAddress(data);
    return res.status(200).json(message)
}

let handleDeleteCart = async(req,res) => {
    if(!req.body.cartId){
        return res.status(200).json({
            errCode : 1,
            errMessage: 'Missing inputs parameter!',
        })
    }
    let message = await blogService.deleteCart(req.body.cartId);
    return res.status(200).json(message);
}

let handleDeleteAllCart = async(req,res) => {
    if(!req.body.userId){
        return res.status(200).json({
            errCode : 1,
            errMessage: 'Missing inputs parameter!',
        })
    }
    let message = await blogService.deleteAllCart(req.body.userId);
    return res.status(200).json(message);
}
module.exports = {
    handleGetAllBlogs: handleGetAllBlogs,
    handleCreateBlog: handleCreateBlog,
    handleUpdateAddress: handleUpdateAddress,
    handleDeleteCart: handleDeleteCart,
    handleDeleteAllCart:handleDeleteAllCart
}

import db from "../models/index";
const { Op } = require("sequelize");


let addOrder = (data) => {
    console.log(data);
    return new Promise(async(resolve,reject)=>{
        try { 
            await db.Order.create({
                number:data.number,
                grandtotal:data.grandTotal,
                message: data.message,
                userId:data.userId,
                addressId: data.addressId,
            }).then(async(order)=>{
                if(order){
                    if(data.list){
                        for(let i=0;i<data.list.length;i++){
                            await db.DetailOrder.create({
                                quantity:data.list[i].quantity,
                                color: data.list[i].color,
                                price:data.list[i].price,
                                orderId:order.id,
                                productId:data.list[i].productId,
                            }).then(detail=>{
                                if(detail){
                                    resolve({
                                        errCode: 0,
                                        message: 'OK'
                                    });  
                                }
                            })
                        }
                        
                    }
                }
            })
           
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}
let getAllOrdersByUserId = (userId) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let orders='';
            if(userId){
                orders = await db.Order.findAll({
                    where: {userId: userId},
                    raw : true ,
                })
            }
            resolve(orders)
        } catch (error) {
            reject(error)
        }
    })
}
let getDetailOrderByOrderId = (orderId) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let detailorders='';
            if(orderId){
                detailorders = await db.DetailOrder.findAll({
                    where: {orderId: orderId},
                    
                    include:[{
                        model: db.Product,
                        as:'products'
                    }],
                    // include:[{
                    //     model: db.Order,
                    //     as:'orders'
                    // }],
                    raw : true ,
                })
            }
            resolve(detailorders)
        } catch (error) {
            reject(error)
        }
    })
}
// req.body
let getOrdersWithPagination = (id,pageOrder,limitOrder)=>{
    return new Promise(async(resolve, reject) => {
        try {
            const page = parseInt(pageOrder) || 0;
            const limit = parseInt(limitOrder) || 10;
            const search = searchOrder || '';
            const offset = limit * page;
            const totalRows = await db.Order.count({
                    where: { custId: id },
                    
            })
            const totalPage = Math.ceil(totalRows / limit);
            const result = await db.Order.findAll({
                where: { custId: id },
                include: [{ model: db.Address, include: [{ model: db.Cart }] }],
                raw: true,
                offset: offset,
                limit: limit,
                order: [['createdAt', 'DESC']]
            })
            // resolve(result)
            resolve({
                Orders: result,
                page: page,
                limit:limit,
                totalRows: totalRows,
                totalPage:totalPage
            })
        } catch (error) {
            reject(error)
        }
    })
}
// req.body
let getOrdersByStatus=(orderName)=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let orders = await db.Order.findAll({
                attributes: ['status', [Sequelize.fn('COUNT', Sequelize.col('status')), 'total']],
                group: ['status']
            })
            if(orders){
                resolve(orders)
            }else{
                resolve('')
            }
        } catch (error) {
            reject(error);
        }
    })
}


let getOrdersByCount=()=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let orders = await db.Blog.findAll({
                where: { status: req.body.status },
                order: [['createdAt', 'DESC']],
                include: [{ model: db.Address, include: [{ model: db.Cart }] }],
            })
            if(orders){
                resolve(orders)
            }else{
                resolve('')
            }
        } catch (error) {
            reject(error);
        }
    })
}


let updateStatus = (id,status,deliveryDate)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let order = db.Order.findOne({where:{id:id}});
            if(order){
                order.status= status,
                order.deliveryDate= deliveryDate ? deliveryDate : order.deliveryDate,
                await order.save();
                // db.Order.update({
                //     status: status,
                //     deliverydate: deliverydate ? deliverydate : list.deliverydate
                // })
                resolve({
                    errCode: 0,
                    message: `Update the status succeeds!`
                })
            }
        } catch (error) {
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
    addOrder:addOrder,
    getAllOrdersByUserId:getAllOrdersByUserId,
    getDetailOrderByOrderId:getDetailOrderByOrderId
}
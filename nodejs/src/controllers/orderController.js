import orderService from '../services/orderService';

let handleAddOrder = async(req,res) => {
    let data = req.body;
    console.log(data);
    let message = await orderService.addOrder(data)
    return res.status(200).json(message);
}

let handleGetAllOrdersByUserId = async(req,res) => {
    let id = req.query.id;
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            orders : []
        })
    }
    let orders = await orderService.getAllOrdersByUserId(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        orders 
    })
}

let handleGetDetailOrdersByOderId = async(req,res) => {
    let id = req.query.id;
    if(!id){
        return res.status(200).json({
            errCode: 1,
            errMessage: 'Missing required parameters',
            detailorders : []
        })
    }
    let detailorders = await orderService.getDetailOrderByOrderId(id);
    return res.status(200).json({
        errCode: 0,
        errMessage: 'OK',
        detailorders 
    })
}


let handleUpdateAddress = async(req,res) => {
    let data = req.body;
    let message = await orderService.updateAddress(data);
    return res.status(200).json(message)
}

let handleDeleteCart = async(req,res) => {
    if(!req.body.cartId){
        return res.status(200).json({
            errCode : 1,
            errMessage: 'Missing inputs parameter!',
        })
    }
    let message = await orderService.deleteCart(req.body.cartId);
    return res.status(200).json(message);
}

let handleDeleteAllCart = async(req,res) => {
    if(!req.body.userId){
        return res.status(200).json({
            errCode : 1,
            errMessage: 'Missing inputs parameter!',
        })
    }
    let message = await orderService.deleteAllCart(req.body.userId);
    return res.status(200).json(message);
}
module.exports = {
    handleGetAllOrdersByUserId: handleGetAllOrdersByUserId,
    handleGetDetailOrdersByOderId:handleGetDetailOrdersByOderId,
    handleAddOrder: handleAddOrder,
    handleUpdateAddress: handleUpdateAddress,
    handleDeleteCart: handleDeleteCart,
    handleDeleteAllCart:handleDeleteAllCart
}

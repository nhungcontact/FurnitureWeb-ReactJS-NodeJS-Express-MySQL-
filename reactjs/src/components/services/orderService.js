import axios from "axios";
import { API_URL } from "../config/apiUrl";

const addOrder = (data) =>{
    console.log(data);
    return axios.post(`${API_URL}/api/add-order`,data);
}

const getAllOrdersByUserId = (inputId) => {
    return axios.get(`${API_URL}/api/get-orders-by-user?id=${inputId}`)
}
const getDetailOrdersByOrderId = (inputId) => {
    return axios.get(`${API_URL}/api/get-detailorders-by-order?id=${inputId}`)
}
const updateAddress = (data) =>{
    return axios.put(`${API_URL}/api/update-address`,data);
}

const deleteCart = (cartId) =>{
    return axios.delete(`${API_URL}/api/delete-cart`,{
        data:{
            cartId:cartId
        }
    });
}

const deleteAllCart = (userId) =>{
    return axios.delete(`${API_URL}/api/delete-all-cart`,{
        data:{
            userId:userId
        }
    });
}


export {
    addOrder,
    getAllOrdersByUserId,
    getDetailOrdersByOrderId,
    deleteCart,
    updateAddress,
    deleteAllCart
}
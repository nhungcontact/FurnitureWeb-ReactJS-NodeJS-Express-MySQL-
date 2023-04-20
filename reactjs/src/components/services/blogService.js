import axios from "axios";
import { API_URL } from "../config/apiUrl";

const createBlog = (data) =>{
    return axios.post(`${API_URL}/api/create-new-blog`,data);
}

const getAllBlogs = (inputId) => {
    return axios.get(`${API_URL}/api/get-all-blogs?id=${inputId}`);
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
    createBlog,
    getAllBlogs,
    deleteCart,
    updateAddress,
    deleteAllCart
}
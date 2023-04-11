import axios from "axios";
import { API_URL } from "../config/apiUrl";

const getAllProducts = (inputId) => {
    return axios.get(`${API_URL}/api/get-all-products?id=${inputId}`)
}
const getAllProductsSearchPagination = (inputId,page,limit) => {
    return axios.get(`${API_URL}/api/get-all-products-search-pagination?search=${inputId}&page=${page}&limit=${limit}`)
}
const getAllProductPhoto = (productId) => {
    return axios.get(`${API_URL}/api/get-all-productphoto?productId=${productId}`)
}
const createNewProductService = (data) =>{
    console.log(data)
    return axios.post(`${API_URL}/api/create-new-product`,data);
}
const deleteProductService = (productId) =>{
    return axios.delete(`${API_URL}/api/delete-product`,{
        data:{
            id:productId
        }
    });
}
const updateProductService = (inputData) =>{
    return axios.put(`${API_URL}/api/edit-user`,inputData)
}
const getAllColors = (inputId) => {
    return axios.get(`${API_URL}/api/get-all-colors?id=${inputId}`)
}
const createNewColorService = (data) =>{
    return axios.post(`${API_URL}/api/create-new-color`,data);
}
const deleteColorService = (colorId) =>{
    return axios.delete(`${API_URL}/api/delete-color`,{
        data:{
            id:colorId
        }
    });
}
const editColorService = (inputData) =>{
    return axios.put(`${API_URL}/api/edit-color`,inputData)
}

const createNewProductColorService = (data) =>{
    return axios.post(`${API_URL}/api/create-new-detailproduct`,data);
}

const createNewProductPhotoService = (data) =>{
    console.log(data)
    return axios.post(`${API_URL}/api/create-productphoto`,data);
}
const getDetailProductService = (data)=>{
    console.log(data)
    return axios.get(`${API_URL}/api/get-detailproduct?id=${data}`)
}
export {
    getAllProducts,
    getAllProductsSearchPagination,
    createNewProductService,
    deleteProductService,
    updateProductService,
    getAllColors,
    createNewColorService,
    editColorService,
    deleteColorService,
    createNewProductColorService,
    createNewProductPhotoService,
    getDetailProductService,
    getAllProductPhoto
}
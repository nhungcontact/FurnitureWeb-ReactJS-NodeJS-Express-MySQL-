import express from "express";
import homeController from "../controllers/homeController";
import userController from "../controllers/userController";
import productController from '../controllers/productController';
import categoryController from '../controllers/categoryController';
import cartController from '../controllers/cartController';
import addressController from '../controllers/addressController';
import orderController from '../controllers/orderController';
import multer from "multer";
// import path from 'path';

let router = express.Router();
const IMAGE_PATH = './assets/images';
var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null,IMAGE_PATH)
    },
    filename: function (req, file, cb) {
        cb(null,file.fieldname + '-' + Date.now() + '-' + file.originalname)
    }
})
   
var upload = multer({ storage: storage })

let initWebRoutes = (app) => {

    router.get('/',homeController.getHomePage);
    router.get('/crud',homeController.getCRUD);

    router.post('/post-crud',homeController.postCRUD);
    router.get('/get-crud',homeController.displayGetCRUD);

    router.get('/edit-crud',homeController.getEditCRUD);
    router.post('/put-crud',homeController.putCRUD);
    
    router.get('/delete-crud',homeController.deleteCRUD);

    router.post('/api/login',userController.handleLogin);
    router.post('/api/register',userController.handleRegister);

    router.get('/api/get-all-users', userController.handleGetAllUsers);
    router.post('/api/create-new-user',userController.handleCreateNewUser);
    router.put('/api/edit-user',userController.handleEditUser);
    router.delete('/api/delete-user',userController.handleDeleteUser);
    router.get('/api/get-user-by-email',userController.handleGetUserByEmail);
    // router.post('/api/auth/logout',userController.logout);
    router.get(
        "/api/test/user",
        userController.verifyToken
      );
   
    router.get('/api/get-all-categories', categoryController.handleGetAllCategories);
    router.post('/api/create-new-category', categoryController.handleCreateNewCategory);
    router.put('/api/update-category',categoryController.handleEditCategory);
    router.delete('/api/delete-category',categoryController.handleDeleteCategory);

    router.get('/api/get-all-products-search-pagination', productController.handleGetAllProductsSearchPagination);
    router.get('/api/get-all-products', productController.handleGetAllProducts);
    router.post('/api/create-new-product',upload.single('photo'),productController.handleCreateNewProduct);
    router.post('/api/create-productphoto',upload.array('productphoto',20),productController.handleCreateProductPhoto);
    router.use('/assets/images/',express.static(IMAGE_PATH));
    router.get('/api/get-all-product-by-category', productController.handleGetProductByCategory);
    router.get('/api/get-all-productphoto', productController.handleGetAllProductPhoto);
    // router.put('/api/edit-product',productController.handleEditproduct);
    router.delete('/api/delete-product',productController.handleDeleteProduct);
    
    router.get('/api/get-all-colors', productController.handleGetAllColors);
    router.post('/api/create-new-color',productController.handleCreateNewColor);
    router.put('/api/update-color',productController.handleEditColor);
    router.delete('/api/delete-color',productController.handleDeleteColor);

    
    router.post('/api/create-new-detailproduct',productController.handleCreateProductColor)
    router.get('/api/get-detailproduct',productController.handleGetDetailProduct);

    router.get('/api/get-cart-by-user', cartController.handleGetCartByUserId);
    router.post('/api/add-cart', cartController.handleAddCart);
    router.put('/api/update-cart',cartController.handleUpdateCart);
    router.delete('/api/delete-cart',cartController.handleDeleteCart);
    router.delete('/api/delete-all-cart',cartController.handleDeleteAllCart);

    router.get('/api/get-address-by-user', addressController.handleGetAllAddressByUserId);
    router.post('/api/create-address', addressController.handleCreateAddress);
    router.put('/api/update-address',addressController.handleUpdateAddress);
      
    router.get('/api/get-orders-by-user', orderController.handleGetAllOrdersByUserId);
    router.get('/api/get-detailorders-by-order', orderController.handleGetDetailOrdersByOderId);
    router.post('/api/add-order', orderController.handleAddOrder);
    // router.put('/api/update-address',addressController.handleUpdateAddress);


    return app.use("/", router);
}

module.exports = initWebRoutes;
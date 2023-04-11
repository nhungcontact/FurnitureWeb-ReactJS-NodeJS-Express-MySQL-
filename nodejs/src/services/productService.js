import db from "../models/index";
const { Op } = require("sequelize");

let getAllProducts = (productId) =>{
    return new Promise(async(resolve,reject)=>{
        try {
            let products='';
            if(productId === 'ALL'){
                products = db.Product.findAll({
                    raw: true,
                    include:[{
                        model: db.Category,
                        as:'categories'
                    }]
                });
            }
            if(productId && productId !== 'ALL'){
                products = await db.Product.findOne({
                    where: {id: productId},
                    include:[{
                        model: db.Category,
                        as:'categories'
                    }],
                    raw : true ,
                })
            }
            resolve(products)
        } catch (error) {
            reject(error)
        }
    })
}
let getProductsWithSearchPagination = (searchProduct,pageProduct,limitProduct)=>{
    return new Promise(async(resolve, reject) => {
        try {
            const page = parseInt(pageProduct) || 0;
            const limit = parseInt(limitProduct) || 10;
            const search = searchProduct || '';
            const offset = limit * page;
            
            const totalRows = await db.Product.count({
                where: {
                    [Op.or]:[{name:{
                        [Op.like]:'%'+search+'%'
                    }}]
                },
            })
            const totalPage = Math.ceil(totalRows / limit);
            const result = await db.Product.findAll({
                where: {
                    [Op.or]:{name:{
                        [Op.like]:'%'+search+'%'
                    }}
                },
                raw: true,
                include:[{
                    model: db.Category,
                    as:'categories'
                }],
                offset: offset,
                limit: limit,
                order: [['createdAt', 'DESC']]
            })
            // resolve(result)
            resolve({
                products: result,
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

let getProductsByCategory = (categoryId)=>{
    return new Promise( async(resolve,reject)=>{
        try {
            let products = await db.Product.findAll({
                where: {categoryId: categoryId},
                raw: true,
                include:[{
                    model: db.Category,
                    as:'categories'
                }]
            })
            // tim thay (product khac rong)
            if(products){
                resolve(products)
            }else{
                resolve('')
            }
        } catch (error) {
            reject(error);
        }
    })
}
let getProductByName = (productName) =>{
    return new Promise( async(resolve,reject)=>{
        try {
            let product = await db.Product.findOne({
                where: {name: productName},
                raw: true,
                include:[{
                    model: db.Category,
                    as:'categories'
                }]
            })
            // tim thay (product khac rong)
            if(product){
                resolve(product)
            }else{
                resolve('')
            }
        } catch (error) {
            reject(error);
        }
    })
}


let createNewProduct = (data,file) => {
    return new Promise(async(resolve,reject)=>{
        try { 
            let product = await getProductByName(data.name);
            // product rong
            if(!product){
                if(parseInt(data.price) < parseInt(data.discount)){
                    resolve({
                        errCode:1,
                        message: `Price discount must be less than price. Please re-enter the price or price discount!`
                    })
                }else {
                    let newProduct = await db.Product.create({
                        name: data.name,
                        photo: file.filename,
                        price: data.price,
                        discount: data.discount,
                        discountPer: data.discountPer,
                        totalQty: data.totalQty,
                        slug: data.slug,
                        content: data.content,
                        hidden: data.hidden,
                        newArrival: data.newArrival,
                        categoryId: data.categoryId   
                    })
                    if(newProduct){
                        let detail = JSON.parse(data.detailProduct);
                        for (var i=0;i<detail.length;i++) {
                            await db.DetailProduct.create({
                                productId:newProduct.id,
                                colorId:detail[i].colorId,
                                qtyProduct:detail[i].qtyProduct,
                            })
                        }
                    }
                    resolve({
                        errCode: 0,
                        message: 'OK'
                    }); 
                }
            // product khac rong
            }else{
                resolve({
                    errCode: 2,
                    message: 'Already exist product'
                })
            }
        } catch (error) {
            console.error(error)
            reject(error)
        }
    })
}
let getDetailProduct = (productId)=>{
    return new Promise(async(resolve,reject)=>{
        try { 
            let detailproducts = '';           
            if(productId){
                    detailproducts = await db.DetailProduct.findAll({
                    where: {productId: productId},
                    raw: true,
                    include:[
                        // {
                        //     model: db.Product,
                        //     as:'products'
                        // },
                        {
                            model: db.Color,
                            as:'colors',
                            // attributes: ["id", "name","code"]
                        }
                    ]
                })
            }
            console.log(detailproducts);
            resolve(detailproducts)
        } catch (error) {
            reject(error)
        }
    })
}

let getAllColors =(colorId)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let colors='';
            if(colorId === 'ALL'){
                colors = db.Color.findAll({
                    raw: true,
                });
            }
            if(colorId && colorId !== 'ALL'){
                colors = await db.Color.findOne({
                    where: {id: colorId},
                    raw: true,
                })
            }
            resolve(colors)
        } catch (error) {
            reject(error)
        }
    })
}
let getColorWithPagination = (searchColor,pageColor,limitColor)=>{
    return new Promise(async(resolve, reject) => {

        console.log(searchColor,pageColor,limitColor)
        try {
            const page = parseInt(pageColor) || 0;
            const limit = parseInt(limitColor) || 10;
            const search = searchColor || '';
            const offset = limit * page;
            const totalRows = await db.Color.count({
                where: {
                    [Op.or]:[{name:{
                        [Op.like]:'%'+search+'%'
                    }}]
                }
            })
            console.log("row:",totalRows)
            const totalPage = Math.ceil(totalRows / limit);
            console.log("search:",search)
            const result = await db.Color.findAll({
                where: {
                    [Op.or]:{name:{
                        [Op.like]:'%'+search+'%'
                    }}
                },
                raw: true,
                offset: offset,
                limit: limit,
                order: [['createdAt', 'DESC']]
            })
            // resolve(result)
            resolve({
                colors: result,
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
let createNewColor = (data) => {
    console.log(data)
    return new Promise((resolve,reject)=>{
        try { 
            db.Color.findOne({
                where: { 
                    code: data.code,    
                },
                raw: true
            }).then(async Color => {
                console.log("Create",Color)

                if(!Color){
                    await db.Color.create({
                        name: data.name,
                        code: data.code
                    })
                    resolve({
                        errCode: 0,
                        message: 'OK'
                    });
                }else{
                    resolve({
                        errCode: 1,
                        message: 'Already exist color!'
                    })
                }
            })
        } catch (error) {
            reject(error)
        }
    })
}
let deleteColor = (ColorId) => {
    return new Promise (async(resolve,reject)=>{
        let foundColor = await db.Color.findOne({
            where: {id: ColorId}
        })
        if(!foundColor){
            resolve({
                errCode:2,
                errMessage: `The Color isn't exist`
            })
        }
        await db.Color.destroy({
            where: {id:ColorId}
        })
        resolve({
            errCode: 0,
            errMessage: `The Color is delete`
        });
    })
}
let updateColor = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!data.id){
                resolve({
                    errCode:2,
                    errMessage:`Missing required parameters!`
                })
            }
            let Color= await db.Color.findOne({
                where: { id: data.id},
                raw: false
            })
            if(Color){
                Color.name= data.name,
                Color.code= data.code,
                await Color.save();
                resolve({
                    errCode: 0,
                    message: `Update the Color succeeds!`
                })
            }else{
                resolve({
                    errCode: 1,
                    errMessage: `Color's not found`
                });
            }
        } catch (error) {
            reject(error)
        }
    });
}

let createNewProductColor =(data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let product = await getProductByName(data.productName);
            let arrayColor = data.colorId;
            if(product){
                for (var i = 0; i < arrayColor.length; i++) {
                    await db.DetailProduct.create({
                        colorId: arrayColor[i],
                        productId: product.id,
                        qtyProduct:data.qtyProduct
                    })
                }
                // await db.DetailProduct.create({
                //     productId: product.id,
                //     colorId: colorId   
                // })
                resolve({
                    errCode: 0,
                    message: 'OK'
                });
            }else{
                resolve({
                    errCode: 1,
                    message: 'Already not exist product!'
                });
            }
        } catch (error) {
            reject(error)
        }
    })
}

let getAllProductPhoto = (productId)=>{
    return new Promise(async(resolve, reject) => {
        try {
            let productPhoto = '';           
            if(productId){
                productPhoto = await db.ProductPhoto.findAll({
                    where: {
                        productId:productId
                    },
                    raw: true,
                    include:[
                        {
                            model: db.Product,
                            as:'products'
                        },
                    ],
                  
                })
            }
            resolve(productPhoto)
        } catch (error) {
            reject(error);
        }
    })
}
let createNewProductPhoto =(data,files)=>{
    console.log(data,files);
    return new Promise(async(resolve,reject)=>{
        try {
            let product = await getProductByName(data.productName);
            if(product){
                for (var i = 0; i < files.length; i++) {
                    await db.ProductPhoto.create({
                        path: files[i].filename,
                        productId: product.id,
                        showing:data.showing
                    })
                    
                }
                console.log('galleries',product);
                resolve({
                    errCode: 0,
                    message: 'OK'
                });
            }else{
                resolve({
                    errCode: 1,
                    message: 'Already not exist product!'
                });
            }
           
            
        } catch (error) {
            reject(error)
        }
    })
}

let deleteProduct = (ProductId) => {
    return new Promise (async(resolve,reject)=>{
        let foundProduct = await db.Product.findOne({
            where: {id: ProductId}
        })
        if(!foundProduct){
            resolve({
                errCode:2,
                errMessage: `The Product isn't exist`
            })
        }
        await db.Product.destroy({
            where: {id:ProductId}
        })
        resolve({
            errCode: 0,
            errMessage: `The Product is delete`
        });
    })
}

let updateProductData = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            if(!data.id){
                resolve({
                    errCode:2,
                    errMessage:`Missing required parameters!`
                })
            }
            let Product= await db.Product.findOne({
                where: { id: data.id},
                raw: false
            })
            if(Product){
                Product.firstName= data.firstName,
                Product.lastName= data.lastName,
                Product.address=data.address
                await Product.save();
                resolve({
                    errCode: 0,
                    message: `Update the Product succeeds!`
                })
            }else{
                resolve({
                    errCode: 1,
                    errMessage: `Product's not found`
                });
            }
        } catch (error) {
            reject(error)
        }
    });
}

module.exports = {
    // get product
    getAllProducts: getAllProducts,
    getProductsWithSearchPagination:getProductsWithSearchPagination,
    getProductsByCategory:getProductsByCategory,
    getProductByName: getProductByName,

    // C-U-D product
    createNewProduct: createNewProduct,
    updateProductData: updateProductData,
    deleteProduct:deleteProduct,
    
    // CRUD color
    createNewColor: createNewColor,

    getAllColors: getAllColors,
    getColorWithPagination:getColorWithPagination,

    updateColor:updateColor,
    deleteColor:deleteColor,

    // C-R product photo
    createNewProductPhoto:createNewProductPhoto,
    getAllProductPhoto:getAllProductPhoto,
    
    // C-R detail product
    getDetailProduct:getDetailProduct,
    createNewProductColor: createNewProductColor,



    
    
    
}
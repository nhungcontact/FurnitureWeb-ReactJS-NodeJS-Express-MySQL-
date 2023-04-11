import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
// import { FormattedMessage } from 'react-intl';
// import { connect } from 'react-redux';
import '../../../../styles/Login.css';
import { deleteProductService, getAllProductsWithPagination } from '../../../../services/productService';
import SelectTypeProduct from "../TypeProduct/SelectTypeProduct";
import {ThreeDots} from 'react-loader-spinner';
import { Pagination } from 'reactstrap';
// import ReactSearchBox from "react-search-box";

// const Arrays = (data, fieldId, fieldName) => {
//     let arrayItem = [];
//     if (data && Array.isArray(data)) {
//         data.map((item, key) => {
//             arrayItem.push({ key: item[fieldId], value: item[fieldName] });
//             return null;
//         });
//     }
//     return arrayItem;
// };

const ListBlogs =()=> {

    const [arrProducts,setArrProducts]=useState([]);
    const [page,setPage]=useState(0);
    const [limit,setLimit]=useState(10);
    const [pages,setPages]=useState(0);
    const [rows,setRows]=useState(0);
    const [searchInput, setSearchInput] = useState('');
    const [keyword,setKeyword]=useState('')
    // const [offset,setOffset]=useState(0);

    // const [perPage]=useState(15);
    // const [orgtableData,setOrgtableData]=useState([]);
    // const [pageCount, setPageCount] = useState(0);

    const [isloaded,setIsLoaded]=useState(false);

    // const getAllProductsFromReact = async() =>
    // {
    //     setIsLoaded(false);
    //     let list = await getAllProducts('ALL');
    //     if(list && list.data.errCode === 0){
    //         var tdata = list.data.products;
    //         var slice = tdata.slice(offset,offset + perPage);
    //         setPageCount(Math.ceil(tdata.length / perPage));
    //         setOrgtableData(tdata)
    //         setArrProducts(slice);
    //         setIsLoaded(true);
    //     }
    // }
    useEffect(()=>{
        getAllProductsFromReact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[page,keyword]);

    const getAllProductsFromReact = async()=>{
        setIsLoaded(false)
        const response = await getAllProductsWithPagination(keyword,page,limit);
        console.log(response)
        if(response && response.data.errCode === 0){
            setArrProducts(response.data.products.products);
            setPage(response.data.products.page);
            setPages(response.data.products.totalPage);
            setLimit(response.data.products.limit);
            setRows(response.data.products.totalRows);
            setIsLoaded(true);
        }
    }
    const changePage = ({selected})=>{
        setPage(selected)
    }
    const searchData = (e)=>{
        e.preventDefault();
        setPage(0);
        setKeyword(searchInput);
    }
    // const handleSearch = async(e)=>{
    //     e.preventDefault();
    //     let list = await getAllProducts('ALL');
    //     if(list && list.data.errCode === 0){
    //         setArrProducts(arrProducts);
    //     }

    // }
    // const handleReset = ()=>{

    // }
    // const handlePageClick = (e) => {
    //     const selectedPage = e.selected;
    //     const offset = selectedPage * perPage;
    //     setOffset(offset);
    //     loadMoreData();
    // };

    // const loadMoreData=()=> {
    //     const data = orgtableData;
    //     const slice = data.slice(offset, offset + perPage);
    //     setPageCount(Math.ceil(data.length/perPage))
    //     setArrProducts(slice);
    // }


    // const createNewProduct = async(data) => {
    //     try {
    //         let response = await createNewProductService(data);
    //         if(response && response.data.errCode !== 0){
    //             alert(response.data.errMessage);
    //         }else{
    //             await getAllProductsFromReact();
    //             setIsOpenModalProduct(false)
    //             emitter.emit('EVENT_CLEAR_MODAL_DATA');
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
        
    // }
    
    const handleDeleteProduct= async(product)=>{
        console.log('Delete!',product)
        try {
            let res = await deleteProductService(product.id);
            if(res && res.data.errCode === 0){
                await this.getAllProductsFromReact();
            }else{
                alert(res.data.errMessage)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // handleSubmit = async (event) => {
    //     event.preventDefault();
    //     this.setState({ loading: false })
    //     let list = await GetProductDetails.getProductById(this.state.selectedProduct.value);
    //     if (list) {
    //         this.setState({ getList: list.data, isloaded: true })
    //     }

    // }
    // const doEditProduct = async(user) => {
    //     try {
    //         let res = await editProductService(user);
    //         console.log(res);
    //         if(res && res.data.errCode===0){
    //             setIsOpenModalEditProduct(false)
    //             await getAllProductsFromReact()
    //         }else{
    //             alert(res.data.errMessage)
    //         }
    //     } catch (error) {
    //         console.log(error)
    //     }
    // }
    
    return (
        <div className='list'>
            <div className="row">
                <div className="col-lg-5 col-md-9 col-lg-6">
                    <h3 className="mt-30 page-title">Product</h3>
                </div>
                {/* <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
                    <Button variant="contained" onClick={(e) => this.handleBack()}><i className="fas fa-arrow-left" /> Back</Button>
                </div> */}
            </div>
            <ol className="breadcrumb mb-30">
                <li className="breadcrumb-item"><a href="index.html">Dashboard</a></li>
                <li className="breadcrumb-item active">Product</li>
            </ol>
            <div className='form-container mt-4'>
                <h4 className='text-center form-title'>List Products</h4>
                <div className='form-body'>
                    <div className='d-flex justify-content-between align-items-center'>
                        <SelectTypeProduct />
                        <div className='d-flex'>
                            <form className="d-flex" onSubmit={searchData}>
                                <input
                                    className='form-control'
                                    type="text"
                                    placeholder="Search...."
                                    onChange={e=>setSearchInput(e.target.value)}
                                    value={searchInput} />
                                <button type='submit' style={{whiteSpace:"nowrap"}} className='btn btn-primary'>Search</button>
                            </form>
                            <div className='mx-2'>
                                <a href='/admin/add-product'><button className='btn add-product'><i class="fa-solid fa-plus me-2"></i>Add</button></a>
                            </div>
                        </div>
                    </div>
                   
                    <div className='table-responsive mt-5 mb-3'>
                        <table className="table table-hover">
                            <thead>
                                <tr>
                                    <th className='text-center align-middle form-title'>#</th>
                                    {/* <th className='text-center align-middle form-title'>Mã</th> */}
                                    <th className='text-center align-middle form-title col-3'>Name</th>
                                    <th className='text-center align-middle form-title'>Image</th>
                                    <th className='text-center align-middle form-title'>Price</th>
                                    <th className='text-center align-middle form-title'>Discount</th>
                                    <th className='text-center align-middle form-title'>Quantity</th>
                                    <th className='text-center align-middle form-title'>Hidden</th>
                                    <th className='text-center align-middle form-title'>New Arrival</th>
                                    <th className='text-center align-middle form-title'>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                            {isloaded ? 
                                arrProducts && arrProducts.map((product,index)=>{
                                    return(
                                        <tr key={product.id}>
                                            <td className='text-center align-middle'>{index+1}</td>
                                            {/* <td className='text-center align-middle'>{product.id}</td> */}
                                            <td className='text-center align-middle'>{product.name}</td>
                                            <td className='text-center align-middle'>
                                                <img src={product.image} alt={product.name} />
                                            </td>
                                            <td className='text-center align-middle'>{product.price}</td>
                                            <td className='text-center align-middle'>{product.discount !== 0 ? product.discount : '' }</td>
                                            <td className='text-center align-middle'>{product.quantity}</td>
                                            <td className='text-center align-middle'>
                                                {product.hidden===0 ?
                                                    <span><i className="fa-solid fa-xmark text-danger"></i> No</span>
                                                :
                                                    <span><i className="fa-solid fa-check text-success"></i> Yes</span>
                                                }
                                                
                                            </td>
                                            <td className='text-center align-middle'>
                                                {product.newArrival===0 ?
                                                    <span><i className="fa-solid fa-xmark text-danger"></i> No</span>
                                                :
                                                    <span><i className="fa-solid fa-check text-success"></i> Yes</span>
                                                }
                                            </td>
                                            <td className='text-center'>
                                                <Link to={`/admin/edit-product/${product.id}`}>
                                                    <span className="hover-icon text-success">
                                                        <i className="fa-solid fa-pen-to-square me-3"></i>
                                                    </span>
                                                </Link>
                                                <span onClick={()=>handleDeleteProduct(product)} className="hover-icon text-danger">
                                                    <i className="fa-solid fa-trash"></i>
                                                </span>
                                            </td>
                                        </tr>
                                    )
                                })
                                : 
                                <ThreeDots 
                                    height="60" 
                                    width="60" 
                                    radius="9"
                                    color="#FF6600" 
                                    ariaLabel="three-dots-loading"
                                    wrapperStyle={{}}
                                    wrapperClassName=""
                                    visible={true}
                                    />
                                }
                            </tbody>
                        </table>
                        
                    </div>
                    
                    {isloaded &&
                        <Pagination page={page} rows={rows} pages={pages} changePage={changePage} />
                    }
                </div>
            </div>
            
        </div>

    )
}

export default ListBlogs;
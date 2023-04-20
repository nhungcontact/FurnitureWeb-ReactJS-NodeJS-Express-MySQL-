import { useState,useEffect } from "react";
import { getAllProducts } from "../../../services/productService";
import {IMG_URL} from '../../../config/imgUrl';
import { ThreeDots } from "react-loader-spinner";
import { Link } from "react-router-dom";
import Color from "./Color";
import ProductPhoto from "./ProductPhoto";
import Pagination from "../../../pagination";
import Category from "./Category";

const Product= ()=>{
    const [arrProducts,setArrProducts]=useState([]);
    // const [searchInput, setSearchInput] = useState('');
    // const [keyword,setKeyword]=useState('');
    // const [pagProduct,setPagProduct]=useState([]);
    const [isloaded,setIsLoaded]=useState(false);
    const [offset, setOffset] = useState(0);
    const [perPage]=useState(20);
    const [currentPage,setCurrentPage]=useState(0);
    const [pageCount,setPageCount]=useState(0);

    useEffect(()=>{
        getAllProductsFromReact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[perPage,offset]);

    const getAllProductsFromReact = async()=>{
        setIsLoaded(false);
        const response = await getAllProducts('ALL');
        if(response && response.data.errCode === 0){
            var tdata = response.data.products;
            var slice = tdata.slice(offset, offset + perPage)
            setPageCount(Math.ceil(tdata.length / perPage));
            // setPagProduct(tdata);
            setArrProducts(slice);
            setIsLoaded(true);
        }
    }
    const handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * perPage;
        setCurrentPage(selectedPage);
        setOffset(offset);
        // loadMoreData();
    };

    // const loadMoreData = ()=> {
    //     const data = pagProduct;
    //     const slice = data.slice(offset, offset + perPage)
    //     setPageCount(Math.ceil(data.length / perPage));
    //     setArrProducts(slice);
    // }
    // const searchData = (e)=>{
    //     e.preventDefault();
    //     setPage(0);
    //     setKeyword(searchInput);
    // }
    const [isShowSort,setIsShowSort]=useState(true);
    const handleShowSort = ()=>{
        setIsShowSort(!isShowSort);
    }
    // const sortProduct = ()=>{

    // }
    return(
        <div className="products-content">
            <div className="breadcrumb_background_sp">
                <h1 className="title_bg">Product</h1>
                <div className="overlay"></div>
            </div>
            <div className="row py-3 px-4">
                <div className="col-12 col-sm-12 col-md-3 col-lg-3">
                    <div className="card border mb-3">
                        <h5 className="card-header" onClick={handleShowSort}>Filter</h5>
                        <div className="card-body text-dark" style={{display:isShowSort ? "block" : "none" }}>
                            <div className="">
                                <div className="layered_subtitle dropdown-filter">
                                    <span>Product Category</span>
                                    <span className="icon-control">
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </div>
                                <Category />
                            </div>
                            <div className="">
                                <div className="layered_subtitle dropdown-filter">
                                    <span>Price</span>
                                    <span className="icon-control">
                                        <i className="fa-solid fa-minus"></i>
                                    </span>
                                </div>
                                <div className="price">
                                    <div className="form-check ">
                                        <input className="form-check-input me-2" type="checkbox" id="inlineCheckbox1" value="(<1000000)" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox1">Dưới 10,000,000₫</label>
                                    </div>
                                    <div className="form-check ">
                                        <input className="form-check-input me-2" type="checkbox" id="inlineCheckbox2" value="(>=1000000 AND <=1500000)" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox2">10,000,000₫ - 15,000,000₫</label>
                                    </div>
                                    <div className="form-check ">
                                        <input className="form-check-input me-2" type="checkbox" id="inlineCheckbox3" value="(>=1500000 AND <=2000000)" />
                                        <label className="form-check-label" htmlFor="inlineCheckbox3">15,000,000₫ - 20,000,000₫</label>
                                    </div>
                                </div>
                            </div>
                           <Color />
                           
                        </div>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-9 col-lg-9" >
                    <div className="row align-items-center">
                        <h4 className="py-3 col-10 text-xxl-start text-xl-start text-lg-start text-md-center text-sm-center text-xs-center text-center">Tất cả sản phẩm</h4>
                        <div className="col-2">
                            <form action="" >
                                <select name="sort" id="sort" className="form-select">
                                    <option value="none">Sort by</option>
                                    <option value="priceLowest">Price (Low to High)</option>
                                    <option value="priceHighest">Price (High to Low)</option>
                                    <option value="nameAtoZ">Discount (High to Low)</option>
                                    <option value="nameZtoA">Name (A to Z)</option>
                                </select>
                            </form>
                        </div>
                    </div>
                    <div className="row justify-content-center py-4">
                        {isloaded ? arrProducts && arrProducts.map((product)=>{
                        
                            return(
                                <div className="col-lg-3 col-ms-6 col-sm-6 col-6" key={product.id}>
                                <div className="product-img">
                                {product.discountPer ? 
                                    <div className="sale">
                                        <span>{product.discountPer + '%'}</span>
                                    </div>
                                      : ''}
                                    <Link to={`detail/${product.slug}/${product.id}`}  className="change">
                                        <img src={`${IMG_URL}/${product.photo}`} alt={product.name} className="img-fluid"/>
                                        <ProductPhoto productId={product.id} IMG_URL={IMG_URL} />
                                    </Link>
                                </div>
                                <div className="product-title">
                                    <Link to={`detail/${product.slug}/${product.id}`}>{product.name}</Link>
                                    <p>{new Intl.NumberFormat().format(product.price)}đ <del className="card-price-old">{product.discount ? product.discount+'đ' : ''}</del></p>
                                </div>
                            </div>
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
                    </div>
                    {isloaded &&
                        <Pagination handlePageClick={handlePageClick} currentPage={currentPage} pageCount={pageCount} />
                    }
                </div>
            </div>
            
            {/* <PaginatedItems limit={4} /> */}
        </div>
        
    )
}
export default Product;
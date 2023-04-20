import Banner from "./banner";
import Carousels from "./carousel";
import NewProduct from "./new-product";

const Home = ()=>{
    return(
        <div>  
            <Banner />
            <Carousels />
            <NewProduct />
            <div className="row py-5 justify-content-center">
                <div className="col-4 img-hover-zoom img-hover-zoom--blur">
                    <img className="img-fluid" src="https://nhaxinh.com/wp-content/uploads/2021/11/miami-01.png" alt="" />
                    <div className="caption_banner">
                        <span className="subtitle">Thư giãn với</span>
                        <h3>Sofa</h3>
                        <a className="button" href="sanpham.php">Mua ngay</a>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className="col-4 img-hover-zoom img-hover-zoom--blur">
                    <img className="img-fluid" src="https://nhaxinh.com/wp-content/uploads/2021/11/miami-01.png" alt="" />
                    <div className="caption_banner">
                        <span className="subtitle">Thư giãn với</span>
                        <h3>Sofa</h3>
                        <a className="button" href="sanpham.php">Mua ngay</a>
                    </div>
                    <div className="overlay"></div>
                </div>
                <div className="col-4 img-hover-zoom img-hover-zoom--blur">
                    <img className="img-fluid" src="https://nhaxinh.com/wp-content/uploads/2021/11/miami-01.png" alt="" />
                    <div className="caption_banner">
                        <span className="subtitle">Thư giãn với</span>
                        <h3>Sofa</h3>
                        <a className="button" href="sanpham.php">Mua ngay</a>
                    </div>
                    <div className="overlay"></div>
                </div>
            </div>
            <NewProduct />
            <div className="py-5 d-flex justify-content-center">
                <div className="img-hover-zoom-1 img-hover-zoom--blur-1">
                    <img src="//bizweb.dktcdn.net/100/364/402/themes/857456/assets/banner.jpg?1650271997394" data-src="//bizweb.dktcdn.net/100/364/402/themes/857456/assets/banner.jpg?1650271997394" alt="Banner quảng cáo" data-was-processed="true" />
                </div>
            </div>
            <NewProduct />
            <div className="section_policy">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                            <i className="fa-solid fa-truck-fast"></i>
                            <div className="text">
                                <b>Free Delivery</b>
                                <p>Free shipping on all order</p>
                            </div>                    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                        <i className="fa-brands fa-creative-commons-sampling"></i>

                            <div className="text">
                                <b>Online Support 24/7</b>
                                <p>Online support 24 hours a day</p>
                            </div>                    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                        <i className="fa-solid fa-box-open"></i>
                            <div className="text">
                                <b>Money Return</b>
                                <p>Back guarantee under 7 days</p>
                            </div>                    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                        <i className="fa-solid fa-clipboard-list"></i>
                            <div className="text">
                                <b>Member Discount</b>
                                <p>On every order over 500.000đ</p>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
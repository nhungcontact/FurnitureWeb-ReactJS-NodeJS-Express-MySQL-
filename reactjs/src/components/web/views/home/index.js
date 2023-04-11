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
                <div className="container">
                    <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                            <i className="fa-solid fa-truck-fast"></i>
                            <div className="text">
                                <b>GIAO HÀNG MIỄN PHÍ</b>
                                <p>Với đơn trên 300.000 đ</p>
                            </div>                    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                        <i className="fa-brands fa-creative-commons-sampling"></i>

                            <div className="text">
                                <b>HỖ TRỢ 24/7</b>
                                <p>Nhanh chóng thuận tiện</p>
                            </div>                    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                        <i className="fa-solid fa-box-open"></i>
                            <div className="text">
                                <b>ĐỔI TRẢ 3 NGÀY</b>
                                <p>Hấp dẫn chưa từng có</p>
                            </div>                    
                        </div>
                        <div className="col-lg-3 col-md-6 col-sm-6 col-12 giaohang">
                        <i className="fa-solid fa-clipboard-list"></i>
                            <div className="text">
                                <b>GIÁ TIÊU CHUẨN</b>
                                <p>Tiết kiệm 10% giá cả</p>
                            </div>                    
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Home;
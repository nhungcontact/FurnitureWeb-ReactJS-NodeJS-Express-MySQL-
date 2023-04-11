const Footer = ()=>{
    return(
        <div className="container footer-content">
            <button id="myBtn" title="Go to top" style={{display:"block"}}><i className="fa-solid fa-arrow-up"></i></button>
            <div className="row my-3 py-4">
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <a href="wfds" className="logo justify-content-md-center">
                        HOME's
                    </a>
                    <div className="row">
                        <div className="col-12"><b>Địa Chỉ:</b> số nhà 123, đường số 1, phường Xuân Khánh, quận Ninh Kiều, thành phố Cần Thơ</div>
                        <div className="col-12"><b>Hotline:</b> 1900 6777</div>
                        <div className="col-12"><b>Email:</b> homes@company.vn</div>
                    </div>
                    <h5 className="pt-3">Liên kết mạng xã hội</h5>
                    <div className="is-divider small"></div>
                    <div className="row ps-4 link-social">
                    <a href="dsad" className="col-2">
                        <i className="fa-brands fa-facebook-f"></i>
                    </a>
                        <a href="adasd" className="col-2">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                        <a href="adasdsa" className="col-2">
                            <i className="fa-brands fa-twitter"></i>
                        </a>
                    </div>
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h5 className="pt-3">Về Chúng Tôi</h5>
                    <div className="about row ps-4">
                        <div className="is-divider small"></div>
                        <a className="col-12" href="trangchu.php">Trang Chủ</a>
                        <a className="col-12" href="gioithieu.php">Giới Thiệu</a>
                        <a className="col-12" href="sanpham.php">Sản Phẩm</a>
                        <a className="col-12" href="tintuc.php">Tin Tức</a>
                        <a className="col-12" href="lienhe.php">Liên Hệ</a>
                    </div>
                    {/* <h5 className="pt-3">Đánh Giá</h5>
                    <div className="rate">
                        <div className="is-divider small"></div>
                        <div className="widget">
                            <div className="rating">
                                <input type="radio" name="rate" id="rate-5"/>
                                <label htmlFor="rate-5"><i className="fa-solid fa-star"></i></label>
                                <input type="radio" name="rate" id="rate-4"/>
                                <label htmlFor="rate-4"><i className="fa-solid fa-star"></i></label>
                                <input type="radio" name="rate" id="rate-3"/>
                                <label htmlFor="rate-3"><i className="fa-solid fa-star"></i></label>
                                <input type="radio" name="rate" id="rate-2"/>
                                <label htmlFor="rate-2"><i className="fa-solid fa-star"></i></label>
                                <input type="radio" name="rate" id="rate-1"/>
                                <label htmlFor="rate-1"><i className="fa-solid fa-star"></i></label>
                            </div>
                        </div>
                    </div> */}
                </div>
                <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
                    <h5 className="pt-3">Thư Gửi</h5>
                    <div className="is-divider small"></div>
                    <p>Hãy để lại email của bạn để nhận được những ý tưởng trang trí mới và những thông tin, ưu đãi từ <b>HOME's</b></p>
                    <div className="py-1 send-letter">
                        <div className="mb-3">
                            <label style={{color:"#ffffff"}} htmlFor="exampleFormControlInput1" className="form-label">Họ Tên:</label>
                            <input type="text" className="form-control" style={{width:"fit-content"}} id="exampleFormControlInput1"/>
                        </div>
                        <div className="mb-3">
                            <label style={{color:"#ffffff"}} htmlFor="exampleFormControlInput2" className="form-label">Email:</label>
                            <input type="email" className="form-control" style={{width:"fit-content"}} id="exampleFormControlInput2" placeholder="name@example.com"/>
                        </div>
                        <button type="submit">Đăng Ký</button>
                    </div>
                        
                </div>
          </div>
        </div>
    )
}
export default Footer;
import { Route,Routes, useLocation } from "react-router-dom";
import Header from "./header";
import Footer from "./footer";
import './css/style.css';
import Home from "./views/home";
import Product from "./views/product";
import DetailProduct from "./views/detail-product";
import Cart from "./views/cart";
import CheckoutDetail from "./views/checkout";
import Account from "./views/account";

const RootRouterWeb = ()=>{
    const location = useLocation();
    return(
        <div className="web">
            <div className="header-banner" style={{position:(location.pathname === '/' ? 'absolute' : '')}}>
                <Header />
            </div>
            <Routes>
                <Route path="/*" element={<Home />} />
                <Route path="product/*" element={<Product /> } />
                <Route path="product/detail/:slug/:id" element={<DetailProduct /> } />
                <Route path="cart" element={<Cart />} />
                <Route path="checkout" element={<CheckoutDetail />} />
                <Route path="account/*" element={<Account/> } />
                {/* <Route path="list-product" element={<List />} />
                <Route path="add-product" element={<AddMainProduct />} />
                <Route path="edit-product/:id" element={<EditProduct /> }/>
                <Route path="list-type-product" element={<ListType />} />
                <Route path="add-color" element={<ListColor />} /> */}

                {/* <Route path="users" element={<ListUser />} /> */}
            </Routes>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}
export default RootRouterWeb;
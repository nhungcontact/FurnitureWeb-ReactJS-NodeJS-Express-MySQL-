import { useEffect, useState } from "react";
import { getDetailOrdersByOrderId } from "../../../../services/orderService";
import { IMG_URL } from "../../../../config/imgUrl";
const DetailOrder = (props)=>{
    const [listDetail,setListDetail]=useState([]);
    const [orderId]=useState(props.id);
    useEffect(()=>{
        getDetailOrdersFromReact()
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[orderId]);

    const getDetailOrdersFromReact = async()=>{
        let list = await getDetailOrdersByOrderId(orderId);
        console.log(list);
        if(list && list.data.errCode === 0){
            setListDetail(list.data.detailorders);
        }

    }
    return(
        <div className='row'>
            {listDetail && listDetail.map((item,index)=>(
            <div className="d-flex justify-content-between align-items-center mb-4 col-12"key={item.id}>
                <div className='d-flex justify-content-between'>
                    {/* <img src={`${IMG_URL}/${item.products.photo}`} alt="fdsfds" className='img-fluid' style={{width:"110px"}} /> */}
                    <div className='ms-2'>
                        <b>tuidsasadasd</b>
                        <p className="m-0">{new Intl.NumberFormat().format(item.price)}đ</p>
                        <p className="m-0">Color: <i style={{color:item.color}} class="fa-solid fa-circle"></i></p>
                        <p className="text-muted m-0">{item.quantity} items</p>
                    </div>
                </div>
                <div className="">
                    <div>{item.price}</div>
                    <del className='card-price-old'>1,234,455</del>
                </div>
            </div>
            ))}
        </div>
            
    )
}
export default DetailOrder;
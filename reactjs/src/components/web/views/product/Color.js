import { useEffect, useState } from "react";
import { getAllColors } from "../../../services/productService";

const Color = ()=>{
    const [color,setColor]=useState([])

    useEffect(()=>{
        getAllColorsFromReact();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[]);

    const getAllColorsFromReact = async()=>{
        let data = await getAllColors('ALL');
        
        if(data && data.data.errCode === 0){
            setColor(data.data.colors);
        }
    }
    return(
        <div className="">
            <div className="layered_subtitle dropdown-filter">
                <span>color</span>
                <span className="icon-control">
                    <i className="fa-solid fa-minus"></i>
                </span>
            </div>
            <div className="color">
            {color && color.map((color)=>{
                return(
                    <div className="form-check form-check-inline" key={color.id}>
                        <input className="form-check-input" style={{backgroundColor:color.code}} name="mausac[]" type="checkbox" value={color.id} title={color.name} />
                    </div>
                )
            })
            }
            </div>
        </div>
    )
}
export default Color;
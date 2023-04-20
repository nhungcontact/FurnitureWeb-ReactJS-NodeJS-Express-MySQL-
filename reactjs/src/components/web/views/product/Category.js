import { useEffect, useState } from "react";
import { getAllCategories } from "../../../services/categoryService";

const Category = ()=>{
    const [arrCategory,setArrCategory]=useState([]);
    useEffect(()=>{
        getAllCategoriesFromReact();
    },[]);
    const getAllCategoriesFromReact = async()=>{
        const list = await getAllCategories('ALL');
        if(list && list.data.errCode === 0){
            setArrCategory(list.data.categories);
        }
    }
    return(
        <div className="row">
            {arrCategory && arrCategory.map((item)=>{
                return(
                    <div className="mb-2" href="sa" key={item.id}>{item.name}</div>
                )
            })}
            
        </div>
    )
}
export default Category;
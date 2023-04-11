import Select from 'react-select';
import { useEffect,useState } from 'react';
import { getAllCategories } from '../../../services/categoryService';

const SelectCategory =(props)=>{
    const Arrays = (data, fieldName, fieldValue) => {
        let arrayItem = [];
        if (data && Array.isArray(data)) {
            data.map((item, key) => {
                arrayItem.push({ value: item[fieldValue], label: item[fieldName] });
                return null;
            });
        }
        return arrayItem;
    };

    const [getList,setGetList]=useState({});

    useEffect (()=>{
        getAllCategoriesFromReact();
    },[])

    const getAllCategoriesFromReact = async() =>{
        let response = await getAllCategories('ALL');
        if(response && response.data.errCode === 0){
            setGetList(response.data.categories)
        }
    }
    const handleSelectChange = (name) => {
        props.onSelected(name.value)
    };

      
    return(
        <Select 
            name="typeId" 
            defaultValue={Arrays(getList, "name", "id")[0]}
            isSearchable={true} 
            onChange={handleSelectChange} 
            options={Arrays(getList, "name", "id")} 
            placeholder="Select..."
            />
    )
}

export default SelectCategory;
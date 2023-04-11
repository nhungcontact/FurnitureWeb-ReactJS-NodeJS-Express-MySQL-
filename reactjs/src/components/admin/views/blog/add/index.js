import { useState } from "react";
import { Button } from "reactstrap";
import swal from 'sweetalert2';
import ImageUploading from 'react-images-uploading';
import SelectTypeBlog from "../TypeBlog/SelectTypeBlog";
import { createNewBlogGalleriesService, createNewBlogService } from "../../../../services/BlogService";
import { createNewBlogColorService } from "../../../../services/BlogService";
import RichTextEditor from "../../RichTextEditor";
import SelectColor from "../BlogColor/SelectColor";

const AddBlog =()=>{

    const [arrInput,setArrBlog]=useState({
        name: '',image:'',price:'',discount:'',discountPer:'',quantity:'',slug:'',content:'',hidden:'',newArrival:'',typeId:''
    });
    const [arrColor,setArrColor]= useState('');

    const [images,setImages]=useState('');
    const maxNumber = 69;

    // const [listColor,setListColor]=useState([{ color: '#000000' }]);

    const handleOnChange=(e)=>{
        const {name,value}= e.target;
        setArrBlog({...arrInput,[name]:value})
        console.log("add Blog",{...arrInput,[name]:value})
    }
    const handleChangeImage = (e)=>{
        setArrBlog({...arrInput,image: e.target.files[0]});
    }

    const handleContentChange = contentHtml => {
        setArrBlog({...arrInput,content:contentHtml})
    };
    const onChange = (imageList, addUpdateIndex) => {
        setImages(imageList);
    };
    // const handleOnChangeColor = (e, index) => {
    //     const { name, value } = e.target;
    //     const list = [...listColor];
    //     list[index][name] = value;
    //     setListColor(list);
    //     console.log(list)
    // };

    // const handleAddColor = () => {
    //     setListColor([...listColor, { color: '#000000' }]);
    // };

    // const handleRemoveColor = (index) => {
    //     swal.fire({
    //         title: 'Are you sure?',
    //         text: "You won't be able to revert this!",
    //         icon: 'warning',
    //         showCancelButton: true,
    //         confirmButtonColor: '#3085d6',
    //         cancelButtonColor: '#d33',
    //         confirmButtonText: 'Yes, delete it!'
    //       }).then((result) => {
    //         if (result.isConfirmed) {
    //             const list = [...listColor];
    //             list.splice(index, 1);
    //             setListColor(list);
    //             swal.fire(
    //                 'Deleted!',
    //                 'Your color has been deleted.',
    //                 'success'
    //           )
    //         }
    //       })
        
    // };

    const handleSelectType = (value)=>{
        setArrBlog({
            ...arrInput,typeId:value
        })

    }
    const handleSubmitColor = (colorId)=>{
        console.log("colorId: ",colorId)
        for(let i=0;i<colorId.length;i++){
            setArrColor([...arrColor,colorId[i]])
        }
        
    }
    const formValid = ({ ...rest }) => {
        let valid = true;
        if(rest.name === ''&& rest.image === '' && rest.quantity=== '' && rest.price === '' && rest.typeId==='' && rest.slug === '' ){
            return valid === false; 
        }
        return valid;
    };
    
    const handleAddNewBlog = ()=>{
        console.log("array:",arrInput);
        const {name,image,price,discount,discountPer,quantity,slug,content,hidden,newArrival,typeId}=arrInput;
        const formDataBlog = new FormData();
        formDataBlog.append('name',name)
        formDataBlog.append('image',image)
        formDataBlog.append('price',price)
        formDataBlog.append('discount',discount)
        formDataBlog.append('discountPer',discountPer)
        formDataBlog.append('quantity',quantity)
        formDataBlog.append('slug',slug)
        formDataBlog.append('content',content)
        formDataBlog.append('hidden',hidden)
        formDataBlog.append('newArrival',newArrival)
        formDataBlog.append('typeId',typeId)
        if(formValid(arrInput)){
            console.log("dung")
            swal.fire({
                title: 'Are you sure?',
                text: "You want to Add New Blog?",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Add!'
              }).then(async(result) => {
                if (result.isConfirmed) {
                    let list = await createNewBlogService(formDataBlog);
                    if(list.data && list.data.errCode !== 0 ){
                        swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: list.data.message,
                            })
                    }
                    if(list.data && list.data.errCode === 0 ){
                        // add colors
                        const data = {BlogName:name,colorId: arrColor}
                        let listDetail = await createNewBlogColorService(data)
                        if(listDetail.data && listDetail.data.errCode !== 0){
                            swal.fire({
                                icon: 'error',
                                title: 'Oops...',
                                text: listDetail.data.message,
                                })
                        }
                        if(listDetail.data && listDetail.data.errCode === 0){
                            const formDataGalleries = new FormData();
                            formDataGalleries.append('BlogName',name)
                            for(let i=0;i<images.length;i++){
                                formDataGalleries.append('gallery',images[i].file)
                            }
                            // add galleries
                            let listGalleries = await createNewBlogGalleriesService(formDataGalleries);
                            if(listGalleries.data && listGalleries.data.errCode !== 0){
                                swal.fire({
                                    icon: 'error',
                                    title: 'Oops...',
                                    text: listGalleries.data.message,
                                })
                            }
                            if(listGalleries.data && listGalleries.data.errCode === 0){
                                swal.fire(
                                    'Add Blog!',
                                    'Your Blog has been added.',
                                    'success'
                                )
                                window.location.href = "/admin/list-Blog"
                            }
                            
                        }
                    }
                }
              })
        }else{
            swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please check your input!',
              })
        }

    }
    
    return(
        <div className="">
            <div className="row">
                <div className="col-lg-5 col-md-9 col-lg-6">
                    <h3 className="mt-30 page-title">Blog</h3>
                </div>
                {/* <div className="col-lg-5 col-md-3 col-lg-6 back-btn">
                    <Button variant="contained" onClick={(e) => this.handleBack()}><i className="fas fa-arrow-left" /> Back</Button>
                </div> */}
            </div>
            <ol className="breadcrumb mb-30">
                <li className="breadcrumb-item"><a href="/">Dashboard</a></li>
                <li className="breadcrumb-item"><a href="/admin/Blog/create">Blog</a></li>
                <li className="breadcrumb-item active">Create A New Blog</li>
            </ol>
            <div className="form-container mt-4">
                <h4 className="form-title">Create A New Blog</h4>
                <div className="row form-body" >
                    <div className="col-md-5 mb-3">
                        <label className="form-label">Name<b className="text-danger">*</b>:</label>
                        <input 
                            type="text" 
                            required 
                            value={arrInput.name}
                            name="name" 
                            className="form-control" 
                            onChange={(event) => handleOnChange(event)} />
                    </div>
                    
                    <div className="col-md-4 mb-3">
                        <label className="form-label">Type Blog<b className="text-danger">*</b>:</label>
                        <SelectTypeBlog onSelected={handleSelectType}/>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label className="form-label">Quantity<b className="text-danger">*</b>:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            required 
                            value={arrInput.quantity} 
                            name="quantity"
                            onChange={(event) => handleOnChange(event)}
                        />
                    </div>
                    
                    <div className="col-md-5 mb-3">
                        <label className="form-label">Price<b className="text-danger">*</b>:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={arrInput.price} 
                            minLength={8} 
                            name="price" 
                            required 
                            onChange={(event) => handleOnChange(event)} 
                        />
                    </div>
                    <div className="col-md-5 mb-3">
                        <label className="form-label">Discount:</label>
                        <input 
                            type="number" 
                            className="form-control" 
                            value={arrInput.discount} 
                            minLength={8} 
                            name="discount" 
                            required 
                            onChange={(event) => handleOnChange(event)} 
                        />
                    </div>
                    {/* <div class=" mb-3">
                        <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
                        
                        </div> */}
                    <div className="col-md-2 mb-3">
                        <label className="form-label">Discount Percent:</label>
                        <div className="input-group">
                            <input 
                                type="number" 
                                className="form-control" 
                                required 
                                value={arrInput.discountPer} 
                                name="discountPer"
                                onChange={(event) => handleOnChange(event)}
                            />
                            <span class="input-group-text text-danger"><b>%</b></span>
                        </div>
                    </div>
                    <div className="col-12 mb-3">
                        <label className="form-label">Slug<b className="text-danger">*</b>:</label>
                        <input 
                            type="text" 
                            required 
                            value={arrInput.slug}
                            name="slug" 
                            className="form-control" 
                            onChange={(event) => handleOnChange(event)} />
                    </div>
                    {/* {listColor.map((item,index)=>(
                        <div className="col-12" key={index}>
                            <label className="form-label">Color<b className="text-danger">*</b>: </label>
                            <div className="d-flex algin-item-center mb-2">
                                <input type="color" value={item.color} name="color" onChange={(event)=>handleOnChangeColor(event,index)} />
                                <p className="mx-2" style={ { color: `${ item.color }`,margin:'0px' } }>{item.color}</p>
                                {listColor.length !== 1 && (
                                    <button
                                    type="button"
                                    onClick={() => handleRemoveColor(index)}
                                    className="btn btn-primary"
                                    >
                                    <span>Remove</span>
                                    </button>
                                )}
                            </div>
                            {listColor.length - 1 === index && listColor.length < 4 && (
                                <div className="col-12 ">
                                    <button type="button" className="btn btn-primary" onClick={handleAddColor} >+ Add color</button>
                                </div>
                            )}
                            
                        </div>
                        
                            
                    ))}  */}
                    <div className="col-12 mb-3">
                        <label className="form-label">Color:</label>
                        <SelectColor onSelected={handleSubmitColor}/>
                    </div>

                    <div class="col-12 mb-3">
                        <label className="form-label">Image<b className="text-danger">*</b>:</label>
                        <input 
                            className="form-control" 
                            type="file" 
                            name="file"
                            onChange={(event)=> handleChangeImage(event)}
                            />
                    </div>
                    
                    <div className="col-12 mb-3">
                        <label className="form-label">Library:</label>
                        <ImageUploading
                            multiple
                            value={images}
                            onChange={onChange}
                            maxNumber={maxNumber}
                            dataURLKey="data_url"
                        >
                            {({
                            imageList,
                            onImageUpload,
                            onImageRemoveAll,
                            onImageUpdate,
                            onImageRemove,
                            isDragging,
                            dragProps,
                            }) => (
                            // write your building UI
                            <div className="upload__image-wrapper">
                                <button className="btn-upload"
                                        style={isDragging ? { color: 'red' } : undefined}
                                        onClick={onImageUpload}
                                        {...dragProps}
                                        >
                                    <i class="fa-solid fa-upload"></i><br />
                                    <b>Add images</b>
                                </button>
                                &nbsp;
                                <button className="btn" onClick={onImageRemoveAll}><i class="fa-solid fa-delete-left"></i> Delete all images</button>
                                <div className="row my-2 py-2">
                                {imageList.map((image, index) => (
                                    <div key={index} className="container-img col-3">
                                        <img src={image['data_url']} alt="" width="150" className="my-3" />
                                        <button className="btn-remove" onClick={() => onImageRemove(index)}><i class="fa-solid fa-minus"></i></button>
                                        <button className="btn-update" onClick={() => onImageUpdate(index)}><i class="fa-regular fa-pen-to-square"></i></button>
                                    </div>                                        
                                ))}

                                </div>
                            </div>
                            )}
                        </ImageUploading>
                    </div>

                    <div className="col-12 mb-3">
                        <label className="form-label">Content<b className="text-danger">*</b>:</label>
                        <RichTextEditor 
                            content={arrInput.content}
                            handleContentChange={handleContentChange}
                            placeholder="..."                            
                            // boolean={readOnlyEditor}
                        />
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="hidden" name="hidden" checked={arrInput.hidden} 
                                onChange={(e) => {
                                    handleOnChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    },
                                    });
                                }} 

                                />
                            <label className="form-check-label" htmlFor="hidden">Hidden</label>
                        </div>
                       
                    </div>
                    <div className="col-md-3 mb-3">
                        <div class="form-check form-switch">
                            <input className="form-check-input" type="checkbox" role="switch" id="newArrival" name="newArrival" checked={arrInput.newArrival} 
                                 onChange={(e) => {
                                    handleOnChange({
                                    target: {
                                        name: e.target.name,
                                        value: e.target.checked,
                                    },
                                    });
                                }} 
                             />
                            <label className="form-check-label" htmlFor="newArrival">New Arrival</label>
                        </div>
                    </div>
                    <div className="mt-3 text-end">
                        <Button style={{backgroundColor:"#5046e5"}} className="me-3" onClick={handleAddNewBlog}>Thêm </Button>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default AddBlog;
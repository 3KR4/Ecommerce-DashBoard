import { useState, useEffect, useRef } from "react";
import { useForm, useFieldArray, Controller } from 'react-hook-form';
import CloudUploadIcon from '@mui/icons-material/CloudUpload';
import CloseIcon from '@mui/icons-material/Close';
import { AiOutlineExclamationCircle } from "react-icons/ai";
import { FaAngleDown } from 'react-icons/fa';
import { allProducts, categories, brands } from '../../components/data';


const CreateProducts = () => {
  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm();
  const priceRegex = /^\d+\.\d{2}$|^\d+\.\d{1}$|^\d+$/;

  const queryParams = new URLSearchParams(window.location.search);
  const editProductId = queryParams.get('edit');

  // Images
  const [images, setImages] = useState([]);
  const inputFileRef = useRef(null);
  const [isDrag, setIsDrag] = useState(false);
  const [isSubmited, setisSubmited] = useState(false);
  let isThereImg = false;

  console.log(images);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDrag(false);
    const files = Array.from(e.dataTransfer.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setImages(prevImages => [...prevImages, ...imageFiles]);
  };
  const handleInputChange = (e) => {
    const files = Array.from(e.target.files);
    const imageFiles = files.filter(file => file.type.startsWith('image/'));
    setImages(prevImages => [...prevImages, ...imageFiles]);
  };
  const handleRemoveImage = (index) => {
    setImages(prevImages => prevImages.filter((image, i) => i !== index));
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    setIsDrag(true);
  };
  const handleLabelClick = () => {
    inputFileRef.current.click();
  };
  useEffect(() => {
    if (images.length === 0) {
      isThereImg = true;
    } else {
      isThereImg = false;
    }
  }, [images.length]);

  // Category Select 
  const [selectOpen, setSelectOpen] = useState({
    brand: false,
    category: false,
    type: false,
  });
  const toggleselectOpen = (menu) => {
    setSelectOpen(prevState => ({
      ...prevState,
      brand: menu === 'brand' ? !prevState['brand'] : false,
      category: menu === 'category' ? !prevState['category'] : false,
      type: menu === 'type' ? !prevState['type'] : false,
    }));
  };
  const [selectChange, setSelectChange] = useState({
    brand: 'Choose',
    category: 'Choose',
    type: 'Choose',
  });
  const showSelectChange = (key, value) => {
    setSelectChange(prevState => ({
      ...prevState,
      [key]: value
    }));
  };

  // Tags 
  const [tags, setTags] = useState([]);
  const [tagInput, setTagInput] = useState('');

  const handleTagInputChange = (e) => {
    setTagInput(e.target.value);
  };
  const addTag = (e) => {
    e.preventDefault();
    if (tagInput.trim() && !tags.includes(tagInput.trim())) {
      setTags([...tags, tagInput.trim()]);
      setTagInput('');
    }
  };
  const removeTag = (indexToRemove) => {
    setTags(tags.filter((_, index) => index !== indexToRemove));
  };

  // specifications
  const [specifications, setSpecifications] = useState([{ key: '', value: '' }]);
  const [specError, setSpecError] = useState(false);
  
  const addSpecification = () => {
    if (specifications.length === 0 || (specifications[specifications.length - 1].key.trim() !== '' && specifications[specifications.length - 1].value.trim() !== '')) {
      setSpecError(false);
      setSpecifications([...specifications, { key: '', value: '' }]);
    } else {
      setSpecError(true);
    }
  };
  const removeSpecification = (index) => {
    const newSpecifications = specifications.filter((_, i) => i !== index);
    setSpecifications(newSpecifications);
    setSpecError(false);
  };
  const handleSpecificationChange = (index, type, value) => {
    const newSpecifications = [...specifications];
    newSpecifications[index][type] = value;
    setSpecifications(newSpecifications);
    setSpecError(false);
  };



  useEffect(() => {
    if (editProductId) {
      const productToEdit = allProducts.find((product) => product.id === +editProductId);

      if (productToEdit) {
        setValue('name', productToEdit.name);
        setValue('stock', productToEdit.stock);
        setValue('price', productToEdit.price);
        setValue('sale', productToEdit.sale);
        setValue('details', productToEdit.details);
        setValue('aboutInfo', productToEdit.about);
        setTags(productToEdit.tags || []);
        setImages(productToEdit.Images || []);
        setSelectChange({
          brand: productToEdit.brand || 'Choose',
          category: productToEdit.category || 'Choose',
          type: productToEdit.type || 'Choose',
        });
        setSpecifications(Object.entries(productToEdit.specifications || {}).map(([key, value]) => ({ key, value })));
      }
    }
  }, [editProductId, setValue]);


  const onSubmit = (data) => {
    const specificationsObject = specifications.reduce((obj, item) => {
      if (item.key.trim() !== '') {
        obj[item.key] = item.value;
      }
      return obj;
    }, {});
  
    const formData = {
      ...data,
      tags,
      images,
      category: selectChange.category,
      brand: selectChange.brand,
      type: selectChange.type,
      specifications: specificationsObject, 
    };
  
    if (images.length !== 0 && selectChange.brand != 'Choose' && selectChange.category != 'Choose' && selectChange.category != 'Choose') {
      console.log(formData);
    }
  };

  return (
    <div className='addProductPage container'>
      <h2 className="sectionTitle">{editProductId ? 'Edit Product' : 'Add Product'}</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="formHolder">
          <div className="rowHolder">
            {/* NAME */}
            <div className={`inputHolder ${errors.name ? 'notvalid' : ''}`}>
              <h6 className="placeHolder" onClick={() => document.getElementById('productName').focus()}>Product Name</h6>
              <div className="holder">
                <input
                  type="text"
                  id="productName"
                  {...register("name", {
                    required: "Please enter The Product Name",
                    minLength: {
                      value: 3,
                      message: "Please enter at least 3 characters"
                    }
                  })}
                  placeholder="Product Name"
                />
              </div>
              {errors.name && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.name.message}
                </span>
              )}
            </div>

            {/* Stock */}
            <div className={`inputHolder ${errors.stock ? 'notvalid' : ''}`}>
              <h6 className="placeHolder" onClick={() => document.getElementById('stockQuantity').focus()}>Stock Quantity</h6>
              <div className="holder">
                <input
                  type="text"
                  id="stockQuantity"
                  {...register("stock", {
                    required: "Please enter the Stock Quantity",
                    pattern: {
                      value: /^\d+$/,
                      message: "Please enter a valid Stock Quantity"
                    }
                  })}
                  placeholder="Stock Quantity"
                />
              </div>
              {errors.stock && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.stock.message}
                </span>
              )}
            </div>
          </div>

          {/* PRICE */}
          <div className="rowHolder">
            <div className={`inputHolder ${errors.price ? 'notvalid' : ''}`}>
              <h6 className="placeHolder" onClick={() => document.getElementById('productPrice').focus()}>Product Price</h6>
              <div className="holder">
                <input
                  type="text"
                  id="productPrice"
                  {...register("price", {
                    required: "Please enter the Product Price",
                    pattern: {
                      value: priceRegex,
                      message: "Please provide a valid Price"
                    }
                  })}
                  placeholder="Product Price"
                />
              </div>
              {errors.price && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.price.message}
                </span>
              )}
            </div>

            <div className={`inputHolder ${errors.sale ? 'notvalid' : ''}`}>
              <h6 className="placeHolder" onClick={() => document.getElementById('salePercentage').focus()}>Sale Percentage</h6>
              <div className="holder">
                <input
                  type="text"
                  id="salePercentage"
                  {...register("sale", {
                    required: "Please enter the Sale Percentage",
                    pattern: {
                      value: /^(\d{1,2}(\.\d{1,2})?|100(\.0{1,2})?)$/,
                      message: "Please enter a valid sale percentage (0-100)"
                    }
                  })}
                  placeholder="Sale Percentage"
                />
              </div>
              {errors.sale && (
                <span>
                  <AiOutlineExclamationCircle />
                  {errors.sale.message}
                </span>
              )}
            </div>
          </div>

          {/* CATEGORY */}
          <div className="rowHolder">
            <div className={`selectHolder ${selectChange.brand !== 'Choose' ? 'active' : ''}`} onClick={() => toggleselectOpen('brand')}>
              <div className="holder">
                <h4>Brand:</h4> 
                <span className="span">{selectChange.brand} <FaAngleDown className={selectOpen.brand ? 'open' : ''}/></span>
                <ul className={`select ${selectOpen.brand ? 'active' : ''}`}>
                  <li key={'other'} onClick={() => showSelectChange('brand', 'not available')}>Not Available</li>
                  {brands.map((x) => (  
                    <li key={x.id} onClick={() => showSelectChange('brand', x.id)}>{x.id}</li>
                  ))}
                </ul>
              </div>
                {selectChange.brand == 'Choose' && isSubmited &&(
                  <span className="error">
                    <AiOutlineExclamationCircle />
                    please select the product brand
                  </span>
                )}
            </div>
            <div className={`selectHolder ${selectChange.category !== 'Choose' ? 'active' : ''}`} onClick={() => toggleselectOpen('category')}>
            <div className="holder">
              <h4>Category:</h4> 
              <span className="span">{selectChange.category} <FaAngleDown className={selectOpen.category ? 'open' : ''}/></span>
                <ul className={`select ${selectOpen.category ? 'active' : ''}`}>
                  {categories.map((x) => (  
                    <li key={x.id} onClick={() => showSelectChange('category', x.id)}>{x.id}</li>
                  ))}
                </ul>
              </div>
              {selectChange.category == 'Choose' && isSubmited && (
                  <span className="error">
                    <AiOutlineExclamationCircle />
                    please select the product category
                  </span>
                )}
            </div>
            <div className={`selectHolder ${selectChange.type !== 'Choose' ? 'active' : ''}`} onClick={() => { if (selectChange.category !== 'Choose') {
              toggleselectOpen('type');
            }}}>
              <div className="holder">
                <h4>type:</h4> 
                <span className="span">{selectChange.category == 'Choose' ? 'Choose Category First' : selectChange.type } <FaAngleDown className={selectOpen.type ? 'open' : ''}/></span>
                <ul className={`select ${selectOpen.type ? 'active' : ''}`}>
                  {categories.find((x) => x.id === selectChange.category)?.list.map((x) => (
                    <li key={x.id} onClick={() => { showSelectChange('type', x.id) }} value={x.id}>{x.id}</li>
                  ))}
                </ul>
              </div>
              {selectChange.type == 'Choose' && isSubmited && (
                <span className="error">
                  <AiOutlineExclamationCircle />
                  please select the product type
                </span>
              )}
            </div>
          </div>

          {/* Details */}
          <div className={`inputHolder ${errors.details ? 'notvalid' : ''}`}>
            <h6 className="placeHolder" onClick={() => document.getElementById('productDetails').focus()}>Product Details</h6>
            <div className="holder">
              <input
                type="text"
                id="productDetails"
                {...register("details", {
                  required: "Please enter the Product Details",
                  minLength: {
                    value: 15,
                    message: "Enter at least 15 characters"
                  }
                })}
                placeholder="Product Details"
              />
            </div>
            {errors.details && (
              <span>
                <AiOutlineExclamationCircle />
                {errors.details.message}
              </span>
            )}
          </div>

          {/* Tags */}
          <div className="inputHolder tags">
            <h6 className="placeHolder" onClick={() => document.getElementById('productTags').focus()}>Product Tags (optional)</h6>
            <div className="holder">
              <input
                type="text"
                id="productTags"
                value={tagInput}
                onChange={handleTagInputChange}
                placeholder="Product Tags (optional)"
              />
              <button onClick={addTag}>Add</button>
            </div>
            <div className="tagsHolder">
              {tags.length === 0 && (
                <pre className="placeHolder">#0000   #0000   #0000   #0000   #0000</pre>
              )}
              {tags.map((tag, index) => (
                <div key={index} className="tag">
                  <span>#{tag}</span>
                  <button type="button" className="remove" onClick={() => removeTag(index)}>x</button>
                </div>
              ))}
            </div>
          </div>

          <div className="rowHolder">
            <div className="divhasspecificHolder">
              {/* specification */}
              <div className="specificHolder">
                <pre className="placeHolder">Add Specification (optional)</pre>
                {specifications.length > 0 && (
                  <div className="holder">
                    {specifications.map((spec, index) => (
                      <div key={index} className="inputHolder">
                        <input
                          type="text"
                          value={spec.key}
                          onChange={(e) => handleSpecificationChange(index, 'key', e.target.value)}
                          placeholder="Key"
                          className={specError && index === specifications.length - 1 && spec.key.trim() === '' ? 'notvalid' : ''}
                        />
                        <input
                          type="text"
                          value={spec.value}
                          onChange={(e) => handleSpecificationChange(index, 'value', e.target.value)}
                          placeholder="Value"
                          className={specError && index === specifications.length - 1 && spec.value.trim() === '' ? 'notvalid' : ''}
                        />
                        <button type="button" className="remove" onClick={() => removeSpecification(index)}>x</button>
                      </div>
                    ))}
                  </div>
                )}
                <div className="btnHolder">
                  {specError && (
                    <span className="error">
                      <AiOutlineExclamationCircle />
                      please enter the last key and value first
                    </span>
                  )}
                  <button type="button" className="button" onClick={addSpecification}>
                    {specifications.length === 0 ? 'Add' : 'Add More'}
                  </button>
                </div>
                
              </div>
              <button type="submit" className="main-buttom" onClick={() => {
                setisSubmited(true)
              }}>
                {editProductId ? 'Update Product' : 'Create Product'}
              </button>
              </div>
            {/* ABOUT */}
            <div className="holder">
              <div className={`inputHolder ${errors.aboutInfo ? 'notvalid' : ''}`}>
                <h6 className="placeHolder" onClick={() => document.getElementById('productInfo').focus()}>Product Info (optional)</h6>
                <div className="holder">
                  <textarea
                    id="productInfo"
                    {...register("aboutInfo")}
                    placeholder="Product Info (optional)"
                    rows={5}
                  />
                </div>
                {errors.aboutInfo && (
                  <span>
                    <AiOutlineExclamationCircle />
                    {errors.aboutInfo.message}
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="productImages">
          <div 
            className={`uploadlabel ${isDrag ? "active" : null}`} 
            style={{ height: images.length ? '180px' : '376px', border: `3px dashed ${images.length === 0 && isSubmited ? '#f43521' : '#f2c23d'}`}}
            onClick={handleLabelClick}
            onDrop={handleDrop} 
            onDragOver={handleDragOver}
          >
            <CloudUploadIcon style={{color: images.length === 0 && isSubmited ? '#F43621E6' : '#f2c23d',}}/>
            <p style={{color: images.length === 0 && isSubmited ? '#f43521' : '#f2c23d',}}>Click Or Drop Images Here</p>
            <h1 style={{color: images.length === 0 && isSubmited ? '#f43521' : '#f2c23d',}}>{isDrag ? "Drop Here!!" : "Click Here!!"}</h1>
          </div>

          <input 
            type="file"
            accept="image/*"
            multiple 
            hidden
            ref={inputFileRef}
            onChange={handleInputChange} 
          />
          <div className="imgHolder">
            {images.map((image, index) => (
              <div className="uploaded" key={index}>
                <div>
                {editProductId ? (
                  typeof image === 'string' ? (
                    <img src={image} alt="Blog" width="150" />
                  ) : (
                    <img src={URL.createObjectURL(image)} alt={image.name} width="150" />
                  )
                ) : (
                  <img src={URL.createObjectURL(image)} alt={image.name} width="150" />
                )}
                  <p>{image.name ? 'Name:' : 'Number:'} {image.name || index}</p>
                </div>
                <CloseIcon onClick={() => handleRemoveImage(index)}/>
              </div>
            ))}
          </div>
        </div>
        <button type="submit" className="main-buttom" onClick={() => {
              setisSubmited(true)
        }}>
          {editProductId ? 'Update Product' : 'Create Product'}
        </button>
      </form>
    </div>
  );
};

export default CreateProducts;
